"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#050505] py-24 md:py-32 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-end">
          {/* Balanced Typography Stack */}
          <div className="lg:col-span-8 space-y-4">
            <div className="flex items-center gap-3 text-neutral-400 font-mono text-sm tracking-wide">
              <span>( WORK WITH US )</span>
              <div className="h-px w-12 bg-neutral-800" />
              <span className="text-yellow-600 font-bold">NEXT STEP</span>
            </div>

            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1]">
              Let’s build something that converts.
              <span className="block text-xl md:text-2xl font-medium text-neutral-400 tracking-normal mt-3 font-sans">
                No templates. No fluff. Just custom performance.
              </span>
            </h2>
          </div>

          {/* Clean, High-Contrast Action Interaction */}
          <div className="lg:col-span-4 flex lg:justify-end items-center">
            <Link href="/project-request" className="group w-full sm:w-auto">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between gap-6 border-b border-white/20 pb-4 text-white transition-colors duration-300 group-hover:border-white"
              >
                <span className="text-lg font-bold tracking-tight">
                  Get Started
                </span>
                <div className="p-3 rounded-full bg-neutral-900 text-white border border-neutral-800 group-hover:bg-white group-hover:text-black transition-all duration-300">
                  <ArrowUpRight
                    size={18}
                    strokeWidth={2}
                    className="transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </div>
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
