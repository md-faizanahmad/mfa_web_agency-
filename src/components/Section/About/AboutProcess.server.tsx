import { MotionWrapper } from "./MotionWrapper";
import { StaggerContainer } from "./StaggerContainer";

interface Props {
  steps: string[];
}

export function AboutProcess({ steps }: Props) {
  return (
    <section className="py-32 px-6">
      <StaggerContainer>
        {steps.map((step, i) => (
          <MotionWrapper key={i}>
            <div className="text-2xl mb-6">{step}</div>
          </MotionWrapper>
        ))}
      </StaggerContainer>
    </section>
  );
}
