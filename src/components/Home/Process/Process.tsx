// src/components/sections/ProcessServer.tsx

import ProcessClient from "./ProcessClient";

export const steps = [
  {
    no: "01",
    title: "Understand Your Business",
    desc: "We understand your business, customers, and goals so the website is built with clarity, not assumptions.",
    tag: "Strategy",
  },
  {
    no: "02",
    title: "Plan & Structure",
    desc: "We define the layout, pages, and user flow so visitors can easily understand and take action.",
    tag: "Planning",
  },
  {
    no: "03",
    title: "Design the Experience",
    desc: "We design a clean, modern interface that works perfectly on mobile and builds trust instantly.",
    tag: "Design",
  },
  {
    no: "04",
    title: "Build & Optimize",
    desc: "We develop a fast, scalable website optimized for performance and ready for search engines.",
    tag: "Development",
  },
  {
    no: "05",
    title: "Test & Refine",
    desc: "We test across devices, fix issues, and ensure everything runs smoothly before going live.",
    tag: "Testing",
  },
  {
    no: "06",
    title: "Launch & Support",
    desc: "We deploy your website and provide ongoing support, updates, and guidance for growth.",
    tag: "Support",
  },
];

export default function Process() {
  return (
    <section className="bg-white py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Left: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-40 h-fit">
            <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.3em] block mb-4"></span>
            <h2 className="text-4xl md:text-6xl font-black text-brand-midnight tracking-tight leading-tight mb-6">
              How We <br />
              <span className="text-brand-midnight/20">Build Your Website</span>
            </h2>

            <p className="text-muted-foreground font-medium max-w-sm">
              We follow a simple, step-by-step process so you always know what’s
              happening and what you’re getting. No confusion, no technical
              overload.
            </p>
          </div>

          {/* Right: Interactive Timeline */}
          <div className="lg:col-span-8">
            <ProcessClient steps={steps} />
          </div>
        </div>
      </div>
    </section>
  );
}
