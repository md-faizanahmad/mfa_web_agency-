// components/sections/Hero.tsx

import { Container } from "../Layouts/Container";
import { SectionWrapper } from "../Layouts/SectionWrapper";
import { Button } from "../ui/Button";

export function Hero() {
  return (
    <SectionWrapper>
      <Container>
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-semibold leading-tight">
              Websites that drive real business growth.
            </h1>

            <p className="text-gray-500 max-w-md">
              Built for performance, clarity, and conversion.
            </p>

            <div className="flex gap-4">
              <Button href="/project-request">Start project</Button>
              <Button href="/work" variant="secondary">
                View work
              </Button>
            </div>
          </div>

          <div className="aspect-[4/3] bg-gray-100 rounded-2xl" />
        </div>
      </Container>
    </SectionWrapper>
  );
}
