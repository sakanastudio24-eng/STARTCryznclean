"use client";

import React from "react";
import { CartProvider } from "../ui/CartProvider";

export default function ClientProviders({ children }: { children: React.ReactNode }) {
  return <CartProvider>{children}</CartProvider>;
}
