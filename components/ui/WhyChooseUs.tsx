import React from "react";
import { Clock, Shield, Award, MapPin } from "lucide-react";

export default function WhyChooseUs() {
  const benefits = [
    {
      icon: Clock,
      title: "Convenience",
      description: "Get your car washed or detailed from the comfort of your home. Book easy for today or plan ahead."
    },
    {
      icon: Award,
      title: "Quality", 
      description: "Experience exceptional service from our network of expert and insured detailers."
    },
    {
      icon: Shield,
      title: "Trust",
      description: "Enjoy peace of mind with our 100% satisfaction policy and a dedicated support team."
    }
  ];

  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Why Cruiz n Clean?</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#6B0F1A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{benefit.title}</h3>
                <p className="text-slate-600">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
