const faqs = [
  { q: "Do you come to my location?", a: "Yes, we are a fully mobile service and come to your home or office." },
  { q: "What do I need to provide?", a: "Just your keys and access to your vehicle. We bring everything else!" },
  { q: "How long does a detail take?", a: "Most services take 1-3 hours depending on package and condition." },
];

export default function FAQAccordion() {
  return (
    <section className="w-full bg-surface py-12 px-4">
      <h2 className="text-3xl font-bold heading text-brand mb-8 text-center">FAQs</h2>
      <div className="max-w-2xl mx-auto divide-y divide-zinc-200">
        {faqs.map((faq, i) => (
          <details key={i} className="py-4">
            <summary className="cursor-pointer text-lg font-semibold text-text mb-2 focus-ring">{faq.q}</summary>
            <p className="text-base text-text mt-2">{faq.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
