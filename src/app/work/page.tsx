// src/app/work/page.tsx

import WorkHero from "@/components/Section/Work/WorkHero";
import WorkSection from "@/components/Section/Work/WorkSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.mdfaizanahmad.in"),
  title: "Our Work | Website Projects for Small Businesses",
  description:
    "See real website projects we’ve built for small businesses, including business websites, landing pages, and online stores.",
  alternates: {
    canonical: "/work",
  },
};

export default function WorkPage() {
  return (
    <main className="bg-white pt-20">
      <WorkHero />
      <WorkSection />
    </main>
  );
}
