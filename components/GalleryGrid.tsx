"use client";
import React, { useState } from "react";
import { galleryImages, ImageCategory } from "../data/images-manifest";

const categories: ("All" | ImageCategory)[] = ["All", "Exterior", "Interior", "Ceramic", "Specialty"];

export default function GalleryGrid({ preview = false }: { preview?: boolean }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="rounded-xl border border-slate-200 bg-white p-6 text-center">
        <div className="mx-auto mb-4 inline-flex items-center rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
          Coming soon
        </div>
        <div className="grid grid-cols-2 gap-3">
          <div className="aspect-video rounded-lg bg-slate-200 grid place-items-center text-slate-500 text-sm">Before</div>
          <div className="aspect-video rounded-lg bg-slate-200 grid place-items-center text-slate-500 text-sm">After</div>
        </div>
        <p className="mt-4 text-sm text-slate-600">Real client photos will appear here. CMS slots preserved.</p>
      </div>
    </div>
  );
}
