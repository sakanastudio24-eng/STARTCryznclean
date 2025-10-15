"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site Footer" className="border-t border-subtle bg-base/60 backdrop-blur supports-[backdrop-filter]:bg-base/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Company</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="/about">About</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/gallery">Gallery</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Support</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="/terms">Terms</a></li>
              <li><a href="/privacy">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Contact</h2>
            <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
              <li><a href="mailto:info@cruiznclean.com">info@cruiznclean.com</a></li>
              <li><a href="tel:555-555-5555">(555) 555-5555</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">Follow</h2>
            <ul className="mt-4 flex gap-4 text-muted-foreground">
              <li><a aria-label="Instagram" href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">IG</a></li>
              <li><a aria-label="Facebook" href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">FB</a></li>
              <li><a aria-label="X" href="#" className="hover:text-zinc-900 dark:hover:text-zinc-100">X</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t border-subtle">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <p>
            <span className="sr-only">Copyright</span>
            © {year} Cruiz n Clean
          </p>
          <p>Cruiz n Clean</p>
          <div className="flex items-center gap-4">
            <a aria-label="Instagram" href="#">Instagram</a>
            <a aria-label="Facebook" href="#">Facebook</a>
            <a aria-label="X" href="#">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
