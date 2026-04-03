// components/services/ServiceList.tsx

import { ServiceBlock } from "./ServiceBlock";

const services = [
  {
    title: "Web Development",
    description: "Built for performance and scalability.",
    outcomes: [
      "Conversion-focused structure",
      "Fast load speed",
      "Clean architecture",
    ],
  },
  {
    title: "UI/UX Design",
    description: "Designed for clarity and usability.",
    outcomes: ["Better user flow", "High-end UI system", "Mobile-first design"],
    reverse: true,
  },
  {
    title: "E-commerce",
    description: "Stores built to sell, not just display.",
    outcomes: ["Optimized checkout", "Product-focused UX", "Scalable backend"],
  },
  {
    title: "Performance & SEO",
    description: "Speed and visibility built-in.",
    outcomes: [
      "Core Web Vitals optimized",
      "SEO foundation",
      "Clean structure",
    ],
    reverse: true,
  },
];

export function ServiceList() {
  return (
    <div className="space-y-32">
      {services.map((service, i) => (
        <ServiceBlock key={i} {...service} />
      ))}
    </div>
  );
}
