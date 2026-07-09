"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="bg-[#050505] py-20 md:py-28 px-6 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Left Side: Typography Headline */}
          <div className="lg:col-span-8 space-y-4">
            <span className="text-brand-cobalt text-xs font-mono tracking-widest uppercase block">
              Work With Us
            </span>
            <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[1.05]">
              Have a project in mind? <br />
              <span className="text-neutral-500 font-normal italic">
                Let’s talk strategy.
              </span>
            </h2>
          </div>

          {/* Right Side: Raw Interaction Link */}
          <div className="lg:col-span-4 flex lg:justify-end items-center pt-4 lg:pt-0">
            <Link
              href="/project-request"
              className="group relative block w-full sm:w-auto"
            >
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center justify-between gap-8 border-b-2 border-white pb-3 text-white transition-colors duration-300 group-hover:text-neutral-400 group-hover:border-neutral-400"
              >
                <span className="text-lg md:text-xl font-bold tracking-tight">
                  Start Your Project
                </span>
                <div className="p-2 rounded-full bg-white text-black group-hover:bg-brand-cobalt group-hover:text-white transition-colors duration-300">
                  <ArrowUpRight
                    size={20}
                    strokeWidth={2.5}
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
