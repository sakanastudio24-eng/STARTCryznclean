"use client";

import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

export type VehicleSize = "car" | "smallSUV" | "largeSUVTruck";

export type CartItem = {
  id: string;
  title: string;
  basePrice: number;     // base price before size multiplier
  category?: string;
  qty?: number;          // default 1
};

type CartState = {
  items: CartItem[];
  size: VehicleSize;
};

type CartContextValue = {
  items: CartItem[];
  size: VehicleSize;
  add: (item: CartItem) => void;
  remove: (id: string) => void;
  clear: () => void;
  setSize: (s: VehicleSize) => void;
  count: () => number;
  total: () => number;
};

const CartContext = createContext<CartContextValue | null>(null);

const STORAGE_KEY = "cnc:cart";
const SIZE_MULTIPLIER: Record<VehicleSize, number> = {
  car: 1.0,
  smallSUV: 1.15,
  largeSUVTruck: 1.3,
};

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [size, setSize] = useState<VehicleSize>("car");
  const [hydrated, setHydrated] = useState(false);

  // Hydrate from localStorage on client only
  useEffect(() => {
    try {
      const raw = typeof window !== "undefined" ? window.localStorage.getItem(STORAGE_KEY) : null;
      if (raw) {
        const parsed = JSON.parse(raw) as CartState;
        if (parsed?.items) setItems(parsed.items);
        if (parsed?.size) setSize(parsed.size);
      }
    } catch {}
    setHydrated(true);
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    if (!hydrated) return;
    try {
      const state: CartState = { items, size };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    } catch {}
  }, [items, size, hydrated]);

  const add = (item: CartItem) => {
    setItems((prev) => {
      // toggle behavior: if exists, remove; else add with qty 1
      const exists = prev.find((p) => p.id === item.id);
      if (exists) return prev.filter((p) => p.id !== item.id);
      return [...prev, { ...item, qty: item.qty ?? 1 }];
    });
  };

  const remove = (id: string) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  const clear = () => setItems([]);

  const count = () => items.reduce((n, it) => n + (it.qty ?? 1), 0);

  const total = () => {
    const mult = SIZE_MULTIPLIER[size] ?? 1;
    return items.reduce((sum, it) => sum + (it.basePrice * mult) * (it.qty ?? 1), 0);
  };

  const value = useMemo<CartContextValue>(
    () => ({ items, size, add, remove, clear, setSize, count, total }),
    [items, size]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}
