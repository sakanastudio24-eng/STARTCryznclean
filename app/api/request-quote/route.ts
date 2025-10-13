import { NextRequest, NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

async function sendWithResend(to: string, subject: string, html: string) {
  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${RESEND_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: `Cruiz n Clean <noreply@cruiznclean.com>`,
      to,
      subject,
      html,
    }),
  });
  if (!res.ok) throw new Error("Resend email failed");
}

async function sendWithSendGrid(to: string, subject: string, html: string) {
  const res = await fetch("https://api.sendgrid.com/v3/mail/send", {
    method: "POST",
    headers: {
      "Authorization": `Bearer ${SENDGRID_API_KEY}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      personalizations: [{ to: [{ email: to }] }],
      from: { email: "noreply@cruiznclean.com", name: "Cruiz n Clean" },
      subject,
      content: [{ type: "text/html", value: html }],
    }),
  });
  if (!res.ok) throw new Error("SendGrid email failed");
}

function renderEmail(data: any) {
  const { fullName, email, phone, preferredContact, vehicle, color, address, city, zip, vehicleSize, parking, power, water, notes, services, photos } = data;
  const subtotal = services.reduce((sum: number, s: any) => sum + (s.basePrice || 0), 0);
  return `
    <h2>New Service Request</h2>
    <p><b>Name:</b> ${fullName}<br/>
    <b>Email:</b> ${email}<br/>
    <b>Phone:</b> ${phone || "-"}<br/>
    <b>Preferred Contact:</b> ${preferredContact || "-"}</p>
    <p><b>Vehicle:</b> ${vehicle || "-"} ${color ? `(${color})` : ""}<br/>
    <b>Size:</b> ${vehicleSize}</p>
    <p><b>Location:</b> ${address || "-"}, ${city || "-"} ${zip || "-"}</p>
    <p><b>Parking:</b> ${parking ? "Yes" : "No"} | <b>Power:</b> ${power ? "Yes" : "No"} | <b>Water:</b> ${water ? "Yes" : "No"}</p>
    <p><b>Services:</b><ul>${services.map((s: any) => `<li>${s.title} - $${s.basePrice}</li>`).join("")}</ul>
    <b>Subtotal:</b> $${subtotal}</p>
    <p><b>Notes:</b> ${notes || "-"}</p>
    <p><b>Photos:</b><ul>${photos.map((p: any) => `<li>${p.name} (${p.url})</li>`).join("")}</ul></p>
  `;
}

export async function POST(req: NextRequest) {
  let data;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid JSON" }, { status: 400 });
  }
  if (!CONTACT_EMAIL || (!RESEND_API_KEY && !SENDGRID_API_KEY)) {
    return NextResponse.json({ ok: true, note: "email not configured" });
  }
  const subject = `New Service Request from ${data.fullName || "(unknown)"}`;
  const html = renderEmail(data);
  try {
    if (RESEND_API_KEY) {
      await sendWithResend(CONTACT_EMAIL, subject, html);
    } else if (SENDGRID_API_KEY) {
      await sendWithSendGrid(CONTACT_EMAIL, subject, html);
    }
    return NextResponse.json({ ok: true });
  } catch (err: any) {
    return NextResponse.json({ ok: false, error: err.message || "Failed to send email" }, { status: 500 });
  }
}
