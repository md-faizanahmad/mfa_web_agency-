// src/app/services/maintenance/MaintenanceClient.tsx
"use client";

import { motion } from "framer-motion";
import { ShieldCheck, Activity, RefreshCw } from "lucide-react";

export default function MaintenanceClient() {
  return (
    <div className="relative w-full aspect-4/5 group">
      {/* Background Sharp Frame */}
      <div className="absolute -top-4 -right-4 w-full h-full border border-slate-200 -z-10 group-hover:border-sky-400/30 transition-colors duration-700" />

      <motion.div
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        className="w-full h-full bg-slate-950 p-8 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="space-y-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-sky-400 flex items-center justify-center">
              <Activity className="text-slate-900" size={20} />
            </div>
            <div className="flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10">
              <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-[8px] font-black text-white uppercase tracking-widest">
                System_Optimal
              </span>
            </div>
          </div>

          <div className="space-y-2">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Always <br /> <span className="text-sky-400">Operational.</span>
            </h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest">
              99.9% Uptime Commitment
            </p>
          </div>
        </div>

        {/* Live Pulse Visual */}
        <div className="relative h-24 flex items-center justify-center overflow-hidden">
          <svg
            viewBox="0 0 200 60"
            className="w-full h-full stroke-sky-400 fill-none stroke-2"
          >
            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1, x: [0, -100] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              d="M0 30 L40 30 L50 10 L60 50 L70 30 L110 30 L120 10 L130 50 L140 30 L200 30"
            />
          </svg>
        </div>

        {/* Support Grid */}
        <div className="grid grid-cols-2 gap-4 relative z-10">
          <div className="flex items-center gap-2">
            <ShieldCheck size={14} className="text-sky-400" />
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              Daily Backups
            </span>
          </div>
          <div className="flex items-center gap-2">
            <RefreshCw size={14} className="text-sky-400" />
            <span className="text-[9px] font-black text-white/40 uppercase tracking-widest">
              Instant Fixes
            </span>
          </div>
        </div>

        {/* Background Grid Pattern Overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none" />
      </motion.div>
    </div>
  );
}
