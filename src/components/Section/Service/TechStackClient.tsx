// src/components/sections/services/TechStackClient.tsx
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

export default function TechStackClient({ stack }: { stack: TechItem[] }) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
      {stack.map((item, index) => {
        const Icon = iconMap[item.iconName] || Globe;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="group relative p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-sky-400/30 hover:bg-white transition-all duration-500 overflow-hidden"
          >
            {/* WATERMARK ICON */}
            <div className="absolute -right-6 -bottom-6 opacity-[0.03] text-sky-500 group-hover:opacity-[0.1] group-hover:-rotate-12 group-hover:scale-110 transition-all duration-700 pointer-events-none">
              <Icon size={140} strokeWidth={1} />
            </div>

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-10">
                <div className="p-3 rounded-xl bg-white text-sky-500 border border-slate-100 group-hover:bg-sky-500 group-hover:text-white transition-all duration-300 shadow-sm">
                  <Icon className="w-5 h-5" />
                </div>
                <span className="text-[9px] font-black text-slate-300 uppercase tracking-widest group-hover:text-sky-400 transition-colors">
                  {item.category}
                </span>
              </div>

              <h3 className="text-[19px] font-black text-slate-900 tracking-tighter uppercase mb-2">
                {item.name}
              </h3>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                {item.benefit}
              </p>
            </div>

            {/* Bottom Progress Line */}
            <div className="absolute bottom-0 left-0 h-1 w-0 bg-sky-400 transition-all duration-700 group-hover:w-full" />
          </motion.div>
        );
      })}
    </div>
  );
}
