import Link from "next/link";

export default function Footer() {
  return (
    <footer aria-label="Site Footer" className="border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Company</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/about" className="hover:text-slate-900 transition-colors">About</Link></li>
              <li><Link href="/contact" className="hover:text-slate-900 transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Resources</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/services" className="hover:text-slate-900 transition-colors">Services</Link></li>
              <li><Link href="/gallery" className="hover:text-slate-900 transition-colors">Gallery</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Legal</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy</Link></li>
              <li><Link href="/terms" className="hover:text-slate-900 transition-colors">Terms</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-slate-900">Social</h3>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-slate-900 transition-colors" aria-label="Instagram">Instagram</a></li>
              <li><a href="mailto:hello@cruiznclean.com" className="hover:text-slate-900 transition-colors" aria-label="Email">Email</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-slate-200 py-6 text-sm text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span>© {new Date().getFullYear()} Cruiz n Clean</span>
          <span>All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
