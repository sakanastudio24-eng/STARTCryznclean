import { Suspense } from "react";
import BookingClient from "@/components/booking/BookingClient";

export default function BookingPage() {
  return (
    <Suspense fallback={<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-10">Loading…</div>}>
      <BookingClient />
    </Suspense>
  );
}
