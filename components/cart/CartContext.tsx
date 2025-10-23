"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { VehicleSize, priceFor } from "../../data/pricing";
import { calculateAddonsTotal } from "../../data/addons";

export const MAX_CARS_PER_BOOKING = 3;

export interface VehicleInfo {
  make?: string;
  model?: string;
  year?: string;
  color?: string;
}

export interface CartItem {
  id: string; // Unique ID for this cart item
  packageId: string;
  size: VehicleSize;
  qty: number;
  addons?: string[]; // Array of addon IDs
  vehicle?: VehicleInfo;
}

export interface Cart {
  items: CartItem[];
}

interface CartContextType {
  cart: Cart;
  selectedSize: VehicleSize;
  setSelectedSize: (size: VehicleSize) => void;
  addItem: (packageId: string, size: VehicleSize, addons?: string[]) => void;
  removeItem: (itemId: string) => void;
  updateQty: (itemId: string, qty: number) => void;
  updateItem: (itemId: string, updates: Partial<CartItem>) => void;
  setVehicleForItem: (itemId: string, vehicle: VehicleInfo) => void;
  setAddonsForItem: (itemId: string, addons: string[]) => void;
  clearCart: () => void;
  totalVehicles: () => number;
  canAddMore: () => boolean;
  subtotal: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "cart";

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [] });
  const [selectedSize, setSelectedSize] = useState<VehicleSize>("sedan");
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        setCart(parsed);
      } catch (e) {
        console.error("Failed to parse cart from localStorage:", e);
      }
    }
    setIsHydrated(true);
  }, []);

  // Save cart to localStorage whenever it changes
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
    }
  }, [cart, isHydrated]);

  const totalVehicles = () => {
    return cart.items.reduce((sum, item) => sum + item.qty, 0);
  };

  const canAddMore = () => {
    return totalVehicles() < MAX_CARS_PER_BOOKING;
  };

  const addItem = (packageId: string, size: VehicleSize, addons?: string[]) => {
    if (!canAddMore()) {
      return;
    }

    setCart(prev => {
      // Check if we already have this exact package + size combo
      const existingIndex = prev.items.findIndex(
        item => item.packageId === packageId && item.size === size && item.qty < 3
      );

      if (existingIndex >= 0) {
        // Increment quantity
        const newItems = [...prev.items];
        newItems[existingIndex] = {
          ...newItems[existingIndex],
          qty: Math.min(newItems[existingIndex].qty + 1, 3)
        };
        return { items: newItems };
      } else {
        // Add new item
        const newItem: CartItem = {
          id: `${packageId}-${size}-${Date.now()}`,
          packageId,
          size,
          qty: 1,
          addons: addons || []
        };
        return { items: [...prev.items, newItem] };
      }
    });
  };

  const removeItem = (itemId: string) => {
    setCart(prev => ({
      items: prev.items.filter(item => item.id !== itemId)
    }));
  };

  const updateQty = (itemId: string, qty: number) => {
    if (qty <= 0) {
      removeItem(itemId);
      return;
    }

    setCart(prev => {
      const newItems = prev.items.map(item =>
        item.id === itemId ? { ...item, qty: Math.min(qty, 3) } : item
      );
      return { items: newItems };
    });
  };

  const updateItem = (itemId: string, updates: Partial<CartItem>) => {
    setCart(prev => ({
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, ...updates } : item
      )
    }));
  };

  const setVehicleForItem = (itemId: string, vehicle: VehicleInfo) => {
    setCart(prev => ({
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, vehicle } : item
      )
    }));
  };

  const setAddonsForItem = (itemId: string, addons: string[]) => {
    setCart(prev => ({
      items: prev.items.map(item =>
        item.id === itemId ? { ...item, addons } : item
      )
    }));
  };

  const clearCart = () => {
    setCart({ items: [] });
  };

  /**
   * Calculate subtotal with packages + addons
   * Formula: sum( priceFor(pkg, size) + sum(addon.price) ) * qty
   */
  const subtotal = () => {
    return cart.items.reduce((sum, item) => {
      // Package price for this size
      const packagePrice = priceFor(item.packageId, item.size);
      
      // Addons price (fixed, not size-dependent)
      const addonsPrice = calculateAddonsTotal(item.addons || []);
      
      // Total for this line item
      const lineTotal = (packagePrice + addonsPrice) * item.qty;
      
      return sum + lineTotal;
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        selectedSize,
        setSelectedSize,
        addItem,
        removeItem,
        updateQty,
        updateItem,
        setVehicleForItem,
        setAddonsForItem,
        clearCart,
        totalVehicles,
        canAddMore,
        subtotal
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within CartProvider");
  }
  return context;
}
