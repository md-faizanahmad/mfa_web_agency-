// src/components/sections/ProcessServer.tsx

import ProcessClient from "./ProcessClient";

export const steps = [
  {
    no: "01",
    title: "Understand Your Business",
    desc: "We first understand your business, customers, and goals so the website is built for real use, not guesswork.",
    tag: "Discussion",
  },
  {
    no: "02",
    title: "Design the Website",
    desc: "We create a clean, simple design that works well on mobile and clearly guides visitors to contact you.",
    tag: "Design",
  },
  {
    no: "03",
    title: "Build & Optimize",
    desc: "We develop the website to load fast, work smoothly, and be ready for Google search from day one.",
    tag: "Development",
  },
  {
    no: "04",
    title: "Launch & Help You Grow",
    desc: "After launch, we help with basic support, updates, and guidance so your website keeps working for your business.",
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
