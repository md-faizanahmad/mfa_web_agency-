import { MotionWrapper } from "./MotionWrapper";

interface Props {
  statement: string;
}

export function AboutProof({ statement }: Props) {
  return (
    <section className="py-32 px-6 text-center">
      <MotionWrapper>
        <h3 className="text-4xl font-semibold">{statement}</h3>
      </MotionWrapper>
    </section>
  );
}
