"use client";
import { useState } from "react";
import StepHeader from "../../components/ui/StepHeader";
import ConfirmationPanel from "../../components/ui/ConfirmationPanel";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

const steps = ["Select Services", "Request Details", "Book/Confirm"];

export default function ConfirmationPage() {
  // Placeholder: toggle booked/request sent state
  const [booked, setBooked] = useState(false);
  return (
    <Section>
      <Container>
        <StepHeader step={2} steps={steps} />
        <ConfirmationPanel booked={booked} />
        <div className="flex justify-center mt-8 gap-4">
          <button className="bg-brand text-white px-6 py-2 rounded font-bold hover:bg-brand/90 focus-ring transition" onClick={() => setBooked(false)}>Request Sent</button>
          <button className="bg-brand text-white px-6 py-2 rounded font-bold hover:bg-brand/90 focus-ring transition" onClick={() => setBooked(true)}>Booked</button>
        </div>
      </Container>
    </Section>
  );
}
