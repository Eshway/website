import { InfiniteSlider } from "@/components/ui/infinite-slider";
import { ProgressiveBlur } from "@/components/ui/progressive-blur";
import Image from "next/image";

export default function LogoCloud() {
    const logos: Array<{ src: string; alt: string; invert?: boolean }> = [
        { src: "/adzzat-logo.png", alt: "Adzzat", invert: true },
        { src: "/ribin-logo.png", alt: "Ribin", invert: false },
        { src: "/speezy-logo.png", alt: "Speezy", invert: false },
        { src: "/zyper-logo.png", alt: "Zyper", invert: true },
        { src: "/m.png", alt: "M", invert: false },
        { src: "/moko.png", alt: "Moko", invert: true },
        { src: "/fire.png", alt: "Fire", invert: true },
        { src: "/bridge.png", alt: "Bridge", invert: true },
    ];

    return (
        <section
            id="trust"
            className="relative overflow-hidden bg-background py-14 sm:py-16"
        >
            {/* Subtle grid + glow to match the system aesthetic */}
            <div aria-hidden="true" className="pointer-events-none absolute inset-0">
                <div className="absolute inset-0 bg-linear-to-b from-background via-background to-background" />
                {/* Fade-in at top and fade-out at bottom so it blends with adjacent sections */}
                <div className="absolute inset-0 mask-[linear-gradient(to_bottom,transparent,black_25%,black_80%,transparent)]">
                    <div className="absolute inset-0 opacity-40 bg-size-[40px_40px] bg-[linear-gradient(to_right,rgba(216,109,252,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(216,109,252,0.10)_1px,transparent_1px)]" />
                    <div className="absolute left-1/2 -top-10 h-72 w-152 -translate-x-1/2 rounded-full bg-fuchsia-500/10 blur-3xl" />
                </div>
            </div>

            <div className="group relative mx-auto max-w-7xl px-6">
                <div className="flex flex-col items-center gap-6 md:flex-row md:gap-8">
                    <div className="md:max-w-52 md:border-r md:border-white/10 md:pr-8">
                        <div className="text-center md:text-right">
                            <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
                                /// TRUST STRIP
                            </div>
                            <p className="mt-2 font-geist text-sm text-foreground/70">
                                Powering teams building high-stakes software.
                            </p>
                        </div>
                    </div>

                    <div className="relative w-full md:w-[calc(100%-13rem)]">
                        <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-background/15 py-6 shadow-[0_1px_0_0_hsl(var(--foreground)/0.06)_inset,0_24px_90px_-70px_rgba(0,0,0,0.75)] backdrop-blur-md">
                            <InfiniteSlider
                                speedOnHover={20}
                                speed={40}
                                gap={112}>
                                {logos.map((l) => (
                                    <div key={l.src} className="flex">
                                        <Image
                                            src={l.src}
                                            alt={l.alt}
                                            width={160}
                                            height={56}
                                            sizes="(min-width: 768px) 160px, 120px"
                                            className={[
                                                "mx-auto h-14 w-auto opacity-90 grayscale transition duration-300",
                                                "group-hover:opacity-100 group-hover:grayscale-0",
                                                l.invert ? "dark:invert" : "",
                                            ].join(" ")}
                                        />
                                    </div>
                                ))}
                                {/* <div className="flex">
                                <img
                                    className="mx-auto h-5 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lemonsqueezy.svg"
                                    alt="Lemon Squeezy Logo"
                                    height="20"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-4 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/laravel.svg"
                                    alt="Laravel Logo"
                                    height="16"
                                    width="auto"
                                />
                            </div>
                            <div className="flex">
                                <img
                                    className="mx-auto h-7 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/lilly.svg"
                                    alt="Lilly Logo"
                                    height="28"
                                    width="auto"
                                />
                            </div>

                            <div className="flex">
                                <img
                                    className="mx-auto h-6 w-fit dark:invert"
                                    src="https://html.tailus.io/blocks/customers/openai.svg"
                                    alt="OpenAI Logo"
                                    height="24"
                                    width="auto"
                                />
                            </div> */}
                            </InfiniteSlider>

                            <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                            <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                            <ProgressiveBlur
                                className="pointer-events-none absolute left-0 top-0 h-full w-20"
                                direction="left"
                                blurIntensity={1}
                            />
                            <ProgressiveBlur
                                className="pointer-events-none absolute right-0 top-0 h-full w-20"
                                direction="right"
                                blurIntensity={1}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
