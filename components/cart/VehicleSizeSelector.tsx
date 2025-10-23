"use client";

import React from "react";
import { VehicleSize, SIZE_LABELS } from "../../data/pricing";
import { useCart } from "./CartContext";

export default function VehicleSizeSelector() {
  const { selectedSize, setSelectedSize } = useCart();

  const sizes: VehicleSize[] = ["compact", "sedan", "suv", "truck_van"];

  return (
    <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-20">
      <label className="block text-sm font-semibold text-slate-900 mb-3">
        Select Vehicle Size
      </label>
      <div className="grid grid-cols-2 gap-3">
        {sizes.map(size => (
          <button
            key={size}
            onClick={() => setSelectedSize(size)}
            className={`py-3 px-4 rounded-lg font-medium transition-all ${
              selectedSize === size
                ? "bg-primary text-white shadow-md"
                : "bg-slate-50 text-slate-700 hover:bg-slate-100 border border-slate-200"
            }`}
          >
            {SIZE_LABELS[size]}
          </button>
        ))}
      </div>
      <p className="text-xs text-slate-500 mt-3">
        Prices adjust based on your vehicle size selection
      </p>
    </div>
  );
}


