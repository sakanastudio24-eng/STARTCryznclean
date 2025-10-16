"use client";
import React, { useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";
import { SETMORE_URL } from "@/lib/config";
import { trackEvent } from "@/lib/analytics";

type FormValues = {
  customer: { name: string; email: string; phone: string };
  vehicle: { make: string; model: string; year: string };
  location: { address: string; city: string; zip: string };
  selection: { package: string; addons: string[]; estPrice?: number };
  notes?: string;
};

export default function BookingClient() {
  const sp = useSearchParams();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const initialSelection = useMemo(() => {
    const pkg = sp.get("pkg") || "";
    const addons = (sp.get("addons") || "").split(",").filter(Boolean);
    const price = Number(sp.get("price") || "");
    return { package: pkg, addons, estPrice: Number.isFinite(price) ? price : undefined };
  }, [sp]);

  async function onSubmit(formData: FormData) {
    setLoading(true);
    const values: FormValues = {
      customer: {
        name: String(formData.get("name") || ""),
        email: String(formData.get("email") || ""),
        phone: String(formData.get("phone") || ""),
      },
        vehicle: {
        make: String(formData.get("make") || ""),
        model: String(formData.get("model") || ""),
        year: String(formData.get("year") || ""),
      },
      location: {
        address: String(formData.get("address") || ""),
        city: String(formData.get("city") || ""),
        zip: String(formData.get("zip") || ""),
      },
      selection: initialSelection,
      notes: String(formData.get("notes") || ""),
    };

    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
      if (!res.ok) throw new Error("Failed");
      trackEvent("booking_submit_success");
      window.open(SETMORE_URL, "_blank", "noopener,noreferrer");
      setSuccess(true);
    } catch (e) {
      // no-op; could add toast
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[60vh] py-10">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div>
          <h1 className="text-3xl font-bold heading text-primary mb-6">Booking Details</h1>
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(new FormData(e.currentTarget));
            }}
          >
            <fieldset className="space-y-4">
              <legend className="font-semibold text-lg">Customer</legend>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Full name" required className="w-full rounded border bg-white/90 px-3 py-2" />
                <input name="email" type="email" placeholder="Email" required className="w-full rounded border bg-white/90 px-3 py-2" />
                <input name="phone" placeholder="Phone" className="w-full rounded border bg-white/90 px-3 py-2 sm:col-span-2" />
              </div>
            </fieldset>

            <fieldset className="space-y-4">
              <legend className="font-semibold text-lg">Vehicle</legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input name="make" placeholder="Make" className="w-full rounded border bg-white/90 px-3 py-2" />
                <input name="model" placeholder="Model" className="w-full rounded border bg-white/90 px-3 py-2" />
                <input name="year" placeholder="Year" className="w-full rounded border bg-white/90 px-3 py-2" />
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-semibold text-lg">Location</legend>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input name="address" placeholder="Street address" className="w-full rounded border bg-white/90 px-3 py-2 sm:col-span-3" />
                <input name="city" placeholder="City" className="w-full rounded border bg-white/90 px-3 py-2 sm:col-span-2" />
                <input name="zip" placeholder="ZIP" className="w-full rounded border bg-white/90 px-3 py-2" />
              </div>
            </fieldset>

            <fieldset className="space-y-3">
              <legend className="font-semibold text-lg">Selection</legend>
              <div className="flex flex-wrap gap-2">
                {initialSelection.package && (
                  <span className="inline-flex items-center rounded-full bg-primary text-offWhite px-3 py-1 text-sm">{initialSelection.package}</span>
                )}
                {initialSelection.addons?.map((a) => (
                  <span key={a} className="inline-flex items-center rounded-full border border-primary/40 text-primary px-3 py-1 text-sm">{a}</span>
                ))}
              </div>
              <a href="/services" className="text-sm underline">Change selection</a>
            </fieldset>

            <div>
              <textarea name="notes" placeholder="Optional notes" rows={4} className="w-full rounded border bg-white/90 px-3 py-2" />
            </div>

            <div className="flex items-center gap-3">
              <button
                disabled={loading}
                className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-offWhite shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 transition disabled:opacity-60"
                type="submit"
              >
                {loading ? "Sending..." : "Submit Booking Request"}
              </button>
              {success && <span className="text-sm text-green-400">Request sent! Pick your time in Setmore.</span>}
            </div>
          </form>
        </div>

        <div className="lg:border-l lg:pl-8">
          <div className="rounded-xl bg-white/90 border p-6 sticky top-20">
            <h2 className="text-xl font-semibold mb-2">Schedule in Setmore</h2>
            <p className="text-sm text-charcoal/80 mb-4">After submitting, we open Setmore in a new tab so you can pick a time. You can come back here any time.</p>
            <a
              href={SETMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => trackEvent("book_now_clicked", { location: "booking_sidebar" })}
              className="inline-flex items-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-offWhite shadow-sm hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent/40 transition"
            >
              Book now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
