"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BeforeAfterProps {
  before: string;
  after: string;
  alt: string;
}

export default function BeforeAfter({ before, after, alt }: BeforeAfterProps) {
  const [showBefore, setShowBefore] = useState(true);

  return (
    <div className="bg-white border border-slate-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      {/* Image Container */}
      <div className="relative aspect-[4/3] bg-slate-100">
        <Image
          src={showBefore ? before : after}
          alt={`${alt} - ${showBefore ? "Before" : "After"}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm font-semibold">
          {showBefore ? "Before" : "After"}
        </div>
      </div>

      {/* Toggle Buttons */}
      <div className="p-4">
        <div className="flex gap-2">
          <button
            onClick={() => setShowBefore(true)}
            className={`btn-small flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
              showBefore
                ? "bg-primary text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            Before
          </button>
          <button
            onClick={() => setShowBefore(false)}
            className={`btn-small flex-1 py-2 px-4 rounded-lg font-semibold text-sm transition-all ${
              !showBefore
                ? "bg-primary text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            After
          </button>
        </div>
        <p className="text-sm text-slate-600 mt-3 text-center">{alt}</p>
      </div>
    </div>
  );
}




