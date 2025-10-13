
"use client";
import React, { useState, useEffect } from "react";
import HeroSection from "../components/HeroSection";
import GalleryGrid from "../components/GalleryGrid";
import Footer from "../components/Footer";
import ServicesGrid from "../components/ServicesGrid";

// Services preview is now handled by ServicesGrid

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
    <div className={`flex flex-col min-h-screen bg-base text-text ${mounted ? "fade-in" : "opacity-0"}`}>
      <HeroSection />
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-12">
          <div className="Section">
            <ServicesGrid preview />
          </div>
          <GalleryPreview />
          <CTABand />
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
  return <HomePage />;
}
