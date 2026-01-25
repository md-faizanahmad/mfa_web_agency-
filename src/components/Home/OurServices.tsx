// src/components/sections/ServicesServer.tsx
import ServicesClient from "./ServicesClient";

export const servicesData = [
  {
    id: "web",
    title: "Web Systems",
    desc: "Next.js performance-first systems built for scale and speed.",
    iconName: "Code2", // Pass as a string
    img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "seo",
    title: "SEO Strategy",
    desc: "Organic growth systems that place you ahead of the competition.",
    iconName: "LineChart",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "perf",
    title: "Performance",
    desc: "We crush the 'Speed Tax' with sub-second load times.",
    iconName: "Zap",
    img: "https://images.unsplash.com/photo-1551288049-bbbda536339a?q=80&w=800&auto=format&fit=crop",
  },
  {
    id: "mobile",
    title: "Mobile First UI",
    desc: "Interfaces designed for the thumb-first digital era.",
    iconName: "Smartphone",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=800&auto=format&fit=crop",
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
              <span className="text-brand-midnight/10 font-outline-2">
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
