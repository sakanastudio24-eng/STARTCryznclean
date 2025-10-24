"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { PACKAGES } from "../data/pricing";
import { computeCurrentPrice, formatPrice } from "../lib/pricing";
import VehicleSizeBar from "../components/ui/VehicleSizeBar";

function PackagePreview({ pkg, vehicleSize }: { pkg: typeof PACKAGES[0], vehicleSize: string }) {
  const sizeMap: Record<string, 'compact' | 'sedan' | 'suv'> = { sm: 'compact', md: 'sedan', lg: 'suv' };
  const currentSize = sizeMap[vehicleSize] || 'sedan';
  const currentPrice = computeCurrentPrice(pkg.base, currentSize);

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
      <h3 className="text-xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
      <p className="text-slate-600 text-sm mb-4">{pkg.summary}</p>
      <div className="text-2xl font-bold text-primary mb-4">
        {formatPrice(currentPrice)}
      </div>
      <a
        href={`/services?size=${vehicleSize}`}
        className="btn-primary-cta focus-ring inline-block w-full text-center px-4 py-2 rounded-lg font-semibold text-sm"
      >
        View Package
      </a>
    </div>
  );
}

export default function HomePageClient() {
  const searchParams = useSearchParams();
  const [mounted, setMounted] = useState(false);
  
  useEffect(() => {
    setMounted(true);
  }, []);

  const currentSize = searchParams.get('size') || 'md';

  if (!mounted) {
    return (
      <section className="w-full bg-offWhite">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
          <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Packages</h2>
          <div className="w-full h-16 bg-slate-100 rounded-xl animate-pulse mb-6" />
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white border border-slate-200 rounded-xl p-6 h-48 animate-pulse" />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="section bg-offWhite pb-24">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Packages</h2>
        <Suspense fallback={<div className="w-full h-16 bg-slate-100 rounded-xl animate-pulse mb-6" />}>
          <VehicleSizeBar />
        </Suspense>
        <div className="mb-16"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12">
          {PACKAGES.slice(0, 3).map((pkg) => (
            <PackagePreview key={pkg.id} pkg={pkg} vehicleSize={currentSize} />
          ))}
        </div>
        <div className="text-center">
          <a
            href={`/services?size=${currentSize}`}
            className="btn-primary-cta inline-block px-6 py-3 rounded-lg font-semibold"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}
