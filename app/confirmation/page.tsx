"use client";
import { useState } from "react";
import StepHeader from "../../components/ui/StepHeader";
import ConfirmationPanel from "../../components/ui/ConfirmationPanel";

const steps = ["Select Services", "Request Details", "Book/Confirm"];

export default function ConfirmationPage() {
  // Placeholder: toggle booked/request sent state
  const [booked, setBooked] = useState(false);
  return (
    <main>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <StepHeader step={2} steps={steps} />
        <ConfirmationPanel booked={booked} />
        <div className="flex justify-center mt-8 gap-4">
          <button className="bg-zinc-900 text-white dark:bg-zinc-100 dark:text-zinc-900 px-6 py-2 rounded-md font-medium hover:opacity-90 transition" onClick={() => setBooked(false)}>Request Sent</button>
          <button className="bg-brand text-white px-6 py-2 rounded-md font-medium hover:bg-brand/90 transition" onClick={() => setBooked(true)}>Booked</button>
        </div>
        </div>
    </main>
  );
}
