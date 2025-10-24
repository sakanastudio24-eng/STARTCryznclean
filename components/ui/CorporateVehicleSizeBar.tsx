"use client";
import React from "react";
import { Car, Truck, Bus } from "lucide-react";

interface CorporateVehicleSizeBarProps {
  selectedSize: string;
  onSizeChange: (size: string) => void;
}

export default function CorporateVehicleSizeBar({ selectedSize, onSizeChange }: CorporateVehicleSizeBarProps) {
  const vehicleSizes = [
    {
      id: "small",
      label: "Small",
      description: "Sedan, Coupe",
      icon: Car,
      price: "$60"
    },
    {
      id: "medium", 
      label: "Medium",
      description: "SUV, Truck",
      icon: Truck,
      price: "$80"
    },
    {
      id: "large",
      label: "Large", 
      description: "Van, Large SUV",
      icon: Bus,
      price: "$100"
    }
  ];

  return (
    <div className="bg-white border-b border-slate-200 sticky top-16 z-40 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <h2 className="text-lg font-semibold text-slate-900">Select Vehicle Size</h2>
            <p className="text-sm text-slate-600">Prices update automatically</p>
          </div>
          <div className="flex gap-2">
            {vehicleSizes.map((size) => {
              const Icon = size.icon;
              const isSelected = selectedSize === size.id;
              return (
                <button
                  key={size.id}
                  onClick={() => onSizeChange(size.id)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1F5A93]/40 focus-visible:ring-offset-2 ${
                    isSelected
                      ? "border-[#1F5A93] bg-[#1F5A93] text-white"
                      : "border-slate-200 bg-white text-slate-700 hover:border-slate-300"
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`Select ${size.label} vehicle size`}
                  onKeyDown={(e) => e.key === 'Enter' && onSizeChange(size.id)}
                >
                  <Icon className="w-4 h-4" aria-hidden="true" />
                  <span className="text-sm font-medium">{size.label}</span>
                  <span className="text-xs opacity-75">({size.description})</span>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
