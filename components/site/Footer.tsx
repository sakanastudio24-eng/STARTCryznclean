export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="border-t border-black/10 dark:border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/about" className="hover:text-foreground transition">About</a></li>
              <li><a href="/contact" className="hover:text-foreground transition">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/services" className="hover:text-foreground transition">Services</a></li>
              <li><a href="/gallery" className="hover:text-foreground transition">Gallery</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="/privacy" className="hover:text-foreground transition">Privacy</a></li>
              <li><a href="/terms" className="hover:text-foreground transition">Terms</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold">Social</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><a href="https://instagram.com" className="hover:text-foreground transition" aria-label="Instagram">Instagram</a></li>
              <li><a href="mailto:hello@example.com" className="hover:text-foreground transition" aria-label="Email">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-black/10 dark:border-white/10 py-6 text-sm text-muted-foreground flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Site Name</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
