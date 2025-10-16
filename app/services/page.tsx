"use client";
import { useState } from "react";
import { services } from "../../data/services-data";
import ServiceCard from "../../components/ui/ServiceCard";
import CartDrawer from "../../components/ui/CartDrawer";
import { useCart } from "../../components/ui/CartProvider";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";
import { Heading } from "../../components/ui/Heading";

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
    <Section>
      <Container>
        <Heading as={1} className="mb-8">Select Services</Heading>
        <div className="flex flex-col gap-12">
          {servicesByCategory.map(group => (
            <section key={group.category}>
              <Heading as={2} className="mb-4">{group.category}</Heading>
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.services.map(service => {
                  const selected = !!items.find(i => i.id === service.id);
                  const price = (service.basePrice * sizeMultipliers[vehicleSize]).toFixed(2);
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
            value={vehicleSize}
            onChange={e => setVehicleSize(e.target.value as any)}
            className="border rounded p-2 focus-ring"
          >
            <option value="car">Car</option>
            <option value="smallSUV">Small SUV</option>
            <option value="largeSUVTruck">Large SUV/Truck</option>
          </select>
        </div>
        <button
          className="fixed bottom-6 right-6 bg-brand text-white px-6 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-brand/90 focus-ring transition"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open cart"
        >
          View Cart ({count()})
        </button>
      </Container>
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
    </Section>
  );
}

export default function ServicesPage() {
  return (
    <ServicesPageInner />
  );
}
