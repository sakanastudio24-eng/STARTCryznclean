import React from "react";

interface ConfirmationPanelProps {
  booked: boolean;
}

export default function ConfirmationPanel({ booked }: ConfirmationPanelProps) {
  return (
    <div className="bg-white/90 rounded-xl shadow p-8 text-center max-w-lg mx-auto mt-12">
      <h1 className="text-3xl font-bold heading text-primary mb-4">
        {booked ? "Booking Confirmed!" : "Request Sent!"}
      </h1>
      <p className="text-lg text-charcoal mb-6">
        {booked
          ? "Your appointment is booked. Check your email for details."
          : "Your request was sent. We'll contact you soon to confirm your booking."}
      </p>
      {booked ? (
        <a href="https://www.setmore.com/" target="_blank" rel="noopener noreferrer" className="inline-block btn-primary">View on Setmore</a>
      ) : (
        <a href="/" className="inline-block btn-secondary">Back to Home</a>
      )}
    </div>
  );
}
