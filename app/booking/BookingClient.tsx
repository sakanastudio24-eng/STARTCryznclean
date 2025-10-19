"use client";

import React from "react";
import BookingCalendar from "@/components/site/BookingCalendar";
import ZipChecker from "@/components/site/ZipChecker";

export default function BookingClient() {
  const [selectedDate, setSelectedDate] = React.useState<string | undefined>();
  const [zip, setZip] = React.useState<string>("");

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <div>
        <BookingCalendar value={selectedDate} onChange={setSelectedDate} />
      </div>
      <div>
        <ZipChecker />
      </div>
    </div>
  );
}
