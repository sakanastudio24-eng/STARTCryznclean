"use client";
import Link from "next/link";
import { useCart } from "./cart/CartProvider";

export default function NavigationBar() {
  const { count } = useCart();
  return (
    <nav className="sticky top-0 z-40 backdrop-blur bg-base/70 border-b border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-display font-bold text-text hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-accent rounded">
          Cruzn Clean
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/" className="text-text/90 hover:opacity-80 focus:underline focus:outline-none focus:ring-2 focus:ring-accent rounded">Home</Link>
          <Link href="/services" className="text-text/90 hover:opacity-80 focus:underline focus:outline-none focus:ring-2 focus:ring-accent rounded">Services</Link>
          <Link href="/gallery" className="text-text/90 hover:opacity-80 focus:underline focus:outline-none focus:ring-2 focus:ring-accent rounded">Gallery</Link>
          <Link href="/about" className="text-text/90 hover:opacity-80 focus:underline focus:outline-none focus:ring-2 focus:ring-accent rounded">About</Link>
          <Link href="/contact" className="text-text/90 hover:opacity-80 focus:underline focus:outline-none focus:ring-2 focus:ring-accent rounded">Contact</Link>
          <Link href="/cart" className="relative inline-flex items-center">
            <span className="sr-only">View cart</span>
            <svg width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline align-middle text-text"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7" /></svg>
            {count() > 0 && (
              <span className="ml-2 rounded-full bg-primary text-text px-2 py-0.5 text-xs font-semibold">{count()}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
