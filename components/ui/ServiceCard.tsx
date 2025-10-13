import React from "react";

interface ServiceCardProps {
  id: string;
  title: string;
  price: number;
  basePrice?: number; // for compatibility with CartProvider
  category: string;
  description?: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function ServiceCard({ id, title, price, basePrice, category, description, selected, onClick }: ServiceCardProps) {
  return (
    <button
      className={`w-full text-left rounded-lg border-2 p-4 mb-2 shadow transition-colors duration-150 focus:outline-none focus:ring-2 focus:ring-accent/70 ${selected ? "border-primary bg-primary/10" : "border-charcoal/10 bg-white"}`}
      aria-pressed={selected}
      onClick={onClick}
      type="button"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-bold heading text-primary mb-1">{title}</h3>
          <p className="text-sm text-charcoal mb-1">{category}</p>
          {description && <p className="text-sm text-charcoal/80 mb-1">{description}</p>}
        </div>
  <span className="text-lg font-bold text-primary">${price}</span>
      </div>
    </button>
  );
}
