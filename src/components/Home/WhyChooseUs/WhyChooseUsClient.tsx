// src/components/sections/WhyChooseUsClient.tsx
"use client";

import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef } from "react";

interface Metric {
  id: string;
  value: number;
  suffix: string;
  label: string;
  desc: string;
}

function Counter({ value }: { value: number }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    stiffness: 40,
    damping: 20,
    restDelta: 0.001,
  });

  const displayValue = useTransform(spring, (current) =>
    value % 1 === 0 ? Math.round(current).toString() : current.toFixed(1),
  );

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function WhyChooseUsClient({ metrics }: { metrics: Metric[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-white/10 border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
      {metrics.map((metric, index) => (
        <motion.div
          key={metric.id}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="bg-brand-midnight p-10 group hover:bg-white/2 transition-colors"
        >
          <div className="space-y-4">
            <div className="text-6xl md:text-7xl font-black text-white tracking-tighter flex items-baseline gap-1 group-hover:text-brand-cobalt transition-colors">
              <Counter value={metric.value} />
              <span className="text-3xl text-brand-cobalt">
                {metric.suffix}
              </span>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-[0.2em] text-blue-100/80">
                {metric.label}
              </h3>
              <p className="text-blue-100/30 text-sm font-medium leading-relaxed">
                {metric.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
