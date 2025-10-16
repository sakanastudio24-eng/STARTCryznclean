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
    <aside className={`fixed inset-y-0 right-0 max-w-md w-full bg-surface shadow-xl z-50 transform transition-transform duration-200 ${open ? "translate-x-0" : "translate-x-full"}`} aria-label="Cart Drawer">
      <div className="flex justify-between items-center p-4 border-b border-subtle">
        <h2 className="text-xl font-bold">Your Cart</h2>
        <button onClick={onClose} aria-label="Close cart" className="text-foreground hover:text-brand text-2xl focus-ring">×</button>
      </div>
      <div className="p-4 flex-1 flex flex-col gap-2 overflow-y-auto">
        {items.length === 0 ? (
          <p className="text-muted-foreground">No services selected.</p>
        ) : (
          items.map(item => (
            <div key={item.id} className="flex justify-between items-center border-b border-subtle py-2">
              <div>
                <span className="font-medium">{item.title}</span>
                <span className="block text-xs text-muted-foreground">${item.basePrice}</span>
              </div>
              <button onClick={() => onRemove(item.id)} aria-label={`Remove ${item.title}`} className="text-red-600 hover:text-brand text-lg font-bold focus-ring">×</button>
            </div>
          ))
        )}
      </div>
      <div className="p-4 border-t border-subtle flex flex-col gap-2">
        <label className="text-sm font-medium mb-1">Vehicle Size</label>
        <select value={vehicleSize} onChange={e => setVehicleSize(e.target.value as VehicleSize)} className="w-full border rounded p-2 focus-ring">
          {vehicleSizes.map(size => (
            <option key={size.value} value={size.value}>{size.label}</option>
          ))}
        </select>
        <div className="flex justify-between items-center mt-2">
          <span className="font-semibold">Estimate</span>
          <span className="font-bold text-brand">${estimate}</span>
        </div>
        <button onClick={onContinue} className="w-full mt-4 bg-brand text-white py-2 rounded font-bold hover:bg-brand/90 focus-ring transition">Continue</button>
      </div>
    </aside>
    </>
  );
}
