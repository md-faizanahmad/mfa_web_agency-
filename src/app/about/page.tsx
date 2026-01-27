// src/components/sections/about/AboutServer.tsx

import AboutClient from "@/components/Section/About/AboutClient";

export default function About() {
  return (
    <section className="bg-white mt-12 py-20 px-6 border-b border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content Side */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-sky-500 font-bold text-[9px] uppercase tracking-[0.4em] font-mono"></span>
            <h2 className="text-4xl md:text-7xl font-black text-slate-900 leading-[0.85]">
              We Make <br />
              <span className="text-sky-200 ">Sites Faster.</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-500 max-w-lg">
            Most business websites are slow and hard to manage. We solve that.
            We build simple, high-speed systems that help you rank higher on
            Google and turn visitors into customers.
          </p>

          <div className="flex gap-10 pt-4">
            <div>
              <div className="text-3xl font-black text-slate-950 italic leading-none">
                1.2s
              </div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">
                Avg Load Time
              </p>
            </div>
            <div className="h-10 w-px bg-slate-100" />
            <div>
              <div className="text-3xl font-black text-slate-950 italic leading-none">
                100%
              </div>
              <p className="text-[9px] font-black uppercase tracking-widest text-slate-400 mt-2">
                SEO Health
              </p>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:col-span-5">
          <AboutClient />
        </div>
      </div>
    </section>
  );
}
