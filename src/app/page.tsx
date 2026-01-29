import MetricsGrid from "@/components/Home/MetricsGrid/MetricsGrid";
import OurServices from "@/components/Home/OurServices";
import ProblemSolving from "@/components/Home/ProblemSolving";
import Process from "@/components/Home/Process/Process";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUsServer";
import Hero from "@/components/Layouts/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Website Development & SEO Agency for High-Performance Sites",
  description:
    "MFA Agency is a performance-focused web development and SEO agency. We build fast, scalable Next.js websites optimized for conversions and growth.",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <MetricsGrid />
      <ProblemSolving />
      <OurServices />
      <WhyChooseUs />
      <Process />
    </main>
  );
}
