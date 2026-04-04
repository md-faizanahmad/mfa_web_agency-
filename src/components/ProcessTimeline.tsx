"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  ClipboardList,
  Layout,
  Code,
  Search,
  Rocket,
  Settings,
} from "lucide-react";

const stages = [
  { title: "Planning", desc: "Understanding goals", icon: ClipboardList },
  { title: "Design", desc: "UX & UI structure", icon: Layout },
  { title: "Development", desc: "Clean scalable code", icon: Code },
  { title: "Testing", desc: "Performance & QA", icon: Search },
  { title: "Launch", desc: "Deployment", icon: Rocket },
  { title: "Maintenance", desc: "Continuous improvements", icon: Settings },
];

export default function ProcessTimeline() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start center", "end center"],
  });

  // line fill animation
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section ref={ref} className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-6 relative">
        {/* animated vertical line */}
        <div className="absolute left-6 top-0 bottom-0 w-px bg-border">
          <motion.div
            style={{ height: lineHeight }}
            className="w-full bg-primary origin-top"
          />
        </div>

        <div className="space-y-16">
          {stages.map((stage, index) => {
            const Icon = stage.icon;

            return (
              <motion.div
                key={index}
                className="flex items-start gap-6 group"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true }}
              >
                {/* icon */}
                <motion.div
                  className="w-12 h-12 rounded-full border bg-card flex items-center justify-center relative z-10"
                  whileHover={{ scale: 1.1 }}
                >
                  <Icon className="w-5 h-5" />
                </motion.div>

                {/* content */}
                <div>
                  <h3 className="font-semibold text-lg">{stage.title}</h3>

                  <p className="text-sm text-muted-foreground mt-1">
                    {stage.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
