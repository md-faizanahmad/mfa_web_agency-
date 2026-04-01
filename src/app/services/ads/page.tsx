// app/services/ads/page.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paid Ads Services | WebGrowth Studio",
  description:
    "Run high-performance Meta and Google Ads campaigns to grow your business. Integrated with websites and SEO for better results.",
};

type Service = {
  title: string;
  description: string;
};

type Step = {
  title: string;
  description: string;
};

const services: Service[] = [
  {
    title: "Meta Ads (Facebook & Instagram)",
    description:
      "Reach targeted audiences, generate leads, and drive engagement with optimized Meta ad campaigns.",
  },
  {
    title: "Google Ads (Search & Display)",
    description:
      "Capture high-intent users actively searching for your services on Google with performance-focused campaigns.",
  },
  {
    title: "Landing Page Optimization",
    description:
      "We align ads with conversion-focused landing pages to improve results and reduce wasted spend.",
  },
  {
    title: "Performance Tracking",
    description:
      "Track clicks, conversions, and ROI with clear reporting and continuous optimization.",
  },
];

const steps: Step[] = [
  {
    title: "Research & Strategy",
    description:
      "We understand your business, audience, and goals to build a focused ad strategy.",
  },
  {
    title: "Campaign Setup",
    description:
      "We set up ad accounts, targeting, creatives, and conversion tracking.",
  },
  {
    title: "Optimization",
    description:
      "We continuously test and improve campaigns to increase performance.",
  },
  {
    title: "Scaling",
    description: "We scale what works to drive consistent growth over time.",
  },
];

export default function AdsPage() {
  return (
    <main className="bg-brand-midnight text-white">
      {/* HERO */}
      <section className="px-6 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Run Ads That Actually Grow Your Business
          </h1>

          <p className="text-white/70 text-base sm:text-lg">
            We create and manage Meta and Google Ads campaigns designed to
            improve visibility, attract the right audience, and support your
            business growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/project-request"
              className="bg-brand-cobalt text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Get Free Growth Audit
            </Link>

            <Link
              href="/services/websites"
              className="border border-white/20 px-6 py-3 text-sm font-medium hover:border-white/40 transition"
            >
              View Website Services
            </Link>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">What We Offer</h2>
          <p className="text-white/60 mt-2 max-w-xl">
            Paid ads combined with website and SEO strategy for better
            performance.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="p-6 border border-white/10 bg-white/5 backdrop-blur-sm"
            >
              <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
              <p className="text-white/60 text-sm leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* PROCESS */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">How It Works</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="p-5 border border-white/10 bg-white/5">
              <span className="text-xs text-brand-cobalt">
                Step {index + 1}
              </span>
              <h3 className="text-base font-semibold mt-2 mb-1">
                {step.title}
              </h3>
              <p className="text-white/60 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY SECTION */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Why Combine Ads with Website & SEO?
          </h2>

          <p className="text-white/70 text-base">
            Running ads without a proper website or SEO strategy leads to wasted
            budget. We connect everything — ads, landing pages, and search
            visibility — to create a system that performs better over time.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 max-w-7xl mx-auto text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Start Growing Your Business Online
          </h2>

          <p className="text-white/60">
            Get a clear strategy for your business with websites, SEO, and paid
            ads working together.
          </p>

          <Link
            href="/project-request"
            className="inline-block bg-brand-cobalt px-8 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Get Free Growth Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
