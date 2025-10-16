"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { services } from "../../data/services-data";
import ServiceCard from "../../components/ui/ServiceCard";
import CartDrawer from "../../components/ui/CartDrawer";
import { CartProvider, useCart } from "@/components/cart/CartProvider";
import { SETMORE_URL } from "@/lib/config";

function ServicesPageInner() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { items, vehicleSize, add, remove, setVehicleSize, count, total } = useCart();
  const sizeMultipliers = { car: 1.0, smallSUV: 1.15, largeSUVTruck: 1.3 };
  const categories = ["Exterior", "Interior", "Ceramic", "Specialty"];
  const servicesByCategory = categories.map(cat => ({
    category: cat,
    services: services.filter(s => s.category === cat)
  })).filter(group => group.services.length > 0);

  return (
    <main className="pt-[var(--header-h)]">
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-10 pb-8">
        <h1 className="text-4xl font-bold text-text">Services</h1>
        <p className="mt-2 text-muted-foreground max-w-2xl">Pick what you need, or start with a package on the Pricing page.</p>
      </section>
      <section className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="flex flex-col gap-12">
          {servicesByCategory.map(group => (
            <section key={group.category}>
              <h2 className="text-2xl font-semibold text-text mb-4">{group.category}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map(service => {
                  const selected = !!items.find(i => i.id === service.id);
                  const price = (service.basePrice * sizeMultipliers[vehicleSize]).toFixed(2);
                  return (
                    <div key={service.id} className="relative group card p-5">
                      <div className="relative w-full aspect-[4/3] overflow-hidden rounded-lg">
                        <Image src="https://images.unsplash.com/photo-1542367597-8849ebd5df25?q=80&w=800&auto=format&fit=crop" alt={`${service.title} example`} fill sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw" className="object-cover" />
                      </div>
                      <ServiceCard
                        id={service.id}
                        title={service.title}
                        price={+price}
                        basePrice={service.basePrice}
                        category={service.category}
                        selected={selected}
                        onClick={() => selected
                          ? remove(service.id)
                          : add({ id: service.id, title: service.title, basePrice: service.basePrice, category: service.category, qty: 1 })}
                      />
                      <div className="mt-3 flex items-center gap-3">
                        <Link href={`/booking?pkg=${service.id}`} className="btn-secondary">Add to booking</Link>
                        <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary">Book now</a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <label className="font-medium text-charcoal">Vehicle Size:</label>
          <select
            value={vehicleSize}
            onChange={e => setVehicleSize(e.target.value as any)}
            className="border-subtle border rounded p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A3D]/40"
          >
            <option value="car">Car</option>
            <option value="smallSUV">Small SUV</option>
            <option value="largeSUVTruck">Large SUV/Truck</option>
          </select>
        </div>
        <button
          className="fixed bottom-6 right-6 btn-primary rounded-full px-6 py-3 text-lg"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open cart"
        >
          View Cart ({count()})
        </button>
        <CartDrawer
          items={items}
          onRemove={remove}
          vehicleSize={vehicleSize}
          setVehicleSize={setVehicleSize}
          estimate={total()}
          onContinue={() => { window.location.href = "/request"; }}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </section>
    </main>
  );
}

export default function ServicesPage() {
  return (
    <CartProvider>
      <ServicesPageInner />
    </CartProvider>
  );
}
