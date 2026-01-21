"use client";

import { Brain, Cpu, Database, Sparkles } from "lucide-react";

function BentoCard({
  title,
  copy,
  children,
  className,
}: {
  title: string;
  copy: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={[
        "group relative overflow-hidden rounded-3xl border border-fuchsia-500/25 bg-background/20 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_30px_120px_-70px_rgba(0,0,0,0.85)] backdrop-blur-md",
        "transition-colors duration-300 hover:border-fuchsia-500/35",
        className ?? "",
      ].join(" ")}
    >
      {/* Glow border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-linear-to-r from-fuchsia-500/10 via-primary/12 to-emerald-500/10 opacity-70 blur-2xl transition-opacity duration-300 group-hover:opacity-100"
      />

      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-60 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]"
      />

      <div className="relative h-full p-6 sm:p-8">
        <div className="max-w-md">
          <h3 className="font-inter text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            {title}
          </h3>
          <p className="mt-3 font-geist text-sm leading-relaxed text-foreground/70 sm:text-base">
            {copy}
          </p>
        </div>
        {children}
      </div>
    </div>
  );
}

function CodeVisual() {
  return (
    <div className="relative mt-8 h-[22rem] w-full">
      {/* Wireframe device */}
      <div className="absolute right-0 top-0 h-full w-[70%]">
        <div
          aria-hidden="true"
          className="absolute inset-0 rounded-3xl bg-fuchsia-500/10 blur-3xl"
        />
        <div className="absolute inset-0 rounded-3xl border border-white/10 bg-background/15 backdrop-blur-sm" />

        {/* Floating code panel */}
        <div className="absolute left-6 top-10 w-[88%] rotate-[-2deg] rounded-2xl border border-fuchsia-500/30 bg-black/35 p-4 shadow-[0_20px_90px_-60px_rgba(216,109,252,0.85)] backdrop-blur-md">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-fuchsia-400/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/60" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/35" />
            <span className="ml-2 font-mono text-xs text-foreground/60">
              component.tsx
            </span>
          </div>
          <pre className="mt-3 overflow-hidden rounded-xl bg-black/30 p-3 text-xs leading-relaxed text-foreground/80">
            <code>
              {`export default function Card() {\n  return (\n    <section className="grid gap-4">\n      <h3>Frontend Architecture</h3>\n      <p>Pixel-perfect + fast.</p>\n    </section>\n  );\n}`}
            </code>
          </pre>
        </div>

        {/* Thin neon trace */}
        <div
          aria-hidden="true"
          className="absolute left-10 top-7 h-px w-[70%] bg-linear-to-r from-transparent via-fuchsia-500/70 to-transparent"
        />
        <div
          aria-hidden="true"
          className="absolute left-10 top-7 h-px w-[70%] bg-fuchsia-500/30 blur-[6px]"
        />
      </div>
    </div>
  );
}

function NodeGraphVisual({ Icon }: { Icon: React.ComponentType<{ className?: string }> }) {
  return (
    <div className="relative mt-6 h-[13rem] w-full">
      <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-fuchsia-500/10 blur-2xl" />
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-background/15 backdrop-blur-sm" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="g" x1="0" y1="0" x2="600" y2="260">
            <stop stopColor="rgba(216,109,252,0.65)" />
            <stop offset="1" stopColor="rgba(16,185,129,0.35)" />
          </linearGradient>
        </defs>

        {/* edges */}
        <path
          d="M105 80 C 180 40, 240 40, 300 80 C 360 120, 420 120, 495 80"
          stroke="url(#g)"
          strokeWidth="2"
          opacity="0.55"
        />
        <path
          d="M105 180 C 180 220, 240 220, 300 180 C 360 140, 420 140, 495 180"
          stroke="url(#g)"
          strokeWidth="2"
          opacity="0.55"
        />
        <path
          d="M300 80 L300 180"
          stroke="rgba(216,109,252,0.5)"
          strokeWidth="2"
          opacity="0.5"
        />

        {/* nodes */}
        {[
          { x: 105, y: 80 },
          { x: 495, y: 80 },
          { x: 105, y: 180 },
          { x: 495, y: 180 },
          { x: 300, y: 80 },
          { x: 300, y: 180 },
        ].map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r="12" fill="rgba(216,109,252,0.18)" />
            <circle cx={n.x} cy={n.y} r="5" fill="rgba(216,109,252,0.75)" />
          </g>
        ))}

        {/* center chip */}
        <rect
          x="252"
          y="105"
          width="96"
          height="50"
          rx="12"
          fill="rgba(0,0,0,0.35)"
          stroke="rgba(216,109,252,0.35)"
        />
      </svg>

      <div className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-2 rounded-2xl border border-fuchsia-500/25 bg-black/30 px-4 py-2 shadow-[0_20px_90px_-60px_rgba(216,109,252,0.85)] backdrop-blur-md">
        <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl bg-fuchsia-500/12 ring-1 ring-fuchsia-500/25">
          <Icon className="h-4 w-4 text-fuchsia-200" />
        </span>
        <span className="font-mono text-xs text-foreground/80">AI</span>
      </div>
    </div>
  );
}

