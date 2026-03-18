"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { ArrowUpRight } from "lucide-react";

const stats = [
  { value: "97%", label: "Lead Response Rate" },
  { value: "3.2x", label: "Average ROI in 90 Days" },
  { value: "$14,800", label: "Avg Monthly Revenue Recovered" },
  { value: "12 min", label: "Avg Time to Booked Appointment" },
];

const caseStudies = [
  {
    company: "Mike's Plumbing Co.",
    location: "Chicago, IL",
    beforeAfter: "From 23 to 67 booked jobs/month",
    quote:
      "We went from missing half our calls to booking more jobs than we can handle. Had to hire two more techs.",
    metric: "+191% booked jobs",
    slug: "mikes-plumbing",
  },
  {
    company: "Ace Drain Solutions",
    location: "Houston, TX",
    beforeAfter: "From $18k to $41k monthly revenue",
    quote:
      "I was skeptical about AI. Three months in, it's the best investment I've made in 15 years of business.",
    metric: "+128% revenue",
    slug: "ace-drain",
  },
];

export function Results() {
  return (
    <SectionWrapper dark id="results">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4">
          Real Numbers. Real Businesses.{" "}
          <span className="gradient-text">Real Revenue.</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Here&apos;s what happens when plumbing companies stop losing leads and
          start automating.
        </p>
      </div>

      {/* Stats Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 mb-16 py-10 px-8 rounded-2xl border border-white/5 bg-carbon/50">
        {stats.map((stat) => (
          <AnimatedCounter
            key={stat.label}
            value={stat.value}
            label={stat.label}
          />
        ))}
      </div>

      {/* Case Study Cards */}
      <div className="grid md:grid-cols-2 gap-8 mb-12">
        {caseStudies.map((study) => (
          <div
            key={study.slug}
            className="bg-carbon rounded-2xl p-8 border border-white/5 hover:border-royal/20 transition-all duration-200 group"
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="text-lg font-bold text-white">
                  {study.company}
                </h3>
                <p className="text-sm text-slate-500">{study.location}</p>
              </div>
              <span className="px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono font-semibold">
                {study.metric}
              </span>
            </div>

            <p className="text-slate-300 mb-4 font-medium">
              {study.beforeAfter}
            </p>

            <blockquote className="text-slate-400 italic border-l-2 border-royal/30 pl-4 mb-6">
              &ldquo;{study.quote}&rdquo;
            </blockquote>

            <a
              href={`/results/${study.slug}`}
              className="inline-flex items-center gap-2 text-sm text-royal hover:text-electric transition-colors group-hover:gap-3"
            >
              Read Full Story
              <ArrowUpRight size={14} />
            </a>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button href="/results" variant="secondary">
          See All Results &rarr;
        </Button>
      </div>
    </SectionWrapper>
  );
}
