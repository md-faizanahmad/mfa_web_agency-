// src/components/sections/about/AboutServer.tsx

import AboutClient from "@/components/Section/About/AboutClient";

export default function About() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side - 7 Columns */}
        <div className="lg:col-span-7 space-y-8">
          <div className="space-y-4">
            <span className="text-sky-500 font-bold text-[10px] uppercase tracking-[0.4em] font-mono"></span>
            <h2 className="text-5xl md:text-8xl font-black text-slate-900 tracking-tighter uppercase leading-[0.85]">
              We build <br />
              <span className="text-sky-400 italic">Fast Websites.</span>
            </h2>
          </div>

          <p className="text-slate-500 text-lg md:text-xl font-medium leading-relaxed max-w-2xl">
            We are a small team of experts focused on one thing: making your
            business grow. By using modern tools like Next.js, we build websites
            that load instantly, look professional, and actually show up on
            Google.
          </p>

          <div className="grid grid-cols-2 gap-8 pt-6">
            <div className="space-y-2">
              <div className="text-4xl font-black text-slate-900 tracking-tighter italic leading-none">
                0%
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Digital Bloat
              </p>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-black text-slate-900 tracking-tighter italic leading-none">
                100%
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-slate-400">
                Result Focused
              </p>
            </div>
          </div>
        </div>

        {/* Visual Side - 5 Columns */}
        <div className="lg:col-span-5">
          <AboutClient />
        </div>
      </div>
    </section>
  );
}
