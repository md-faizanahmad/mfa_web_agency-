// src/components/sections/about/AboutClient.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Sharp kinetic motion
  const y = useTransform(scrollYProgress, [0, 1], [0, -40]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.95, 1]);

  return (
    <div ref={containerRef} className="relative aspect-4/5 w-full group">
      {/* Sharp Border Frame */}
      <div className="absolute -top-4 -right-4 w-full h-full border border-slate-200 -z-10 group-hover:border-sky-400/30 transition-colors duration-700" />

      <motion.div
        style={{ scale }}
        className="relative w-full h-full border border-slate-100 shadow-2xl overflow-hidden bg-slate-50"
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800"
          alt="Our Team Workspace"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 group-hover:scale-105"
        />

        {/* Tactical Glass Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />

        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white z-10">
          <div className="space-y-1">
            <span className="text-[9px] font-black uppercase tracking-[0.3em] text-sky-400">
              Active_Studio
            </span>
            <p className="font-black uppercase tracking-tighter text-2xl leading-none">
              Built to Scale.
            </p>
          </div>
          <div className="p-3 bg-sky-400 text-slate-900">
            <div className="w-1.5 h-1.5 bg-white animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Floating Tactical Stat */}
      <motion.div
        style={{ y }}
        className="absolute -bottom-6 -right-6 bg-slate-900 p-6 shadow-2xl hidden xl:block"
      >
        <div className="text-3xl font-black text-white tracking-tighter uppercase leading-none">
          +420%
        </div>
        <div className="text-[9px] font-black text-sky-400 uppercase tracking-widest mt-1">
          Traffic Uplift
        </div>
      </motion.div>
    </div>
  );
}
