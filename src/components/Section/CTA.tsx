"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export function CTA() {
  return (
    <section className="relative py-12 md:py-16 bg-[#050505]">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-white/10 rounded-2xl px-6 md:px-10 py-6 md:py-8 bg-white/2 backdrop-blur"
        >
          {/* Left Content */}
          <div className="max-w-lg">
            <h3 className="text-xl md:text-2xl font-medium text-white tracking-tight">
              Let’s build something that converts.
            </h3>
            <p className="text-white/50 text-sm md:text-base mt-1">
              No templates. No fluff. Just performance.
            </p>
          </div>

          {/* CTA Button */}
          <Link
            href="/project-request"
            className="group inline-flex items-center gap-2 text-sm md:text-base font-medium text-white border border-white/20 px-5 py-2.5 rounded-full hover:bg-white hover:text-black transition-all duration-300"
          >
            Start Project
            <ArrowUpRight
              size={18}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
