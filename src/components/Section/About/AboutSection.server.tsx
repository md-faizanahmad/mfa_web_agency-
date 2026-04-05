import { AboutHero } from "./AboutHero.server";
import { AboutIdentity } from "./AboutIdentity.server";
import { AboutProcess } from "./AboutProcess.server";
import { AboutProof } from "./AboutProof.server";
import { AboutContent } from "./types";

const content: AboutContent = {
  hero: {
    title: "We build systems that scale businesses.",
  },
  identity: {
    title: "A product-driven development studio",
    description: "We focus on performance, conversion, and long-term growth.",
  },
  process: {
    steps: ["Research", "Strategy", "Execution", "Scale"],
  },
  proof: {
    statement: "Built for performance, not just aesthetics",
  },
};

export default function AboutSection() {
  return (
    <section className="bg-neutral-50 text-neutral-900 mt-20">
      <AboutHero title={content.hero.title} />
      <AboutIdentity {...content.identity} />
      <AboutProcess steps={content.process.steps} />
      <AboutProof statement={content.proof.statement} />
    </section>
  );
}
