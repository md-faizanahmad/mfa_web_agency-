// src/components/sections/work/ResultsTicker.tsx
import TickerClient from "./TickerClient";

export const tickerItems = [
  "Fast loading websites",
  "Mobile-friendly design",
  "Easy contact & enquiry flow",
  "Google search ready setup",
  "Simple admin management",
  "Clean and modern layout",
  "Secure and reliable websites",
  "Built for long-term use",
];

export default function ResultsTicker() {
  return (
    <section className="bg-brand-midnight cursor-pointer py-12 overflow-hidden border-y border-white/5">
      <TickerClient items={tickerItems} direction="left" />
      <div className="h-px bg-white/5 my-8 max-w-7xl mx-auto" />
      <TickerClient items={tickerItems.reverse()} direction="right" />
    </section>
  );
}
