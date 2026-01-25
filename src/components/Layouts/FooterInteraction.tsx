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
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

  return (
    <div className="md:col-span-1">
      <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">
        Stay Updated
      </h4>
      <p className="text-brand-clay/60 text-sm mb-4">
        Get insights on performance and SEO.
      </p>

      <form onSubmit={handleSubmit} className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="email@address.com"
          className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-brand-olive transition-colors pr-12"
          required
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-brand-olive rounded-md hover:bg-opacity-80 transition-all"
        >
          {status === "success" ? (
            <CheckCircle2 className="w-4 h-4 text-white" />
          ) : (
            <ArrowRight className="w-4 h-4 text-white" />
          )}
        </button>
      </form>

      {status === "success" && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-brand-olive text-xs mt-3"
        >
          Thanks for subscribing!
        </motion.p>
      )}
    </div>
  );
}
