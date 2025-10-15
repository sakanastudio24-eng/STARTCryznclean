"use client";
import { useState } from "react";
import StepHeader from "../../components/ui/StepHeader";
import ConfirmationPanel from "../../components/ui/ConfirmationPanel";

const steps = ["Select Services", "Request Details", "Book/Confirm"];

export default function ConfirmationPage() {
  // Placeholder: toggle booked/request sent state
  const [booked, setBooked] = useState(false);
  return (
    <main className="py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <StepHeader step={2} steps={steps} />
      <ConfirmationPanel booked={booked} />
      <div className="flex justify-center mt-8 gap-4">
        <button className="bg-accent text-charcoal px-6 py-2 rounded font-bold hover:bg-accent/80 transition" onClick={() => setBooked(false)}>Request Sent</button>
        <button className="bg-primary text-offWhite px-6 py-2 rounded font-bold hover:bg-primary/90 transition" onClick={() => setBooked(true)}>Booked</button>
      </div>
      </div>
    </main>
  );
}
