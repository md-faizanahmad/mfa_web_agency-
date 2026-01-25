// src/components/sections/services/TechStackClient.tsx
"use client";

import { motion } from "framer-motion";
import { Cpu, Layers, Zap, Shield, Workflow, Globe } from "lucide-react";

const iconMap = {
  next: Globe,
  ts: Shield,
  tailwind: Layers,
  framer: Zap,
  shadcn: Cpu,
  vercel: Workflow,
};

export default function TechStackClient({ stack }: { stack: any[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {stack.map((item, index) => {
        const Icon = iconMap[item.id as keyof typeof iconMap] || Cpu;

        return (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative p-8 rounded-2xl bg-white/2 border border-white/10 hover:border-brand-cobalt/50 transition-all duration-500 overflow-hidden"
          >
            {/* Scan-line Effect */}
            <div className="absolute inset-0 w-full h-px bg-brand-cobalt/20 -translate-y-full group-hover:animate-scan z-0" />

            <div className="relative z-10 flex flex-col h-full">
              <div className="flex justify-between items-start mb-12">
                <div className="p-3 rounded-lg bg-white/5 text-brand-cobalt border border-white/10 group-hover:bg-brand-cobalt group-hover:text-white transition-all duration-300">
                  <Icon className="w-6 h-6" />
                </div>
                <span className="text-[10px] font-bold text-white/20 uppercase tracking-widest group-hover:text-white/40">
                  {item.category}
                </span>
              </div>

              <h3 className="text-2xl font-black text-white tracking-tighter uppercase mb-2">
                {item.name}
              </h3>
              <p className="text-blue-100/30 text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>

            {/* Subtle Gradient Glow */}
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-brand-cobalt/10 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        );
      })}
    </div>
  );
}
