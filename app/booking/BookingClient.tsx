"use client";

import Link from "next/link";
import { useMemo } from "react";

type Props = {
  initialPkg?: string;
  initialAddons?: string[];
};

export default function BookingClient({ initialPkg = "", initialAddons = [] }: Props) {
  const addons = useMemo(() => initialAddons.filter(Boolean), [initialAddons]);

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Booking</h1>
      <p className="mt-3 text-base text-zinc-700">Fill out the basics below. We’ll confirm details and timing.</p>

      {/* Selection chips */}
      <div className="mt-6 flex flex-wrap gap-2">
        {initialPkg && <span className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{initialPkg}</span>}
        {addons.map(a => (
          <span key={a} className="inline-flex items-center rounded-full border px-3 py-1 text-sm">{a}</span>
        ))}
        {(initialPkg || addons.length) ? (
          <Link href="/services" className="text-sm underline underline-offset-4">Change selection</Link>
        ) : null}
      </div>

      {/* Simple form (no backend yet) */}
      <form className="mt-8 grid grid-cols-1 gap-4">
        <label className="grid gap-1">
          <span className="text-sm">Name</span>
          <input className="rounded-md border px-3 py-2" required />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Email</span>
          <input type="email" className="rounded-md border px-3 py-2" required />
        </label>
        <label className="grid gap-1">
          <span className="text-sm">Phone</span>
          <input type="tel" className="rounded-md border px-3 py-2" required />
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <label className="grid gap-1">
            <span className="text-sm">Make</span>
            <input className="rounded-md border px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Model</span>
            <input className="rounded-md border px-3 py-2" />
          </label>
          <label className="grid gap-1">
            <span className="text-sm">Year</span>
            <input className="rounded-md border px-3 py-2" inputMode="numeric" pattern="[0-9]*" />
          </label>
        </div>

        <label className="grid gap-1">
          <span className="text-sm">ZIP Code</span>
          <input className="rounded-md border px-3 py-2" inputMode="numeric" pattern="[0-9]*" />
        </label>

        <label className="grid gap-1">
          <span className="text-sm">Notes</span>
          <textarea className="rounded-md border px-3 py-2 min-h-28" placeholder="Anything we should know? Pets, odors, scratches…" />
        </label>

        <div className="mt-2 flex gap-3">
          <button type="submit" className="inline-flex items-center rounded-md bg-zinc-900 px-4 py-2 text-sm font-medium text-white">Submit</button>
          <Link href="/" className="inline-flex items-center rounded-md border px-4 py-2 text-sm">Cancel</Link>
        </div>
      </form>
    </div>
  );
}
