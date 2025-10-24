import React from "react";
import Link from "next/link";
import WashosStyleHero from "../components/ui/WashosStyleHero";
import WashosStyleServiceCard from "../components/ui/WashosStyleServiceCard";
import ServiceAreas from "../components/ui/ServiceAreas";
import WhyChooseUs from "../components/ui/WhyChooseUs";
import HowItWorks from "../components/ui/HowItWorks";
import ReviewsStrip from "../components/ui/ReviewsStrip";

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
      subtitle: "Essential inside-out wash for regular upkeep.",
      frequency: "Weekly or every 200 mi.",
      price: "From $60",
      memberPrice: "from $42 for members*",
      features: [
        "Full exterior hand wash",
        "Tire dressing & rim cleaning", 
        "Exterior window cleaning",
        "Thorough interior & trunk vacuum",
        "Interior wipe down",
        "Door jambs",
        "Window cleaning inside",
        "Glossy exterior finish"
      ],
      image: "https://images.unsplash.com/photo-1520340356584-f9917d1eea6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/services"
    },
    {
      title: "Standard Detail",
      subtitle: "Comprehensive wash and wax for an eye-catching finish.",
      frequency: "Monthly or every 500 mi.",
      price: "From $140",
      memberPrice: "from $98 for members*",
      features: [
        "Full exterior hand wash",
        "Tire dressing & rim cleaning",
        "Exterior window cleaning", 
        "Thorough interior & trunk vacuum",
        "Interior wipe down",
        "Door jambs",
        "Window cleaning inside",
        "Complete wax for protection & shine",
        "Leather cleaning & conditioning",
        "Light stain removal"
      ],
      image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/services",
      isPopular: true
    },
    {
      title: "Premium Detail",
      subtitle: "Essential detailing to protect and maintain your car's shine.",
      frequency: "Every 3 months or 1500 mi.",
      price: "From $220",
      memberPrice: "from $154 for members*",
      features: [
        "Full exterior hand wash",
        "Tire dressing & rim cleaning",
        "Exterior window cleaning",
        "Thorough interior & trunk vacuum", 
        "Interior wipe down",
        "Door jambs",
        "Window cleaning inside",
        "Complete wax for protection & shine",
        "Leather cleaning & conditioning",
        "Clay bar paint treatment",
        "Outside plastic dressing",
        "Mats & carpets shampooed"
      ],
      image: "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80",
      href: "/services"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Services available for your lifestyle</h2>
          <p className="text-xl text-slate-600">Professional detailers, fully equipped and insured.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <WashosStyleServiceCard
              key={index}
              title={service.title}
              subtitle={service.subtitle}
              frequency={service.frequency}
              price={service.price}
              memberPrice={service.memberPrice}
              features={service.features}
              image={service.image}
              href={service.href}
              isPopular={service.isPopular}
            />
          ))}
        </div>
        
        <div className="text-center mt-8">
          <p className="text-sm text-slate-500">*Price may vary per market.</p>
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-20 bg-[#6B0F1A] text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">
          Let us help you get that new car smell today
        </h2>
        <p className="text-xl text-white/90 mb-8">
          Sign up and we'll get a fully equipped detailer to your location in as little as 90 minutes.
        </p>
        <Link 
          href="/booking" 
          className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#6B0F1A] font-bold text-lg rounded-xl shadow-lg hover:shadow-xl hover:bg-white/90 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 focus-visible:ring-offset-2"
        >
          Book now
        </Link>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      <WashosStyleHero />
      <ServiceAreas />
      <WhyChooseUs />
      <ServicesSection />
      <ReviewsStrip />
      <HowItWorks />
      <FinalCTA />
    </div>
  );
}