"use client";

import { useState, Suspense } from "react";
import StockImage from "../../components/site/StockImage";
import { useSearchParams } from "next/navigation";
import { useCart } from "../../components/cart/CartContext";
import { PACKAGES, VehicleSize, SIZE_LABELS } from "../../data/pricing";
import { computeCurrentPrice, computeCompareAt, formatPrice } from "../../lib/pricing";
import { Check } from "lucide-react";
import CorporateVehicleSizeBar from "../../components/ui/CorporateVehicleSizeBar";
import MiniCart from "../../components/cart/MiniCart";

export default function ServicesPageClient() {
  const [toast, setToast] = useState<string | null>(null);
  const searchParams = useSearchParams();
  const { cart, selectedSize, setSelectedSize, addItem, removeItem, totalVehicles, canAddMore } = useCart();
  
  // Map URL size to VehicleSize type
  const urlSize = searchParams.get('size') || 'md';
  const sizeMap: Record<string, VehicleSize> = { sm: 'compact', md: 'sedan', lg: 'suv' };
  const vehicleSize = sizeMap[urlSize] || 'sedan';

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
    setToast(`Added ${pkg.name} (${SIZE_LABELS[vehicleSize]})`);
    setTimeout(() => setToast(null), 3000);
  };


  return (
    <>
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-[#6B0F1A] mb-4">Select Services</h1>
            <p className="text-xl text-slate-600">Professional mobile detailing packages with transparent pricing</p>
          </div>
          
          <CorporateVehicleSizeBar 
            selectedSize={urlSize} 
            onSizeChange={(size) => {
              const sizeMap: Record<string, VehicleSize> = { small: 'compact', medium: 'sedan', large: 'suv' };
              const vehicleSize = sizeMap[size] || 'sedan';
              setSelectedSize(vehicleSize);
            }} 
          />

          {/* Packages Section */}
          <div className="mt-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Packages</h2>
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 items-stretch">
              {PACKAGES.map(pkg => {
                const currentPrice = computeCurrentPrice(pkg.base, vehicleSize);
                const compareAtPrice = computeCompareAt(pkg.base, vehicleSize);
                const cartItem = cart.items.find(
                  item => item.packageId === pkg.id && item.size === vehicleSize
                );
                const isAdded = !!cartItem;
                const qty = cartItem?.qty || 0;
                
                return (
                  <div
                    key={pkg.id}
                    className="corporate-service-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                      <p className="text-slate-600 text-sm mb-3">{pkg.summary}</p>
                      <div className="text-3xl font-bold text-[#6B0F1A]">
                        {formatPrice(currentPrice)}
                        {compareAtPrice && compareAtPrice > currentPrice && (
                          <span className="text-sm text-slate-400 line-through ml-2">
                            {formatPrice(compareAtPrice)}
                          </span>
                        )}
                      </div>
                      <div className="text-xs text-slate-500 mt-1">for {SIZE_LABELS[vehicleSize]} vehicles</div>
                    </div>
                    
                    {pkg.features && pkg.features.length > 0 && (
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-slate-700 mb-3">What's included:</h4>
                        <ul className="space-y-2">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-sm text-slate-600">
                              <Check className="w-4 h-4 text-[#1F5A93] flex-shrink-0 mt-0.5" aria-hidden="true" focusable="false" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    <button
                      onClick={() => handleAddPackage(pkg)}
                      aria-label={`Add ${pkg.name} to cart`}
                      className={`w-full inline-flex items-center justify-center rounded-xl px-6 py-3 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2 ${
                        isAdded
                          ? "bg-[#6B0F1A]/10 text-[#6B0F1A] border-2 border-[#6B0F1A]"
                          : "btn-corporate-primary"
                      }`}
                      onKeyDown={(e) => e.key === 'Enter' && handleAddPackage(pkg)}
                    >
                      {isAdded ? `Added (${qty})` : "Book now"}
                    </button>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Gallery Section */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-slate-900 mb-8 text-center">Our Work in Action</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Express Package - Coming Soon */}
            <div className="relative rounded-xl border border-slate-200 bg-white p-4 text-center">
              <div className="absolute right-3 top-3 rounded-md bg-slate-800/90 px-2 py-1 text-xs font-semibold text-white">Coming Soon</div>
              <h3 className="text-lg font-semibold mb-4">Express Package Results</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-video rounded-lg bg-slate-200 grid place-items-center text-slate-500 text-sm">Before</div>
                <div className="aspect-video rounded-lg bg-slate-200 grid place-items-center text-slate-500 text-sm">After</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">Real client results coming soon.</p>
            </div>
            
            {/* Standard Package - Coming Soon */}
            <div className="relative rounded-xl border border-slate-200 bg-white p-4 text-center">
              <div className="absolute right-3 top-3 rounded-md bg-slate-800/90 px-2 py-1 text-xs font-semibold text-white">Coming Soon</div>
              <h3 className="text-lg font-semibold mb-4">Standard Package Results</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-video rounded-lg bg-slate-200 grid place-items-center text-slate-500 text-sm">Before</div>
                <div className="aspect-video rounded-lg bg-slate-200 grid place-items-center text-slate-500 text-sm">After</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">Real client results coming soon.</p>
            </div>
            
            {/* Premium Package - Coming Soon */}
            <div className="relative rounded-xl border border-slate-200 bg-white p-4 text-center">
              <div className="absolute right-3 top-3 rounded-md bg-slate-800/90 px-2 py-1 text-xs font-semibold text-white">Coming Soon</div>
              <h3 className="text-lg font-semibold mb-4">Premium Package Results</h3>
              <div className="grid grid-cols-2 gap-3">
                <div className="aspect-video rounded-lg bg-slate-200 grid place-items-center text-slate-500 text-sm">Before</div>
                <div className="aspect-video rounded-lg bg-slate-200 grid place-items-center text-slate-500 text-sm">After</div>
              </div>
              <p className="mt-3 text-sm text-slate-600">Real client results coming soon.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Coming Soon Banner */}
      <section className="py-16 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-100 border border-slate-200 rounded-xl p-8 text-center" aria-live="polite">
            <h3 className="text-xl font-semibold text-slate-600 mb-2">Add-On Services Coming Soon</h3>
            <p className="text-slate-600">
              Ask about engine bay details, headlight restorations, and more!
            </p>
          </div>
        </div>
      </section>


      <MiniCart />

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-24 right-6 bg-slate-800 text-white px-4 py-3 rounded-lg shadow-xl animate-fade-in z-50">
          <p className="text-sm font-medium">{toast}</p>
        </div>
      )}
    </>
  );
}