import { MotionWrapper } from "./MotionWrapper";

interface Props {
  statement: string;
}

export function AboutProof({ statement }: Props) {
  return (
    <section className="relative py-32 px-6 text-center overflow-hidden bg-black text-white">
      {/* Background Layer */}
      <div className="absolute inset-0 -z-10">
        {/* Base */}
        <div className="absolute inset-0 bg-black" />

        {/* Subtle radial glow */}
        <div className="absolute left-1/2 top-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-white/10 blur-3xl opacity-20" />

        {/* Bottom fade */}
        <div className="absolute bottom-0 w-full h-[200px] bg-gradient-to-t from-black to-transparent" />
      </div>

      <div className="max-w-4xl mx-auto">
        <MotionWrapper>
          <h3 className="text-3xl md:text-5xl font-semibold leading-tight tracking-tight">
            {statement}
          </h3>
        </MotionWrapper>

        {/* Supporting line (quiet authority) */}
        <MotionWrapper>
          <p className="mt-6 text-neutral-400 text-sm md:text-base max-w-xl mx-auto">
            Built with precision, optimized for conversion, and designed to
            scale.
          </p>
        </MotionWrapper>

        {/* Divider / subtle visual anchor */}
        <MotionWrapper>
          <div className="mt-12 mx-auto w-24 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent opacity-60" />
        </MotionWrapper>
      </div>
    </section>
  );
}
