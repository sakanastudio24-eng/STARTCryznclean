"use client";
import { useState } from "react";
import { services } from "../../data/services-data";
import ServiceCard from "../../components/ui/ServiceCard";
import CartDrawer from "../../components/ui/CartDrawer";
import { SETMORE_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { CartProvider, useCart } from "../../components/ui/CartProvider";

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
    <div className="flex flex-col min-h-screen bg-base text-text">
      <NavigationBar />
      <main className="flex-1 py-12 md:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold heading text-primary mb-8">Select Services</h1>
        <div className="flex flex-col gap-12">
          {servicesByCategory.map(group => (
            <section key={group.category}>
              <h2 className="text-2xl font-bold heading text-primary mb-4">{group.category}</h2>
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
          <label className="font-medium text-charcoal">Vehicle Size:</label>
          <select
            value={vehicleSize}
            onChange={e => setVehicleSize(e.target.value as any)}
            className="border rounded p-2 focus:ring-accent"
          >
            <option value="car">Car</option>
            <option value="smallSUV">Small SUV</option>
            <option value="largeSUVTruck">Large SUV/Truck</option>
          </select>
        </div>
        <div className="fixed bottom-6 right-6 flex flex-col items-end gap-3">
          <a
            href={SETMORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => trackEvent("book_now_clicked", { location: "services" })}
            className="bg-primary text-offWhite px-6 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-primary/90 transition"
          >
            Book now
          </a>
          <button
            className="bg-primary text-offWhite px-6 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-primary/90 transition"
            onClick={() => setDrawerOpen(true)}
            aria-label="Open booking"
          >
            Open Booking ({count()})
          </button>
        </div>
        </div>
        <CartDrawer
          items={items}
          onRemove={remove}
          vehicleSize={vehicleSize}
          setVehicleSize={setVehicleSize}
          estimate={total()}
          onContinue={() => {
            const pkg = items[0]?.id || "custom";
            const addons = items.slice(1).map((i) => i.id).join(",");
            const price = total();
            const qs = new URLSearchParams({ pkg, addons, price: String(price) }).toString();
            window.location.href = `/booking?${qs}`;
          }}
          open={drawerOpen}
          onClose={() => setDrawerOpen(false)}
        />
      </main>
      <Footer />
    </div>
  );
}

export default function ServicesPage() {
  return (
    <CartProvider>
      <ServicesPageInner />
    </CartProvider>
  );
}
