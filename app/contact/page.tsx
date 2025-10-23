"use client";

import React, { useState } from "react";
import { Info, Mail, Phone, Clock } from "lucide-react";
import { PACKAGES } from "../../data/pricing";
import { getServiceAreaMessage, SERVICE_AREA_INFO } from "../../data/serviceArea";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    city: "",
    zip: "",
    make: "",
    model: "",
    year: "",
    color: "",
    desiredService: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim()) {
      setError("Please fill in all required fields.");
      return;
    }

    setSubmitting(true);

    // Build payload for existing API
    const payload = {
      fullName: formData.name,
      email: formData.email,
      phone: formData.phone,
      city: formData.city,
      zip: formData.zip,
      make: formData.make,
      model: formData.model,
      year: formData.year,
      color: formData.color,
      vehicleSize: "sedan", // default
      notes: `Desired Service: ${formData.desiredService || "Not specified"}\n\n${formData.message}`,
      services: formData.desiredService ? [{ title: formData.desiredService }] : [],
    };

    try {
      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      
      if (!data.ok) {
        throw new Error("Failed to submit request");
      }

      setSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        city: "",
        zip: "",
        make: "",
        model: "",
        year: "",
        color: "",
        desiredService: "",
        message: "",
      });
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Contact Us</h1>
        <p className="text-slate-600 text-lg">
          Get in touch to request a quote or learn more about our mobile detailing services.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column: Request a Quote Form */}
        <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Request a Quote</h2>

          {success ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg
                  className="w-8 h-8 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-2">Quote Request Sent!</h3>
              <p className="text-slate-600 mb-6">
                We'll review your request and get back to you within 24 hours.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="btn-small bg-slate-100 text-slate-900 px-6 py-2 rounded-lg font-semibold hover:bg-slate-200 border border-slate-300"
              >
                Submit Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Contact Info */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  placeholder="John Doe"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="you@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Phone <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>

              {/* Location */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="Los Angeles"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    ZIP Code
                  </label>
                  <input
                    type="text"
                    name="zip"
                    value={formData.zip}
                    onChange={handleChange}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="90001"
                  />
                </div>
              </div>

              {/* Service Area Status Badge */}
              {formData.zip && (() => {
                const status = getServiceAreaMessage(formData.zip);
                if (!status.message) return null;
                
                return (
                  <div className={`mt-3 p-3 rounded-lg border text-sm ${
                    status.isPrimary
                      ? "bg-green-50 border-green-200 text-green-900"
                      : status.isServed
                      ? "bg-amber-50 border-amber-200 text-amber-900"
                      : "bg-blue-50 border-blue-200 text-blue-900"
                  }`}>
                    <strong>Service Area:</strong> {status.message}
                    {status.requiresFee && (
                      <span className="block text-xs mt-1">A small travel fee may apply.</span>
                    )}
                  </div>
                );
              })()}

              {/* Vehicle Info */}
              <div className="border-t border-slate-200 pt-4 mt-4">
                <h3 className="text-sm font-semibold text-slate-900 mb-3">Vehicle Information (Optional)</h3>
                <div className="grid grid-cols-2 gap-3">
                  <input
                    type="text"
                    name="make"
                    value={formData.make}
                    onChange={handleChange}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="Make"
                  />
                  <input
                    type="text"
                    name="model"
                    value={formData.model}
                    onChange={handleChange}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="Model"
                  />
                  <input
                    type="text"
                    name="year"
                    value={formData.year}
                    onChange={handleChange}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="Year"
                  />
                  <input
                    type="text"
                    name="color"
                    value={formData.color}
                    onChange={handleChange}
                    className="border border-slate-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="Color"
                  />
                </div>
              </div>

              {/* Desired Service */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1">
                  Desired Service
                </label>
                <select
                  name="desiredService"
                  value={formData.desiredService}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                >
                  <option value="">Select a package...</option>
                  {PACKAGES.map(pkg => (
                    <option key={pkg.id} value={pkg.name}>
                      {pkg.name} (Starting at ${pkg.base})
                    </option>
                  ))}
                  <option value="Custom">Custom Service</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  placeholder="Tell us about your needs..."
                />
              </div>

              {/* Error */}
              {error && (
                <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                  <p className="text-sm text-red-900">{error}</p>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={submitting}
                className="btn-primary-cta w-full py-3 rounded-lg font-bold disabled:opacity-50"
              >
                {submitting ? "Sending..." : "Send Quote Request"}
              </button>
            </form>
          )}
        </div>

        {/* Right Column: Service Area & Info */}
        <div className="space-y-6">
          {/* Service Area Block */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Area</h2>
            
            {/* Placeholder Map */}
            <div className="bg-slate-100 border border-slate-300 rounded-lg mb-4 aspect-video flex items-center justify-center">
              <div className="text-center text-slate-500">
                <svg
                  className="w-16 h-16 mx-auto mb-2 text-slate-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p className="text-sm">Service Area Map</p>
              </div>
            </div>

            <div className="space-y-3 text-slate-700">
              <p className="leading-relaxed">
                <strong className="text-slate-900">We proudly serve:</strong> {SERVICE_AREA_INFO.description}
              </p>
              <p className="text-sm leading-relaxed">
                Our mobile detailing service brings professional car care directly to your home, office, or preferred location. We come equipped with everything needed to make your vehicle shine.
              </p>
            </div>

            {/* Outside Area Badge */}
            <div className="mt-4 p-4 bg-blue-50 border-2 border-blue-200 rounded-lg">
              <div className="flex items-start gap-3">
                <Info className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                <div>
                  <h3 className="font-bold text-blue-900 mb-1">Outside our area?</h3>
                  <p className="text-sm text-blue-800">
                    We can still help! Submit a quote and we'll confirm availability or discuss travel options.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Info Block */}
          <div className="bg-white border border-slate-200 rounded-xl p-6 md:p-8 shadow-sm">
            <h2 className="text-xl font-bold text-slate-900 mb-4">Get in Touch</h2>
            
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-700">Email</div>
                  <a
                    href="mailto:hello@cruiznclean.com"
                    className="text-slate-900 hover:text-primary transition-colors"
                  >
                    hello@cruiznclean.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-700">Phone</div>
                  <a
                    href="tel:+15551234567"
                    className="text-slate-900 hover:text-primary transition-colors"
                  >
                    (555) 123-4567
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-sm font-semibold text-slate-700">Hours</div>
                  <div className="text-slate-900">Mon-Sat: 9 AM - 6 PM</div>
                  <div className="text-slate-600 text-sm">Sunday: By Appointment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Book Now CTA */}
          <div className="bg-primary text-white rounded-xl p-6 md:p-8 shadow-sm text-center">
            <h3 className="text-xl font-bold mb-2">Ready to Book?</h3>
            <p className="text-white/90 mb-4">
              Know what you need? Skip the form and book your appointment directly.
            </p>
            <a
              href="/booking"
              className="btn-primary-cta inline-block bg-white text-slate-900 px-8 py-3 rounded-lg font-bold"
            >
              Book Now
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
