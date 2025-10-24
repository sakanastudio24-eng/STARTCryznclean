"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import { NAV_LINKS } from "./SiteConfig";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 corporate-header">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link 
          href="/" 
          className="flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 focus-visible:ring-offset-[#6B0F1A] rounded-md px-1 py-1"
          aria-label="Cruiz n Clean - Home"
        >
          <img 
            src="/logo.svg" 
            alt="" 
            className="h-8 w-auto"
            width="32"
            height="32"
            aria-hidden="true"
          />
          <span className="font-semibold text-white">Cruiz n Clean</span>
        </Link>

        {/* Desktop nav - single clean line */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm font-medium nav-link focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors ${active ? "active" : ""}`}
                aria-label={link.label}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Cart icon and mobile menu */}
        <div className="flex items-center gap-3">
          <Link
            href="/booking"
            aria-label="View cart"
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" aria-hidden="true" />
          </Link>
          <button
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(o => !o)}
            className="md:hidden inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 transition-colors"
          >
            {open ? <X className="w-5 h-5" aria-hidden="true" focusable="false" /> : <Menu className="w-5 h-5" aria-hidden="true" focusable="false" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/20 corporate-header">
          <div className="px-4 py-3 flex flex-col gap-2">
            {/* Mobile brand text */}
            <div className="text-center py-2 mb-2">
              <span className="text-lg font-bold text-white">Cruiz n Clean</span>
            </div>
            {NAV_LINKS.map(link => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-3 px-2 text-sm font-medium nav-link rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors ${active ? "active bg-white/10" : ""}`}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/booking"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-[#6B0F1A] shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition"
              aria-label="Book Now"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}