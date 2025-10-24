import React from "react";
import HeroSection from "../components/HeroSection";
import BookingPreview from "../components/ui/BookingPreview";
import CorporateServiceCard from "../components/ui/CorporateServiceCard";

export const metadata = {
  title: "Auto Detailing in Yorba Linda, Anaheim Hills & Placentia | Cruiz n Clean",
  description: "Mobile car detailing with clear size-based pricing. Serving Yorba Linda, Anaheim Hills, Placentia, and nearby areas. Book online.",
  openGraph: {
    title: "Cruiz n Clean | Mobile Auto Detailing (Yorba Linda)",
    description: "Premium exterior & interior detailing. Transparent pricing. We come to you.",
    type: "website",
    locale: "en_US",
  },
};

function ServicesSection() {
  const services = [
    {
      title: "Express Wash",
      description: "Quick exterior clean with interior vacuum for regular maintenance",
      price: "From $60",
      features: [
        "Hand wash & dry",
        "Wheel cleaning",
        "Tire shine",
        "Interior vacuum",
        "Window cleaning"
      ],
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/services"
    },
    {
      title: "Standard Detail",
      description: "Complete interior and exterior care for thorough cleaning",
      price: "From $140",
      features: [
        "Full wash & wax",
        "Deep interior clean",
        "Window cleaning",
        "Door jambs",
        "Tire dressing"
      ],
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/services"
    },
    {
      title: "Premium Detail",
      description: "Ultimate protection and restoration for showroom finish",
      price: "From $220",
      features: [
        "Clay bar treatment",
        "Paint sealant",
        "Leather conditioning",
        "Engine bay cleaning",
        "Ceramic prep"
      ],
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/services"
    }
  ];

  return (
    <section className="py-20 bg-white creative-bg-pattern relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-32 h-32 bg-[#6B0F1A]/5 rounded-full blur-2xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-10 w-40 h-40 bg-[#1F5A93]/5 rounded-full blur-2xl animate-pulse-slow" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-4xl font-bold text-slate-900 mb-4 text-shadow-creative">Our Services</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional mobile detailing packages designed for every need and budget
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="animate-fade-in-scale" style={{animationDelay: `${index * 0.2}s`}}>
              <CorporateServiceCard
                title={service.title}
                description={service.description}
                price={service.price}
                features={service.features}
                image={service.image}
                href={service.href}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 corporate-cta-band relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="animate-slide-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-creative">Ready to Transform Your Vehicle?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Book your professional mobile detailing service today. We'll bring the shine to your driveway.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
          <a 
            href="/booking" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#6B0F1A] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 hover:scale-105"
          >
            Book Now
          </a>
          <a 
            href="/services" 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-xl border-2 border-white hover:bg-white hover:text-[#6B0F1A] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 hover:scale-105"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      <HeroSection />
      <BookingPreview />
      <ServicesSection />
      <CTASection />
    </div>
  );
}