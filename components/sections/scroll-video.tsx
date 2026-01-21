"use client";

import { useEffect, useMemo, useRef, useState } from "react";

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
    // Slightly longer by default so the scrub feels smoother with longer videos.
    scrollLengthVh = 150,
    className,
}: ScrollVideoSectionProps) {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const frameRef = useRef<HTMLDivElement | null>(null);
    const chromeRef = useRef<HTMLDivElement | null>(null);
    const baseSizeRef = useRef<{ w: number; h: number } | null>(null);
    const [isActive, setIsActive] = useState(false);

    const reducedMotion = useMemo(() => {
        if (typeof window === "undefined") return false;
        return window.matchMedia?.("(prefers-reduced-motion: reduce)")?.matches ?? false;
    }, []);

    useEffect(() => {
        const el = containerRef.current;
        if (!el) return;
        // Lazy-load the video only when this section is near the viewport.
        const io = new IntersectionObserver(
            (entries) => {
                const hit = entries.some((e) => e.isIntersecting);
                if (hit) setIsActive(true);
            },
            { root: null, rootMargin: "600px 0px", threshold: 0.01 },
        );
        io.observe(el);
        return () => io.disconnect();
    }, []);

    useEffect(() => {
        if (reducedMotion) return;
        if (!isActive) return;
        const container = containerRef.current;
        const video = videoRef.current;
        const frame = frameRef.current;
        const chrome = chromeRef.current;
        if (!container || !video) return;

        let raf = 0;
        let duration = 0;
        let lastTime = 0;
        let pendingTime: number | null = null;

        const onLoadedMetadata = () => {
            duration = Number.isFinite(video.duration) ? video.duration : 0;
            video.currentTime = 0;
            lastTime = 0;
        };

        const applyTime = (t: number) => {
            // Avoid piling on seeks; queue the latest requested time while seeking.
            if (video.seeking) {
                pendingTime = t;
                return;
            }

            pendingTime = null;

            // Prefer fastSeek where available (more efficient seeking on some browsers).
            const anyVideo = video as any;
            if (typeof anyVideo.fastSeek === "function") {
                anyVideo.fastSeek(t);
            } else {
                video.currentTime = t;
            }
        };

        const onSeeked = () => {
            if (pendingTime == null) return;
            const t = pendingTime;
            pendingTime = null;
            applyTime(t);
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
            // Slightly stronger smoothing reduces visible "step" when scrubbing compressed videos.
            const smoothedTime = lastTime + timeDiff * 0.35;
            lastTime = smoothedTime;

            // Update video time more frequently for smoother playback
            if (Math.abs(video.currentTime - smoothedTime) > 0.002) {
                applyTime(smoothedTime);
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
        video.addEventListener("seeked", onSeeked);
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
            video.removeEventListener("seeked", onSeeked);
            window.removeEventListener("scroll", requestUpdate as any);
            // resize listener is anonymous; safe no-op in most cases, but keep cleanup minimal
        };
    }, [reducedMotion, isActive]);

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
                            src={isActive ? "/output.webm" : undefined}
                            preload="metadata"
                            playsInline
                            muted
                            // Helps Safari/iOS avoid unexpected playback behavior during scrubbing.
                            controls={false}
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


