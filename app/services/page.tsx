"use client";

import React, { useState, Suspense, useCallback } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { Check, ShoppingCart, Car, Shield, Award, Sparkles, Droplet, Wind, PawPrint, Armchair, Square, Brush, Circle } from "lucide-react";
import { useCart } from "../../lib/cart-context";
import { ADDONS } from "../../data/addons";

const packages = [
  {
    id: "express-wash",
    name: "Express Wash",
    subtitle: "Our Express Package. Best for maintenance or quick refresh.",
    price: 60,
    interior: [
      "Interior Vacuum",
      "Wipe all surfaces", 
      "Stains (Spot Treatment)",
      "Windows & Mirrors",
      "Door Jambs",
      "Floor Mats",
      "Detail Trunk"
    ],
    exterior: [
      "Quick Hand Wash",
      "Clean Rims & Tires", 
      "Wax Protection (3 Months)"
    ]
  },
  {
    id: "standard-detail",
    name: "Standard Detail",
    subtitle: "Our Standard Package. A very thorough inside-out detail.",
    price: 140,
    interior: [
      "Double Vacuum Interior",
      "Wipe all surfaces",
      "Stains (Spot Treatment)", 
      "Windows & Mirrors",
      "Clean & Protect Plastic",
      "Detail Floor Mats and Shine",
      "Detail Trunk & Door Jambs"
    ],
    exterior: [
      "Spot Polish",
      "Professional Hand Wash",
      "Detail Rims & Tires",
      "Wheel Wells", 
      "Wax Protection (3 Months)"
    ]
  },
  {
    id: "premium-detail",
    name: "Premium Detail",
    subtitle: "Ultimate Detail Experience. Includes Full Polish & Shampoo/Extraction.",
    price: 220,
    interior: [
      "Shampoo Seats & Carpet",
      "Double Vacuum Interior",
      "Wipe all Surfaces",
      "Stain (Spot Treatment)",
      "Clean & Protect Plastic", 
      "Windows & Mirrors",
      "Detail Floor Mats and Shine",
      "Detail Trunk"
    ],
    exterior: [
      "Full Paint Enhancement Polish",
      "Professional Hand Wash",
      "Clay Bar Exterior",
      "Wash Wheel Wells",
      "Dress Trims/Tires",
      "Clean Door Jams",
      "Wax Protection (3 Months)"
    ]
  }
];

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

