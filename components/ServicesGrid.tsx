import { services } from '../data/services-data';

export default function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const displayServices = preview ? services.slice(0, 3) : services;
  return (
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <h2 className="text-3xl font-bold heading text-primary mb-8 text-center">Our Services</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {displayServices.map((service, i) => (
            <div
              key={service.id}
              className="rounded-2xl border border-white/10 bg-white/90 shadow-card p-6 text-center transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg fade-up"
              style={{ animationDelay: `${i * 80}ms` }}
            >
              <h3 className="text-xl font-bold heading text-primary">{service.title}</h3>
              <p className="mt-1 text-sm text-charcoal/70">{service.category}</p>
              <div className="mt-3 text-2xl font-extrabold text-primary">${service.basePrice}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
