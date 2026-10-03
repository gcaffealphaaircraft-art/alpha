import { NextResponse } from "next/server";

const RECIPIENT = "info@alphaircraft.com";
const CC_RECIPIENTS = [
  "intsales@alphaaircraft.com",
  "gcaffe.abhishek@gmail.com",
];

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getEmailProvider() {
  const hasApiKey = Boolean(process.env.RESEND_API_KEY);
  const hasFromAddress = Boolean(process.env.RESEND_FROM_EMAIL);

  if (hasApiKey !== hasFromAddress) {
    return null;
  }

  return hasApiKey ? "resend" : "formsubmit";
}

export const dynamic = "force-dynamic";

export async function GET() {
  const provider = getEmailProvider();
  if (!provider) {
    return NextResponse.json(
      {
        error:
          "Resend is only partially configured. Set both RESEND_API_KEY and RESEND_FROM_EMAIL, or remove both to use the default email service.",
      },
      { status: 503 },
    );
  }

  return NextResponse.json({ provider });
}

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  if (!isRecord(body)) {
    return NextResponse.json({ error: "Invalid request body." }, { status: 400 });
  }

  const { name, email, phone, message } = body;
  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof message !== "string" ||
    (phone !== undefined && typeof phone !== "string")
  ) {
    return NextResponse.json({ error: "Please provide valid contact details." }, { status: 400 });
  }

  const submission: ContactSubmission = {
    name: name.trim(),
    email: email.trim(),
    phone: typeof phone === "string" ? phone.trim() : "",
    message: message.trim(),
  };

  if (
    !submission.name ||
    submission.name.length > 200 ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(submission.email) ||
    submission.email.length > 254 ||
    submission.phone.length > 50 ||
    !submission.message ||
    submission.message.length > 5000
  ) {
    return NextResponse.json({ error: "Please provide valid contact details." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey && !from) {
    return NextResponse.json(
      { error: "Submit through the configured contact form provider." },
      { status: 503 },
    );
  }

  if (!apiKey || !from) {
    console.error("Resend requires both RESEND_API_KEY and RESEND_FROM_EMAIL.");
    return NextResponse.json(
      {
        error:
          "Resend is only partially configured. Set both RESEND_API_KEY and RESEND_FROM_EMAIL, or remove both to use the default email service.",
      },
      { status: 503 },
    );
  }

  let response: Response;
  try {
    response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [RECIPIENT],
        cc: CC_RECIPIENTS,
        reply_to: submission.email,
        subject: "New contact form message",
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Phone: ${submission.phone || "Not provided"}`,
          "",
          "Message:",
          submission.message,
        ].join("\n"),
      }),
    });
  } catch (error) {
    console.error("Unable to reach the email service:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }

  if (!response.ok) {
    const errorDetails = await response.text();
    console.error("Email service rejected the contact email:", response.status, errorDetails);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, provider: "resend" });
}
