// src/components/sections/ServicesServer.tsx
import ServicesClient from "./ServicesClient";

export const servicesData = [
  {
    id: "web",
    title: "Website Development",
    desc: "We build clean, professional websites that work smoothly on mobile and desktop. Designed to represent your brand clearly and help customers contact you easily.",
    iconName: "Code2",
    img: "/ourservices/responsive-website.png",
  },
  {
    id: "perf",
    title: "Fast Loading Websites",
    desc: "Speed matters. We optimize your website so it loads quickly, keeps visitors engaged, and performs well even on slower internet connections.",
    iconName: "Zap",
    img: "/ourservices/fast-loading-times.webp",
  },
  {
    id: "seo",
    title: "Search Engine Optimization",
    desc: "We structure your website properly so Google understands your business and shows it to the right audience.",
    iconName: "LineChart",
    img: "/ourservices/performance.png",
  },
  {
    id: "gsc",
    title: "Google Setup & Visibility",
    desc: "We set up Google Search Console and essential tools to monitor your website performance and improve your online visibility over time.",
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
