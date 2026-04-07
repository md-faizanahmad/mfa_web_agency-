import Link from "next/link";
import Image from "next/image";

export default function HeroServer() {
  const badges = [
    "Fast Loading",
    "SEO Optimized",
    "Secure SSL",
    "24/7 Hosting",
  ];

  return (
    <section className="relative min-h-screen flex flex-col justify-between overflow-hidden text-white">
      {/* BACKGROUND */}
      <Image
        fill
        priority
        src="/hero/heroBanner.png"
        alt="hero background"
        className="object-cover"
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-linear-to-r from-black/70 via-black/40 to-transparent" />
      <div className="absolute inset-0 bg-black/20" />

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grow flex flex-col justify-center pt-32 pb-16">
        <div className="max-w-2xl">
          {/* BADGES */}
          <div className="flex flex-wrap gap-3 mb-6">
            {badges.map((badge) => (
              <span
                key={badge}
                className="px-3 py-1 bg-white/10 backdrop-blur-md border border-white/10 text-[11px] uppercase tracking-widest text-gray-300 rounded"
              >
                ● {badge}
              </span>
            ))}
          </div>

          {/* HEADLINE */}
          <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold leading-[1] tracking-tight mb-6">
            Websites That Actually
            <br />
            <span className="text-amber-500">Grow Your Business</span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-gray-300 text-base md:text-lg max-w-lg leading-relaxed mb-8">
            We design and build high-performance websites that turn traffic into
            revenue — powered by SEO, ads, and conversion strategy.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/project-request"
              className="bg-[#3d3623] hover:bg-[#4d452d] text-white px-6 py-3 text-sm font-medium transition-all"
            >
              Start Building Free
            </Link>

            <Link
              href="tel:+917563092029"
              className="group relative border border-white/30 px-6 py-3 text-sm font-medium hover:bg-white/5 transition-all"
            >
              Talk To Us
              <div className="absolute -bottom-1 -right-1 w-2 h-2 border-r border-b border-white/50" />
            </Link>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="relative z-10 w-full px-6 pb-10">
        <div className="block text-right">
          <div className="max-w-sm md:text-right border-l md:border-l-0 md:border-r border-sky-500/40 pl-5 md:pl-0 md:pr-5 ml-auto">
            <p className="text-sm md:text-[15px] text-gray-300 leading-relaxed italic">
              &quot;We weren’t just looking for a website — we needed a system
              that brings consistent leads. Within weeks, we saw a{" "}
              <span className="font-semibold text-white">
                measurable increase in conversions
              </span>{" "}
              and actual revenue growth.&quot;
            </p>

            <p className="mt-3 text-[10px] font-semibold tracking-widest text-gray-500 uppercase">
              — Business Owner,{" "}
              <span className="text-sky-500">Local Brand</span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
