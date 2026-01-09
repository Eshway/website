"use client";

import { useEffect, useMemo, useRef } from "react";

type ScrollVideoSectionProps = {
    /**
     * Height of the scroll region in viewport heights. Higher = slower scrub.
     */
    scrollLengthVh?: number;
    /**
     * Start/end padding inside the sticky viewport (for nicer framing).
     */
    className?: string;
};

export default function ScrollVideoSection({
    scrollLengthVh = 200,
    className,
}: ScrollVideoSectionProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const frameRef = useRef<HTMLDivElement | null>(null);
    const chromeRef = useRef<HTMLDivElement | null>(null);
    const baseSizeRef = useRef<{ w: number; h: number } | null>(null);

    const reducedMotion = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    }, []);

    useEffect(() => {
        if (reducedMotion) return;
        const container = containerRef.current;
        const video = videoRef.current;
        const frame = frameRef.current;
        const chrome = chromeRef.current;
        if (!container || !video) return;

        let raf = 0;
        let duration = 0;
        let lastTime = 0;

        const onLoadedMetadata = () => {
            duration = Number.isFinite(video.duration) ? video.duration : 0;
            video.currentTime = 0;
            lastTime = 0;
        };

        const clamp01 = (n: number) => Math.max(0, Math.min(1, n));
        const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

        const measureBase = () => {
            if (!frame) return;
            // Ensure we're measuring the unscaled "card" size
            frame.style.transform = "translateZ(0) scale(1)";
            const r = frame.getBoundingClientRect();
            baseSizeRef.current = { w: r.width, h: r.height };
        };

        const update = () => {
            raf = 0;
            if (!duration) return;

            const rect = container.getBoundingClientRect();
            const viewportH = window.innerHeight || 1;

            // Progress through the scroll region:
            // - when rect.top is at viewport top => start
            // - when rect.bottom has moved past viewport top => end
            const total = rect.height - viewportH;
            if (total <= 0) return;

            const progress = clamp01(-rect.top / total);
            const targetTime = progress * duration;

            // Smooth interpolation for video time (reduces jitter)
            const timeDiff = targetTime - lastTime;
            const smoothedTime = lastTime + timeDiff * 0.5; // Smoothing factor (0.5 = balanced)
            lastTime = smoothedTime;

            // Update video time more frequently for smoother playback
            if (Math.abs(video.currentTime - smoothedTime) > 0.005) {
                video.currentTime = smoothedTime;
            }

            // Zoom-in effect: start as a framed card and smoothly become full-bleed.
            if (frame) {
                const base = baseSizeRef.current;
                if (base) {
                    const availableH = Math.max(1, window.innerHeight || 1);
                    const targetScale = Math.max(
                        window.innerWidth / base.w,
                        availableH / base.h,
                    );

                    const t = easeOutCubic(progress);
                    const scale = 1 + t * (targetScale - 1);
                    const radius = (1 - t) * 24; // px

                    frame.style.transform = `translateZ(0) scale(${scale})`;
                    frame.style.borderRadius = `${radius}px`;

                    if (chrome) {
                        chrome.style.opacity = String(1 - t);
                    }
                }
            }
        };

        const requestUpdate = () => {
            if (raf) return;
            raf = window.requestAnimationFrame(update);
        };

        // Ensure metadata loads and video can be scrubbed.
        // `playsInline` + `muted` avoids iOS restrictions.
        video.addEventListener("loadedmetadata", onLoadedMetadata);
        onLoadedMetadata();
        // Measure after layout
        window.requestAnimationFrame(measureBase);

        window.addEventListener("scroll", requestUpdate, { passive: true });
        window.addEventListener("resize", () => {
            measureBase();
            requestUpdate();
        });

        // Initial paint
        requestUpdate();

        return () => {
            if (raf) window.cancelAnimationFrame(raf);
            video.removeEventListener("loadedmetadata", onLoadedMetadata);
            window.removeEventListener("scroll", requestUpdate as any);
            // resize listener is anonymous; safe no-op in most cases, but keep cleanup minimal
        };
    }, [reducedMotion]);

    return (
        <section
            aria-label="Immersive video"
            className={["relative w-full", className ?? ""].join(" ")}
        >
            {/* Scroll driver */}
            <div
                ref={containerRef}
                className="relative"
                style={{ height: `${scrollLengthVh}vh` }}
            >
                {/* Sticky viewport */}
                <div className="sticky top-0 z-50 flex h-svh w-full items-center justify-center overflow-hidden bg-background px-4 sm:px-6">
                    {/* Start as a framed card; we scale this up on scroll until it fills the viewport */}
                    <div
                        ref={frameRef}
                        className="relative w-full max-w-6xl overflow-hidden origin-center will-change-transform"
                    >
                        <video
                            ref={videoRef}
                            className="h-[70svh] w-full object-cover"
                            src="/nature.mp4"
                            preload="auto"
                            playsInline
                            muted
                            crossOrigin="anonymous"
                        />

                        {/* Card chrome that fades away as we zoom to full-bleed */}
                        <div
                            ref={chromeRef}
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 rounded-[inherit] border border-border shadow-2xl"
                        />

                        {/* Subtle overlay to keep it premium */}
                        <div
                            aria-hidden="true"
                            className="pointer-events-none absolute inset-0 bg-linear-to-t from-background/25 via-transparent to-transparent"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}


