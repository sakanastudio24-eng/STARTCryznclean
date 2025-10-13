

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const body = `New request from ${data.fullName} (${data.email})\n\n` +
      `Phone: ${data.phone || "-"}\n` +
      `Vehicle: ${data.vehicleSize} ${data.year || ""} ${data.make || ""} ${data.model || ""} (${data.color || ""})\n` +
      `Address: ${data.address || "-"}, ${data.city || "-"} ${data.zip || "-"}\n` +
      `Parking: ${data.parking ? "Yes" : "No"}, Power: ${data.power ? "Yes" : "No"}, Water: ${data.water ? "Yes" : "No"}\n` +
      `Notes: ${data.notes || "-"}\n` +
      `Services: ${data.services?.map((s: any) => s.title).join(", ") || "-"}`;

    if (RESEND_API_KEY && CONTACT_EMAIL) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Authorization": `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: CONTACT_EMAIL,
            to: CONTACT_EMAIL,
            subject: `Cruiz n Clean Request from ${data.fullName}`,
            text: body,
          }),
        });
      } catch (e) {
        // Ignore email failure; continue UX
      }
      return NextResponse.json({ ok: true });
    }
    return NextResponse.json({ ok: true, note: "email not configured" });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "invalid request" }, { status: 400 });
  }
}
