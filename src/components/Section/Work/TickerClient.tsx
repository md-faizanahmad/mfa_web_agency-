"use client";

import { motion, Variants, useReducedMotion } from "framer-motion";

interface TickerProps {
  items: string[];
  direction?: "left" | "right";
  /** Higher is slower. 60-80 is ideal for readability */
  speed?: number;
}

export default function TickerClient({
  items,
  direction = "left",
  speed = 70,
}: TickerProps) {
  const shouldReduceMotion = useReducedMotion();

  const scrollVariants: Variants = {
    animate: {
      x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop",
          duration: shouldReduceMotion ? 0 : speed,
          ease: "linear",
        },
      },
    },
  };

  // Ensure enough items to prevent flickering on loop
  const loopItems = [...items, ...items, ...items, ...items];

  return (
    <section className="w-full py-4">
      <div
        className="relative overflow-hidden"
        style={{
          maskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to right, transparent, black 10%, black 90%, transparent)",
        }}
      >
        <motion.div
          className="flex w-max items-center gap-8 md:gap-12"
          variants={scrollVariants}
          animate="animate"
        >
          {loopItems.map((item, index) => (
            <div
              key={`${item}-${index}`}
              className="flex items-center gap-8 md:gap-12"
            >
              <span className="text-[11px] md:text-sm font-semibold uppercase tracking-[0.2em] text-slate-500  whitespace-nowrap">
                {item}
              </span>

              {/* Subtle visual anchor */}
              <span className="h-0.75 w-0.75 rounded-full  " />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
