import React from "react";
import { Star, Quote } from "lucide-react";

export default function ReviewsStrip() {
  const reviews = [
    {
      text: "Amazing service! My car looks brand new.",
      author: "Sarah J.",
      location: "Yorba Linda"
    },
    {
      text: "Best mobile detailing in the area. Fair pricing!",
      author: "Mike C.",
      location: "Anaheim Hills"
    },
    {
      text: "Professional, convenient, and thorough.",
      author: "Lisa R.",
      location: "Placentia"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white rounded-lg p-6 border border-slate-200 shadow-sm">
              <div className="flex items-center mb-4">
                <Quote className="w-6 h-6 text-[#6B0F1A] mr-2" aria-hidden="true" />
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" aria-hidden="true" />
                  ))}
                </div>
              </div>
              <p className="text-slate-700 mb-4 italic">"{review.text}"</p>
              <div className="text-sm text-slate-500">
                <div className="font-semibold">{review.author}</div>
                <div>{review.location}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
