"use client";

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-subtle bg-surface text-text">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm text-muted-foreground">&copy; {new Date().getFullYear()} Cruiz n Clean</div>
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <a href="mailto:info@cruiznclean.com" className="focus-ring">info@cruiznclean.com</a>
            <a href="tel:555-555-5555" className="focus-ring">(555) 555-5555</a>
            <a href="/terms" className="focus-ring">Terms</a>
            <a href="/privacy" className="focus-ring">Privacy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
