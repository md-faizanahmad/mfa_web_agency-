// src/components/sections/about/AboutServer.tsx

import AboutClient from "@/components/Section/About/AboutClient";
import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.mdfaizanahmad.in"),
  title: "About MFA Agency | Website Development & UI Engineering",
  description:
    "MFA Agency designs and builds fast, mobile-first websites and web applications. Clean architecture, SEO-ready structure, and scalable code built for modern businesses.",
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
              Websites Designed <br />
              <span className="text-primary">for Real Business Use</span>
            </h2>
          </div>

          <div className="space-y-6 max-w-xl">
            <p>
              MFA Agency builds modern websites and web applications for
              businesses that need reliable, well-structured digital platforms.
            </p>

            <p>
              The focus is simple: fast performance, clear user experience, and
              clean technical architecture that is easy to maintain and extend
              over time.
            </p>

            <p>
              Every project is built with a mobile-first layout, structured SEO
              foundations, and scalable code — avoiding unnecessary complexity
              and bloated systems.
            </p>
          </div>

          <div className="flex gap-12 pt-6">
            <div>
              <p className="text-sm font-semibold text-foreground">
                Performance & Architecture
              </p>

              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">
                Fast Loading • Clean Code • Scalable
              </p>
            </div>

            <div className="h-12 w-px bg-border" />

            <div>
              <p className="text-sm font-semibold text-foreground">
                Search & User Experience
              </p>

              <p className="text-xs tracking-widest uppercase text-muted-foreground mt-2">
                SEO Structure • Mobile First
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
