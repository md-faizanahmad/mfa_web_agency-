// src/app/process/page.tsx

import ProcessClient from "@/components/Home/Process/ProcessClient";

export const metadata = {
  title: "Our Process | High-Performance Development Roadmap",
  description:
    "From initial architecture to global deployment. Explore our streamlined method for building fast, secure, and scalable digital systems.",
};

export default function ProcessPage() {
  return (
    <main className="bg-white min-h-screen pt-32 pb-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
        {/* Content Side */}
        <div className="lg:col-span-6 space-y-12 lg:sticky lg:top-32">
          <header className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono">
              The_Methodology
            </span>
            <h1 className="text-6xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              System <br />
              <span className="text-sky-400 italic">Roadmap.</span>
            </h1>
          </header>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-lg">
            We don&apos;t just build websites; we engineer digital growth. Our
            process is designed to eliminate friction and maximize performance
            at every stage of the lifecycle.
          </p>

          <div className="pt-8 space-y-4">
            <div className="h-px bg-slate-100 w-full" />
            <div className="flex justify-between items-center text-[10px] font-black uppercase tracking-widest text-slate-400">
              <span>Phase: Implementation</span>
              <span>Active Systems: 100%</span>
            </div>
          </div>
        </div>

        {/* Tactical Process Steps */}
        <div className="lg:col-span-6">
          <ProcessClient steps={[]} />
        </div>
      </div>
    </main>
  );
}
