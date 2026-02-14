// src/components/sections/about/AboutServer.tsx

import AboutClient from "@/components/Section/About/AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.mdfaizanahmad.in"),
  title: "About MFA Agency | Performance-Driven Website Development",
  description:
    "MFA Agency builds high-performance websites for growth-focused brands. Fast, scalable, SEO-structured digital foundations designed to generate real business results.",
  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <section className="bg-background mt-10 py-24 px-6 border-b border-border">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Content Side */}
        <div className="lg:col-span-7 space-y-10">
          <div className="space-y-5">
            <span className="text-primary font-mono text-[10px] tracking-[0.4em] uppercase">
              About MFA Agency
            </span>

            <h2 className="text-4xl md:text-6xl leading-tight text-foreground">
              Digital Foundations <br />
              <span className="text-primary">Built for Growth</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-xl">
            <p>
              For over three years, MFA Agency has been engineering
              high-performance websites for growth-focused businesses and
              service brands.
            </p>

            <p>
              We treat every website as digital infrastructure — designed to
              attract the right audience, convert efficiently, and scale with
              the business over time.
            </p>

            <p>
              Every build is performance-first, mobile-optimized, and
              search-structured from day one. No unnecessary complexity. No
              bloated systems. Just disciplined execution and measurable
              outcomes.
            </p>
          </div>

          <div className="flex gap-12 pt-6">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Performance Architecture
              </p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">
                Speed • Structure • Scalability
              </p>
            </div>

            <div className="h-12 w-px bg-border" />

            <div>
              <p className="text-sm font-semibold text-foreground">
                Conversion & Search Optimized
              </p>
              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">
                SEO Ready • Lead Focused
              </p>
            </div>
          </div>
        </div>

        {/* Visual Side */}
        <div className="lg:col-span-5">
          <AboutClient />
        </div>
      </div>
    </section>
  );
}
