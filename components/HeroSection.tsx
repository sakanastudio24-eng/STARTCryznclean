import React from "react";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="pt-16 pb-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-[#6B0F1A] mb-6">
          Professional Mobile Detailing
        </h1>
        <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
          Premium interior and exterior care that comes to you. Shine, protect, and drive happy.
        </p>
        <p className="text-lg text-slate-500 mb-12 max-w-2xl mx-auto">
          Proudly serving Yorba Linda, Anaheim Hills, Placentia, Brea, and nearby communities.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/booking" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#6B0F1A] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-[#6B0F1A]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
          >
            Book Now
          </Link>
          <Link 
            href="/services" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#6B0F1A] font-semibold text-lg rounded-xl border-2 border-[#6B0F1A] hover:bg-[#6B0F1A] hover:text-white transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
          >
            View Services
          </Link>
        </div>
      </div>
    </section>
  );
}