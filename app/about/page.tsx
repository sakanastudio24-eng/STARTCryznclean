import Link from "next/link";
import { SETMORE_URL } from "@/lib/config";

export default function AboutPage() {
  return (
    <main className="pt-[var(--header-h)]">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-10">
        <h1 className="text-4xl font-bold text-text">About Cruiz n Clean</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">We’re a small, quality-first mobile detailing team serving our community with care and consistency.</p>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="grid gap-10 md:grid-cols-3">
          <div className="md:col-span-1">
            <h2 className="text-2xl font-semibold text-text">Our Story</h2>
            <p className="mt-2 text-muted-foreground">Cruiz n Clean began with a simple idea: make professional care convenient. We come to you, work meticulously, and leave your car fresh and protected.</p>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-text">What We Value</h2>
            <ul className="mt-2 space-y-2 text-text">
              <li>• Respect for your time and property</li>
              <li>• Honest recommendations over upsells</li>
              <li>• Consistent results, every visit</li>
            </ul>
          </div>
          <div>
            <h2 className="text-2xl font-semibold text-text">What to Expect</h2>
            <ol className="mt-2 space-y-2 text-text">
              <li>1. Book: choose services or a package</li>
              <li>2. On-site: we arrive prepared at your location</li>
              <li>3. Final check: walk-through and care tips</li>
            </ol>
          </div>
        </div>
      </section>

      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="flex flex-wrap items-center gap-3">
          <Link href="/services" className="btn-secondary">View Services</Link>
          <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book now</a>
        </div>
      </section>
    </main>
  );
}
