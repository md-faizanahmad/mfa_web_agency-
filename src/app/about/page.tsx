// src/components/sections/about/AboutServer.tsx

import AboutClient from "@/components/Section/About/AboutClient";

import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://agency.mdfaizanahmad.in"),

  title: "About MFA Agency | Website Development for Small Businesses",

  description:
    "Learn about MFA Agency, a website development and SEO team helping small businesses build fast, simple websites that attract real customers.",

  alternates: {
    canonical: "/about",
  },
};

export default function About() {
  return (
    <section className="bg-white mt-12 py-20 px-6 border-b border-slate-100">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Content Side */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-3">
            <span className="text-sky-500 font-bold text-[9px] uppercase tracking-[0.4em] font-mono"></span>
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 leading-tight">
              Simple Websites <br />
              <span className="text-sky-200">That Bring Customers</span>
            </h2>
          </div>

          <p className="text-sm md:text-base text-slate-500 max-w-lg">
            Many small businesses have websites that look fine but don’t bring
            any enquiries. We help fix that by building fast, mobile-friendly
            websites with proper Google setup, so people can find your business
            and contact you easily.
          </p>

          <div className="flex gap-10 pt-4">
            <div>
              <p className="text-sm font-semibold text-slate-900">
                Mobile-Friendly Design
              </p>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">
                Works on all devices
              </p>
            </div>

            <div className="h-10 w-px bg-slate-100" />

            <div>
              <p className="text-sm font-semibold text-slate-900">
                Google Search Ready
              </p>
              <p className="text-[11px] uppercase tracking-widest text-slate-400 mt-1">
                SEO setup included
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
