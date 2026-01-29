import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

const RATE_LIMIT_WINDOW = 60_000; // 1 min
const RATE_LIMIT_MAX = 5;

// simple in-memory rate limit (per IP)
const ipHits = new Map<string, { count: number; time: number }>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for")?.split(",")[0] || "unknown";

    const now = Date.now();
    const record = ipHits.get(ip);

    if (record && now - record.time < RATE_LIMIT_WINDOW) {
      if (record.count >= RATE_LIMIT_MAX) {
        return NextResponse.json(
          { error: "Too many requests" },
          { status: 429 },
        );
      }
      record.count++;
    } else {
      ipHits.set(ip, { count: 1, time: now });
    }

    const {
      name,
      email,
      goal,
      message,
      company, // honeypot
    } = await req.json();

    // 🐝 Honeypot check
    if (company) {
      return NextResponse.json({ success: true });
    }

    if (!name || !email || !message) {
      return NextResponse.json({ error: "Missing fields" }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // 1️⃣ Admin email
    await transporter.sendMail({
      from: `"Website Contact" <${process.env.SMTP_EMAIL}>`,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Website Enquiry Request – ${goal}`,
      html: `
        <h2>New Website Enquiry Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Goal:</b> ${goal}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    // 2️⃣ Auto-reply to user
    await transporter.sendMail({
      from: `"Your Company" <${process.env.SMTP_EMAIL}>`,
      to: email,
      subject: "We received your request ✔",
      html: `
        <p>Hi ${name},</p>

        <p>Thanks for reaching out. We've successfully received your request regarding <b>${goal}</b>.</p>

        <p>Our team will review your message and get back to you within <b>24 hours</b>.</p>

        <br/>
        <p>— Team Your Company</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Email failed" }, { status: 500 });
  }
}
