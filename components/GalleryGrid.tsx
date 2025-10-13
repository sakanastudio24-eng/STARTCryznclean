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
    <section className="w-full bg-accent/10 py-12 px-4">
      <h2 className="text-3xl font-bold heading text-primary mb-8 text-center">Gallery</h2>
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
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {displayImages.map((img) => (
          <figure key={img.file} className="rounded-lg shadow bg-white overflow-hidden">
            <img
              src={"/images/" + img.file}
              alt={img.alt}
              loading="lazy"
              className="w-full h-56 object-cover"
            />
            <figcaption className="p-2 text-sm text-charcoal text-center">{img.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
