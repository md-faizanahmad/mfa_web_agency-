// src/components/sections/ProcessServer.tsx

import ProcessClient from "./ProcessClient";

export const steps = [
  {
    no: "01",
    title: "Discovery & Audit",
    desc: "We strip back the noise to identify your specific technical bottlenecks and market opportunities.",
    tag: "Intelligence",
  },
  {
    no: "02",
    title: "Strategic Design",
    desc: "No templates. We architect a bespoke UI designed to convert high-ticket leads into customers.",
    tag: "Architecture",
  },
  {
    no: "03",
    title: "High-Performance Build",
    desc: "Using Next.js and Tailwind, we engineer a system that is sub-second fast and SEO-dominant.",
    tag: "Engineering",
  },
  {
    no: "04",
    title: "Launch & Support",
    desc: "Zero-downtime deployment followed by continuous performance monitoring and scaling.",
    tag: "Deployment",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.3em] block mb-4"></span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-midnight tracking-tighter uppercase leading-[0.85] mb-8">
              FROM <br />
              <span className="text-brand-midnight/10 font-outline-2">
                PLAN
              </span>{" "}
              <br />
              TO POWER.
            </h2>
            <p className="text-muted-foreground font-medium max-w-sm">
              Our process is designed for speed and precision. We don&apos;t
              just build websites; we deploy business systems.
            </p>
          </div>

          {/* Right: Interactive Timeline */}
          <div className="lg:col-span-8">
            <ProcessClient steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
