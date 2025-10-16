"use client";
import Link from "next/link";
import { NAV_LINKS } from "../SiteConfig";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-surface/90 backdrop-blur border-b border-subtle" style={{ height: "var(--header-h)" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        <Link href="/" className="font-semibold text-base">
          Cruiz n Clean
        </Link>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="hover:text-brand transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="ml-6">
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
