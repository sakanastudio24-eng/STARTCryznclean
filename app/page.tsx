
"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import GalleryGrid from "../components/GalleryGrid";
import { services } from "../data/services-data";
import ServiceCard from "../components/ui/ServiceCard";
import { useCart } from "../components/ui/CartProvider";
import Section from "../components/ui/Section";
import Heading from "../components/ui/Heading";

function ServicesPreview() {
  const { items, add } = useCart();
  const previewServices = services.slice(0, 6);
  return (
    <Section title="Popular Services">
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
    </Section>
  );
}

function GalleryPreview() {
  return (
    <Section title="Gallery">
      <GalleryGrid preview />
    </Section>
  );
}

function CTABand() {
  return (
    <section className="w-full bg-primary text-offWhite">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
        <Heading level={3} className="mb-4">Ready for a spotless ride?</Heading>
        <a href="/request" className="inline-flex items-center justify-center rounded-full px-6 py-3 bg-accent text-charcoal font-semibold text-base shadow hover:bg-accent/90 transition-colors">Request a Quote</a>
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
    <div className={`flex flex-col ${mounted ? "opacity-100" : "opacity-0"}`}>
      <HeroSection />
      <ServicesPreview />
      <GalleryPreview />
      <CTABand />
    </div>
  );
}

export default function Page() { return <HomePage />; }
