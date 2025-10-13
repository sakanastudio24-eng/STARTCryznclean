import React from "react";

interface ServiceCardProps {
  id: string;
  title: string;
  price: number;
  basePrice?: number; // for compatibility with CartProvider
  category: string;
  selected?: boolean;
  onClick?: () => void;
}

export default function ServiceCard({ id, title, price, basePrice, category, selected, onClick }: ServiceCardProps) {
  return (
    <button
      className={`w-full text-left rounded-2xl border border-white/10 bg-white/[0.04] p-5 shadow-card transition will-change-transform hover:-translate-y-0.5 hover:bg-white/[0.08] focus:outline-none focus:ring-2 focus:ring-accent ${selected ? "ring-2 ring-accent/60" : ""}`}
      aria-pressed={selected}
      onClick={onClick}
      type="button"
    >
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-xl font-semibold text-text mb-1">{title}</h3>
          <p className="text-sm text-text/70 mb-1">{category}</p>
        </div>
        <span className="text-lg font-bold text-accent">${price}</span>
      </div>
    </button>
  );
}
