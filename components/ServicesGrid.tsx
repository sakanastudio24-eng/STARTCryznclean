import { services } from '../data/services-data';

export default function ServicesGrid({ preview = false }: { preview?: boolean }) {
  const displayServices = preview ? services.slice(0, 3) : services;
  return (
    <section className="w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Our Services</h2>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          {displayServices.map((service) => (
            <div key={service.id} className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6 border border-subtle">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-base text-muted-foreground mb-2">Category: {service.category}</p>
              <p className="text-lg font-semibold">${service.basePrice}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
