import OurServices from "@/components/Home/OurServices";
import ProblemSolving from "@/components/Home/ProblemSolving";
import Process from "@/components/Home/Process/Process";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUsServer";
import Hero from "@/components/Layouts/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolving />
      <OurServices />
      <WhyChooseUs />
      <Process />
    </main>
  );
}
