import React from "react";

interface ConfirmationPanelProps {
  booked: boolean;
}

export default function ConfirmationPanel({ booked }: ConfirmationPanelProps) {
  return (
    <div className="bg-surface rounded-xl shadow p-8 text-center max-w-lg mx-auto mt-12">
      <h1 className="text-3xl font-bold mb-4">
        {booked ? "Booking Confirmed!" : "Request Sent!"}
      </h1>
      <p className="text-lg mb-6">
        {booked
          ? "Your appointment is booked. Check your email for details."
          : "Your request was sent. We'll contact you soon to confirm your booking."}
      </p>
      {booked ? (
        <a href="https://www.setmore.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-brand/90 focus-ring transition">View on Setmore</a>
      ) : (
        <a href="/" className="inline-block bg-brand text-white px-6 py-3 rounded-xl font-bold hover:bg-brand/90 focus-ring transition">Back to Home</a>
      )}
    </div>
  );
}
