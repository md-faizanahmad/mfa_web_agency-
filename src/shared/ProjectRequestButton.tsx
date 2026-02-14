"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function ProjectRequestButton({
  className,
}: {
  className?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    // Mapping description to message to satisfy your Zod schema
    const payload = { ...data, message: data.description };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok) throw new Error(result.error || "Failed to send");

      alert("Project request sent successfully!");
      setIsOpen(false);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className={
          className ||
          "rounded-full bg-primary px-8 py-4 font-bold text-primary-foreground shadow-lg hover:brightness-110 transition-all"
        }
      >
        Request New Project
      </button>

      <AnimatePresence>
        {isOpen && (
          // 1. Backdrop with heavy blur and centering flexbox
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-background/60 backdrop-blur-xl" // Modern glass effect blur
            />

            {/* 2. Modal Container: Mobile-first sizing */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-[95%] sm:max-w-xl max-h-[90vh] overflow-y-auto rounded-3xl border border-border bg-card p-6 md:p-10 shadow-2xl no-scrollbar"
            >
              <div className="flex justify-between items-center mb-8">
                <div>
                  <h3 className="text-2xl font-bold tracking-tight">
                    Project Details
                  </h3>
                  <p className="text-sm text-muted-foreground mt-1">
                    Tell us about your vision.
                  </p>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 hover:bg-secondary rounded-full transition-colors"
                >
                  ✕
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <input type="hidden" name="company" />

                {/* Grid: 1 col on mobile, 2 cols on tablet+ */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase ml-1 opacity-70">
                      Full Name
                    </label>
                    <input
                      required
                      name="name"
                      placeholder="Enter name"
                      className="w-full rounded-2xl border border-border bg-background/50 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase ml-1 opacity-70">
                      Email Address
                    </label>
                    <input
                      required
                      name="email"
                      type="email"
                      placeholder="email@example.com"
                      className="w-full rounded-2xl border border-border bg-background/50 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase ml-1 opacity-70">
                      Mobile Number
                    </label>
                    <input
                      required
                      name="mobile"
                      placeholder="10-digit number"
                      className="w-full rounded-2xl border border-border bg-background/50 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-bold uppercase ml-1 opacity-70">
                      Business Name
                    </label>
                    <input
                      required
                      name="businessName"
                      placeholder="Company Name"
                      className="w-full rounded-2xl border border-border bg-background/50 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase ml-1 opacity-70">
                    Budget (INR)
                  </label>
                  <select
                    required
                    name="budget"
                    className="w-full rounded-2xl border border-border bg-background/50 p-4 text-sm focus:ring-2 focus:ring-primary outline-none transition-all appearance-none cursor-pointer"
                  >
                    <option value="">Select your budget range</option>
                    <option value="50k-1L">₹50,000 - ₹1,00,000</option>
                    <option value="1L-3L">₹1,00,000 - ₹3,00,000</option>
                    <option value="3L+">₹3,00,000+</option>
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-bold uppercase ml-1 opacity-70">
                    Description
                  </label>
                  <textarea
                    required
                    name="description"
                    rows={4}
                    placeholder="Describe your project goals..."
                    className="w-full rounded-2xl border border-border bg-background/50 p-4 text-sm focus:ring-2 focus:ring-primary outline-none resize-none transition-all"
                  />
                </div>

                {error && (
                  <p className="text-destructive text-xs text-center font-medium">
                    {error}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full rounded-2xl bg-primary py-4 font-bold text-primary-foreground shadow-lg hover:opacity-90 disabled:opacity-50 transition-all mt-4"
                >
                  {loading ? "Processing..." : "Submit Project Request"}
                </button>
              </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
