// src/app/services/page.tsx

import ServiceGrid from "@/components/Section/Service/ServiceGrid";
import ServiceHero from "@/components/Section/Service/ServiceHero";
import TechStackServer from "@/components/Section/Service/TechStack";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.mdfaizanahmad.in"),
  title: "Website Development & SEO Services for Small Businesses",
  description:
    "Professional website development, landing pages, and SEO services to help small businesses get more enquiries and online visibility.",
  alternates: {
    canonical: "/services",
  },
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
