import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { SETMORE_URL } from "../../../lib/config";

const BookingSchema = z.object({
  customer: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional().nullable(),
  }),
  vehicle: z.object({
    make: z.string().optional().nullable(),
    model: z.string().optional().nullable(),
    year: z.string().optional().nullable(),
  }),
  location: z.object({
    address: z.string().optional().nullable(),
    city: z.string().optional().nullable(),
    zip: z.string().optional().nullable(),
  }),
  selection: z.object({
    package: z.string(),
    addons: z.array(z.string()),
    estPrice: z.number().optional(),
  }),
  notes: z.string().optional().nullable(),
});

const RESEND_API_KEY = process.env.RESEND_API_KEY;
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || process.env.RESEND_FROM;
const BRIAN_EMAIL = process.env.BRIAN_EMAIL || process.env.CONTACT_EMAIL || process.env.RESEND_TO;

export async function POST(req: NextRequest) {
  try {
    const json = await req.json();
    const parsed = BookingSchema.safeParse(json);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }
    const data = parsed.data;

    const customerHtml = `
      <div style="font-family:Inter,system-ui,-apple-system;line-height:1.6;color:#111">
        <h2>Thanks for your booking request, ${data.customer.name}!</h2>
        <p>Here is a summary of your selection:</p>
        <ul>
          <li><strong>Package:</strong> ${data.selection.package || "-"}</li>
          <li><strong>Add-ons:</strong> ${data.selection.addons.join(", ") || "-"}</li>
          <li><strong>Estimated price:</strong> ${typeof data.selection.estPrice === 'number' ? `$${data.selection.estPrice.toFixed(2)}` : "-"}</li>
        </ul>
        <p>Next step: pick a time that works for you.</p>
        <p>
          <a href="${SETMORE_URL}" target="_blank" rel="noopener noreferrer" style="display:inline-block;background:#0EA5E9;color:#fff;padding:10px 16px;border-radius:10px;text-decoration:none;font-weight:600">Pick your time</a>
        </p>
        <p style="font-size:12px;color:#555">Bring easy access to the vehicle, remove personal items, and ensure we can reach a power outlet if available.</p>
      </div>
    `;

    const brianText = `New Booking Request – ${data.customer.name} – ${data.selection.package}\n\n` +
      JSON.stringify(data, null, 2);

    if (RESEND_API_KEY && CONTACT_EMAIL && BRIAN_EMAIL) {
      const headers = {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      } as const;

      // Send to Brian
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers,
          body: JSON.stringify({
            from: CONTACT_EMAIL,
            to: BRIAN_EMAIL,
            subject: `New Booking Request – ${data.customer.name} – ${data.selection.package}`,
            text: brianText,
          }),
        });
      } catch {}

      // Send to customer
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers,
          body: JSON.stringify({
            from: CONTACT_EMAIL,
            to: data.customer.email,
            subject: `We received your booking request` ,
            html: customerHtml,
          }),
        });
      } catch {}
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: false, error: "Unexpected error" }, { status: 500 });
  }
}
