// src/components/sections/WhyChooseUsServer.tsx

import WhyChooseUsClient from "./WhyChooseUsClient";
import { MetricItem } from "@/@types/index"; // Import your interface

export const metricsData: MetricItem[] = [
  {
    id: "m1",
    value: 100,
    suffix: "%",
    label: "Google-Friendly Setup",
    desc: "Websites built with proper SEO structure so your business can be found on Google.",
    iconName: "Search",
  },
  {
    id: "m2",
    value: 100,
    suffix: "%",
    label: "Mobile-First Design",
    desc: "Your site works smoothly on phones, tablets, and desktops without issues.",
    iconName: "Smartphone",
  },
  {
    id: "m3",
    value: 100,
    suffix: "%",
    label: "Fast & Clean Websites",
    desc: "Optimized layouts that load quickly and keep visitors engaged.",
    iconName: "Zap",
  },
  {
    id: "m4",
    value: 100,
    suffix: "%",
    label: "Clear Support & Guidance",
    desc: "We explain things simply and help you manage your website with confidence.",
    iconName: "ShieldCheck",
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
              Business Website Focus
            </div>

            <h2 className="text-4xl md:text-6xl font-black tracking-tight leading-tight text-slate-950">
              Why Businesses <br />
              <span className="text-sky-400 italic">Choose Us</span>
            </h2>

            <p className="text-slate-500 text-base md:text-lg font-medium leading-relaxed max-w-md">
              Many business owners struggle with websites that don’t bring
              enquiries. We focus on clarity, speed, and proper Google setup so
              your website actually supports your business goals.
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
