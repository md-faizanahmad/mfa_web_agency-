// src/components/sections/work/ResultsTicker.tsx
import TickerClient from "./TickerClient";

export const tickerItems = [
  "Fast-loading pages with optimized assets",
  "Mobile-first responsive layouts",
  "Clear contact and enquiry flows",
  "SEO-ready structure and metadata",
  "Simple content management setup",
  "Clean and maintainable UI architecture",
  "Secure authentication and API handling",
  "Scalable codebase for future features",
];

export default function ResultsTicker() {
  return (
    <section className=" cursor-pointer py-12 overflow-hidden border-y border-white/5">
      <TickerClient items={tickerItems} direction="left" />
    </section>
  );
}
