import { AbstractVisual } from "./AbstractVisual";
import { MotionWrapper } from "./MotionWrapper";

interface Props {
  title: string;
  description: string;
}

export function AboutIdentity({ title, description }: Props) {
  return (
    <section className="py-32 px-6 grid md:grid-cols-2 gap-12 items-center">
      <MotionWrapper>
        <div>
          <h2 className="text-3xl mb-4">{title}</h2>
          <p className="text-neutral-600">{description}</p>
        </div>
      </MotionWrapper>

      <AbstractVisual />
    </section>
  );
}
