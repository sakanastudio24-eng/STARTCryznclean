"use client";

import React from "react";
import { useCart } from "../cart/CartProvider";

export default function RequestClient() {
  const { items, total, size } = useCart();

  // Minimal placeholder so build passes. Copilot can fill in the full form.
  return (
    <main style={{ padding: 24 }}>
      <h1 style={{ fontFamily: 'Impact, Anton, sans-serif' }}>Request Details</h1>
      <p>Vehicle size: <strong>{size}</strong></p>
      <p>Items in cart: <strong>{items.length}</strong></p>
      <p>Estimate total: <strong>${total().toFixed(2)}</strong></p>
      {/* TODO: Replace with the full request form UI */}
    </main>
  );
}
