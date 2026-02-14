// src/components/sections/HeroClient.tsx
"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroClient() {
  return (
    <div className="max-w-4xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Compact Tactical Badge */}
        {/* <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-sky-400/20 text-white text-[10px] font-black uppercase tracking-[0.3em] mb-8 backdrop-blur-md">
          <div className="w-1.5 h-1.5 rounded-full bg-sky-400 animate-pulse" />
          <span>System.Initialized(2026)</span>
        </div> */}

        <h1 className="text-5xl md:text-8xl font-black leading-[0.85] tracking-tighter text-white mb-6 uppercase">
          Digital <br />
          <span className="text-transparent bg-clip-text bg-linear-to-r from-sky-300 via-sky-500 to-emerald-400">
            Systems
          </span>{" "}
          <br />
          Simplified.
        </h1>

        <p className="text-base md:text-lg text-slate-400 max-w-lg font-medium leading-relaxed mb-10">
          We engineer high-velocity digital infrastructure for brands that
          prioritize performance over noise. Fast, lean, and scalable.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/contact"
            className="bg-sky-400 text-brand-midnight px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center gap-2 hover:bg-white transition-all group shadow-xl shadow-sky-400/10"
          >
            Launch Build
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/work"
            className="bg-white/5 border border-white/10 text-white px-8 py-4 rounded-xl font-black text-[11px] uppercase tracking-[0.2em] flex items-center justify-center hover:bg-white/10 transition-all backdrop-blur-md"
          >
            Case_Files
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
