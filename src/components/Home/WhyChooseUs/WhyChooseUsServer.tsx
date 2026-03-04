// src/components/sections/WhyChooseUs.tsx
import { metricsData } from "@/data/metrics";
import WhyChooseUsClient from "./WhyChooseUsClient";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 border-b border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* CONTENT: Mobile First Order 1 */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <span className="text-brand-cobalt text-[10px] tracking-[0.4em] uppercase font-black font-mono">
                System_Values_v2
              </span>

              <h2 className="text-4xl md:text-7xl font-black text-slate-900 uppercase tracking-tighter leading-[0.85]">
                Built for <br />
                <span className="text-slate-300 italic">Performance.</span>
              </h2>
            </div>

            <p className="text-slate-500 text-sm md:text-base font-medium leading-relaxed max-w-md">
              Most websites are digital placeholders. We engineer **Business
              Assets**. By focusing on technical clarity and high-velocity code,
              we ensure your infrastructure supports organic growth and user
              retention.
            </p>

            {/* Tactical Status Bar (Visual UI) */}
            <div className="hidden md:flex items-center gap-4 pt-4">
              <div className="h-px grow bg-slate-100" />
              <div className="text-[9px] font-black text-slate-300 uppercase tracking-widest">
                Protocol: Secure // Velocity: Active
              </div>
            </div>
          </div>

          {/* METRICS: Mobile First Order 2 */}
          <div className="lg:col-span-7">
            <WhyChooseUsClient metrics={metricsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
