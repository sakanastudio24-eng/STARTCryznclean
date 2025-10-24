import Link from "next/link";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="corporate-footer">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center sm:text-left">
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Home</Link></li>
              <li><Link href="/about" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">About</Link></li>
              <li><Link href="/contact" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Detailing Packages</Link></li>
              <li><Link href="/gallery" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Gallery</Link></li>
              <li><Link href="/booking" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Book Now</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white mb-3">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="tel:+17145551234" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors" aria-label="Phone">(714) 555-1234</a></li>
              <li><a href="mailto:hello@cruiznclean.com" className="text-white/90 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors" aria-label="Email">hello@cruiznclean.com</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 py-6 text-sm text-white/90 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>© {new Date().getFullYear()} Cruiz n Clean</span>
            <span className="hidden sm:inline">·</span>
            <span className="text-xs sm:text-sm text-white/70">Serving Yorba Linda, Anaheim Hills, Placentia & Brea</span>
          </div>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}