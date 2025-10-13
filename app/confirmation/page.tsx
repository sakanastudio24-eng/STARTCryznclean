"use client";
import { useState } from "react";
import StepHeader from "../../components/ui/StepHeader";
import ConfirmationPanel from "../../components/ui/ConfirmationPanel";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

const steps = ["Select Services", "Request Details", "Book/Confirm"];

export default function ConfirmationPage() {
  // Placeholder: toggle booked/request sent state
  const [booked, setBooked] = useState(false);
  return (
    <div className="flex flex-col min-h-screen bg-base text-text">
      <NavigationBar />
      <main className="flex-1 Section max-w-2xl mx-auto w-full">
        <StepHeader step={2} steps={steps} />
        <ConfirmationPanel booked={booked} />
        <div className="flex justify-center mt-8 gap-4">
          <button className="bg-accent text-base px-6 py-2 rounded-xl font-bold hover:opacity-90 transition" onClick={() => setBooked(false)}>Request Sent</button>
          <button className="bg-primary text-text px-6 py-2 rounded-xl font-bold hover:opacity-90 transition" onClick={() => setBooked(true)}>Booked</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
