"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { NAV_LINKS } from "./SiteConfig";
import { SETMORE_URL } from "../../lib/config";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <header className="sticky top-0 z-50 h-14 sm:h-16 bg-primary text-white border-b border-primary">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-semibold text-white">Cruiz n Clean</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm text-white/90 hover:text-white hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors ${active ? "font-semibold text-white" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <Link
            href="/booking"
            className="inline-flex items-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition"
          >
            Book Now
          </Link>
        </nav>

        {/* Mobile actions */}
        <div className="md:hidden flex items-center gap-2">
          <Link
            href="/booking"
            aria-label="View cart"
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm font-semibold text-white hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 transition"
          >
            Cart
          </Link>
          <button
            aria-label="Toggle menu"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen(o => !o)}
            className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 transition-colors"
          >
            â˜°
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-white/20 bg-primary">
          <div className="px-4 py-3 flex flex-col gap-2">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-2 text-sm text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors ${active ? "font-semibold text-white underline underline-offset-4" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/booking"
              className="mt-2 inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-semibold text-primary shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition"
            >
              Book Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
