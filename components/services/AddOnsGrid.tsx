"use client";
import { useState } from "react";
import { 
  Wrench, 
  SunMedium, 
  Wind, 
  Scissors, 
  Cog, 
  Droplets, 
  Box,
  Car,
  Sparkles
} from "lucide-react";
import { ADDONS, type AddOn } from "../../data/pricing";

// Icon mapping
const iconMap = {
  Wrench,
  SunMedium,
  Wind,
  Scissors,
  Cog,
  Droplets,
  Box,
  Car,
  Sparkles,
};

// Categorize add-ons
const categorizeAddons = (addons: AddOn[]) => {
  const categories = {
    "Exterior": addons.filter(addon => 
      ["engine-bay", "headlight-restore", "wheel-detail", "glass-coat", "clay-bar"].includes(addon.id)
    ),
    "Interior": addons.filter(addon => 
      ["odor-removal", "pet-hair"].includes(addon.id)
    ),
  };
  return categories;
};

interface AddOnsGridProps {
  selectedAddons: string[];
  onToggleAddon: (addonId: string) => void;
}

export default function AddOnsGrid({ selectedAddons, onToggleAddon }: AddOnsGridProps) {
  const categories = categorizeAddons(ADDONS);

  return (
    <div className="space-y-8">
      {Object.entries(categories).map(([categoryName, addons]) => (
        <div key={categoryName}>
          <h3 className="text-lg font-semibold text-slate-900 mb-4 flex items-center gap-2">
            {categoryName === "Exterior" ? <Car className="w-5 h-5" /> : <Sparkles className="w-5 h-5" />}
            {categoryName}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {addons.map((addon) => {
              const IconComponent = iconMap[addon.icon as keyof typeof iconMap] || Box;
              const isSelected = selectedAddons.includes(addon.id);
              
              return (
                <button
                  key={addon.id}
                  onClick={() => onToggleAddon(addon.id)}
                  className={`p-4 rounded-lg border-2 transition-all duration-200 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 ${
                    isSelected 
                      ? "border-primary bg-primary/5 shadow-sm" 
                      : "border-slate-200 bg-white hover:border-slate-300"
                  }`}
                  aria-pressed={isSelected}
                  aria-label={`${addon.name} - $${addon.price}`}
                >
                  <div className="text-center">
                    <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center ${
                      isSelected ? "bg-primary text-white" : "bg-slate-100 text-slate-600"
                    }`}>
                      <IconComponent className="w-6 h-6" aria-hidden="true" />
                    </div>
                    <h4 className="font-medium text-sm text-slate-900 mb-1">{addon.name}</h4>
                    <p className="text-xs text-slate-600 mb-2">{addon.description}</p>
                    <span className="text-sm font-semibold text-primary">${addon.price}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
