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
      className={`group w-full rounded-xl bg-white/90 dark:bg-zinc-900/60 border border-subtle shadow-sm hover:shadow-lg transition-all duration-200 transform hover:-translate-y-0.5 hover:scale-[1.02] p-5 flex flex-col`}>
      <div className="flex-1">
        <h3 className="text-lg md:text-xl font-semibold">{title}</h3>
        <div className="mt-1 text-sm text-muted-foreground">{category}</div>
        <div className="mt-3 text-2xl font-semibold">${price}</div>
      </div>
      <button
        className={`mt-5 inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 ${selected ? "bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900" : "border border-subtle hover:bg-zinc-100 dark:hover:bg-zinc-900"}`}
        aria-pressed={selected}
        onClick={onClick}
        type="button"
      >
        {selected ? "Added" : "Add"}
      </button>
    </div>
  );
}
