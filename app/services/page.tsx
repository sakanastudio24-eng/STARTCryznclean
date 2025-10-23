"use client";

import React from "react";
import PackageCard from "../../components/cart/PackageCard";
import VehicleSizeSelector from "../../components/cart/VehicleSizeSelector";
import MiniCart from "../../components/cart/MiniCart";
import { PACKAGES } from "../../data/pricing";

export default function ServicesPage() {
  return (
    <div className="py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-4">
          Detailing Packages
        </h1>
        <p className="text-slate-600 text-lg">
          Choose the perfect package for your vehicle. Prices adjust based on vehicle size.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar - Size Selector */}
        <div className="lg:col-span-1">
          <VehicleSizeSelector />
        </div>

        {/* Main Content - Packages */}
        <div className="lg:col-span-3">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {PACKAGES.map(pkg => (
              <PackageCard key={pkg.id} package={pkg} />
            ))}
          </div>
        </div>
      </div>

      {/* Floating Mini Cart */}
      <MiniCart />
    </div>
  );
}
