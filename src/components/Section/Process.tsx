// components/sections/Process.tsx

import { Container } from "../Layouts/Container";
import { SectionWrapper } from "../Layouts/SectionWrapper";

const steps = ["Discovery", "Strategy", "Execution", "Launch"];

export function Process() {
  return (
    <SectionWrapper className="bg-gray-50">
      <Container>
        <h2 className="text-3xl font-semibold mb-16">
          Simple process. High-quality output.
        </h2>

        <div className="grid md:grid-cols-4 gap-8 text-sm">
          {steps.map((step, i) => (
            <div key={i}>
              <span className="text-gray-400">0{i + 1}</span>
              <h3 className="mt-2 font-medium">{step}</h3>
            </div>
          ))}
        </div>
      </Container>
    </SectionWrapper>
  );
}
