import sgMail from "@sendgrid/mail";
import { NextRequest, NextResponse } from "next/server";

const TO_EMAIL = "youthsportdevelopment.sl.lg@gmail.com";

export async function POST(req: NextRequest) {
  const apiKey = process.env.SENDGRID_API_KEY;
  if (!apiKey) {
    return NextResponse.json(
      { error: "Email service not configured." },
      { status: 503 }
    );
  }

  const body = await req.json();
  const { name, email, phone, type, message } = body;

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  // Basic email validation
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Invalid email address." }, { status: 400 });
  }

  sgMail.setApiKey(apiKey);

  const msg = {
    to: TO_EMAIL,
    from: {
      email: TO_EMAIL, // SendGrid requires a verified sender
      name: "YSD Website",
    },
    replyTo: { email, name },
    subject: `[${type || "General"}] New inquiry from ${name}`,
    text: [
      `Name: ${name}`,
      `Email: ${email}`,
      phone ? `Phone: ${phone}` : null,
      `Type: ${type || "General"}`,
      ``,
      `Message:`,
      message,
    ]
      .filter(Boolean)
      .join("\n"),
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <div style="background: linear-gradient(135deg,#1B56A4,#20A24C); padding: 32px; border-radius: 16px 16px 0 0;">
          <h2 style="color: #fff; margin: 0; font-size: 24px;">New Inquiry — YSD Website</h2>
          <p style="color: rgba(255,255,255,0.8); margin: 8px 0 0;">${type || "General"}</p>
        </div>
        <div style="background: #f6f5ff; padding: 32px; border-radius: 0 0 16px 16px;">
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #4f5a81; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #222d51; font-weight: 600;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #4f5a81; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Email</td>
              <td style="padding: 8px 0;"><a href="mailto:${email}" style="color: #225aa9;">${email}</a></td>
            </tr>
            ${
              phone
                ? `<tr>
              <td style="padding: 8px 0; color: #4f5a81; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Phone</td>
              <td style="padding: 8px 0; color: #222d51;">${phone}</td>
            </tr>`
                : ""
            }
          </table>
          <hr style="border: none; border-top: 1px solid #e3e7ff; margin: 24px 0;" />
          <p style="color: #4f5a81; font-size: 12px; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px;">Message</p>
          <p style="color: #222d51; line-height: 1.7; white-space: pre-wrap; margin: 0;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
        </div>
        <p style="text-align: center; color: #a1abd7; font-size: 12px; margin-top: 24px;">
          Youth Sport Development Sierra Leone · Freetown
        </p>
      </div>
    `,
  };

  try {
    await sgMail.send(msg);
    return NextResponse.json({ success: true });
  } catch (err: unknown) {
    console.error("SendGrid error:", err);
    return NextResponse.json(
      { error: "Failed to send message. Please try again." },
      { status: 500 }
    );
  }
}
