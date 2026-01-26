// src/components/layout/FooterInteraction.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";

export function FooterInteraction() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success">("idle");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  return (
    <div className="space-y-6">
      <div>
        <h4 className="text-white font-black text-[10px] uppercase tracking-[0.3em] mb-4">
          Stay Updated
        </h4>
        <p className="text-slate-400 text-sm">
          Get weekly insights on Next.js performance and SEO growth.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="relative group">
        <label htmlFor="footer-email" className="sr-only">
          Email Address
        </label>
        <input
          id="footer-email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@address.com"
          className="w-full bg-white/5 border border-white/10 rounded-xl px-5 py-4 text-sm text-white focus:outline-none focus:border-sky-400 focus:ring-1 focus:ring-sky-400 transition-all pr-14"
          required
        />
        <button
          type="submit"
          aria-label="Subscribe"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-sky-400 text-brand-midnight rounded-lg hover:bg-white transition-all disabled:opacity-50"
          disabled={status === "success"}
        >
          {status === "success" ? (
            <CheckCircle2 className="w-5 h-5" />
          ) : (
            <ArrowRight className="w-5 h-5" />
          )}
        </button>
      </form>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-sky-400 text-xs font-bold uppercase tracking-widest"
        >
          Transmission Received.
        </motion.p>
      )}
    </div>
  );
}
