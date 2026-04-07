import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroServer() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden text-white">
      {/* BACKGROUND IMAGE */}
      <Image
        fill
        priority
        sizes="100vw"
        src="/hero/hero.png"
        alt="hero background"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />

      {/* DARK GRADIENT OVERLAY (CRITICAL) */}
      <div className="absolute inset-0 bg-linear-to-r from-black/90 via-black/70 to-black/20" />

      {/* OPTIONAL BRAND TINT (PRO LOOK) */}
      <div className="absolute inset-0 bg-linear-to-r from-sky-900/20 to-transparent mix-blend-overlay" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight tracking-tight mb-6">
              Websites That Actually
              <br />
              Grow Your Business
            </h1>

            <p className="text-slate-300 text-base md:text-lg leading-relaxed mb-10">
              We design and build high-performance websites that turn traffic
              into revenue — powered by SEO, ads, and conversion strategy.
            </p>

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
                border border-white/20
                px-6 py-3 rounded-lg
                text-sm font-semibold
                hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* RIGHT SIDE (EMPTY FOR CINEMATIC SPACE) */}
          <div />
        </div>
      </div>

      {/* BOTTOM FADE (DEPTH) */}
      <div className="absolute bottom-0 left-0 w-full h-40 bg-linear-to-t from-black to-transparent" />
    </section>
  );
}
