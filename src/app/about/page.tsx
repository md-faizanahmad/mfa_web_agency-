// src/components/sections/about/AboutServer.tsx

import AboutClient from "@/components/Section/About/AboutClient";

export default function About() {
  return (
    <section className="bg-white py-32 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left: The Narrative - 7 Columns */}
          <div className="lg:col-span-7 space-y-10">
            <div className="space-y-4">
              <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.4em]"></span>
              <h2 className="text-6xl md:text-8xl font-black text-brand-midnight tracking-tighter uppercase leading-[0.8] mb-8">
                NOT JUST <br />
                <span className="text-brand-midnight/10 font-outline-2">
                  PIXELS.
                </span>{" "}
                <br />
                SYSTEMS.
              </h2>
            </div>

            <div className="space-y-6 max-w-xl">
              <p className="text-xl md:text-2xl font-medium text-brand-midnight leading-relaxed italic">
                MFA was born from a frustration with &quot;flashy&quot; agencies
                that prioritize design awards over server response times and
                conversion rates.
              </p>
              <p className="text-muted-foreground font-medium leading-relaxed">
                We believe that a website is a business asset, not a digital
                brochure. Our team combines high-level product design with deep
                frontend engineering to build systems that are as stable as they
                are fast.
              </p>
            </div>

            {/* Strategic Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 pt-8">
              <div className="space-y-3">
                <div className="h-1px w-12 bg-brand-cobalt" />
                <h4 className="font-black uppercase tracking-tight text-brand-midnight">
                  Speed First
                </h4>
                <p className="text-sm text-muted-foreground">
                  Every millisecond of latency is a loss in potential revenue.
                  We engineer for sub-second delivery.
                </p>
              </div>
              <div className="space-y-3">
                <div className="h-px w-12 bg-brand-cobalt" />
                <h4 className="font-black uppercase tracking-tight text-brand-midnight">
                  Scale Ready
                </h4>
                <p className="text-sm text-muted-foreground">
                  We build with modular Next.js architecture that grows as your
                  traffic moves from 1k to 1M.
                </p>
              </div>
            </div>
          </div>

          {/* Right: The Visual Anchor - 5 Columns */}
          <div className="lg:col-span-5">
            <AboutClient />
          </div>
        </div>
      </div>
    </section>
  );
}
