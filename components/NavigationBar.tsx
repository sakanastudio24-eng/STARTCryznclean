"use client";

import Link from "next/link";
import { useCart } from "./cart/CartProvider";
import { SETMORE_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

export default function NavigationBar() {
  const { count } = useCart();
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
            onClick={() => trackEvent("book_now_clicked", { location: "nav" })}
            className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-offWhite shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 transition"
          >
            Book now
          </a>
        </div>
      </div>
    </nav>
  );
}
