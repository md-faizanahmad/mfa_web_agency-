"use client";

import { motion } from "framer-motion";

export function AbstractVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      className="w-full h-75 rounded-2xl bg-linear-to-br from-neutral-200 to-neutral-300"
    />
  );
}
