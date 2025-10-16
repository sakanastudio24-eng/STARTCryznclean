"use client";

import Link from "next/link";
import { useCart } from "./cart/CartProvider";
import { NAV_LINKS } from "../config/site";

export default function NavigationBar() {
  const { count } = useCart();
  return (
    <nav className="fixed top-0 inset-x-0 z-50 border-b border-subtle bg-surface/90 backdrop-blur">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 h-[var(--header-h)] flex justify-between items-center">
        <Link href="/" className="text-base font-semibold">Cruiz n Clean</Link>
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {NAV_LINKS.map(link => (
            <Link key={link.href} href={link.href} className="text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded transition">{link.label}</Link>
          ))}
          <Link href="/booking" className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition ml-2">Book now</Link>
          <Link href="/cart" className="relative inline-block ml-2">
            <span className="sr-only">View cart</span>
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline align-middle"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7" /></svg>
            {count() > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-xs text-white rounded-full px-2 py-0.5 font-bold">{count()}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
