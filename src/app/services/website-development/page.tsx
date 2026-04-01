// app/services/website-development/page.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development | WebGrowth Studio",
  description:
    "High-performance websites for businesses across India. Built for speed, trust, and better online presence.",
};

export default function WebsitePage() {
  return (
    <main className="bg-white text-black">
      {/* HERO */}
      <section className="px-6 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold">
            Get a Website That Builds Trust and Converts
          </h1>
          <p className="text-gray-600">
            We create fast, responsive, and SEO-ready websites designed to
            improve your online presence.
          </p>

          <Link
            href="/project-request"
            className="inline-block bg-black text-white px-6 py-3 text-sm"
          >
            Get Free Growth Audit
          </Link>
        </div>
      </section>

      {/* TYPES */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2">
          {[
            "Landing Pages",
            "Business Websites",
            "Portfolio Websites",
            "Service-Based Websites",
          ].map((item, i) => (
            <div key={i} className="p-6 border bg-white border-gray-200">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Build Your Online Presence
        </h2>
        <Link href="/project-request" className="bg-black text-white px-6 py-3">
          Start Your Website
        </Link>
      </section>
    </main>
  );
}
