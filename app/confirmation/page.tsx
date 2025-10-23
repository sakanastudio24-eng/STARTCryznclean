"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { SETMORE_URL } from "../../lib/config";

function ConfirmationContent() {
  const searchParams = useSearchParams();
  const booked = searchParams.get("booked") === "true";

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-3xl mx-auto">
        <div className="bg-white border border-slate-200 rounded-xl p-8 md:p-12 shadow-sm text-center">
          {/* Success Icon */}
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <svg
              className="w-8 h-8 text-green-600"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {booked ? "Booking Confirmed!" : "Request Received!"}
          </h1>
          
          <p className="text-lg text-slate-600 mb-8 leading-relaxed">
            {booked 
              ? "Thank you! Your appointment has been confirmed. You'll receive a confirmation email shortly."
              : "Thank you! We've received your booking request. Our team will review it and contact you shortly to confirm your appointment."
            }
          </p>

          {/* Next Steps */}
          <div className="bg-slate-50 border border-slate-200 rounded-lg p-6 mb-8 text-left">
            <h2 className="font-bold text-slate-900 mb-3">What's Next?</h2>
            <ol className="space-y-2 text-sm text-slate-700">
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">1.</span>
                <span>Check your email for confirmation details</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">2.</span>
                <span>We'll contact you to confirm your appointment time</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">3.</span>
                <span>Prepare your vehicle location and ensure power/water access if needed</span>
              </li>
              <li className="flex items-start">
                <span className="font-bold text-primary mr-2">4.</span>
                <span>We'll arrive on time and make your vehicle shine!</span>
              </li>
            </ol>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={SETMORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary-cta inline-block px-8 py-3 rounded-lg font-semibold"
            >
              Schedule on Setmore
            </a>
            <a
              href="/"
              className="btn-small inline-block bg-slate-100 text-slate-900 px-8 py-3 rounded-lg font-semibold hover:bg-slate-200 border border-slate-300"
            >
              Back to Home
            </a>
          </div>

          {/* Contact Support */}
          <div className="mt-8 pt-8 border-t border-slate-200">
            <p className="text-sm text-slate-600">
              Questions? Contact us at{" "}
              <a href="mailto:hello@cruiznclean.com" className="text-primary font-medium hover:underline">
                hello@cruiznclean.com
              </a>
              {" "}or{" "}
              <a href="tel:+15551234567" className="text-primary font-medium hover:underline">
                (555) 123-4567
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConfirmationPage() {
  return (
    <Suspense fallback={
      <div className="py-12 md:py-16">
        <div className="max-w-3xl mx-auto text-center">
          <div className="animate-pulse">Loading...</div>
        </div>
      </div>
    }>
      <ConfirmationContent />
    </Suspense>
  );
}
