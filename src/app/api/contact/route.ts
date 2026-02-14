// src/app/api/contact/route.ts
import { contactSchema } from "@/validation/contact.schema";
import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // 1. Validate with Zod
    const parsed = contactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json(
        { error: parsed.error.issues[0]?.message ?? "Invalid input" },
        { status: 400 },
      );
    }

    const { name, email, mobile, businessName, budget, description, company } =
      parsed.data;

    // 2. Honeypot check
    if (company) {
      return NextResponse.json({ success: true });
    }

    // 3. SMTP Config Check
    if (
      !process.env.EMAIL_USER ||
      !process.env.EMAIL_PASS ||
      !process.env.RECEIVER_EMAIL
    ) {
      console.error("SMTP credentials missing in environment variables");
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 },
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // 4. Admin Email Content
    const adminEmail = {
      from: process.env.EMAIL_USER,
      to: process.env.RECEIVER_EMAIL,
      replyTo: email,
      subject: `🚀 New Project: ${businessName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
          <h2 style="color: #4285F4;">New Project Request</h2>
          <p><b>Client Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Mobile:</b> ${mobile}</p>
          <p><b>Business:</b> ${businessName}</p>
          <p><b>Budget:</b> <span style="color: #34A853;">${budget}</span></p>
          <p><b>Description:</b></p>
          <div style="background: #f4f4f4; padding: 15px; border-radius: 5px;">${description}</div>
        </div>
      `,
    };

    // 5. Client Confirmation Email
    const clientEmail = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Project Request Received - ${businessName}`,
      html: `
        <div style="font-family: sans-serif; padding: 20px;">
          <h3>Hi ${name},</h3>
          <p>Thank you for reaching out! We've received your project request for <b>${businessName}</b>.</p>
          <p>Our team will review your details and budget (<b>${budget}</b>) and get back to you within 24 hours.</p>
          <br/>
          <p>Best regards,<br/>Team</p>
        </div>
      `,
    };

    // Parallel execution for faster response
    await Promise.all([
      transporter.sendMail(adminEmail),
      transporter.sendMail(clientEmail),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("API Error:", err);
    return NextResponse.json(
      { error: "Failed to send request" },
      { status: 500 },
    );
  }
}
