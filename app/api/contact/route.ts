
import { sql } from "@/lib/db";

const allowedLocalities = [
  "Hebbal",
  "Yelahanka",
  "Sarjapura Road",
  "Whitefield",
];

export async function POST(request: Request) {
  try {
    // Prevent unexpectedly large request bodies.
    const contentLength = Number(
      request.headers.get("content-length") || 0
    );

    if (contentLength > 10_000) {
      return Response.json(
        { success: false, message: "Request is too large." },
        { status: 413 }
      );
    }

    const body = await request.json();

    const name =
      typeof body.name === "string" ? body.name.trim() : "";

    const rawPhone =
      typeof body.phone === "string" ? body.phone.trim() : "";

    const locality =
      typeof body.locality === "string"
        ? body.locality.trim()
        : "";

    // Validate name.
    if (name.length < 2 || name.length > 150) {
      return Response.json(
        { success: false, message: "Please enter a valid name." },
        { status: 400 }
      );
    }

    // Normalize and validate Indian mobile number.
    const phone = rawPhone.replace(/[\s()-]/g, "");
    const mobile = phone.replace(/^\+91/, "").replace(/^91/, "");

    if (!/^[6-9]\d{9}$/.test(mobile)) {
      return Response.json(
        {
          success: false,
          message: "Please enter a valid Indian mobile number.",
        },
        { status: 400 }
      );
    }

    // Validate locality against supported options.
    if (!allowedLocalities.includes(locality)) {
      return Response.json(
        { success: false, message: "Please select a valid locality." },
        { status: 400 }
      );
    }

    // Save enquiry in PostgreSQL.
    const result = await sql`
      INSERT INTO contact_enquiries (name, phone, locality)
      VALUES (${name}, ${`+91${mobile}`}, ${locality})
      RETURNING id, created_at
    `;

    return Response.json(
      {
        success: true,
        message: "Your enquiry has been submitted successfully.",
        enquiry: {
          id: result[0].id,
          createdAt: result[0].created_at,
        },
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Contact API error:", error);

    const errorMessage =
      error instanceof Error ? error.message : String(error);

    console.error("Contact API error message:", errorMessage);

    return Response.json(
      {
        success: false,
        message: "Unable to submit your enquiry. Please try again.",
      },
      { status: 500 }
    );
  }
}
