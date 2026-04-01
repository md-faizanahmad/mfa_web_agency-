// app/services/website-development/page.tsx

import HeroImage from "@/components/Section/Service/HeroImage";
import { Globe } from "lucide-react";
import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development | WebGrowth Studio",
  description:
    "Professional website development for businesses across India. Clean, fast, and built to improve your online presence.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-white text-black mt-10">
      {/* // Place this inside your <main> but before the sections */}
      {/* SERVER-SIDE DYNAMIC BACKGROUND */}
      <div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
        {/* The Glowing Flowing Orb */}
        <div
          className="absolute top-[-10%] left-[-10%] w-[70vw] h-[70vw] rounded-full 
    bg-gradient-to-br from-blue-50/40 via-purple-50/40 to-orange-50/40 
    blur-[100px] animate-slow-flow opacity-60"
        />

        {/* Subtle Grain Texture (Makes it look high-end/studio) */}
        <div className="absolute inset-0 opacity-[0.02] mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
      </div>
      {/* HERO */}
      <section className="px-6 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* LEFT */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
              Your Business Needs More Than Just a Website
            </h1>

            <p className="text-gray-600 text-base sm:text-lg">
              We design clean, modern websites that build trust, clearly present
              your services, and support your business growth online.
            </p>

            <div className="flex gap-4 pt-2">
              <Link
                href="/project-request"
                className="bg-black text-white px-6 py-3 text-sm font-medium"
              >
                Get Started
              </Link>

              <Link
                href="/services/ads"
                className="border border-gray-300 px-6 py-3 text-sm font-medium hover:border-black"
              >
                View Ads Services
              </Link>
            </div>
          </div>

          {/* RIGHT */}
          <HeroImage />
        </div>
      </section>

      {/* PROBLEM SECTION - Editorial List Style */}
      <section className="px-6 py-24 shadow bg-gray-50 border-y border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-12 gap-16 items-start">
            {/* Sticky Header Side */}
            <div className="lg:col-span-5 md:sticky md:top-24">
              <span className="text-xs font-bold tracking-widest uppercase text-gray-400 mb-4 block">
                The Reality
              </span>
              <h2 className="text-3xl md:text-5xl font-bold leading-tight tracking-tighter">
                Why most <br />
                <span className="text-gray-400 italic">websites fail</span>{" "}
                <br />
                to convert.
              </h2>
              <p className="mt-6 text-gray-500 max-w-sm leading-relaxed">
                A website isn&apos;t just a digital brochure; it&apos;s a
                performance tool. When these five pillars are weak, your growth
                stalls.
              </p>
            </div>

            {/* Modern Numbered List */}
            <div className="lg:col-span-7 space-y-0">
              {[
                {
                  title: "Outdated Aesthetics",
                  desc: "Design that looks stuck in 2015 immediately erodes brand authority.",
                },
                {
                  title: "Vague Messaging",
                  desc: "If a visitor can't tell what you do in 3 seconds, they leave.",
                },
                {
                  title: "Mobile Friction",
                  desc: "Clunky experiences on phones lose 60% of potential leads.",
                },
                {
                  title: "Performance Lag",
                  desc: "Slow load times are the fastest way to kill your SEO ranking.",
                },
                {
                  title: "Invisible Presence",
                  desc: "A beautiful site without an SEO foundation is a ghost town.",
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="group border-t border-gray-200 py-8 flex items-start gap-8 transition-all duration-500 hover:bg-gray-50/50 px-4"
                >
                  <span className="text-sm font-mono text-gray-300 group-hover:text-black transition-colors">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-xl font-semibold mb-2 tracking-tight">
                      {item.title}
                    </h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-md">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
              {/* Bottom line to close the list */}
              <div className="border-t border-gray-200"></div>
            </div>
          </div>
        </div>
      </section>

      {/* SOLUTION SECTION - Minimalist Value Grid */}
      <section className="px-6 py-24 max-w-7xl mx-auto border-t border-gray-100">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Built for Impact, <br />
              Designed for Results
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We don&apos;t just build pages. We build high-performance assets
              that serve as the foundation for your brand’s digital authority.
            </p>
          </div>
          <div className="text-right">
            <span className="text-sm font-medium px-4 py-2 bg-gray-100 rounded-full">
              Full-Stack Delivery
            </span>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-gray-200 border border-gray-200 overflow-hidden">
          {[
            {
              title: "Visual Trust",
              desc: "Modern, high-end aesthetics that immediately build credibility with your visitors.",
            },
            {
              title: "Mobile Precision",
              desc: "Pixel-perfect layouts optimized for every screen, ensuring a seamless experience.",
            },
            {
              title: "Speed Optimization",
              desc: "Lightning-fast load times that keep visitors engaged and search engines happy.",
            },
            {
              title: "Business Logic",
              desc: "Strategic site structure focused on guiding users toward your conversion goals.",
            },
            {
              title: "SEO Foundation",
              desc: "Clean code and meta-optimization built-in from day one for organic growth.",
            },
            {
              title: "Total Control",
              desc: "Scalable architecture that’s easy for your team to manage and update as you grow.",
            },
          ].map((item, i) => (
            <div
              key={i}
              className="group bg-white p-10 hover:bg-black transition-all duration-500"
            >
              <div className="flex flex-col h-full justify-between">
                <div>
                  {/* Minimal line icon */}
                  <div className="w-8 h-[2px] bg-black group-hover:bg-white mb-8 transition-colors" />

                  <h3 className="text-lg font-bold mb-3 group-hover:text-white transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed group-hover:text-gray-400 transition-colors">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-8 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="text-white text-xs font-bold uppercase tracking-widest">
                    Standard Feature
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* TYPES SECTION - Sticky Stacking Reveal */}
      <section className="px-6 py-24 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="mb-20">
            <span className="text-sm font-mono text-gray-400 uppercase tracking-widest block mb-4">
              Our Specializations
            </span>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter">
              Solutions for{" "}
              <span className="text-gray-400 italic font-serif">
                Every Scale
              </span>
            </h2>
          </div>

          {/* The Stacking Container */}
          <div className="relative space-y-4">
            {[
              {
                id: "01",
                title: "Landing Pages",
                bg: "bg-gray-50",
                desc: "Built for high-conversion marketing.",
              },
              {
                id: "02",
                title: "Business Sites",
                bg: "bg-gray-100",
                desc: "Corporate presence that builds trust.",
              },
              {
                id: "03",
                title: "Portfolios",
                bg: "bg-gray-200",
                desc: "Immersive galleries for creative work.",
              },
              {
                id: "04",
                title: "Service Hubs",
                bg: "bg-black text-white",
                desc: "Complex systems made simple.",
              },
            ].map((item, i) => (
              <div
                key={i}
                style={{
                  top: `${100 + i * 20}px`, // Small increment for compact stacking
                  zIndex: i + 1,
                }}
                className={`sticky w-full min-h-40 rounded-2xl p-6 border border-gray-200/50 shadow-sm flex flex-col justify-between ${item.bg} transition-transform duration-500`}
              >
                <div className="flex justify-between items-center">
                  <span className="font-mono text-xs opacity-50">
                    {item.id}
                  </span>
                  <div className="text-xs uppercase tracking-widest font-semibold opacity-40">
                    <Globe />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg md:text-xl font-bold tracking-tight">
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-70 leading-snug mt-1 max-w-60">
                    {item.desc}
                  </p>
                </div>

                {/* Subtle accent line */}
                <div className="absolute right-6 bottom-6 w-8 h-px bg-current opacity-20" />
              </div>
            ))}
          </div>

          {/* Spacer to allow the last card to scroll past */}
          <div className="h-40" />
        </div>
      </section>

      {/* POSITIONING (Centered, no grid) */}
      <section className="px-6 py-20 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Built for Real Business Needs
        </h2>

        <p className="text-gray-600">
          Your website becomes the foundation for SEO, ads, and your entire
          online presence. It’s not just design — it’s how your business is
          presented online.
        </p>
      </section>

      {/* CTA (Full width band style) */}
      <section className="px-6 py-20 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Start Building Your Online Presence
          </h2>

          <p className="text-white/70 text-sm">
            Get a website that actually represents your business properly.
          </p>

          <Link
            href="/project-request"
            className="inline-block bg-white text-black px-8 py-3 text-sm font-medium"
          >
            Get Free Growth Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
