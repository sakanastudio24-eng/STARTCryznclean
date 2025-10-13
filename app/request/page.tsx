"use client";
import { useState } from "react";
import StepHeader from "../../components/ui/StepHeader";
import RequestForm from "../../components/ui/RequestForm";
import NavigationBar from "../../components/NavigationBar";
import Footer from "../../components/Footer";

const steps = ["Select Services", "Request Details", "Book/Confirm"];

export default function RequestPage() {
  const [step] = useState(1); // always step 2 for this page
  return (
    <div className="flex flex-col min-h-screen bg-offWhite text-charcoal">
      <NavigationBar />
      <main className="flex-1 max-w-2xl mx-auto w-full px-4 py-8">
        <StepHeader step={step} steps={steps} />
        <h1 className="text-3xl font-bold heading text-primary mb-6">Request Details</h1>
        <RequestForm />
        <div className="flex justify-between mt-8">
          <button className="bg-accent text-charcoal px-6 py-2 rounded font-bold hover:bg-accent/80 transition" onClick={() => window.location.href = '/services'}>Back</button>
          <button className="bg-primary text-offWhite px-6 py-2 rounded font-bold hover:bg-primary/90 transition" onClick={() => window.location.href = '/confirmation'}>Continue</button>
        </div>
      </main>
      <Footer />
    </div>
  );
}
