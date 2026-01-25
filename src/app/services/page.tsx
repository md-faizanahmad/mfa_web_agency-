// src/app/services/page.tsx

import ServiceGrid from "@/components/Section/Service/ServiceGrid";
import ServiceHero from "@/components/Section/Service/ServiceHero";
import TechStackServer from "@/components/Section/Service/TechStack";

export const metadata = {
  title: "Precision Engineering Services | MFA Agency",
  description:
    "High-performance Next.js development, technical SEO, and mobile-first systems built for ambitious businesses.",
};

export default function Services() {
  return (
    <main className="pt-20">
      <ServiceHero />
      <ServiceGrid />
      <TechStackServer />
    </main>
  );
}
