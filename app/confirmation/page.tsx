"use client";
import { useState } from "react";
import StepHeader from "../../components/ui/StepHeader";
import ConfirmationPanel from "../../components/ui/ConfirmationPanel";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";
import Heading from "../../components/ui/Heading";
import Section from "../../components/layout/Section";
import Container from "../../components/layout/Container";

const steps = ["Select Services", "Request Details", "Book/Confirm"];

export default function ConfirmationPage() {
  // Placeholder: toggle booked/request sent state
  const [booked, setBooked] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-page text-text">
      <NavigationBar />
      <main className="flex-1">
        <Section>
          <Container>
            <StepHeader step={2} steps={steps} />
            <ConfirmationPanel booked={booked} />
            <div className="flex justify-center mt-8 gap-4">
              <button className="bg-brand text-white px-6 py-2 rounded font-bold hover:bg-brand-600 transition focus-ring" onClick={() => setBooked(false)}>Request Sent</button>
              <button className="bg-brand text-white px-6 py-2 rounded font-bold hover:bg-brand-600 transition focus-ring" onClick={() => setBooked(true)}>Booked</button>
            </div>
          </Container>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
