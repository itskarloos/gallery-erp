import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const _payload = await request.json();
    // If you're not using the payload, prefix it with an underscore
    // If you plan to use it later, remove the underscore and process the payload here

    // For example, you might log the payload:
    // console.log('Received webhook payload:', _payload);

    // Return a response
    return NextResponse.json(
      { message: "Webhook received successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// You can also export other HTTP methods if needed, e.g.:
// export async function GET(request: NextRequest) {
//   // Handle GET requests
// }
