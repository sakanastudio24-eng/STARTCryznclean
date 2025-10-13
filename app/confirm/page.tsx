"use client";

import React, { Suspense, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { useCart } from "../../components/cart/CartProvider";

function ConfirmInner() {
  const params = useSearchParams();
  const appointmentStarted = params.get("appointmentStarted") === "1";
  const { items, total, clear } = useCart();
  const totalAmount = useMemo(() => total().toFixed(2), [total]);

  return (
    <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
      <h1 className="text-3xl font-bold heading text-primary mb-4">
        {appointmentStarted
          ? "Appointment started — finish booking in the Setmore tab."
          : "Request sent — we’ll contact you soon."}
      </h1>
      <section className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-bold text-primary mb-3">Selected Services</h2>
        {items.length === 0 ? (
          <p className="text-charcoal/70">No services selected.</p>
        ) : (
          <ul className="list-disc pl-6 text-charcoal">
            {items.map((it) => (
              <li key={it.id}>
                {it.title} — ${it.basePrice}
              </li>
            ))}
          </ul>
        )}
        <div className="flex justify-between items-center mt-4">
          <span className="font-semibold">Total estimate</span>
          <span className="font-bold text-primary">${totalAmount}</span>
        </div>
        <div className="flex gap-3 mt-6">
          <button
            className="bg-charcoal text-offWhite px-4 py-2 rounded font-bold hover:bg-charcoal/90 transition-smooth"
            onClick={() => clear()}
          >
            Clear cart
          </button>
          <a
            href="/"
            className="bg-accent text-charcoal px-4 py-2 rounded font-bold hover:bg-accent/90 transition-smooth"
          >
            Back to Home
          </a>
        </div>
      </section>
    </main>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={<main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">Loading…</main>}>
      <ConfirmInner />
    </Suspense>
  );
}
