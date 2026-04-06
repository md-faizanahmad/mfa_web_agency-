import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function HeroServer() {
  return (
    <section className="relative py-24 md:py-28 bg-brand-midnight text-white overflow-hidden mt-20">
      {/* GIF BACKGROUND */}
      <div className="absolute inset-0 z-0">
        {/* <Image
          src="/hero/home-hero-gif.gif"
          alt="background animation"
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-10 scale-110"
        /> */}

        {/* overlay */}
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* LEFT CONTENT */}
          <div className="max-w-xl">
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight mb-6">
              Websites That Actually Grow Your Business
            </h1>

            <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-10">
              We design and build fast, conversion-focused websites that turn
              visitors into leads — backed by SEO, ads, and performance
              strategy.
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
                border border-white/10
                px-6 py-3 rounded-lg
                text-sm font-semibold
                hover:bg-white/10 transition-colors"
              >
                View Our Work
              </Link>
            </div>
          </div>

          {/* RIGHT DEVICE */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
              <video
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-full object-cover"
              >
                <source src="/hero/home-hero-video.mp4" type="video/mp4" />
              </video>

              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
            </div>

            <div className="absolute -inset-10 bg-sky-500/10 blur-3xl -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
}
