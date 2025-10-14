"use client";
import { heroImages } from "../data/images-manifest";

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
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-40 flex flex-col items-center text-center">
          <h1 className="heading font-bold text-5xl md:text-7xl tracking-tight mb-4 fade-up">Professional Mobile Detailing</h1>
          <p className="max-w-2xl text-base md:text-lg text-offWhite/90 mb-8 fade-up delay-1">
            Premium interior and exterior care that comes to you. Shine, protect, and drive happy.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 fade-up delay-2">
            <a href="/request" className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-offWhite font-semibold shadow-card hover:opacity-90 transition">
              Book Now
            </a>
            <a href="/services" className="inline-flex items-center justify-center px-6 py-3 rounded-xl border border-white/40 text-offWhite font-semibold hover:bg-white/10 transition">
              Detailing Packages
            </a>
          </div>
        </div>
        <span className="block w-full pt-[44%] md:pt-[34%]" />
      </div>
    </section>
  );
}
