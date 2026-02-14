// src/components/sections/ServicesServer.tsx
import ServicesClient from "./ServicesClient";

export const servicesData = [
  {
    id: "web",
    title: "Website ",
    desc: "website performance-first,responsive,desktop and mobile systems built for scale and speed.",
    iconName: "Code2", // Pass as a string
    img: "/ourservices/responsive-website.png",
  },
  {
    id: "perf",
    title: "Performance",
    desc: "We crush the 'Speed Tax' with sub-second load times.",
    iconName: "Zap",
    img: "/ourservices/fast-loading-times.webp",
  },
  {
    id: "seo",
    title: "SEO Strategy",
    desc: "Organic growth systems that place you ahead of the competition.",
    iconName: "LineChart",

    img: "/ourservices/performance.png",
  },
  {
    id: "gsc",
    title: "Google Search Rank",
    desc: "google search console rank and seo .",
    iconName: "Smartphone",
    img: "/ourservices/gsc.webp",
  },
];

export default function OurServices() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden border-b border-brand-midnight/5">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4">
            <span className="text-brand-cobalt font-bold text-xs uppercase tracking-[0.3em]"></span>
            <h2 className="text-5xl md:text-7xl font-black text-brand-midnight tracking-tighter uppercase leading-[0.8]">
              High Impact <br />
              <span className=" font-outline-2 text-transparent bg-clip-text bg-linear-to-r from-sky-300  to-amber-400">
                Deliverables.
              </span>
            </h2>
          </div>
        </div>

        <ServicesClient services={servicesData} />
      </div>
    </section>
  );
}
