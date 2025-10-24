import { NextRequest, NextResponse } from "next/server";

const CONTACT_EMAIL = process.env.CONTACT_EMAIL;
const RESEND_API_KEY = process.env.RESEND_API_KEY;

export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    
    // Build email body based on payload structure
    let body = "";
    
    // New booking format (from /booking page)
    if (data.contact && data.items) {
      body = `New booking request from ${data.contact.fullName} (${data.contact.email})\n\n`;
      body += `Phone: ${data.contact.phone}\n`;
      body += `Location: ${data.location?.city || "-"}, ${data.location?.zip || "-"}\n`;
      if (data.location?.address) body += `Address: ${data.location.address}\n`;
      body += `\nPackages:\n`;
      data.items.forEach((item: any, idx: number) => {
        body += `  ${idx + 1}. ${item.packageName} (${item.sizeLabel}) × ${item.qty} = $${item.totalPrice}\n`;
        if (item.vehicle?.make || item.vehicle?.model) {
          body += `     Vehicle: ${item.vehicle.year || ""} ${item.vehicle.make || ""} ${item.vehicle.model || ""} ${item.vehicle.color || ""}\n`;
        }
      });
      body += `\nTotal: $${data.totalAmount} (${data.totalVehicles} vehicle(s))\n`;
      if (data.appointment?.preferredDate) {
        body += `Preferred Date: ${data.appointment.preferredDate}\n`;
      }
      if (data.appointment?.preferredTime) {
        body += `Preferred Time: ${data.appointment.preferredTime}\n`;
      }
      if (data.notes) {
        body += `\nNotes: ${data.notes}\n`;
      }
    }
    // Legacy format (from old /request page)
    else {
      body = `New request from ${data.fullName || "Unknown"} (${data.email || "-"})\n\n`;
      body += `Phone: ${data.phone || "-"}\n`;
      body += `Vehicle: ${data.vehicleSize || "-"} ${data.year || ""} ${data.make || ""} ${data.model || ""} (${data.color || ""})\n`;
      body += `Address: ${data.address || "-"}, ${data.city || "-"} ${data.zip || "-"}\n`;
      body += `Parking: ${data.parking ? "Yes" : "No"}, Power: ${data.power ? "Yes" : "No"}, Water: ${data.water ? "Yes" : "No"}\n`;
      body += `Notes: ${data.notes || "-"}\n`;
      body += `Services: ${data.services?.map((s: any) => s.title || s.packageName).join(", ") || "-"}`;
    }

    // Send email if configured
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
            subject: `Cruiz n Clean Booking Request from ${data.contact?.fullName || data.fullName || "Customer"}`,
            text: body,
          }),
        });
      } catch (e) {
        console.error("Email send failed:", e);
        // Continue anyway - don't fail the request
      }
    }

    return NextResponse.json({ ok: true });
  } catch (e) {
    console.error("Request processing error:", e);
    // Return success anyway to avoid customer-facing errors
    return NextResponse.json({ ok: true });
  }
}
