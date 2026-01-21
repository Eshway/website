"use client";

import { Check, X } from "lucide-react";

function FitCard({
  tone,
  title,
  subtitle,
  bullets,
}: {
  tone: "good" | "bad";
  title: string;
  subtitle: string;
  bullets: string[];
}) {
  const isGood = tone === "good";

  return (
    <div
      className={[
        "relative overflow-hidden rounded-3xl border bg-background/20 p-6 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_30px_120px_-70px_rgba(0,0,0,0.85)] backdrop-blur-md sm:p-8",
        isGood ? "border-emerald-500/30" : "border-white/12",
      ].join(" ")}
    >
      {/* Glow + grid */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div
          className={[
            "absolute -inset-2 rounded-[2rem] blur-2xl",
            isGood
              ? "bg-linear-to-r from-emerald-500/18 via-emerald-500/10 to-transparent"
              : "bg-linear-to-r from-rose-500/10 via-white/6 to-transparent",
          ].join(" ")}
        />
        <div
          className={[
            "absolute inset-0 opacity-55 [background-size:40px_40px]",
            isGood
              ? "[background-image:linear-gradient(to_right,rgba(16,185,129,0.14)_1px,transparent_1px),linear-gradient(to_bottom,rgba(16,185,129,0.14)_1px,transparent_1px)]"
              : "[background-image:linear-gradient(to_right,rgba(255,255,255,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.10)_1px,transparent_1px)]",
          ].join(" ")}
        />
      </div>

      <div className="relative">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-inter text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              {title}{" "}
              <span className="font-inter font-medium text-foreground/70">
                {subtitle}
              </span>
            </h3>
          </div>

          <div
            className={[
              "inline-flex h-9 w-9 items-center justify-center rounded-full ring-1",
              isGood
                ? "bg-emerald-500/15 ring-emerald-500/30"
                : "bg-rose-500/10 ring-white/15",
            ].join(" ")}
            aria-hidden="true"
          >
            {isGood ? (
              <Check className="h-5 w-5 text-emerald-300" />
            ) : (
              <X className="h-5 w-5 text-foreground/55" />
            )}
          </div>
        </div>

        {/* Status bar */}
        <div className="mt-5">
          <div
            className={[
              "h-2 w-full rounded-full border",
              isGood ? "border-emerald-500/25" : "border-white/10",
            ].join(" ")}
          >
            <div
              className={[
                "h-full rounded-full",
                isGood
                  ? "w-[78%] bg-linear-to-r from-emerald-400/80 via-emerald-400/55 to-emerald-400/20"
                  : "w-[55%] bg-linear-to-r from-white/22 via-white/10 to-transparent",
              ].join(" ")}
            />
          </div>
        </div>

        <ul className="mt-7 space-y-5">
          {bullets.map((b) => (
            <li key={b} className="flex items-start gap-4">
              <span
                className={[
                  "mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full ring-1",
                  isGood
                    ? "bg-emerald-500/15 ring-emerald-500/25"
                    : "bg-rose-500/10 ring-white/15",
                ].join(" ")}
                aria-hidden="true"
              >
                {isGood ? (
                  <Check className="h-5 w-5 text-emerald-300" />
                ) : (
                  <X className="h-5 w-5 text-foreground/55" />
                )}
              </span>
              <p className="font-geist text-sm leading-relaxed text-foreground/75 sm:text-base">
                {b}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function EngagementFitSection() {
  return (
    <section
      id="engagement-fit"
      className="relative overflow-hidden bg-background py-20 sm:py-32"
    >
      {/* Background glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        {/* Base background (keeps continuity with the section above) */}
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />

        {/* Subtle grid to avoid a "blank band" between sections */}
        <div className="absolute inset-0 opacity-45 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />

        {/* Fade-in the glow at the top so there isn't a hard cut from the previous section */}
        <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_22%,black)]">
          <div className="absolute left-1/2 -top-8 h-120 w-220 -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
          <div className="absolute left-1/2 top-10 h-88 w-176 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-left">
          <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
            /// ENGAGEMENT FIT
          </div>
          <h2 className="mt-3 font-inter text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            We are not for everyone.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <FitCard
            tone="good"
            title="Optimal Fit"
            subtitle="(System Compatible)"
            bullets={[
              "You view engineering as a long-term asset, not a one-time cost.",
              "You are building for scale (10k+ users) and need architecture that survives growth.",
              "You want a partner who pushes back on bad ideas, not just a “Yes Man”.",
            ]}
          />

          <FitCard
            tone="bad"
            title="Incompatible"
            subtitle="(System Error)"
            bullets={[
              "You are looking for the “cheapest” quote.",
              "You need a “quick fix” or a clone script.",
              "You believe “more hours” = “more value” (We bill on outcome, not time).",
            ]}
          />
        </div>
      </div>
    </section>
  );
}

