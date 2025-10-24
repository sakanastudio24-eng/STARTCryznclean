import { NextRequest, NextResponse } from "next/server";

/**
 * POST /api/booking-request
 * 
 * Handles booking requests from the /booking page.
 * Currently logs the payload and returns success.
 * TODO: Integrate with email service and/or booking vendor.
 */
export async function POST(req: NextRequest) {
  try {
    const payload = await req.json();
    
    // Log the booking request for debugging
    console.log("=== New Booking Request ===");
    console.log("Contact:", payload.contact);
    console.log("Location:", payload.location);
    console.log("Items:", payload.items?.length || 0, "package(s)");
    console.log("Total Vehicles:", payload.totalVehicles);
    console.log("Total Amount: $", payload.totalAmount);
    console.log("Preferred Date:", payload.appointment?.preferredDate);
    console.log("Preferred Time:", payload.appointment?.preferredTime);
    console.log("Notes:", payload.notes || "(none)");
    console.log("===========================");
    
    // TODO: Send confirmation email to customer
    // TODO: Send notification email to business
    // TODO: Integrate with Setmore API or other booking system
    // TODO: Store in database if needed
    
    // Simulate processing delay (remove in production)
    await new Promise(resolve => setTimeout(resolve, 500));
    
    // Return success
    return NextResponse.json({ 
      ok: true,
      message: "Booking request received successfully",
      bookingId: `BK-${Date.now()}` // Mock booking ID
    });
    
  } catch (error) {
    console.error("Error processing booking request:", error);
    
    return NextResponse.json(
      { 
        ok: false, 
        error: "Failed to process booking request" 
      },
      { status: 500 }
    );
  }
}




