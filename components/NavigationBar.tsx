"use client";

import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-offWhite/80 border-b border-black/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary heading">Cruiz n Clean</Link>
        <div className="hidden md:flex items-center gap-6 text-base font-medium">
          <Link href="/services" className="hover:text-accent">Services</Link>
          <Link href="/gallery" className="hover:text-accent">Gallery</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
          <Link href="/request" className="btn-primary-cta px-4 py-2 rounded-lg text-sm">
            Book Now
          </Link>
        </div>
      </div>
    </nav>
  );
}
