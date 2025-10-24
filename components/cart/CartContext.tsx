"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import { VehicleSize, priceFor, SIZE_LABELS, AddOn, ADDONS } from "../../data/pricing";

export const MAX_CARS_PER_BOOKING = 3;

export interface VehicleInfo {
  make?: string;
  model?: string;
  year?: string;
  color?: string;
}

export type CartItem = 
  | { kind: "package"; id: string; packageId: string; size: VehicleSize; qty: number; unitPrice: number; name: string; vehicle?: VehicleInfo }
  | { kind: "addon"; id: string; addonId: string; qty: number; unitPrice: number; name: string };

export interface Cart {
  items: CartItem[];
}

interface CartContextType {
  cart: Cart;
  selectedSize: VehicleSize;
  setSelectedSize: (size: VehicleSize) => void;
  addPackage: (packageId: string, size: VehicleSize) => void;
  addAddon: (addonId: string) => void;
  removeItem: (itemId: string) => void;
  updateQty: (itemId: string, qty: number) => void;
  setVehicleForItem: (itemId: string, vehicle: VehicleInfo) => void;
  clearCart: () => void;
  clearLocalStorage: () => void;
  totalVehicles: () => number;
  canAddMore: () => boolean;
  subtotal: () => number;
  showToast: (message: string, type?: 'success' | 'info' | 'warning') => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

const CART_STORAGE_KEY = "cruiz_cart";

// Helper function to announce cart updates
const announce = (msg: string) => {
  if (typeof window !== "undefined") {
    const node = document.getElementById('cart-live');
    if (node) {
      node.textContent = msg;
    }
  }
};

export function CartProvider({ children }: { children: ReactNode }) {
  const [cart, setCart] = useState<Cart>({ items: [] });
  const [selectedSize, setSelectedSize] = useState<VehicleSize>("sedan");
  const [isHydrated, setIsHydrated] = useState(false);
  const [toast, setToast] = useState<{ message: string; type: 'success' | 'info' | 'warning' } | null>(null);

  // Show toast notification
  const showToast = (message: string, type: 'success' | 'info' | 'warning' = 'info') => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  // Load cart from localStorage on mount
  useEffect(() => {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.items && parsed.items.length > 0) {
          setCart(parsed);
          showToast("Your selections are saved locally", 'success');
        }
      } catch (e) {
        console.error("Failed to parse cart from localStorage:", e);
        // Clear corrupted data
        localStorage.removeItem(CART_STORAGE_KEY);
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
    return cart.items.reduce((sum, item) => {
      return item.kind === "package" ? sum + item.qty : sum;
    }, 0);
  };

  const canAddMore = () => {
    return totalVehicles() < MAX_CARS_PER_BOOKING;
  };

  const addPackage = (packageId: string, size: VehicleSize) => {
    if (!canAddMore()) {
      announce("Cannot add more vehicles. Maximum 3 per booking.");
      return;
    }

    setCart(prev => {
      // Check if we already have this exact package + size combo
      const existingIndex = prev.items.findIndex(
        item => item.kind === "package" && item.packageId === packageId && item.size === size && item.qty < 3
      );

      if (existingIndex >= 0) {
        // Increment quantity
        const newItems = [...prev.items];
        const existingItem = newItems[existingIndex];
        if (existingItem.kind === "package") {
          const newQty = Math.min(existingItem.qty + 1, 3);
          newItems[existingIndex] = {
            ...existingItem,
            qty: newQty
          };
          
          // Announce the update with total count
          const totalCount = newItems.reduce((sum, item) => sum + item.qty, 0);
          announce(`${existingItem.name} quantity updated to ${newQty}. Total items in cart: ${totalCount}.`);
        }
        
        return { items: newItems };
      } else {
        // Add new package item
        const packagePrice = priceFor(packageId, size);
        const newItem: CartItem = {
          kind: "package",
          id: `pkg-${packageId}-${size}-${Date.now()}`,
          packageId,
          size,
          qty: 1,
          unitPrice: packagePrice,
          name: `Package ${packageId}`
        };
        
        // Announce the addition with total count
        const newItems = [...prev.items, newItem];
        const totalCount = newItems.reduce((sum, item) => sum + item.qty, 0);
        announce(`${newItem.name} (${SIZE_LABELS[size]} size) added to cart. Quantity 1. Total items: ${totalCount}.`);
        showToast("Item added to cart and saved locally", 'success');
        
        return { items: newItems };
      }
    });
  };

  const addAddon = (addonId: string) => {
    const addon = ADDONS.find(a => a.id === addonId);
    if (!addon) return;

    setCart(prev => {
      // Check if we already have this addon
      const existingIndex = prev.items.findIndex(
        item => item.kind === "addon" && item.addonId === addonId && item.qty < 3
      );

      if (existingIndex >= 0) {
        // Increment quantity
        const newItems = [...prev.items];
        const existingItem = newItems[existingIndex];
        if (existingItem.kind === "addon") {
          const newQty = Math.min(existingItem.qty + 1, 3);
          newItems[existingIndex] = {
            ...existingItem,
            qty: newQty
          };
          
          // Announce the update with total count
          const totalCount = newItems.reduce((sum, item) => sum + item.qty, 0);
          announce(`${existingItem.name} add-on quantity updated to ${newQty}. Total items in cart: ${totalCount}.`);
        }
        
        return { items: newItems };
      } else {
        // Add new addon item
        const newItem: CartItem = {
          kind: "addon",
          id: `addon-${addonId}-${Date.now()}`,
          addonId,
          qty: 1,
          unitPrice: addon.price,
          name: addon.name
        };
        
        // Announce the addition with total count
        const newItems = [...prev.items, newItem];
        const totalCount = newItems.reduce((sum, item) => sum + item.qty, 0);
        announce(`${newItem.name} add-on added to cart. Quantity 1. Total items: ${totalCount}.`);
        showToast("Add-on added to cart and saved locally", 'success');
        
        return { items: newItems };
      }
    });
  };

  const removeItem = (itemId: string) => {
    setCart(prev => {
      const itemToRemove = prev.items.find(item => item.id === itemId);
      
      if (itemToRemove) {
        const itemName = itemToRemove.name;
        const newItems = prev.items.filter(item => item.id !== itemId);
        const totalCount = newItems.reduce((sum, item) => sum + item.qty, 0);
        announce(`Removed ${itemName} from cart. Total items: ${totalCount}.`);
        
        return { items: newItems };
      }
      
      return prev;
    });
  };

  const updateQty = (itemId: string, qty: number) => {
    if (qty <= 0) {
      removeItem(itemId);
      return;
    }

    setCart(prev => {
      const item = prev.items.find(i => i.id === itemId);
      
      if (item) {
        const newQty = Math.min(qty, 3);
        const newItems = prev.items.map(item =>
          item.id === itemId ? { ...item, qty: newQty } : item
        );
        const totalCount = newItems.reduce((sum, item) => sum + item.qty, 0);
        announce(`${item.name} quantity updated to ${newQty}. Total items in cart: ${totalCount}.`);
        
        return { items: newItems };
      }
      
      return prev;
    });
  };

  const setVehicleForItem = (itemId: string, vehicle: VehicleInfo) => {
    setCart(prev => ({
      items: prev.items.map(item =>
        item.id === itemId && item.kind === "package" ? { ...item, vehicle } : item
      )
    }));
  };

  const clearCart = () => {
    setCart({ items: [] });
    localStorage.removeItem(CART_STORAGE_KEY);
    showToast("Cart cleared", 'info');
  };

  // Function to manually clear localStorage (for testing/debugging)
  const clearLocalStorage = () => {
    localStorage.removeItem(CART_STORAGE_KEY);
    showToast("Local storage cleared", 'warning');
  };

  /**
   * Calculate subtotal with packages + addons
   * Formula: sum( unitPrice * qty ) for all items
   */
  const subtotal = () => {
    return cart.items.reduce((sum, item) => {
      return sum + (item.unitPrice * item.qty);
    }, 0);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        selectedSize,
        setSelectedSize,
        addPackage,
        addAddon,
        removeItem,
        updateQty,
        setVehicleForItem,
        clearCart,
        clearLocalStorage,
        totalVehicles,
        canAddMore,
        subtotal,
        showToast
      }}
    >
      {/* Live region for cart announcements */}
      <div aria-live="polite" aria-atomic="true" className="sr-only" id="cart-live" />
      
      {/* Toast notification */}
      {toast && (
        <div className="fixed top-20 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm animate-fade-in">
          <div className="flex items-center gap-3">
            <div className={`w-2 h-2 rounded-full ${
              toast.type === 'success' ? 'bg-green-500' : 
              toast.type === 'warning' ? 'bg-yellow-500' : 'bg-blue-500'
            }`} />
            <p className="text-sm text-gray-700">{toast.message}</p>
          </div>
        </div>
      )}
      
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
