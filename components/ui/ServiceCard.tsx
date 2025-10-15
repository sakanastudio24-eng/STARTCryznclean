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
    <div
      className={`group w-full rounded-xl bg-white/90 border border-subtle shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-[1.02] p-5 flex flex-col`}>
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-bold heading text-primary">{title}</h3>
        <div className="mt-1 text-sm text-charcoal/70">{category}</div>
        <div className="mt-3 text-2xl font-extrabold text-primary">${price}</div>
      </div>
      <button
        className={`mt-5 inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-brand/50 ${selected ? "bg-brand text-white" : "border-2 border-zinc-300 text-zinc-900 hover:bg-zinc-100"}`}
        aria-pressed={selected}
        onClick={onClick}
        type="button"
      >
        {selected ? "Added" : "Add"}
      </button>
    </div>
  );
}
