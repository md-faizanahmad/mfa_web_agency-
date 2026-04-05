"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { TimelineItem } from "./TimelineItem";

interface Props {
  steps: string[];
}

export function AboutProcess({ steps }: Props) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // Line fill animation
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);
  const scaleX = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section ref={ref} className="py-12 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-semibold mb-20">
          Our Process
        </h2>

        {/* Wrapper */}
        <div className="relative">
          {/* Vertical Line (Mobile) */}
          <motion.div
            style={{ scaleY }}
            className="origin-top absolute left-4 top-0 bottom-0 w-0.5 bg-black md:hidden"
          />

          {/* Horizontal Line (Desktop) */}
          <motion.div
            style={{ scaleX }}
            className="origin-left hidden md:block absolute top-4 left-0 right-0 h-[2px] bg-linear-to-r from-blue-300 via-white to-sky-800"
          />

          {/* Items */}
          <div className="flex flex-col md:flex-row md:justify-between gap-16 md:gap-8">
            {steps.map((step, i) => (
              <TimelineItem
                key={i}
                step={step}
                index={i}
                total={steps.length}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
