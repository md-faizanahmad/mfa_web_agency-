// src/components/sections/about/AboutClient.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

export default function AboutClient() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Scale and rotate effects for a kinetic feel
  const scale = useTransform(scrollYProgress, [0, 0.5], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 0.5], [-5, 0]);

  return (
    <div ref={containerRef} className="relative aspect-4/5 w-full group">
      {/* Tactical Background Grid (Decorative) */}
      <div className="absolute -top-6 -right-6 w-full h-full border border-brand-midnight/5 rounded-[2.5rem] -z-10 group-hover:border-brand-cobalt/20 transition-colors duration-700" />

      <motion.div
        style={{ scale, rotate }}
        className="relative w-full h-full rounded-[2.5rem] overflow-hidden border border-brand-midnight/5 shadow-2xl"
      >
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=800&auto=format&fit=crop"
          alt="Engineering Team"
          fill
          className="object-cover grayscale hover:grayscale-0 transition-all duration-1000"
        />

        {/* Technical Overlay */}
        <div className="absolute inset-0 bg-linear-to-t from-brand-midnight/60 to-transparent" />

        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end text-white">
          <div className="space-y-1">
            <span className="text-[10px] font-bold uppercase tracking-[0.3em] opacity-60">
              Est. 2024
            </span>
            <p className="font-black uppercase tracking-tighter text-xl">
              Engineering Mastery.
            </p>
          </div>
          <div className="p-3 rounded-full bg-brand-cobalt">
            <div className="w-2 h-2 rounded-full bg-white animate-pulse" />
          </div>
        </div>
      </motion.div>

      {/* Ambition Floating Badge */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="absolute -bottom-10 -left-10 bg-white p-8 rounded-2xl shadow-xl border border-brand-midnight/5 hidden xl:block"
      >
        <div className="text-4xl font-black text-brand-midnight tracking-tighter uppercase">
          100%
        </div>
        <div className="text-[10px] font-bold text-brand-cobalt uppercase tracking-widest mt-1">
          Focus on Performance
        </div>
      </motion.div>
    </div>
  );
}
