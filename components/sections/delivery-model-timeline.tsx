"use client";

import {
    motion,
    useMotionValueEvent,
    useScroll,
    useTransform,
} from "motion/react";
import { useEffect, useMemo, useRef, useState } from "react";
import type { ComponentType } from "react";
import { Box, CheckCircle2, Compass, ShieldCheck } from "lucide-react";

type TimelineSide = "left" | "right";

type DeliveryStep = {
    number: string;
    title: string;
    subtitle: string;
    description: string;
    side: TimelineSide;
    Icon: ComponentType<{ className?: string }>;
};

const STEPS: DeliveryStep[] = [
    {
        number: "01.",
        title: "The Blueprint",
        subtitle: "(Scope)",
        description:
            "We define every deliverable before code is written. No vague “exploratory phases.” You know exactly what is being built and when.",
        side: "right",
        Icon: Compass,
    },
    {
        number: "02.",
        title: "The Glass Box",
        subtitle: "(Visibility)",
        description:
            "You get a window into our internal execution system. You see the backlog, the blockers, and the velocity. Real-time, un-curated reality.",
        side: "left",
        Icon: Box,
    },
    {
        number: "03.",
        title: "The Engineering Standard",
        subtitle: "(Quality)",
        description:
            "Every line of code undergoes rigid architectural review. We apply IIT Bombay-grade engineering principles to ensure scale, security, and cleanliness.",
        side: "right",
        Icon: ShieldCheck,
    },
    {
        number: "04.",
        title: "Verified Delivery",
        subtitle: "(Closure)",
        description:
            "Features are not just “done”; they are verified against the initial blueprint. We hand over IP, documentation, and a deployment-ready asset.",
        side: "left",
        Icon: CheckCircle2,
    },
];

function StepCard({
    step,
    align,
    active,
}: {
    step: DeliveryStep;
    align: TimelineSide;
    active: boolean;
}) {
    const isRight = align === "right";

    return (
        <div
            className={[
                "relative max-w-md",
                isRight ? "text-left" : "text-right",
            ].join(" ")}
        >
            <div
                className={[
                    "absolute -inset-2 rounded-3xl blur-2xl transition-opacity duration-300",
                    active
                        ? "bg-linear-to-r from-fuchsia-500/22 via-primary/22 to-emerald-500/18 opacity-100"
                        : "bg-linear-to-r from-fuchsia-500/10 via-primary/15 to-emerald-500/10 opacity-65",
                ].join(" ")}
            />
            <div
                className={[
                    "relative rounded-2xl border bg-background/35 p-5 backdrop-blur-md transition-all duration-300",
                    active
                        ? "border-fuchsia-500/30 ring-1 ring-fuchsia-500/25 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_26px_80px_-40px_rgba(216,109,252,0.65)]"
                        : "border-border/35 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_12px_40px_-20px_rgba(0,0,0,0.45)]",
                ].join(" ")}
            >
                <div className="flex items-baseline gap-2">
                    <span className="font-mono text-sm tracking-tight text-[#d86dfc]">
                        {step.number}
                    </span>
                    <div className="font-inter text-base font-semibold text-foreground">
                        {step.title}{" "}
                        <span className="font-inter text-base font-medium text-foreground/70">
                            {step.subtitle}
                        </span>
                    </div>
                </div>
                <p className="mt-2 font-geist text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                </p>
            </div>
        </div>
    );
}

