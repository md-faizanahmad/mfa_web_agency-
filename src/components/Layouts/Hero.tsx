import Link from "next/link";
import Image from "next/image";

export default function HeroServer() {
  return (
    <section className="relative min-h-screen overflow-hidden text-white">
      {/* BACKGROUND */}
      <Image
        fill
        priority
        src="/hero/heroBanner.png"
        alt=""
        aria-hidden="true"
        className="object-cover"
      />

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/45" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-28 pb-16 md:px-8 md:pt-32">
        <div className="max-w-2xl">
          {/* EYEBROW */}
          <p className="mb-5 text-[10px] font-medium uppercase tracking-[0.2em] text-white/60">
            Web Design / Development / Growth
          </p>

          {/* HEADLINE */}
          <h1 className="mb-6 text-4xl font-semibold leading-[1.05] tracking-tight md:text-5xl lg:text-6xl">
            Websites That Actually
            <br />
            <span className="text-sky-400">Grow Your Business</span>
          </h1>

          {/* SUBTEXT */}
          <p className="mb-8 max-w-lg text-base leading-relaxed text-white/70 md:text-lg">
            We design and build high-performance websites that turn traffic into
            revenue — powered by SEO, ads, and conversion strategy.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/project-request"
              aria-label="Start a new project"
              className="inline-flex items-center justify-center bg-white px-6 py-3 text-sm font-medium text-slate-950 transition-colors duration-200 hover:bg-white/90"
            >
              Start a Project
            </Link>

            <Link
              href="tel:+917563092029"
              aria-label="Call WebGrowth Studio"
              className="group relative inline-flex items-center justify-center border border-white/30 px-6 py-3 text-sm font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              Talk To Us
              <span
                aria-hidden="true"
                className="absolute -bottom-1 -right-1 h-2 w-2 border-b border-r border-white/50"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER / SOCIAL PROOF */}
      <div className="absolute inset-x-0 bottom-0 z-10 px-6 pb-8 md:px-8 md:pb-10">
        <div className="ml-auto max-w-sm border-l border-white/20 pl-5 md:border-l-0 md:border-r md:pr-5 md:pl-0">
          <p className="text-sm leading-relaxed text-white/65 md:text-[15px]">
            Websites built around performance, conversion, and measurable
            business growth.
          </p>

          <p className="mt-3 text-[10px] font-medium uppercase tracking-[0.18em] text-white/40">
            WebGrowth Studio
          </p>
        </div>
      </div>
    </section>
  );
}
