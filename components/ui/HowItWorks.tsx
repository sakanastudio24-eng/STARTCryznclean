import React from "react";
import { Calendar, MapPin, Star } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      number: "Step 1",
      title: "Book your appointment",
      description: "Tell us when and where. We'll be there within 90 minutes.",
      icon: Calendar
    },
    {
      number: "Step 2", 
      title: "We come to you",
      description: "An assigned detailer will come fully equipped to complete your service at a selected location.",
      icon: MapPin
    },
    {
      number: "Step 3",
      title: "Rate your detailer", 
      description: "You only get charged after the service. Tell us how we did and rate your detailer.",
      icon: Star
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 text-center mb-16">
          How does Cruiz n Clean work?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-[#6B0F1A] rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-8 h-8 text-white" aria-hidden="true" />
                </div>
                <div className="text-sm font-semibold text-[#6B0F1A] mb-2">{step.number}</div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{step.title}</h3>
                <p className="text-slate-600">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
