"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { defaultIndustry } from "@/lib/industries";
import { Zap, Brain, CalendarCheck } from "lucide-react";

const icons = [
  <Zap key="zap" className="w-8 h-8 text-royal" />,
  <Brain key="brain" className="w-8 h-8 text-electric" />,
  <CalendarCheck key="cal" className="w-8 h-8 text-ice-blue" />,
];

export function Solution() {
  const industry = defaultIndustry;

  return (
    <SectionWrapper dark id="services">
      {/* Gradient divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-royal to-electric rounded-full mx-auto mb-16" />

      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4">
          What If Every Lead Was Answered, Qualified,
          <br />
          and Booked —{" "}
          <span className="gradient-text">Automatically?</span>
        </h2>
        <p className="text-lg text-slate-400 max-w-2xl mx-auto">
          Renaissance AI replaces your missed calls, forgotten follow-ups, and
          manual scheduling with an AI-powered system that works 24/7.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 mb-12">
        {industry.solutionPillars.map((pillar, i) => (
          <div
            key={pillar.title}
            className="relative bg-carbon rounded-2xl p-8 border border-white/5 hover:border-royal/20 transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-xl bg-royal/10 flex items-center justify-center mb-6">
              {icons[i]}
            </div>
            <h3 className="text-xl font-bold text-white mb-3">
              {pillar.title}
            </h3>
            <p className="text-slate-400 leading-relaxed">
              {pillar.description}
            </p>
          </div>
        ))}
      </div>

      <div className="text-center">
        <Button href="#how-it-works" variant="secondary">
          See the Full System &rarr;
        </Button>
      </div>
    </SectionWrapper>
  );
}
