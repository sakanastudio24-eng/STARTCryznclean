import React, { createContext, useContext, useEffect, useState, ReactNode } from "react";

export type CartItem = {
  id: string;
  title: string;
  basePrice: number;
  category: string;
  qty: number;
};

type VehicleSize = "car" | "smallSUV" | "largeSUVTruck";
const sizeMultipliers: Record<VehicleSize, number> = {
  car: 1.0,
  smallSUV: 1.15,
  largeSUVTruck: 1.3,
};

interface CartContextType {
  items: CartItem[];
  vehicleSize: VehicleSize;
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  count: () => number;
  total: () => number;
  setVehicleSize: (size: VehicleSize) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);
const STORAGE_KEY = "cnc:cart";

function loadCart() {
  if (typeof window === "undefined") return { items: [], vehicleSize: "car" };
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { items: [], vehicleSize: "car" };
    return JSON.parse(raw);
  } catch {
    return { items: [], vehicleSize: "car" };
  }
}

function saveCart(items: CartItem[], vehicleSize: VehicleSize) {
  if (typeof window === "undefined") return;
  localStorage.setItem(STORAGE_KEY, JSON.stringify({ items, vehicleSize }));
}

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>(() => loadCart().items);
  const [vehicleSize, setVehicleSize] = useState<VehicleSize>(() => loadCart().vehicleSize);

  useEffect(() => {
    saveCart(items, vehicleSize);
  }, [items, vehicleSize]);

  const add = (item: CartItem) => {
    setItems((prev) => {
      const exists = prev.find((i) => i.id === item.id);
      if (exists) {
        return prev.filter((i) => i.id !== item.id); // toggle off
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };
  const remove = (id: string) => setItems((prev) => prev.filter((i) => i.id !== id));
  const clear = () => setItems([]);
  const count = () => items.length;
  const total = () => items.reduce((sum, i) => sum + i.basePrice * sizeMultipliers[vehicleSize] * i.qty, 0);

  return (
    <CartContext.Provider value={{ items, vehicleSize, add, remove, clear, count, total, setVehicleSize }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
