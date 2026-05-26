import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export async function POST(request: NextRequest) {
	try {
		const body: Record<string, unknown> = await request.json();
		const name = body.name as string | undefined;
		const email = body.email as string | undefined;
		const company = body.company as string | undefined;
		const message = body.message as string | undefined;
		const locale = body.locale as string | undefined;

		// Validate required fields
		if (!name || !email || !message) {
			return NextResponse.json(
				{ error: "Name, email, and message are required." },
				{ status: 400 },
			);
		}

		// In production, send email via Resend, SendGrid, etc.
		// For now, just log the submission
		console.log("Contact form submission:", {
			name,
			email,
			company,
			message,
			locale,
			timestamp: new Date().toISOString(),
		});

		// TODO: Store in Payload or send via email service
		// Example with Resend:
		// await resend.emails.send({
		//   from: 'Micklas Travels <noreply@micklas.travel>',
		//   to: 'hello@micklas.travel',
		//   subject: `New collaboration inquiry from ${name}`,
		//   text: `Name: ${name}\nEmail: ${email}\nCompany: ${company}\nMessage: ${message}`,
		// });

		return NextResponse.json(
			{ success: true, message: "Message received!" },
			{ status: 200 },
		);
	} catch (error) {
		console.error("Contact API error:", error);
		return NextResponse.json(
			{ error: "Internal server error" },
			{ status: 500 },
		);
	}
}

// Handle GET for health check
export async function GET() {
	return NextResponse.json({ status: "ok", service: "contact" });
}
