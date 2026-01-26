// src/components/sections/WhyChooseUsServer.tsx
import WhyChooseUsClient from "./WhyChooseUsClient";
import { MetricItem } from "@/@types/index"; // Import your interface

export const metricsData: MetricItem[] = [
  {
    id: "m1",
    value: 99,
    suffix: "%",
    label: "Core Web Vitals",
    desc: "Optimized for the highest Google performance standards.",
    iconName: "Zap", // Added required property
  },
  {
    id: "m2",
    value: 400,
    suffix: "%",
    label: "Traffic Growth",
    desc: "Average increase in organic visibility for our clients.",
    iconName: "TrendingUp", // Added required property
  },
  {
    id: "m3",
    value: 1.2,
    suffix: "s",
    label: "Load Velocity",
    desc: "Ultra-fast delivery ensuring zero user drop-off.",
    iconName: "Activity", // Added required property
  },
  {
    id: "m4",
    value: 24,
    suffix: "/7",
    label: "Expert Support",
    desc: "Continuous monitoring and architectural maintenance.",
    iconName: "ShieldCheck", // Added required property
  },
];

export default function WhyChooseUs() {
  return (
    // Updated background and text colors to match your "Sleek White & Sky" theme
    <section className="bg-white text-slate-900 py-32 px-6 overflow-hidden border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Ambition Statement */}
          <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-40">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-sky-50 border border-sky-100 text-sky-500 text-[10px] font-black uppercase tracking-[0.3em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-sky-400"></span>
              </span>
              Performance Audit
            </div>

            <h2 className="text-6xl md:text-8xl font-black tracking-tighter leading-[0.85] uppercase text-slate-950">
              Driven by <br />
              <span className="text-sky-400 italic underline decoration-slate-200 underline-offset-8">
                Data.
              </span>{" "}
              <br />
              Defined by <br />
              Results.
            </h2>

            <p className="text-slate-500 text-lg font-medium leading-relaxed max-w-md">
              We don&apos;t guess. We engineer systems based on measurable
              growth metrics that move the needle for your business
              infrastructure.
            </p>
          </div>

          {/* Right Side: The Metric Grid */}
          <div className="lg:col-span-7">
            <WhyChooseUsClient metrics={metricsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
