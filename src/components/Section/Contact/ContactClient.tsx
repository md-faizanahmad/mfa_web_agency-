// src/components/sections/contact/ContactClient.tsx
"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Send, CheckCircle2, Loader2 } from "lucide-react";
import { toast } from "react-toastify";
import { useContactForm } from "@/hooks/useContactForm";

export default function ContactClient() {
  const { status, error, submit, reset } = useContactForm();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submit(e.currentTarget);
  };

  // 🔔 Toast side-effects (professional pattern)
  useEffect(() => {
    if (status === "success") {
      toast.success("Your request has been sent successfully.");
    }

    if (status === "error" && error) {
      toast.error(error.message);
    }
  }, [status, error]);

  return (
    <div className="relative bg-brand-ice/30 rounded-[2.5rem] border border-brand-midnight/5 p-8 md:p-12 shadow-2xl shadow-brand-midnight/5 overflow-hidden">
      {/* Background Lighting Detail */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-brand-cobalt/5 blur-[100px] -z-10" />

      <AnimatePresence mode="wait">
        {status !== "success" ? (
          <motion.form
            key="form"
            onSubmit={handleSubmit}
            className="space-y-6"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, y: -20 }}
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-midnight/40 ml-1">
                  Full Name
                </label>
                <input
                  name="name"
                  required
                  type="text"
                  placeholder="John Doe"
                  className="w-full bg-white border border-brand-midnight/10 rounded-xl px-5 py-4 text-brand-midnight placeholder:text-brand-midnight/20 focus:outline-none focus:ring-2 focus:ring-brand-cobalt/20 focus:border-brand-cobalt transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-midnight/40 ml-1">
                  Company Email
                </label>
                <input
                  name="email"
                  required
                  type="email"
                  placeholder="john@company.com"
                  className="w-full bg-white border border-brand-midnight/10 rounded-xl px-5 py-4 text-brand-midnight placeholder:text-brand-midnight/20 focus:outline-none focus:ring-2 focus:ring-brand-cobalt/20 focus:border-brand-cobalt transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[10px] font-black uppercase tracking-widest text-brand-midnight/40 ml-1">
                  Mobile Number
                </label>
                <input
                  name="mobile"
                  required
                  type="tel"
                  inputMode="numeric"
                  maxLength={10}
                  placeholder="9876543210"
                  className="w-full bg-white border border-brand-midnight/10 rounded-xl px-5 py-4 text-brand-midnight placeholder:text-brand-midnight/20 focus:outline-none focus:ring-2 focus:ring-brand-cobalt/20 focus:border-brand-cobalt transition-all"
                />
              </div>

              {/* Honeypot */}
              <input
                type="text"
                name="company"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
              />
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-midnight/40 ml-1">
                The Goal
              </label>
              <select
                name="goal"
                className="w-full bg-white border border-brand-midnight/10 rounded-xl px-5 py-4 text-brand-midnight focus:outline-none focus:ring-2 focus:ring-brand-cobalt/20 focus:border-brand-cobalt transition-all appearance-none"
              >
                <option>New High-Performance Website</option>
                <option>SEO Strategy & Implementation</option>
                <option>System Speed Optimization</option>
                <option>Long-term Maintenance</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-brand-midnight/40 ml-1">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                placeholder="Briefly describe your current technical challenges..."
                className="w-full bg-white border border-brand-midnight/10 rounded-xl px-5 py-4 text-brand-midnight placeholder:text-brand-midnight/20 focus:outline-none focus:ring-2 focus:ring-brand-cobalt/20 focus:border-brand-cobalt transition-all resize-none"
              />
            </div>

            <button
              disabled={status === "sending"}
              type="submit"
              className="w-full bg-brand-midnight text-white font-black uppercase tracking-widest py-5 rounded-xl flex items-center justify-center gap-3 hover:bg-brand-cobalt transition-all disabled:opacity-50 group"
            >
              {status === "sending" ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  Launch Project Request
                  <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </>
              )}
            </button>
          </motion.form>
        ) : (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="flex flex-col items-center justify-center py-20 text-center space-y-6"
          >
            <div className="w-20 h-20 rounded-full bg-brand-cobalt/10 flex items-center justify-center text-brand-cobalt">
              <CheckCircle2 className="w-10 h-10" />
            </div>

            <div className="space-y-2">
              <h3 className="text-3xl font-black text-brand-midnight uppercase tracking-tighter">
                Transmission Received.
              </h3>
              <p className="text-muted-foreground font-medium">
                Our lead engineer will review your audit within 24 hours.
              </p>
            </div>

            <button
              onClick={reset}
              className="text-xs font-black uppercase tracking-[0.2em] text-brand-cobalt"
            >
              Back to form
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
