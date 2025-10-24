"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';

export interface CartItem {
  id: string;
  name: string;
  price: number;
  description?: string;
  features?: string[];
  type: 'package' | 'addon';
}

interface CartContextType {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (id: string) => void;
  clearCart: () => void;
  getTotalPrice: () => number;
  getItemCount: () => number;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: React.ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isInitialized, setIsInitialized] = useState(false);

  // Load cart from localStorage on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedCart = localStorage.getItem('cruiz-cart');
      if (savedCart) {
        try {
          setItems(JSON.parse(savedCart));
        } catch (error) {
          console.error('Error loading cart from localStorage:', error);
        }
      }
      setIsInitialized(true);
    }
  }, []);

  // Save cart to localStorage whenever items change
  useEffect(() => {
    if (isInitialized && typeof window !== 'undefined') {
      localStorage.setItem('cruiz-cart', JSON.stringify(items));
    }
  }, [items, isInitialized]);

  const addItem = useCallback((item: CartItem) => {
    setItems(prev => {
      // Check if item already exists
      const existingItem = prev.find(i => i.id === item.id);
      if (existingItem) {
        // If it's a package, replace it (only one package allowed)
        if (item.type === 'package') {
          return prev.filter(i => i.type !== 'package').concat([item]);
        }
        // If it's an addon, don't add duplicates
        return prev;
      }
      // Add new item
      return [...prev, item];
    });
  }, []);

  const removeItem = useCallback((id: string) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const clearCart = useCallback(() => {
    setItems([]);
  }, []);

  const getTotalPrice = useCallback(() => {
    return items.reduce((total, item) => total + item.price, 0);
  }, [items]);

  const getItemCount = useCallback(() => {
    return items.length;
  }, [items]);

  const contextValue = React.useMemo(() => ({
    items,
    addItem,
    removeItem,
    clearCart,
    getTotalPrice,
    getItemCount
  }), [items, addItem, removeItem, clearCart, getTotalPrice, getItemCount]);

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
}
