import React from "react";
import Link from "next/link";
import StockImage from "../site/StockImage";
import { Check } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  image: string;
  href: string;
}

export default function ServiceCard({ title, description, features, image, href }: ServiceCardProps) {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
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
        <p className="text-slate-600 mb-4">{description}</p>
        <ul className="space-y-2 mb-6">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-sm text-slate-600">
              <Check className="w-4 h-4 text-[#6B0F1A] mr-2 flex-shrink-0" aria-hidden="true" />
              {feature}
            </li>
          ))}
        </ul>
        <Link 
          href={href} 
          className="w-full bg-[#6B0F1A] text-white inline-flex items-center justify-center px-6 py-3 rounded-lg font-semibold hover:bg-[#6B0F1A]/90 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#6B0F1A]/40 focus-visible:ring-offset-2"
        >
          View Details
        </Link>
      </div>
    </div>
  );
}