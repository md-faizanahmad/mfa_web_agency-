// app/services/website-development/page.tsx

import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Website Development | WebGrowth Studio",
  description:
    "Professional websites for businesses across India. Fast, responsive, and built to improve your online presence.",
};

export default function WebsiteDevelopmentPage() {
  return (
    <main className="bg-white text-black mt-10">
      {/* HERO */}
      <section className="px-6 pt-20 pb-16 max-w-7xl mx-auto">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
            Your Business Needs More Than Just a Website
          </h1>

          <p className="text-gray-600 text-base sm:text-lg">
            We create professional websites that build trust, clearly present
            your services, and help customers understand your business online.
          </p>

          <Link
            href="/project-request"
            className="inline-block bg-black text-white px-6 py-3 text-sm font-medium"
          >
            Get Your Website Started
          </Link>
        </div>
      </section>

      {/* PROBLEM */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl font-semibold">
            Why Most Business Websites Don’t Work
          </h2>

          <ul className="space-y-3 text-gray-600 text-sm">
            <li>• Outdated design that reduces trust</li>
            <li>• Slow loading and poor mobile experience</li>
            <li>• No clear message about services</li>
            <li>• Not optimized for search visibility</li>
          </ul>
        </div>
      </section>

      {/* SOLUTION */}
      <section className="px-6 py-16 max-w-7xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-10">
          What You Get
        </h2>

        <div className="grid gap-6 sm:grid-cols-2">
          {[
            "Modern, clean design that builds trust",
            "Mobile-first responsive layout",
            "Fast loading performance",
            "Clear service-focused content structure",
            "SEO-ready foundation",
            "Easy to manage and scalable",
          ].map((item, i) => (
            <div key={i} className="p-5 border border-gray-200 bg-gray-50">
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* TYPES */}
      <section className="px-6 py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-10">
          <h2 className="text-2xl sm:text-3xl font-semibold">
            Types of Websites We Build
          </h2>

          <div className="grid gap-6 sm:grid-cols-2">
            <div className="p-6 bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Landing Pages</h3>
              <p className="text-sm text-gray-600">
                Focused pages designed for campaigns, ads, or specific offers.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Business Websites</h3>
              <p className="text-sm text-gray-600">
                Complete websites to showcase services and build trust online.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Portfolio Websites</h3>
              <p className="text-sm text-gray-600">
                Clean and professional websites for individuals and creators.
              </p>
            </div>

            <div className="p-6 bg-white border border-gray-200">
              <h3 className="font-semibold mb-2">Service-Based Websites</h3>
              <p className="text-sm text-gray-600">
                Structured websites focused on explaining services clearly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* POSITIONING */}
      <section className="px-6 py-16 max-w-3xl mx-auto text-center space-y-6">
        <h2 className="text-2xl sm:text-3xl font-semibold">
          Built for Real Business Needs
        </h2>

        <p className="text-gray-600">
          This is not just about design. Your website becomes the foundation for
          SEO, ads, and your entire online presence.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Build a Strong Online Presence
        </h2>

        <p className="text-gray-600 mb-6">
          Start with a website that represents your business properly.
        </p>

        <Link
          href="/project-request"
          className="bg-black text-white px-8 py-3 text-sm"
        >
          Start Your Website
        </Link>
      </section>
    </main>
  );
}
