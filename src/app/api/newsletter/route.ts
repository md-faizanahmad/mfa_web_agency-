// /app/api/newsletter/route.ts

const RATE_LIMIT = new Map<string, number>();

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") || "unknown";

    // 🔒 Rate limit (simple)
    const now = Date.now();
    const last = RATE_LIMIT.get(ip) || 0;

    if (now - last < 5000) {
      return new Response("Too many requests", { status: 429 });
    }

    RATE_LIMIT.set(ip, now);

    const body = await req.json();
    const { email, company } = body;

    // 🛑 Honeypot (bot detection)
    if (company) {
      return new Response("Bot detected", { status: 400 });
    }

    // ✅ Validation
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return new Response("Invalid email", { status: 400 });
    }

    // 📩 Brevo API
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": process.env.BREVO_API_KEY!,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [2],
        updateEnabled: true,
      }),
    });

    if (!res.ok) {
      return new Response("Email service failed", { status: 500 });
    }

    return Response.json({ success: true });
  } catch {
    return new Response("Server error", { status: 500 });
  }
}
