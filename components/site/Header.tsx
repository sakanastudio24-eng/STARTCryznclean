"use client";
import Link from "next/link";
export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/90 border-b border-subtle backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="font-semibold focus-ring">Site Name</Link>
        <span className="text-sm text-muted-foreground">Header OK</span>
      </div>
    </header>
  );
}
