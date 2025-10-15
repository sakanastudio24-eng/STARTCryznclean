"use client";
import { useState } from "react";
import { services } from "../../data/services-data";
import ServiceCard from "../../components/ui/ServiceCard";
import CartDrawer from "../../components/ui/CartDrawer";
import { useCart } from "../../components/cart/CartProvider";
import Section from "../../components/layout/Section";
import Heading from "../../components/ui/Heading";

function ServicesPageInner() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { items, size, add, remove, setSize, count, total } = useCart();
  const sizeMultipliers = { car: 1.0, smallSUV: 1.15, largeSUVTruck: 1.3 } as const;
  const categories = ["Exterior", "Interior", "Ceramic", "Specialty"];
  const servicesByCategory = categories.map(cat => ({
    category: cat,
    services: services.filter(s => s.category === cat)
  })).filter(group => group.services.length > 0);

  return (
    <div>
      <Section>
        <Heading level={1} className="mb-8">Select Services</Heading>
        <div className="flex flex-col gap-12">
          {servicesByCategory.map(group => (
            <section key={group.category}>
              <h2 className="text-2xl font-semibold mb-4">{group.category}</h2>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map(service => {
                  const selected = !!items.find(i => i.id === service.id);
                  const price = (service.basePrice * sizeMultipliers[size]).toFixed(2);
                  return (
                    <div key={service.id} className="relative group">
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
                      
                    </div>
                  );
                })}
              </div>
            </section>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-10">
          <label className="font-medium">Vehicle Size:</label>
          <select
            value={size}
            onChange={e => setSize(e.target.value as any)}
            className="border rounded p-2 focus:ring-accent"
          >
            <option value="car">Car</option>
            <option value="smallSUV">Small SUV</option>
            <option value="largeSUVTruck">Large SUV/Truck</option>
          </select>
        </div>
        <button
          className="fixed bottom-6 right-6 bg-primary text-text px-6 py-3 rounded-full shadow-lg font-semibold text-lg hover:bg-primary/90 transition"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open cart"
        >
          View Cart ({count()})
        </button>
      </Section>
      <CartDrawer
          items={items}
          onRemove={remove}
          vehicleSize={size}
          setVehicleSize={setSize}
          estimate={total()}
          onContinue={() => { window.location.href = "/request"; }}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
    </div>
  );
}

export default function ServicesPage() {
  return <ServicesPageInner />;
}
