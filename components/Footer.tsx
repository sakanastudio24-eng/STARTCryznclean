"use client";

import Container from "./layout/Container";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site Footer" className="border-t border-white/10 bg-transparent">
      <Container>
        <div className="py-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-sm font-semibold text-text">Company</h3>
              <ul className="mt-4 space-y-2">
                <li><a className="text-sm text-text/70 hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/about">About</a></li>
                <li><a className="text-sm text-text/70 hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/services">Services</a></li>
                <li><a className="text-sm text-text/70 hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/gallery">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text">Support</h3>
              <ul className="mt-4 space-y-2">
                <li><a className="text-sm text-text/70 hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/contact">Contact</a></li>
                <li><a className="text-sm text-text/70 hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/terms">Terms</a></li>
                <li><a className="text-sm text-text/70 hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/privacy">Privacy</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text">Contact</h3>
              <ul className="mt-4 space-y-2">
                <li><a className="text-sm text-text/70 hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="mailto:info@cruiznclean.com">info@cruiznclean.com</a></li>
                <li><a className="text-sm text-text/70 hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="tel:555-555-5555">(555) 555-5555</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-sm font-semibold text-text">Follow</h3>
              <div className="mt-4 flex items-center gap-4">
                <a aria-label="Instagram" href="#" className="text-text/70 hover:text-text transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10c1.654 0 3 1.346 3 3v10c0 1.654-1.346 3-3 3H7c-1.654 0-3-1.346-3-3V7c0-1.654 1.346-3 3-3zm12 1a1 1 0 100 2 1 1 0 000-2zM12 7a5 5 0 100 10 5 5 0 000-10z"/></svg>
                </a>
                <a aria-label="Facebook" href="#" className="text-text/70 hover:text-text transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M22 12a10 10 0 10-11.5 9.95v-7.04H7.9V12h2.6V9.8c0-2.57 1.53-3.99 3.87-3.99 1.12 0 2.29.2 2.29.2v2.51h-1.29c-1.27 0-1.66.79-1.66 1.6V12h2.83l-.45 2.91h-2.38v7.04A10 10 0 0022 12z"/></svg>
                </a>
                <a aria-label="X" href="#" className="text-text/70 hover:text-text transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded p-1">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5"><path d="M3 3h3.3l5.2 7.4L16.8 3H21l-7.6 10.7L21.5 21H18.2l-5.6-7.9L7 21H2.5l7.9-10.9L3 3z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="mt-12 border-t border-white/10 py-6 text-sm text-text/70 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>© {year} Cruiz n Clean</div>
            <div className="flex items-center gap-4">
              <a className="hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1" href="/privacy">Privacy</a>
              <a className="hover:text-text transition underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded px-1" href="/terms">Terms</a>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
}
