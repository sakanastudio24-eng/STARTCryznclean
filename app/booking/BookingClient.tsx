"use client";

import React, { useState } from "react";
import { services as addOnCatalog } from "../../data/services-data";
import { SETMORE_URL } from "../../lib/config";

const SERVICE_OPTIONS = [
  { label: "Quick Wash", value: "quick" },
  { label: "Standard Detail", value: "standard" },
  { label: "Premium Restoration", value: "premium" },
];

export default function BookingClient() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [service, setService] = useState<string>(SERVICE_OPTIONS[0].value);
  const [addOns, setAddOns] = useState<string[]>([]);
  const [notes, setNotes] = useState("");
  const [success, setSuccess] = useState(false);

  const toggleAddOn = (id: string) => {
    setAddOns((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]));
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSuccess(true);
    window.open(SETMORE_URL, "_blank", "noopener,noreferrer");
  };

  if (success) {
    return (
      <div className="bg-white rounded-xl shadow border border-black/10 p-6">
        <h2 className="text-2xl font-bold heading text-primary mb-2">Thanks! You're all set.</h2>
        <p className="text-sm text-charcoal/80">We opened Setmore in a new tab so you can pick a time. This page will keep your details for reference.</p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="grid gap-6 md:grid-cols-2">
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Name</label>
        <input className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" value={name} onChange={(e) => setName(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
        <input type="tel" className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" value={phone} onChange={(e) => setPhone(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Email</label>
        <input type="email" className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </div>
      <div className="grid grid-cols-2 gap-4 md:col-span-2">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Make</label>
          <input className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" value={make} onChange={(e) => setMake(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Model</label>
          <input className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" value={model} onChange={(e) => setModel(e.target.value)} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Year</label>
        <input className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" value={year} onChange={(e) => setYear(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Service</label>
        <select className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" value={service} onChange={(e) => setService(e.target.value)}>
          {SERVICE_OPTIONS.map((opt) => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-charcoal mb-2">Add-ons</label>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-2">
          {addOnCatalog.map((s) => (
            <label key={s.id} className="flex items-center gap-2 border rounded px-3 py-2">
              <input type="checkbox" checked={addOns.includes(s.id)} onChange={() => toggleAddOn(s.id)} />
              <span className="text-sm">{s.title}</span>
            </label>
          ))}
        </div>
      </div>
      <div className="md:col-span-2">
        <label className="block text-sm font-medium text-charcoal mb-1">Notes</label>
        <textarea rows={4} className="w-full border rounded px-3 py-2 focus-visible:ring-2 focus-visible:ring-orange-500/40" value={notes} onChange={(e) => setNotes(e.target.value)} />
      </div>
      <div className="md:col-span-2">
        <button type="submit" className="btn btn-primary">Submit and pick a time</button>
      </div>
    </form>
  );
}
