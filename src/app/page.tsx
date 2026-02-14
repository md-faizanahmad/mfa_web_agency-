import MetricsGrid from "@/components/Home/MetricsGrid/MetricsGrid";
import OurServices from "@/components/Home/OurServices";
import ProblemSolving from "@/components/Home/ProblemSolving";
import Process from "@/components/Home/Process/Process";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUsServer";
import Hero from "@/components/Layouts/Hero";
import WhyWebsitePreview from "@/components/WhyWebsitePreview";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.mdfaizanahmad.in"),
  title: "Website Development & SEO Agency for Small Businesses in India",
  description:
    "MFA Agency builds fast, mobile-friendly websites with SEO setup that helps small businesses get more calls, leads, and Google visibility.",
  alternates: {
    canonical: "/",
  },
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
      <WhyWebsitePreview />
    </main>
  );
}
