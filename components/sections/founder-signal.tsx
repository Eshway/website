"use client";

import Image from "next/image";
import avatar from "@/public/avatar.jpg";
import { ShieldCheck } from "lucide-react";

function Pill({ children }: { children: React.ReactNode }) {
    return (
        <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/35 px-3 py-1 font-mono text-[11px] text-foreground/75 backdrop-blur-md">
            {children}
        </span>
    );
}

function Stat({ label, value }: { label: string; value: string }) {
    return (
        <div>
            <div className="font-mono text-[11px] tracking-tight text-foreground/55">
                {label}
            </div>
            <div className="mt-1 font-inter text-base font-semibold text-foreground sm:text-lg">
                {value}
            </div>
        </div>
    );
}

export default function FounderSignalSection() {
    return (
        <section
            id="founder-signal"
            className="relative overflow-hidden bg-background py-16 sm:py-24"
        >
            {/* Background continuity */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
                <div className="absolute inset-0 opacity-45 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />

                {/* Fade-in at top (prevents seam with Capabilities) */}
                <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_22%,black)]">
                    <div className="absolute left-1/2 -top-10 h-120 w-220 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
                    <div className="absolute left-1/2 top-18 h-88 w-176 -translate-x-1/2 rounded-full bg-primary/10 blur-3xl" />
                </div>

                {/* Fade-out at bottom (prevents seam with Engagement Fit) */}
                <div className="absolute inset-0 mask-[linear-gradient(to_top,transparent,black_30%,black)]">
                    <div className="absolute left-1/2 bottom-[-80px] h-120 w-220 -translate-x-1/2 rounded-full bg-emerald-500/8 blur-3xl" />
                </div>
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
                    <div>
                        <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
              /// THE FOUNDER'S SIGNAL
                        </div>
                        <h2 className="mt-3 font-inter text-3xl font-semibold tracking-tight text-foreground sm:text-5xl">
                            The Architect is in the loop.
                        </h2>
                    </div>

                    <div className="flex flex-wrap items-center gap-2">
                        <Pill>
                            <ShieldCheck className="h-3.5 w-3.5 text-fuchsia-200" />
                            clearance: L5
                        </Pill>
                        <Pill>status: active</Pill>
                        <Pill>id: ESH-042</Pill>
                    </div>
                </div>

                {/* ID Card */}
                <div className="mt-8 overflow-hidden rounded-3xl border border-fuchsia-500/25 bg-background/18 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_30px_140px_-80px_rgba(0,0,0,0.90)] backdrop-blur-md">
                    {/* Glow border */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-linear-to-r from-fuchsia-500/12 via-primary/12 to-emerald-500/10 blur-2xl opacity-80"
                    />

                    {/* Grid overlay */}
                    <div
                        aria-hidden="true"
                        className="pointer-events-none absolute inset-0 opacity-55 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]"
                    />

                    <div className="relative grid gap-6 p-5 sm:p-8 md:grid-cols-[160px_1fr_1fr] md:items-center">
                        {/* Photo */}
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/10">
                            <div aria-hidden="true" className="absolute inset-0 bg-linear-to-br from-black/25 via-transparent to-black/20" />
                            <Image
                                src={avatar}
                                alt="Eshu headshot"
                                placeholder="blur"
                                sizes="(min-width: 768px) 160px, 35vw"
                                className="relative aspect-square w-full object-cover grayscale contrast-110 saturate-0"
                                draggable={false}
                            />
                        </div>

                        {/* Stats */}
                        <div className="grid gap-4 sm:grid-cols-2 sm:gap-6">
                            <Stat label="name" value="Eshu" />
                            <Stat label="education" value="IIT Bombay (’24)" />
                            <Stat label="role" value="Lead Architect" />
                            <Stat label="focus" value="High-Performance Systems" />
                        </div>

                        {/* Philosophy */}
                        <div className="relative">
                            <div
                                aria-hidden="true"
                                className="absolute left-0 top-0 h-full w-px bg-linear-to-b from-transparent via-fuchsia-500/40 to-transparent"
                            />
                            <div className="pl-5 sm:pl-6">
                                <div className="font-mono text-[11px] tracking-[0.24em] text-foreground/55">
                  /// PHILOSOPHY
                                </div>
                                <blockquote className="mt-3 font-geist text-sm leading-relaxed text-foreground/80 sm:text-base">
                                    “I saw too many brilliant ideas die from poor technical execution. Eshway exists to ensure your technology is as ambitious as your vision.”
                                </blockquote>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

