"use client";
import React, { useState } from "react";
import { galleryImages, ImageCategory } from "../data/images-manifest";

const categories: ("All" | ImageCategory)[] = ["All", "Exterior", "Interior", "Ceramic", "Specialty"];

export default function GalleryGrid({ preview = false }: { preview?: boolean }) {
  const [category, setCategory] = useState<(typeof categories)[number]>("All");
  let filtered = galleryImages;
  if (category !== "All") filtered = filtered.filter(img => img.category === category);
  const displayImages = preview ? filtered.slice(0, 2) : filtered;
  return (
    <section className="Section">
      <h2 className="text-3xl font-display font-bold text-text mb-8 text-center">Gallery</h2>
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full font-medium border transition ${category === cat ? "bg-primary text-offWhite border-primary" : "bg-white text-primary border-primary/30"}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {displayImages.map((img) => (
          <figure key={img.file} className="relative overflow-hidden rounded-xl shadow-card">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={"/images/" + img.file}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 will-change-transform hover:scale-[1.02]"
              />
            </div>
            <figcaption className="absolute inset-x-0 bottom-0 p-3 text-sm text-text bg-gradient-to-t from-black/60 via-black/20 to-transparent">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
