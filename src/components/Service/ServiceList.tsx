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
    outcomes: [
      "Clear user journeys",
      "High-end visual systems",
      "Mobile-first precision",
    ],
    reverse: true,
  },
  {
    title: "E-commerce",
    description: "Stores built to convert, not just display.",
    outcomes: [
      "Optimized checkout flow",
      "Product-focused UX",
      "Scalable backend systems",
    ],
  },
  {
    title: "Performance & SEO",
    description: "Speed and visibility built-in.",
    outcomes: [
      "Core Web Vitals optimization",
      "Technical SEO foundation",
      "Search-ready architecture",
    ],
    reverse: true,
  },

  // NEW — ACQUISITION LAYER

  {
    title: "Paid Ads",
    description: "Drive targeted traffic that converts into customers.",
    outcomes: [
      "Google Ads campaign setup",
      "High-converting landing pages",
      "Performance tracking & scaling",
    ],
  },
  {
    title: "Google My Business",
    description: "Dominate local search and capture nearby demand.",
    outcomes: [
      "Profile optimization",
      "Local SEO visibility",
      "Review & trust management",
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
