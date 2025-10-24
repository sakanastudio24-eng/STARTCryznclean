import React from "react";
import Link from "next/link";
import StockImage from "../../components/site/StockImage";
import { Car, Shield, Award, Users, MapPin, Clock } from "lucide-react";

export const metadata = {
  title: "About Us | Cruiz n Clean - Professional Mobile Auto Detailing",
  description: "Learn about Cruiz n Clean's commitment to excellence in mobile auto detailing. Professional service, quality products, and customer satisfaction in Yorba Linda and surrounding areas.",
  openGraph: {
    title: "About Cruiz n Clean | Professional Mobile Auto Detailing",
    description: "Your trusted mobile auto detailing service bringing professional car care directly to you.",
    type: "website",
  },
};

function HeroSection() {
  return (
    <section className="pt-16 pb-20 corporate-hero creative-bg-pattern relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1F5A93]/10 rounded-full blur-xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6B0F1A]/10 rounded-full blur-xl animate-pulse-slow" style={{animationDelay: '1s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-slide-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-gradient text-shadow-creative">
            About Cruiz n Clean
          </h1>
          <p className="text-xl md:text-2xl subtext mb-8 max-w-3xl mx-auto">
            Your trusted mobile auto detailing service bringing professional car care directly to you
          </p>
        </div>
      </div>
    </section>
  );
}

function StorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in-scale">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Our Story</h2>
            <div className="space-y-4 text-slate-600 leading-relaxed">
              <p>
                Founded with a passion for automotive excellence, Cruiz n Clean has been serving the Yorba Linda 
                and surrounding communities with professional mobile detailing services. We understand that your 
                vehicle is more than just transportation—it's an extension of your lifestyle and personality.
              </p>
              <p>
                Our journey began with a simple mission: to provide convenient, high-quality auto detailing 
                services that fit seamlessly into your busy schedule. We bring the expertise of a professional 
                detail shop directly to your home or office, saving you time while delivering exceptional results.
              </p>
              <p>
                Today, we're proud to be the trusted choice for hundreds of satisfied customers who value 
                quality, convenience, and attention to detail. Every vehicle we service receives the same 
                level of care and professionalism that we'd want for our own cars.
              </p>
            </div>
          </div>
          
          <div className="animate-fade-in-scale" style={{animationDelay: '0.2s'}}>
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#6B0F1A]/20 to-[#1F5A93]/20 rounded-3xl blur-2xl"></div>
              <StockImage
                src="https://images.unsplash.com/photo-1607863680198-23d4b2565df0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                alt="Professional mobile detailing service"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl relative z-10"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ValuesSection() {
  const values = [
    {
      icon: Car,
      title: "Quality First",
      description: "We use only premium products and professional-grade equipment to ensure your vehicle receives the best care possible."
    },
    {
      icon: Shield,
      title: "Trusted & Insured",
      description: "Fully licensed, bonded, and insured for your peace of mind. Your vehicle and property are protected."
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Every detail matters. We take pride in delivering results that exceed expectations, every time."
    },
    {
      icon: Users,
      title: "Customer Focused",
      description: "Your satisfaction is our priority. We listen to your needs and tailor our services accordingly."
    }
  ];

  return (
    <section className="py-20 bg-slate-50 creative-bg-grid relative overflow-hidden">
      {/* Creative Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-20 h-20 bg-[#1F5A93]/5 rounded-full blur-lg animate-pulse-slow"></div>
        <div className="absolute bottom-10 left-20 w-16 h-16 bg-[#6B0F1A]/5 rounded-full blur-lg animate-pulse-slow" style={{animationDelay: '1.5s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-shadow-creative">Our Values</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            The principles that guide everything we do
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div key={index} className="text-center creative-card animate-fade-in-scale" style={{animationDelay: `${index * 0.2}s`}}>
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B0F1A] to-[#8B1A2A] rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServiceAreaSection() {
  const areas = [
    "Yorba Linda, CA",
    "Anaheim Hills, CA", 
    "Placentia, CA",
    "Brea, CA",
    "Fullerton, CA",
    "Orange, CA",
    "Tustin, CA",
    "Villa Park, CA"
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-shadow-creative">Service Areas</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Proudly serving a 25-mile radius around Yorba Linda
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {areas.map((area, index) => (
            <div key={index} className="flex items-center gap-3 p-4 bg-slate-50 rounded-lg border border-slate-200 hover:border-[#1F5A93] transition-colors animate-fade-in-scale" style={{animationDelay: `${index * 0.1}s`}}>
              <div className="w-3 h-3 bg-[#1F5A93] rounded-full"></div>
              <span className="text-slate-700 font-medium">{area}</span>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-[#1F5A93] text-white px-6 py-3 rounded-full text-lg font-semibold shadow-lg">
            <MapPin className="w-5 h-5" aria-hidden="true" />
            25-mile service radius
          </div>
        </div>
      </div>
    </section>
  );
}

function ProcessSection() {
  const steps = [
    {
      number: "1",
      title: "Book Online",
      description: "Schedule your service through our easy online booking system or give us a call."
    },
    {
      number: "2", 
      title: "We Arrive",
      description: "Our professional team arrives at your location with all necessary equipment and supplies."
    },
    {
      number: "3",
      title: "Quality Service",
      description: "We provide thorough, professional detailing using premium products and techniques."
    },
    {
      number: "4",
      title: "Enjoy Results",
      description: "Your vehicle is left looking showroom-ready while you go about your day."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-in">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 text-shadow-creative">How We Work</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Simple, convenient, and designed around your schedule
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center animate-fade-in-scale" style={{animationDelay: `${index * 0.2}s`}}>
              <div className="relative mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-[#6B0F1A] to-[#8B1A2A] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <span className="text-white text-2xl font-bold">{step.number}</span>
                </div>
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
              <p className="text-slate-600">{step.description}</p>
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-shadow-creative">Ready to Experience the Difference?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join hundreds of satisfied customers who trust Cruiz n Clean for their mobile detailing needs.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-scale" style={{animationDelay: '0.3s'}}>
          <Link 
            href="/booking" 
            className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#6B0F1A] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 hover:scale-105"
          >
            Book Now
          </Link>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-8 py-4 bg-transparent text-white font-semibold text-lg rounded-xl border-2 border-white hover:bg-white hover:text-[#6B0F1A] transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2 hover:scale-105"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </section>
  );
}

export default function AboutPage() {
  return (
    <div>
      <HeroSection />
      <StorySection />
      <ValuesSection />
      <ServiceAreaSection />
      <ProcessSection />
      <CTASection />
    </div>
  );
}