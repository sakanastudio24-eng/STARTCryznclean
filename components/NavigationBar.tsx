"use client";

import Link from "next/link";
import { useCart } from "./cart/CartProvider";
import { useEffect, useRef, useState } from "react";

const NAV_LINKS = [
  { href: "/services", label: "Services" },
  { href: "/gallery", label: "Gallery" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function NavigationBar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const overlayRef = useRef<HTMLDivElement | null>(null);
  const prevFocusRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function getFocusable(): HTMLElement[] {
      if (!overlayRef.current) return [];
      const nodes = overlayRef.current.querySelectorAll<HTMLElement>(
        [
          'a[href]',
          'button:not([disabled])',
          'input:not([disabled])',
          'select:not([disabled])',
          'textarea:not([disabled])',
          '[tabindex]:not([tabindex="-1"])',
        ].join(",")
      );
      return Array.from(nodes).filter((el) => !el.hasAttribute("inert"));
    }

    function onKeyDown(e: KeyboardEvent) {
      if (!open) return;
      if (e.key === "Escape") {
        e.preventDefault();
        setOpen(false);
        return;
      }
      if (e.key === "Tab") {
        const focusable = getFocusable();
        if (focusable.length === 0) return;
        const currentIndex = focusable.indexOf(document.activeElement as HTMLElement);
        let nextIndex = currentIndex;
        if (e.shiftKey) {
          nextIndex = currentIndex <= 0 ? focusable.length - 1 : currentIndex - 1;
        } else {
          nextIndex = currentIndex === focusable.length - 1 ? 0 : currentIndex + 1;
        }
        e.preventDefault();
        focusable[nextIndex]?.focus();
      }
    }

    if (open) {
      prevFocusRef.current = (document.activeElement as HTMLElement) ?? null;
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", onKeyDown);
      // Focus first focusable in the overlay
      setTimeout(() => {
        const first = getFocusable()[0];
        first?.focus();
      }, 0);
    } else {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
      prevFocusRef.current?.focus?.();
    }
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open]);

  return (
    <nav
      aria-label="Primary"
      className="sticky top-0 z-50 border-b border-white/10 bg-base/70 backdrop-blur supports-[backdrop-filter]:bg-base/60"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[70px] flex items-center justify-between text-text">
        <Link href="/" className="text-2xl font-bold heading tracking-tight hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base rounded-md">
          Cruiz n Clean
        </Link>

        <div className="hidden md:flex items-center gap-8 text-base font-medium">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hover:text-accent transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link href="/cart" className="relative inline-flex items-center justify-center ml-2">
            <span className="sr-only">View cart</span>
            <svg
              width="28"
              height="28"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="inline align-middle"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7"
              />
            </svg>
            {count() > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-xs text-white rounded-full px-2 py-0.5 font-bold">
                {count()}
              </span>
            )}
          </Link>
        </div>

        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md px-3 py-2 text-text/90 hover:text-text hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base transition-colors"
          aria-label="Open menu"
          aria-controls="primary-mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {open && (
        <div
          ref={overlayRef}
          className="md:hidden fixed inset-0 z-50 bg-base/80 backdrop-blur-sm motion-safe:transition-opacity duration-500 ease-out"
          role="dialog"
          aria-modal="true"
        >
          <div className="absolute inset-0" onClick={() => setOpen(false)} aria-hidden="true" />
          <div
            id="primary-mobile-menu"
            className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4"
          >
            <div className="flex items-center justify-between h-[70px]">
              <Link
                href="/"
                className="text-xl font-bold heading tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base rounded-md"
                onClick={() => setOpen(false)}
              >
                Cruiz n Clean
              </Link>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-md p-2 hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-base"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <div className="mt-2 rounded-xl bg-base/90 shadow-card ring-1 ring-white/10 p-4">
              <nav className="flex flex-col gap-1" aria-label="Mobile Primary">
                {NAV_LINKS.map((l) => (
                  <Link
                    key={l.href}
                    href={l.href}
                    className="w-full rounded-lg px-4 py-3 text-base font-medium hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                ))}
                <Link
                  href="/cart"
                  className="w-full rounded-lg px-4 py-3 text-base font-medium hover:bg-white/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent"
                  onClick={() => setOpen(false)}
                >
                  View cart {count() > 0 ? `(${count()})` : ""}
                </Link>
              </nav>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
