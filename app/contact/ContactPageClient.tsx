"use client";

import { useState } from "react";
import { MapPin, Info, CheckCircle } from "lucide-react";

export default function ContactPageClient() {
  const [formData, setFormData] = useState({
    name: "",
    email: "john.doe@example.com",
    phone: "",
    zipCode: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  const isZipInServiceArea = (zip: string) => {
    const zipNum = parseInt(zip);
    return zipNum >= 92870 && zipNum <= 92899;
  };

  const getZipStatus = (zip: string) => {
    if (!zip) return { valid: false, message: "" };
    if (zip.length !== 5 || !/^\d{5}$/.test(zip)) {
      return { valid: false, message: "Please enter a valid 5-digit ZIP code" };
    }
    if (isZipInServiceArea(zip)) {
      return { valid: true, message: "We service this area!" };
    }
    return { valid: false, message: "Outside our service area — we'll contact you for availability." };
  };

  const zipStatus = getZipStatus(formData.zipCode);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/request-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "john.doe@example.com", phone: "", zipCode: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="pt-16">
      {/* Service Area Block */}
      <section className="py-16 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Service Areas</h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
              We proudly serve the following areas within a 25-mile radius of Yorba Linda
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "Yorba Linda, CA",
              "Anaheim Hills, CA", 
              "Placentia, CA",
              "Brea, CA",
              "Fullerton, CA",
              "Orange, CA",
              "Tustin, CA",
              "Villa Park, CA"
            ].map((area, index) => (
              <div key={index} className="flex items-center gap-3 p-4 bg-white rounded-lg border border-slate-200">
                <div className="w-3 h-3 bg-[#1F5A93] rounded-full"></div>
                <span className="text-slate-700 font-medium">{area}</span>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 bg-[#1F5A93] text-white px-4 py-2 rounded-full text-sm font-semibold">
              <MapPin className="w-4 h-4" aria-hidden="true" />
              25-mile service radius
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-[#6B0F1A] mb-4">Request a Quote</h1>
            <p className="text-xl text-slate-600">
              Get a personalized quote for your vehicle detailing needs
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F5A93] focus:border-[#1F5A93] transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && (e.currentTarget.nextElementSibling as HTMLElement)?.focus()}
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F5A93] focus:border-[#1F5A93] transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && (e.currentTarget.nextElementSibling as HTMLElement)?.focus()}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-slate-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F5A93] focus:border-[#1F5A93] transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && (e.currentTarget.nextElementSibling as HTMLElement)?.focus()}
                />
              </div>

              <div>
                <label htmlFor="zipCode" className="block text-sm font-medium text-slate-700 mb-2">
                  ZIP Code *
                  <div className="inline-flex items-center gap-1 ml-2">
                    <Info className="w-4 h-4 text-slate-400" aria-hidden="true" />
                    <span className="text-xs text-slate-500">20–25 mile radius from Yorba Linda, CA</span>
                  </div>
                </label>
                <input
                  type="text"
                  id="zipCode"
                  name="zipCode"
                  value={formData.zipCode}
                  onChange={handleChange}
                  required
                  maxLength={5}
                  className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F5A93] focus:border-[#1F5A93] transition-colors"
                  onKeyDown={(e) => e.key === 'Enter' && (e.currentTarget.nextElementSibling as HTMLElement)?.focus()}
                />
                {formData.zipCode && (
                  <div className={`mt-2 flex items-center gap-2 text-sm ${
                    zipStatus.valid ? "text-green-600" : "text-amber-600"
                  }`}>
                    <CheckCircle className="w-4 h-4" aria-hidden="true" />
                    {zipStatus.message}
                  </div>
                )}
              </div>
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-[#1F5A93] focus:border-[#1F5A93] transition-colors"
                placeholder="Tell us about your vehicle and detailing needs..."
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.form?.requestSubmit()}
              />
            </div>

            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-corporate-primary px-8 py-4 font-bold text-lg rounded-xl shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                onKeyDown={(e) => e.key === 'Enter' && e.currentTarget.click()}
              >
                {isSubmitting ? "Sending..." : "Request Quote"}
              </button>
            </div>

            {submitStatus === "success" && (
              <div className="text-center p-4 bg-green-50 border border-green-200 rounded-lg">
                <p className="text-green-800 font-medium">Thank you! We'll contact you within 24 hours.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="text-center p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-800 font-medium">Sorry, there was an error. Please try again.</p>
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Ready to Book CTA Band */}
      <section className="py-20 corporate-cta-band">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to book?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Skip the form and book your appointment directly with our online booking system.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="/booking" 
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#6B0F1A] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2"
              onKeyDown={(e) => e.key === 'Enter' && (window.location.href = '/booking')}
            >
              Book Now
            </a>
            <a 
              href="/services" 
              className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-xl border-2 border-white hover:bg-white hover:text-[#6B0F1A] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2"
              onKeyDown={(e) => e.key === 'Enter' && (window.location.href = '/services')}
            >
              View Services
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}