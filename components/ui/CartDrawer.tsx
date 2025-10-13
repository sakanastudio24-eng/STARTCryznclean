import React from "react";

import type { CartItem as CartItemType } from "./CartProvider";

interface CartItem extends CartItemType {
  // id, title, basePrice, category, qty
}

type VehicleSize = "car" | "smallSUV" | "largeSUVTruck";
interface CartDrawerProps {
  items: CartItem[];
  onRemove: (id: string) => void;
  vehicleSize: VehicleSize;
  setVehicleSize: (size: VehicleSize) => void;
  estimate: number;
  onContinue: () => void;
  open: boolean;
  onClose: () => void;
}

const vehicleSizes = [
  { label: "Car", value: "car" },
  { label: "Small SUV", value: "smallSUV" },
  { label: "Large SUV/Truck", value: "largeSUVTruck" },
];

export default function CartDrawer({ items, onRemove, vehicleSize, setVehicleSize, estimate, onContinue, open, onClose }: CartDrawerProps) {
  return (
    <aside className={`fixed top-0 right-0 h-full w-80 bg-base border-l border-white/10 rounded-l-2xl shadow-2xl z-50 transform transition-transform duration-300 ${open ? "translate-x-0" : "translate-x-full"}`} aria-label="Cart Drawer">
      <div className="flex justify-between items-center p-4 border-b border-white/10 text-text">
        <h2 className="text-xl font-display font-bold">Your Cart</h2>
        <button onClick={onClose} aria-label="Close cart" className="text-text hover:opacity-80 text-2xl">×</button>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto text-text">
        {items.length === 0 ? (
          <p className="text-text/70">No services selected.</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b border-white/10 py-2">
              <div>
                <span className="font-medium text-text">{item.title}</span>
                <span className="block text-xs text-text/70">${item.basePrice}</span>
              </div>
              <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.title}`} className="text-red-300 hover:text-red-200 text-lg font-bold">×</button>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t border-white/10 flex flex-col gap-3 text-text">
        <label className="text-xs uppercase tracking-wide text-white/70">Vehicle Size</label>
        <div className="grid grid-cols-3 gap-2">
          {vehicleSizes.map(s => (
            <button key={s.value} onClick={() => setVehicleSize(s.value as VehicleSize)}
              className={`px-2 py-2 rounded-xl text-sm border border-white/10 ${vehicleSize === s.value ? 'bg-white/10' : 'bg-transparent hover:bg-white/5'}`}>{s.label}</button>
          ))}
        </div>
        <div className="flex justify-between items-center mt-1">
          <span className="font-semibold">Estimate</span>
          <span className="font-bold text-accent">${estimate.toFixed ? estimate.toFixed(2) : estimate}</span>
        </div>
        <button onClick={onContinue} className="w-full mt-2 bg-primary text-text py-2 rounded-xl font-bold hover:opacity-90 transition">Continue</button>
      </div>
    </aside>
  );
}
