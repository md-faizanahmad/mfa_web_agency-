"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function BonusContactCard() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setStatus("success");
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
        }, 2000);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  return (
    <>
      {/* --- Bonus Card --- */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative h-112.5 w-90 m-auto mt-18 flex flex-col border-2 border-primary/20 rounded-3xl overflow-hidden bg-card transition-all hover:border-primary/50"
      >
        <div className="absolute inset-0 z-0">
          <Image
            src="/hello.png"
            alt="Hello"
            fill
            className="object-contain object-bottom translate-y-10 opacity-30 transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-b from-card via-card/90 to-transparent" />
        </div>

        <div className="relative z-10 p-8 md:p-10">
          <span className="text-primary font-bold text-sm tracking-widest uppercase">
            Bonus Reason
          </span>
          <h3 className="text-3xl font-bold mt-2">
            We might work together soon...
          </h3>
          <p className="text-muted-foreground mt-4 max-w-sm">
            Ready to build a structured digital foundation? Let’s start the
            conversation.
          </p>
          <button
            onClick={() => setIsOpen(true)}
            className="mt-8 rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground hover:shadow-lg hover:shadow-primary/30 transition-all active:scale-95"
          >
            Start a project request
          </button>
        </div>
      </motion.div>

      {/* --- Modal --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 mt-18 z-100 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-xl bg-card border border-border rounded-3xl p-8 shadow-2xl"
            >
              <div className="flex justify-between items-start mb-6">
                <h3 className="text-2xl font-bold">Project Details</h3>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-muted-foreground"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                {/* Honeypot */}
                <input
                  type="text"
                  name="company"
                  className="hidden"
                  tabIndex={-1}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    name="name"
                    placeholder="Full Name"
                    className="w-full rounded-xl bg-background border border-border p-3 outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    required
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    className="w-full rounded-xl bg-background border border-border p-3 outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    required
                    name="mobile"
                    placeholder="Mobile Number (e.g. 9876543210)"
                    className="w-full rounded-xl bg-background border border-border p-3 outline-none focus:ring-2 focus:ring-primary"
                  />
                  <input
                    required
                    name="businessName"
                    placeholder="Business Name"
                    className="w-full rounded-xl bg-background border border-border p-3 outline-none focus:ring-2 focus:ring-primary"
                  />
                </div>

                <select
                  required
                  name="budget"
                  className="w-full rounded-xl bg-background border border-border p-3 outline-none focus:ring-2 focus:ring-primary"
                >
                  <option value="">Select Budget (INR)</option>
                  <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                  <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                  <option value="3L+">₹3,00,000+</option>
                </select>

                <textarea
                  required
                  name="description"
                  rows={3}
                  placeholder="Tell us about the project..."
                  className="w-full rounded-xl bg-background border border-border p-3 outline-none focus:ring-2 focus:ring-primary resize-none"
                />

                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="w-full py-4 rounded-xl bg-primary text-primary-foreground font-bold transition-all disabled:opacity-50"
                >
                  {status === "loading"
                    ? "Sending..."
                    : status === "success"
                      ? "Sent Successfully! ✓"
                      : "Submit Request"}
                </button>
                {status === "error" && (
                  <p className="text-destructive text-center text-sm">
                    Something went wrong. Try again.
                  </p>
                )}
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
