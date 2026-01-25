// src/components/sections/work/ResultsTicker.tsx

import TickerClient from "./TickerClient";

export const tickerItems = [
  "Lighthouse Score 100/100",
  "+240% Organic Traffic",
  "Sub-second Load Velocity",
  "Zero-Bloat Architecture",
  "Next.js 15 App Router",
  "Conversion Rate Optimization",
  "Global Edge Deployment",
  "Enterprise-Grade Security",
];

export default function ResultsTicker() {
  return (
    <section className="bg-brand-midnight py-12 overflow-hidden border-y border-white/5">
      <TickerClient items={tickerItems} direction="left" />
      <div className="h-px bg-white/5 my-8 max-w-7xl mx-auto" />
      <TickerClient items={tickerItems.reverse()} direction="right" />
    </section>
  );
}
