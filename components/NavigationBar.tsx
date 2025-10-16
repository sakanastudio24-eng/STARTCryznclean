"use client";

import Link from "next/link";
import { SETMORE_URL } from "../lib/config";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-offWhite/80 border-b border-black/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary heading">Cruiz n Clean</Link>
        <div className="flex items-center gap-6 text-base font-medium">
          <Link href="/services" className="hover:text-accent">Services</Link>
          <Link href="/gallery" className="hover:text-accent">Gallery</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
            onClick={() => {
              try { window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'book_now_clicked', location: 'header' } })); } catch {}
            }}
          >
            Book now
          </a>
        </div>
      </div>
    </nav>
  );
}
