// src/app/services/seo/SEOClient.tsx
"use client";

import { motion } from "framer-motion";
import { Search, TrendingUp, Activity, BarChart3 } from "lucide-react";

export default function SEOClient() {
  return (
    <div className="relative w-full aspect-4/5 group">
      {/* Background Frame */}
      <div className="absolute -top-4 -left-4 w-full h-full border border-slate-200 -z-10 group-hover:border-sky-400/30 transition-colors duration-700" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="w-full h-full bg-slate-50 border border-slate-100 p-8 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="space-y-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-slate-900 flex items-center justify-center">
              <Search className="text-sky-400" size={20} />
            </div>
            <div className="flex items-center gap-2">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span className="text-[9px] font-black text-slate-900 uppercase tracking-widest">
                Index_Optimized
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl font-black text-slate-900 tracking-tighter uppercase leading-none">
              The Physics <br /> of{" "}
              <span className="text-sky-400">Search.</span>
            </h2>
            <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">
              Targeting: Authority + Speed
            </p>
          </div>
        </div>

        {/* Dynamic Data Bars */}
        <div className="space-y-6 relative z-10">
          {[
            { label: "Performance", val: "99%", icon: Activity },
            { label: "Visibility", val: "+310%", icon: TrendingUp },
            { label: "Structure", val: "Valid", icon: BarChart3 },
          ].map((stat, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-slate-200/60 pb-2"
            >
              <div className="flex items-center gap-3">
                <stat.icon size={14} className="text-sky-500" />
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                  {stat.label}
                </span>
              </div>
              <span className="text-sm font-black text-slate-900 italic">
                {stat.val}
              </span>
            </div>
          ))}
        </div>

        {/* Scan-line Decoration */}
        <div className="absolute top-0 left-0 w-full h-1 bg-sky-400/10 animate-scan" />
      </motion.div>
    </div>
  );
}
