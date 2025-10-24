"use client";

import React, { useState, useRef, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import { getPackageById, calculatePrice, SIZE_LABELS } from "../../data/pricing";
import { useRouter } from "next/navigation";

export default function MiniCart() {
  const { cart, removeItem, updateQty, subtotal, totalVehicles } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  
  // Refs for focus management
  const cartButtonRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  const itemCount = totalVehicles();

  // Close drawer and restore focus
  const closeDrawer = () => {
    setIsOpen(false);
    // Restore focus to cart button after drawer closes
    setTimeout(() => {
      cartButtonRef.current?.focus();
    }, 100);
  };

  // Handle escape key
  useEffect(() => {
    if (!isOpen) return;

    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeDrawer();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [isOpen]);

  // Focus management on open
  useEffect(() => {
    if (isOpen && titleRef.current) {
      // Focus the drawer title when opened
      titleRef.current.focus();
    }
  }, [isOpen]);

  // Focus trap within drawer
  useEffect(() => {
    if (!isOpen || !drawerRef.current) return;

    const drawer = drawerRef.current;
    const focusableElements = drawer.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstFocusable = focusableElements[0] as HTMLElement;
    const lastFocusable = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        // Shift + Tab
        if (document.activeElement === firstFocusable) {
          e.preventDefault();
          lastFocusable?.focus();
        }
      } else {
        // Tab
        if (document.activeElement === lastFocusable) {
          e.preventDefault();
          firstFocusable?.focus();
        }
      }
    };

    drawer.addEventListener("keydown", handleTab as any);
    return () => drawer.removeEventListener("keydown", handleTab as any);
  }, [isOpen]);

  // only render floating pill if count > 0
  if (itemCount <= 0) return null;

  const handleGoToBooking = () => {
    router.push("/booking");
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        ref={cartButtonRef}
        onClick={() => setIsOpen(!isOpen)}
        aria-label={isOpen ? "Close cart" : "Open cart"}
        className="fixed bottom-6 left-6 z-30 rounded-full bg-slate-900/90 px-4 py-2 text-white shadow-sm backdrop-blur"
      >
        <ShoppingCart className="w-5 h-5" aria-hidden="true" focusable="false" />
        <span>Cart ({itemCount})</span>
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={closeDrawer}
            aria-hidden="true"
          />

          {/* Drawer */}
          <div 
            ref={drawerRef}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cart-drawer-title"
            className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto"
          >
            <div className="p-6 pb-20">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 
                  id="cart-drawer-title"
                  ref={titleRef}
                  tabIndex={-1}
                  className="text-2xl font-bold text-slate-900"
                >
                  Your Cart
                </h2>
                <button
                  onClick={closeDrawer}
                  aria-label="Close cart"
                  className="text-slate-400 hover:text-slate-600 text-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded"
                >
                  ×
                </button>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.items.map(item => {
                  if (item.kind === "package") {
                    const pkg = getPackageById(item.packageId);
                    if (!pkg) return null;

                    const price = calculatePrice(pkg.base, item.size);
                    const itemTotal = price * item.qty;

                    return (
                      <div
                        key={item.id}
                        className="border border-slate-200 rounded-lg p-4 bg-slate-50"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900">
                              {pkg.name}
                            </h3>
                            <p className="text-sm text-slate-600">
                              {SIZE_LABELS[item.size]}
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${pkg.name} from cart`}
                            className="text-red-500 hover:text-red-700 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              aria-label={`Decrease quantity of ${pkg.name}`}
                              className="w-8 h-8 rounded border border-slate-300 hover:bg-slate-100 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-semibold" aria-label={`Quantity: ${item.qty}`}>
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              disabled={item.qty >= 3}
                              aria-label={`Increase quantity of ${pkg.name}`}
                              className="w-8 h-8 rounded border border-slate-300 hover:bg-slate-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900">
                              ${itemTotal}
                            </div>
                            <div className="text-xs text-slate-500">
                              ${price} each
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    // Addon item
                    const itemTotal = item.unitPrice * item.qty;
                    return (
                      <div
                        key={item.id}
                        className="border border-slate-200 rounded-lg p-4 bg-slate-50"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h3 className="font-semibold text-slate-900">
                              {item.name}
                            </h3>
                            <p className="text-sm text-slate-600">
                              Add-on Service
                            </p>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            aria-label={`Remove ${item.name} from cart`}
                            className="text-red-500 hover:text-red-700 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 rounded"
                          >
                            Remove
                          </button>
                        </div>

                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <button
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              aria-label={`Decrease quantity of ${item.name}`}
                              className="w-8 h-8 rounded border border-slate-300 hover:bg-slate-100 flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                              −
                            </button>
                            <span className="w-8 text-center font-semibold" aria-label={`Quantity: ${item.qty}`}>
                              {item.qty}
                            </span>
                            <button
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              disabled={item.qty >= 3}
                              aria-label={`Increase quantity of ${item.name}`}
                              className="w-8 h-8 rounded border border-slate-300 hover:bg-slate-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                            >
                              +
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="font-bold text-slate-900">
                              ${itemTotal}
                            </div>
                            <div className="text-xs text-slate-500">
                              ${item.unitPrice} each
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  }
                })}
              </div>

              {/* Total */}
              <div className="border-t border-slate-200 pt-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-slate-600">Total Vehicles:</span>
                  <span className="font-semibold text-slate-900">
                    {itemCount}
                  </span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-slate-900">
                    Estimated Total:
                  </span>
                  <span className="text-2xl font-bold text-primary">
                    ${subtotal()}
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Footer */}
            <div className="fixed bottom-0 right-0 w-full max-w-md bg-white/95 backdrop-blur-sm border-t border-slate-200 z-50">
              <div className="px-4 py-4 flex items-center justify-center">
                <button
                  onClick={handleGoToBooking}
                  aria-label="Go to booking page"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-sm font-semibold text-white shadow-sm hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 transition"
                >
                  View Cart
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

