"use client";

import React, { useEffect, useRef } from "react";
import { CheckCircle2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { RetroGrid } from "../ui/retro-grid";
import { Tabs } from "../ui/tabs";
import { CASE_STUDIES, type CaseStudyDetail } from "@/lib/case-studies";

function CaseStudyCard({
    href,
    headline,
    industry,
    imageSrc,
    statusLabel,
    statusValue,
    tags,
}: {
    href: string;
} & Pick<
    CaseStudyDetail,
    "headline" | "industry" | "imageSrc" | "statusLabel" | "statusValue" | "tags"
>) {
    return (
        <Link
            href={href}
            className="group relative block h-full w-full focus:outline-hidden"
            aria-label={`Read case study: ${headline}`}
        >
            <div className="mx-auto w-full max-w-5xl">
                <div className="relative rounded-3xl border border-white/10 bg-background/25 p-4 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_30px_120px_-60px_rgba(0,0,0,0.75)] backdrop-blur-md transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_40px_140px_-70px_rgba(0,0,0,0.85)] group-focus-visible:ring-2 group-focus-visible:ring-fuchsia-500/40 sm:p-6">
                    <div className="px-1 font-geist text-sm text-foreground/70">
                        Stacked Case Study
                    </div>

                    <div className="relative mt-4 rounded-3xl border border-fuchsia-500/40 bg-background/30 p-4 shadow-[0_0_0_1px_rgba(216,109,252,0.15),0_18px_80px_-50px_rgba(216,109,252,0.85)] backdrop-blur-md transition-shadow duration-300 group-hover:shadow-[0_0_0_1px_rgba(216,109,252,0.20),0_28px_120px_-70px_rgba(216,109,252,0.95)] sm:p-6">
                        {/* Header row */}
                        <div className="flex flex-wrap items-baseline gap-x-2 gap-y-1 font-inter text-base sm:text-lg">
                            <span className="font-semibold text-foreground">{headline}</span>
                            <span className="text-foreground/50">|</span>
                            <span className="text-foreground/70">{industry}</span>
                        </div>

                        {/* Mobile status pill (avoid covering the image) */}
                        <div className="mt-4 sm:hidden">
                            <div className="inline-flex items-center gap-2 rounded-2xl border border-fuchsia-500/20 bg-background/40 px-4 py-3 shadow-[0_12px_50px_-30px_rgba(216,109,252,0.45)] backdrop-blur-md">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/15 ring-1 ring-fuchsia-500/25">
                                    <CheckCircle2 className="h-4 w-4 text-fuchsia-200" />
                                </span>
                                <div className="leading-tight">
                                    <div className="font-mono text-[11px] tracking-tight text-foreground/70">
                                        {statusLabel}
                                    </div>
                                    <div className="font-geist text-sm text-foreground">
                                        {statusValue}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Image frame */}
                        <div className="relative mt-5 overflow-hidden rounded-2xl bg-white/95 p-4 shadow-[0_18px_60px_-35px_rgba(0,0,0,0.65)] sm:p-6">
                            {/* Non-white underlay so slow image decode doesn't flash a harsh white block */}
                            <div
                                aria-hidden="true"
                                className="pointer-events-none absolute inset-0 bg-linear-to-br from-black/12 via-transparent to-black/8"
                            />
                            <Image
                                src={imageSrc}
                                alt={`${headline} preview`}
                                placeholder="blur"
                                sizes="(min-width: 1024px) 896px, 92vw"
                                className="relative h-auto w-full select-none object-contain"
                                draggable={false}
                            />

                            {/* Desktop status pill (overlay) */}
                            <div className="absolute right-6 top-6 hidden rounded-2xl border border-fuchsia-500/20 bg-background/60 px-4 py-3 shadow-[0_12px_50px_-30px_rgba(216,109,252,0.85)] backdrop-blur-md sm:block">
                                <div className="flex items-start gap-3">
                                    <span className="mt-0.5 inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/15 ring-1 ring-fuchsia-500/25">
                                        <CheckCircle2 className="h-4 w-4 text-fuchsia-200" />
                                    </span>
                                    <div className="leading-tight">
                                        <div className="font-mono text-[11px] tracking-tight text-foreground/70">
                                            {statusLabel}
                                        </div>
                                        <div className="font-geist text-sm text-foreground">
                                            {statusValue}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Tags */}
                        <div className="mt-5 flex flex-wrap gap-2">
                            {tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-background/40 px-3 py-1 font-geist text-xs text-foreground/80 backdrop-blur-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>

                        <div className="mt-6 flex items-center justify-end">
                            <span className="font-geist text-sm text-foreground/75 transition-colors duration-200 group-hover:text-foreground">
                                View full case study →
                            </span>
                </div>
                </div>
                </div>
                </div>
        </Link>
    );
}

const CaseStudies = () => {
    const sectionRef = useRef<HTMLElement | null>(null);

    // Preload case study images shortly before this section enters the viewport.
    // This prevents the brief "white frame" flash when an image is still decoding/loading.
    useEffect(() => {
        const el = sectionRef.current;
        if (!el) return;

        let started = false;
        const startPreload = () => {
            if (started) return;
            started = true;

            for (const s of CASE_STUDIES) {
                const src = (s.imageSrc as any)?.src ?? "";
                if (!src) continue;
                const img = new window.Image();
                img.decoding = "async";
                img.src = src;
            }
        };

        const io = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    startPreload();
                    io.disconnect();
                }
            },
            { rootMargin: "900px 0px" },
        );

        io.observe(el);
        return () => io.disconnect();
    }, []);

    const tabs = CASE_STUDIES.map((s) => ({
        title: s.tabTitle,
        value: s.slug,
            content: (
            <div className="min-h-[520px] sm:min-h-[700px] md:min-h-[800px]">
                <CaseStudyCard
                    href={`/case-studies/${s.slug}`}
                    headline={s.headline}
                    industry={s.industry}
                    imageSrc={s.imageSrc}
                    statusLabel={s.statusLabel}
                    statusValue={s.statusValue}
                    tags={s.tags}
                />
                </div>
            ),
    }));

    return (
        <section
            id="case-studies"
            ref={sectionRef}
            className="relative overflow-hidden bg-background py-20 sm:py-32 mt-20"
        >
            {/* Fade the grid near the bottom so the next section doesn't "hard cut" */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,black,black_70%,transparent)]"
            >
            <RetroGrid
                className="absolute inset-0"
                angle={60}
                cellSize={60}
                opacity={0.5}
                lightLineColor="#d86dfc"
                darkLineColor="#d86dfc"
            />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="text-center">
                    <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
            /// SELECTED OUTCOMES
                    </div>
                    <h2 className="mt-3 font-inter text-4xl font-semibold tracking-tight text-foreground sm:text-5xl">
                        Engineered for Growth.
                    </h2>
                </div>

                <div className="mt-10">
                    <Tabs
                        tabs={tabs}
                        containerClassName="justify-start px-2 sm:justify-center sm:px-0 gap-2 sm:gap-3"
                        tabClassName="border border-white/10 bg-background/35 text-xs sm:text-sm text-foreground/85 shadow-sm backdrop-blur-md hover:bg-background/45"
                        activeTabClassName="bg-white/10 ring-1 ring-fuchsia-500/25"
                        contentClassName="mt-10"
                    />
                </div>
            </div>
        </section>
    );
}

export default CaseStudies;