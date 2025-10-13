import Link from "next/link";

export default function NavigationBar() {
  return (
    <nav className="w-full bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-primary heading">Cruiz n Clean</Link>
        <div className="space-x-6 text-base font-medium">
          <Link href="/services" className="hover:text-accent">Services</Link>
          <Link href="/gallery" className="hover:text-accent">Gallery</Link>
          <Link href="/about" className="hover:text-accent">About</Link>
          <Link href="/contact" className="hover:text-accent">Contact</Link>
        </div>
      </div>
    </nav>
  );
}
