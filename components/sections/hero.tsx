import InteractiveTooltip from "../ui/interactive-tooltip";
import { SparklesCore } from "@/components/ui/sparkles";

const Hero = () => {
    return (
        <section className="relative z-10 min-h-svh overflow-hidden">
            {/* Reserve exactly the navbar's real clearance without affecting centering math */}
            <div className="h-[var(--nav-clearance,7rem)]" aria-hidden="true" />

            {/* Radial mask + sparkles background (behind content) */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 h-[26rem] w-full overflow-hidden [mask-image:radial-gradient(50%_50%,white,transparent)] before:absolute before:inset-0 before:bg-[radial-gradient(circle_at_bottom_center,oklch(var(--primary)/0.55),transparent_70%)] before:opacity-40 after:absolute after:top-1/2 after:-left-1/2 after:aspect-[1/0.7] after:w-[200%] after:rounded-[100%] after:border-t after:border-border/40 after:bg-background dark:after:bg-zinc-900"
            >
                <SparklesCore
                    id="hero-sparkles"
                    background="transparent"
                    particleDensity={300}
                    className="absolute inset-x-0 bottom-0 h-full w-full [mask-image:radial-gradient(50%_50%,white,transparent_85%)]"
                />
            </div>

            {/* Center the hero inside the remaining viewport height below the navbar */}
            <div className="relative mx-auto flex min-h-[calc(100svh-var(--nav-clearance,7rem))] max-w-4xl flex-col justify-center text-center px-4 sm:px-6">
                {/* Social proof */}
                <div className="mb-8 sm:mb-6 flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
                    <InteractiveTooltip />
                    <div className="flex flex-col items-center sm:items-start">
                        <div className="flex items-center gap-0.5">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3.5 w-3.5 sm:h-4 sm:w-4 fill-foreground"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" className=""></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3.5 w-3.5 sm:h-4 sm:w-4 fill-foreground"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" className=""></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3.5 w-3.5 sm:h-4 sm:w-4 fill-foreground"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" className=""></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3.5 w-3.5 sm:h-4 sm:w-4 fill-foreground"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" className=""></path></svg>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" data-lucide="star" className="lucide lucide-star h-3.5 w-3.5 sm:h-4 sm:w-4 fill-foreground"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z" className=""></path></svg>
                        </div>
                        <p className="mt-1.5 sm:mt-1 text-[11px] sm:text-xs font-medium text-muted-foreground font-geist">140+ happy partners</p>
                    </div>
                </div>

                <h1 className="max-w-5xl text-foreground font-medium text-3xl sm:text-5xl md:text-7xl tracking-tight sm:tracking-tighter font-geist mx-auto leading-tight sm:leading-none" >
                    The End of the
                    <span className="font-playfair italic font-medium text-foreground tracking-tight" > Black-Box </span>
                    Digital Agency
                </h1>

                <p className="max-w-2xl text-sm sm:text-lg font-normal text-muted-foreground font-geist mt-5 sm:mt-6 mx-auto leading-relaxed sm:leading-normal px-2 sm:px-0">
                    Eshway delivers high-ticket web and software projects with complete transparency—powered by our in-house AI tracking platform.
                </p>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-3 mt-7 sm:mt-8 items-stretch sm:items-center justify-center w-full sm:w-auto px-2 sm:px-0">
                    <a href="#" className="inline-flex items-center justify-center gap-2 shadow-[0_0_0_1px_hsl(var(--foreground)/0.08)_inset] text-sm sm:text-base font-medium text-primary-foreground font-geist bg-primary rounded-xl py-3 sm:pt-3 sm:pb-3 px-6 sm:pr-6 sm:pl-6 transition-all hover:bg-primary/90 active:scale-[0.98]">Get Started</a>
                    <a href="#" className="inline-flex items-center justify-center gap-2 rounded-xl border border-border bg-accent/50 px-6 py-3 text-sm sm:text-base font-medium text-foreground backdrop-blur hover:bg-accent font-geist transition-all active:scale-[0.98]">
                        Learn more
                    </a>
                </div>

                {/* Glow plate */}
            </div>
        </section>
    );
};

export default Hero;