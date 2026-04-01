// app/services/ads/page.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Paid Ads Services | WebGrowth Studio",
  description:
    "Meta and Google Ads services designed to improve visibility and support business growth with website and SEO integration.",
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
      "Reach the right audience and promote your business with structured ad campaigns.",
  },
  {
    title: "Google Ads (Search & Display)",
    description:
      "Show your business when people search for your services on Google.",
  },
  {
    title: "Landing Page Alignment",
    description:
      "We align ads with your website to improve user experience and performance.",
  },
  {
    title: "Tracking & Optimization",
    description:
      "Monitor performance and continuously improve campaigns based on data.",
  },
];

const steps: Step[] = [
  {
    title: "Strategy",
    description:
      "Understand your business, audience, and goals before running campaigns.",
  },
  {
    title: "Setup",
    description: "Configure ads, targeting, creatives, and tracking systems.",
  },
  {
    title: "Optimization",
    description: "Improve campaigns based on performance data and testing.",
  },
  {
    title: "Growth",
    description: "Scale campaigns gradually to improve reach and consistency.",
  },
];

export default function AdsPage() {
  return (
    <main className="bg-white text-black mt-10">
      {/* HERO */}
      <section className="px-6 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Run Ads That Support Your Business Growth
          </h1>

          <p className="text-gray-600 text-base sm:text-lg">
            We manage Meta and Google Ads campaigns designed to improve
            visibility and connect your business with the right audience.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/project-request"
              className="bg-black text-white px-6 py-3 text-sm font-medium hover:opacity-90 transition"
            >
              Get Free Growth Audit
            </Link>

            <Link
              href="/services/websites"
              className="border border-gray-300 px-6 py-3 text-sm font-medium hover:border-black transition"
            >
              Website Services
            </Link>
          </div>
        </div>
      </section>
      {/* SERVICES */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              What We Offer
            </h2>
            <p className="text-gray-600 mt-2 max-w-xl">
              Ads combined with website and SEO for better overall performance.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {services.map((service, index) => (
              <div key={index} className="p-6 border border-gray-200 bg-white">
                <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
      {/* PROCESS */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <div className="mb-12">
          <h2 className="text-2xl sm:text-3xl font-semibold">How It Works</h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
          {steps.map((step, index) => (
            <div key={index} className="p-5 border border-gray-200 bg-gray-50">
              <span className="text-xs text-gray-500">Step {index + 1}</span>
              <h3 className="text-base font-semibold mt-2 mb-1">
                {step.title}
              </h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* WHY */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl space-y-6 mx-auto">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Why Combine Ads with Website & SEO?
          </h2>

          <p className="text-gray-600">
            Ads alone are not enough. When combined with a proper website and
            SEO strategy, your business gets better visibility and more
            consistent results over time.
          </p>
        </div>
      </section>
      {/* // PROOF SECTION */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-10">
          <div className="text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-semibold">
              How We Approach Paid Ads
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We focus on structured campaigns, proper tracking, and continuous
              improvement instead of random ad spending.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2">
            {/* BLOCK 1 */}
            <div className="p-6 bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Structured Campaign Setup</h3>
              <p className="text-sm text-gray-600">
                Every campaign is built with clear targeting, audience
                segmentation, and proper funnel alignment to avoid wasted
                budget.
              </p>
            </div>

            {/* BLOCK 2 */}
            <div className="p-6 bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Conversion Tracking</h3>
              <p className="text-sm text-gray-600">
                We set up tracking to understand user behavior and measure what
                is actually working.
              </p>
            </div>

            {/* BLOCK 3 */}
            <div className="p-6 bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Continuous Optimization</h3>
              <p className="text-sm text-gray-600">
                Campaigns are monitored and improved regularly instead of being
                left running without adjustments.
              </p>
            </div>

            {/* BLOCK 4 */}
            <div className="p-6 bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Website + Ads Alignment</h3>
              <p className="text-sm text-gray-600">
                Ads are connected with landing pages to improve user experience
                and overall performance.
              </p>
            </div>
          </div>

          {/* OPTIONAL NOTE */}
          <div className="text-center text-sm text-gray-500 max-w-xl mx-auto">
            Results depend on business type, budget, and market competition. We
            focus on building a system that improves performance over time.
          </div>
        </div>
      </section>
      {/* CTA */}
      <section className="px-6 py-20 text-center max-w-7xl mx-auto">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Start Growing Your Business Online
          </h2>

          <p className="text-gray-600">
            Get a clear direction for your business with websites, SEO, and ads
            working together.
          </p>

          <Link
            href="/project-request"
            className="inline-block bg-black text-white px-8 py-3 text-sm font-medium hover:opacity-90 transition"
          >
            Get Free Growth Audit
          </Link>
        </div>
      </section>
    </main>
  );
}
