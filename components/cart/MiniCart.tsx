"use client";

import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";
import { useCart } from "./CartContext";
import { getPackageById, calculatePrice, SIZE_LABELS } from "../../data/pricing";
import { useRouter } from "next/navigation";

export default function MiniCart() {
  const { cart, removeItem, updateQty, subtotal, totalVehicles } = useCart();
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const itemCount = totalVehicles();

  if (itemCount === 0) {
    return null;
  }

  const handleGoToBooking = () => {
    router.push("/booking");
  };

  return (
    <>
      {/* Floating Cart Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 btn-primary-cta px-6 py-3 rounded-full shadow-lg font-bold text-lg z-40 flex items-center gap-2"
      >
        <ShoppingCart className="w-5 h-5" />
        <span>Cart ({itemCount})</span>
      </button>

      {/* Cart Drawer */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40"
            onClick={() => setIsOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed right-0 top-0 bottom-0 w-full max-w-md bg-white shadow-2xl z-50 overflow-y-auto">
            <div className="p-6">
              {/* Header */}
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Your Cart</h2>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-slate-400 hover:text-slate-600 text-2xl"
                >
                  ×
                </button>
              </div>

              {/* Cart Items */}
              <div className="space-y-4 mb-6">
                {cart.items.map(item => {
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
                          className="text-red-500 hover:text-red-700 text-sm"
                        >
                          Remove
                        </button>
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <button
                            onClick={() => updateQty(item.id, item.qty - 1)}
                            className="w-8 h-8 rounded border border-slate-300 hover:bg-slate-100 flex items-center justify-center"
                          >
                            −
                          </button>
                          <span className="w-8 text-center font-semibold">
                            {item.qty}
                          </span>
                          <button
                            onClick={() => updateQty(item.id, item.qty + 1)}
                            disabled={item.qty >= 3}
                            className="w-8 h-8 rounded border border-slate-300 hover:bg-slate-100 flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
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
                })}
              </div>

              {/* Total */}
              <div className="border-t border-slate-200 pt-4 mb-6">
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

              {/* CTA */}
              <button
                onClick={handleGoToBooking}
                className="btn-primary-cta w-full py-4 rounded-lg font-bold text-lg"
              >
                Go to Booking
              </button>
            </div>
          </div>
        </>
      )}
    </>
  );
}

