"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 dark:bg-black/70 border-b border-black/10 dark:border-white/10 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold">Site Name</Link>
        <span className="text-sm opacity-80">Header OK</span>
      </div>
    </header>
  );
}