function ServicesPageInner() {
  const [toast, setToast] = useState<string | null>(null);
  const { addItem, items, getItemCount } = useCart();

  const handleAddPackage = useCallback((pkg: typeof packages[0]) => {
    addItem({
      id: pkg.id,
      name: pkg.name,
      price: pkg.price,
      description: pkg.subtitle,
      features: [...pkg.interior, ...pkg.exterior],
      type: 'package'
    });
    setToast(`Added ${pkg.name} to cart!`);
    setTimeout(() => setToast(null), 3000);
  }, [addItem]);

  const handleAddAddon = useCallback((addon: typeof ADDONS[0]) => {
    addItem({
      id: addon.id,
      name: addon.name,
      price: addon.price,
      description: addon.description,
      type: 'addon'
    });
    setToast(`Added ${addon.name} to cart!`);
    setTimeout(() => setToast(null), 3000);
  }, [addItem]);

  const isInCart = useCallback((itemId: string) => {
    return items.some(item => item.id === itemId);
  }, [items]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services</h1>
        <p className="text-xl text-slate-600 max-w-3xl mx-auto">
          Professional mobile auto detailing packages designed to meet your needs
        </p>
        {getItemCount() > 0 && (
          <div className="mt-6">
            <Link 
              href="/booking" 
              className="inline-flex items-center gap-2 bg-[#6B0F1A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a0c16] transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              View Cart ({getItemCount()} items)
            </Link>
          </div>
        )}
      </div>

      {/* Packages Section */}
      <section className="mb-20">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 text-center">Detail Packages</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-[#6B0F1A] transition-colors relative flex flex-col h-full">
              {isInCart(pkg.id) && (
                <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  In Cart
                </div>
              )}
              
              <div className="text-center mb-6 flex-shrink-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-600 mb-4">{pkg.subtitle}</p>
                <div className="text-3xl font-bold text-[#6B0F1A] mb-4">From ${pkg.price}</div>
              </div>
              
              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Interior</h4>
                  <ul className="space-y-2">
                    {pkg.interior.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <Check className="w-4 h-4 text-[#6B0F1A] mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Exterior</h4>
                  <ul className="space-y-2">
                    {pkg.exterior.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <Check className="w-4 h-4 text-[#6B0F1A] mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex-shrink-0">
                <button 
                  onClick={() => handleAddPackage(pkg)}
                  disabled={isInCart(pkg.id)}
                  className={`w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-semibold transition-all min-h-[48px] ${
                    isInCart(pkg.id) 
                      ? 'bg-green-500 text-white cursor-not-allowed' 
                      : 'bg-[#6B0F1A] text-white hover:bg-[#5a0c16] hover:scale-105 transform'
                  }`}
                >
                  {isInCart(pkg.id) ? (
                    <>
                      <Check className="w-5 h-5 mr-2" />
                      Added to Cart
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5 mr-2" />
                      Select Package
                    </>
                  )}
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Add-ons Section */}
      <section className="py-20 bg-slate-50 rounded-3xl">
        <div className="max-w-6xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Premium Add-Ons</h2>
            <p className="text-xl text-slate-600">Enhance your service with these premium options</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {ADDONS.map((addon) => {
              const Icon = addonIcons[addon.id] || Circle;
              const isAdded = isInCart(addon.id);
              
              return (
                <div key={addon.id} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow relative">
                  {isAdded && (
                    <div className="absolute top-3 right-3 bg-green-500 text-white px-2 py-1 rounded-full text-xs font-semibold">
                      In Cart
                    </div>
                  )}
                  
                  <div className="text-center">
                    <div className="w-12 h-12 bg-gradient-to-br from-[#6B0F1A] to-[#8B1A2A] rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">{addon.name}</h3>
                    <p className="text-sm text-slate-600 mb-3">{addon.description}</p>
                    <div className="text-2xl font-bold text-[#6B0F1A] mb-4">${addon.price}</div>
                    <button 
                      onClick={() => handleAddAddon(addon)}
                      disabled={isAdded}
                      className={`w-full inline-flex items-center justify-center px-4 py-2 rounded-lg font-semibold transition-all ${
                        isAdded 
                          ? 'bg-green-500 text-white cursor-not-allowed' 
                          : 'bg-[#6B0F1A] text-white hover:bg-[#5a0c16] hover:scale-105 transform'
                      }`}
                    >
                      {isAdded ? (
                        <>
                          <Check className="w-4 h-4 mr-2" />
                          Added
                        </>
                      ) : (
                        <>
                          <ShoppingCart className="w-4 h-4 mr-2" />
                          Add to Cart
                        </>
                      )}
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Ready to Book?</h2>
        <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto">
          Select your package and add-ons, then we'll bring professional detailing to your location
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/booking" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#6B0F1A] text-white font-bold text-lg rounded-xl shadow-lg hover:bg-[#5a0c16] transition-colors"
          >
            Book Now
          </Link>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-[#6B0F1A] font-semibold text-lg rounded-xl border-2 border-[#6B0F1A] hover:bg-[#6B0F1A] hover:text-white transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </section>

      {/* Toast notification */}
      {toast && (
        <div className="fixed bottom-6 right-6 bg-[#6B0F1A] text-white px-6 py-4 rounded-lg shadow-xl z-50">
          <p className="font-medium">{toast}</p>
        </div>
      )}
    </div>
  );
}

export default function ServicesPage() {
  return (
      <Suspense fallback={<div className="flex items-center justify-center min-h-screen">Loading...</div>}>
      <ServicesPageInner />
      </Suspense>
  );
}