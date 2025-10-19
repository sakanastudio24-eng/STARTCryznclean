"use client";

import React, { useState } from "react";

interface BeforeAfterProps {
  beforeSrc: string;
  afterSrc: string;
  altBefore: string;
  altAfter: string;
}

export default function BeforeAfter({ beforeSrc, afterSrc, altBefore, altAfter }: BeforeAfterProps) {
  const [pos, setPos] = useState(50);
  return (
    <div className="relative w-full overflow-hidden rounded-xl bg-white shadow border border-black/10">
      <div className="aspect-[4/3] relative select-none">
        <img src={beforeSrc} alt={altBefore} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0" style={{ width: `${pos}%`, overflow: "hidden" }} aria-hidden="true">
          <img src={afterSrc} alt="" className="w-full h-full object-cover" />
        </div>
        <input
          aria-label="Reveal after photo"
          type="range"
          min={0}
          max={100}
          value={pos}
          onChange={(e) => setPos(Number(e.target.value))}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 w-2/3 accent-[#FF6A3D]"
        />
      </div>
      <div className="flex justify-between text-xs text-charcoal/80 px-3 py-2 border-t">
        <span>Before</span>
        <span>After</span>
      </div>
    </div>
  );
}
