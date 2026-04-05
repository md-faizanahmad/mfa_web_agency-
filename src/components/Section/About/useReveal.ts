"use client";

import { useInView, Variants } from "framer-motion";
import { useRef } from "react";

export function useReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  return { ref, isInView };
}
export const revealVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(16px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};
