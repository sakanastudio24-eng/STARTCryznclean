import { services } from '../data/services-data';

export default function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const display = preview ? services.slice(0, 3) : services.slice(0, 9);
  return (
    <section className="Section">
      <h2 className="text-3xl font-bold font-display text-text mb-8 text-center">Our Services</h2>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {display.map((service, idx) => (
          <article key={service.id} className="rounded-2xl border border-white/10 bg-white/[0.04] shadow-card p-5 hover:bg-white/[0.08] transition flex flex-col">
            <div className="h-48 w-full overflow-hidden rounded-xl">
              <img
                src={`/images/services/card-${(idx % 3) + 1}.jpg`}
                alt={`${service.category} - ${service.title}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="pt-4 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-text mb-1">{service.title}</h3>
              <p className="text-sm text-text/70 mb-4">{service.category}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-bold text-accent">${service.basePrice}</span>
                <a href="/services" className="inline-flex items-center gap-2 bg-primary text-text px-4 py-2 rounded-xl font-bold hover:opacity-90 transition will-change-transform hover:-translate-y-0.5">
                  Learn More
                  <span aria-hidden>➜</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
