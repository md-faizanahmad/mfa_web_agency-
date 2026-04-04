// src/components/sections/WhyChooseUs.tsx
import { metricsData } from "@/data/metrics";
import WhyChooseUsClient from "./WhyChooseUsClient";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* CONTENT */}
          <div className="lg:col-span-5 space-y-6">
            {/* label */}
            <span className="text-brand-cobalt text-xs font-semibold uppercase tracking-wider">
              Why Choose Us
            </span>

            {/* heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight">
              Built to Perform,{" "}
              <span className="text-gray-400">Not Just Look Good</span>
            </h2>

            {/* description */}
            <p className="text-slate-600 text-sm md:text-base leading-relaxed max-w-md">
              Most websites look fine but don’t bring results. We focus on
              speed, clarity, and structure so your website loads fast, works on
              every device, and helps visitors take action.
            </p>

            {/* divider */}
            <div className="hidden md:block pt-4">
              <div className="h-px w-full bg-slate-200" />
            </div>
          </div>

          {/* METRICS */}
          <div className="lg:col-span-7">
            <WhyChooseUsClient metrics={metricsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
