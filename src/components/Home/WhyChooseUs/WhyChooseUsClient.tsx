"use client";

import { motion } from "framer-motion";
import * as Icons from "lucide-react";
import { MetricItem } from "@/@types";

export default function WhyChooseUsClient({
  metrics,
}: {
  metrics: MetricItem[];
}) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 border border-slate-200 divide-y sm:divide-y-0 sm:divide-x divide-slate-200 rounded-xl overflow-hidden">
      {metrics.map((metric, i) => {
        const Icon = Icons[metric.iconName] as Icons.LucideIcon;

        return (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.08, ease: "easeOut" }}
            className="group bg-white p-8 md:p-10 transition-all duration-300 hover:bg-slate-50"
          >
            {/* top row */}
            <div className="flex items-start justify-between mb-6">
              {/* icon */}
              <div className="p-3 rounded-lg bg-slate-100 text-slate-700 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                <Icon size={20} strokeWidth={2} />
              </div>

              {/* value */}
              <div className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight">
                {metric.value}
                <span className="text-slate-400 text-lg ml-1">
                  {metric.suffix}
                </span>
              </div>
            </div>

            {/* content */}
            <div className="space-y-2">
              <h3 className="text-sm font-semibold text-slate-900">
                {metric.label}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {metric.desc}
              </p>
            </div>

            {/* subtle hover line */}
            <div className="mt-6 h-px bg-slate-200 overflow-hidden">
              <div className="w-0 group-hover:w-full h-full bg-slate-900 transition-all duration-500" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
