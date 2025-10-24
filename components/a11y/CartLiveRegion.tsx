"use client";

import { useEffect, useState } from "react";

/**
 * CartLiveRegion - Announces cart changes to screen readers
 * 
 * Uses a custom event system to announce cart updates like
 * add, remove, and quantity changes without visual disruption.
 */
export default function CartLiveRegion() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    const handleCartUpdate = (event: CustomEvent) => {
      const newMessage = event.detail.message;
      
      // Update message (screen reader will announce)
      setMessage(newMessage);
      
      // Clear message after 3 seconds to reset for next announcement
      setTimeout(() => {
        setMessage("");
      }, 3000);
    };

    // Listen for cart update events
    window.addEventListener("cart-update" as any, handleCartUpdate as any);
    
    return () => {
      window.removeEventListener("cart-update" as any, handleCartUpdate as any);
    };
  }, []);

  return (
    <div
      id="cart-live"
      role="status"
      aria-live="polite"
      aria-atomic="true"
      className="sr-only"
    >
      {message}
    </div>
  );
}

/**
 * Helper function to announce cart updates
 * Call this from cart actions to announce changes to screen readers
 */
export function announceCartUpdate(message: string) {
  if (typeof window !== "undefined") {
    window.dispatchEvent(
      new CustomEvent("cart-update", {
        detail: { message }
      })
    );
  }
}



