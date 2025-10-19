import { NextResponse } from "next/server";

// TODO: Integrate with Setmore/Google Calendar FreeBusy API.
// - For Setmore: query appointments and map to busy dates
// - For Google: use the FreeBusy endpoint with a service account
// - Cache responses (e.g., 10-15 minutes) to reduce latency

function formatISODate(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, "0");
  const d = String(date.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

export async function GET() {
  // Mock busy dates within the next ~30 days
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const busyOffsets = [1, 3, 5, 10, 14, 18, 22, 27];
  const busy = busyOffsets
    .map((offset) => {
      const d = new Date(today);
      d.setDate(today.getDate() + offset);
      return formatISODate(d);
    })
    // Ensure unique and sorted
    .filter((v, i, a) => a.indexOf(v) === i)
    .sort();

  return NextResponse.json({ busy });
}
