"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";

interface Project {
  title: string;
  image: string;
  liveUrl: string;
  problem: string;
  solution: string;
  outcome: string;
}

export default function ProjectCard({
  project,
  index,
  total,
}: {
  project: Project;
  index: number;
  total: number;
}) {
  const container = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.025],
  );

  return (
    <div
      ref={container}
      className="sticky top-16 md:top-24 mb-12 cursor-pointer"
    >
      <motion.div
        style={{ scale }}
        className="bg-white border border-slate-200 shadow-xl overflow-hidden"
      >
        {/* GRID LAYOUT */}
        <div className="grid grid-cols-1 lg:grid-cols-12">
          {/* IMAGE */}
          <div className="lg:col-span-7 relative h-56 md:h-80 lg:h-full">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* desktop hover CTA */}
            <div className="hidden lg:flex absolute inset-0 bg-black/0 hover:bg-black/40 transition items-center justify-center">
              <a
                href={project.liveUrl}
                target="_blank"
                className="opacity-0 hover:opacity-100 transition bg-white text-black px-6 py-3 text-xs font-bold tracking-widest uppercase flex items-center gap-2"
              >
                Visit Live
                <ExternalLink size={12} />
              </a>
            </div>
          </div>

          {/* TEXT */}
          <div className="lg:col-span-5 p-5 md:p-8 flex flex-col justify-between space-y-6">
            {/* TOP */}
            <div className="space-y-5">
              {/* title */}
              <h3 className="text-lg md:text-2xl font-black text-slate-900 leading-tight">
                {project.title}
              </h3>

              {/* outcome (hook) */}
              <div className="bg-slate-50 border border-slate-200 p-4">
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Outcome
                </p>
                <p className="text-sm md:text-base font-semibold text-slate-900">
                  {project.outcome}
                </p>
              </div>

              {/* problem */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Problem
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              {/* solution */}
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                  Solution
                </p>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-2 bg-slate-900 text-white py-3 px-6 text-xs font-bold tracking-widest uppercase hover:bg-sky-500 transition"
            >
              View Live Project
              <ExternalLink size={12} />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
