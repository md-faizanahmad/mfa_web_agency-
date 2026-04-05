import Process from "@/components/Home/Process/Process";
import { AboutHero } from "./AboutHero";
import { AboutIdentity } from "./AboutIdentity";
import { AboutPhilosophy } from "./AboutPhilosophy";
import { AboutProof } from "./AboutProof";

export default function AboutContainer() {
  return (
    <section className="bg-neutral-50 text-neutral-900">
      <AboutHero />
      <AboutPhilosophy />
      <AboutIdentity />
      <Process />
      <AboutProof />
    </section>
  );
}
