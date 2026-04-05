"use client";

import { motion } from "framer-motion";
import { revealVariants, useReveal } from "./useReveal";

export function AboutProof() {
  const { ref, isInView } = useReveal();

  return (
    <section ref={ref} className="py-40 px-6 text-center">
      <motion.h3
        variants={revealVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-4xl font-semibold"
      >
        Built for performance, not just aesthetics
      </motion.h3>
    </section>
  );
}
