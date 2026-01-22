"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    gtag?: GtagFn;
    dataLayer?: unknown[];
  }
}

export function GoogleAnalyticsRouteTracker({ gaId }: { gaId: string }) {
  const pathname = usePathname();

  useEffect(() => {
    if (!gaId) return;
    if (typeof window === "undefined") return;
    if (typeof window.gtag !== "function") return;

    const pagePath = window.location.pathname + window.location.search;
    window.gtag("config", gaId, { page_path: pagePath });
  }, [gaId, pathname]);

  return null;
}

