import React from "react";
import Link from "next/link";

export default function WashosStyleHero() {
  return (
    <section className="bg-white py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-[#6B0F1A] mb-6">
          The car wash that comes to you
        </h1>
        <p className="text-xl text-slate-600 mb-8">
          Available in as little as 90 minutes
        </p>
        
        <div className="mb-12">
          <Link 
            href="/booking" 
            className="inline-flex items-center justify-center px-8 py-4 bg-[#6B0F1A] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-[#6B0F1A]/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
          >
            Book now
          </Link>
        </div>

        {/* Trust indicators */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-center">
          <div>
            <div className="text-3xl font-bold text-[#6B0F1A] mb-2">500+</div>
            <div className="text-slate-600">5-star reviews since 2021</div>
          </div>
          <div>
            <div className="text-3xl font-bold text-[#6B0F1A] mb-2">25-mile</div>
            <div className="text-slate-600">Service radius from Yorba Linda</div>
          </div>
        </div>
      </div>
    </section>
  );
}
