"use client";

import { useEffect, useLayoutEffect, useState } from "react";
import { usePathname } from "next/navigation";
import {
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
  Navbar,
  NavbarButton,
  NavbarLogo,
  NavBody,
  NavItems,
} from "@/components/ui/resizable-navbar";

type NavItem = { name: string; link: string };

function prefersReducedMotion() {
  if (typeof window === "undefined") return true;
  return window.matchMedia?.("(prefers-reduced-motion: reduce)").matches ?? false;
}

function smoothScrollToHash(hash: string) {
  if (typeof window === "undefined") return false;
  if (!hash || !hash.startsWith("#")) return false;
  const raw = hash.slice(1);
  const id = (() => {
    try {
      return decodeURIComponent(raw);
    } catch {
      return raw;
    }
  })();
  const el = document.getElementById(id);
  if (!el) return false;

  el.scrollIntoView({
    behavior: prefersReducedMotion() ? "auto" : "smooth",
    block: "start",
  });

  history.pushState(null, "", `#${id}`);
  return true;
}

export default function HomeNavbar({ navItems }: { navItems: NavItem[] }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const rememberScrollForReturn = () => {
    if (typeof window === "undefined") return;
    try {
      sessionStorage.setItem(
        "__eshway_return_scroll",
        JSON.stringify({
          y: window.scrollY,
          hash: window.location.hash || "",
          t: Date.now(),
        }),
      );
    } catch {
      // ignore
    }
  };

  // Close the menu on route changes (e.g. /apply -> back) to avoid stale overlay state.
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // If we navigated to /apply from this page, restore scroll when the user returns.
  useEffect(() => {
    if (typeof window === "undefined") return;
    if (pathname !== "/") return;
    try {
      const raw = sessionStorage.getItem("__eshway_return_scroll");
      if (!raw) return;
      sessionStorage.removeItem("__eshway_return_scroll");
      const parsed = JSON.parse(raw) as { y?: number; hash?: string; t?: number };
      const y = typeof parsed?.y === "number" ? parsed.y : 0;
      const hash = typeof parsed?.hash === "string" ? parsed.hash : "";

      // Defer until after paint so layout/sections are ready.
      window.requestAnimationFrame(() => {
        window.scrollTo({ top: y, left: 0, behavior: "auto" });
        if (hash) history.replaceState(null, "", hash);
      });
    } catch {
      // ignore
    }
  }, [pathname]);

  // Pixel-perfect hero centering: measure the fixed navbar's real on-screen height
  // (including its top offset) and expose it as a CSS variable.
  useLayoutEffect(() => {
    const el = document.getElementById("site-navbar");
    if (!el) return;

    const update = () => {
      const rect = el.getBoundingClientRect();
      const clearance = Math.ceil(rect.bottom);
      document.documentElement.style.setProperty("--nav-clearance", `${clearance}px`);
    };

    update();

    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("resize", update);

    return () => {
      ro.disconnect();
      window.removeEventListener("resize", update);
    };
  }, []);

  return (
    <header>
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <NavbarButton
              href="/apply"
              variant="primary"
              onClick={rememberScrollForReturn}
            >
              Book a call
            </NavbarButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <MobileNavToggle
                isOpen={isMobileMenuOpen}
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              />
            </div>
          </MobileNavHeader>

          <MobileNavMenu
            isOpen={isMobileMenuOpen}
            onClose={() => setIsMobileMenuOpen(false)}
          >
            <div className="flex h-full flex-col">
              <div className="font-inter text-xs tracking-[0.28em] text-[#d86dfc]/80">
                /// NAVIGATION
              </div>
              <div className="mt-4 flex flex-col gap-2">
                {navItems.map((item, idx) => (
                  <a
                    key={`mobile-link-${idx}`}
                    href={item.link}
                    onClick={(e) => {
                      const didScroll = smoothScrollToHash(item.link);
                      if (didScroll) e.preventDefault();
                      setIsMobileMenuOpen(false);
                    }}
                    className="group rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-foreground/85 backdrop-blur-md transition hover:border-fuchsia-500/25 hover:bg-white/7"
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-inter text-base font-semibold tracking-tight">
                        {item.name}
                      </span>
                      <span className="font-mono text-xs text-foreground/45 transition group-hover:text-foreground/70">
                        ↵
                      </span>
                    </div>
                    <div className="mt-1 font-mono text-xs text-foreground/45">
                      {item.link}
                    </div>
                  </a>
                ))}
              </div>

              {/* Thumb-zone actions */}
              <div className="mt-auto pt-6">
                <div className="rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md">
                  <div className="font-inter text-xs tracking-[0.28em] text-foreground/60">
                    /// CONTACT
                  </div>
                  <a
                    href="mailto:ltd@eshway.com"
                    className="mt-2 block font-mono text-sm text-foreground/80 hover:text-foreground"
                  >
                    ltd@eshway.com
                  </a>
                  <div className="mt-4">
                    <NavbarButton
                      onClick={() => {
                        rememberScrollForReturn();
                        setIsMobileMenuOpen(false);
                      }}
                      href="/apply"
                      variant="primary"
                      className="w-full rounded-2xl py-3 text-base"
                    >
                      Book Strategy Call
                    </NavbarButton>
                    <div className="mt-2 font-geist text-xs text-foreground/55">
                      Average response time: &lt; 2 hours.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </header>
  );
}

