// components/services/ServiceList.tsx

import { ServiceBlock } from "./ServiceBlock";

const services = [
  {
    title: "Conversion-Focused Websites",
    description: "Designed and built to turn visitors into customers.",
    outcomes: [
      "High-converting UI/UX",
      "Fast, scalable performance",
      "Clear user journey & structure",
    ],
    image: "/ourservices/responsive-website.png",
  },
  {
    title: "E-commerce Systems",
    description: "Online stores engineered for sales and scale.",
    outcomes: [
      "Optimized checkout experience",
      "Product-driven UX",
      "Secure and scalable backend",
    ],
    reverse: true,
    image: "/ourservices/responsive-website.png",
  },
  {
    title: "Performance & SEO",
    description: "Built to rank, load fast, and stay visible.",
    outcomes: [
      "Core Web Vitals optimization",
      "Technical SEO foundation",
      "Search-ready architecture",
    ],
    image: "/ourservices/gsc.webp",
  },
  {
    title: "Paid Ads",
    description: "Drive high-intent traffic that converts.",
    outcomes: [
      "Google Ads campaigns",
      "Landing page optimization",
      "Tracking & scaling systems",
    ],
    reverse: true,
    image: "/ourservices/responsive-website.png",
  },
  {
    title: "Local Growth (GMB)",
    description: "Capture nearby customers and dominate local search.",
    outcomes: [
      "GMB optimization",
      "Local ranking boost",
      "Review & trust systems",
    ],
    image: "/ourservices/responsive-website.png",
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
