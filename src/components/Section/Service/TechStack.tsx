// src/components/sections/services/TechStackServer.tsx

import TechStackClient from "./TechStackClient";

export const stackData = [
  {
    id: "next",
    name: "Next.js 15",
    category: "Framework",
    desc: "App Router & Server Actions",
  },
  {
    id: "ts",
    name: "TypeScript",
    category: "Language",
    desc: "Type-safe robust architecture",
  },
  {
    id: "tailwind",
    name: "Tailwind v4",
    category: "Styling",
    desc: "High-performance modern CSS",
  },
  {
    id: "framer",
    name: "Framer Motion",
    category: "Animation",
    desc: "Fluid, kinetic user experiences",
  },
  {
    id: "shadcn",
    name: "shadcn/ui",
    category: "Components",
    desc: "Accessible, clean UI primitives",
  },
  {
    id: "vercel",
    name: "Vercel Edge",
    category: "Deployment",
    desc: "Global sub-second delivery",
  },
];

export default function TechStackServer() {
  return (
    <section className="bg-brand-midnight py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-20">
          <div className="space-y-4">
            <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.4em]"></span>
            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter uppercase leading-[0.85]">
              Modern <br />
              <span className="text-brand-cobalt italic">Infrastructure.</span>
            </h2>
          </div>
          <p className="text-blue-100/40 font-medium max-w-sm border-l border-brand-cobalt/20 pl-6 italic">
            We leverage a bleeding-edge stack to ensure your business system is
            fast, secure, and infinitely scalable.
          </p>
        </div>

        <TechStackClient stack={stackData} />
      </div>
    </section>
  );
}
