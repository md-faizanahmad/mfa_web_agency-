import { metricsData } from "@/data/metrics";
import WhyChooseUsClient from "./WhyChooseUsClient";

export default function WhyChooseUs() {
  return (
    <section className="bg-white py-16 md:py-20 px-6 border-b border-slate-100">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-10 border-b-2 border-slate-900">
          {/* HEADER ROW */}
          <div className="space-y-2">
            <span className="text-brand-cobalt text-xs font-bold uppercase tracking-widest block">
              Our Track Record
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 tracking-tight">
              Websites That Work.
            </h2>
          </div>

          <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
            We don&apos;t do fluff or complex buzzwords. We build fast, reliable
            websites designed to get you more customers and grow your sales.
          </p>
        </div>

        {/* COMPACT METRICS GRID */}
        <div className="pt-10">
          <WhyChooseUsClient metrics={metricsData} />
        </div>
      </div>
    </section>
  );
}
