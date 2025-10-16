import { SITE } from "../../config/site";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="border-t border-subtle bg-surface">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          {/* Top CTA strip */}
          <div className="py-10 sm:py-12 flex flex-col sm:flex-row items-center justify-between gap-6">
            <h3 className="text-2xl font-semibold text-center sm:text-left">Ready for a cleaner drive?</h3>
            <div className="flex items-center gap-3">
              <a href="/booking" className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition">Book now</a>
              <a href="/contact" className="inline-flex items-center rounded-md border border-subtle px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition">Contact us</a>
            </div>
          </div>

          {/* Link grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">
            <div>
              <h4 className="text-sm font-semibold">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="/about" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">About</a></li>
                <li><a href="/contact" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Contact</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Services</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="/services" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Services</a></li>
                <li><a href="/gallery" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Gallery</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Resources</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href="/faq" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">FAQ</a></li>
                <li><a href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Privacy</a></li>
                <li><a href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold">Contact</h4>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li><a href={SITE.socials.email} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Email</a></li>
                <li><a href={SITE.socials.phone} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Phone</a></li>
                <li><a href={SITE.socials.instagram} className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Instagram</a></li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-subtle py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
            <span>© {new Date().getFullYear()} {SITE.name}</span>
            <div className="flex items-center gap-4">
              <a href="/privacy" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Privacy</a>
              <a href="/terms" className="hover:text-zinc-900 dark:hover:text-zinc-100 transition">Terms</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
