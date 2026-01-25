"use client";

import { motion } from "framer-motion";
import {
  Search,
  Gauge,
  Smartphone,
  ShieldAlert,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const problems = [
  {
    title: "Ghost Presence",
    desc: "Invisible to Google, ignored by local leads.",
    icon: Search,
    accent: "text-blue-500",
  },
  {
    title: "The Speed Tax",
    desc: "Losing 10% revenue per second of load time.",
    icon: Gauge,
    accent: "text-emerald-500",
  },
  {
    title: "Mobile Friction",
    desc: "Users bounce because your UI feels broken on phones.",
    icon: Smartphone,
    accent: "text-brand-cobalt",
  },
  {
    title: "Trust Gap",
    desc: "Low-quality design kills high-ticket conversions.",
    icon: ShieldAlert,
    accent: "text-amber-500",
  },
];

export default function ProblemSolving() {
  return (
    <section className="bg-white py-24 px-6 overflow-visible">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Sticky Title (Stays as you scroll) */}
        <div className="lg:sticky lg:top-40 space-y-6">
          <div className="flex items-center gap-3 text-brand-cobalt font-bold text-xs uppercase tracking-[0.2em]">
            <span className="w-8 h-0.5 bg-brand-cobalt" />
            Strategic Resolutions
          </div>
          <h2 className="text-4xl md:text-5xl font-black text-brand-midnight leading-tight tracking-tighter">
            WE FIX THE FRICTION <br />
            <span className="text-muted-foreground/30 font-outline-2">
              STUNTING YOUR GROWTH.
            </span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md font-medium">
            Generic sites don&apos;t convert. We build high-performance systems
            that solve real business bottlenecks.
          </p>
        </div>

        {/* Right Side: The Compact Stack */}
        <div className="relative flex flex-col gap-6 lg:pb-40">
          {problems.map((item, index) => (
            <motion.div
              key={index}
              className="sticky top-32 w-full group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{
                // This creates the "Card-Stacking" layered look without being huge
                marginTop: index === 0 ? "0px" : "-10px",
              }}
            >
              <div className="relative bg-white border border-brand-midnight/10 rounded-2xl p-6 md:p-8 shadow-[0_10px_40px_-15px_rgba(0,0,0,0.1)] transition-all duration-500 group-hover:border-brand-cobalt/40 group-hover:-translate-y-2">
                {/* Subtle Blur Background inside card */}
                <div className="absolute inset-0 bg-brand-ice/50 backdrop-blur-sm rounded-2xl -z-10" />

                <div className="flex items-start justify-between">
                  <div className="flex gap-6 items-center">
                    <div
                      className={cn(
                        "p-3 rounded-xl bg-white border border-brand-midnight/5 shadow-sm",
                        item.accent,
                      )}
                    >
                      <item.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-brand-midnight mb-1 italic">
                        0{index + 1}. {item.title}
                      </h3>
                      <p className="text-muted-foreground text-sm font-medium">
                        {item.desc}
                      </p>
                    </div>
                  </div>

                  <button className="p-2 rounded-full border border-brand-midnight/5 hover:bg-brand-midnight hover:text-white transition-all">
                    <ArrowUpRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Tactical Detail Bar */}
                <div className="mt-6 pt-4 border-t border-brand-midnight/5 flex justify-between items-center">
                  <span className="text-[10px] font-bold text-brand-midnight/20 uppercase tracking-widest">
                    Systematic Resolve
                  </span>
                  <span className="text-[10px] font-bold text-brand-cobalt/60">
                    ACTIVE_MODE
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
