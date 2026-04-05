"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export function AbstractVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 1.1, filter: "blur(20px)" }}
      whileInView={{ opacity: 1, scale: 1, filter: "blur(0px)" }}
      transition={{ duration: 1 }}
      className="relative w-full h-75 rounded-2xl overflow-hidden"
    >
      {/* Background Image */}
      <Image
        src="/ourservices/about-identity.jpg" // keep same public path
        alt="Abstract system visual representing product-driven development"
        fill
        className="object-cover"
      />

      {/* Optional Overlay (IMPORTANT for monochrome control) */}
      {/* <div className="absolute inset-0 bg-white/40 backdrop-blur-[2px]" /> */}
    </motion.div>
  );
}
