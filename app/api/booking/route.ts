import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;
const FROM_EMAIL = CONTACT_EMAIL || "no-reply@cruiznclean.local";

const BookingSchema = z.object({
  customer: z.object({
    name: z.string().min(1),
    email: z.string().email(),
    phone: z.string().optional().default(""),
  }),
  vehicle: z.object({
    make: z.string().optional().default(""),
    model: z.string().optional().default(""),
    year: z.string().optional().default(""),
  }),
  location: z.object({
    address: z.string().optional().default(""),
    city: z.string().optional().default(""),
    zip: z.string().optional().default(""),
  }),
  selection: z.object({
    package: z.string().default("")
      .transform((v) => v || "custom"),
    addons: z.array(z.string()).optional().default([]),
    estPrice: z.number().optional(),
  }),
  notes: z.string().optional(),
});

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const parsed = BookingSchema.safeParse(data);
    if (!parsed.success) {
      return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
    }
    const { customer, vehicle, location, selection, notes } = parsed.data;

    const customerText = `Hi ${customer.name},\n\nThanks for your booking request with Cruiz n Clean!\n\nSummary:\n- Package: ${selection.package}\n- Add-ons: ${selection.addons?.join(", ") || "-"}\n- Est. Price: ${selection.estPrice ? `$${selection.estPrice}` : "-"}\n\nVehicle:\n- ${[vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(" ") || "-"}\n\nLocation:\n- ${[location.address, location.city, location.zip].filter(Boolean).join(", ") || "-"}\n\nNotes:\n${notes || "-"}\n\nPick your time here: ${process.env.NEXT_PUBLIC_SETMORE_URL}\n\nWe appreciate you!`;

    const ownerText = `New Booking Request\n\nCustomer: ${customer.name} <${customer.email}> ${customer.phone ? `(${customer.phone})` : ""}\n\nVehicle: ${[vehicle.year, vehicle.make, vehicle.model].filter(Boolean).join(" ") || "-"}\nLocation: ${[location.address, location.city, location.zip].filter(Boolean).join(", ") || "-"}\n\nSelection: ${JSON.stringify(selection, null, 2)}\n\nNotes: ${notes || "-"}`;

    if (RESEND_API_KEY && CONTACT_EMAIL) {
      try {
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: customer.email,
            subject: `Cruiz n Clean – Booking Request Received`,
            text: customerText,
          }),
        });
        await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            Authorization: `Bearer ${RESEND_API_KEY}`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            from: FROM_EMAIL,
            to: CONTACT_EMAIL,
            subject: `New Booking Request – ${customer.name} – ${selection.package}`,
            text: ownerText,
          }),
        });
      } catch (e) {
        // swallow errors to avoid blocking
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    return NextResponse.json({ ok: true });
  }
}
