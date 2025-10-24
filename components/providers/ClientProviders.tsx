"use client";

import React from "react";
import { CartProvider } from "../../lib/cart-context";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
