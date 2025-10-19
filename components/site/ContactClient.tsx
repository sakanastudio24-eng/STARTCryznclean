"use client";

import { useState } from "react";
import { SETMORE_URL } from "@/lib/config";

type Contact = {
  name: string;
  email: string;
  phone: string;
  message?: string;
};

type Vehicle = {
  id: string;
  make: string;
  model: string;
  year?: string;
  size: "Sedan" | "SUV" | "Truck" | "Van";
  service: "Quick" | "Standard" | "Premium";
  addons: string[];
  notes?: string;
};

export default function ContactClient() {
  const [contact, setContact] = useState<Contact>({ name: "", email: "", phone: "", message: "" });
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [vehicles, setVehicles] = useState<Vehicle[]>([]);
  const [limitMsg, setLimitMsg] = useState<string>("");
  const [errors, setErrors] = useState<{ name?: string; email?: string; phone?: string }>({});

  function updateContact<K extends keyof Contact>(key: K, value: Contact[K]) {
    setContact(prev => ({ ...prev, [key]: value }));
  }

  function addVehicle() {
    setLimitMsg("");
    if (vehicles.length >= 3) {
      setLimitMsg("For scheduling, we limit to 3 vehicles per day. Please add additional vehicles on another day.");
      return;
    }
    const newVehicle: Vehicle = {
      id: Math.random().toString(36).slice(2),
      make: "",
      model: "",
      year: "",
      size: "Sedan",
      service: "Quick",
      addons: [],
      notes: "",
    };
    setVehicles(prev => [...prev, newVehicle]);
  }

  function removeVehicle(id: string) {
    setVehicles(prev => prev.filter(v => v.id !== id));
  }

  function updateVehicle<T extends keyof Vehicle>(id: string, key: T, value: Vehicle[T]) {
    setVehicles(prev => prev.map(v => (v.id === id ? { ...v, [key]: value } : v)));
  }

  function toggleAddon(id: string, addon: string) {
    setVehicles(prev => prev.map(v => {
      if (v.id !== id) return v;
      const has = v.addons.includes(addon);
      return { ...v, addons: has ? v.addons.filter(a => a !== addon) : [...v.addons, addon] };
    }));
  }

  function validate(): boolean {
    const next: typeof errors = {};
    if (!contact.name.trim()) next.name = "Name is required";
    if (!contact.email.trim()) next.email = "Email is required";
    if (!contact.phone.trim()) next.phone = "Phone is required";
    setErrors(next);
    return Object.keys(next).length === 0;
  }

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    // For now, just log. Future: POST /api/booking
    // Keep success state on page; do not navigate.
    alert("Request sent! We'll confirm timing shortly.");
  }

  return (
    <section className="container bg-page">
      <div className="max-w-3xl">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Contact Cruiz n Clean</h1>
        <p className="text-muted-foreground mb-8">Questions or ready to book? Send us a note or outline your vehicles below. We’ll confirm timing and any travel details.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <aside className="lg:col-span-1 card">
          <h2 className="text-lg font-semibold mb-3">How to reach us</h2>
          <ul className="space-y-2 text-sm">
            <li><span className="font-medium">Phone/SMS:</span> (###) ###-####</li>
            <li><span className="font-medium">Email:</span> hello@cruiznclean.example</li>
            <li><span className="font-medium">Hours:</span> Mon–Sat, 8am–6pm</li>
          </ul>
        </aside>

        <div className="lg:col-span-2">
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="ck-field">
                <label htmlFor="name" className="ck-label">Name</label>
                <input id="name" className="ck-input" value={contact.name} onChange={e => updateContact("name", e.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-err" : undefined} required />
                {errors.name && <p id="name-err" className="text-sm text-muted-foreground">{errors.name}</p>}
              </div>
              <div className="ck-field">
                <label htmlFor="email" className="ck-label">Email</label>
                <input id="email" type="email" className="ck-input" value={contact.email} onChange={e => updateContact("email", e.target.value)} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-err" : undefined} required />
                {errors.email && <p id="email-err" className="text-sm text-muted-foreground">{errors.email}</p>}
              </div>
              <div className="ck-field">
                <label htmlFor="phone" className="ck-label">Phone</label>
                <input id="phone" className="ck-input" value={contact.phone} onChange={e => updateContact("phone", e.target.value)} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-err" : undefined} required />
                {errors.phone && <p id="phone-err" className="text-sm text-muted-foreground">{errors.phone}</p>}
              </div>
              <div className="ck-field">
                <label htmlFor="date" className="ck-label">Preferred date (optional)</label>
                <input id="date" type="date" className="ck-input" value={selectedDate} onChange={e => setSelectedDate(e.target.value)} />
              </div>
            </div>

            <div className="ck-field">
              <label htmlFor="message" className="ck-label">Message (optional)</label>
              <textarea id="message" className="ck-textarea" value={contact.message} onChange={e => updateContact("message", e.target.value)} />
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h2 className="text-lg font-semibold">Vehicles (up to 3 per day)</h2>
                <button type="button" onClick={addVehicle} className="btn-secondary">Add another vehicle</button>
              </div>
              {limitMsg && (
                <div className="card">
                  <p className="text-sm text-muted-foreground">{limitMsg}</p>
                </div>
              )}
              <div className="space-y-4">
                {vehicles.map(v => (
                  <div key={v.id} className="card">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-medium">Vehicle</h3>
                      <button type="button" onClick={() => removeVehicle(v.id)} className="btn btn-secondary">Remove</button>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="ck-field">
                        <label htmlFor={`make-${v.id}`} className="ck-label">Make</label>
                        <input id={`make-${v.id}`} className="ck-input" value={v.make} onChange={e => updateVehicle(v.id, "make", e.target.value)} />
                      </div>
                      <div className="ck-field">
                        <label htmlFor={`model-${v.id}`} className="ck-label">Model</label>
                        <input id={`model-${v.id}`} className="ck-input" value={v.model} onChange={e => updateVehicle(v.id, "model", e.target.value)} />
                      </div>
                      <div className="ck-field">
                        <label htmlFor={`year-${v.id}`} className="ck-label">Year (optional)</label>
                        <input id={`year-${v.id}`} className="ck-input" value={v.year || ""} onChange={e => updateVehicle(v.id, "year", e.target.value)} />
                      </div>
                      <div className="ck-field">
                        <label htmlFor={`size-${v.id}`} className="ck-label">Size</label>
                        <select id={`size-${v.id}`} className="ck-input" value={v.size} onChange={e => updateVehicle(v.id, "size", e.target.value as Vehicle["size"])}>
                          <option>Sedan</option>
                          <option>SUV</option>
                          <option>Truck</option>
                          <option>Van</option>
                        </select>
                      </div>
                      <div className="ck-field">
                        <label htmlFor={`service-${v.id}`} className="ck-label">Service</label>
                        <select id={`service-${v.id}`} className="ck-input" value={v.service} onChange={e => updateVehicle(v.id, "service", e.target.value as Vehicle["service"])}>
                          <option>Quick</option>
                          <option>Standard</option>
                          <option>Premium</option>
                        </select>
                      </div>
                      <div className="ck-field">
                        <span className="ck-label">Add-ons</span>
                        <div className="grid grid-cols-2 gap-2 text-sm">
                          {[
                            "Pet hair removal",
                            "Odor treatment",
                            "Engine bay clean",
                            "Headlight restore",
                          ].map(a => (
                            <label key={a} className="inline-flex items-center gap-2">
                              <input
                                type="checkbox"
                                className="h-4 w-4"
                                checked={v.addons.includes(a)}
                                onChange={() => toggleAddon(v.id, a)}
                              />
                              <span>{a}</span>
                            </label>
                          ))}
                        </div>
                      </div>
                      <div className="ck-field sm:col-span-2">
                        <label htmlFor={`notes-${v.id}`} className="ck-label">Notes (optional)</label>
                        <textarea id={`notes-${v.id}`} className="ck-textarea" value={v.notes || ""} onChange={e => updateVehicle(v.id, "notes", e.target.value)} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex gap-3">
              <button type="submit" className="btn-primary">Send request</button>
            </div>

            <div className="text-sm text-muted-foreground space-y-2">
              <p>Selecting a date helps us plan, but we’ll confirm exact timing and any travel details.</p>
              <div className="flex flex-wrap gap-3">
                <a className="btn btn-secondary" href="/booking?pkg=quote">Request a Quote</a>
                <a className="btn btn-primary" href={SETMORE_URL} target="_blank" rel="noopener noreferrer">See available times</a>
              </div>
            </div>
          </form>
        </div>
      </div>

      {/* Service area */}
      <div className="mt-12 border-t border-subtle pt-8">
        <h2 className="text-xl font-semibold mb-3">Service Area</h2>
        <p className="text-muted-foreground mb-6">We primarily serve [your core city/ZIPs] and nearby neighborhoods.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <div className="card">
            <h3 className="font-medium mb-2">Cities / ZIPs</h3>
            <ul className="text-sm space-y-1">
              <li>City A 12345</li>
              <li>City B 23456</li>
              <li>City C 34567</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="font-medium mb-2">Radius</h3>
            <p className="text-sm">~X-mile radius from [City]</p>
          </div>
          <div className="card">
            <h3 className="font-medium mb-2">Map</h3>
            <div className="aspect-[4/3] w-full rounded-md border border-subtle" aria-label="Map placeholder" />
          </div>
          <div className="card lg:block hidden">
            <h3 className="font-medium mb-2">Travel fees</h3>
            <p className="text-sm">For out-of-area bookings, a travel fee may apply.</p>
          </div>
        </div>
        <p className="mt-4 text-sm text-muted-foreground">If you’re outside our usual route, submit a quick quote and we’ll confirm travel options or fees before booking.</p>
      </div>
    </section>
  );
}
