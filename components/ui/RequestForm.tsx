import React, { useState, useRef } from "react";
import PhotoPicker from "./PhotoPicker";

const VEHICLE_SIZES = [
  { label: "Car", value: "car" },
  { label: "Small SUV", value: "smallSUV" },
  { label: "Large SUV/Truck", value: "largeSUVTruck" },
];

function isValidEmail(email: string) {
  return /.+@.+\..+/.test(email);
}

export default function RequestForm() {
  const [vehicleSize, setVehicleSize] = useState<"car" | "smallSUV" | "largeSUVTruck">("car");
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
  const [formStatus, setFormStatus] = useState("");
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const fileInputRef = useRef<HTMLInputElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const firstErrorRef = useRef<HTMLInputElement>(null);

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
    isValidEmail(email);

  // Handle submit
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setFieldErrors({});
    setFormStatus("");
    
    // Validate
    const errors: Record<string, string> = {};
    if (!fullName.trim()) errors.fullName = "Full name is required";
    if (!isValidEmail(email)) errors.email = "Valid email is required";
    
    if (Object.keys(errors).length > 0) {
      setFieldErrors(errors);
      setError("Please fix the errors below.");
      setFormStatus("Form has errors. Please check and try again.");
      
      // Focus first error field
      setTimeout(() => {
        firstErrorRef.current?.focus();
      }, 100);
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
      services: [],
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
      setFormStatus("Request submitted successfully!");
      
      // Focus success heading
      setTimeout(() => {
        successHeadingRef.current?.focus();
      }, 100);
    } catch (err: any) {
      setError(err.message || "Something went wrong");
      setFormStatus("Error submitting form. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  if (success) {
    return (
      <div className="bg-white rounded-lg shadow p-8 text-center mt-8">
        <h2 
          ref={successHeadingRef}
          tabIndex={-1}
          className="text-2xl font-bold text-primary mb-4"
        >
          Request Sent!
        </h2>
        <p className="text-slate-700 mb-6">Thank you for your request. You can now book your appointment or return home.</p>
        <a href="/booking" className="btn-primary-cta inline-block px-6 py-3 rounded font-bold mb-2">Book Appointment</a>
        <br />
        <a href="/confirmation" className="btn-small inline-block bg-slate-100 text-slate-900 px-6 py-3 rounded font-bold hover:bg-slate-200 transition-colors mt-2">View Confirmation</a>
      </div>
    );
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit}>
      {/* Form status live region */}
      <p id="form-status" role="status" aria-live="polite" className="sr-only">
        {formStatus}
      </p>
      
      <div>
        <label htmlFor="fullName" className="block text-sm font-medium text-slate-900 mb-1">
          Full Name <span className="text-red-500">*</span>
        </label>
        <input 
          type="text"
          id="fullName"
          ref={fieldErrors.fullName ? firstErrorRef : null}
          className={`w-full border rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary ${
            fieldErrors.fullName ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="Your name"
          value={fullName}
          onChange={e => setFullName(e.target.value)}
          aria-invalid={!!fieldErrors.fullName}
          aria-describedby={fieldErrors.fullName ? "fullName-error" : undefined}
          required
        />
        {fieldErrors.fullName && (
          <p id="fullName-error" className="text-red-600 text-sm mt-1">{fieldErrors.fullName}</p>
        )}
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-slate-900 mb-1">
          Email <span className="text-red-500">*</span>
        </label>
        <input 
          type="email"
          id="email"
          ref={!fieldErrors.fullName && fieldErrors.email ? firstErrorRef : null}
          className={`w-full border rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary ${
            fieldErrors.email ? 'border-red-500' : 'border-slate-300'
          }`}
          placeholder="you@email.com"
          value={email}
          onChange={e => setEmail(e.target.value)}
          aria-invalid={!!fieldErrors.email}
          aria-describedby={fieldErrors.email ? "email-error" : undefined}
          required
        />
        {fieldErrors.email && (
          <p id="email-error" className="text-red-600 text-sm mt-1">{fieldErrors.email}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">Phone</label>
        <input type="tel" className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" placeholder="(555) 123-4567" value={phone} onChange={e => setPhone(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">Preferred Contact</label>
        <input type="text" className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" placeholder="Call, Text, Email..." value={preferredContact} onChange={e => setPreferredContact(e.target.value)} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-1">Vehicle</label>
          <input type="text" className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" placeholder="Year, Make, Model" value={vehicle} onChange={e => setVehicle(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-1">Color</label>
          <input type="text" className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" placeholder="Color" value={color} onChange={e => setColor(e.target.value)} />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-2">
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-1">City</label>
          <input type="text" className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
        </div>
        <div>
          <label className="block text-sm font-medium text-slate-900 mb-1">ZIP</label>
          <input type="text" className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" placeholder="ZIP" value={zip} onChange={e => setZip(e.target.value)} />
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">Address</label>
        <input type="text" className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" placeholder="Address or area" value={address} onChange={e => setAddress(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">Vehicle Size <span className="text-red-500">*</span></label>
        <select className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" value={vehicleSize} onChange={e => setVehicleSize(e.target.value as any)} required>
          {VEHICLE_SIZES.map(opt => (
            <option key={opt.value} value={opt.value}>{opt.label}</option>
          ))}
        </select>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">Parking, Power, Water Available?</label>
        <div className="flex gap-4 text-slate-900">
          <label className="flex items-center gap-1"><input type="checkbox" checked={parking} onChange={e => setParking(e.target.checked)} />Parking</label>
          <label className="flex items-center gap-1"><input type="checkbox" checked={power} onChange={e => setPower(e.target.checked)} />Power</label>
          <label className="flex items-center gap-1"><input type="checkbox" checked={water} onChange={e => setWater(e.target.checked)} />Water</label>
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">Notes</label>
        <textarea className="w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary" placeholder="Anything else we should know?" rows={3} value={notes} onChange={e => setNotes(e.target.value)} />
      </div>
      <div>
        <label className="block text-sm font-medium text-slate-900 mb-1">Photos (up to 3, JPG/PNG/WebP, max 5MB each)</label>
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
          className="block w-full border border-slate-300 rounded p-2 focus:ring-2 focus:ring-primary/40 focus:border-primary"
          aria-label="Upload photos"
        />
        <div className="flex gap-2 mt-2">
          {photos.map((file, i) => (
            <div key={i} className="relative group">
              <img src={photoPreviews[i]} alt={file.name} className="w-20 h-20 object-cover rounded shadow" />
              <button type="button" onClick={() => removePhoto(i)} className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center text-xs opacity-80 group-hover:opacity-100">×</button>
            </div>
          ))}
        </div>
      </div>
      {error && <div className="text-red-500 font-medium">{error}</div>}
      <button type="submit" className="btn-primary-cta w-full py-3 rounded font-bold disabled:opacity-50" disabled={submitting}>
        {submitting ? "Submitting..." : "Submit Request"}
      </button>
    </form>
  );
}
