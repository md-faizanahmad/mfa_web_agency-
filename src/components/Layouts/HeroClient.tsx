// src/components/sections/HeroServer.tsx

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HeroServer() {
  return (
    <section className=" text-white py-20 md:py-18">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-2xl">
          {/* SEO H1 */}
          <h1 className="text-3xl md:text-6xl font-bold leading-tight tracking-tight mb-6">
            Website Development for Modern Businesses
          </h1>

          {/* supporting text */}
          <p className="text-base md:text-lg text-slate-400 leading-relaxed mb-10">
            We design and build fast, mobile-friendly websites that help
            businesses present their services clearly and make it easy for
            customers to contact or book online.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/project-request"
              className="inline-flex items-center justify-center gap-2
              bg-sky-400 text-brand-midnight
              px-6 py-3 rounded-lg
              font-semibold text-sm
              hover:bg-white transition-colors"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/work"
              className="inline-flex items-center justify-center
              border border-white/10
              px-6 py-3 rounded-lg
              text-sm font-semibold
              text-white
              hover:bg-white/10 transition-colors"
            >
              View Our Work
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
