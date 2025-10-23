"use client";
import { heroImages } from "../data/images-manifest";

const heroImage = heroImages[0];

export default function HeroSection() {
  return (
    <section className="relative w-full text-white overflow-hidden">
      <div className="relative w-full">
        <img
          src={(heroImage && heroImage.file) ? `/images/${heroImage.file}` : "/images/hero/hero1.jpg"}
          alt={heroImage?.alt || "Hero image"}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
        <div className="relative z-10 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 flex flex-col items-center text-center">
          <h1 className="font-bold text-5xl md:text-7xl tracking-tight mb-4">Professional Mobile Detailing</h1>
          <p className="max-w-2xl text-base md:text-lg text-white/90 mb-2">
            Premium interior and exterior care that comes to you. Shine, protect, and drive happy.
          </p>
          <p className="max-w-xl text-sm md:text-base text-white/80 mb-8">
            Proudly serving Yorba Linda, Anaheim Hills, Placentia, Brea, and nearby communities.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <a href="/booking" className="btn-primary-cta inline-flex items-center justify-center px-6 py-3 rounded-full font-semibold shadow-lg">
              Book Now
            </a>
            <a href="/services" className="btn-small inline-flex items-center justify-center px-6 py-3 rounded-full border-2 border-white/80 text-white font-semibold hover:bg-white/10 transition-colors">
              Detailing Packages
            </a>
          </div>
        </div>
        <span className="block w-full pt-[40%] md:pt-[32%]" />
      </div>
    </section>
  );
}
