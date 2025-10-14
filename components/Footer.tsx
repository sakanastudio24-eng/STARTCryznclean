"use client";
export default function Footer() {
  return (
    <footer className="w-full bg-base text-white/80 mt-8 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="space-y-1">
            <p className="text-sm">Email: <a href="mailto:info@cruiznclean.com" className="hover:text-accent">info@cruiznclean.com</a></p>
            <p className="text-sm">Phone: <a href="tel:555-555-5555" className="hover:text-accent">(555) 555-5555</a></p>
          </div>
          <div className="flex items-center gap-4 text-sm">
            <a href="/terms" className="hover:text-accent">Terms</a>
            <a href="/privacy" className="hover:text-accent">Privacy</a>
          </div>
        </div>
        <div className="mt-4 text-xs">&copy; {new Date().getFullYear()} Cruzn Clean. All rights reserved.</div>
      </div>
    </footer>
  );
}
