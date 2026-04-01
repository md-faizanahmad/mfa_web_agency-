import EcomHeroImage from "@/services/ecom/EcomHeroImage";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "E-commerce Development | WebGrowth Studio",
  description: "Custom systems designed for scalability and performance.",
};

export default function EcommercePage() {
  return (
    <main className="bg-white text-black antialiased selection:bg-gray-100">
      {/* 1. HERO: Asymmetric Editorial Layout */}
      <section className="px-6 pt-32 pb-20 md:pt-48 md:pb-32 max-w-350 mx-auto">
        <div className="grid lg:grid-cols-[1.2fr_1fr] gap-16 lg:gap-24 items-start">
          <div className="space-y-10">
            <div className="space-y-4">
              <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
                Infrastructure for Commerce
              </span>
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight leading-[0.95]">
                Systems built <br /> for longevity.
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-500 max-w-lg leading-relaxed font-light">
              We move beyond the &quot;launch and leave&quot; mentality. We
              build digital architecture that facilitates high-volume operations
              and uninterrupted growth.
            </p>

            <div className="flex flex-wrap gap-8 items-center pt-4">
              <Link
                href="/project-request"
                className="group flex items-center gap-3 text-sm font-semibold tracking-tight"
              >
                <span className="bg-black text-white px-8 py-4 rounded-full group-hover:bg-gray-800 transition-colors">
                  Inquire about a project
                </span>
              </Link>
              <Link
                href="/services/ads"
                className="text-sm font-medium border-b border-black pb-1 hover:text-gray-500 transition-colors"
              >
                View our methodology
              </Link>
            </div>
          </div>

          <div className="relative w-full">
            <EcomHeroImage />
            <div className="mt-6 flex justify-between items-center text-[10px] uppercase tracking-widest text-gray-400">
              <span>Proprietary Interface</span>
              <span>© 2026 WebGrowth</span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM: The Narrative Narrative Section */}
      <section className="px-6 py-32 border-t border-gray-100">
        <div className="max-w-350 mx-auto">
          <div className="grid md:grid-cols-[1fr_2fr] gap-12">
            <span className="text-xs uppercase tracking-widest text-gray-400 font-medium">
              The Reality
            </span>
            <div className="space-y-12">
              <h2 className="text-3xl md:text-5xl font-light leading-snug max-w-3xl">
                Most platforms are built to look good on day one, then become
                bottlenecks by day ninety. Technical debt shouldn&apos;t be your
                primary business expense.
              </h2>
              <div className="h-px w-full bg-gray-100" />
              <div className="grid md:grid-cols-2 gap-12 text-gray-500 leading-relaxed italic">
                <p>
                  Generic templates prioritize visual aesthetics over
                  operational integrity. When traffic spikes or your catalog
                  doubles, the cracks begin to show in load times and database
                  latency.
                </p>
                <p>
                  We focus on the invisible layer—the architecture. Our systems
                  are designed to remain invisible so your commerce can remain
                  central.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. SYSTEM: Horizontal Flow (No Cards) */}
      <section className="px-6 py-32 bg-gray-50/50 overflow-hidden">
        <div className="max-w-350 mx-auto">
          <div className="mb-20 flex justify-between items-end">
            <h2 className="text-4xl font-light tracking-tight italic">
              The Lifecycle
            </h2>
            <span className="text-xs text-gray-400">Continuous Loop</span>
          </div>

          <div className="flex flex-col md:flex-row gap-0 border-l border-gray-200 md:border-l-0">
            {[
              { t: "Architecture", d: "Schema & DB Design" },
              { t: "Interface", d: "User-Centric Flows" },
              { t: "Optimization", d: "Performance Tuning" },
              { t: "Intelligence", d: "Analytics & Scaling" },
            ].map((item, i) => (
              <div
                key={i}
                className="flex-1 group border-b border-r border-gray-200 p-8 md:p-12 hover:bg-white transition-colors"
              >
                <span className="block mb-12 text-sm font-mono text-gray-300">
                  0{i + 1}
                </span>
                <h3 className="text-2xl font-medium mb-4 tracking-tight">
                  {item.t}
                </h3>
                <p className="text-gray-400 text-sm uppercase tracking-wide leading-relaxed">
                  {item.d}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CAPABILITIES: Split Layout (Mixed Structure) */}
      <section className="px-6 py-32 max-w-350 mx-auto space-y-48">
        {/* Capability 01 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h3 className="text-4xl font-medium tracking-tighter">
              Operational Excellence.
            </h3>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed font-light">
              We develop internal tools that allow your team to manage complex
              inventory, multi-region shipping, and customer loyalty without
              needing a developer on standby.
            </p>
          </div>
          <div className="aspect-4/5 bg-gray-100 rounded-sm relative overflow-hidden">
            <div className="absolute inset-0 flex items-center justify-center text-xs uppercase tracking-[0.2em] text-gray-300">
              Visual Placeholder
            </div>
          </div>
        </div>

        {/* Capability 02 */}
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="md:order-2 space-y-6">
            <h3 className="text-4xl font-medium tracking-tighter">
              Seamless Conversion.
            </h3>
            <p className="text-lg text-gray-500 max-w-md leading-relaxed font-light">
              Performance is a feature. By reducing TTI (Time to Interactive),
              we inherently increase conversion rates across all devices. Zero
              friction, absolute clarity.
            </p>
          </div>
          <div className="aspect-video bg-gray-50 border border-gray-100 rounded-sm" />
        </div>
      </section>

      {/* 5. PHILOSOPHY: Centered Minimalist */}
      <section className="px-6 py-48 text-center bg-white">
        <div className="max-w-3xl mx-auto space-y-8">
          <span className="text-xs uppercase tracking-[0.3em] text-gray-400">
            The Philosophy
          </span>
          <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
            We believe the best technology is felt through results, not noticed
            by its complexity.
          </h2>
          <div className="w-12 h-1px bg-black mx-auto" />
        </div>
      </section>

      {/* 6. CTA: High Contrast Minimal */}
      <section className="bg-black text-white py-40 px-6">
        <div className="max-w-1400px mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-12">
            <div className="max-w-2xl space-y-8">
              <h2 className="text-5xl md:text-8xl font-medium tracking-tighter leading-none">
                Ready to build <br /> for the future?
              </h2>
              <p className="text-gray-400 text-lg md:text-xl font-light">
                Consult with our partners to discuss your infrastructure
                requirements and growth trajectory.
              </p>
            </div>

            <Link
              href="/project-request"
              className="px-12 py-6 border border-white/20 hover:bg-white hover:text-black transition-all duration-500 text-sm uppercase tracking-widest font-medium"
            >
              Start Consultation
            </Link>
          </div>

          <div className="mt-32 pt-8 border-t border-white/10 flex justify-between text-[10px] uppercase tracking-widest text-white/30">
            <span>WebGrowth Studio</span>
            <span>Est. 2024</span>
          </div>
        </div>
      </section>
    </main>
  );
}
