import Link from "next/link";

export const metadata = {
    title: "Privacy Policy",
};

export default function PrivacyPage() {
    return (
        <main className="min-h-svh bg-background text-foreground">
            <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
                <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
          /// LEGAL
                </div>
                <h1 className="mt-3 font-inter text-4xl font-semibold tracking-tight sm:text-5xl">
                    Privacy Policy
                </h1>
                <p className="mt-4 font-geist text-sm leading-relaxed text-foreground/70">
                    We keep this simple: we do not sell your personal data. This policy
                    explains what we collect, why, and how it’s used.
                </p>

                <div className="mt-10 space-y-8 font-geist text-sm leading-relaxed text-foreground/75">
                    <section>
                        <h2 className="font-inter text-lg font-semibold text-foreground">
                            Data we collect
                        </h2>
                        <p className="mt-2">
                            When you use the site or submit an application, we may collect:
                            your name, email, company information, and any details you share
                            in the intake flow.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-inter text-lg font-semibold text-foreground">
                            How we use data
                        </h2>
                        <p className="mt-2">
                            We use this information to respond to inquiries, evaluate fit for
                            an engagement, schedule calls, and improve the site experience.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-inter text-lg font-semibold text-foreground">
                            Cookies & analytics
                        </h2>
                        <p className="mt-2">
                            If analytics are enabled, they are used to understand aggregate
                            usage (not to identify you personally). We do not sell browsing or
                            behavioral data.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-inter text-lg font-semibold text-foreground">
                            Data retention
                        </h2>
                        <p className="mt-2">
                            We retain submitted information only as long as needed for
                            business and legal purposes, then delete or anonymize it.
                        </p>
                    </section>

                    <section>
                        <h2 className="font-inter text-lg font-semibold text-foreground">
                            Contact
                        </h2>
                        <p className="mt-2">
                            Questions? Email{" "}
                            <a className="text-[#d86dfc] hover:underline" href="mailto:ltd@eshway.com">
                                ltd@eshway.com
                            </a>
                            .
                        </p>
                    </section>
                </div>

                <div className="mt-14">
                    <Link
                        href="/"
                        className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-background/20 px-5 py-2.5 font-geist text-sm text-foreground/80 hover:text-foreground"
                    >
                        ← Back to home
                    </Link>
                </div>
            </div>
        </main>
    );
}

