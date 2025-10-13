"use client";

import React from "react";
import { CartProvider } from "../cart/CartProvider";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
