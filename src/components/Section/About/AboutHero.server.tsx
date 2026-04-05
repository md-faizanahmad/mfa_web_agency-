import { MotionWrapper } from "./MotionWrapper";

interface Props {
  title: string;
}

export function AboutHero({ title }: Props) {
  return (
    <section className="min-h-[80vh] flex items-center px-6">
      <MotionWrapper>
        <h1 className="text-4xl md:text-6xl font-serif max-w-3xl">{title}</h1>
      </MotionWrapper>
    </section>
  );
}