function DbVisual() {
  return (
    <div className="relative mt-6 h-[13rem] w-full">
      <div aria-hidden="true" className="absolute inset-0 rounded-2xl bg-emerald-500/8 blur-2xl" />
      <div className="absolute inset-0 rounded-2xl border border-white/10 bg-background/15 backdrop-blur-sm" />

      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 600 260"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="db" x1="0" y1="0" x2="600" y2="260">
            <stop stopColor="rgba(216,109,252,0.55)" />
            <stop offset="1" stopColor="rgba(16,185,129,0.40)" />
          </linearGradient>
        </defs>

        {/* schema cards */}
        {[60, 230, 400].map((x, i) => (
          <g key={i}>
            <rect
              x={x}
              y={55}
              width="140"
              height="150"
              rx="16"
              fill="rgba(0,0,0,0.28)"
              stroke="rgba(255,255,255,0.12)"
            />
            <rect
              x={x + 16}
              y={75}
              width="70"
              height="10"
              rx="5"
              fill="rgba(216,109,252,0.55)"
              opacity="0.7"
            />
            {[0, 1, 2, 3].map((r) => (
              <rect
                key={r}
                x={x + 16}
                y={100 + r * 18}
                width="108"
                height="8"
                rx="4"
                fill="rgba(255,255,255,0.18)"
                opacity={0.55 - r * 0.08}
              />
            ))}
          </g>
        ))}

        {/* connectors */}
        <path
          d="M200 130 L230 130"
          stroke="url(#db)"
          strokeWidth="2"
          opacity="0.6"
        />
        <path
          d="M370 130 L400 130"
          stroke="url(#db)"
          strokeWidth="2"
          opacity="0.6"
        />

        {/* (Removed) small lock glyph that read as a "random circle + rectangle" */}
      </svg>
    </div>
  );
}

export default function CapabilitiesSection() {
  return (
    <section id="capabilities" className="relative overflow-hidden bg-background py-20 sm:py-32">
      {/* Background vignette */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
        {/* Subtle grid to match the section above */}
        <div className="absolute inset-0 opacity-40 [background-size:40px_40px] [background-image:linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />

        {/* Fade-in at the top to avoid a visible seam from the previous section */}
        <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_22%,black)]">
          <div className="absolute left-1/2 -top-10 h-120 w-220 -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-3xl" />
          <div className="absolute left-1/2 top-18 h-88 w-176 -translate-x-1/2 rounded-full bg-primary/14 blur-3xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-left">
          <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
            /// CAPABILITIES
          </div>
          <h2 className="mt-3 font-inter text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Built for Scale. From Day One.
          </h2>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Left big */}
          <BentoCard
            title="Frontend Architecture"
            copy={`We don't just build pages; we engineer interactive systems. Next.js performance, pixel-perfect responsiveness, and 98+ Lighthouse scores.`}
            className="lg:col-span-1 lg:row-span-2"
          >
            <CodeVisual />
          </BentoCard>

          {/* Top right */}
          <BentoCard
            title="AI & Automation"
            copy="Integrate intelligence directly into your workflows. From LLM integration to custom data pipelines."
            className="lg:col-span-2"
          >
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10">
                <Cpu className="h-4 w-4 text-fuchsia-200" />
              </span>
              <span className="font-geist text-sm text-foreground/70">
                Orchestrated workflows, deterministic outputs.
              </span>
            </div>
            <NodeGraphVisual Icon={Brain} />
          </BentoCard>

          {/* Bottom right */}
          <BentoCard
            title="Backend & Security"
            copy="Audit-ready databases and scalable infrastructure. Secure by design."
            className="lg:col-span-2"
          >
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-2xl border border-fuchsia-500/20 bg-fuchsia-500/10">
                <Database className="h-4 w-4 text-fuchsia-200" />
              </span>
              <span className="font-geist text-sm text-foreground/70">
                Least-privilege access, clean data contracts.
              </span>
            </div>
            <DbVisual />
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

