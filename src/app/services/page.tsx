// app/services/page.tsx

import { Container } from "@/components/Layouts/Container";
import Hero from "@/components/Layouts/Hero";
import { SectionWrapper } from "@/components/Layouts/SectionWrapper";
import { CTA } from "@/components/Section/CTA";
import { Process } from "@/components/Section/Process";
import { TrustBar } from "@/components/Section/TrustBar";
import { ServiceList } from "@/components/Service/ServiceList";
import { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.mdfaizanahmad.in"),
  title: "Website Development & SEO Services for Small Businesses",
  description:
    "Professional website development, landing pages, and SEO services to help small businesses get more enquiries and online visibility.",
  alternates: {
    canonical: "/services",
  },
};

export default function ServicesPage() {
  return (
    <main className="bg-white text-black">
      <Hero />
      <TrustBar />

      <SectionWrapper>
        <Container>
          <ServiceList />
        </Container>
      </SectionWrapper>

      <Process />
      <CTA />
    </main>
  );
}
