import Link from "next/link";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="border-t border-primary bg-primary text-white pb-20 sm:pb-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-white">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="/about" className="hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="/services" className="hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><Link href="/privacy" className="hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-white">Social</h3>
            <ul className="mt-3 space-y-2 text-sm text-white/90">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors" aria-label="Instagram">Instagram</a></li>
              <li><a href="mailto:hello@cruiznclean.com" className="hover:text-white underline-offset-4 hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-colors" aria-label="Email">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-white/20 py-6 text-sm text-white/90 flex flex-col sm:flex-row items-center justify-between gap-4">
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
