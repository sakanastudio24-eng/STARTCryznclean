"use client";
import React, { useState, useRef } from "react";
import PhotoPicker from "./PhotoPicker";
import { useCart } from "./CartProvider";

const VEHICLE_SIZES = [
  { label: "Car", value: "car" },
  { label: "Small SUV", value: "smallSUV" },
  { label: "Large SUV/Truck", value: "largeSUVTruck" },
];

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export default function RequestForm() {
  const { items, vehicleSize, setVehicleSize } = useCart();
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredContact, setPreferredContact] = useState("");
  const [vehicle, setVehicle] = useState("");
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

  // Generate previews
  React.useEffect(() => {
    setPhotoPreviews(photos.map(file => URL.createObjectURL(file)));
    return () => photoPreviews.forEach(url => URL.revokeObjectURL(url));
    // eslint-disable-next-line
  }, [photos]);

  // Remove photo
  const removePhoto = (idx: number) => {
    setPhotos(photos.filter((_, i) => i !== idx));
  };

  // Validation
  const isValid =
    fullName.trim() &&
    isValidEmail(email) &&
    items.length > 0;

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    if (!isValid) {
      setError("Please fill all required fields and select at least one service.");
      return;
    }
    setSubmitting(true);
    // Prepare payload
    const payload = {
      fullName,
      email,
      phone,
      preferredContact,
      vehicle,
      color,
      address,
      city,
      zip,
      vehicleSize,
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
      if (!res.ok) throw new Error("Failed to submit request");
      setSuccess(true);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center mt-8">
        <h2 className="text-2xl font-bold heading text-primary mb-4">Request Sent!</h2>
        <p className="mb-6">Thank you for your request. You can now book your appointment or return home.</p>
        <a href="https://www.setmore.com/" target="_blank" rel="noopener noreferrer" className="inline-block btn-primary mb-2">Book with Setmore</a>
        <br />
        <a href="/confirmation" className="inline-block bg-primary text-offWhite px-6 py-2 rounded font-bold hover:bg-primary/90 transition">Go to Confirmation</a>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Full Name <span className="text-red-600">*</span></label>
        <input type="text" className="w-full border rounded p-2" placeholder="Your name" value={fullName} onChange={e => setFullName(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Email <span className="text-red-600">*</span></label>
        <input type="email" className="w-full border rounded p-2" placeholder="you@email.com" value={email} onChange={e => setEmail(e.target.value)} required />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Phone</label>
        <input type="tel" className="w-full border rounded p-2" placeholder="(555) 123-4567" value={phone} onChange={e => setPhone(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Preferred Contact</label>
        <input type="text" className="w-full border rounded p-2" placeholder="Call, Text, Email..." value={preferredContact} onChange={e => setPreferredContact(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Vehicle</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Year, Make, Model" value={vehicle} onChange={e => setVehicle(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">Color</label>
          <input type="text" className="w-full border rounded p-2" placeholder="Color" value={color} onChange={e => setColor(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">City</label>
          <input type="text" className="w-full border rounded p-2" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-charcoal mb-1">ZIP</label>
          <input type="text" className="w-full border rounded p-2" placeholder="ZIP" value={zip} onChange={e => setZip(e.target.value)} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Address</label>
        <input type="text" className="w-full border rounded p-2" placeholder="Address or area" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Vehicle Size <span className="text-red-600">*</span></label>
        <select className="w-full border rounded p-2" value={vehicleSize} onChange={e => setVehicleSize(e.target.value as any)} required>
          {VEHICLE_SIZES.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Selected Services <span className="text-red-600">*</span></label>
        <ul className="list-disc pl-6 text-charcoal">
          {items.length === 0 ? <li className="text-red-600">No services selected</li> : items.map(s => <li key={s.id}>{s.title}</li>)}
        </ul>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Parking, Power, Water Available?</label>
        <div className="flex gap-4">
          <label className="flex items-center gap-1"><input type="checkbox" checked={parking} onChange={e => setParking(e.target.checked)} />Parking</label>
          <label className="flex items-center gap-1"><input type="checkbox" checked={power} onChange={e => setPower(e.target.checked)} />Power</label>
          <label className="flex items-center gap-1"><input type="checkbox" checked={water} onChange={e => setWater(e.target.checked)} />Water</label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Notes</label>
        <textarea className="w-full border rounded p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A3D]/40" placeholder="Anything else we should know?" rows={3} value={notes} onChange={e => setNotes(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-charcoal mb-1">Photos (up to 3, JPG/PNG/WebP, max 5MB each)</label>
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
          className="block w-full border rounded p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF6A3D]/40"
          aria-label="Upload photos"
        />
        <div className="flex gap-2 mt-2">
          {photos.map((file, i) => (
            <div key={i} className="relative group">
              <img src={photoPreviews[i]} alt={file.name} className="w-20 h-20 object-cover rounded shadow" />
              <button type="button" onClick={() => removePhoto(i)} className="absolute top-0 right-0 bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-80 group-hover:opacity-100">×</button>
            </div>
          ))}
        </div>
      </div>
      {error && <div className="text-red-600 font-medium">{error}</div>}
      <button type="submit" className="w-full btn-primary justify-center" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
