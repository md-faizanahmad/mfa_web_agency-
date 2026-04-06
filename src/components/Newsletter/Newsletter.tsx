"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setMsg("");

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Failed");

      setMsg("Check your email.");
      setEmail("");
    } catch {
      setMsg("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-10 px-6">
      <div className="max-w-xl mx-auto text-center space-y-6">
        <h2 className="text-3xl md:text-4xl font-semibold tracking-tight">
          Get a free website audit
        </h2>

        <p className="text-neutral-500 text-sm md:text-base">
          We’ll show exactly what’s hurting your conversions and how to fix it.
        </p>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col sm:flex-row gap-3 mt-6"
        >
          <input
            type="email"
            required
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 px-4 py-3 rounded-xl border border-neutral-300 focus:outline-none focus:ring-2 focus:ring-black"
          />

          {/* Honeypot */}
          <input
            type="text"
            name="company"
            className="hidden"
            tabIndex={-1}
            autoComplete="off"
          />

          <button
            disabled={loading}
            className="px-6 py-3 rounded-xl bg-black text-white text-sm font-medium hover:opacity-90 transition"
          >
            {loading ? "Sending..." : "Get Audit"}
          </button>
        </form>

        {msg && <p className="text-sm text-neutral-500">{msg}</p>}
      </div>
    </section>
  );
}
