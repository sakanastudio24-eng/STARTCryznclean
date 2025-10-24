"use client";
import Link from "next/link";
import { Calendar } from "lucide-react";

export default function StickyBookNow() {
  return (
    <div className="fixed bottom-4 right-4 z-50 sm:hidden">
      <Link
        href="/booking"
        className="inline-flex items-center justify-center w-14 h-14 bg-[var(--brand-primary)] text-white rounded-full shadow-lg hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-900 transition-all duration-200 hover:scale-105"
        aria-label="Book your appointment now"
      >
        <Calendar className="w-6 h-6" aria-hidden="true" />
      </Link>
    </div>
  );
}
