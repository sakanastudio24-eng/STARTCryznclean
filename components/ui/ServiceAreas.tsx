import React from "react";

export default function ServiceAreas() {
  const serviceAreas = [
    "Yorba Linda, CA",
    "Anaheim Hills, CA", 
    "Placentia, CA",
    "Brea, CA",
    "Fullerton, CA",
    "Orange, CA"
  ];

  return (
    <section className="py-16 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold text-slate-900 mb-8">
          Cleaning cars in a city near you
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {serviceAreas.map((area, index) => (
            <div key={index} className="text-slate-600 font-medium">
              {area}
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <h3 className="text-lg font-semibold text-slate-700 mb-4">Don't see your city?</h3>
          <button className="text-[#6B0F1A] font-semibold hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2 rounded">
            Check availability
          </button>
        </div>
      </div>
    </section>
  );
}
