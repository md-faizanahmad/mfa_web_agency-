// src/components/sections/services/ServiceGrid.tsx
"use client";

import { motion } from "framer-motion";
import {
  Zap,
  Layout,
  ShoppingBag,
  Database,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import { useState } from "react";

interface ServiceDetail {
  id: string;
  title: string;
  icon: LucideIcon;
  features: string[];
  desc: string;
}

const detailedServices: ServiceDetail[] = [
  {
    id: "web-dev",
    title: "Web Development",
    icon: Layout,
    features: [
      "Custom Modern Design",
      "Perfect Mobile View",
      "Fast Loading Speed",
    ],
    desc: "We build professional websites that work perfectly on every screen. No templates—just custom sites that make your business look like a leader.",
  },
  {
    id: "e-com",
    title: "E-Commerce",
    icon: ShoppingBag,
    features: [
      "Online Payment Setup",
      "Easy Product Listing",
      "Secure Shopping Cart",
    ],
    desc: "Start selling your products online with a high-speed store. We handle the checkout and security so you can focus on your sales.",
  },
  {
    id: "landing",
    title: "Landing Pages",
    icon: Zap,
    features: [
      "High Conversion Layout",
      "Clear Call to Action",
      "Ad-Friendly Structure",
    ],
    desc: "Need more leads? Our landing pages are designed to turn visitors into paying customers by keeping the message simple and the action clear.",
  },
  {
    id: "admin",
    title: "Store Management",
    icon: Database,
    features: [
      "Easy Dashboard Access",
      "Inventory Tracking",
      "Order Management",
    ],
    desc: "Manage your business without the headache. We build easy-to-use admin panels so you can track orders and update stock in seconds.",
  },
];
export default function ServiceGrid() {
  const [active, setActive] = useState<string>(detailedServices[0].id);

  return (
    <section className="py-24 px-6 bg-slate-50/50">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
        {/* Navigation - Simple & Tactical */}
        <div className="lg:col-span-5 space-y-3">
          <div className="mb-8">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.3em] font-mono"></span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tighter uppercase mt-2">
              How we help <br />{" "}
              <span className="text-sky-800  animate-pulse">
                Your Business.
              </span>
            </h2>
          </div>

          {detailedServices.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`w-full cursor-pointer text-left p-5 rounded-2xl border transition-all duration-500 flex items-center justify-between group ${
                active === s.id
                  ? "bg-slate-900 border-slate-900 text-white shadow-2xl shadow-slate-200 translate-x-2"
                  : "bg-white border-slate-100 text-slate-500 hover:border-sky-400/50"
              }`}
            >
              <div className="flex items-center gap-4">
                <s.icon
                  className={`w-5 h-5 ${active === s.id ? "text-sky-400" : "text-slate-300"}`}
                />
                <span className="font-black uppercase tracking-widest text-xs">
                  {s.title}
                </span>
              </div>
              <ArrowRight
                className={`w-4 h-4 transition-transform duration-500 ${active === s.id ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`}
              />
            </button>
          ))}
        </div>

        {/* Content - Clean & Premium */}
        <div className="lg:col-span-7 bg-white rounded-[2.5rem] border border-slate-100 p-8 md:p-12 shadow-2xl shadow-slate-200/40 relative overflow-hidden">
          {/* Subtle Background Watermark */}
          {detailedServices.map(
            (s) =>
              s.id === active && (
                <div
                  key={`bg-${s.id}`}
                  className="absolute -right-8 -bottom-8 opacity-[0.03] text-sky-500 pointer-events-none"
                >
                  <s.icon size={300} strokeWidth={1} />
                </div>
              ),
          )}

          {detailedServices.map(
            (s) =>
              s.id === active && (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="space-y-8 relative z-10"
                >
                  <div className="space-y-4">
                    <h3 className="text-3xl md:text-5xl font-black text-slate-900 uppercase tracking-tighter">
                      {s.title}
                    </h3>
                    <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
                      {s.desc}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                    {s.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 bg-slate-50 rounded-xl border border-slate-100 group hover:border-sky-400/30 transition-colors"
                      >
                        <div className="w-1.5 h-1.5 rounded-full bg-sky-400" />
                        <span className="font-black text-[10px] text-slate-600 uppercase tracking-widest">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-6">
                    <span className="text-[10px] font-black text-slate-300 tracking-[0.3em] uppercase">
                      Build_Code: {s.id}_v2
                    </span>
                    <button className="w-full sm:w-auto bg-sky-400 text-slate-900 px-10 py-4 rounded-xl font-black uppercase tracking-widest text-[10px] hover:bg-slate-900 hover:text-white transition-all shadow-lg shadow-sky-400/20">
                      Get Started
                    </button>
                  </div>
                </motion.div>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
