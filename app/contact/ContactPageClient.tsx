"use client";

import { useState } from "react";
import Link from "next/link";
import { MapPin, Info } from "lucide-react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  city: string;
  zip: string;
  make: string;
  model: string;
  year: string;
  color: string;
  service: string;
  message: string;
};

const PACKAGES = [
  { id: "express", label: "Express Wash" },
  { id: "standard", label: "Standard Detail" },
  { id: "premium", label: "Premium Detail" },
];

export default function ContactPageClient() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "john.doe@example.com",
    phone: "",
    city: "",
    zip: "",
    make: "",
    model: "",
    year: "",
    color: "",
    service: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState<null | string>(null);
  const [error, setError] = useState<null | string>(null);

  const update = (k: keyof FormState) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm((f) => ({ ...f, [k]: e.target.value }));

  // ZIP code validation
  const isZipInServiceArea = (zip: string): boolean => {
    const zipNum = parseInt(zip);
    return zipNum >= 92870 && zipNum <= 92899;
  };

  const getZipStatus = (zip: string) => {
    if (!zip) return null;
    if (isZipInServiceArea(zip)) {
      return { 
        valid: true, 
        message: "Within our service area", 
        color: "text-green-700 bg-green-50 border-green-200" 
      };
    } else {
      return { 
        valid: false, 
        message: "Outside our service area — we'll contact you for availability.", 
        color: "text-amber-700 bg-amber-50 border-amber-200" 
      };
    }
  };

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);
    setSuccess(null);
    try {
      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) throw new Error("Failed to submit");
      setSuccess("Thanks! We received your request. We’ll be in touch soon.");
      setForm({
        name: "",
        email: "",
        phone: "",
        city: "",
        zip: "",
        make: "",
        model: "",
        year: "",
        color: "",
        service: "",
        message: "",
      });
    } catch (err) {
      setError("Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <>
      {/* Main contact section */}
      <section className="section">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
            <p className="text-slate-600 text-lg">
              Request a custom quote or reach out — we’re happy to help.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left: Quote form */}
            <div className="bg-white rounded-xl border border-slate-200 p-6 md:p-8 shadow-sm">
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Request a Quote</h2>

              {success && (
                <div
                  role="status"
                  className="mb-4 rounded-md bg-green-50 border border-green-200 text-green-800 px-4 py-3"
                >
                  {success}
                </div>
              )}
              {error && (
                <div
                  role="alert"
                  className="mb-4 rounded-md bg-red-50 border border-red-200 text-red-700 px-4 py-3"
                >
                  {error}
                </div>
              )}

              <form onSubmit={onSubmit} className="space-y-4" aria-label="Request a Quote form">
                {/* Contact */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="name">
                      Name <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={update("name")}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="phone">
                      Phone <span className="text-red-600">*</span>
                    </label>
                    <input
                      id="phone"
                      required
                      value={form.phone}
                      onChange={update("phone")}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="email">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>

                {/* Location */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="city">
                      City
                    </label>
                    <input
                      id="city"
                      value={form.city}
                      onChange={update("city")}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="zip">
                      ZIP Code
                      <span className="ml-1 inline-flex items-center" title="20–25 mile radius from Yorba Linda, CA">
                        <Info className="w-3 h-3 text-slate-400" aria-hidden="true" />
                      </span>
                    </label>
                    <input
                      id="zip"
                      value={form.zip}
                      onChange={update("zip")}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                      placeholder="92886"
                    />
                    {form.zip && (
                      <div className={`mt-2 p-2 rounded-md border text-sm ${getZipStatus(form.zip)?.color}`}>
                        <div className="flex items-center gap-1">
                          <MapPin className="w-3 h-3" aria-hidden="true" />
                          <span>{getZipStatus(form.zip)?.message}</span>
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                {/* Vehicle */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="make">
                      Make
                    </label>
                    <input
                      id="make"
                      value={form.make}
                      onChange={update("make")}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="model">
                      Model
                    </label>
                    <input
                      id="model"
                      value={form.model}
                      onChange={update("model")}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="year">
                      Year
                    </label>
                    <input
                      id="year"
                      value={form.year}
                      onChange={update("year")}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="color">
                      Color
                    </label>
                    <input
                      id="color"
                      value={form.color}
                      onChange={update("color")}
                      className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    />
                  </div>
                </div>

                {/* Service */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="service">
                    Desired Service
                  </label>
                  <select
                    id="service"
                    value={form.service}
                    onChange={update("service")}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  >
                    <option value="">Select a service…</option>
                    {PACKAGES.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.label}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Notes */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="message">
                    Anything else we should know?
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    value={form.message}
                    onChange={update("message")}
                    className="w-full rounded-md border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>

                <div className="flex items-center gap-3">
                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-primary-cta inline-flex items-center justify-center rounded-md bg-primary text-white px-6 py-3 font-semibold hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition"
                  >
                    {submitting ? "Sending…" : "Submit Request"}
                  </button>
                  <Link
                    href="/booking"
                    className="inline-flex items-center justify-center rounded-md bg-white text-primary border border-primary px-6 py-3 font-semibold hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 transition"
                  >
                    Book Now
                  </Link>
                </div>
              </form>
            </div>

            {/* Right: Service area / contact info */}
            <div className="flex flex-col gap-6">
              <div className="rounded-xl overflow-hidden border border-slate-200 bg-white">
                {/* Placeholder map/image */}
                <div className="aspect-[16/9] bg-slate-100 grid place-items-center text-slate-500">
                  <span className="text-sm">Service Area Map (placeholder)</span>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Service Area</h3>
                  <p className="text-slate-600">
                    We typically cover a 20–25 mile radius from Yorba Linda. Outside our area? We can still
                    help—submit a quote and we’ll confirm availability.
                  </p>
                </div>
              </div>

              {/* Contact block */}
              <div className="rounded-xl border border-slate-200 bg-white p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">Contact</h3>
                <ul className="text-slate-700 space-y-1">
                  <li>Email: <a className="underline" href="mailto:hello@cruiznclean.com">hello@cruiznclean.com</a></li>
                  <li>Phone: <a className="underline" href="tel:+1-555-555-5555">(555) 555-5555</a></li>
                  <li>Hours: Mon–Sat 9am–6pm, Sun by appointment</li>
                </ul>
              </div>

            </div>
          </div>
        </div>
      </section>

    </>
  );
}
