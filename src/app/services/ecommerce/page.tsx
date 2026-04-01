import { Metadata } from "next";
import Link from "next/link";
import EcomClient from "@/services/ecom/ecomClient";

export const metadata: Metadata = {
  title: "E-commerce Development | WebGrowth Studio",
  description:
    "Build scalable e-commerce platforms designed to support sales, orders, and business growth.",
};

export default function EcommercePage() {
  return (
    <main className="bg text-black mt-10">
      {/* HERO */}
      <section className="px-6 pt-20 pb-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Build an Online Store That Actually Sells
            </h1>

            <p className="text-gray-600 text-lg">
              We design and develop e-commerce platforms that help you manage
              products, handle orders, and run your business online smoothly.
            </p>

            <div className="flex gap-4">
              <Link
                href="/project-request"
                className="bg-black text-white px-6 py-3 text-sm font-medium"
              >
                Start Your Store
              </Link>

              <Link
                href="/services/ads"
                className="border border-gray-300 px-6 py-3 text-sm"
              >
                Grow with Ads
              </Link>
            </div>
          </div>

          <EcomClient />
        </div>
      </section>

      {/* PROBLEM (Business Pain – NOT technical) */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto space-y-12">
          <h2 className="text-3xl font-semibold">
            Why Most Online Stores Struggle
          </h2>

          <div className="space-y-6">
            {[
              "Visitors browse but don’t complete purchases",
              "Checkout process is confusing or slow",
              "Managing products and orders becomes messy",
              "No clear system for scaling traffic and sales",
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="text-gray-300 font-mono">0{i + 1}</span>
                <p className="text-gray-600">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SYSTEM (Visual Breakdown – DIFFERENT STYLE) */}
      <section className="px-6 py-24 max-w-7xl mx-auto">
        <div className="max-w-4xl mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold">
            A Complete E-commerce System
          </h2>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
          {[
            "Product Setup",
            "Customer Journey",
            "Checkout & Payment",
            "Order Management",
          ].map((item, i) => (
            <div key={i} className="flex-1">
              <div className="text-sm text-gray-400 mb-2">Step 0{i + 1}</div>
              <h3 className="font-semibold">{item}</h3>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES (Horizontal Sections – NOT cards grid) */}
      <section className="px-6 py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto space-y-20">
          {[
            {
              title: "Product & Inventory Management",
              desc: "Add, update, and organize your products easily without technical complexity.",
            },
            {
              title: "Secure Payments",
              desc: "Integrated payment systems for smooth and reliable transactions.",
            },
            {
              title: "Order & Customer Flow",
              desc: "Track orders, manage customers, and handle operations efficiently.",
            },
            {
              title: "Mobile Shopping Experience",
              desc: "Optimized storefronts for users browsing and buying from mobile devices.",
            },
          ].map((item, i) => (
            <div key={i} className="grid md:grid-cols-2 gap-10 items-center">
              <h3 className="text-2xl font-semibold">{item.title}</h3>

              <p className="text-gray-600 max-w-md">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WORKFLOW (Business clarity) */}
      <section className="px-6 py-24 max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-3xl font-semibold">How Your Store Works Daily</h2>

        <p className="text-gray-600">
          Customers visit your store, browse products, complete checkout, and
          you manage everything through a simple dashboard — from orders to
          inventory updates.
        </p>
      </section>

      {/* CTA */}
      <section className="px-6 py-20 bg-black text-white text-center">
        <div className="max-w-2xl mx-auto space-y-6">
          <h2 className="text-3xl font-semibold">Start Selling Online</h2>

          <p className="text-white/70 text-sm">
            Build a store that helps you manage products and grow your business.
          </p>

          <Link
            href="/project-request"
            className="inline-block bg-white text-black px-8 py-3 text-sm font-medium"
          >
            Launch Your Store
          </Link>
        </div>
      </section>
    </main>
  );
}
