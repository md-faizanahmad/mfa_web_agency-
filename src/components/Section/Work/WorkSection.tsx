"use client";

import ProjectCard from "./ProjectCard";
import workData from "../../../../public/work.json";

import SectionHeader from "./SectionHeader";

export default function WorkSection() {
  return (
    <section className="py-20 px-5 md:px-6 bg-white">
      <div className="max-w-6xl mx-auto space-y-12">
        <SectionHeader />

        <div className="space-y-16">
          {workData.map((project, index) => (
            <ProjectCard
              key={project.liveUrl}
              project={project}
              index={index}
              total={workData.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
