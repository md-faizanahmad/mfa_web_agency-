// src/components/sections/ServicesServer.tsx
import ServicesClient from "./ServicesClient";

export const servicesData = [
  {
    id: "web",
    title: "Website Development",
    desc: "We build fast, reliable websites that clearly present your business and make it easy for customers to contact you.",
    iconName: "Code2",
    img: "/ourservices/responsive-website.png",
  },
  {
    id: "perf",
    title: "Performance Optimization",
    desc: "We improve speed, stability, and responsiveness so your website loads quickly and keeps visitors engaged.",
    iconName: "Zap",
    img: "/ourservices/fast-loading-times.webp",
  },
  {
    id: "seo",
    title: "Search Visibility Setup",
    desc: "We set up essential tools and structure your site properly so it can appear in search results and grow over time.",
    iconName: "Search",
    img: "/ourservices/google-sc.png",
  },
  {
    id: "ads",
    title: "Google & Meta Ads Setup",
    desc: "We create and set up targeted ad campaigns to bring real enquiries and help you reach customers faster.",
    iconName: "Megaphone",
    img: "/ourservices/ADS.png",
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
