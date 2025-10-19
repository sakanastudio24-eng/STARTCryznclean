"use client";
import { heroImages } from "../data/images-manifest";
import { SETMORE_URL } from "../lib/config";

const heroImage = heroImages[0];

export default function HeroSection() {
  return (
    <section className="relative w-full text-offWhite overflow-hidden">
      <div className="relative w-full">
        <img
          src={(heroImage && heroImage.file) ? `/images/${heroImage.file}` : "/images/hero/hero1.jpg"}
          alt={heroImage?.alt || "Hero image"}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {/* Solid overlay, remove gradient */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center text-center">
          <h1 className="heading font-bold text-5xl md:text-7xl tracking-tight mb-4">Professional Mobile Detailing</h1>
          <p className="max-w-2xl text-base md:text-lg text-offWhite/90 mb-8">
            Premium interior and exterior care that comes to you. Shine, protect, and drive happy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-reflect text-base md:text-lg px-6 py-3">
              Book Now
            </a>
            <a href="/services" className="btn btn-secondary text-base md:text-lg px-6 py-3">
              Detailing Packages
            </a>
          </div>
        </div>
        <span className="block w-full pt-[40%] md:pt-[32%]" />
      </div>
    </section>
  );
}
