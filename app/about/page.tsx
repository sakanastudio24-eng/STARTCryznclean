import { SETMORE_URL } from "../../lib/config";

export default function AboutPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold heading text-primary mb-6">About Cruiz n Clean</h1>
        {/* concise story + values (placeholder) */}
        <div className="prose prose-zinc max-w-none">
          <p>We started Cruiz n Clean to make quality detailing easy and accessible. We come to your driveway or office with professional tools and a detailer’s mindset.</p>
          <ul>
            <li>Respect for your time and vehicle</li>
            <li>Clear communication and transparent pricing</li>
            <li>Eco-conscious options upon request</li>
            <li>Consistent results backed by photo proof</li>
          </ul>
        </div>
        <div className="mt-10">
          <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary w-full sm:w-auto">
            Book now
          </a>
        </div>
      </div>
    </main>
  );
}
