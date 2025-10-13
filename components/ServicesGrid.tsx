import { services } from '../data/services-data';

export default function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const display = preview ? services.slice(0, 3) : services.slice(0, 9);
  return (
    <section className="w-full bg-offWhite py-12 px-4">
      <h2 className="text-3xl font-bold heading text-primary mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {display.map((service, idx) => (
          <article key={service.id} className="bg-white rounded-lg shadow overflow-hidden border border-charcoal/10 flex flex-col">
            <div className="h-48 w-full overflow-hidden">
              <img
                src={`/images/services/card-${(idx % 3) + 1}.jpg`}
                alt={`${service.category} - ${service.title}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
            <div className="p-6 flex-1 flex flex-col">
              <h3 className="text-xl font-semibold text-charcoal mb-1">{service.title}</h3>
              <p className="text-sm text-charcoal/80 mb-4">{service.category}</p>
              <div className="mt-auto flex items-center justify-between">
                <span className="text-lg font-bold text-primary">${service.basePrice}</span>
                <a href="/services" className="inline-flex items-center gap-2 bg-accent text-charcoal px-4 py-2 rounded font-bold hover:bg-accent/90 transition">
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
