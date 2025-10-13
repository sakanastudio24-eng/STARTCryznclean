"use client";
import { useState } from "react";
import { services } from "../../data/services-data";
import ServiceCard from "../../components/ui/ServiceCard";
import CartDrawer from "../../components/ui/CartDrawer";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { CartProvider, useCart } from "../../components/ui/CartProvider";

function ServicesPageInner() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const { items, vehicleSize, add, remove, setVehicleSize, count, total } = useCart();

  return (
    <div className="flex flex-col min-h-screen bg-offWhite text-charcoal">
      <NavigationBar />
      <main className="flex-1 max-w-5xl mx-auto w-full px-4 py-8">
        <h1 className="text-4xl font-bold heading text-primary mb-6">Select Services</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              id={service.id}
              title={service.title}
              price={service.price}
              basePrice={service.price}
              category={service.category}
              selected={!!items.find(i => i.id === service.id)}
              onClick={() => add({ id: service.id, title: service.title, basePrice: service.price, category: service.category, qty: 1 })}
            />
          ))}
        </div>
        <button
          className="fixed bottom-6 right-6 bg-primary text-offWhite px-6 py-3 rounded-full shadow-lg font-bold text-lg hover:bg-primary/90 transition"
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
