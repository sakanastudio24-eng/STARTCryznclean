import React from "react";
import Link from "next/link";
import StockImage from "./site/StockImage";

export default function HeroSection() {
  return (
    <section className="pt-16 pb-20 corporate-hero creative-bg-pattern relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1F5A93]/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6B0F1A]/10 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-[#1F5A93]/5 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="order-2 lg:order-1 animate-slide-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient text-shadow-creative">
              Professional Mobile Detailing
            </h1>
            <p className="text-xl md:text-2xl subtext mb-8 max-w-2xl leading-relaxed">
              Premium interior and exterior care that comes to you. Shine, protect, and drive happy.
            </p>
            <p className="text-lg subtext mb-12 max-w-xl">
              Proudly serving Yorba Linda, Anaheim Hills, Placentia, Brea, and nearby communities.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
              <Link 
                href="/booking" 
                className="btn-corporate-primary inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
              >
                Book Now
              </Link>
              <Link 
                href="/contact" 
                className="btn-corporate-secondary inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
              >
                Request Quote
              </Link>
            </div>
          </div>
          
          {/* Image */}
          <div className="order-1 lg:order-2 animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6B0F1A]/20 to-[#1F5A93]/20 rounded-3xl blur-2xl"></div>
              <StockImage
                src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional car detailing service"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl relative z-10 hover:scale-105 transition-transform duration-500"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}