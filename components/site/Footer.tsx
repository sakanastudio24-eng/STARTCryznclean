"use client";

export default function Footer() {
  return (
    <footer className="mt-12 bg-charcoal text-offWhite">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div className="text-sm opacity-80">&copy; {new Date().getFullYear()} Cruiz n Clean</div>
          <div className="flex flex-wrap items-center gap-4 text-sm opacity-90">
            <a href="mailto:info@cruiznclean.com" className="hover:underline">info@cruiznclean.com</a>
            <a href="tel:555-555-5555" className="hover:underline">(555) 555-5555</a>
            <a href="/terms" className="hover:underline">Terms</a>
            <a href="/privacy" className="hover:underline">Privacy</a>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-3">
          <a
            href="https://instagram.com/cruiznclean"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="social"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm5.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
            </svg>
          </a>
          <a
            href="mailto:info@cruiznclean.com"
            aria-label="Email"
            className="social"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.01L12 13l8-5.99V7H4zm0 2.236V17h16V9.236l-7.386 5.529a2 2 0 0 1-2.228 0L4 9.236z" />
            </svg>
          </a>
          <a
            href="tel:555-555-5555"
            aria-label="Phone"
            className="social"
          >
            <svg viewBox="0 0 24 24" width="20" height="20" fill="currentColor" aria-hidden="true">
              <path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.57.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 7a1 1 0 0 1 1-1h2.49a1 1 0 0 1 1 1 11.36 11.36 0 0 0 .57 3.57 1 1 0 0 1-.24 1.01l-2.2 2.2z" />
            </svg>
          </a>
        </div>
      </div>
    </footer>
  );
}
