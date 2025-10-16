"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import { CartProvider, useCart } from "../../components/ui/CartProvider";
import { SETMORE_URL } from "../../lib/config";

type FormValues = {
  customer: { name: string; email: string; phone?: string };
  vehicle: { make?: string; model?: string; year?: string };
  location: { address?: string; city?: string; zip?: string };
  selection: { package: string; addons: string[]; estPrice?: number };
  notes?: string;
};

function BookingClient() {
  const params = useSearchParams();
  const { items, vehicleSize, total } = useCart();

  const [values, setValues] = useState<FormValues>({
    customer: { name: "", email: "", phone: "" },
    vehicle: { make: "", model: "", year: "" },
    location: { address: "", city: "", zip: "" },
    selection: { package: "", addons: [], estPrice: undefined },
    notes: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState<string>("");

  // Prefill from query params
  useEffect(() => {
    const pkg = params.get("pkg") || "";
    const addons = (params.get("addons") || "").split(",").filter(Boolean);
    const priceParam = params.get("price");
    const estPrice = priceParam ? Number(priceParam) : undefined;
    setValues((v) => ({
      ...v,
      selection: {
        package: pkg,
        addons,
        estPrice: estPrice ?? (items.length ? total() : undefined),
      },
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [params]);

  const onChange = (path: string, val: string) => {
    setValues((v) => {
      const next = { ...v } as any;
      const parts = path.split(".");
      let ref = next;
      for (let i = 0; i < parts.length - 1; i++) ref = ref[parts[i]];
      ref[parts[parts.length - 1]] = val;
      return next as FormValues;
    });
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      try { window.open(SETMORE_URL, "_blank", "noopener,noreferrer"); } catch {}
      setSuccess(true);
      try { window.dispatchEvent(new CustomEvent('analytics', { detail: { event: 'booking_submit_success' } })); } catch {}
    } catch (err: any) {
      setError(err?.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col min-h-screen bg-offWhite text-charcoal">
      <NavigationBar />
      <main className="flex-1 py-10 md:py-14">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold heading text-primary mb-6">Booking Request</h1>
          {success && (
            <div className="mb-6 rounded-md border border-emerald-200 bg-emerald-50 text-emerald-900 px-4 py-3">
              Request sent! A new Setmore tab should have opened to pick your time.
            </div>
          )}
          {error && (
            <div className="mb-6 rounded-md border border-red-200 bg-red-50 text-red-900 px-4 py-3">{error}</div>
          )}

          <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-5">
            {/* Left column: form */}
            <div className="md:col-span-3 flex flex-col gap-4">
              <section className="bg-white rounded-xl shadow p-5">
                <h2 className="text-lg font-semibold text-primary mb-3">Customer</h2>
                <div className="grid grid-cols-1 gap-3">
                  <input className="w-full border rounded p-2" placeholder="Full name" value={values.customer.name} onChange={(e) => onChange("customer.name", e.target.value)} required />
                  <input type="email" className="w-full border rounded p-2" placeholder="Email" value={values.customer.email} onChange={(e) => onChange("customer.email", e.target.value)} required />
                  <input className="w-full border rounded p-2" placeholder="Phone" value={values.customer.phone || ""} onChange={(e) => onChange("customer.phone", e.target.value)} />
                </div>
              </section>

              <section className="bg-white rounded-xl shadow p-5">
                <h2 className="text-lg font-semibold text-primary mb-3">Vehicle</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input className="w-full border rounded p-2" placeholder="Make" value={values.vehicle.make || ""} onChange={(e) => onChange("vehicle.make", e.target.value)} />
                  <input className="w-full border rounded p-2" placeholder="Model" value={values.vehicle.model || ""} onChange={(e) => onChange("vehicle.model", e.target.value)} />
                  <input className="w-full border rounded p-2" placeholder="Year" value={values.vehicle.year || ""} onChange={(e) => onChange("vehicle.year", e.target.value)} />
                </div>
              </section>

              <section className="bg-white rounded-xl shadow p-5">
                <h2 className="text-lg font-semibold text-primary mb-3">Location</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  <input className="w-full border rounded p-2 md:col-span-3" placeholder="Address" value={values.location.address || ""} onChange={(e) => onChange("location.address", e.target.value)} />
                  <input className="w-full border rounded p-2" placeholder="City" value={values.location.city || ""} onChange={(e) => onChange("location.city", e.target.value)} />
                  <input className="w-full border rounded p-2" placeholder="ZIP" value={values.location.zip || ""} onChange={(e) => onChange("location.zip", e.target.value)} />
                </div>
              </section>

              <section className="bg-white rounded-xl shadow p-5">
                <h2 className="text-lg font-semibold text-primary mb-3">Notes</h2>
                <textarea className="w-full border rounded p-2" rows={4} placeholder="Optional notes" value={values.notes || ""} onChange={(e) => onChange("notes", e.target.value)} />
              </section>
            </div>

            {/* Right column: selection summary */}
            <aside className="md:col-span-2 flex flex-col gap-4">
              <section className="bg-white rounded-xl shadow p-5">
                <h2 className="text-lg font-semibold text-primary mb-3">Selection</h2>
                <div className="text-sm text-charcoal/80">
                  <div className="mb-2"><span className="font-medium">Package:</span> {values.selection.package || "(none)"}</div>
                  <div className="mb-2"><span className="font-medium">Add-ons:</span> {values.selection.addons.length ? values.selection.addons.join(", ") : "(none)"}</div>
                  <div className="mb-2"><span className="font-medium">Estimated Price:</span> {values.selection.estPrice ? `$${values.selection.estPrice.toFixed(2)}` : "-"}</div>
                  <a href="/services" className="text-primary underline">Change selection</a>
                </div>
              </section>

              <button
                type="submit"
                onClick={() => {}}
                className="w-full inline-flex items-center justify-center rounded-md bg-brand px-4 py-3 text-base font-semibold text-white shadow-sm hover:bg-brand-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/40 transition"
                disabled={loading}
              >
                {loading ? "Submitting..." : "Submit and pick time in Setmore"}
              </button>
            </aside>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default function BookingPage() {
  return (
    <CartProvider>
      <Suspense fallback={<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">Loading…</div>}>
        <BookingClient />
      </Suspense>
    </CartProvider>
  );
}
