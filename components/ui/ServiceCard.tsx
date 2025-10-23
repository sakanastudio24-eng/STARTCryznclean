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
      className={`group w-full rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-[1.02] p-5 h-full flex flex-col`}>
      <div className="flex-1 space-y-3">
        <div>
          <h3 className="text-lg md:text-xl font-bold text-primary">{title}</h3>
          <div className="mt-1 text-sm text-slate-600">{category}</div>
          <div className="mt-3 text-2xl font-extrabold text-primary">${price}</div>
        </div>
      </div>
      <div className="mt-auto pt-4">
        <button
          className={`w-full inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 ${selected ? "bg-primary text-white" : "border-2 border-primary text-primary hover:bg-primary/5"}`}
          aria-label={`${selected ? "Remove" : "Add"} ${title}`}
          aria-pressed={selected}
          onClick={onClick}
          type="button"
        >
          {selected ? "Added" : "Add"}
        </button>
      </div>
    </div>
  );
}
