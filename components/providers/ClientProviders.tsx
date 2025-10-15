"use client";

import React from "react";
import { CartProvider } from "../ui/CartProvider"; // unified provider across app

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return (
    <CartProvider>
      {children}
    </CartProvider>
  );
}
