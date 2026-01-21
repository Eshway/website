import Link from "next/link";
import { ArrowRight, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

function TerminalWindow() {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-fuchsia-500/25 bg-background/15 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_30px_140px_-80px_rgba(0,0,0,0.90)] backdrop-blur-md">
      {/* Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -inset-2 rounded-[2rem] bg-linear-to-r from-fuchsia-500/12 via-primary/12 to-emerald-500/10 blur-2xl"
      />

      {/* Header bar */}
      <div className="relative flex items-center justify-between border-b border-white/10 bg-background/10 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
          <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
          <span className="ml-3 font-mono text-xs text-foreground/60">
            eshway://terminal
          </span>
        </div>
        <span className="font-mono text-xs text-foreground/55">
          secure session
        </span>
      </div>

      {/* Content */}
      <div className="relative px-6 py-10 sm:px-10 sm:py-12">
        {/* terminal lines */}
        <div className="mx-auto max-w-3xl">
          <div className="space-y-3 font-mono text-sm text-foreground/70">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-emerald-300/80">eshway</span>
              <span className="text-foreground/40">›</span>
              <span>initiate</span>
              <span className="text-foreground/40">--mode</span>
              <span className="text-fuchsia-200/80">strategy-call</span>
              <span className="inline-block h-4 w-2 animate-pulse rounded-sm bg-foreground/60 align-[-2px]" />
            </div>
            <div className="text-foreground/55">
              No account managers. No sales scripts.
            </div>
            <div className="text-foreground/55">
              You speak directly with the <span className="text-foreground/80">Lead Engineers</span>.
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 flex flex-col items-center">
            <Link
              href="/apply"
              className="group relative inline-flex items-center justify-center gap-2 rounded-full bg-[#d86dfc] px-7 py-3.5 font-geist text-sm font-semibold text-black shadow-[0_24px_120px_-60px_rgba(216,109,252,0.95)] transition-transform hover:-translate-y-0.5"
            >
              Book Strategy Call
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
              <span
                aria-hidden="true"
                className="pointer-events-none absolute -inset-4 rounded-full bg-fuchsia-500/20 blur-2xl opacity-60"
              />
            </Link>
            <div className="mt-3 font-geist text-xs text-foreground/60">
              Average response time: &lt; 2 hours.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function FooterSignature() {
  return (
    <div className="mt-10 flex flex-col gap-6 border-t border-white/10 pt-8 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-white/10 bg-background/20">
          <Image
            src="/logo.png"
            alt="Eshway logo"
            className="h-5 w-5 object-contain"
            width={20}
            height={20}
          />
        </div>
        <div className="font-inter text-sm font-semibold text-white">ESHWAY</div>
      </div>

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-6">
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2">
          <Link
            href="https://x.com/Esh_way"
            className="inline-flex items-center gap-2 font-geist text-sm text-foreground/70 hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            <Twitter className="h-4 w-4 text-[#d86dfc]" />
            Twitter
          </Link>
          <Link
            href="https://www.linkedin.com/company/eshway"
            className="inline-flex items-center gap-2 font-geist text-sm text-foreground/70 hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            <Linkedin className="h-4 w-4 text-[#d86dfc]" />
            LinkedIn
          </Link>
          <span className="hidden h-4 w-px bg-white/10 sm:inline-block" aria-hidden="true" />
          <Link
            href="/privacy"
            className="inline-flex items-center font-geist text-sm text-foreground/70 hover:text-foreground"
          >
            Privacy
          </Link>
          <Link
            href="/terms"
            className="inline-flex items-center font-geist text-sm text-foreground/70 hover:text-foreground"
          >
            Terms
          </Link>
        </div>

        <Link
          href="mailto:ltd@eshway.com"
          className="inline-flex items-center gap-2 font-geist text-sm text-foreground/70 hover:text-foreground"
        >
          <Mail className="h-4 w-4 text-[#d86dfc]" />
          ltd@eshway.com
        </Link>

        <div className="font-geist text-sm text-foreground/55">
          Engineered in India 🇮🇳
        </div>
      </div>
    </div>
  );
}

export default function TerminalCloseSection() {
  return (
    <section
      id="initiate-sequence"
      className="relative overflow-hidden bg-background py-24 sm:py-36"
    >
      {/* Backdrop grid + glow */}
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
        <div className="absolute inset-0 opacity-55 bg-size-[40px_40px] bg-[linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />
        <div className="absolute inset-0 mask-[radial-gradient(circle_at_50%_15%,black,transparent_70%)]">
          <div className="absolute left-1/2 top-0 h-120 w-220 -translate-x-1/2 rounded-full bg-fuchsia-500/12 blur-3xl" />
          <div className="absolute left-1/2 top-32 h-88 w-176 -translate-x-1/2 rounded-full bg-primary/14 blur-3xl" />
        </div>
      </div>

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <div className="text-center">
          <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
            /// INITIATE SEQUENCE
          </div>
          <h2 className="mt-3 font-inter text-4xl font-semibold tracking-tight text-foreground sm:text-6xl">
            Ready to Engineer Your Vision?
          </h2>
        </div>

        <div className="mt-10">
          <TerminalWindow />
          <FooterSignature />
        </div>
      </div>
    </section>
  );
}

