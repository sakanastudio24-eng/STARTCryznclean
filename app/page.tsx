
"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import GalleryGrid from "../components/GalleryGrid";
import { services } from "../data/services-data";
import ServiceCard from "../components/ui/ServiceCard";
import { useCart } from "../components/cart/CartProvider";

function ServicesPreview() {
  const { items, add } = useCart();
  const previewServices = services.slice(0, 6);
  return (
    <section className="w-full fade-in">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold heading text-primary mb-8 text-center">Popular Services</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {previewServices.map((service) => (
          <div key={service.id} className="relative">
            <ServiceCard
              id={service.id}
              title={service.title}
              price={service.basePrice}
              basePrice={service.basePrice}
              category={service.category}
              selected={!!items.find(i => i.id === service.id)}
              onClick={() => add({ id: service.id, title: service.title, basePrice: service.basePrice, category: service.category, qty: 1 })}
            />
          </div>
        ))}
        </div>
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
    <section className="w-full bg-primary text-offWhite fade-in">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 text-center">
        <h3 className="text-2xl font-bold heading mb-4">Ready for a spotless ride?</h3>
        <a href="/request" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-accent text-charcoal font-bold text-lg shadow hover:bg-accent/90 transition">Request a Quote</a>
      </div>
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
      <div className="flex flex-col gap-0">
        <ServicesPreview />
        <GalleryPreview />
        <CTABand />
      </div>
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
  return <HomePage />;
}
