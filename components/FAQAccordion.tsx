const faqs = [
  { q: "Do you come to my location?", a: "Yes, we are a fully mobile service and come to your home or office." },
  { q: "What do I need to provide?", a: "Just your keys and access to your vehicle. We bring everything else!" },
  { q: "How long does a detail take?", a: "Most services take 1-3 hours depending on package and condition." },
];

export default function FAQAccordion() {
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">FAQs</h2>
      <div className="max-w-2xl mx-auto divide-y divide-zinc-200 dark:divide-zinc-800">
        {faqs.map((faq, i) => (
          <details key={i} className="py-4">
            <summary className="cursor-pointer text-lg font-semibold mb-2">{faq.q}</summary>
            <p className="text-base text-muted-foreground mt-2">{faq.a}</p>
          </details>
        ))}
      </div>
      </div>
    </section>
  );
}
