import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="px-6 py-20 md:py-28 border-b border-slate-200">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* LEFT: TEXT */}
        <div className="lg:col-span-7 space-y-6">
          <p className="text-xs tracking-widest uppercase text-sky-500 font-bold">
            About WebGrowth Studio
          </p>

          <h1 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
            Built for Performance. <br />
            Not Just Appearance.
          </h1>

          <p className="max-w-xl text-slate-600 text-base leading-relaxed">
            WebGrowth Studio builds high-performance web systems designed to
            solve real business problems — not just visually polished
            interfaces.
          </p>
        </div>

        {/* RIGHT: IMAGE */}
        <div className="lg:col-span-5 relative">
          <div className="relative w-full h-65 md:h-95 lg:h-105 overflow-hidden border border-slate-200 bg-slate-50">
            <Image
              src="/ourservices/about-hero.png"
              alt="Web system architecture and performance-focused development"
              fill
              priority
              className="object-cover"
            />

            {/* subtle overlay for premium feel */}
            <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent" />
          </div>
        </div>
      </div>
    </section>
  );
}
