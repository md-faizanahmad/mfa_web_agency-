"use client";

import { motion } from "framer-motion";
import { revealVariants, useReveal } from "./useReveal";

export function AboutHero() {
  const { ref, isInView } = useReveal();

  return (
    <section ref={ref} className="min-h-[80vh] flex items-center px-6">
      <motion.h1
        variants={revealVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-4xl md:text-6xl font-serif max-w-3xl"
      >
        We don’t build websites. We build leverage.
      </motion.h1>
    </section>
  );
}
