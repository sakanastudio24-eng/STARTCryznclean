"use client";
import Link from "next/link";
import { SETMORE_URL, ENV_LABEL } from "@/lib/config";

export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-white/90 dark:bg-black/70 border-b border-black/10 dark:border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-semibold">
          Cruiz n Clean
          <span className="ml-2 text-[10px] px-2 py-0.5 rounded bg-amber-200/70 text-amber-900 align-middle">
            {ENV_LABEL}
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-6">
          <Link href="/services" className="text-sm hover:underline underline-offset-4">Services</Link>
          <Link href="/detailing" className="text-sm hover:underline underline-offset-4">Detailing</Link>
          <Link href="/booking" className="text-sm hover:underline underline-offset-4">Booking</Link>
          <Link href="/gallery" className="text-sm hover:underline underline-offset-4">Gallery</Link>
          <Link href="/about" className="text-sm hover:underline underline-offset-4">About</Link>
          <Link href="/contact" className="text-sm hover:underline underline-offset-4">Contact</Link>

          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-md bg-brand px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
          >
            Book now
          </a>
        </nav>
      </div>
    </header>
  );
}
