"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { ArrowRight, ChevronLeft, CheckCircle2, XCircle } from "lucide-react";

type Objective =
  | "new_product"
  | "scaling_infra"
  | "technical_audit"
  | "other";

type Timeline = "asap" | "lt_1_month" | "q3_q4" | "just_browsing";

type Investment = "lt_2k" | "5k_15k" | "20k_plus" | "undefined";

type TechnicalProfile =
  | "cto_or_tech_lead"
  | "founder_no_tech_lead"
  | "existing_codebase"
  | "starting_fresh";

type IntakeState = {
  objective?: Objective;
  timeline?: Timeline;
  investment?: Investment;
  technicalProfile?: TechnicalProfile;
};

type StepId = "objective" | "timeline" | "investment" | "technical";

const STEPS: Array<{
  id: StepId;
  title: string;
  subtitle: string;
}> = [
  {
    id: "objective",
    title: "What is the primary objective?",
    subtitle: "Configure scope parameters.",
  },
  {
    id: "timeline",
    title: "What is your target deployment timeline?",
    subtitle: "We optimize for high-velocity delivery.",
  },
  {
    id: "investment",
    title: "What is the estimated engineering investment for this phase?",
    subtitle: "This keeps the conversation high-bandwidth.",
  },
  {
    id: "technical",
    title: "Do you have a technical lead or an existing codebase?",
    subtitle: "Helps us calibrate the session.",
  },
];

function qualifies(s: IntakeState) {
  if (!s.timeline || !s.investment) return null;

  if (s.timeline === "just_browsing") return false;
  if (s.investment === "lt_2k") return false;
  if (s.investment === "undefined") return null;
  return true;
}

function OptionButton({
  selected,
  onClick,
  title,
  description,
  tone = "neutral",
}: {
  selected: boolean;
  onClick: () => void;
  title: string;
  description: string;
  tone?: "neutral" | "good" | "bad";
}) {
  const toneClasses =
    tone === "good"
      ? "border-emerald-500/25"
      : tone === "bad"
        ? "border-rose-500/20"
        : "border-white/10";

  return (
    <button
      type="button"
      onClick={onClick}
      className={[
        "group relative w-full rounded-2xl border bg-background/20 p-4 text-left shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_16px_60px_-55px_rgba(0,0,0,0.75)] backdrop-blur-md transition-colors",
        "hover:bg-background/28 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-fuchsia-500/35",
        toneClasses,
        selected ? "ring-1 ring-fuchsia-500/30 border-fuchsia-500/25" : "",
      ].join(" ")}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="font-inter text-base font-semibold text-foreground">
            {title}
          </div>
          <div className="mt-1 font-geist text-sm text-foreground/65">
            {description}
          </div>
        </div>
        <div
          className={[
            "mt-1 h-4 w-4 rounded-full border",
            selected ? "border-fuchsia-300 bg-fuchsia-300/20" : "border-white/20",
          ].join(" ")}
          aria-hidden="true"
        />
      </div>
    </button>
  );
}

function TerminalFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-fuchsia-500/25 bg-background/15 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_30px_140px_-80px_rgba(0,0,0,0.90)] backdrop-blur-md">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-linear-to-r from-fuchsia-500/12 via-primary/12 to-emerald-500/10 blur-2xl"
      />

      <div className="relative flex items-center justify-between border-b border-white/10 bg-background/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <span className="ml-3 font-mono text-xs text-foreground/60">
            eshway://intake-protocol
          </span>
        </div>
        <span className="font-mono text-xs text-foreground/55">secure session</span>
      </div>

      <div className="relative p-6 sm:p-10">{children}</div>
    </div>
  );
}

