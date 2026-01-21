"use client";

import { Check, EyeOff, ShieldCheck } from "lucide-react";

export default function EshwayStandardSection() {
    return (
        <section
            id="eshway-standard"
            className="relative overflow-hidden bg-background py-20 sm:py-24"
        >
            {/* Background blur + vignette */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0"
            >
                {/* Keep base background consistent with the section above (avoid a visible horizontal seam) */}
                <div className="absolute inset-0 bg-linear-to-b from-background to-background" />
                {/* Subtle grid to match the "system" theme */}
                <div className="absolute inset-0 opacity-40 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />

                {/* Fade in/out so the section blends with neighbors (no hard top/bottom seams) */}
                <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_22%,black_82%,transparent)]">
                    <div className="absolute left-1/2 top-10 h-112 w-192 -translate-x-1/2 rounded-full bg-primary/15 blur-3xl" />
                    <div className="absolute left-1/2 top-32 h-88 w-168 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
                </div>
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <div className="relative grid items-start gap-12 lg:grid-cols-2 lg:gap-10">
                    {/* Center divider */}
                    <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-linear-to-b from-transparent via-primary/35 to-transparent lg:block"
                    />
                    <div
                        aria-hidden="true"
                        className="absolute left-1/2 top-8 hidden h-[18rem] w-px -translate-x-1/2 bg-primary/60 blur-[2px] lg:block"
                    />

                    {/* Left: Traditional */}
                    <div className="text-center">
                        <h2 className="font-inter text-3xl font-medium tracking-tight text-foreground/65 sm:text-4xl">
                            The Black Box
                        </h2>
                        <p className="mt-2 font-geist text-base text-muted-foreground/80 sm:text-lg">
                            (Traditional)
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-6">
                            {/* Pending card */}
                            <div className="relative w-full max-w-md">
                                <div className="absolute inset-0 rounded-2xl bg-black/15 blur-xl dark:bg-black/30" />
                                <div className="relative flex items-start gap-4 rounded-2xl border border-border/40 bg-background/35 p-5 shadow-sm backdrop-blur-md opacity-55 grayscale">
                                    <div className="h-10 w-10 shrink-0 rounded-xl bg-muted/60" />
                                    <div className="min-w-0 flex-1">
                                        <div className="flex items-center justify-between gap-4">
                                            <div className="font-mono text-sm text-foreground/80">
                                                Status:{" "}
                                                <span className="text-foreground/70">Pending...</span>
                                            </div>
                                            <div className="font-mono text-xs text-muted-foreground">
                                                2 months ago
                                            </div>
                                        </div>
                                        <div className="mt-3 font-mono text-sm text-muted-foreground">
                                            Last Update: ???
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Redacted callout */}
                            <div className="flex items-center gap-3 rounded-2xl border border-border/35 bg-background/30 px-4 py-3 text-left shadow-sm backdrop-blur-md opacity-55">
                                <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-muted/40">
                                    <EyeOff className="h-5 w-5 text-muted-foreground" />
                                </span>
                                <div className="leading-snug">
                                    <div className="font-inter text-sm text-foreground/70">
                                        redacted
                                    </div>
                                    <div className="font-geist text-sm text-muted-foreground">
                                        Technical Debt
                                    </div>
                                    <div className="font-geist text-sm text-muted-foreground">
                                        Unverified
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Eshway Standard */}
                    <div className="text-center">
                        <h2 className="font-inter text-3xl font-semibold tracking-tight text-[#d86dfc] sm:text-4xl">
                            The Eshway Standard
                        </h2>
                        <p className="mt-2 font-geist text-base text-emerald-200/75 sm:text-lg">
                            (IIT Bombay Engineering)
                        </p>

                        <div className="mt-8 flex flex-col items-center gap-6">
                            {/* Verified card */}
                            <div className="relative w-full max-w-md">
                                <div className="absolute -inset-2 rounded-3xl bg-linear-to-r from-emerald-500/30 via-primary/25 to-fuchsia-500/20 blur-2xl" />
                                <div className="relative flex items-start gap-4 rounded-2xl border border-border/40 bg-background/60 p-6 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_12px_40px_-20px_rgba(0,0,0,0.35)] backdrop-blur-md">
                                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-500/15 ring-1 ring-emerald-500/25">
                                        <Check className="h-6 w-6 text-emerald-400" />
                                    </span>
                                    <div className="min-w-0 flex-1 text-left">
                                        <div className="font-mono text-sm text-foreground">
                                            Status:{" "}
                                            <span className="text-foreground">Verified</span>
                                        </div>
                                        <ul className="mt-3 space-y-1 font-mono text-sm text-foreground/90">
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                                                <span>Sprint 3 Completed</span>
                                            </li>
                                            <li className="flex items-start gap-2">
                                                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-foreground/70" />
                                                <span>0 Blocked</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Architecture card */}
                            <div className="relative w-full max-w-sm">
                                <div className="relative flex items-center gap-4 rounded-2xl border border-border/40 bg-background/55 p-4 shadow-sm backdrop-blur-md">
                                    <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-background ring-1 ring-border">
                                        <ShieldCheck className="h-6 w-6 text-muted-foreground" />
                                    </span>
                                    <div className="text-left leading-snug">
                                        <div className="font-geist text-sm text-foreground">
                                            Architecture: Scalable, Audit-Ready Codebase.
                                        </div>
                                        <div className="font-geist text-sm text-muted-foreground">
                                            Standard Applied
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="mt-14 text-center font-inter text-sm text-muted-foreground sm:text-base">
                    This isn’t a different workflow. This is a higher execution standard.
                </p>
            </div>
        </section>
    );
}


