export default function FaqPage() {
  const faqs = [
    { q: "Do you need water or electricity?", a: "No, we carry our own for most jobs." },
    { q: "How long does a detail take?", a: "From 1.5 to 4+ hours depending on service." },
    { q: "Is detailing safe for my paint?", a: "Yes, we use pH-balanced products and proper techniques." },
    { q: "Do you offer ceramic coating?", a: "Yes, from lite protection to multi-year packages." },
    { q: "What is your cancellation policy?", a: "Please notify 24 hours in advance to avoid fees." },
    { q: "What areas do you serve?", a: "Greater Metro and nearby suburbs." },
  ];

  return (
    <div className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <header className="mb-8">
          <h1 className="text-4xl font-bold heading text-primary">FAQ</h1>
          <p className="text-text/80 mt-2">Common questions about mobile detailing.</p>
        </header>
        <div className="divide-y divide-black/10 dark:divide-white/10 rounded-xl border border-black/10 dark:border-white/10 bg-white/70 dark:bg-black/40 backdrop-blur">
          {faqs.map((item, idx) => (
            <details key={idx} className="group p-5">
              <summary className="cursor-pointer list-none flex items-center justify-between gap-4">
                <span className="font-medium">{item.q}</span>
                <span className="text-sm text-text/60 group-open:hidden" aria-hidden>Show</span>
                <span className="text-sm text-text/60 hidden group-open:inline" aria-hidden>Hide</span>
              </summary>
              <p className="mt-2 text-sm text-text/80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </div>
  );
}
