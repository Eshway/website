import Link from "next/link";

export const metadata = {
  title: "Terms of Service",
};

export default function TermsPage() {
  return (
    <main className="min-h-svh bg-background text-foreground">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-28">
        <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
          /// LEGAL
        </div>
        <h1 className="mt-3 font-inter text-4xl font-semibold tracking-tight sm:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 font-geist text-sm leading-relaxed text-foreground/70">
          These terms govern your use of the Eshway website and any services
          initiated through it.
        </p>

        <div className="mt-10 space-y-8 font-geist text-sm leading-relaxed text-foreground/75">
          <section>
            <h2 className="font-inter text-lg font-semibold text-foreground">
              Use of the site
            </h2>
            <p className="mt-2">
              You agree to use the site lawfully and not to attempt to disrupt,
              exploit, or reverse engineer any portion of it.
            </p>
          </section>

          <section>
            <h2 className="font-inter text-lg font-semibold text-foreground">
              Intellectual property
            </h2>
            <p className="mt-2">
              Site content and branding are owned by Eshway or its licensors.
              Client work/IP ownership is governed by the applicable engagement
              contract.
            </p>
          </section>

          <section>
            <h2 className="font-inter text-lg font-semibold text-foreground">
              No warranties
            </h2>
            <p className="mt-2">
              The website is provided “as is”. We do not warrant uninterrupted
              availability or that the site will be error-free.
            </p>
          </section>

          <section>
            <h2 className="font-inter text-lg font-semibold text-foreground">
              Limitation of liability
            </h2>
            <p className="mt-2">
              To the maximum extent permitted by law, Eshway is not liable for
              indirect or consequential damages arising from your use of the
              site.
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

