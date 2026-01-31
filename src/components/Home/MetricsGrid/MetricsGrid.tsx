// src/components/sections/MetricsGrid.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  Activity,
  Zap,
  ShieldCheck,
  Search,
  Phone,
  Smartphone,
} from "lucide-react";

const metrics = [
  {
    label: "Google Search Visibility",
    value: "Google Ready ",
    icon: Search,
    color: "text-emerald-400",
    bg: "bg-emerald-500/10",
  },
  {
    label: "SEO Setup",
    value: "Near Me Ready",
    icon: Activity,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },

  {
    label: "More Customer Calls",
    value: "Lead Focused",
    icon: Phone,
    color: "text-sky-400",
    bg: "bg-sky-500/10",
  },
  {
    label: "Mobile Friendly Design",
    value: "All Devices",
    icon: Smartphone,
    color: "text-amber-400",
    bg: "bg-amber-500/10",
  },
];

export default function MetricsGrid() {
  return (
    <section className="bg-white py-24 px-6 relative">
      <div className=" mx-auto space-y-4 md:space-y-0 md:grid md:grid-cols-4 md:gap-6">
        {metrics.map((m, i) => (
          <MetricCard key={m.label} m={m} index={i} total={metrics.length} />
        ))}
      </div>
    </section>
  );
}

function MetricCard({
  m,
  index,
  total,
}: {
  m: any;
  index: number;
  total: number;
}) {
  const container = useRef(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Stacking transformations
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.04],
  );
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0.95]);

  return (
    <div
      ref={container}
      className="sticky top-28 md:static h-50 md:h-auto"
      style={{ marginTop: index === 0 ? 0 : "1.5rem" }}
    >
      <motion.div
        style={{ scale, opacity }}
        className="relative h-full p-8  border border-slate-100 bg-white/90 backdrop-blur-xl flex items-center gap-6 shadow-2xl shadow-slate-200/40 group overflow-hidden transition-all duration-500 hover:border-sky-400/30"
      >
        {" "}
        {/* LARGE BACKGROUND ICON (The Watermark) */}{" "}
        <div className="absolute -right-3 bottom-4 opacity-[0.20] group-hover:opacity-[0.07] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none">
          <m.icon size={110} strokeWidth={1} className={m.color} />
        </div>{" "}
        {/* Foreground Content */}
        <div className="relative z-10">
          <div className="text-3xl font-black text-slate-900 tracking-tighter italic leading-none mb-1">
            {m.value}
          </div>
          <div className="text-[10px] font-bold text-slate-600 uppercase tracking-[0.3em] font-mono">
            {m.label}
          </div>
        </div>
        {/* Technical Accent Line */}
      </motion.div>
    </div>
  );
}
