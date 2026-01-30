// src/app/services/web-development/WebDevClient.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Zap, Globe, Cpu } from "lucide-react";

export default function WebDevClient() {
  return (
    <div className="relative w-full aspect-4/5 group">
      {/* Background Static Grid */}
      <div className="absolute -top-4 -right-4 w-full h-full border border-slate-200 -z-10 group-hover:border-sky-400/30 transition-colors duration-700" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full h-full bg-slate-950 p-8 flex flex-col justify-between relative overflow-hidden"
      >
        {/* Technical Watermark */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] text-sky-400 pointer-events-none">
          <Cpu size={400} />
        </div>

        <div className="space-y-6 relative z-10">
          <div className="flex justify-between items-start">
            <div className="w-12 h-12 bg-sky-400 flex items-center justify-center">
              <Zap className="text-white" size={24} />
            </div>
            <span className="text-[9px] font-black text-sky-400 uppercase tracking-widest">
              System_Active
            </span>
          </div>

          <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
            High <br /> Performance <br /> Architecture.
          </h2>
        </div>

        <div className="space-y-4 relative z-10">
          <div className="h-px bg-white/10 w-full" />
          <div className="flex items-center gap-4 text-white/40">
            <div className="flex items-center gap-2">
              <ShieldCheck size={14} className="text-sky-400" />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Secure
              </span>
            </div>
            <div className="flex items-center gap-2">
              <Globe size={14} className="text-sky-400" />
              <span className="text-[10px] font-black uppercase tracking-widest">
                Global
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
