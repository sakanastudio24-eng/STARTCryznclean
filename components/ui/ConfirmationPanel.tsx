import React from "react";
import { SETMORE_URL } from "../../lib/config";

interface ConfirmationPanelProps {
  booked: boolean;
}

export default function ConfirmationPanel({ booked }: ConfirmationPanelProps) {
  return (
    <div className="bg-white rounded-xl shadow p-8 text-center max-w-lg mx-auto mt-12">
      <h1 className="text-3xl font-bold text-primary mb-4">
        {booked ? "Booking Confirmed!" : "Request Sent!"}
      </h1>
      <p className="text-lg text-slate-700 mb-6">
        {booked
          ? "Your appointment is booked. Check your email for details."
          : "Your request was sent. We'll contact you soon to confirm your booking."}
      </p>
      {booked ? (
        <a href={SETMORE_URL} target="_blank" rel="noopener noreferrer" className="btn-primary-cta inline-block px-6 py-3 rounded-xl font-bold">View on Setmore</a>
      ) : (
        <a href="/" className="btn-small inline-block bg-slate-100 text-slate-900 px-6 py-3 rounded-xl font-bold hover:bg-slate-200 border border-slate-300">Back to Home</a>
      )}
    </div>
  );
}
