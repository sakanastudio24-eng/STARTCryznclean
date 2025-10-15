
"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import GalleryGrid from "../components/GalleryGrid";
import { services } from "../data/services-data";
import ServiceCard from "../components/ui/ServiceCard";
import Section from "../components/layout/Section";
import Heading from "../components/ui/Heading";
import Button from "../components/ui/Button";
import { useCart } from "../components/ui/CartProvider";

function ServicesPreview() {
  const { items, add } = useCart();
  const previewServices = services.slice(0, 6);
  return (
    <Section>
      <Heading level={2} className="mb-8 text-center">Popular Services</Heading>
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
    <Section>
      <GalleryGrid preview />
    </Section>
  );
}

function CTABand() {
  return (
    <Section noContainer className="w-full bg-primary text-offWhite fade-in">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-2xl font-semibold tracking-tight mb-4">Ready for a spotless ride?</h3>
        <Button asChild variant="secondary" className="text-charcoal text-lg font-semibold">
          <a href="/request">Request a Quote</a>
        </Button>
      </div>
    </Section>
  );
}

function HomePage() {
  // Fade-in animation on mount
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div className={`${mounted ? "fade-in" : "opacity-0"}`}>
      <HeroSection />
      <ServicesPreview />
      <GalleryPreview />
      <CTABand />
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
