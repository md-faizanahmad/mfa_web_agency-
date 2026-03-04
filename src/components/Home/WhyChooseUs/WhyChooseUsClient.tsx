// src/components/sections/WhyChooseUsClient.tsx
"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { cn } from "@/lib/utils";
import { MetricItem } from "@/@types";

const colorMap = {
  cobalt: "group-hover:bg-blue-600 group-hover:shadow-blue-100",
  emerald: "group-hover:bg-emerald-500 group-hover:shadow-emerald-100",
  rose: "group-hover:bg-rose-500 group-hover:shadow-rose-100",
  amber: "group-hover:bg-amber-500 group-hover:shadow-amber-100",
};

const textMap = {
  cobalt: "group-hover:text-blue-600",
  emerald: "group-hover:text-emerald-500",
  rose: "group-hover:text-rose-500",
  amber: "group-hover:text-amber-500",
};

export default function WhyChooseUsClient({
  metrics,
}: {
  metrics: MetricItem[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-slate-200 border border-slate-200 shadow-2xl overflow-hidden">
      {metrics.map((metric, i) => {
        const Icon = Icons[metric.iconName] as Icons.LucideIcon;

        return (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1, ease: "circOut" }}
            className="bg-white p-10 space-y-8 group transition-all duration-500"
          >
            <div className="flex justify-between items-start">
              <div
                className={cn(
                  "p-4 bg-slate-900 text-white transition-all duration-500 shadow-xl",
                  colorMap[metric.accentColor],
                )}
              >
                <Icon size={22} strokeWidth={2.5} />
              </div>
              <span
                className={cn(
                  "text-4xl md:text-5xl font-black italic tracking-tighter leading-none transition-colors duration-500 text-slate-900",
                  textMap[metric.accentColor],
                )}
              >
                {metric.value}
                {metric.suffix}
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-[11px] font-black uppercase tracking-[0.2em] text-slate-950">
                {metric.label}
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed">
                {metric.desc}
              </p>
            </div>

            {/* Surgical Bottom Accent Line */}
            <div className="h-0.5 w-0 group-hover:w-full transition-all duration-700 bg-slate-100 relative">
              <div
                className={cn(
                  "absolute inset-0 w-0 group-hover:w-full transition-all duration-1000 delay-100",
                  metric.accentColor === "cobalt"
                    ? "bg-blue-600"
                    : metric.accentColor === "emerald"
                      ? "bg-emerald-500"
                      : metric.accentColor === "rose"
                        ? "bg-rose-500"
                        : "bg-amber-500",
                )}
              />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
