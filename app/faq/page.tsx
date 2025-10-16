export default function FAQPage() {
  const faqs = [
    {
      q: "Do you need water or power from me?",
      a: "Usually no—we’re self-contained. If your location restricts water/electric use, tell us in notes.",
    },
    { q: "How long does a detail take?", a: "2–5 hours depending on vehicle size and package." },
    {
      q: "Is ceramic coating worth it?",
      a: "If you want easier maintenance and better protection, yes. We’ll recommend based on your paint and driving.",
    },
    {
      q: "What if it rains after my appointment?",
      a: "We’ll advise on safe wash methods and provide an optional quick follow-up if weather ruins fresh work.",
    },
    {
      q: "Do you remove scratches?",
      a: "We can reduce or remove many swirls/light scratches with paint correction. Deep cuts may need touch-up.",
    },
    { q: "What’s your service area?", a: "[Your coverage area]. If you’re outside, message us—we can often make it work." },
    { q: "What’s your cancellation policy?", a: "Free reschedule up to 24 hours. Same-day cancellations may incur a fee." },
    { q: "Do you offer fleet or multi-car pricing?", a: "Yes—contact us for a quote." },
  ];

  return (
    <div className="bg-page">
      <div className="max-w-screen-md mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h1 className="text-4xl font-bold mb-3">Frequently Asked Questions</h1>
        <p className="text-lg text-muted-foreground mb-8">Short answers to common questions.</p>

        <div className="divide-y border-y border-subtle">
          {faqs.map((item, idx) => (
            <details key={idx} className="group py-4">
              <summary className="flex cursor-pointer items-center justify-between py-2 list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 rounded">
                <span className="text-base font-medium">{item.q}</span>
                <span className="ml-4 text-muted-foreground transition group-open:rotate-180">⌄</span>
              </summary>
              <div className="pb-4 pt-1 text-muted-foreground">{item.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-10 border-t border-subtle pt-6">
          <p className="text-muted-foreground">Still have questions?</p>
          <a href="/contact" className="inline-flex mt-2 items-center rounded-md bg-brand text-white px-4 py-2 text-sm font-medium shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition">
            Contact us
          </a>
        </div>
      </div>
    </div>
  );
}
