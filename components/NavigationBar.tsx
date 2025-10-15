"use client";

import Link from "next/link";
import { useCart } from "./cart/CartProvider";
import React, { useEffect, useRef, useState } from "react";

export default function NavigationBar() {
  const { count } = useCart();
  const [open, setOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  // Lock scroll and focus trap when open
  useEffect(() => {
    if (!open) return;
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const container = menuRef.current;
    const focusable = container?.querySelectorAll<HTMLElement>(
      'a, button, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    const last = focusable?.[focusable.length - 1];
    first?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
      } else if (e.key === "Tab" && focusable && focusable.length > 0) {
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <nav className="sticky top-0 z-50 supports-[backdrop-filter]:bg-base/60 backdrop-blur bg-base/80 border-b border-subtle">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex justify-between items-center">
        <Link href="/" className="text-2xl font-semibold tracking-tight">Cruiz n Clean</Link>
        <div className="hidden md:flex items-center gap-6 text-base font-medium">
          <Link href="/services">Services</Link>
          <Link href="/gallery">Gallery</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/cart" className="relative inline-block ml-2">
            <span className="sr-only">View cart</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline align-middle"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7" /></svg>
            {count() > 0 && (
              <span className="absolute -top-2 -right-2 bg-brand text-xs text-white rounded-full px-2 py-0.5 font-bold">{count()}</span>
            )}
          </Link>
        </div>
        <button
          type="button"
          className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(true)}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden fixed inset-0 z-[60]">
          <button className="absolute inset-0 bg-black/40" aria-label="Close menu" onClick={() => setOpen(false)} />
          <div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            ref={menuRef}
            className="ml-auto h-full w-80 max-w-[85%] bg-base text-text border-l border-subtle shadow-xl p-6 flex flex-col gap-4"
          >
            <div className="flex items-center justify-between">
              <span className="text-lg font-semibold">Menu</span>
              <button
                type="button"
                className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-subtle focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-zinc-400"
                aria-label="Close menu"
                onClick={() => setOpen(false)}
              >
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"><path strokeLinecap="round" strokeWidth="2" d="M6 6l12 12M18 6l-12 12"/></svg>
              </button>
            </div>
            <nav className="grid gap-3 text-base">
              <Link href="/services" onClick={() => setOpen(false)}>Services</Link>
              <Link href="/gallery" onClick={() => setOpen(false)}>Gallery</Link>
              <Link href="/about" onClick={() => setOpen(false)}>About</Link>
              <Link href="/contact" onClick={() => setOpen(false)}>Contact</Link>
              <Link href="/cart" onClick={() => setOpen(false)}>Cart ({count()})</Link>
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
}
