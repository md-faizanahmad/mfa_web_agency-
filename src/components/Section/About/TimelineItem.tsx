"use client";

import { motion } from "framer-motion";

interface Props {
  step: string;
  index: number;
  total: number;
}

export function TimelineItem({ step, index }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="relative flex-1"
    >
      {/* Mobile Layout */}
      <div className="pl-12 md:pl-0">
        {/* Dot */}
        <div className="absolute md:relative left-0 md:left-auto top-0 md:top-auto w-8 h-8 rounded-full bg-black text-white flex items-center justify-center text-sm">
          {index + 1}
        </div>

        {/* Desktop Alignment */}
        <div className="mt-2 md:mt-6 text-left md:text-center">
          <h3 className="text-lg md:text-xl font-medium">{step}</h3>

          <p className="text-neutral-500 text-sm mt-2 max-w-xs mx-auto">
            Structured execution focused on performance and scale.
          </p>
        </div>
      </div>
    </motion.div>
  );
}
