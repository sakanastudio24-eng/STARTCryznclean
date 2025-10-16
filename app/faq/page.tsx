"use client";
import React from "react";
import Link from "next/link";

type QA = { q: string; a: string };

const FAQS: QA[] = [
  { q: "Do you need water or power from me?", a: "Usually no—we’re self-contained. If your location restricts water/electric use, tell us in notes." },
  { q: "How long does a detail take?", a: "2–5 hours depending on vehicle size and package." },
  { q: "Is ceramic coating worth it?", a: "If you want easier maintenance and better protection, yes. We’ll recommend based on your paint and driving." },
  { q: "What if it rains after my appointment?", a: "We’ll advise on safe wash methods and provide an optional quick follow-up if weather ruins fresh work." },
  { q: "Do you remove scratches?", a: "We can reduce or remove many swirls/light scratches with paint correction. Deep cuts may need touch-up." },
  { q: "What’s your service area?", a: "[Your coverage area]. If you’re outside, message us—we can often make it work." },
  { q: "What’s your cancellation policy?", a: "Free reschedule up to 24 hours. Same-day cancellations may incur a fee." },
  { q: "Do you offer fleet or multi-car pricing?", a: "Yes—contact us for a quote." },
];

export default function FAQPage() {
  return (
    <div className="space-y-10 py-10 bg-page">
      <header className="space-y-2">
        <h1 className="text-3xl sm:text-4xl font-bold">FAQ</h1>
        <p className="text-muted-foreground">Short answers to common questions.</p>
      </header>

      <div className="divide-y border-y border-subtle rounded-md overflow-hidden">
        {FAQS.map(({ q, a }, idx) => (
          <details key={idx} className="group">
            <summary className="list-none cursor-pointer select-none bg-surface px-4 py-4 sm:px-6 sm:py-5 flex items-center justify-between gap-4">
              <span className="font-medium">{q}</span>
              <span aria-hidden className="text-muted-foreground transition group-open:rotate-180">▾</span>
            </summary>
            <div className="px-4 py-4 sm:px-6 sm:py-5 text-muted-foreground bg-surface/80">
              {a}
            </div>
          </details>
        ))}
      </div>

      <div className="rounded-md border border-subtle p-6 sm:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-lg font-semibold">Still have questions?</h2>
          <p className="text-muted-foreground">We’re happy to help—reach out and we’ll respond quickly.</p>
        </div>
        <Link
          href="/contact"
          className="inline-flex items-center rounded-md bg-brand text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
        >
          Contact us
        </Link>
      </div>
    </div>
  );
}
