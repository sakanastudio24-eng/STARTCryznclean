"use client";
import { useState } from "react";
import StepHeader from "../../components/ui/StepHeader";
import ConfirmationPanel from "../../components/ui/ConfirmationPanel";
import Section from "../../components/layout/Section";

const steps = ["Select Services", "Request Details", "Book/Confirm"];

export default function ConfirmationPage() {
  // Placeholder: toggle booked/request sent state
  const [booked, setBooked] = useState(false);
  return (
    <Section>
      <StepHeader step={2} steps={steps} />
      <ConfirmationPanel booked={booked} />
      <div className="flex justify-center mt-8 gap-4">
        <button className="bg-accent text-neutral-900 px-6 py-2 rounded font-semibold hover:bg-accent/80 transition" onClick={() => setBooked(false)}>Request Sent</button>
        <button className="bg-primary text-text px-6 py-2 rounded font-semibold hover:bg-primary/90 transition" onClick={() => setBooked(true)}>Booked</button>
      </div>
    </Section>
  );
}
