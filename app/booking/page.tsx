"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { useCart } from "../../components/cart/CartContext";
import { getPackageById, calculatePrice, SIZE_LABELS } from "../../data/pricing";
import { getServiceAreaMessage } from "../../data/serviceArea";
import { MAX_CARS_PER_BOOKING } from "../../lib/config";

// Mock available time slots
const AVAILABLE_TIMES = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
];

export default function BookingPage() {
  const router = useRouter();
  const { cart, removeItem, updateQty, setVehicleForItem, subtotal, totalVehicles, clearCart } = useCart();
  
  // Contact info
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  
  // Location
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [address, setAddress] = useState("");
  
  // Date & Time
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  
  // Notes
  const [notes, setNotes] = useState("");
  
  // UI state
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleVehicleChange = (itemId: string, field: string, value: string) => {
    const item = cart.items.find(i => i.id === itemId);
    if (!item) return;

    setVehicleForItem(itemId, {
      ...item.vehicle,
      [field]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    // Validation
    if (!fullName.trim() || !email.trim() || !phone.trim()) {
      setError("Please fill in all required contact fields.");
      return;
    }

    if (!city.trim() || !zip.trim()) {
      setError("Please provide your city and ZIP code.");
      return;
    }

    if (cart.items.length === 0) {
      setError("Your cart is empty. Please add packages from the services page.");
      return;
    }

    setSubmitting(true);

    // Build payload
    const payload = {
      contact: {
        fullName,
        email,
        phone,
      },
      location: {
        city,
        zip,
        address,
      },
      items: cart.items.map(item => {
        const pkg = getPackageById(item.packageId);
        return {
          packageId: item.packageId,
          packageName: pkg?.name || "Unknown",
          size: item.size,
          sizeLabel: SIZE_LABELS[item.size],
          qty: item.qty,
          basePrice: pkg?.base || 0,
          totalPrice: pkg ? calculatePrice(pkg.base, item.size) * item.qty : 0,
          vehicle: item.vehicle,
        };
      }),
      appointment: {
        preferredDate: selectedDate,
        preferredTime: selectedTime,
      },
      notes,
      totalAmount: subtotal(),
      totalVehicles: totalVehicles(),
    };

    try {
      const res = await fetch("/api/booking-request", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      
      if (!data.ok) {
        throw new Error(data.error || "Failed to submit booking request");
      }

      // Clear cart and redirect
      clearCart();
      router.push("/confirmation?booked=true");
    } catch (err: any) {
      setError(err.message || "Something went wrong. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  // Empty cart state
  if (cart.items.length === 0) {
    return (
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-12">
            <h1 className="text-3xl font-bold text-slate-900 mb-4">
              Your Cart is Empty
            </h1>
            <p className="text-slate-600 mb-8 text-lg">
              Browse our detailing packages and add them to your cart to continue booking.
            </p>
            <a
              href="/services"
              className="btn-primary-cta inline-block px-8 py-4 rounded-lg font-semibold text-lg"
            >
              Browse Packages
            </a>
          </div>
        </div>
      </div>
    );
  }

  const serviceAreaStatus = getServiceAreaMessage(zip);
  const tooManyVehicles = totalVehicles() > MAX_CARS_PER_BOOKING;

  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-primary mb-2">Complete Your Booking</h1>
        <p className="text-slate-600 text-lg">Review your selections and provide details to finalize your appointment.</p>
      </div>

      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Section 1: Review Items */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Review Your Order</h2>
              
              <div className="space-y-4">
                {cart.items.map((item, index) => {
                  const pkg = getPackageById(item.packageId);
                  if (!pkg) return null;

                  const unitPrice = calculatePrice(pkg.base, item.size);
                  const itemTotal = unitPrice * item.qty;

                  return (
                    <div
                      key={item.id}
                      className="border border-slate-200 rounded-lg p-4 bg-slate-50"
                    >
                      <div className="flex justify-between items-start mb-3">
                        <div className="flex-1">
                          <h3 className="font-bold text-slate-900 text-lg">
                            {pkg.name}
                          </h3>
                          <p className="text-sm text-slate-600">
                            {SIZE_LABELS[item.size]}
                          </p>
                        </div>
                        <button
                          type="button"
                          onClick={() => removeItem(item.id)}
                          className="text-red-500 hover:text-red-700 text-sm font-medium ml-4"
                        >
                          Remove
                        </button>
                      </div>

                      {/* Quantity Controls */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm text-slate-600">Quantity:</span>
                          <div className="flex items-center gap-2">
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, item.qty - 1)}
                              className="w-8 h-8 rounded-lg border border-slate-300 hover:bg-slate-100 flex items-center justify-center font-semibold"
                            >
                              −
                            </button>
                            <span className="w-10 text-center font-bold text-slate-900">
                              {item.qty}
                            </span>
                            <button
                              type="button"
                              onClick={() => updateQty(item.id, item.qty + 1)}
                              disabled={item.qty >= 3}
                              className="w-8 h-8 rounded-lg border border-slate-300 hover:bg-slate-100 flex items-center justify-center font-semibold disabled:opacity-40 disabled:cursor-not-allowed"
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="font-bold text-slate-900 text-lg">
                            ${itemTotal}
                          </div>
                          <div className="text-xs text-slate-500">
                            ${unitPrice} × {item.qty}
                          </div>
                        </div>
                      </div>

                      {/* Vehicle Details for this item */}
                      <div className="border-t border-slate-200 pt-3 mt-3">
                        <p className="text-xs font-semibold text-slate-700 mb-2 uppercase tracking-wide">
                          Vehicle {index + 1} Details (Optional)
                        </p>
                        <div className="grid grid-cols-2 gap-2">
                          <input
                            type="text"
                            placeholder="Make"
                            value={item.vehicle?.make || ""}
                            onChange={e => handleVehicleChange(item.id, "make", e.target.value)}
                            className="border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
                          />
                          <input
                            type="text"
                            placeholder="Model"
                            value={item.vehicle?.model || ""}
                            onChange={e => handleVehicleChange(item.id, "model", e.target.value)}
                            className="border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
                          />
                          <input
                            type="text"
                            placeholder="Year"
                            value={item.vehicle?.year || ""}
                            onChange={e => handleVehicleChange(item.id, "year", e.target.value)}
                            className="border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
                          />
                          <input
                            type="text"
                            placeholder="Color"
                            value={item.vehicle?.color || ""}
                            onChange={e => handleVehicleChange(item.id, "color", e.target.value)}
                            className="border border-slate-300 rounded px-3 py-2 text-sm focus:ring-2 focus:ring-primary/40 focus:border-primary"
                          />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Too Many Vehicles Warning */}
              {tooManyVehicles && (
                <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-lg">
                  <p className="text-sm text-amber-900">
                    <strong>Note:</strong> We can do up to {MAX_CARS_PER_BOOKING} vehicles per day. Please add remaining vehicles on another day.
                  </p>
                </div>
              )}
            </section>

            {/* Section 2: Customer & Location Details */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Contact Information</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={e => setFullName(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Email <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={e => setEmail(e.target.value)}
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
                    required
                    value={phone}
                    onChange={e => setPhone(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="(555) 123-4567"
                  />
                </div>
              </div>
            </section>

            {/* Service Location */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Service Location</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    City <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="Los Angeles"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    ZIP Code <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={zip}
                    onChange={e => setZip(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="90001"
                  />
                </div>
                <div className="md:col-span-2">
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Address (Optional)
                  </label>
                  <input
                    type="text"
                    value={address}
                    onChange={e => setAddress(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                    placeholder="123 Main St, Apt 4B"
                  />
                </div>
              </div>

              {/* Service Area Status Badge */}
              {zip && serviceAreaStatus.message && (
                <div className={`mt-4 p-4 rounded-lg border ${
                  serviceAreaStatus.isPrimary
                    ? "bg-green-50 border-green-200"
                    : serviceAreaStatus.isServed
                    ? "bg-amber-50 border-amber-200"
                    : "bg-blue-50 border-blue-200"
                }`}>
                  <p className={`text-sm ${
                    serviceAreaStatus.isPrimary
                      ? "text-green-900"
                      : serviceAreaStatus.isServed
                      ? "text-amber-900"
                      : "text-blue-900"
                  }`}>
                    <strong>Service Area:</strong> {serviceAreaStatus.message}
                  </p>
                  {serviceAreaStatus.requiresFee && (
                    <p className="text-xs text-amber-800 mt-1">
                      A small travel fee may be added to your total.
                    </p>
                  )}
                </div>
              )}
            </section>

            {/* Section 3: Date & Time */}
            <section className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Select Date & Time</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={e => setSelectedDate(e.target.value)}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-900 mb-1">
                    Preferred Time
                  </label>
                  <select
                    value={selectedTime}
                    onChange={e => setSelectedTime(e.target.value)}
                    className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                  >
                    <option value="">Select a time</option>
                    {AVAILABLE_TIMES.map(time => (
                      <option key={time} value={time}>
                        {time}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-900 mb-1">
                  Special Instructions
                </label>
                <textarea
                  rows={4}
                  value={notes}
                  onChange={e => setNotes(e.target.value)}
                  placeholder="Any special requests, parking instructions, or notes for our team..."
                  className="w-full border border-slate-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-primary/40 focus:border-primary"
                />
              </div>
            </section>

            {/* Error Display */}
            {error && (
              <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-sm text-red-900 font-medium">{error}</p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={submitting}
              className="btn-primary-cta w-full py-4 rounded-lg font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {submitting ? "Submitting..." : "Request Booking"}
            </button>

            <p className="text-xs text-slate-500 text-center">
              After submitting, you'll receive a confirmation email and can schedule your appointment via Setmore.
            </p>
          </div>

          {/* Sidebar: Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white border border-slate-200 rounded-xl p-6 shadow-sm sticky top-20">
              <h2 className="text-xl font-bold text-slate-900 mb-4">Order Summary</h2>
              
              <div className="space-y-3 mb-4 pb-4 border-b border-slate-200">
                {cart.items.map(item => {
                  const pkg = getPackageById(item.packageId);
                  if (!pkg) return null;
                  const unitPrice = calculatePrice(pkg.base, item.size);
                  const total = unitPrice * item.qty;

                  return (
                    <div key={item.id} className="flex justify-between text-sm">
                      <div className="flex-1">
                        <div className="font-medium text-slate-900">
                          {pkg.name}
                        </div>
                        <div className="text-slate-500">
                          {SIZE_LABELS[item.size]} × {item.qty}
                        </div>
                      </div>
                      <div className="font-semibold text-slate-900">
                        ${total}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="space-y-2 mb-4 pb-4 border-b border-slate-200">
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">Total Vehicles:</span>
                  <span className="font-semibold text-slate-900">{totalVehicles()}</span>
                </div>
                {selectedDate && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Date:</span>
                    <span className="font-medium text-slate-900">
                      {new Date(selectedDate).toLocaleDateString()}
                    </span>
                  </div>
                )}
                {selectedTime && (
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-600">Time:</span>
                    <span className="font-medium text-slate-900">{selectedTime}</span>
                  </div>
                )}
              </div>

              <div className="flex justify-between items-center">
                <span className="text-lg font-bold text-slate-900">Total</span>
                <span className="text-3xl font-bold text-primary">
                  ${subtotal()}
                </span>
              </div>

              <div className="mt-4 pt-4 border-t border-slate-200">
                <p className="text-xs text-slate-500">
                  Final pricing may vary based on vehicle condition and selected add-ons.
                </p>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
