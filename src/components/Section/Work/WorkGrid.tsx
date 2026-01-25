// src/components/sections/work/WorkGrid.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { ArrowUpRight, BarChart3 } from "lucide-react";

const projects = [
  {
    id: "01",
    title: "Vanguard Logistics",
    category: "Full-Scale System",
    metric: "140% Conversion Lift",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=1200",
    tags: ["Next.js", "SEO", "Real-time Tracking"],
  },
  {
    id: "02",
    title: "Nova Fintech",
    category: "UI Architecture",
    metric: "0.8s Median Load",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=1200",
    tags: ["TypeScript", "Dashboard", "Security"],
  },
  {
    id: "03",
    title: "Aura Global",
    category: "E-Commerce System",
    metric: "$2.4M Revenue Growth",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1200",
    tags: ["Headless CMS", "Performance", "UX"],
  },
];

export default function WorkGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto space-y-32">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
            className={`group relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-center transition-opacity duration-500 ${
              hoveredIndex !== null && hoveredIndex !== index
                ? "opacity-30 blur-sm"
                : "opacity-100"
            }`}
          >
            {/* Project Image - 7 Columns */}
            <div className="lg:col-span-7 relative aspect-16/10 rounded-[2.5rem] overflow-hidden bg-brand-ice">
              <Image
                src={project.img}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-brand-midnight/10 group-hover:bg-transparent transition-colors duration-500" />
            </div>

            {/* Project Info - 5 Columns */}
            <div className="lg:col-span-5 space-y-8">
              <div className="flex items-center gap-4">
                <span className="text-5xl font-black text-brand-midnight/10 italic">
                  0{index + 1}
                </span>
                <div className="h-px grow bg-brand-midnight/5" />
                <span className="px-3 py-1 rounded-md bg-brand-cobalt text-white text-[10px] font-bold uppercase tracking-widest">
                  {project.category}
                </span>
              </div>

              <div className="space-y-4">
                <h3 className="text-4xl md:text-6xl font-black text-brand-midnight tracking-tighter uppercase leading-none">
                  {project.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest border border-brand-midnight/10 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6 bg-brand-ice/50 rounded-2xl border border-brand-midnight/5 flex items-center justify-between group-hover:bg-white group-hover:border-brand-cobalt transition-all">
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-brand-cobalt text-white rounded-lg">
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold text-muted-foreground uppercase tracking-widest">
                      Key Metric
                    </p>
                    <p className="text-xl font-black text-brand-midnight">
                      {project.metric}
                    </p>
                  </div>
                </div>
                <div className="h-12 w-12 rounded-full border border-brand-midnight/10 flex items-center justify-center group-hover:bg-brand-midnight group-hover:text-white transition-all">
                  <ArrowUpRight className="w-5 h-5" />
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
