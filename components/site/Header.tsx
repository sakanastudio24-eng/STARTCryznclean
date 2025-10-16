"use client";
import Link from "next/link";
import { SETMORE_URL } from "../../lib/config";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/70 border-b border-black/10 dark:border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">Cruiz n Clean</Link>
        <a
          href={SETMORE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
        >
          Book now
        </a>
      </div>
    </header>
  );
}
