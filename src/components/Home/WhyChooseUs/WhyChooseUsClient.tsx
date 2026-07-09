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
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, i) => {
        const Icon = Icons[metric.iconName] as Icons.LucideIcon;

        return (
          <motion.div
            key={metric.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="group relative cursor-pointer flex flex-col justify-between overflow-hidden p-6 rounded-xl bg-white  hover:shadow-lg transition-shadow duration-300"
          >
            {/* Giant Background Icon - Contained in bg, switches to a soft light color effect on hover */}
            <div className="absolute -right-6 -bottom-8 text-slate-100/70 group-hover:text-brand-cobalt/5 group-hover:scale-110 transition-all duration-500 z-0 pointer-events-none select-none">
              <Icon size={140} strokeWidth={1} />
            </div>

            <div className="relative z-10 space-y-4">
              {/* Compact Data Value */}
              <div className="flex items-baseline font-extrabold tracking-tight text-2xl md:text-3xl text-slate-900">
                {metric.value}
                <span className="text-brand-cobalt text-sm font-bold tracking-normal ml-0.5">
                  {metric.suffix}
                </span>
              </div>

              {/* Text Content */}
              <div className="space-y-1">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  {metric.label}
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  {metric.desc}
                </p>
              </div>
            </div>

            {/* Light active accent line indicator */}
            <div className="mt-5 h-0.5 w-full bg-slate-100 overflow-hidden relative z-10 rounded-full">
              <div className="w-0 group-hover:w-full h-full bg-brand-cobalt/60 transition-all duration-500 ease-out" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
