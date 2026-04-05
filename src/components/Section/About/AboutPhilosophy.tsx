"use client";
import { motion } from "framer-motion";
import { revealVariants, useReveal } from "./useReveal";

export function AboutPhilosophy() {
  const { ref, isInView } = useReveal();

  return (
    <section ref={ref} className="py-32 px-6 max-w-4xl">
      <motion.p
        variants={revealVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="text-lg md:text-xl text-neutral-600 leading-relaxed"
      >
        Most agencies focus on visuals. We focus on outcomes — performance,
        conversion, and scale.
      </motion.p>
    </section>
  );
}
