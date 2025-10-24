"use client";

import React from "react";
import { Check } from "lucide-react";
import { Package, SIZE_LABELS } from "../../data/pricing";
import { computeCurrentPrice, computeCompareAt, formatPrice } from "../../lib/pricing";
import { useCart } from "./CartContext";

interface PackageCardProps {
  package: Package;
}

export default function PackageCard({ package: pkg }: PackageCardProps) {
  const { selectedSize, addPackage, canAddMore, totalVehicles } = useCart();
  
  const currentPrice = computeCurrentPrice(pkg.base, selectedSize);
  const compareAtPrice = computeCompareAt(pkg.base, selectedSize);
  const isDisabled = !canAddMore();

  const handleAddToCart = () => {
    if (canAddMore()) {
      addPackage(pkg.id, selectedSize);
    }
  };

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-200 flex flex-col">
      <div className="flex-1">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-2">
          {pkg.name}
        </h3>
        <p className="text-slate-600 text-sm mb-4">{pkg.summary}</p>
        
        {pkg.features && pkg.features.length > 0 && (
          <ul className="space-y-2 mb-4">
            {pkg.features.map((feature, idx) => (
              <li key={idx} className="text-sm text-slate-700 flex items-start">
                <Check className="w-4 h-4 text-primary mr-2 flex-shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-200">
        <div className="flex items-baseline justify-between mb-4">
          <div>
            <div className="text-3xl font-extrabold text-primary">
              {formatPrice(currentPrice)}
              {compareAtPrice && compareAtPrice > currentPrice && (
                <span className="text-sm text-slate-400 line-through ml-2">
                  {formatPrice(compareAtPrice)}
                </span>
              )}
            </div>
            <div className="text-xs text-slate-500">
              for {SIZE_LABELS[selectedSize]}
            </div>
          </div>
        </div>

        <button
          onClick={handleAddToCart}
          disabled={isDisabled}
          className={`btn-small w-full py-3 px-4 rounded-lg font-semibold focus-ring ${
            isDisabled
              ? "bg-slate-100 text-slate-400 cursor-not-allowed opacity-50"
              : "bg-primary text-white hover:bg-primary-600"
          }`}
        >
          {isDisabled ? "Cart Full" : "Add to Cart"}
        </button>

        {isDisabled && totalVehicles() >= 3 && (
          <p className="text-xs text-red-500 mt-2 text-center">
            For more than 3 vehicles, please split across multiple days.
          </p>
        )}
      </div>
    </div>
  );
}

