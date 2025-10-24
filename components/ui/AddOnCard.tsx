"use client";

import React from "react";
import { AddOn } from "../../data/pricing";
import { announceCartUpdate } from "../a11y/CartLiveRegion";

// Dynamic icon import helper
const getIcon = (iconName?: string) => {
  if (!iconName) return null;
  
  try {
    // Dynamic import for Lucide React icons
    const iconMap: Record<string, React.ComponentType<any>> = {
      Wrench: require("lucide-react").Wrench,
      SunMedium: require("lucide-react").SunMedium,
      Wind: require("lucide-react").Wind,
      Scissors: require("lucide-react").Scissors,
      Cog: require("lucide-react").Cog,
      Droplets: require("lucide-react").Droplets,
      Cube: require("lucide-react").Cube,
    };
    
    return iconMap[iconName] || null;
  } catch (error) {
    console.warn(`Icon ${iconName} not found`);
    return null;
  }
};

interface AddOnCardProps {
  addon: AddOn;
  inCartQty: number;
  onAdd: () => void;
  onRemove: () => void;
}

export default function AddOnCard({ addon, inCartQty, onAdd, onRemove }: AddOnCardProps) {
  const Icon = getIcon(addon.icon);
  const isInCart = inCartQty > 0;

  const handleAdd = () => {
    onAdd();
    announceCartUpdate(`Added ${addon.name} add-on. Quantity ${inCartQty + 1}.`);
  };

  const handleRemove = () => {
    onRemove();
    announceCartUpdate(`Removed ${addon.name} add-on.`);
  };

  return (
    <div className="rounded-xl border border-slate-200 bg-white p-4 h-full flex flex-col">
      <div className="flex-1 space-y-3">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
            {Icon ? (
              <Icon className="w-4 h-4 text-primary" aria-hidden="true" focusable="false" />
            ) : (
              <div className="w-4 h-4 bg-primary/20 rounded" />
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-sm text-slate-900 truncate">{addon.name}</h3>
            <p className="text-lg font-bold text-primary mt-1">${addon.price}</p>
          </div>
        </div>
        
        <p className="text-xs text-slate-600 line-clamp-2">
          {addon.description}
        </p>
      </div>
      
      <div className="mt-auto pt-4">
        {isInCart ? (
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <button
                onClick={handleRemove}
                aria-label={`Remove ${addon.name} add-on`}
                className="w-8 h-8 rounded border border-slate-300 hover:bg-slate-100 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                −
              </button>
              <span className="w-8 text-center font-semibold" aria-label={`Quantity: ${inCartQty}`}>
                {inCartQty}
              </span>
              <button
                onClick={handleAdd}
                disabled={inCartQty >= 3}
                aria-label={`Add more ${addon.name} add-on`}
                className="w-8 h-8 rounded border border-slate-300 hover:bg-slate-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                +
              </button>
            </div>
            <span className="text-sm text-slate-600">
              ${addon.price * inCartQty}
            </span>
          </div>
        ) : (
          <button
            onClick={handleAdd}
            aria-label={`Add ${addon.name} add-on`}
            className="w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 bg-primary text-white hover:opacity-90"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
}


