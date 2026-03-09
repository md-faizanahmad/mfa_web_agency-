"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";

interface TickerProps {
  items: string[];
  direction?: "left" | "right";
}

export default function TickerClient({
  items,
  direction = "left",
}: TickerProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollVariants: Variants = {
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: shouldReduceMotion ? 0 : 30,
          ease: "linear",
        },
      },
    },
  };

  const loopItems = [...items, ...items];

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <motion.div
        className="flex gap-12 px-6"
        variants={scrollVariants}
        animate="animate"
      >
        {loopItems.map((item, index) => (
          <div key={`${item}-${index}`} className="flex items-center gap-6">
            <span className="text-3xl md:text-5xl font-black text-white/10 uppercase tracking-tight hover:text-brand-cobalt transition-colors">
              {item}
            </span>
            <div className="w-2 h-2 rounded-full bg-brand-cobalt" />
          </div>
        ))}
      </motion.div>
    </div>
  );
}
