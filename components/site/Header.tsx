"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

const NAV_ITEMS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname.startsWith(href);
}

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Basic focus trap when mobile menu is open
  useEffect(() => {
    if (!open) return;

    const container = menuRef.current;
    if (!container) return;

    const focusable = container.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key !== "Tab" || focusable.length === 0) return;
      const active = document.activeElement as HTMLElement | null;
      if (!active) return;
      if (e.shiftKey && active === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && active === last) {
        e.preventDefault();
        first?.focus();
      }
    };

    // Lock scroll while menu is open
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", handleKeyDown);
    // Focus the first interactive element
    first?.focus();

    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 backdrop-blur supports-[backdrop-filter]:bg-base/70">
      <a href="#content" className="sr-only focus:not-sr-only focus:absolute focus:inset-x-2 focus:top-2 focus:z-[60] focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-charcoal">
        Skip to content
      </a>
      <nav aria-label="Primary" className="h-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
          <Link href="/" className="text-lg sm:text-xl font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1">
            Cruiz n Clean
          </Link>

          {/* Desktop navigation */}
          <div className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => {
              const active = isActive(pathname, item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={[
                    "text-sm font-medium transition-colors",
                    active ? "text-text" : "text-text/70 hover:text-text",
                    "underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1",
                  ].join(" ")}
                >
                  {item.label}
                </Link>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label="Open menu"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-text/80 hover:text-text hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {open && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/40" aria-hidden={!open}>
          <div
            id="mobile-menu"
            ref={menuRef}
            role="dialog"
            aria-modal="true"
            className="fixed inset-x-2 top-2 z-50 rounded-lg border border-white/10 bg-base p-4 shadow-xl"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-semibold text-text/80">Menu</span>
              <button
                type="button"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
                className="rounded-md p-2 text-text/80 hover:text-text hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
            <div className="mt-3 flex flex-col divide-y divide-white/10">
              {NAV_ITEMS.map((item) => {
                const active = isActive(pathname, item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={[
                      "py-3 text-base font-medium",
                      active ? "text-text" : "text-text/80 hover:text-text",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-md px-1",
                    ].join(" ")}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
