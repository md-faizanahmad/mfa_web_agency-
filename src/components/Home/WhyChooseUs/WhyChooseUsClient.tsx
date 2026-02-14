// src/components/sections/WhyChooseUsClient.tsx
"use client";

import {
  motion,
  useInView,
  useSpring,
  useTransform,
  useScroll,
} from "framer-motion";
import { useEffect, useRef } from "react";
import { Search, Zap, ShieldCheck, LucideIcon, Smartphone } from "lucide-react";
import { MetricItem } from "@/@types/index"; // Adjust path based on your setup

// Type-safe mapping for Lucide icons
const IconMap: Record<MetricItem["iconName"], LucideIcon> = {
  Search,
  Smartphone,
  Zap,
  ShieldCheck,
};

function Counter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const spring = useSpring(0, {
    stiffness: 45,
    damping: 25,
  });

  const displayValue = useTransform(spring, (current: number) =>
    value % 1 === 0 ? Math.round(current).toString() : current.toFixed(1),
  );

  useEffect(() => {
    if (inView) spring.set(value);
  }, [inView, spring, value]);

  return <motion.span ref={ref}>{displayValue}</motion.span>;
}

export default function WhyChooseUsClient({
  metrics,
}: {
  metrics: MetricItem[];
}) {
  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-2 md:gap-4">
      {metrics.map((metric, index) => (
        <MetricCard
          key={metric.id}
          metric={metric}
          index={index}
          total={metrics.length}
        />
      ))}
    </div>
  );
}

function MetricCard({
  metric,
  index,
  total,
}: {
  metric: MetricItem;
  index: number;
  total: number;
}) {
  const container = useRef<HTMLDivElement>(null);
  const Icon = IconMap[metric.iconName] || Search;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Stacking scale effect for mobile/sticky
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.03],
  );

  return (
    <div
      ref={container}
      className="sticky top-28 md:static h-50 md:h-auto"
      style={{ marginTop: index === 0 ? 0 : "1rem" }}
    >
      <motion.div
        style={{ scale }}
        className="group relative h-full p-8 rounded-4xl border border-slate-100 bg-white/90 backdrop-blur-xl shadow-xl shadow-slate-200/50 overflow-hidden transition-all duration-500 hover:border-sky-400/30"
      >
        {/* WATERMARK BACKGROUND ICON */}
        <div className="absolute -right-4 -bottom-4 opacity-[0.03] text-sky-500 group-hover:opacity-[0.08] group-hover:-rotate-12 transition-all duration-700 pointer-events-none">
          <Icon size={120} strokeWidth={1} />
        </div>

        <div className="relative z-10 flex flex-col justify-between h-full">
          <div className="text-4xl font-black text-slate-950 tracking-tighter flex items-baseline gap-1 group-hover:text-sky-500 transition-colors leading-none">
            <Counter value={metric.value} />
            <span className="text-2xl text-blue-950 font-bold">
              {metric.suffix}
            </span>
          </div>

          <div className="space-y-1">
            <h3 className="text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 group-hover:text-sky-600 transition-colors">
              {metric.label}
            </h3>
            <p className="text-slate-400 text-xs font-medium leading-relaxed group-hover:text-slate-600 transition-colors line-clamp-2">
              {metric.desc}
            </p>
          </div>
        </div>

        {/* Sky Bottom Accent */}
        <div className="absolute bottom-0 left-0 h-1 bg-sky-400 w-0 group-hover:w-full transition-all duration-700" />
      </motion.div>
    </div>
  );
}
