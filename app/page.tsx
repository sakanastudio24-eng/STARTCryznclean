
"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import GalleryGrid from "../components/GalleryGrid";
import MiniCart from "../components/cart/MiniCart";
import { PACKAGES } from "../data/pricing";
import PackageCard from "../components/cart/PackageCard";

function ServicesPreview() {
  return (
    <section className="w-full fade-in bg-offWhite">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-primary mb-8 text-center">Our Packages</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.id} package={pkg} />
          ))}
        </div>
        <div className="text-center mt-8">
          <a
            href="/services"
            className="btn-primary-cta inline-block px-6 py-3 rounded-lg font-semibold"
          >
            View All Services
          </a>
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
    <section className="w-full bg-primary text-white fade-in">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 text-center">
        <h3 className="text-2xl font-bold mb-4">Ready for a spotless ride?</h3>
        <a href="/contact" className="btn-primary-cta inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white text-slate-900 font-bold text-lg shadow-lg">Request a Quote</a>
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
    <div className={`${mounted ? "fade-in" : "opacity-0"}`}>
      <HeroSection />
      <div className="flex flex-col gap-0">
        <ServicesPreview />
        <GalleryPreview />
        <CTABand />
      </div>
      <MiniCart />
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
