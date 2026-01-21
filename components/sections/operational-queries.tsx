"use client";

import { AnimatePresence, motion } from "motion/react";
import { Plus } from "lucide-react";
import { useState } from "react";

const ITEMS = [
  {
    q: "Do I own the Code/IP?",
    a: "100%. Upon final payment, all intellectual property, Git repositories, and design assets are transferred to your organization. We are engineers, not landlords.",
  },
  {
    q: "What is the typical timeline?",
    a: "We work in 2-week rigorous sprints. Most MVPs are shipped in 4-8 weeks. Enterprise migrations vary by complexity, but you will see progress every single week via the LTD Dashboard.",
  },
  {
    q: "Do you provide post-launch support?",
    a: "Yes. We offer a 30-day warranty on all code. After that, we have Retainer Engineering Pods available for active scaling and maintenance.",
  },
  {
    q: "Why Next.js / TypeScript?",
    a: "It is the industry standard for scalable, high-performance applications. We do not use WordPress or no-code builders because they cannot handle the scale our clients require.",
  },
] as const;

export default function OperationalQueriesSection() {
  const [openIdx, setOpenIdx] = useState<number>(0);

  return (
    <section
      id="operational-queries"
      className="relative overflow-hidden bg-background py-20 sm:py-32"
    >
      {/* Subtle grid backdrop (no boxes) */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
        <div className="absolute inset-0 opacity-50 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />
        <div className="absolute inset-0 mask-[radial-gradient(circle_at_50%_15%,black,transparent_70%)]">
          <div className="absolute left-1/2 top-10 h-88 w-176 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-left">
          <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
            /// OPERATIONAL QUERIES
          </div>
          <h2 className="mt-3 font-inter text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            No Hidden Clauses. Just Answers.
          </h2>
        </div>

        <div className="mx-auto mt-12 max-w-4xl">
          <div className="h-px w-full bg-linear-to-r from-transparent via-fuchsia-500/45 to-transparent" />

          <div className="divide-y divide-white/10">
            {ITEMS.map((item, idx) => {
              const open = idx === openIdx;
              return (
                <div key={item.q} className="py-6 sm:py-7">
                  <button
                    type="button"
                    onClick={() => setOpenIdx((v) => (v === idx ? -1 : idx))}
                    className="group flex w-full items-center justify-between gap-6 text-left"
                    aria-expanded={open}
                  >
                    <span className="font-inter text-xl font-semibold text-foreground sm:text-2xl">
                      {item.q}
                    </span>

                    <span className="relative inline-flex h-10 w-10 shrink-0 items-center justify-center">
                      <span
                        aria-hidden="true"
                        className={[
                          "absolute inset-0 rounded-full border transition-colors duration-200",
                          open
                            ? "border-fuchsia-500/40"
                            : "border-white/10 group-hover:border-fuchsia-500/25",
                        ].join(" ")}
                      />
                      <span
                        aria-hidden="true"
                        className={[
                          "absolute -inset-2 rounded-full blur-xl transition-opacity duration-200",
                          open ? "bg-fuchsia-500/18 opacity-100" : "opacity-0",
                        ].join(" ")}
                      />
                      <motion.span
                        aria-hidden="true"
                        animate={{ rotate: open ? 45 : 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 500,
                          damping: 35,
                        }}
                        className="relative"
                      >
                        <Plus className="h-5 w-5 text-[#d86dfc]" />
                      </motion.span>
                    </span>
                  </button>

                  <AnimatePresence initial={false}>
                    {open ? (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                          duration: 0.28,
                          ease: [0.22, 1, 0.36, 1],
                        }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4">
                          <p className="font-geist text-sm leading-relaxed text-muted-foreground sm:text-base">
                            {item.a}
                          </p>
                        </div>
                      </motion.div>
                    ) : null}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          <div className="h-px w-full bg-linear-to-r from-transparent via-fuchsia-500/45 to-transparent" />
        </div>
      </div>
    </section>
  );
}

