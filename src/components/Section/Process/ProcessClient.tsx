// src/app/process/ProcessClient.tsx
"use client";

import { motion } from "framer-motion";
import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    id: "01",
    title: "Discovery & Blueprint",
    desc: "We analyze your business goals and map out a technical architecture designed for speed and conversion.",
    icon: Search,
  },
  {
    id: "02",
    title: "System Design",
    desc: "A mobile-first, sharp-edge UI is engineered to build brand authority and guide user behavior.",
    icon: PenTool,
  },
  {
    id: "03",
    title: "Agile Development",
    desc: "We build your solution using Next.js and Tailwind, ensuring the code is clean, light, and high-performance.",
    icon: Code2,
  },
  {
    id: "04",
    title: "Global Deployment",
    desc: "After rigorous testing, we launch your system onto our global edge hosting network for instant access.",
    icon: Rocket,
  },
];

export default function ProcessClient() {
  return (
    <div className="space-y-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.id}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay: i * 0.1 }}
          className="group relative bg-white border border-slate-100 p-8 hover:border-sky-400 transition-colors"
        >
          {/* Visual Step Number */}
          <span className="absolute top-8 right-8 text-4xl font-black text-slate-50 italic group-hover:text-sky-50 transition-colors">
            {step.id}
          </span>

          <div className="relative z-10 flex gap-6">
            <div className="w-12 h-12 bg-slate-950 flex items-center justify-center shrink-0 group-hover:bg-sky-400 transition-colors">
              <step.icon
                size={20}
                className="text-white group-hover:text-slate-950"
              />
            </div>

            <div className="space-y-3">
              <h3 className="text-xl font-black text-slate-900 uppercase tracking-tighter">
                {step.title}
              </h3>
              <p className="text-xs text-slate-500 font-semibold leading-relaxed max-w-sm">
                {step.desc}
              </p>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
