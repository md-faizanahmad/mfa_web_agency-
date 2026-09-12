import { metricsData } from "@/data/metrics";
import WhyChooseUsClient from "./WhyChooseUsClient";
import BrandLabel from "@/components/ui/BrandLabel";

export default function WhyChooseUs() {
  return (
    <section className=" bg-white px-6 py-16 md:py-20">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col gap-8 border-b border-slate-900 pb-10 lg:flex-row lg:items-end lg:justify-between">
          {/* HEADER */}
          <div className="space-y-4">
            <BrandLabel>Our Track Record</BrandLabel>

            <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-slate-950 md:text-5xl">
              Built to perform.
              <br />
              Designed to last.
            </h2>
          </div>

          <p className="max-w-md text-sm leading-relaxed text-slate-500">
            From first impression to final conversion, every website is built
            around speed, usability, and a clear business objective.
          </p>
        </div>

        {/* METRICS */}
        <div className="pt-10">
          <WhyChooseUsClient metrics={metricsData} />
        </div>
      </div>
    </section>
  );
}
