import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { industries } from "@/lib/industries";
import { Hero } from "@/components/sections/Hero";
import { ProblemAgitation } from "@/components/sections/ProblemAgitation";
import { Solution } from "@/components/sections/Solution";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Results } from "@/components/sections/Results";
import { CTAClose } from "@/components/sections/CTAClose";

interface IndustryPageProps {
  params: { slug: string };
}

export function generateStaticParams() {
  return Object.keys(industries).map((slug) => ({ slug }));
}

export function generateMetadata({ params }: IndustryPageProps): Metadata {
  const industry = industries[params.slug];
  if (!industry) return {};

  return {
    title: industry.metaTitle,
    description: industry.metaDescription,
  };
}

export default function IndustryPage({ params }: IndustryPageProps) {
  const industry = industries[params.slug];
  if (!industry) notFound();

  // Industry pages use the same sections as homepage
  // but with industry-specific content injected via the config
  return (
    <>
      <Hero />
      <ProblemAgitation />
      <Solution />
      <HowItWorks />
      <Results />
      <CTAClose />
    </>
  );
}
