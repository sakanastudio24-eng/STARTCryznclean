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
    <>
    {open && <div className="fixed inset-0 bg-black/40 z-40" onClick={onClose} aria-hidden="true" />}
    <aside className={`fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl z-50 transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`} aria-label="Cart Drawer">
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-xl font-bold heading text-primary">Your Cart</h2>
        <button onClick={onClose} aria-label="Close cart" className="text-charcoal hover:text-primary text-2xl">×</button>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-charcoal/60">No services selected.</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b py-2">
              <div>
                <span className="font-medium text-charcoal">{item.title}</span>
                <span className="block text-xs text-charcoal/60">${item.basePrice}</span>
              </div>
              <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.title}`} className="text-red-600 hover:text-primary text-lg font-bold">×</button>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t flex flex-col gap-2">
        <label className="text-sm font-medium text-charcoal mb-1">Vehicle Size</label>
        <select value={vehicleSize} onChange={e => setVehicleSize(e.target.value as VehicleSize)} className="w-full border rounded p-2 focus:ring-accent">
          {vehicleSizes.map(size => (
            <option key={size.value} value={size.value}>{size.label}</option>
          ))}
        </select>
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold text-charcoal">Estimate</span>
          <span className="font-bold text-primary">${estimate}</span>
        </div>
        <div className="mt-4 mb-2 flex items-center justify-center">
          <button 
            onClick={onContinue} 
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition"
          >
            Continue
          </button>
        </div>
      </div>
    </aside>
    </>
  );
}
