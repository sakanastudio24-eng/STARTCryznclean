"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/90 border-b border-black/10 backdrop-blur">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold focus-ring">Site Name</Link>
        <span className="text-sm opacity-80">Header OK</span>
      </div>
    </header>
  );
}
