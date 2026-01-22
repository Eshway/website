import type { Metadata } from "next";
import { Geist, Geist_Mono, Playfair_Display, Inter } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { GoogleAnalyticsRouteTracker } from "@/components/google-analytics";

function getSiteUrl() {
  const env = process.env.NEXT_PUBLIC_SITE_URL?.trim();
  if (env) return env.replace(/\/+$/, "");
  return "http://localhost:3000";
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(getSiteUrl()),
  title: {
    default: "Eshway | High-Performance Engineering for Startups",
    template: "%s · Eshway",
  },
  description:
    "We don't just write code; we engineer assets. IIT Bombay alumni-led architecture for high-growth ventures.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    url: "/",
    siteName: "Eshway",
    title: "Eshway | High-Performance Engineering for Startups",
    description:
      "We don't just write code; we engineer assets. IIT Bombay alumni-led architecture for high-growth ventures.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Eshway | High-Performance Engineering for Startups",
    description:
      "We don't just write code; we engineer assets. IIT Bombay alumni-led architecture for high-growth ventures.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ?? "G-3MY67GFCTB";

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Ensure theme is applied on every route before paint (prevents /apply flipping to light mode). */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
(() => {
  try {
    const saved = localStorage.getItem("theme");
    const systemDark = window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches;
    const theme = saved || (systemDark ? "dark" : "light");
    if (theme === "dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  } catch (_) {}
})();`,
          }}
        />

        {/* Google Analytics (GA4) */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
          strategy="afterInteractive"
        />
        <Script
          id="ga4-init"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', '${gaId}', {
  page_path: window.location.pathname + window.location.search,
  anonymize_ip: true
});`,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable} ${inter.variable} antialiased`}
      >
        <GoogleAnalyticsRouteTracker gaId={gaId} />
        {children}
      </body>
    </html>
  );
}