export default function ApplyPage() {
  const [stepIdx, setStepIdx] = useState(0);
  const [state, setState] = useState<IntakeState>({});

  const done = stepIdx >= STEPS.length;
  const step = STEPS[Math.min(stepIdx, STEPS.length - 1)];
  const result = qualifies(state);

  const canContinue = useMemo(() => {
    if (done || !step) return false;
    switch (step.id) {
      case "objective":
        return Boolean(state.objective);
      case "timeline":
        return Boolean(state.timeline);
      case "investment":
        return Boolean(state.investment);
      case "technical":
        return Boolean(state.technicalProfile);
    }
  }, [done, step?.id, state]);

  const goNext = () => {
    if (!canContinue) return;
    setStepIdx((i) => Math.min(i + 1, STEPS.length));
  };

  const goBack = () => setStepIdx((i) => Math.max(0, i - 1));

  return (
    <main className="relative min-h-svh bg-background text-foreground">
      {/* Backdrop */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
        <div className="absolute inset-0 opacity-55 bg-size-[40px_40px] bg-[linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />
        <div className="absolute inset-0 mask-[radial-gradient(circle_at_50%_15%,black,transparent_70%)]">
          <div className="absolute left-1/2 top-0 h-120 w-220 -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-3xl" />
          <div className="absolute left-1/2 top-32 h-88 w-176 -translate-x-1/2 rounded-full bg-primary/14 blur-3xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 pb-20 pt-10 sm:px-6 sm:pb-28 sm:pt-14">
        <div className="flex items-center justify-between gap-4">
          <Link
            href="/#initiate-sequence"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/35 px-3 py-1.5 font-geist text-sm text-foreground/80 shadow-sm backdrop-blur-md transition-colors hover:bg-background/45"
          >
            <ChevronLeft className="h-4 w-4" />
            Back
          </Link>
          <div className="font-geist text-sm text-foreground/60">
            Intake Protocol v1.0
          </div>
        </div>

        <header className="mt-10 text-center">
          <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
            /// INITIALIZE PROJECT DISCOVERY
          </div>
          <h1 className="mt-4 font-inter text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Initialize Project Discovery.
          </h1>
          <p className="mx-auto mt-4 max-w-2xl font-geist text-sm leading-relaxed text-foreground/70 sm:text-base">
            To ensure high-bandwidth conversation, please configure your project
            parameters below.
          </p>
        </header>

        <div className="mx-auto mt-10 max-w-4xl">
          <TerminalFrame>
            {/* Progress */}
            <div className="flex items-center justify-between gap-4">
              <div className="font-mono text-xs text-foreground/60">
                step {Math.min(stepIdx + 1, STEPS.length)}/{STEPS.length}
              </div>
              <div className="h-2 w-48 rounded-full border border-white/10 bg-background/10">
                <div
                  className="h-full rounded-full bg-linear-to-r from-fuchsia-300/70 via-[#d86dfc]/55 to-transparent"
                  style={{
                    width: `${(Math.min(stepIdx, STEPS.length) / STEPS.length) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="mt-8">
              <AnimatePresence mode="wait" initial={false}>
                {!done ? (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="font-inter text-2xl font-semibold text-foreground sm:text-3xl">
                      {step.title}
                    </div>
                    <div className="mt-2 font-geist text-sm text-foreground/60">
                      {step.subtitle}
                    </div>

                    <div className="mt-6 grid gap-3">
                      {step.id === "objective" ? (
                        <>
                          <OptionButton
                            selected={state.objective === "new_product"}
                            onClick={() =>
                              setState((s) => ({ ...s, objective: "new_product" }))
                            }
                            title="New Product (0 → 1)"
                            description="Build the first production-grade version."
                          />
                          <OptionButton
                            selected={state.objective === "scaling_infra"}
                            onClick={() =>
                              setState((s) => ({
                                ...s,
                                objective: "scaling_infra",
                              }))
                            }
                            title="Scaling Infrastructure (1 → 10)"
                            description="Performance, reliability, and clean architecture."
                          />
                          <OptionButton
                            selected={state.objective === "technical_audit"}
                            onClick={() =>
                              setState((s) => ({
                                ...s,
                                objective: "technical_audit",
                              }))
                            }
                            title="Technical Audit"
                            description="Find bottlenecks, risks, and the fastest path forward."
                          />
                          <OptionButton
                            selected={state.objective === "other"}
                            onClick={() =>
                              setState((s) => ({ ...s, objective: "other" }))
                            }
                            title="Other"
                            description="We’ll clarify and define the deliverables together."
                          />
                        </>
                      ) : null}

                      {step.id === "timeline" ? (
                        <>
                          <OptionButton
                            selected={state.timeline === "asap"}
                            onClick={() => setState((s) => ({ ...s, timeline: "asap" }))}
                            title="ASAP (Urgent)"
                            description="You have a hard deadline and need velocity."
                          />
                          <OptionButton
                            selected={state.timeline === "lt_1_month"}
                            onClick={() =>
                              setState((s) => ({ ...s, timeline: "lt_1_month" }))
                            }
                            title="&lt; 1 Month"
                            description="A focused sprint-based delivery window."
                          />
                          <OptionButton
                            selected={state.timeline === "q3_q4"}
                            onClick={() => setState((s) => ({ ...s, timeline: "q3_q4" }))}
                            title="Q3 / Q4"
                            description="Strategic build with longer runway."
                          />
                          <OptionButton
                            selected={state.timeline === "just_browsing"}
                            onClick={() =>
                              setState((s) => ({ ...s, timeline: "just_browsing" }))
                            }
                            title="Just Browsing"
                            description="Exploring options / not ready to execute yet."
                            tone="bad"
                          />
                        </>
                      ) : null}

                      {step.id === "investment" ? (
                        <>
                          <OptionButton
                            selected={state.investment === "lt_2k"}
                            onClick={() =>
                              setState((s) => ({ ...s, investment: "lt_2k" }))
                            }
                            title="&lt; $2k (Bootstrapped)"
                            description="Tight budget for this phase."
                            tone="bad"
                          />
                          <OptionButton
                            selected={state.investment === "5k_15k"}
                            onClick={() =>
                              setState((s) => ({ ...s, investment: "5k_15k" }))
                            }
                            title="$5k – $15k (Seed)"
                            description="Serious build, scoped and shipped."
                            tone="good"
                          />
                          <OptionButton
                            selected={state.investment === "20k_plus"}
                            onClick={() =>
                              setState((s) => ({ ...s, investment: "20k_plus" }))
                            }
                            title="$20k+ (Scale)"
                            description="High-impact engineering with rigorous standards."
                            tone="good"
                          />
                          <OptionButton
                            selected={state.investment === "undefined"}
                            onClick={() =>
                              setState((s) => ({ ...s, investment: "undefined" }))
                            }
                            title="Undefined"
                            description="Need help estimating — we can guide you."
                          />
                        </>
                      ) : null}

                      {step.id === "technical" ? (
                        <>
                          <OptionButton
                            selected={state.technicalProfile === "cto_or_tech_lead"}
                            onClick={() =>
                              setState((s) => ({
                                ...s,
                                technicalProfile: "cto_or_tech_lead",
                              }))
                            }
                            title="Yes — CTO / Technical Lead"
                            description="We’ll keep it direct and technical."
                            tone="good"
                          />
                          <OptionButton
                            selected={state.technicalProfile === "founder_no_tech_lead"}
                            onClick={() =>
                              setState((s) => ({
                                ...s,
                                technicalProfile: "founder_no_tech_lead",
                              }))
                            }
                            title="No — Founder-led"
                            description="We’ll guide architecture decisions end-to-end."
                          />
                          <OptionButton
                            selected={state.technicalProfile === "existing_codebase"}
                            onClick={() =>
                              setState((s) => ({
                                ...s,
                                technicalProfile: "existing_codebase",
                              }))
                            }
                            title="Existing codebase"
                            description="Audit and evolve the current system."
                          />
                          <OptionButton
                            selected={state.technicalProfile === "starting_fresh"}
                            onClick={() =>
                              setState((s) => ({
                                ...s,
                                technicalProfile: "starting_fresh",
                              }))
                            }
                            title="Starting fresh"
                            description="We’ll blueprint scope and ship clean foundations."
                          />
                        </>
                      ) : null}
                    </div>

                    <div className="mt-8 flex items-center justify-between">
                      <button
                        type="button"
                        onClick={goBack}
                        disabled={stepIdx === 0}
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/25 px-4 py-2 font-geist text-sm text-foreground/75 backdrop-blur-md transition-colors hover:bg-background/35 disabled:opacity-50"
                      >
                        <ChevronLeft className="h-4 w-4" />
                        Back
                      </button>

                      <button
                        type="button"
                        onClick={goNext}
                        disabled={!canContinue}
                        className="inline-flex items-center gap-2 rounded-full bg-[#d86dfc] px-5 py-2.5 font-geist text-sm font-semibold text-black shadow-[0_18px_80px_-45px_rgba(216,109,252,0.95)] transition-transform hover:-translate-y-0.5 disabled:opacity-50 disabled:hover:translate-y-0"
                      >
                        Continue
                        <ArrowRight className="h-4 w-4" />
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  >
                    {result === true ? (
                      <>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-emerald-500/25 bg-emerald-500/10">
                            <CheckCircle2 className="h-5 w-5 text-emerald-300" />
                          </span>
                          <div>
                            <div className="font-inter text-2xl font-semibold text-foreground sm:text-3xl">
                              Criteria Matched.
                            </div>
                            <div className="mt-1 font-geist text-sm text-foreground/60">
                              Engineer access granted.
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 overflow-hidden rounded-2xl border border-white/10 bg-background/10">
                          <iframe
                            title="Schedule with Eshway"
                            src="https://cal.com/eshway/30min?embed=1&theme=dark"
                            className="h-[820px] w-full"
                          />
                        </div>

                        <div className="mt-6 text-center font-geist text-sm text-foreground/60">
                          After booking, we recommend reviewing a relevant outcome:
                          {" "}
                          <Link
                            href="/case-studies/fintech-latency"
                            className="text-foreground underline underline-offset-4 hover:text-foreground/90"
                          >
                            read a case study
                          </Link>
                          .
                        </div>
                      </>
                    ) : (
                      <>
                        <div className="flex items-center gap-3">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl border border-rose-500/20 bg-rose-500/10">
                            <XCircle className="h-5 w-5 text-foreground/70" />
                          </span>
                          <div>
                            <div className="font-inter text-2xl font-semibold text-foreground sm:text-3xl">
                              Parameters Not Matched.
                            </div>
                            <div className="mt-1 font-geist text-sm text-foreground/60">
                              We might not be the most efficient partner right now.
                            </div>
                          </div>
                        </div>

                        <div className="mt-6 rounded-2xl border border-white/10 bg-background/15 p-5 backdrop-blur-md">
                          <div className="font-geist text-sm text-foreground/75">
                            If you’re still early, start here:
                          </div>
                          <div className="mt-3 flex flex-col gap-3 sm:flex-row">
                            <Link
                              href="/#operational-queries"
                              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-background/25 px-5 py-2.5 font-geist text-sm text-foreground/80 hover:bg-background/35"
                            >
                              Read Operational Queries
                            </Link>
                            <Link
                              href="/#case-studies"
                              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-background/25 px-5 py-2.5 font-geist text-sm text-foreground/80 hover:bg-background/35"
                            >
                              Browse Outcomes
                            </Link>
                          </div>
                        </div>
                      </>
                    )}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </TerminalFrame>
        </div>
      </div>
    </main>
  );
}

