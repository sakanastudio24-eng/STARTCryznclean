"use client";

import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import Container from "./Container";
import { useCart } from "./cart/CartProvider";

function FocusTrap({ active, containerRef, onDeactivate }: { active: boolean; containerRef: React.RefObject<HTMLElement>; onDeactivate: () => void }) {
  useEffect(() => {
    if (!active) return;
    const container = containerRef.current;
    if (!container) return;
    const focusable = container.querySelectorAll<HTMLElement>(
      'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        e.preventDefault();
        onDeactivate();
      } else if (e.key === "Tab") {
        if (focusable.length === 0) return;
        if (e.shiftKey) {
          if (document.activeElement === first) {
            e.preventDefault();
            (last || first)?.focus();
          }
        } else {
          if (document.activeElement === last) {
            e.preventDefault();
            (first || last)?.focus();
          }
        }
      }
    };
    document.addEventListener("keydown", handleKey);
    // focus container on open
    requestAnimationFrame(() => (first || container).focus());
    return () => document.removeEventListener("keydown", handleKey);
  }, [active, containerRef, onDeactivate]);
  return null;
}

export default function NavigationBar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden"; else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);
  return (
    <nav aria-label="Primary" className="sticky top-0 z-50 bg-white/75 dark:bg-zinc-950/75 backdrop-blur border-b border-subtle">
      <Container className="h-16 flex items-center justify-between">
        <Link href="/" className="text-xl sm:text-2xl font-semibold tracking-tight">
          Cruiz n Clean
        </Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/services" className="hover:opacity-80">Services</Link>
          <Link href="/gallery" className="hover:opacity-80">Gallery</Link>
          <Link href="/about" className="hover:opacity-80">About</Link>
          <Link href="/contact" className="hover:opacity-80">Contact</Link>
          <Link href="/cart" className="relative inline-flex items-center">
            <span className="sr-only">View cart</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7" /></svg>
            {count() > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand text-xs text-white rounded-full px-1.5 py-0.5 font-bold leading-none" aria-label={`${count()} items in cart`}>{count()}</span>
            )}
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-subtle hover:bg-zinc-100 dark:hover:bg-zinc-900"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label="Toggle menu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
      </Container>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden fixed inset-0 z-50" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-black/30" onClick={() => setOpen(false)} />
          <div ref={menuRef} id="mobile-menu" className="relative ml-auto h-full w-80 max-w-[85vw] bg-white dark:bg-zinc-950 border-l border-subtle p-6 focus:outline-none" tabIndex={-1}>
            <FocusTrap active={open} containerRef={menuRef} onDeactivate={() => setOpen(false)} />
            <div className="flex items-center justify-between mb-6">
              <span className="text-lg font-semibold">Menu</span>
              <button className="h-9 w-9 inline-flex items-center justify-center rounded-md border border-subtle hover:bg-zinc-100 dark:hover:bg-zinc-900" onClick={() => setOpen(false)} aria-label="Close menu">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <nav className="flex flex-col gap-3 text-base">
              <Link href="/services" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900">Services</Link>
              <Link href="/gallery" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900">Gallery</Link>
              <Link href="/about" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900">About</Link>
              <Link href="/contact" onClick={() => setOpen(false)} className="px-2 py-2 rounded hover:bg-zinc-100 dark:hover:bg-zinc-900">Contact</Link>
              <Link href="/request" onClick={() => setOpen(false)} className="mt-2 px-2 py-2 rounded bg-brand text-white text-center">Request a Quote</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
