"use client";
import React from "react";
import HeroSection from "../components/HeroSection";
import GalleryGrid from "../components/GalleryGrid";
import { services } from "../data/services-data";
import ServiceCard from "../components/ui/ServiceCard";
import { useCart } from "../components/cart/CartProvider";
import Section from "../components/Section";
import Heading from "../components/Heading";
import Container from "../components/Container";
import FadeIn from "../components/ui/FadeIn";
import { ButtonLink } from "../components/ui/Button";

function ServicesPreview() {
  const { items, add } = useCart();
  const previewServices = services.slice(0, 3);
  return (
    <Section title="Popular Services" titleLevel={2}>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {previewServices.map((service) => (
          <FadeIn key={service.id}>
            <ServiceCard
              id={service.id}
              title={service.title}
              price={service.basePrice}
              basePrice={service.basePrice}
              category={service.category}
              selected={!!items.find(i => i.id === service.id)}
              onClick={() => add({ id: service.id, title: service.title, basePrice: service.basePrice, category: service.category, qty: 1 })}
            />
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}

function GalleryPreview() {
  return (
    <Section title="Gallery" titleLevel={2}>
      <GalleryGrid preview />
    </Section>
  );
}

function CTABand() {
  return (
    <section className="bg-zinc-100 dark:bg-zinc-900">
      <Container>
        <div className="py-12 text-center">
          <Heading level={3} className="mb-4">Ready for a spotless ride?</Heading>
          <ButtonLink href="/request" variant="primary" size="lg">Request a Quote</ButtonLink>
        </div>
      </Container>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <GalleryPreview />
      <CTABand />
    </div>
  );
}
