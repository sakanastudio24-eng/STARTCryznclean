import React from "react";
import { MapPin, Shield, Award } from "lucide-react";

export default function TrustBand() {
  const trustItems = [
    {
      icon: MapPin,
      title: "Service Areas",
      description: "25-mile radius from Yorba Linda"
    },
    {
      icon: Shield,
      title: "Licensed & Insured",
      description: "Fully protected service"
    },
    {
      icon: Award,
      title: "Satisfaction Guaranteed",
      description: "100% customer satisfaction"
    }
  ];

  return (
    <section className="py-12 bg-slate-50 border-y border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustItems.map((item, index) => (
            <div key={index} className="flex items-center gap-4 text-center md:text-left">
              <div className="flex-shrink-0 w-12 h-12 bg-[#6B0F1A] rounded-full flex items-center justify-center">
                <item.icon className="w-6 h-6 text-white" aria-hidden="true" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
