"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutClient() {
  return (
    <div className="relative aspect-[5/4] w-full">
      {/* Offset Border Frame */}
      <div className="absolute -top-4 -right-4 w-full h-full border border-border -z-10 rounded-lg" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true }}
        className="relative w-full h-full bg-secondary border border-border rounded-lg overflow-hidden group"
      >
        <Image
          src="https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200"
          alt="High-performance website development workspace"
          fill
          sizes="(max-width: 768px) 100vw, 500px"
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
        />

        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent" />

        {/* Premium Status Badge */}
        <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between z-10">
          <div className="bg-brand-midnight/80 backdrop-blur-md px-5 py-2 border border-border rounded-md">
            <span className="text-[10px] font-semibold text-primary uppercase tracking-[0.25em]">
              Active Development
            </span>
          </div>

          <div className="w-9 h-9 bg-primary rounded-md flex items-center justify-center shadow-lg">
            <div className="w-2 h-2 bg-primary-foreground rounded-full animate-pulse" />
          </div>
        </div>
      </motion.div>
    </div>
  );
}
