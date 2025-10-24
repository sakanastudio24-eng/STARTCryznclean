import React from "react";
import Link from "next/link";
import { Car, Package, CheckCircle } from "lucide-react";

export default function BookingPreview() {
  const steps = [
    {
      number: "1",
      title: "Pick Size",
      description: "Select your vehicle size for accurate pricing",
      icon: Car
    },
    {
      number: "2", 
      title: "Pick Package",
      description: "Choose from Express, Standard, or Premium detailing",
      icon: Package
    },
    {
      number: "3",
      title: "Confirm",
      description: "Review and book your appointment",
      icon: CheckCircle
    }
  ];

  return (
    <section className="py-16 bg-slate-50 creative-bg-grid relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-20 h-20 bg-[#1F5A93]/5 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-16 h-16 bg-[#6B0F1A]/5 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 animate-slide-in">
          <h2 className="text-3xl font-bold text-slate-900 mb-4 text-shadow-creative">Simple Booking Process</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Get your vehicle professionally detailed in just three easy steps
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center creative-card animate-fade-in-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-[#6B0F1A] to-[#8B1A2A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg hover:scale-110 transition-transform duration-300">
                    <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-br from-[#1F5A93] to-[#2D6BA3] rounded-full flex items-center justify-center shadow-md">
                    <span className="text-white text-sm font-bold">{step.number}</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center animate-fade-in-scale" style={{animationDelay: '0.6s'}}>
          <Link 
            href="/services" 
            className="btn-corporate-primary inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
          >
            Start Booking
          </Link>
        </div>
      </div>
    </section>
  );
}
