"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  Layout,
  Code,
  Search,
  Rocket,
  Settings,
} from "lucide-react";

const stages = [
  {
    title: "Planning",
    desc: "Understanding goals, audience and project scope.",
    icon: ClipboardList,
  },
  {
    title: "Design",
    desc: "Wireframes and interface design focused on usability.",
    icon: Layout,
  },
  {
    title: "Development",
    desc: "Building the website using modern technologies.",
    icon: Code,
  },
  {
    title: "Testing",
    desc: "Performance and device compatibility checks.",
    icon: Search,
  },
  {
    title: "Launch",
    desc: "Deployment and live environment setup.",
    icon: Rocket,
  },
  {
    title: "Maintenance",
    desc: "Updates, monitoring and improvements.",
    icon: Settings,
  },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        {/* heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-3xl md:text-5xl font-bold">
            Website Development Process
          </h2>
        </motion.div>

        {/* timeline */}
        <div className="relative">
          {/* vertical line (mobile) */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-border md:hidden" />

          {/* horizontal line (desktop) */}
          <div className="hidden md:block absolute top-10 left-0 w-full h-px bg-border" />

          {/* stages */}
          <div className="flex flex-col md:grid md:grid-cols-3 lg:grid-cols-6 gap-12 md:gap-10 relative">
            {stages.map((stage, index) => {
              const Icon = stage.icon;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex md:flex-col items-start md:items-center text-left md:text-center group relative"
                >
                  {/* icon */}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    className="
                    relative z-10 flex items-center justify-center
                    w-14 h-14 md:w-20 md:h-20
                    rounded-full
                    border border-border
                    bg-card
                    shadow-sm
                    group-hover:border-primary
                    transition-colors
                    "
                  >
                    <Icon className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                  </motion.div>

                  {/* text */}
                  <div className="ml-6 md:ml-0 md:mt-6 max-w-50">
                    <p className="font-semibold text-sm md:text-base">
                      {stage.title}
                    </p>

                    <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
                      {stage.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
