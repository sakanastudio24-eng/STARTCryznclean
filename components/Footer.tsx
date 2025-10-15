"use client";

import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site Footer" className="mt-12 bg-base text-text border-t border-white/10">
      {/* Top: link grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-text/80 mb-3">Company</h2>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded" href="/about">About</Link></li>
              <li><Link className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded" href="/contact">Contact</Link></li>
              <li><Link className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded" href="/gallery">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-text/80 mb-3">Services</h2>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded" href="/services">All Services</Link></li>
              <li><Link className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded" href="/request">Request a Quote</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-text/80 mb-3">Legal</h2>
            <ul className="space-y-2 text-sm">
              <li><Link className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded" href="/privacy">Privacy</Link></li>
              <li><Link className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded" href="/terms">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-text/80 mb-3">Contact</h2>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:info@cruiznclean.com" className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded">
                  info@cruiznclean.com
                </a>
              </li>
              <li>
                <a href="tel:555-555-5555" className="hover:text-accent focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60 rounded">
                  (555) 555-5555
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom: copyright + socials */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text/70">© {year} Cruiz n Clean</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              aria-label="Instagram"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" aria-hidden="true">
                <rect x="3" y="3" width="18" height="18" rx="5" ry="5" strokeWidth="2" />
                <circle cx="12" cy="12" r="4" strokeWidth="2" />
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="Facebook"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.4V12h2.4V9.7c0-2.4 1.4-3.8 3.6-3.8 1 0 2 .18 2 .18v2.2h-1.1c-1.1 0-1.5.68-1.5 1.4V12h2.6l-.41 2.9h-2.2v7A10 10 0 0022 12z" />
              </svg>
            </a>
            <a
              href="#"
              aria-label="X"
              className="inline-flex h-8 w-8 items-center justify-center rounded-full hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/60"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M18 2h3l-7.5 8.6L22 22h-6.8l-5-6.6L4 22H1l8.2-9.4L2 2h7l4.5 6 4.5-6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
