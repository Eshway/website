import { ScrollVelocityContainer, ScrollVelocityRow } from '../ui/scroll-based-velocity';
import Image from "next/image";


const LogoBadge = ({ src, alt }: { src: string; alt: string }) => {
    const resolvedSrc = src.startsWith("http") ? src : `/${src}`
    return (
        <div className="mx-5 inline-flex h-24 w-40 items-center justify-center rounded-2xl border border-border/40 bg-background/40 px-5 backdrop-blur">
            <Image
                src={resolvedSrc}
                alt={alt}
                width={160}
                height={96}
                draggable={false}
                className="h-full w-auto max-w-40 object-contain opacity-80 grayscale contrast-125 brightness-125 transition hover:opacity-100 hover:grayscale-0 dark:brightness-150"
            />
        </div>
    )
}

const BrandSection = () => {
    const IMAGES_ROW_A = [
        "adzzat-logo.png",
        "ribin-logo.png",
        "speezy-logo.png",
        "zyper-logo.png"
    ]
    return (
        <section className="relative w-full py-10 sm:py-12">
            <div className="mx-auto max-w-5xl px-4 sm:px-6">
                <p className="text-center font-geist text-xs sm:text-sm font-medium tracking-wide text-muted-foreground">
                    Trusted by teams building high-stakes software
                </p>
            </div>

            <div className="relative mt-6 flex w-full flex-col items-center justify-center overflow-hidden">
                <ScrollVelocityContainer className="w-full">
                    <ScrollVelocityRow baseVelocity={6} direction={1} className="py-3">
                        {IMAGES_ROW_A.map((src, idx) => (
                            <LogoBadge
                                key={src + idx}
                                src={src}
                                alt={src.replace(/\.(png|jpe?g|svg)$/i, "").replace(/[-_]/g, " ")}
                            />
                        ))}
                    </ScrollVelocityRow>
                    {/* <ScrollVelocityRow baseVelocity={6} direction={-1} className="py-4">
              {IMAGES_ROW_B.map((src, idx) => (
                <img
                  key={idx}
                  src={`${src}&ixlib=rb-4.0.3`}
                  alt="Unsplash sample"
                  width={240}
                  height={160}
                  loading="lazy"
                  decoding="async"
                  className="mx-4 inline-block h-40 w-60 rounded-lg object-cover shadow-sm"
                />
              ))}
            </ScrollVelocityRow> */}
                </ScrollVelocityContainer>

                {/* Fade edges for premium look */}
                <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-linear-to-r" />
                <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-linear-to-l" />
            </div>
        </section>
    )
}

export default BrandSection