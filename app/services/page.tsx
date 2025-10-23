"use client";
import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { services } from "../../data/services-data";
import ServiceCard from "../../components/ui/ServiceCard";
import { CartProvider, useCart } from "../../components/cart/CartContext";
import { ADDONS } from "../../data/addons";
import { PACKAGES, VehicleSize } from "../../data/pricing";
import { Sparkles, Droplet, Wind, PawPrint, Armchair, Square, Brush, Circle, Check } from "lucide-react";
import VehicleSizeBar from "../../components/ui/VehicleSizeBar";
import MiniCart from "../../components/cart/MiniCart";

function ServicesPageInner() {
  const [toast, setToast] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const { cart, selectedSize, setSelectedSize, addItem, removeItem, totalVehicles, canAddMore } = useCart();
  
  // Map URL size to VehicleSize type
  const urlSize = searchParams.get('size') || 'md';
  const sizeMap: Record<string, VehicleSize> = { sm: 'compact', md: 'sedan', lg: 'suv' };
  const vehicleSize = sizeMap[urlSize] || 'sedan';
  
  // Multipliers for display pricing
  const MULT = { sm: 1.0, md: 1.15, lg: 1.3 } as const;
  const mul = MULT[urlSize as keyof typeof MULT] ?? 1.15;
  
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
  const sizeLabelUrl = urlSize === 'sm' ? 'Small' : urlSize === 'md' ? 'Mid-Size' : 'Large/SUV';

  // Add package to cart
  const handleAddPackage = (pkg: typeof PACKAGES[0]) => {
    if (!canAddMore()) {
      setToast("Maximum 3 vehicles per booking. Please complete this booking first.");
      setTimeout(() => setToast(null), 3000);
      return;
    }
    
    // Check if this package+size combo already exists
    const existingItem = cart.items.find(
      item => item.packageId === pkg.id && item.size === vehicleSize
    );
    
    if (existingItem && existingItem.qty >= 3) {
      setToast("We can do more vehicles—please add another booking day.");
      setTimeout(() => setToast(null), 3000);
      return;
    }
    
    addItem(pkg.id, vehicleSize);
    setToast(`Added ${pkg.name} (${sizeLabelUrl})`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <>
      <h1 className="text-4xl font-bold heading text-primary mb-8">Select Services</h1>
        <VehicleSizeBar />

        {/* Packages Section */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold heading text-primary mb-6">Our Packages</h2>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
            {PACKAGES.map(pkg => {
              const displayPrice = Math.round(pkg.base * mul);
              const cartItem = cart.items.find(
                item => item.packageId === pkg.id && item.size === vehicleSize
              );
              const isAdded = !!cartItem;
              const qty = cartItem?.qty || 0;
              
              return (
                <div
                  key={pkg.id}
                  className="relative bg-white border-2 border-slate-200 rounded-xl p-6 hover:shadow-lg transition-shadow h-full flex flex-col"
                >
                  <div className="flex-1 space-y-3">
                    <div>
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                      <p className="text-slate-600 text-sm mb-3">{pkg.summary}</p>
                      <div className="text-3xl font-bold text-primary">${displayPrice}</div>
                      <div className="text-xs text-slate-500 mt-1">for {sizeLabelUrl} vehicles</div>
                    </div>
                    
                    {pkg.features && pkg.features.length > 0 && (
                      <ul className="space-y-2">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-slate-700">
                            <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => handleAddPackage(pkg)}
                      aria-label={`Add ${pkg.name} to cart`}
                      className={`w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${
                        isAdded
                          ? "bg-primary/10 text-primary border-2 border-primary"
                          : "bg-primary text-white hover:opacity-90"
                      }`}
                    >
                      {isAdded ? `Added (${qty})` : "Add to Cart"}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>


        {/* Add-ons Section */}
        <section className="mt-16 border-t border-slate-200 pt-12">
          <h2 className="text-3xl font-bold heading text-primary mb-3">Add-Ons</h2>
          <p className="text-slate-600 mb-6">Enhance your service with these premium add-ons (flat pricing)</p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 items-stretch">
            {ADDONS.map(addon => {
              const Icon = addonIcons[addon.id] || Circle;
              // For now, addons aren't tracked separately in new cart - they'll be added in next phase
              const isAdded = false;
              return (
                <div
                  key={addon.id}
                  className="relative bg-white border border-slate-200 rounded-xl p-4 hover:shadow-md transition-shadow h-full flex flex-col"
                >
                  <div className="flex-1 space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-4 h-4 text-primary" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="font-semibold text-sm text-charcoal truncate">{addon.name}</h3>
                        <p className="text-lg font-bold text-primary mt-1">${addon.price}</p>
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground line-clamp-2">
                      {addon.description || "Premium add-on service"}
                    </p>
                  </div>
                  
                  <div className="mt-auto pt-4">
                    <button
                      onClick={() => setToast("Add-ons will be available in cart on next update")}
                      disabled={false}
                      aria-label={`Add ${addon.name} (coming soon)`}
                      className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 bg-slate-100 text-slate-600 hover:bg-slate-200"
                    >
                      Coming Soon
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

      <MiniCart />

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-24 right-6 bg-charcoal text-white px-4 py-3 rounded-lg shadow-xl animate-fade-in z-50">
          <p className="text-sm font-medium">{toast}</p>
        </div>
      )}
    </>
  );
}

export default function ServicesPage() {
  return (
    <CartProvider>
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
        <ServicesPageInner />
      </Suspense>
    </CartProvider>
  );
}
