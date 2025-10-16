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
        <a href={process.env.NEXT_PUBLIC_SETMORE_URL || "https://sakanastudiollc.setmore.com/zechariah"} target="_blank" rel="noopener noreferrer" className="inline-block bg-accent text-charcoal px-6 py-3 rounded-xl font-bold hover:bg-accent/80 transition">View on Setmore</a>
      ) : (
        <a href="/" className="inline-block bg-primary text-offWhite px-6 py-3 rounded-xl font-bold hover:bg-primary/90 transition">Back to Home</a>
      )}
    </div>
  );
}
