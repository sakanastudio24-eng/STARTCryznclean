"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { useCart } from "./ui/CartProvider";

export default function NavigationBar() {
  const { count } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeButtonRef = useRef<HTMLButtonElement | null>(null);
  const overlayRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [menuOpen]);

  useEffect(() => {
    if (!menuOpen) return;
    const container = overlayRef.current;
    const focusables = container?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusables && focusables[0];
    const last = focusables && focusables[focusables.length - 1];
    // Focus first focusable when menu opens
    first?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        closeButtonRef.current?.focus();
      }
      if (event.key === "Tab" && focusables && focusables.length > 0) {
        const active = document.activeElement as HTMLElement | null;
        const isShift = event.shiftKey;
        if (!isShift && active === last) {
          event.preventDefault();
          first?.focus();
        } else if (isShift && active === first) {
          event.preventDefault();
          (last as HTMLElement | undefined)?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50">
      <nav aria-label="Primary" className="h-[70px] backdrop-blur supports-[backdrop-filter]:bg-base/70 bg-base/90 text-text border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="h-full flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-bold heading text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded"
            >
              Cruiz n Clean
            </Link>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-6 text-base font-medium">
              <NavItem href="/services">Services</NavItem>
              <NavItem href="/gallery">Gallery</NavItem>
              <NavItem href="/about">About</NavItem>
              <NavItem href="/contact">Contact</NavItem>
              <Link
                href="/cart"
                className="relative inline-flex items-center justify-center ml-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded"
              >
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
                  <span className="absolute -top-2 -right-2 bg-accent text-xs text-charcoal rounded-full px-2 py-0.5 font-bold">
                    {count()}
                  </span>
                )}
              </Link>
            </div>

            {/* Mobile hamburger */}
            <button
              ref={closeButtonRef}
              type="button"
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              aria-label="Open menu"
              aria-controls="primary-menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile overlay menu */}
      <div
        id="primary-menu"
        className={
          menuOpen
            ? "fixed inset-0 z-[60] md:hidden bg-base/90 backdrop-blur-sm transition-opacity duration-500"
            : "pointer-events-none fixed inset-0 z-[60] md:hidden opacity-0"
        }
        style={{ opacity: menuOpen ? 1 : 0 }}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile primary navigation"
        aria-hidden={!menuOpen}
        ref={overlayRef}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between mb-6">
            <Link
              href="/"
              className="text-xl font-bold heading text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded"
              onClick={() => setMenuOpen(false)}
            >
              Cruiz n Clean
            </Link>
            <button
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <path strokeWidth="2" strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <nav aria-label="Primary" className="flex flex-col gap-2 text-lg font-medium">
            <NavItem href="/services" onClick={() => setMenuOpen(false)}>
              Services
            </NavItem>
            <NavItem href="/gallery" onClick={() => setMenuOpen(false)}>
              Gallery
            </NavItem>
            <NavItem href="/about" onClick={() => setMenuOpen(false)}>
              About
            </NavItem>
            <NavItem href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </NavItem>
            <Link
              href="/cart"
              className="mt-2 inline-flex items-center justify-start gap-2 rounded-md px-3 py-2 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
              onClick={() => setMenuOpen(false)}
            >
              <span>View cart</span>
              {count() > 0 && (
                <span className="inline-flex min-w-[1.5rem] justify-center rounded-full bg-accent px-2 py-0.5 text-xs font-bold text-charcoal">
                  {count()}
                </span>
              )}
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
}

type NavItemProps = {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
};

function NavItem({ href, children, onClick }: NavItemProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="rounded-md px-3 py-2 transition-colors duration-500 hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 bg-gradient-to-r from-transparent to-transparent hover:from-primary/10 hover:to-accent/10"
    >
      {children}
    </Link>
  );
}

