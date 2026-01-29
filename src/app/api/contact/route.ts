// src/app/api/contact/route.ts
import { contactSchema } from "@/validation/contact.schema";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { ZodError } from "zod";

export const runtime = "nodejs";

interface ErrorResponse {
  error: string;
}

interface SuccessResponse {
  success: true;
}

export async function POST(req: Request): Promise<NextResponse> {
  try {
    // 1️⃣ Parse request body safely
    const body: unknown = await req.json();

    // 2️⃣ Validate with Zod
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      const zodError: ZodError = parsed.error;

      return NextResponse.json<ErrorResponse>(
        { error: zodError.issues[0]?.message ?? "Invalid input" },
        { status: 400 },
      );
    }

    const { name, email, mobile, goal, message, company } = parsed.data;

    // 3️⃣ Honeypot (silent success)
    if (company) {
      return NextResponse.json<SuccessResponse>({ success: true });
    }

    // 4️⃣ Ensure env vars exist (fail fast, clear logs)
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.RECEIVER_EMAIL
    ) {
      console.error("Missing SMTP environment variables");
      return NextResponse.json<ErrorResponse>(
        { error: "Email service not configured" },
        { status: 500 },
      );
    }

    // 5️⃣ Create transporter (Gmail)
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 6️⃣ Send admin notification
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `New Website Enquiry – ${goal ?? "General"}`,
      html: `
        <h2>New Contact Submission</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Mobile:</b> ${mobile}</p>
        <p><b>Goal:</b> ${goal ?? "-"}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    });

    // 7️⃣ Auto-reply to user
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: "We received your request ✔",
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for contacting us. We’ve received your message and will get back to you within <b>24 hours</b>.</p>
        <br/>
        <p>— Team</p>
      `,
    });

    // 8️⃣ Success response
    return NextResponse.json<SuccessResponse>({ success: true });
  } catch (err: unknown) {
    console.error("CONTACT API ERROR:", err);

    return NextResponse.json<ErrorResponse>(
      { error: "Failed to process your request. Please try again later." },
      { status: 500 },
    );
  }
}
