// src/app/services/hosting/HostingClient.tsx
"use client";

import { motion } from "framer-motion";
import { Server, Globe, Lock } from "lucide-react";

export default function HostingClient() {
  return (
    <div className="relative w-full aspect-4/5 group">
      {/* Background Sharp Frame */}
      <div className="absolute -bottom-4 -right-4 w-full h-full border border-slate-200 -z-10 group-hover:border-sky-400/30 transition-colors duration-700" />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className="w-full h-full bg-slate-900 p-8 flex flex-col justify-between relative overflow-hidden"
      >
        <div className="space-y-8 relative z-10">
          <div className="flex justify-between items-center">
            <div className="w-10 h-10 bg-white flex items-center justify-center">
              <Server className="text-slate-950" size={20} />
            </div>
            <div className="flex items-center gap-2">
              <span className="text-[8px] font-black text-sky-400 uppercase tracking-widest">
                Global_Status: Online
              </span>
            </div>
          </div>

          <div className="space-y-3">
            <h2 className="text-4xl font-black text-white tracking-tighter uppercase leading-none">
              Edge <br />{" "}
              <span className="text-sky-400 italic font-medium lowercase">
                Infrastructure.
              </span>
            </h2>
            <p className="text-slate-500 text-[10px] font-black uppercase tracking-widest italic">
              Encrypted & Redundant
            </p>
          </div>
        </div>

        {/* Technical Grid/Stats */}
        <div className="grid grid-cols-1 gap-6 relative z-10">
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-3">
              <Globe size={14} className="text-sky-400" />
              <span className="text-[10px] font-black uppercase text-white/60 tracking-widest">
                DNS Response
              </span>
            </div>
            <span className="text-xs font-black text-white italic">12ms</span>
          </div>
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-3">
              <Lock size={14} className="text-sky-400" />
              <span className="text-[10px] font-black uppercase text-white/60 tracking-widest">
                SSL Security
              </span>
            </div>
            <span className="text-xs font-black text-white italic">Active</span>
          </div>
        </div>

        {/* Moving Lines Background Effect */}
        <div className="absolute inset-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-px h-full bg-linear-to-b from-transparent via-sky-400/50 to-transparent animate-pulse" />
          <div className="absolute top-1/2 left-0 w-full h-px bg-linear-to-r from-transparent via-sky-400/50 to-transparent" />
        </div>
      </motion.div>
    </div>
  );
}
