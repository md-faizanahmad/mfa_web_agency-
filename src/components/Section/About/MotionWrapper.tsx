"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";
import { revealVariants } from "./useReveal";

interface Props {
  children: ReactNode;
  className?: string;
}

export function MotionWrapper({ children, className }: Props) {
  return (
    <motion.div
      variants={revealVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
