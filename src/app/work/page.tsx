// src/app/work/page.tsx

import ResultsTicker from "@/components/Section/Work/ResultsTicker";
import WorkGrid from "@/components/Section/Work/WorkGrid";
import WorkHero from "@/components/Section/Work/WorkHero";

export const metadata = {
  title: "Case Studies | Engineered Digital Systems | MFA",
  description:
    "Explore how we transform business bottlenecks into high-speed digital assets.",
};

export default function WorkPage() {
  return (
    <main className="bg-white pt-20">
      <WorkHero />
      <WorkGrid />
      <ResultsTicker />
    </main>
  );
}
