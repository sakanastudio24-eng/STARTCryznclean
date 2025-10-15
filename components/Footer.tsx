"use client";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer aria-label="Site Footer" className="border-t border-subtle bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h2 className="text-sm font-semibold">Company</h2>
            <ul className="mt-4 space-y-2">
              <li><a className="text-sm text-muted-foreground hover:text-foreground transition" href="/about">About</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-foreground transition" href="/services">Services</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-foreground transition" href="/gallery">Gallery</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-foreground transition" href="/contact">Contact</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Support</h2>
            <ul className="mt-4 space-y-2">
              <li><a className="text-sm text-muted-foreground hover:text-foreground transition" href="/terms">Terms</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-foreground transition" href="/privacy">Privacy</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Contact</h2>
            <ul className="mt-4 space-y-2">
              <li><a className="text-sm text-muted-foreground hover:text-foreground transition" href="mailto:info@cruiznclean.com">info@cruiznclean.com</a></li>
              <li><a className="text-sm text-muted-foreground hover:text-foreground transition" href="tel:555-555-5555">(555) 555-5555</a></li>
            </ul>
          </div>
          <div>
            <h2 className="text-sm font-semibold">Follow</h2>
            <ul className="mt-4 flex gap-4 text-muted-foreground">
              <li><a aria-label="Instagram" href="#" className="hover:text-foreground transition"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm0 2h10a3 3 0 013 3v10a3 3 0 01-3 3H7a3 3 0 01-3-3V7a3 3 0 013-3zm5 2a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm6.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/></svg></a></li>
              <li><a aria-label="Facebook" href="#" className="hover:text-foreground transition"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M13 22V12h3l1-4h-4V6c0-1.103.897-2 2-2h2V0h-2c-2.757 0-5 2.243-5 5v3H8v4h3v10h2z"/></svg></a></li>
              <li><a aria-label="X" href="#" className="hover:text-foreground transition"><svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M18.901 1H22l-7.5 8.57L23.5 23h-6.4l-5-6.52L5 23H2l8.2-9.373L1.5 1h6.5l4.5 6.063L18.901 1z"/></svg></a></li>
            </ul>
          </div>
        </div>
        <div className="mt-12 border-t border-subtle py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
          <p>© {year} Cruiz n Clean</p>
          <p>Cruiz n Clean</p>
          <div className="flex items-center gap-4">
            <a aria-label="Instagram" href="#" className="hover:text-foreground transition">Instagram</a>
            <a aria-label="Facebook" href="#" className="hover:text-foreground transition">Facebook</a>
            <a aria-label="X" href="#" className="hover:text-foreground transition">X</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
