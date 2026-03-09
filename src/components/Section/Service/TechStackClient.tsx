"use client";

import { TechItem } from "@/@types";
import { motion } from "framer-motion";
import {
  Globe,
  Layout,
  Database,
  Server,
  Shield,
  Search,
  LucideIcon,
} from "lucide-react";

const iconMap: Record<TechItem["iconName"], LucideIcon> = {
  Globe,
  Layout,
  Database,
  Server,
  Shield,
  Search,
};

/* Accent color rotation for hover */
const accentColors = [
  "group-hover:text-blue-600 group-hover:bg-blue-600/10",
  "group-hover:text-indigo-600 group-hover:bg-indigo-600/10",
  "group-hover:text-emerald-600 group-hover:bg-emerald-600/10",
  "group-hover:text-purple-600 group-hover:bg-purple-600/10",
  "group-hover:text-amber-600 group-hover:bg-amber-600/10",
  "group-hover:text-rose-600 group-hover:bg-rose-600/10",
];

export default function TechStackClient({ stack }: { stack: TechItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
      {stack.map((item, index) => {
        const Icon = iconMap[item.iconName] || Globe;
        const accent = accentColors[index % accentColors.length];

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: index * 0.05 }}
            className="group relative p-8 rounded-2xl cursor-pointer
            bg-white border border-slate-200
            hover:border-slate-300
            hover:shadow-lg
            transition-all duration-500 overflow-hidden"
          >
            {/* watermark icon */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.04] text-slate-300 group-hover:opacity-[0.08] transition-all duration-700 pointer-events-none">
              <Icon size={140} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                {/* icon */}
                <div
                  className={`p-3 rounded-xl bg-slate-100 text-slate-600 border border-slate-200 transition-all duration-300 ${accent}`}
                >
                  <Icon className="w-5 h-5" />
                </div>

                {/* category */}
                <span className="text-[9px] font-bold text-slate-400 uppercase tracking-widest group-hover:text-slate-600 transition-colors">
                  {item.category}
                </span>
              </div>

              <h3 className="text-[18px] font-extrabold text-slate-900 tracking-tight uppercase mb-2">
                {item.name}
              </h3>

              <p className="text-slate-500 text-xs font-medium leading-relaxed">
                {item.benefit}
              </p>
            </div>

            {/* bottom accent bar */}
            <div
              className={`absolute bottom-0 left-0 h-0.5 w-0 transition-all duration-700
              group-hover:w-full
              bg-linear-to-r from-blue-500 via-indigo-500 to-purple-500`}
            />
          </motion.div>
        );
      })}
    </div>
  );
}
