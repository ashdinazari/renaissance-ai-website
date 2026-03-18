import { Hero } from "@/components/sections/Hero";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Results } from "@/components/sections/Results";
import { Demo } from "@/components/sections/Demo";
import { Testimonials } from "@/components/sections/Testimonials";
import { CTAClose } from "@/components/sections/CTAClose";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ProblemAgitation />
      <Solution />
      <HowItWorks />
      <Results />
      <Demo />
      <Testimonials />
      <CTAClose />
    </>
  );
}
