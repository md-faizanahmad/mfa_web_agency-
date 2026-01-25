// src/components/sections/WorkClient.tsx
"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export default function WorkClient({ projects }: { projects: any[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.id}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group relative h-350px md:h-450px overflow-hidden rounded-3xl bg-brand-ice cursor-pointer"
        >
          {/* Main Image Layer */}
          <Image
            src={project.img}
            alt={project.title}
            fill
            className="object-cover grayscale brightness-75 transition-all duration-700 ease-in-out group-hover:grayscale-0 group-hover:scale-105 group-hover:brightness-100"
          />

          {/* Sleek Overlay Gradient */}
          <div className="absolute inset-0 bg-linear-to-t from-brand-midnight via-brand-midnight/20 to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />

          {/* Static UI Elements */}
          <div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
            <div className="flex justify-between items-start">
              <span className="text-xs font-black text-white/40 tracking-widest uppercase italic">
                Case_0{index + 1}
              </span>
              <div className="bg-white/10 backdrop-blur-md p-3 rounded-full border border-white/20 text-white group-hover:bg-brand-cobalt group-hover:border-brand-cobalt transition-all duration-300">
                <ArrowUpRight className="w-5 h-5" />
              </div>
            </div>

            <div className="space-y-3">
              <div className="inline-block px-3 py-1 rounded-md bg-brand-cobalt text-white text-[10px] font-bold uppercase tracking-widest opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500">
                {project.result}
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-white tracking-tighter uppercase leading-none">
                {project.title}
              </h3>
              <p className="text-white/60 text-sm font-bold tracking-wide uppercase">
                {project.category}
              </p>
            </div>
          </div>

          {/* Lighting Line Interaction */}
          <div className="absolute bottom-0 left-0 h-1 w-0 bg-brand-cobalt transition-all duration-700 group-hover:w-full" />
        </motion.div>
      ))}
    </div>
  );
}
