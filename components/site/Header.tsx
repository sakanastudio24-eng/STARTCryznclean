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
    <header className="fixed top-0 inset-x-0 z-50 h-16 bg-white/90 border-b border-zinc-200 backdrop-blur text-zinc-900">
      <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <Link href="/" className="font-semibold">Cruiz n Clean</Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map(link => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={active ? "page" : undefined}
                className={`text-sm hover:underline underline-offset-4 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 ${active ? "font-semibold" : ""}`}
              >
                {link.label}
              </Link>
            );
          })}
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
          >
            Book now
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen(o => !o)}
          className="md:hidden inline-flex items-center justify-center rounded-md p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div id="mobile-menu" className="md:hidden border-t border-zinc-200 bg-white">
          <div className="px-4 py-3 flex flex-col gap-2">
            {NAV_LINKS.map(link => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={`py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-orange-500/40 ${active ? "font-semibold underline underline-offset-4" : ""}`}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={SETMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 btn btn-primary"
            >
              Book now
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
