import type { StaticImageData } from "next/image";

import adzzatImg from "@/public/adzzat.webp";
import ecomImg from "@/public/ecom.webp";
import fintechImg from "@/public/fintech.webp";
import shippingImg from "@/public/shipping.webp";
import vdpImg from "@/public/vdp.webp";

export type CaseStudyDetail = {
    slug: string;
    tabTitle: string;
    headline: string;
    industry: string;
    heroKicker: string;
    summary: string;
    imageSrc: StaticImageData;
    statusLabel: string;
    statusValue: string;
    tags: string[];
    metrics: Array<{ label: string; value: string; note?: string }>;
    sections: Array<{
        title: string;
        body: string;
        bullets?: string[];
    }>;
};

export const CASE_STUDIES: CaseStudyDetail[] = [
    {
        slug: "fintech-latency",
        tabTitle: "Case Study 1",
        headline: "40% Reduction in Latency",
        industry: "FinTech Startup",
        heroKicker: "Stacked Case Study",
        summary:
            "We redesigned the data path, tightened caching, and shipped an audit-ready architecture—without disrupting production.",
        imageSrc: fintechImg,
        statusLabel: "LTD Status:",
        statusValue: "Shipped On Time • 0 Critical Bugs",
        tags: ["Next.js 14", "Supabase", "AWS Lambda"],
        metrics: [
            { label: "Latency", value: "−40%", note: "P95 end-to-end" },
            { label: "Incidents", value: "0", note: "critical bugs post-launch" },
            { label: "Delivery", value: "On time", note: "scope locked upfront" },
        ],
        sections: [
            {
                title: "Context",
                body: "A rapidly growing FinTech product was hitting performance ceilings as usage spiked. The team needed speed without sacrificing correctness or auditability.",
            },
            {
                title: "What we changed",
                body: "We mapped the request lifecycle, eliminated redundant round-trips, added deterministic caching, and reduced cold-path work in serverless functions.",
                bullets: [
                    "Profiling + bottleneck isolation (P50/P95/P99)",
                    "Schema and query optimization with strict performance budgets",
                    "Cache strategy with explicit invalidation rules",
                ],
            },
            {
                title: "Outcome",
                body: "The result was a materially faster product with predictable performance under load—backed by measurable metrics and a documented delivery trail.",
            },
        ],
    },
    {
        slug: "ecommerce-zero-downtime",
        tabTitle: "Case Study 2",
        headline: "Zero Downtime Launch",
        industry: "E-commerce",
        heroKicker: "Stacked Case Study",
        summary:
            "We executed a safe cutover with rollback readiness, keeping revenue flowing while upgrading core systems.",
        imageSrc: ecomImg,
        statusLabel: "LTD Status:",
        statusValue: "Cutover Verified • Rollback Ready",
        tags: ["Next.js 14", "Stripe", "Vercel"],
        metrics: [
            { label: "Downtime", value: "0", note: "during cutover" },
            { label: "Rollback", value: "< 5 min", note: "validated procedure" },
            { label: "Checkout", value: "Stable", note: "no conversion drop" },
        ],
        sections: [
            {
                title: "Context",
                body: "The storefront needed a major rebuild and performance upgrades, but the business couldn’t afford downtime or checkout instability.",
            },
            {
                title: "Approach",
                body: "We shipped behind feature flags, validated parity with synthetic traffic, and executed a controlled cutover with measurable guardrails.",
                bullets: [
                    "Flagged rollout + staged traffic ramp",
                    "Parity testing for critical flows (search, cart, checkout)",
                    "Rollback plan rehearsed and documented",
                ],
            },
            {
                title: "Outcome",
                body: "A zero-downtime launch, with rollback confidence and a system that can evolve without future high-risk releases.",
            },
        ],
    },
    // {
    //     slug: "healthcare-audit-ready",
    //     tabTitle: "Case Study 3",
    //     headline: "Audit-Ready Infrastructure",
    //     industry: "Healthcare",
    //     heroKicker: "Stacked Case Study",
    //     summary:
    //         "We delivered a compliant foundation with documentation and guardrails—built to scale cleanly.",
    //     imageSrc: "https://ui.aceternity.com/linear.webp",
    //     statusLabel: "LTD Status:",
    //     statusValue: "Compliant • Documented",
    //     tags: ["Postgres", "Terraform", "AWS"],
    //     metrics: [
    //         { label: "Compliance", value: "Ready", note: "controls mapped" },
    //         { label: "Infra", value: "IaC", note: "repeatable deployments" },
    //         { label: "Security", value: "Hardened", note: "least-privilege roles" },
    //     ],
    //     sections: [
    //         {
    //             title: "Context",
    //             body: "Healthcare products need provable controls, traceability, and secure defaults—without slowing engineering velocity.",
    //         },
    //         {
    //             title: "What we delivered",
    //             body: "A production-grade foundation with infrastructure as code, strong access controls, and clear operational runbooks.",
    //             bullets: [
    //                 "Least-privilege IAM and environment separation",
    //                 "Infrastructure as code with reviewable diffs",
    //                 "Operational documentation and escalation paths",
    //             ],
    //         },
    //         {
    //             title: "Outcome",
    //             body: "A clean, compliant base that teams can build on confidently—and auditors can verify quickly.",
    //         },
    //     ],
    // },
    {
        slug: "marketplace-verified-delivery",
        tabTitle: "Case Study 3",
        headline: "Verified Delivery Pipeline",
        industry: "Marketplace",
        heroKicker: "Stacked Case Study",
        summary:
            "We introduced a delivery system that verifies outcomes against the blueprint, not just “done” checkboxes.",
        imageSrc: vdpImg,
        statusLabel: "LTD Status:",
        statusValue: "CI Green • Tests Passing",
        tags: ["GitHub Actions", "Playwright", "Next.js"],
        metrics: [
            { label: "CI", value: "Green", note: "gated merges" },
            { label: "E2E", value: "Covered", note: "critical user flows" },
            { label: "Releases", value: "Predictable", note: "less last-minute churn" },
        ],
        sections: [
            {
                title: "Context",
                body: "Shipping speed was high, but confidence was low. Bugs slipped through, and stakeholders lacked visibility into progress and risk.",
            },
            {
                title: "Approach",
                body: "We made quality measurable and automatic, with a pipeline that enforces standards and validates critical flows.",
                bullets: [
                    "PR checks with deterministic gating rules",
                    "Playwright E2E coverage for core journeys",
                    "Release notes + verification checklist tied to scope",
                ],
            },
            {
                title: "Outcome",
                body: "Higher confidence releases, fewer regressions, and a delivery system that makes outcomes verifiable.",
            },
        ],
    },
    {
        slug: "saas-weekly-shipping",
        tabTitle: "Case Study 4",
        headline: "Predictable Weekly Shipping",
        industry: "SaaS",
        heroKicker: "Stacked Case Study",
        summary:
            "We reduced ambiguity, tightened execution loops, and established a shipping cadence that stays stable as complexity grows.",
        imageSrc: shippingImg,
        statusLabel: "LTD Status:",
        statusValue: "On Cadence • No Blockers",
        tags: ["TypeScript", "tRPC", "Postgres"],
        metrics: [
            { label: "Cadence", value: "Weekly", note: "predictable releases" },
            { label: "Blockers", value: "0", note: "transparent risk tracking" },
            { label: "Scope", value: "Locked", note: "before sprint start" },
        ],
        sections: [
            {
                title: "Context",
                body: "The team was shipping, but schedules were unstable and stakeholders weren’t confident in timelines.",
            },
            {
                title: "What changed",
                body: "We introduced a scope-first blueprint, ruthless prioritization, and real-time visibility into blockers and velocity.",
                bullets: [
                    "Blueprint-driven scope with acceptance criteria",
                    "Weekly planning with constrained WIP",
                    "Visibility system for blockers and progress",
                ],
            },
            {
                title: "Outcome",
                body: "A steady cadence that scales—turning delivery into a repeatable system rather than a heroic effort.",
            },
        ],
    },
    {
        slug: "ai-talent-marketplace",
        tabTitle: "Case Study 5",
        headline: "Multi-Fold Revenue Growth",
        industry: "AI & Talent Marketplace",
        heroKicker: "Stacked Case Study",
        summary:
            "We transformed a manual network into a digital trust engine, automating talent matching and unlocking enterprise sales velocity.",
        imageSrc: adzzatImg,
        statusLabel: "LTD Status:",
        statusValue: "Matching Active • Trust Verified",
        tags: ["Next.js 14", "Postgres", "Automated Workflows"],
        metrics: [
            { label: "Revenue", value: "Multi-fold", note: "from zero pre-launch" },
            { label: "Onboarding", value: "48 Hours", note: "down from 3 weeks" },
            { label: "Network", value: "500+", note: "verified elite engineers" },
        ],
        sections: [
            {
                title: "Context",
                body: "A high-growth AI network had the talent but lacked the infrastructure. Manual workflows were killing 'time-to-trust' and stalling revenue.",
            },
            {
                title: "Approach",
                body: "We engineered a 'vetted-velocity' platform with automated algorithmic matching and a 'Transparency Portal' for clients to track model training.",
                bullets: [
                    "Automated talent matching logic (Skills to Needs)",
                    "Real-time 'SFT Burndown' charts for clients",
                    "High-performance Next.js marketing architecture",
                ],
            },
            {
                title: "Outcome",
                body: "Immediate conversion of manual operational drag into high-margin platform revenue, with reduced sales friction and verified enterprise trust.",
            },
        ],
    },
];

export function getCaseStudyBySlug(slug: string) {
    return CASE_STUDIES.find((c) => c.slug === slug) ?? null;
}

