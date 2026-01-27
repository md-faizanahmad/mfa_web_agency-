// src/components/sections/about/AboutClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutClient() {
  return (
    <div className="relative aspect-5/4 w-full">
      {/* Sharp offset border for technical depth */}
      <div className="absolute -top-3 -right-3 w-full h-full border border-slate-200 -z-10" />

      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="relative w-full h-full bg-slate-50 border border-slate-100 overflow-hidden group"
      >
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=800"
          alt="Technical Setup"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />

        {/* Tactical Status Overlay */}
        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between z-10">
          <div className="bg-slate-950/80 backdrop-blur-md px-4 py-2 border border-white/10">
            <span className="text-[8px] font-black text-sky-400 uppercase tracking-[0.3em]">
              Status: Operational
            </span>
          </div>
          <div className="w-8 h-8 bg-sky-400 flex items-center justify-center">
            <div className="w-1.5 h-1.5 bg-white animate-pulse" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
