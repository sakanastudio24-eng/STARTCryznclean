import { services } from '../data/services-data';

export default function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const displayServices = preview ? services.slice(0, 3) : services;
  return (
    <section className="w-full bg-offWhite py-12 px-4">
      <h2 className="text-3xl font-bold heading text-primary mb-8 text-center">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {displayServices.map((service) => (
          <div key={service.id} className="bg-white rounded-lg shadow p-6 border border-charcoal/10">
            <h3 className="text-xl font-semibold text-charcoal mb-2">{service.title}</h3>
            <p className="text-base text-charcoal mb-2">Category: {service.category}</p>
            <p className="text-lg font-bold text-primary">${service.basePrice}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
