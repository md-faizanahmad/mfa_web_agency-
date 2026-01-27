// src/components/sections/work/WorkGrid.tsx
"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import Image from "next/image";
import { X, Monitor, ExternalLink } from "lucide-react";
import workData from "../../../../public/work.json";

// Define the Interface for type safety
interface Project {
  title: string;
  image: string;
  liveUrl: string;
}

export default function WorkGrid() {
  return (
    <section className="relative py-20 px-6 bg-white">
      {/* Increased padding-bottom ensures the last card in the stack 
          doesn't get cut off when scrolling.
      */}
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
  const [activeFrame, setActiveFrame] = useState(false);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "start start"],
  });

  // Scale effect creates a "3D stack" depth as cards overlap
  const scale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1 - (total - index) * 0.025],
  );

  return (
    <div
      ref={container}
      className="sticky top-20 md:top-28 h-[70vh] md:h-130.5 w-full mb-12 flex items-center justify-center"
    >
      <motion.div
        style={{ scale }}
        className="w-full h-full bg-white border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-12 rounded-none"
      >
        {/* VISUAL FRAME - 8 COLS */}
        <div className="lg:col-span-8 relative h-64 lg:h-full bg-slate-50 border-b lg:border-b-0 lg:border-r border-slate-100 overflow-hidden group">
          {activeFrame ? (
            <div className="w-full h-full bg-white relative">
              <div className="absolute top-0 left-0 right-0 h-8 bg-slate-100 flex items-center px-4 justify-between z-10 border-b border-slate-200">
                <span className="text-[9px] font-mono text-slate-400 truncate">
                  {project.liveUrl}
                </span>
                <button
                  onClick={() => setActiveFrame(false)}
                  className="hover:text-sky-500 transition-colors"
                >
                  <X size={14} />
                </button>
              </div>
              <iframe
                src={project.liveUrl}
                className="w-full h-full pt-8"
                title={project.title}
              />
            </div>
          ) : (
            <div
              className="relative w-full h-full cursor-pointer overflow-hidden"
              onClick={() => setActiveFrame(true)}
            >
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 800px"
                priority={index < 2}
                className="object-cover object-top transition-transform duration-1000 group-hover:scale-105"
              />

              {/* Organic Hover Overlay */}
              <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 backdrop-blur-[2px] opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-center justify-center">
                <motion.div
                  initial={{ y: 20 }}
                  whileHover={{ y: 0 }}
                  className="bg-white text-slate-900 px-8 py-3 font-black uppercase tracking-[0.2em] text-[10px] flex items-center gap-3 shadow-2xl"
                >
                  <Monitor size={14} className="text-sky-500" />
                  Open System
                </motion.div>
              </div>
            </div>
          )}
        </div>

        {/* INFO AREA - 4 COLS */}
        <div className="lg:col-span-4 p-8 flex flex-col justify-between bg-white">
          <div className="space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl font-black text-slate-100 italic">
                0{index + 1}
              </span>
              <div className="h-px grow bg-slate-100" />
              <span className="text-[9px] font-black uppercase tracking-[0.3em] text-sky-500">
                LIVE_BUILD
              </span>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-black text-slate-900 uppercase tracking-tighter leading-none">
                {project.title.split(" – ")[0]}
              </h3>
              <p className="text-slate-500 text-xs font-semibold leading-relaxed">
                Simplified digital solution designed for rapid organic growth
                and easy business management.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <div className="h-px bg-slate-100" />
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-sky-500 transition-colors group/link"
            >
              Launch Platform
              <ExternalLink
                size={12}
                className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform"
              />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
