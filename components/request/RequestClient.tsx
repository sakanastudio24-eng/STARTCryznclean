"use client";

import React, { useState, useRef, useEffect } from "react";
import { useCart } from "../cart/CartProvider";

const VEHICLE_SIZES = [
  { label: "Car", value: "car" },
  { label: "Small SUV", value: "smallSUV" },
  { label: "Large SUV/Truck", value: "largeSUVTruck" },
];

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export default function RequestClient() {
  const { items, size, setSize } = useCart();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [color, setColor] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZip] = useState("");
  const [parking, setParking] = useState(false);
  const [power, setPower] = useState(false);
  const [water, setWater] = useState(false);
  const [notes, setNotes] = useState("");
  const [photos, setPhotos] = useState<File[]>([]);
  const [photoPreviews, setPhotoPreviews] = useState<string[]>([]);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setPhotoPreviews(photos.map(file => URL.createObjectURL(file)));
    return () => photoPreviews.forEach(url => URL.revokeObjectURL(url));
    // eslint-disable-next-line
  }, [photos]);

  const removePhoto = (idx: number) => {
    setPhotos(photos.filter((_, i) => i !== idx));
  };

  const isValid =
    fullName.trim() &&
    isValidEmail(email) &&
    size &&
    items.length > 0;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isValid) {
      setError("Please fill all required fields and select at least one service.");
      return;
    }
    setSubmitting(true);
    const payload = {
      fullName,
      email,
      phone,
      vehicleSize: size,
      make,
      model,
      year,
      color,
      address,
      city,
      zip,
      parking,
      power,
      water,
      notes,
      services: items,
      photos: photos.map(f => ({ name: f.name, url: URL.createObjectURL(f) })),
    };
    try {
      const res = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const data = await res.json();
      if (!data.ok) throw new Error(data.error || "Failed to submit request");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white/90 dark:bg-zinc-900/60 border border-subtle rounded-xl shadow p-8 text-center mt-8">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-4">Request Sent!</h2>
        <p className="mb-6 text-muted-foreground">Thank you for your request. You can now book your appointment or return home.</p>
        <a
          href={process.env.NEXT_PUBLIC_SETMORE_BOOKING_URL || "https://setmore.com"}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-6 py-2 rounded-md font-medium hover:opacity-90 transition mb-2"
        >
          Book with Setmore
        </a>
        <br />
        <a href="/confirmation?appointmentStarted=1" className="inline-block bg-brand text-white px-6 py-2 rounded-md font-medium hover:bg-brand/90 transition">Go to Confirmation</a>
      </div>
    );
  }

  return (
    <form className="grid gap-6 md:grid-cols-2" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium mb-1">Full Name <span className="text-red-600">*</span></label>
        <input type="text" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="Your name" value={fullName} onChange={e => setFullName(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Email <span className="text-red-600">*</span></label>
        <input type="email" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Phone</label>
        <input type="tel" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="(555) 123-4567" value={phone} onChange={e => setPhone(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-2 md:col-span-2">
        <div>
          <label className="block text-sm font-medium mb-1">Make</label>
          <input type="text" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="Make" value={make} onChange={e => setMake(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Model</label>
          <input type="text" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="Model" value={model} onChange={e => setModel(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:col-span-2">
        <div>
          <label className="block text-sm font-medium mb-1">Year</label>
          <input type="text" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="Year" value={year} onChange={e => setYear(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">Color</label>
          <input type="text" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="Color" value={color} onChange={e => setColor(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2 md:col-span-2">
        <div>
          <label className="block text-sm font-medium mb-1">City</label>
          <input type="text" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1">ZIP</label>
          <input type="text" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="ZIP" value={zip} onChange={e => setZip(e.target.value)} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Address</label>
        <input type="text" className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="Address or area" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Vehicle Size <span className="text-red-600">*</span></label>
        <select className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" value={size} onChange={e => setSize(e.target.value as any)} required>
          {VEHICLE_SIZES.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Selected Services <span className="text-red-600">*</span></label>
        <ul className="list-disc pl-6">
          {items.length === 0 ? <li className="text-red-600">No services selected</li> : items.map(s => <li key={s.id}>{s.title}</li>)}
        </ul>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Parking, Power, Water Available?</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-1"><input type="checkbox" checked={parking} onChange={e => setParking(e.target.checked)} />Parking</label>
          <label className="flex items-center gap-1"><input type="checkbox" checked={power} onChange={e => setPower(e.target.checked)} />Power</label>
          <label className="flex items-center gap-1"><input type="checkbox" checked={water} onChange={e => setWater(e.target.checked)} />Water</label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Notes</label>
        <textarea className="w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60" placeholder="Anything else we should know?" rows={3} value={notes} onChange={e => setNotes(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium mb-1">Photos (up to 3, JPG/PNG/WebP, max 5MB each)</label>
        <input
          ref={fileInputRef}
          type="file"
          accept="image/jpeg,image/png,image/webp"
          multiple
          onChange={e => {
            if (!e.target.files) return;
            let files = Array.from(e.target.files).slice(0, 3);
            files = files.filter(f => ["image/jpeg", "image/png", "image/webp"].includes(f.type) && f.size <= 5 * 1024 * 1024);
            setPhotos(files);
          }}
          className="block w-full border-subtle border rounded-md px-3 py-2 focus-visible:ring-2 focus-visible:ring-brand/60"
          aria-label="Upload photos"
        />
        <div className="flex gap-2 mt-2 md:col-span-2">
          {photos.map((file, i) => (
            <div key={i} className="relative group">
              <img src={photoPreviews[i]} alt={file.name} className="w-20 h-20 object-cover rounded shadow" />
              <button type="button" onClick={() => removePhoto(i)} className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-80 group-hover:opacity-100">×</button>
            </div>
          ))}
        </div>
      </div>
      {error && <div className="text-red-600 font-medium">{error}</div>}
      <div className="md:col-span-2">
      <button type="submit" className="w-full bg-brand text-white rounded-md px-5 py-3 font-medium hover:bg-brand/90 focus-visible:ring-2 focus-visible:ring-brand/60 transition" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Request"}
      </button>
      </div>
    </form>
  );
}
