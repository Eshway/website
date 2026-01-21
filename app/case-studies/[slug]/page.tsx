import { notFound } from "next/navigation";
import { CASE_STUDIES, getCaseStudyBySlug } from "@/lib/case-studies";
import type { ComponentType } from "react";
import {
    AlertCircle,
    AlertTriangle,
    CheckCircle2,
    ChevronLeft,
    Cpu,
    Sparkles,
    TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

function getSectionIcon(title: string): ComponentType<{ className?: string }> {
    const t = title.trim().toLowerCase();

    if (t.includes("context") || t.includes("background")) return AlertCircle;
    if (t.includes("risk") || t.includes("constraint") || t.includes("warning"))
        return AlertTriangle;
    if (
        t.includes("approach") ||
        t.includes("what we changed") ||
        t.includes("implementation") ||
        t.includes("solution") ||
        t.includes("how")
    )
        return Cpu;
    if (t.includes("outcome") || t.includes("result") || t.includes("impact"))
        return TrendingUp;

    return Sparkles;
}

export function generateStaticParams() {
    return CASE_STUDIES.map((c) => ({ slug: c.slug }));
}

export default async function CaseStudyDetailPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const cs = getCaseStudyBySlug(slug);
    if (!cs) notFound();

    return (
        <main className="relative min-h-svh bg-background text-foreground">
            {/* Background glow + vignette */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
                <div className="absolute inset-0 mask-[radial-gradient(circle_at_50%_20%,black,transparent_70%)]">
                    <div className="absolute left-1/2 top-0 h-120 w-220 -translate-x-1/2 rounded-full bg-primary/18 blur-3xl" />
                    <div className="absolute left-1/2 top-24 h-88 w-176 -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-3xl" />
                    <div className="absolute left-1/2 top-48 h-72 w-152 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
                </div>
            </div>

            <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14">
                <div className="flex items-center justify-between gap-4">
                    <Link
                        href="/#case-studies"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/35 px-3 py-1.5 font-geist text-sm text-foreground/80 shadow-sm backdrop-blur-md transition-colors hover:bg-background/45"
                    >
                        <ChevronLeft className="h-4 w-4" />
                        Back
                    </Link>

                    <div className="hidden sm:flex items-center gap-2">
                        {cs.tags.slice(0, 3).map((t) => (
                            <span
                                key={t}
                                className="rounded-full border border-white/10 bg-background/30 px-3 py-1 font-geist text-xs text-foreground/75 backdrop-blur-sm"
                            >
                                {t}
                            </span>
                        ))}
                    </div>
                </div>

                {/* Hero */}
                <header className="mt-10">
                    <div className="text-center">
                        <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
              /// CASE STUDY
                        </div>
                        <h1 className="mt-4 font-inter text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
                            {cs.headline}
                        </h1>
                        <p className="mt-3 font-geist text-base text-muted-foreground sm:text-lg">
                            {cs.industry}
                        </p>
                        <p className="mx-auto mt-6 max-w-2xl font-geist text-sm leading-relaxed text-foreground/75 sm:text-base">
                            {cs.summary}
                        </p>
                    </div>

                    {/* KPI Row */}
                    <div className="mx-auto mt-10 grid max-w-5xl gap-4 sm:grid-cols-3">
                        {cs.metrics.map((m) => (
                            <div
                                key={m.label}
                                className="relative rounded-2xl border border-white/10 bg-background/25 p-5 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_20px_80px_-60px_rgba(0,0,0,0.75)] backdrop-blur-md"
                            >
                                <div className="font-geist text-xs text-foreground/60">
                                    {m.label}
                                </div>
                                <div className="mt-2 font-inter text-2xl font-semibold text-foreground">
                                    {m.value}
                                </div>
                                {m.note ? (
                                    <div className="mt-1 font-geist text-xs text-muted-foreground">
                                        {m.note}
                                    </div>
                                ) : null}
                            </div>
                        ))}
                    </div>
                </header>

                {/* Showcase card */}
                <section className="mt-10">
                    <div className="relative mx-auto max-w-5xl rounded-3xl border border-white/10 bg-background/25 p-4 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_30px_120px_-60px_rgba(0,0,0,0.75)] backdrop-blur-md sm:p-6">
                        <div className="flex items-center justify-between gap-4">
                            <div className="font-geist text-sm text-foreground/70">
                                {cs.heroKicker}
                            </div>
                            <div className="inline-flex items-center gap-2 rounded-full border border-fuchsia-500/20 bg-background/35 px-3 py-1.5 shadow-[0_12px_50px_-30px_rgba(216,109,252,0.75)] backdrop-blur-md">
                                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-fuchsia-500/15 ring-1 ring-fuchsia-500/25">
                                    <CheckCircle2 className="h-4 w-4 text-fuchsia-200" />
                                </span>
                                <div className="leading-tight">
                                    <div className="font-mono text-[11px] tracking-tight text-foreground/70">
                                        {cs.statusLabel}
                                    </div>
                                    <div className="font-geist text-sm text-foreground">
                                        {cs.statusValue}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="relative mt-5 overflow-hidden rounded-2xl border border-fuchsia-500/25 bg-white/95 p-4 shadow-[0_18px_60px_-35px_rgba(0,0,0,0.65)] sm:p-6">
                            <Image
                                src={cs.imageSrc}
                                alt={`${cs.headline} preview`}
                                placeholder="blur"
                                sizes="(min-width: 1024px) 896px, 92vw"
                                className="h-auto w-full select-none object-contain"
                                draggable={false}
                            />
                        </div>

                        <div className="mt-5 flex flex-wrap gap-2">
                            {cs.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="rounded-full border border-white/10 bg-background/40 px-3 py-1 font-geist text-xs text-foreground/80 backdrop-blur-sm"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Narrative sections */}
                <section className="mx-auto mt-14 grid max-w-5xl gap-6">
                    {cs.sections.map((s) => {
                        const Icon = getSectionIcon(s.title);

                        return (
                            <article
                                key={s.title}
                                className="relative rounded-3xl border border-white/10 bg-background/20 p-6 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_24px_90px_-70px_rgba(0,0,0,0.75)] backdrop-blur-md"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-fuchsia-500/25 bg-fuchsia-500/10">
                                        <Icon className="h-4 w-4 text-fuchsia-200" />
                                    </span>
                                    <h2 className="font-inter text-lg font-semibold text-foreground">
                                        {s.title}
                                    </h2>
                                </div>
                                <p className="mt-3 font-geist text-sm leading-relaxed text-foreground/75 sm:text-base">
                                    {s.body}
                                </p>
                                {s.bullets?.length ? (
                                    <ul className="mt-4 space-y-2">
                                        {s.bullets.map((b) => (
                                            <li key={b} className="flex gap-3">
                                                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-fuchsia-300/70" />
                                                <span className="font-geist text-sm text-foreground/75 sm:text-base">
                                                    {b}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                ) : null}
                            </article>
                        );
                    })}
                </section>

                {/* CTA */}
                <section className="mx-auto mt-14 max-w-5xl">
                    <div className="relative overflow-hidden rounded-3xl border border-fuchsia-500/25 bg-background/25 p-6 shadow-[0_0_0_1px_rgba(216,109,252,0.15),0_26px_120px_-80px_rgba(216,109,252,0.85)] backdrop-blur-md sm:p-8">
                        <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                            <div className="absolute -left-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-fuchsia-500/18 blur-3xl" />
                            <div className="absolute -right-16 top-1/2 h-64 w-64 -translate-y-1/2 rounded-full bg-primary/18 blur-3xl" />
                        </div>
                        <div className="relative flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
                            <div>
                                <div className="font-inter text-xs tracking-[0.28em] text-foreground/60">
                  /// NEXT STEP
                                </div>
                                <div className="mt-2 font-inter text-2xl font-semibold text-foreground">
                                    Want this outcome for your business?
                                </div>
                                <div className="mt-2 font-geist text-sm text-muted-foreground sm:text-base">
                                    We scope it, make it visible, enforce quality, and verify delivery.
                                </div>
                            </div>
                            <Link
                                href="/apply"
                                className="inline-flex items-center justify-center rounded-full bg-[#d86dfc] px-5 py-2.5 font-geist text-sm font-semibold text-black shadow-[0_18px_80px_-45px_rgba(216,109,252,0.95)] transition-transform hover:-translate-y-0.5"
                            >
                                Book a call
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </main>
    );
}

