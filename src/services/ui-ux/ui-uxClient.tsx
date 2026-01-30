// src/app/services/ui-ux/UIUXClient.tsx
"use client";

import { motion } from "framer-motion";
import { MousePointer2, Smartphone, Layout, Eye } from "lucide-react";

export default function UIUXClient() {
  return (
    <div className="relative w-full aspect-4/5 group">
      {/* Background Frame */}
      <div className="absolute -bottom-4 -right-4 w-full h-full border border-slate-200 -z-10 group-hover:border-sky-400/30 transition-colors duration-700" />

      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full h-full bg-slate-900 p-8 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="space-y-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-sky-400 flex items-center justify-center">
              <MousePointer2 className="text-slate-900" size={20} />
            </div>
            <div className="px-3 py-1 bg-white/5 border border-white/10">
              <span className="text-[8px] font-black text-sky-400 uppercase tracking-widest font-mono">
                FLOW_OPTIMIZED
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Behavioral <br /> <span className="text-sky-400">Design.</span>
            </h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
              Converting Interest into Action
            </p>
          </div>
        </div>

        {/* Tactical UI Blueprint Visual */}
        <div className="space-y-4 relative z-10">
          <div className="grid grid-cols-3 gap-2">
            <div className="h-1 bg-sky-400 w-full" />
            <div className="h-1 bg-white/20 w-full" />
            <div className="h-1 bg-white/20 w-full" />
          </div>

          <div className="flex flex-col gap-4">
            {[
              { icon: Smartphone, label: "Touch-Ready Targets" },
              { icon: Layout, label: "Visual Hierarchy" },
              { icon: Eye, label: "Aura Testing" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <item.icon size={14} className="text-sky-400" />
                <span className="text-[10px] font-black uppercase tracking-widest text-white/60">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Kinetic Light Beam */}
        <motion.div
          animate={{ y: [0, 400, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
          className="absolute inset-0 bg-linear-to-b from-transparent via-sky-400/5 to-transparent w-full"
        />
      </motion.div>
    </div>
  );
}
