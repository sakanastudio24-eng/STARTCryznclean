import React from "react";
import Link from "next/link";
import StockImage from "../site/StockImage";
import { Check } from "lucide-react";

interface WashosStyleServiceCardProps {
  title: string;
  subtitle: string;
  frequency: string;
  price: string;
  memberPrice?: string;
  features: string[];
  image: string;
  href: string;
  isPopular?: boolean;
}

export default function WashosStyleServiceCard({ 
  title, 
  subtitle, 
  frequency, 
  price, 
  memberPrice, 
  features, 
  image, 
  href,
  isPopular = false 
}: WashosStyleServiceCardProps) {
  return (
    <div className={`bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group relative ${isPopular ? 'ring-2 ring-[#6B0F1A]' : ''}`}>
      {isPopular && (
        <div className="absolute top-4 right-4 bg-[#6B0F1A] text-white px-3 py-1 rounded-full text-sm font-semibold z-10">
          Most Popular
        </div>
      )}
      
      <div className="relative h-48 overflow-hidden">
        <StockImage
          src={image}
          alt={title}
          width={400}
          height={200}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">{title}</h3>
        <p className="text-slate-600 mb-2">{subtitle}</p>
        <p className="text-sm text-slate-500 mb-4">{frequency}</p>
        
        <div className="mb-6">
          <div className="text-3xl font-bold text-[#6B0F1A]">
            {price}
          </div>
          {memberPrice && (
            <div className="text-sm text-slate-500">
              {memberPrice} for members*
            </div>
          )}
        </div>
        
        <div className="mb-6">
          <h4 className="text-sm font-semibold text-slate-700 mb-3">Package details</h4>
          <ul className="space-y-2">
            {features.map((feature, idx) => (
              <li key={idx} className="flex items-start text-sm text-slate-600">
                <Check className="w-4 h-4 text-[#6B0F1A] mr-2 flex-shrink-0 mt-0.5" aria-hidden="true" />
                {feature}
              </li>
            ))}
          </ul>
        </div>
        
        <Link 
          href={href} 
          className="w-full bg-[#6B0F1A] text-white inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold hover:bg-[#6B0F1A]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
        >
          Book now
        </Link>
      </div>
    </div>
  );
}
