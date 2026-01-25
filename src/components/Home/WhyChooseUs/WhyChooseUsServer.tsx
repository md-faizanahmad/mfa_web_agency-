// src/components/sections/WhyChooseUsServer.tsx

import WhyChooseUsClient from "./WhyChooseUsClient";

export const metricsData = [
  {
    id: "m1",
    value: 99,
    suffix: "%",
    label: "Core Web Vitals",
    desc: "Optimized for the highest Google performance standards.",
  },
  {
    id: "m2",
    value: 400,
    suffix: "%",
    label: "Traffic Growth",
    desc: "Average increase in organic visibility for our clients.",
  },
  {
    id: "m3",
    value: 1.2,
    suffix: "s",
    label: "Load Velocity",
    desc: "Ultra-fast delivery ensuring zero user drop-off.",
  },
  {
    id: "m4",
    value: 24,
    suffix: "/7",
    label: "Expert Support",
    desc: "Continuous monitoring and architectural maintenance.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-brand-midnight text-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side: Ambition Statement */}
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-brand-cobalt text-xs font-bold uppercase tracking-[0.2em]">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-cobalt opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-cobalt"></span>
              </span>
              Performance Audit
            </div>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] uppercase">
              Driven by <br />
              <span className="text-brand-cobalt italic underline decoration-white/10 underline-offset-8">
                Data.
              </span>{" "}
              <br />
              Defined by <br />
              Results.
            </h2>

            <p className="text-blue-100/40 text-lg font-medium leading-relaxed max-w-md">
              We don&apos;t guess. We engineer systems based on measurable
              growth metrics that move the needle for your business.
            </p>
          </div>

          {/* Right Side: The Metric Grid (Client Component) */}
          <div className="lg:col-span-7">
            <WhyChooseUsClient metrics={metricsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
