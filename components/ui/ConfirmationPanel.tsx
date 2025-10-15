import React from "react";

interface ConfirmationPanelProps {
  booked: boolean;
}

export default function ConfirmationPanel({ booked }: ConfirmationPanelProps) {
  return (
    <div className="bg-white/90 dark:bg-zinc-900/60 border border-subtle rounded-xl shadow p-8 text-center max-w-lg mx-auto mt-12">
      <h1 className="text-3xl sm:text-4xl font-semibold mb-4">
        {booked ? "Booking Confirmed!" : "Request Sent!"}
      </h1>
      <p className="text-base text-muted-foreground mb-6">
        {booked
          ? "Your appointment is booked. Check your email for details."
          : "Your request was sent. We'll contact you soon to confirm your booking."}
      </p>
      {booked ? (
        <a href="https://www.setmore.com/" target="_blank" rel="noopener noreferrer" className="inline-block bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-6 py-3 rounded-md font-medium hover:opacity-90 transition">View on Setmore</a>
      ) : (
        <a href="/" className="inline-block bg-brand text-white px-6 py-3 rounded-md font-medium hover:bg-brand/90 transition">Back to Home</a>
      )}
    </div>
  );
}
