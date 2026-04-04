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
    image: "/ourservices/website_development_2.png",
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
    image: "/ourservices/ecommerce.png",
  },
  {
    title: "Performance & SEO",
    description: "Built to rank, load fast, and stay visible.",
    outcomes: [
      "Core Web Vitals optimization",
      "Technical SEO foundation",
      "Search-ready architecture",
    ],
    image: "/ourservices/gsc&perform.png",
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
    image: "/ourservices/ads_campaign.png",
  },
  {
    title: "Local Growth (GMB)",
    description: "Capture nearby customers and dominate local search.",
    outcomes: [
      "GMB optimization",
      "Local ranking boost",
      "Review & trust systems",
    ],
    image: "/ourservices/gmb.png",
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
