"use client";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="mt-16 border-t border-white/10 bg-base/60 text-text">
      {/* Link grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-text/80 tracking-wide">Company</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/about">About</a></li>
              <li><a className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text/80 tracking-wide">Services</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/services">Packages</a></li>
              <li><a className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/gallery">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text/80 tracking-wide">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/terms">Terms</a></li>
              <li><a className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="/privacy">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-text/80 tracking-wide">Get in touch</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="mailto:info@cruiznclean.com">info@cruiznclean.com</a></li>
              <li><a className="hover:text-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded" href="tel:555-555-5555">(555) 555-5555</a></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Legal row */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-text/80">
          <p>&copy; {new Date().getFullYear()} Cruiz n Clean. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="/privacy" className="hover:text-accent">Privacy</a>
            <a href="/terms" className="hover:text-accent">Terms</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
