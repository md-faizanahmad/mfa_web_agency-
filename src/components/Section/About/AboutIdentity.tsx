import { motion } from "framer-motion";
import { revealVariants, useReveal } from "./useReveal";
export function AboutIdentity() {
  const { ref, isInView } = useReveal();

  return (
    <section className="py-40 px-6 grid md:grid-cols-2 gap-12 items-center">
      <motion.div
        ref={ref}
        variants={revealVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <h2 className="text-3xl font-medium mb-4">
          A product-driven development studio
        </h2>
        <p className="text-neutral-600">
          We design systems that grow businesses — not just websites.
        </p>
      </motion.div>

      <motion.div
        variants={revealVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        className="h-75 bg-neutral-200 rounded-2xl"
      />
    </section>
  );
}
