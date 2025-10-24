import React from "react";
import Link from "next/link";
import StockImage from "../site/StockImage";
import { Check } from "lucide-react";

interface CorporateServiceCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  image: string;
  href: string;
}

export default function CorporateServiceCard({ 
  title, 
  description, 
  price, 
  features, 
  image, 
  href 
}: CorporateServiceCardProps) {
  return (
    <div className="corporate-service-card rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 overflow-hidden rounded-xl mb-6">
        <StockImage
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="mb-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-4">{description}</p>
        <div className="text-3xl font-bold text-[#6B0F1A] mb-4">{price}</div>
      </div>
      
      <div className="mb-6">
        <h4 className="text-sm font-semibold text-slate-700 mb-3">What's included:</h4>
        <ul className="space-y-2">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-slate-600">
              <Check className="w-4 h-4 text-[#1F5A93] mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <Link 
        href={href} 
        className="w-full btn-corporate-primary inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
      >
        View Details
      </Link>
    </div>
  );
}
