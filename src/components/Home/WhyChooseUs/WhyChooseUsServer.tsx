import WhyChooseUsClient from "./WhyChooseUsClient";
import { MetricItem } from "@/@types/index";

export const metricsData: MetricItem[] = [
  {
    id: "m1",
    value: 100,
    suffix: "%",
    label: "Google-Ready Structure",
    desc: "Built with proper SEO foundations so your business can be discovered on search engines.",
    iconName: "Search",
  },
  {
    id: "m2",
    value: 99,
    suffix: "%",
    label: "Mobile-First Experience",
    desc: "Optimized layouts that work smoothly across phones, tablets, and desktops.",
    iconName: "Smartphone",
  },
  {
    id: "m3",
    value: 100,
    suffix: "%",
    label: "Performance Focused",
    desc: "Fast-loading pages that keep visitors engaged and improve user experience.",
    iconName: "Zap",
  },
  {
    id: "m4",
    value: 100,
    suffix: "%",
    label: "Clear Guidance & Support",
    desc: "Straightforward communication and structured support after launch.",
    iconName: "ShieldCheck",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-background py-24 px-6 border-b border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Side */}
          <div className="lg:col-span-5 space-y-8">
            <span className="text-primary text-xs tracking-[0.3em] uppercase font-semibold">
              Why Choose MFA Agency
            </span>

            <h2 className="text-4xl md:text-5xl leading-tight text-foreground">
              Built With Purpose. <br />
              <span className="text-gray-600 hover:text-primary">
                Designed for Results.
              </span>
            </h2>

            <p className="text-muted-foreground text-base leading-relaxed max-w-md">
              Many websites look fine but don’t support real business growth. We
              focus on clarity, performance, and proper structure so your
              website becomes a reliable business asset — not just an online
              placeholder.
            </p>
          </div>

          {/* Right Side */}
          <div className="lg:col-span-7">
            <WhyChooseUsClient metrics={metricsData} />
          </div>
        </div>
      </div>
    </section>
  );
}
