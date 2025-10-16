
"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import GalleryGrid from "../components/GalleryGrid";
import { services } from "../data/services-data";
import ServiceCard from "../components/ui/ServiceCard";
import { useCart } from "../components/ui/CartProvider";
import Section from "../components/layout/Section";
import Container from "../components/layout/Container";
import { Heading } from "../components/ui/Heading";

function ServicesPreview() {
  const { items, add } = useCart();
  const previewServices = services.slice(0, 6);
  return (
    <Section className="fade-in">
      <Container>
        <Heading as={2} className="text-center text-foreground mb-8">Popular Services</Heading>
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
      </Container>
    </Section>
  );
}

function GalleryPreview() {
  return <div className="fade-in"><GalleryGrid preview /></div>;
}

function CTABand() {
  return (
    <section className="w-full bg-brand text-white fade-in">
      <Container className="py-12 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready for a spotless ride?</h3>
        <a href="/request" className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-foreground font-bold text-lg shadow hover:bg-white/90 focus-ring transition">Request a Quote</a>
      </Container>
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
    <div className={`${mounted ? "fade-in" : "opacity-0"}`}>
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
  return (
    <HomePage />
  );
}
