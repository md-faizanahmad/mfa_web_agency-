import OurServices from "@/components/Home/OurServices";
import ProblemSolving from "@/components/Home/ProblemSolving";
import WhyChooseUs from "@/components/Home/WhyChooseUs/WhyChooseUsServer";
import Hero from "@/components/Layouts/Hero";

export default function Home() {
  return (
    <main>
      <Hero />
      <ProblemSolving />
      <OurServices />
      <WhyChooseUs />
    </main>
  );
}
