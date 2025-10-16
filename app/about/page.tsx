import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="space-y-10 py-10 bg-page">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">About Cruiz n Clean</h1>
        <p className="text-muted-foreground max-w-2xl">
          Mobile auto detailing across [your area]. Honest work, fair pricing, real results.
        </p>
      </header>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">Our Story</h2>
        <div className="prose prose-zinc dark:prose-invert max-w-none">
          <p>
            Cruiz n Clean started with one belief: a clean car shouldn’t require a whole day at a shop.
            We bring professional-grade detailing to your driveway—on time, fully equipped, and focused on results.
            From daily drivers to weekend builds, we treat every vehicle like it’s ours.
          </p>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What We Value</h2>
        <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
          <li>
            Quality you can see: swirls minimized, glass crystal-clear, interiors actually fresh.
          </li>
          <li>
            Straightforward pricing: no pressure, no surprises, packages that fit how you drive.
          </li>
          <li>
            Care for your time: we come prepared, protect surfaces, and leave your space as we found it.
          </li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-xl font-semibold">What to Expect</h2>
        <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
          <li>Quick booking: choose a package, a time, and tell us about your vehicle.</li>
          <li>On-site detail: we arrive ready, walk the car with you, and get to work.</li>
          <li>Final check: we inspect together and share care tips to keep the finish longer.</li>
        </ol>
      </section>

      <div className="flex flex-col sm:flex-row gap-3 pt-2">
        <Link
          href="/services"
          className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
        >
          See Services
        </Link>
        <Link
          href="/booking"
          className="inline-flex items-center rounded-md border border-subtle px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
        >
          Book now
        </Link>
      </div>
    </div>
  );
}
