// src/app/services/ecommerce/EcomClient.tsx
"use client";

import { motion } from "framer-motion";
import { ShoppingBag, CreditCard, BarChart } from "lucide-react";

export default function EcomClient() {
  return (
    <div className="relative w-full aspect-4/5 group">
      {/* Background Sharp Frame */}
      <div className="absolute -bottom-4 -left-4 w-full h-full border border-slate-200 -z-10 group-hover:border-sky-400/30 transition-colors duration-700" />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-full h-full bg-slate-900 p-8 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="space-y-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-sky-400 flex items-center justify-center">
              <ShoppingBag className="text-slate-900" size={20} />
            </div>
            <div className="px-3 py-1 bg-white/5 border border-white/10">
              <span className="text-[8px] font-black text-emerald-400 uppercase tracking-widest">
                System_Live
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Built for <br /> <span className="text-sky-400">Conversion.</span>
            </h2>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
              0.4s Checkout Speed
            </p>
          </div>
        </div>

        {/* Tactical Metrics Grid */}
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="space-y-1">
            <CreditCard size={14} className="text-sky-400" />
            <div className="text-xl font-black text-white italic tracking-tighter">
              SECURE
            </div>
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
              Payment Gateway
            </p>
          </div>
          <div className="space-y-1">
            <BarChart size={14} className="text-sky-400" />
            <div className="text-xl font-black text-white italic tracking-tighter">
              +80%
            </div>
            <p className="text-[8px] font-black text-slate-500 uppercase tracking-widest">
              Order Growth
            </p>
          </div>
        </div>

        {/* Progress Bar Watermark */}
        <div className="absolute bottom-0 left-0 h-1 bg-sky-400 w-full animate-pulse" />
      </motion.div>
    </div>
  );
}
