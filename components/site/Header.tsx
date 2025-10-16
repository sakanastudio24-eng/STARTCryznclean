"use client";
import Link from "next/link";
import { NAV_LINKS } from "../../config/site";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-subtle bg-surface/90 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-[var(--header-h)] flex items-center justify-between">
        <Link href="/" className="text-base font-semibold">Cruiz n Clean</Link>
        <nav aria-label="Primary" className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground hover:text-zinc-900 dark:hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
          >
            Book now
          </Link>
        </div>
      </div>
    </header>
  );
}
