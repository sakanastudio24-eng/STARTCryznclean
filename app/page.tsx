import React from "react";
import Link from "next/link";
import StockImage from "../components/site/StockImage";
import { Car, Shield, Award, Clock, Check, Star, Play, ShoppingCart } from "lucide-react";

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

function HeroSection() {
  return (
    <section className="pt-16 pb-20 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-[#1F5A93]/5 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-[#6B0F1A]/5 rounded-full blur-xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6">
            Get 5-Star Service At Home
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-8 max-w-3xl mx-auto">
            Professional mobile auto detailing serving Yorba Linda, Anaheim Hills, Placentia, and surrounding areas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/booking" 
              className="btn-corporate-primary inline-flex items-center justify-center px-8 py-4 font-bold text-lg rounded-xl shadow-lg"
            >
              Get Free Quote
            </Link>
            <Link 
              href="/services" 
              className="btn-corporate-secondary inline-flex items-center justify-center px-8 py-4 font-semibold text-lg rounded-xl"
            >
              Learn More
            </Link>
          </div>
        </div>
        
        {/* Service Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Car className="w-12 h-12 text-[#6B0F1A] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Mobile Detailing</h3>
            <p className="text-slate-600">We come to you with all equipment</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Shield className="w-12 h-12 text-[#1F5A93] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Ceramic Coating</h3>
            <p className="text-slate-600">Long-lasting protection for your vehicle</p>
          </div>
          <div className="text-center p-6 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow">
            <Award className="w-12 h-12 text-[#6B0F1A] mx-auto mb-4" />
            <h3 className="text-xl font-bold text-slate-900 mb-2">Paint Protection</h3>
            <p className="text-slate-600">Keep your paint looking new</p>
          </div>
        </div>
      </div>
    </section>
  );
}

function MainMessageSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
            Make Your Car Look Brand New!
          </h2>
          <div className="max-w-4xl mx-auto text-lg text-slate-600 leading-relaxed">
            <p className="mb-4">
              Established in Yorba Linda, California. <strong>Cruiz n Clean</strong> doesn't just vacuum and wash vehicles — 
              we <em>restore, protect, and maintain</em> them. We send our Fully Equipped, Professional Detailers Right To You.
            </p>
            <p className="mb-4">
              All of our staff has been hand picked and background checked for your safety. We can complete your detailing 
              at your Home, Office, or on the street. Get in touch with us today to ask us any questions or schedule your detailing appointment.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function ServiceSelectionSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Select Your Service Below</h2>
          <p className="text-xl text-slate-600">Choose The Team With Over 5 Years of Excellence</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: "Mobile Detailing", icon: Car, href: "/services" },
            { name: "Ceramic Coating", icon: Shield, href: "/services" },
            { name: "Window Tinting", icon: Award, href: "/services" },
            { name: "Paint Protection Film", icon: Car, href: "/services" }
          ].map((service, index) => {
            const Icon = service.icon;
            return (
              <Link 
                key={index}
                href={service.href}
                className="group p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 text-center hover:border-[#6B0F1A] border-2 border-transparent"
              >
                <Icon className="w-8 h-8 text-[#6B0F1A] mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <h3 className="font-semibold text-slate-900">{service.name}</h3>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function DetailPackagesSection() {
  const packages = [
    {
      id: "express-wash",
      name: "Express Wash",
      subtitle: "Our Express Package. Best for maintenance or quick refresh.",
      price: 60,
      interior: [
        "Interior Vacuum",
        "Wipe all surfaces", 
        "Stains (Spot Treatment)",
        "Windows & Mirrors",
        "Door Jambs",
        "Floor Mats",
        "Detail Trunk"
      ],
      exterior: [
        "Quick Hand Wash",
        "Clean Rims & Tires", 
        "Wax Protection (3 Months)"
      ]
    },
    {
      id: "standard-detail",
      name: "Standard Detail",
      subtitle: "Our Standard Package. A very thorough inside-out detail.",
      price: 140,
      interior: [
        "Double Vacuum Interior",
        "Wipe all surfaces",
        "Stains (Spot Treatment)", 
        "Windows & Mirrors",
        "Clean & Protect Plastic",
        "Detail Floor Mats and Shine",
        "Detail Trunk & Door Jambs"
      ],
      exterior: [
        "Spot Polish",
        "Professional Hand Wash",
        "Detail Rims & Tires",
        "Wheel Wells", 
        "Wax Protection (3 Months)"
      ]
    },
    {
      id: "premium-detail",
      name: "Premium Detail",
      subtitle: "Ultimate Detail Experience. Includes Full Polish & Shampoo/Extraction.",
      price: 220,
      interior: [
        "Shampoo Seats & Carpet",
        "Double Vacuum Interior",
        "Wipe all Surfaces",
        "Stain (Spot Treatment)",
        "Clean & Protect Plastic", 
        "Windows & Mirrors",
        "Detail Floor Mats and Shine",
        "Detail Trunk"
      ],
      exterior: [
        "Full Paint Enhancement Polish",
        "Professional Hand Wash",
        "Clay Bar Exterior",
        "Wash Wheel Wells",
        "Dress Trims/Tires",
        "Clean Door Jams",
        "Wax Protection (3 Months)"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Detail Packages</h2>
          <p className="text-xl text-slate-600">Book A Detail With Us</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {packages.map((pkg) => (
            <div key={pkg.id} className="bg-white border-2 border-slate-200 rounded-2xl p-8 hover:border-[#6B0F1A] transition-colors relative flex flex-col h-full">
              <div className="text-center mb-6 flex-shrink-0">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                <p className="text-slate-600 mb-4">{pkg.subtitle}</p>
                <div className="text-3xl font-bold text-[#6B0F1A] mb-4">From ${pkg.price}</div>
              </div>
              
              <div className="space-y-6 flex-1">
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Interior</h4>
                  <ul className="space-y-2">
                    {pkg.interior.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <Check className="w-4 h-4 text-[#6B0F1A] mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wide">Exterior</h4>
                  <ul className="space-y-2">
                    {pkg.exterior.map((item, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600">
                        <Check className="w-4 h-4 text-[#6B0F1A] mr-2 flex-shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="mt-8 flex-shrink-0">
                <Link 
                  href="/services" 
                  className="w-full inline-flex items-center justify-center px-6 py-4 rounded-lg font-semibold transition-all min-h-[48px] bg-[#6B0F1A] text-white hover:bg-[#5a0c16] hover:scale-105 transform"
                >
                  <ShoppingCart className="w-5 h-5 mr-2" />
                  Select Package
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComparisonSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Car Wash vs. Cruiz n Clean</h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Our expert detailers provide a hand wash and wax that goes far beyond a typical tunnel wash. 
            Our in-depth clean removes dirt, stains, and scratches that may have built up over time.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Tunnel Wash */}
          <div className="bg-white rounded-2xl p-8 border-2 border-red-200">
            <h3 className="text-2xl font-bold text-red-600 mb-6">Tunnel Wash</h3>
            <div className="space-y-4">
              {[
                "❌ Up to 50 gallons of water per wash",
                "❌ Customers have to drive and wait", 
                "❌ Average service and bad quality work",
                "❌ Uses cheap chemicals bought in bulk",
                "❌ No clay bar used ever",
                "❌ No work performed on car's interior",
                "❌ Scratches and swirls all over vehicle"
              ].map((item, index) => (
                <div key={index} className="text-slate-600">{item}</div>
              ))}
            </div>
          </div>
          
          {/* Our Hand Wash */}
          <div className="bg-white rounded-2xl p-8 border-2 border-green-200">
            <h3 className="text-2xl font-bold text-green-600 mb-6">Our Hand Wash</h3>
            <div className="space-y-4">
              {[
                "✔️ Only 5 gallons of water per wash",
                "✔️ We come to your Home or Office",
                "✔️ 5-Star Service and 100% Satisfaction", 
                "✔️ Locally sourced high quality products",
                "✔️ Clay bar decontamination every time",
                "✔️ Complete interior service + shampoo",
                "✔️ Like New, Showroom quality finish"
              ].map((item, index) => (
                <div key={index} className="text-slate-600">{item}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowWeWorkSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">How We Detail</h2>
          <p className="text-xl text-slate-600">Watch Us Work</p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-4">2 min video</h3>
            <p className="text-lg text-slate-600 mb-6">
              See what makes Cruiz n Clean the top choice for everything car detailing. 
              At Home or At Shop service available.
            </p>
            <button className="inline-flex items-center gap-2 bg-[#6B0F1A] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#5a0c16] transition-colors">
              <Play className="w-5 h-5" />
              Watch
            </button>
          </div>
          
          <div className="bg-slate-200 rounded-2xl h-64 flex items-center justify-center">
            <div className="text-center">
              <Play className="w-16 h-16 text-slate-400 mx-auto mb-4" />
              <p className="text-slate-500">Video Coming Soon</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Thousands Of Five Star Reviews</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah J.",
              location: "Yorba Linda",
              text: "My car looks brand new! Professional, on time, and exceeded expectations.",
              rating: 5
            },
            {
              name: "Mike C.", 
              location: "Anaheim Hills",
              text: "Best mobile detailing service. Fair pricing, great communication, flawless car.",
              rating: 5
            },
            {
              name: "Lisa R.",
              location: "Placentia", 
              text: "Convenient, thorough, and my car was showroom ready in no time.",
              rating: 5
            }
          ].map((testimonial, index) => (
            <div key={index} className="bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-slate-600 mb-4 italic">"{testimonial.text}"</p>
              <div>
                <div className="font-semibold text-slate-900">{testimonial.name}</div>
                <div className="text-sm text-slate-500">{testimonial.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 bg-gradient-to-r from-[#6B0F1A] via-[#8B1A2A] to-[#6B0F1A] relative overflow-hidden">
      {/* Enhanced background elements for visibility */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-white/10 rounded-full blur-xl animate-pulse" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-12 border border-white/20">
          <h2 className="text-5xl md:text-6xl font-bold mb-8 text-white drop-shadow-lg">
            Show your car some love.
          </h2>
          <p className="text-xl md:text-2xl text-white/95 mb-10 max-w-4xl mx-auto leading-relaxed drop-shadow-md">
            Get service at our shop or at home with our mobile detailing service. All our detailers passed background checks, 
            are friendly and reliable. Only thing we need is access to water & electricity. Fair pricing and 5-Star Service 
            is what makes us Yorba Linda's Top Choice.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Link 
              href="/booking" 
              className="inline-flex items-center justify-center px-10 py-5 bg-white text-[#6B0F1A] font-bold text-xl rounded-2xl shadow-2xl hover:shadow-3xl hover:bg-white/95 transition-all duration-300 transform hover:scale-105"
            >
              Book Now
            </Link>
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 bg-transparent text-white font-bold text-xl rounded-2xl border-3 border-white hover:bg-white hover:text-[#6B0F1A] transition-all duration-300 transform hover:scale-105"
            >
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Page() {
  return (
    <div>
      <HeroSection />
      <MainMessageSection />
      <ServiceSelectionSection />
      <DetailPackagesSection />
      <ComparisonSection />
      <HowWeWorkSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}