function StepNode({ step, active }: { step: DeliveryStep; active: boolean }) {
    const Icon = step.Icon;

    return (
        <div className="relative z-10 flex h-14 w-14 items-center justify-center">
            <div
                className={[
                    "absolute -inset-3 rounded-3xl blur-2xl transition-opacity duration-300",
                    active ? "bg-fuchsia-500/35 opacity-100" : "bg-primary/25 opacity-60",
                ].join(" ")}
            />
            <div
                className={[
                    "relative flex h-12 w-12 items-center justify-center rounded-2xl border bg-background/35 shadow-sm backdrop-blur-md transition-all duration-300",
                    active
                        ? "border-fuchsia-500/40 ring-1 ring-fuchsia-500/35 shadow-[0_0_0_1px_rgba(216,109,252,0.20),0_20px_60px_-30px_rgba(216,109,252,0.65)]"
                        : "border-border/40",
                ].join(" ")}
            >
                <Icon
                    className={[
                        "h-6 w-6 transition-colors duration-300",
                        active ? "text-fuchsia-200" : "text-[#d86dfc]",
                    ].join(" ")}
                />
            </div>
        </div>
    );
}

export default function DeliveryModelTimelineSection() {
    const containerRef = useRef<HTMLDivElement>(null);
    const measureRef = useRef<HTMLDivElement>(null);
    const [height, setHeight] = useState(0);
    const [activeSteps, setActiveSteps] = useState<boolean[]>(
        () => new Array(STEPS.length).fill(false),
    );

    // Store refs for nodes in both responsive layouts (only one is visible at a time)
    const nodeRefs = useRef<
        Array<{ mobile: HTMLDivElement | null; desktop: HTMLDivElement | null }>
    >([]);

    const setNodeRef = (index: number, which: "mobile" | "desktop") => {
        return (el: HTMLDivElement | null) => {
            nodeRefs.current[index] = {
                mobile: nodeRefs.current[index]?.mobile ?? null,
                desktop: nodeRefs.current[index]?.desktop ?? null,
                [which]: el,
            };
        };
    };

    useEffect(() => {
        const el = measureRef.current;
        if (!el) return;

        const update = () => setHeight(el.getBoundingClientRect().height);
        update();

        const ro = new ResizeObserver(update);
        ro.observe(el);
        window.addEventListener("resize", update);

        return () => {
            ro.disconnect();
            window.removeEventListener("resize", update);
        };
    }, []);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 25%", "end 70%"],
    });

    const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
    const opacityTransform = useTransform(scrollYProgress, [0, 0.06], [0, 1]);
    const headY = useTransform(scrollYProgress, [0, 1], [0, height]);

    const fallbackNodePositions = useMemo(() => {
        if (STEPS.length <= 1) return [0];
        return STEPS.map((_, i) => (i / (STEPS.length - 1)) * height);
    }, [height]);

    useMotionValueEvent(scrollYProgress, "change", (p) => {
        const containerEl = measureRef.current;
        if (!containerEl || height <= 0) return;

        const containerRect = containerEl.getBoundingClientRect();
        const currentPx = p * height;
        const next = STEPS.map((_, i) => {
            const refs = nodeRefs.current[i];
            const desktopEl = refs?.desktop ?? null;
            const mobileEl = refs?.mobile ?? null;
            const visibleEl =
                desktopEl && desktopEl.offsetParent !== null
                    ? desktopEl
                    : mobileEl && mobileEl.offsetParent !== null
                        ? mobileEl
                        : null;

            const targetPx = visibleEl
                ? visibleEl.getBoundingClientRect().top -
                containerRect.top +
                visibleEl.getBoundingClientRect().height / 2
                : fallbackNodePositions[i] ?? 0;

            // small early trigger so the glow starts just before the head overlaps the icon
            return currentPx >= targetPx - 12;
        });

        setActiveSteps((prev) => {
            if (prev.length !== next.length) return next;
            for (let i = 0; i < prev.length; i++) {
                if (prev[i] !== next[i]) return next;
            }
            return prev;
        });
    });

    return (
        <section
            id="delivery-model"
            className="relative overflow-hidden bg-background py-20 sm:py-32"
        >
            {/* Background glow + vignette (match site-wide system aesthetic + avoid seams) */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
                <div className="absolute inset-0 opacity-40 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />
                {/* Fade in at top and out at bottom so it blends between sections */}
                <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_22%,black_82%,transparent)]">
                    <div className="absolute left-1/2 -top-8 h-120 w-220 -translate-x-1/2 rounded-full bg-primary/14 blur-3xl" />
                    <div className="absolute left-1/2 top-18 h-88 w-176 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
                    <div className="absolute left-1/2 top-44 h-72 w-152 -translate-x-1/2 rounded-full bg-emerald-500/8 blur-3xl" />
                </div>
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center">
                    <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
            /// THE DELIVERY MODEL
                    </div>
                    <h2 className="mt-3 font-inter text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                        Predictable Results. By Design.
                    </h2>
                </div>

                <div ref={containerRef} className="relative mx-auto mt-14 max-w-5xl">
                    {/* Center spine (desktop) */}
                    <div
                        aria-hidden="true"
                        style={{ height: height ? `${height}px` : undefined }}
                        className="absolute left-1/2 top-0 hidden -translate-x-1/2 lg:block"
                    >
                        {/* base line */}
                        <div className="absolute inset-0 w-[2px] bg-linear-to-b from-transparent via-primary/30 to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]" />
                        {/* tracing line */}
                        <motion.div
                            style={{ height: heightTransform, opacity: opacityTransform }}
                            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-linear-to-b from-fuchsia-300 via-[#d86dfc] to-transparent"
                        />
                        {/* head glow */}
                        <motion.div
                            style={{ y: headY, opacity: opacityTransform }}
                            className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/30 blur-xl"
                        />
                    </div>

                    {/* Left spine (mobile/tablet) */}
                    <div
                        aria-hidden="true"
                        style={{ height: height ? `${height}px` : undefined }}
                        className="absolute left-5 top-0 lg:hidden"
                    />

                    {/* Mobile spine contents */}
                    <div
                        aria-hidden="true"
                        style={{ height: height ? `${height}px` : undefined }}
                        className="absolute left-5 top-0 lg:hidden"
                    >
                        <div className="absolute inset-0 w-[2px] bg-linear-to-b from-transparent via-primary/25 to-transparent mask-[linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]" />
                        <motion.div
                            style={{ height: heightTransform, opacity: opacityTransform }}
                            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-linear-to-b from-fuchsia-300 via-[#d86dfc] to-transparent"
                        />
                        <motion.div
                            style={{ y: headY, opacity: opacityTransform }}
                            className="absolute left-1/2 top-0 h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full bg-fuchsia-400/30 blur-xl"
                        />
                    </div>

                    <div ref={measureRef} className="space-y-10">
                        {STEPS.map((step, idx) => (
                            <div key={step.number} className="relative">
                                {/* Mobile layout */}
                                <div className="flex gap-5 lg:hidden">
                                    <div ref={setNodeRef(idx, "mobile")} className="mt-1 shrink-0">
                                        <StepNode step={step} active={activeSteps[idx] ?? false} />
                                    </div>
                                    <StepCard
                                        step={step}
                                        align="right"
                                        active={activeSteps[idx] ?? false}
                                    />
                                </div>

                                {/* Desktop layout */}
                                <div className="hidden lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-10">
                                    <div className="flex justify-end">
                                        {step.side === "left" ? (
                                            <StepCard
                                                step={step}
                                                align="left"
                                                active={activeSteps[idx] ?? false}
                                            />
                                        ) : null}
                                    </div>

                                    <div className="flex justify-center">
                                        <div ref={setNodeRef(idx, "desktop")}>
                                            <StepNode step={step} active={activeSteps[idx] ?? false} />
                                        </div>
                                    </div>

                                    <div className="flex justify-start">
                                        {step.side === "right" ? (
                                            <StepCard
                                                step={step}
                                                align="right"
                                                active={activeSteps[idx] ?? false}
                                            />
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* <div className="mt-14 text-center font-inter text-sm text-muted-foreground sm:text-base">
                        This isn’t a different workflow. This is a higher execution standard.
                    </div> */}
                </div>
            </div>
        </section>
    );
}

