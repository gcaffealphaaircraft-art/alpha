import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RECIPIENT = "info@alphaaircraft.com";
const CC_RECIPIENTS = [
  "intsales@alphaaircraft.com",
  "gcaffe.abhishek@gmail.com",
  "gcaffe.shashank@gmail.com",
];
const ACKNOWLEDGEMENT_TEXT = [
  "Thank you for contacting Alpha Aircraft Systems.",
  "",
  "We've received your inquiry and a member of our team will be in touch soon.",
  "",
  "Best regards,",
  "Team",
  "Alpha Aircraft Systems",
].join("\n");
const ACKNOWLEDGEMENT_HTML = `
  <p>Thank you for contacting <strong> Alpha Aircraft Systems</strong>.</p>
  <p>We've received your inquiry and a member of our team will be in touch soon.</p>
<p>Best regards</p>
<p>Team</p>
<p>Alpha Aircraft Systems</p>
  `;
const ACKNOWLEDGEMENT_SUBJECT = "We received your message - Alpha Aircraft Systems";

type ContactSubmission = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type EmailProvider = "resend" | "smtp";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null;
}

function getEmailProvider(): EmailProvider | null {
  const hasApiKey = Boolean(process.env.RESEND_API_KEY);
  const hasFromAddress = Boolean(process.env.RESEND_FROM_EMAIL);
  const hasCompleteSmtpSettings = [
    process.env.SMTP_HOST,
    process.env.SMTP_PORT,
    process.env.SMTP_USER,
    process.env.SMTP_PASS,
    process.env.SMTP_FROM_EMAIL,
  ].every(Boolean);

  if (hasCompleteSmtpSettings) {
    return "smtp";
  }

  if (hasApiKey && hasFromAddress) {
    return "resend";
  }

  return null;
}

export const dynamic = "force-dynamic";

export async function GET() {
  const provider = getEmailProvider();
  if (!provider) {
    return NextResponse.json(
      {
        error:
          "Contact email is not configured. Set all SMTP settings or both Resend settings in the hosting environment.",
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

  const provider = getEmailProvider();

  if (!provider) {
    return NextResponse.json(
      {
        error:
          "Contact email is not configured. Set all SMTP settings or both Resend settings in the hosting environment.",
      },
      { status: 503 },
    );
  }

  if (provider === "smtp") {
    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const from = process.env.SMTP_FROM_EMAIL;

    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      return NextResponse.json(
        { error: "SMTP_PORT must be a valid port number." },
        { status: 503 },
      );
    }

    try {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure:
          process.env.SMTP_SECURE === undefined
            ? port === 465
            : process.env.SMTP_SECURE.toLowerCase() === "true",
        auth: { user, pass },
      });

      await transporter.sendMail({
        from,
        to: RECIPIENT,
        cc: CC_RECIPIENTS,
        replyTo: submission.email,
        subject: "New contact form message",
        text: [
          `Name: ${submission.name}`,
          `Email: ${submission.email}`,
          `Phone: ${submission.phone || "Not provided"}`,
          "",
          "Message:",
          submission.message,
        ].join("\n"),
      });
      await transporter.sendMail({
        from,
        to: submission.email,
        replyTo: RECIPIENT,
        subject: ACKNOWLEDGEMENT_SUBJECT,
        text: ACKNOWLEDGEMENT_TEXT,
        html: ACKNOWLEDGEMENT_HTML,
      });
    } catch (error) {
      console.error("SMTP contact email or acknowledgement delivery failed:", error);
      return NextResponse.json(
        { error: "Unable to send your message right now. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ success: true, provider: "smtp" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.RESEND_FROM_EMAIL;

  if (!apiKey || !from) {
    console.error("Resend settings were incomplete while sending the contact email.");
    return NextResponse.json(
      { error: "Resend email settings are incomplete." },
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

  let acknowledgementResponse: Response;
  try {
    acknowledgementResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to: [submission.email],
        reply_to: RECIPIENT,
        subject: ACKNOWLEDGEMENT_SUBJECT,
        text: ACKNOWLEDGEMENT_TEXT,
        html: ACKNOWLEDGEMENT_HTML,
      }),
    });
  } catch (error) {
    console.error("Unable to send the contact acknowledgement email:", error);
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }

  if (!acknowledgementResponse.ok) {
    const errorDetails = await acknowledgementResponse.text();
    console.error(
      "Email service rejected the contact acknowledgement:",
      acknowledgementResponse.status,
      errorDetails,
    );
    return NextResponse.json(
      { error: "Unable to send your message right now." },
      { status: 502 },
    );
  }

  return NextResponse.json({ success: true, provider: "resend" });
}
