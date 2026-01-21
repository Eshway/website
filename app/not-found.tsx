import Link from "next/link";

export default function NotFound() {
  return (
    <main className="min-h-svh bg-background px-4 py-16 text-foreground sm:px-6 sm:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="relative overflow-hidden rounded-3xl border border-fuchsia-500/25 bg-background/20 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_30px_140px_-80px_rgba(0,0,0,0.90)] backdrop-blur-md">
          {/* Glow + grid */}
          <div aria-hidden="true" className="pointer-events-none absolute inset-0">
            <div className="absolute -inset-8 rounded-[2rem] bg-linear-to-r from-fuchsia-500/12 via-primary/12 to-emerald-500/10 blur-2xl" />
            <div className="absolute inset-0 opacity-45 bg-size-[40px_40px] bg-[linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />
            <div className="absolute inset-0 mask-[radial-gradient(circle_at_50%_35%,black,transparent_70%)]">
              <div className="absolute left-1/2 -top-10 h-88 w-176 -translate-x-1/2 rounded-full bg-fuchsia-500/14 blur-3xl" />
            </div>
          </div>

          {/* Header bar */}
          <div className="relative flex items-center justify-between gap-3 border-b border-white/10 bg-background/10 px-4 py-4 sm:px-5">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/18" />
              <span className="h-2.5 w-2.5 rounded-full bg-white/12" />
              <span className="ml-3 font-mono text-xs text-foreground/60">
                eshway://kernel
              </span>
            </div>
            <span className="shrink-0 font-mono text-xs text-foreground/55">
              exception: 0x00000404
            </span>
          </div>

          <div className="relative px-4 py-10 sm:px-10 sm:py-12">
            <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
              /// TERMINAL CRASH
            </div>
            <h1 className="mt-3 font-inter font-semibold tracking-tight text-[clamp(1.9rem,7.2vw,3rem)] sm:text-5xl">
              <span className="block">ERROR 404:</span>
              <span className="block break-all text-foreground/95">
                DIRECTORY_NOT_FOUND
              </span>
            </h1>
            <p className="mt-4 font-geist text-sm leading-relaxed text-foreground/70 sm:text-base">
              You hit a dead path. No redirects. No fake doors. Just a clean
              failure mode—like we build production systems.
            </p>

            <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-black/35 p-4 sm:p-5">
              <div className="font-mono text-xs text-foreground/65">
                kernel panic: attempted to resolve route
                <span className="text-foreground/85"> &quot;{"/"}&quot;</span> →
                <span className="text-rose-200/80"> not found</span>
              </div>
              <div className="mt-4 space-y-1 font-mono text-xs text-foreground/55">
                <div>at router.resolve (app-router:118)</div>
                <div>at middleware.dispatch (edge:52)</div>
                <div>at render.commit (react:1024)</div>
              </div>
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-background/10 px-4 py-4 sm:px-5">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-2 font-mono text-sm text-foreground/75">
                <span className="text-emerald-300/80">eshway</span>
                <span className="text-foreground/40">›</span>
                <Link
                  href="/"
                  className="text-fuchsia-200/90 underline-offset-4 hover:underline"
                >
                  cd /home
                </Link>
                <span className="inline-block h-4 w-2 animate-pulse rounded-sm bg-foreground/60 align-[-2px]" />
              </div>
              <div className="mt-2 font-geist text-xs text-foreground/55">
                Tip: If you expected a page here, ping{" "}
                <a
                  className="text-[#d86dfc] hover:underline"
                  href="mailto:ltd@eshway.com"
                >
                  ltd@eshway.com
                </a>
                .
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

