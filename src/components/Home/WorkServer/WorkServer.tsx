// src/components/sections/WorkServer.tsx
import WorkClient from "./WorkClient";

export const projects = [
  {
    id: "01",
    title: "Vanguard",
    category: "Systems",
    result: "+140% ROI",
    img: "https://images.unsplash.com/photo-1586717791821-3f44a563dc4c?q=80&w=800",
  },
  {
    id: "02",
    title: "Nova",
    category: "Fintech",
    result: "0.8s Load",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800",
  },
  {
    id: "03",
    title: "Aura",
    category: "E-Com",
    result: "$2M Lift",
    img: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=800",
  },
  {
    id: "04",
    title: "Nexus",
    category: "Arch",
    result: "Global",
    img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=800",
  },
];

export default function Work() {
  return (
    <section className="bg-white py-24 px-6 border-b border-brand-midnight/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 space-y-4">
          <div className="flex items-center gap-3 text-brand-cobalt font-bold text-xs uppercase tracking-[0.3em]">
            <span className="w-10 h-1px bg-brand-cobalt" />
            Selected Portfolio
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tighter uppercase text-brand-midnight leading-[0.85]">
            Engineered <br />
            <span className="text-brand-midnight/10 font-outline-2">
              Excellence.
            </span>
          </h2>
        </div>
        <WorkClient projects={projects} />
      </div>
    </section>
  );
}
