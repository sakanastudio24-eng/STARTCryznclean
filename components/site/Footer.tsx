import Link from "next/link";
import { SITE } from "../SiteConfig";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="border-t border-subtle bg-surface">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top CTA strip */}
        <div className="py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="text-center sm:text-left">
            <h2 className="text-2xl font-semibold">Ready for a cleaner drive?</h2>
            <p className="text-muted-foreground">Book mobile detailing that comes to you.</p>
          </div>
          <div className="flex items-center gap-3">
            <Link href="/booking" className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition">Book now</Link>
            <Link href="/contact" className="inline-flex items-center rounded-md border border-subtle px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition">Contact us</Link>
          </div>
        </div>

        {/* Link grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/about" className="hover:text-brand transition">About</Link></li>
              <li><Link href="/contact" className="hover:text-brand transition">Contact</Link></li>
              <li><Link href="/booking" className="hover:text-brand transition">Booking</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Services</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/services" className="hover:text-brand transition">All Services</Link></li>
              <li><Link href="/detailing" className="hover:text-brand transition">Detailing</Link></li>
              <li><Link href="/gallery" className="hover:text-brand transition">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link href="/faq" className="hover:text-brand transition">FAQ</Link></li>
              <li><Link href="/privacy" className="hover:text-brand transition">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-brand transition">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Contact</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href={SITE.socials.email} className="hover:text-brand transition">Email</a></li>
              <li><a href={SITE.socials.phone} className="hover:text-brand transition">Phone</a></li>
              <li>
                <a href={SITE.socials.instagram} className="hover:text-brand transition" rel="noopener noreferrer" target="_blank" aria-label="Instagram">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-subtle py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} {SITE.name}</span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-brand transition">Privacy</Link>
            <Link href="/terms" className="hover:text-brand transition">Terms</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
