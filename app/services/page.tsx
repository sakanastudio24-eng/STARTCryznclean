"use client";
import { useState } from "react";
import { services } from "../../data/services-data";
import ServiceCard from "../../components/ui/ServiceCard";
import CartDrawer from "../../components/ui/CartDrawer";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { CartProvider, useCart } from "../../components/ui/CartProvider";
import { ADDONS } from "../../data/addons";
import { Sparkles, Droplet, Wind, PawPrint, Armchair, Square, Brush, Circle } from "lucide-react";

function ServicesPageInner() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [toast, setToast] = useState<string | null>(null);
  const { items, vehicleSize, add, remove, setVehicleSize, count, total } = useCart();
  const sizeMultipliers = { car: 1.0, smallSUV: 1.15, largeSUVTruck: 1.3 };
  const categories = ["Exterior", "Interior", "Ceramic", "Specialty"];
  const servicesByCategory = categories.map(cat => ({
    category: cat,
    services: services.filter(s => s.category === cat)
  })).filter(group => group.services.length > 0);

  // Icon mapping for addons
  const addonIcons: Record<string, React.ComponentType<any>> = {
    engine_bay: Circle,
    headlight_rest: Sparkles,
    odor_treat: Wind,
    pet_hair: PawPrint,
    seat_shampoo: Armchair,
    floor_shampoo: Square,
    trim_restore: Brush,
    wheel_detail: Droplet,
  };

  // Helper to get vehicle size label
  const sizeLabel = vehicleSize === "car" ? "Car" : vehicleSize === "smallSUV" ? "Small SUV" : "Large SUV/Truck";

  // Add addon to cart
  const handleAddAddon = (addonId: string, addonName: string, price: number) => {
    add({
      id: `addon-${addonId}`,
      title: addonName,
      basePrice: price,
      category: "Addon",
      qty: 1,
    });
    setToast(`Added ${addonName} (${sizeLabel})`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white text-slate-900">
      <NavigationBar />
      <main className="flex-1 py-16 md:py-20">
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

        {/* Add-ons Section */}
        <section className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="text-3xl font-bold heading text-primary mb-3">Add-Ons</h2>
          <p className="text-muted-foreground mb-6">Enhance your service with these premium add-ons</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {ADDONS.map(addon => {
              const Icon = addonIcons[addon.id] || Circle;
              const isAdded = items.some(item => item.id === `addon-${addon.id}`);
              return (
                <div
                  key={addon.id}
                  className="relative bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow"
                >
                  <div className="flex items-start gap-3 mb-3">
                    <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-4 h-4 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm text-charcoal truncate">{addon.name}</h3>
                      <p className="text-lg font-bold text-primary mt-1">${addon.price}</p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {addon.description || "Premium add-on service"}
                  </p>
                  <button
                    onClick={() => handleAddAddon(addon.id, addon.name, addon.price)}
                    disabled={isAdded}
                    className={`w-full py-2 px-3 rounded-lg text-sm font-medium transition ${
                      isAdded
                        ? "bg-slate-100 text-slate-400 cursor-not-allowed"
                        : "bg-primary text-white hover:bg-primary/90"
                    }`}
                  >
                    {isAdded ? "Added" : "Add"}
                  </button>
                </div>
              );
            })}
          </div>
        </section>

        <button
          className="btn-primary-cta fixed bottom-6 right-6 px-6 py-3 rounded-full shadow-lg font-bold text-lg"
          onClick={() => setDrawerOpen(true)}
          aria-label="Open cart"
        >
          View Cart ({count()})
        </button>
        </div>
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

        {/* Toast notification */}
        {toast && (
          <div className="fixed bottom-24 right-6 bg-charcoal text-white px-4 py-3 rounded-lg shadow-xl animate-fade-in">
            <p className="text-sm font-medium">{toast}</p>
          </div>
        )}
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
