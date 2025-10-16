"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { NAV_LINKS } from "./SiteConfig";

export default function Header() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement | null>(null);
  const toggleButtonRef = useRef<HTMLButtonElement | null>(null);
  const previouslyFocusedRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (mobileOpen) {
      previouslyFocusedRef.current = document.activeElement as HTMLElement | null;
      const focusables = panelRef.current?.querySelectorAll<HTMLElement>(
        'a[href], button, [tabindex]:not([tabindex="-1"])'
      );
      focusables && focusables[0]?.focus();
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      previouslyFocusedRef.current?.focus?.();
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (!mobileOpen) return;
      if (e.key === "Escape") {
        setMobileOpen(false);
        return;
      }
      if (e.key === "Tab" && panelRef.current) {
        const focusables = Array.from(
          panelRef.current.querySelectorAll<HTMLElement>('a[href], button, [tabindex]:not([tabindex="-1"])')
        ).filter((el) => !el.hasAttribute("disabled") && !el.getAttribute("aria-hidden"));
        if (focusables.length === 0) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        const active = document.activeElement as HTMLElement | null;
        if (!e.shiftKey && active === last) {
          e.preventDefault();
          first.focus();
        } else if (e.shiftKey && active === first) {
          e.preventDefault();
          last.focus();
        }
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [mobileOpen]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname?.startsWith(href);
  };

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 h-16 bg-white/90 dark:bg-black/70 border-b border-black/10 dark:border-white/10 backdrop-blur"
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link href="/" className="font-semibold text-lg focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent">
          Cruiz n Clean
        </Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => {
            const active = isActive(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={
                  "text-sm font-medium transition-colors motion-reduce:transition-none focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
                  (active
                    ? "text-primary underline underline-offset-4"
                    : "text-text/80 hover:text-text")
                }
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <div className="md:hidden">
          <button
            ref={toggleButtonRef}
            type="button"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            aria-controls="primary-navigation"
            onClick={() => setMobileOpen((o) => !o)}
            className="inline-flex items-center justify-center p-2 rounded-md border border-black/10 dark:border-white/10 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
          >
            <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="block">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile panel */}
      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-x-0 top-[var(--header-h)] z-50 bg-white/95 dark:bg-black/90 border-b border-black/10 dark:border-white/10 backdrop-blur md:hidden"
        >
          <div ref={panelRef} id="primary-navigation" className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
            <div className="flex flex-col gap-2">
              {NAV_LINKS.map((link) => {
                const active = isActive(link.href);
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={
                      "block w-full text-left rounded-md px-3 py-2 text-base font-medium focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent " +
                      (active ? "bg-primary/10 text-primary" : "hover:bg-black/5 dark:hover:bg-white/10")
                    }
                  >
                    {link.label}
                  </Link>
                );
              })}
              <button
                type="button"
                onClick={() => setMobileOpen(false)}
                className="mt-2 self-start text-sm text-text/70 underline underline-offset-4 focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
