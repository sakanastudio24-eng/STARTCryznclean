"use client";

import Link from "next/link";
import { useCart } from "./cart/CartProvider";

export default function NavigationBar() {
  const { count } = useCart();
  return (
    <nav className="sticky top-0 z-50 backdrop-blur bg-offWhite/80 border-b border-black/5">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary heading">Cruiz n Clean</Link>
        <div className="hidden md:flex items-center gap-6 text-base font-medium">
          <Link href="/services" className="hover:text-accent">Services</Link>
          <Link href="/gallery" className="hover:text-accent">Gallery</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
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
