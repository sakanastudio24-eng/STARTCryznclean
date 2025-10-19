export const dynamic = "force-dynamic";

import type { Metadata } from "next";
import BookingClient from "./BookingClient";

export const metadata: Metadata = {
  title: "Booking · Cruiz n Clean",
  description: "Book a mobile detailing appointment in minutes.",
};

export default function BookingPage() {
  return (
    <main className="flex-1 py-12 md:py-16">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold heading text-primary mb-6">Booking</h1>
        <BookingClient />
      </div>
    </main>
  );
}
