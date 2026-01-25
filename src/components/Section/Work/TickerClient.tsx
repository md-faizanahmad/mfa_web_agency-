// src/components/sections/work/TickerClient.tsx
"use client";

import { motion, Variants } from "framer-motion";

interface TickerProps {
  items: string[];
  direction?: "left" | "right";
}

export default function TickerClient({
  items,
  direction = "left",
}: TickerProps) {
  const scrollVariants: Variants = {
    animate: {
      x: direction === "left" ? [0, -1000] : [-1000, 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: 30,
          ease: "linear",
        },
      },
    },
  };

  return (
    <div className="flex whitespace-nowrap overflow-hidden">
      <motion.div
        className="flex gap-12 px-6"
        variants={scrollVariants}
        animate="animate"
      >
        {/* Duplicate items to create seamless loop */}
        {[...items, ...items, ...items].map((item, index) => (
          <div key={index} className="flex items-center gap-6">
            <span className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tighter hover:text-brand-cobalt transition-colors cursor-default">
              {item}
            </span>
            <div className="w-3 h-3 rounded-full bg-brand-cobalt" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
