"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useReveal() {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "-100px",
    once: true,
  });

  return { ref, isInView };
}
