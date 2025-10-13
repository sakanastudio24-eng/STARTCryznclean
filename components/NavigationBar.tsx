"use client";
import Link from "next/link";
import { useCart } from "./cart/CartProvider";

export default function NavigationBar() {
  const { count } = useCart();
  return (
    <nav className="w-full bg-white/95 backdrop-blur shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary heading transition-smooth hover:opacity-90">Cruiz n Clean</Link>
        <div className="space-x-6 text-base font-medium flex items-center">
          <Link href="/" className="hover:text-accent transition-smooth">Home</Link>
          <Link href="/services" className="hover:text-accent transition-smooth">Services</Link>
          <Link href="/gallery" className="hover:text-accent transition-smooth">Gallery</Link>
          <Link href="/about" className="hover:text-accent transition-smooth">About</Link>
          <Link href="/contact" className="hover:text-accent transition-smooth">Contact</Link>
          <Link href="/request" className="ml-2 bg-accent text-charcoal px-3 py-1 rounded-full font-bold hover:bg-accent/90 transition-smooth">Get Estimate</Link>
          <Link href="/cart" className="relative inline-block ml-2" aria-label="View cart">
            <svg width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="inline align-middle"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35 2.7A1 1 0 007.5 17h9a1 1 0 00.85-1.53L17 13M7 13V6a1 1 0 011-1h6a1 1 0 011 1v7" /></svg>
            {count() > 0 && (
              <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full px-2 py-0.5 font-bold" aria-live="polite">{count()}</span>
            )}
          </Link>
        </div>
      </div>
    </nav>
  );
}
