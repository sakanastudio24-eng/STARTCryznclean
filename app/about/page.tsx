export default function AboutPage() {
  return (
    <div className="bg-page">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl font-bold mb-3">About Cruiz n Clean</h1>
        <p className="text-lg text-muted-foreground mb-10">Mobile auto detailing across [your area]. Honest work, fair pricing, real results.</p>

        <section className="prose prose-zinc dark:prose-invert max-w-none">
          <h2>Our Story</h2>
          <p>
            Cruiz n Clean started with one belief: a clean car shouldn’t require a whole day at a shop.
            We bring professional-grade detailing to your driveway—on time, fully equipped, and focused on results.
            From daily drivers to weekend builds, we treat every vehicle like it’s ours.
          </p>

          <h2>What We Value</h2>
          <ul>
            <li>Quality you can see: swirls minimized, glass crystal-clear, interiors actually fresh.</li>
            <li>Straightforward pricing: no pressure, no surprises, packages that fit how you drive.</li>
            <li>Care for your time: we come prepared, protect surfaces, and leave your space as we found it.</li>
          </ul>

          <h2>What to Expect</h2>
          <ol>
            <li>Quick booking: choose a package, a time, and tell us about your vehicle.</li>
            <li>On-site detail: we arrive ready, walk the car with you, and get to work.</li>
            <li>Final check: we inspect together and share care tips to keep the finish longer.</li>
          </ol>
        </section>

        <div className="mt-10 flex flex-col sm:flex-row gap-4">
          <a
            href="/services"
            className="inline-flex items-center rounded-md border border-subtle px-4 py-2 text-sm font-medium hover:bg-zinc-50 dark:hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
          >
            See Services
          </a>
          <a
            href="/booking"
            className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
          >
            Book now
          </a>
        </div>
      </div>
    </div>
  );
}
