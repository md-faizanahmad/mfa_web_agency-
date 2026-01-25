// src/components/sections/ProcessClient.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Step {
  no: string;
  title: string;
  desc: string;
  tag: string;
}

export default function ProcessClient({ steps }: { steps: Step[] }) {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  // Animate the height of the vertical line based on scroll
  const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div ref={containerRef} className="relative space-y-24">
      {/* The Animated Vertical Rail */}
      <div className="absolute left-4.75 top-2 bottom-2 w-0.5 bg-brand-midnight/5 hidden md:block">
        <motion.div
          style={{ scaleY, originY: 0 }}
          className="w-full h-full bg-brand-cobalt"
        />
      </div>

      {steps.map((step, index) => (
        <motion.div
          key={step.no}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="relative pl-0 md:pl-16 group"
        >
          {/* Milestone Marker */}
          <div className="hidden md:flex absolute left-0 top-0 w-10 h-10 rounded-full border-2 border-brand-midnight/5 bg-white items-center justify-center z-10 group-hover:border-brand-cobalt transition-colors duration-500">
            <div className="w-2 h-2 rounded-full bg-brand-midnight group-hover:bg-brand-cobalt transition-colors" />
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-4xl font-black text-brand-midnight/10 group-hover:text-brand-cobalt/20 transition-colors">
                {step.no}
              </span>
              <span className="px-3 py-1 rounded-md bg-brand-ice text-brand-cobalt text-[10px] font-bold uppercase tracking-widest">
                {step.tag}
              </span>
            </div>

            <h3 className="text-3xl font-black text-brand-midnight tracking-tighter uppercase">
              {step.title}
            </h3>

            <p className="text-muted-foreground text-lg font-medium leading-relaxed max-w-xl">
              {step.desc}
            </p>

            {/* Tactical Detail Line (Mobile friendly) */}
            <div className="h-px w-20 bg-brand-cobalt/20" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}
