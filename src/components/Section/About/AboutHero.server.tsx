import Image from "next/image";
import { MotionWrapper } from "./MotionWrapper";

interface Props {
  title: string;
}

export function AboutHero({ title }: Props) {
  return (
    <section className="relative min-h-[80vh] flex items-center px-6 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 ">
        <Image
          src="/ourservices/about-hero.jpg"
          alt="Abstract system visual representing scalable digital infrastructure"
          fill
          priority
          className="object-cover"
        />

        {/* Overlay (IMPORTANT for text readability) */}
        <div className="absolute inset-0 bg-white/30 md:bg-white/30 " />
      </div>

      {/* Content */}
      <div className="w-full mx-auto">
        <MotionWrapper>
          <h1 className="text-4xl md:text-7xl font-serif max-w-3xl text-neutral-900">
            {title}
          </h1>
        </MotionWrapper>
      </div>
    </section>
  );
}
