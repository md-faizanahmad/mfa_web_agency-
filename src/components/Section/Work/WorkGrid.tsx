"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import workData from "../../../../public/work.json";

interface Project {
  title: string;
  image: string;
  liveUrl: string;
  problem: string;
  solution: string;
  outcome: string;
}

export default function WorkGrid() {
  return (
    <section className="relative py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col pb-[20vh]">
        {workData.map((project: Project, index: number) => (
          <ProjectCard
            key={project.liveUrl}
            project={project}
            index={index}
            total={workData.length}
          />
        ))}
      </div>
    </section>
  );
}

function ProjectCard({
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
      className="sticky top-20 md:top-28 h-[75vh] w-full mb-16 flex items-center justify-center"
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full bg-white border border-slate-200 shadow-2xl grid grid-cols-1 lg:grid-cols-12 overflow-hidden"
      >
        {/* LEFT: VISUAL */}
        <div className="lg:col-span-7 relative h-64 lg:h-full bg-slate-50 overflow-hidden group">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
          />

          {/* overlay CTA */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-500 flex items-center justify-center">
            <a
              href={project.liveUrl}
              target="_blank"
              className="opacity-0 group-hover:opacity-100 transition-all duration-500 bg-white text-black px-6 py-3 text-xs font-bold tracking-widest uppercase flex items-center gap-2"
            >
              Visit Live
              <ExternalLink size={12} />
            </a>
          </div>
        </div>

        {/* RIGHT: CASE STUDY */}
        <div className="lg:col-span-5 p-8 flex flex-col justify-between">
          <div className="space-y-6">
            {/* index */}
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-slate-100 italic">
                0{index + 1}
              </span>
              <div className="h-px grow bg-slate-200" />
              <span className="text-[10px] font-bold tracking-widest text-sky-500 uppercase">
                Case Study
              </span>
            </div>

            {/* title */}
            <h3 className="text-2xl font-black text-slate-900 uppercase leading-tight">
              {project.title}
            </h3>

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

            {/* outcome */}
            <div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mb-1">
                Outcome
              </p>
              <p className="text-sm font-semibold text-slate-900">
                {project.outcome}
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="pt-6 border-t border-slate-200">
            <a
              href={project.liveUrl}
              target="_blank"
              className="inline-flex items-center gap-2 text-xs font-bold tracking-widest uppercase text-slate-500 hover:text-sky-500 transition"
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
