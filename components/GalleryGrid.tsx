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
    <section className="w-full">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
      <h2 className="text-3xl font-semibold mb-8 text-center">Gallery</h2>
      <div className="flex justify-center gap-2 mb-6 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-1 rounded-full font-medium border transition focus-ring ${category === cat ? "bg-brand text-foreground border-brand" : "bg-white text-foreground border-subtle"}`}
            onClick={() => setCategory(cat)}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {displayImages.map((img) => (
          <figure key={img.file} className="group rounded-xl overflow-hidden shadow bg-surface">
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={"/images/" + img.file}
                alt={img.alt}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <figcaption className="p-2 text-sm text-muted-foreground text-center">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
      </div>
    </section>
  );
}
