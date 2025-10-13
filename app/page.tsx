
"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import GalleryGrid from "../components/GalleryGrid";
import Footer from "../components/Footer";
import { services } from "../data/services-data";
import ServiceCard from "../components/ui/ServiceCard";
import { CartProvider, useCart } from "../components/ui/CartProvider";

function ServicesPreview() {
  const { items, add } = useCart();
  const previewServices = services.slice(0, 6);
  return (
    <section className="w-full py-12 px-4 bg-white fade-in">
      <h2 className="text-3xl font-bold heading text-primary mb-8 text-center">Popular Services</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {previewServices.map((service) => (
          <div key={service.id} className="relative group">
            <ServiceCard
              id={service.id}
              title={service.title}
              price={service.basePrice}
              basePrice={service.basePrice}
              category={service.category}
              selected={!!items.find(i => i.id === service.id)}
              onClick={() => add({ id: service.id, title: service.title, basePrice: service.basePrice, category: service.category, qty: 1 })}
            />
            <button
              className="absolute top-4 right-4 bg-accent text-charcoal px-3 py-1 rounded shadow font-bold text-sm opacity-90 group-hover:opacity-100 transition"
              onClick={() => add({ id: service.id, title: service.title, basePrice: service.basePrice, category: service.category, qty: 1 })}
              aria-label={`Add ${service.title}`}
            >
              {items.find(i => i.id === service.id) ? "Added" : "Add"}
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

function GalleryPreview() {
  return (
    <div className="fade-in">
      <GalleryGrid preview />
    </div>
  );
}

function CTABand() {
  return (
    <section className="w-full bg-primary text-offWhite py-10 flex flex-col items-center justify-center fade-in">
      <h3 className="text-2xl font-bold heading mb-4">Ready for a spotless ride?</h3>
      <a href="/request" className="bg-accent text-charcoal px-8 py-3 rounded-full font-bold text-lg shadow hover:bg-accent/90 transition">Request a Quote</a>
    </section>
  );
}

function HomePage() {
  // Fade-in animation on mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className={`flex flex-col min-h-screen bg-offWhite text-charcoal ${mounted ? "fade-in" : "opacity-0"}`}>
      <HeroSection />
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-12">
          <div className="container mx-auto px-0">
            <div className="flex flex-col gap-12">
              <ServicesPreview />
              <GalleryPreview />
              <CTABand />
            </div>
          </div>
        </div>
      </div>
      <Footer />
      <style>{`
        .fade-in {
          opacity: 1;
          transition: opacity 0.5s cubic-bezier(.4,0,.2,1);
        }
        .opacity-0 {
          opacity: 0;
        }
      `}</style>
    </div>
  );
}

export default function Page() {
  return (
    <CartProvider>
      <HomePage />
    </CartProvider>
  );
}
