// src/components/sections/HeroServer.tsx
import HeroClient from "./HeroClient";

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] pt-32 pb-20 overflow-hidden flex items-center bg-brand-midnight">
      {/* BACKGROUND VIDEO LAYER - DEEP TEXTURE */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover opacity-40  contrast-125"
        >
          <source src="/hero/global.mp4" type="video/mp4" />
        </video>
        {/* Sky-Tinted Radial Mask */}
        {/* <div className="absolute inset-0 bg-linear-to-b from-brand-midnight via-transparent to-brand-midnight" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,#38bdf820_0%,transparent_60%)]" /> */}
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <HeroClient />
      </div>
    </section>
  );
}
