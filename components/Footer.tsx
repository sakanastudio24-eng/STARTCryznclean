export default function Footer() {
  return (
    <footer className="w-full bg-charcoal text-offWhite py-6 mt-8">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-2">
        <span className="text-sm">&copy; {new Date().getFullYear()} Cruiz n Clean. All rights reserved.</span>
        <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4">
          <span className="text-sm">Email: <a href="mailto:info@cruiznclean.com" className="underline">info@cruiznclean.com</a></span>
          <span className="text-sm">Phone: <a href="tel:555-555-5555" className="underline">(555) 555-5555</a></span>
          <a href="/services" className="hover:underline text-sm">Services</a>
          <a href="/about" className="hover:underline text-sm">About</a>
          <a href="/terms" className="hover:underline text-sm">Terms</a>
          <a href="/privacy" className="hover:underline text-sm">Privacy</a>
        </div>
      </div>
    </footer>
  );
}
