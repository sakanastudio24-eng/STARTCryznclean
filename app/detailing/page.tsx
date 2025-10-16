import Link from "next/link";

export const metadata = {
  title: "Detailing · Cruiz n Clean",
  description: "Interior & exterior detailing packages with add-ons.",
};

export default function DetailingPage() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-12">
      <h1 className="text-3xl sm:text-4xl font-semibold tracking-tight">Detailing</h1>
      <p className="mt-3 text-base text-zinc-700">
        Choose a detailing package and any add-ons. You can book now or add a package to the booking form.
      </p>

      <div className="mt-8 grid gap-6 sm:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 p-5">
          <h2 className="text-xl font-semibold">Standard Detail</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700">
            <li>Exterior wash & dry</li>
            <li>Interior vacuum & wipe-down</li>
            <li>Windows inside & out</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Link href="/booking?pkg=standard-detail" className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white">Add to booking</Link>
            <Link href="/services" className="rounded-md border px-4 py-2 text-sm">More services</Link>
          </div>
        </div>

        <div className="rounded-lg border border-zinc-200 p-5">
          <h2 className="text-xl font-semibold">Premium Detail</h2>
          <ul className="mt-3 list-disc pl-5 text-sm text-zinc-700">
            <li>Hand wash + clay bar</li>
            <li>Interior shampoo & protectant</li>
            <li>Exterior wax</li>
          </ul>
          <div className="mt-5 flex gap-3">
            <Link href="/booking?pkg=premium-detail" className="rounded-md bg-zinc-900 px-4 py-2 text-sm text-white">Add to booking</Link>
            <Link href="/services" className="rounded-md border px-4 py-2 text-sm">More services</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
