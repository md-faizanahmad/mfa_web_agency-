// src/components/sections/services/ServiceGrid.tsx
"use client";

import { motion } from "framer-motion";
import { Zap, Globe, Shield, Code2, ArrowRight } from "lucide-react";
import { useState } from "react";

const detailedServices = [
  {
    id: "dev",
    title: "Next.js Systems",
    icon: Code2,
    features: [
      "Server Components (RSC)",
      "Edge Runtime Deployment",
      "Type-Safe Architecture",
    ],
    desc: "We build scalable, modular systems using the App Router for maximum performance and future-proofing.",
  },
  {
    id: "seo",
    title: "Technical SEO",
    icon: Globe,
    features: [
      "Semantic HTML5 Structure",
      "JSON-LD Schema Injection",
      "Dynamic Sitemap Management",
    ],
    desc: "Search dominance isn't an accident. It's a result of clean code and strategic technical architecture.",
  },
  {
    id: "perf",
    title: "Performance",
    icon: Zap,
    features: [
      "Zero-Bloat CSS",
      "Asset Optimization Pipelines",
      "Lighthouse Score Obsession",
    ],
    desc: "Speed is the #1 conversion factor. We ensure your site loads instantly on 3G and 5G networks alike.",
  },
];

export default function ServiceGrid() {
  const [active, setActive] = useState(detailedServices[0].id);

  return (
    <section className="py-32 px-6 bg-brand-ice/20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Navigation - 4 Columns */}
        <div className="lg:col-span-4 space-y-2">
          {detailedServices.map((s) => (
            <button
              key={s.id}
              onClick={() => setActive(s.id)}
              className={`w-full text-left p-6 rounded-2xl border transition-all duration-300 flex items-center justify-between group ${
                active === s.id
                  ? "bg-brand-midnight border-brand-midnight text-white shadow-xl translate-x-4"
                  : "bg-white border-brand-midnight/5 text-brand-midnight hover:border-brand-cobalt/40"
              }`}
            >
              <div className="flex items-center gap-4">
                <s.icon
                  className={`w-5 h-5 ${active === s.id ? "text-brand-cobalt" : "text-brand-midnight/30"}`}
                />
                <span className="font-black uppercase tracking-tight text-lg">
                  {s.title}
                </span>
              </div>
              <ArrowRight
                className={`w-4 h-4 transition-transform ${active === s.id ? "rotate-0 opacity-100" : "-rotate-45 opacity-0"}`}
              />
            </button>
          ))}
        </div>

        {/* Content - 8 Columns */}
        <div className="lg:col-span-8 bg-white rounded-[2.5rem] border border-brand-midnight/5 p-8 md:p-16 shadow-2xl shadow-brand-midnight/5">
          {detailedServices.map(
            (s) =>
              s.id === active && (
                <motion.div
                  key={s.id}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
                >
                  <h3 className="text-4xl font-black text-brand-midnight uppercase tracking-tighter">
                    {s.title}
                  </h3>
                  <p className="text-muted-foreground text-xl leading-relaxed">
                    {s.desc}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-8">
                    {s.features.map((feature, i) => (
                      <div
                        key={i}
                        className="flex items-center gap-3 p-4 bg-brand-ice rounded-xl border border-brand-midnight/5"
                      >
                        <div className="w-2 h-2 rounded-full bg-brand-cobalt" />
                        <span className="font-bold text-sm text-brand-midnight uppercase tracking-tight">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-8 border-t border-brand-midnight/5 flex items-center justify-between">
                    <span className="text-xs font-black text-brand-midnight/20 tracking-[0.3em] uppercase italic">
                      Precision_spec_v4
                    </span>
                    <button className="bg-brand-cobalt text-white px-8 py-3 rounded-full font-bold hover:bg-brand-midnight transition-colors">
                      Inquire about this system
                    </button>
                  </div>
                </motion.div>
              ),
          )}
        </div>
      </div>
    </section>
  );
}
