"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { MessageSquare, SlidersHorizontal, CalendarCheck2 } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Lead Comes In",
    description:
      "A customer calls, fills out a form, or sends a text. Your AI responds instantly with human-like conversation.",
    icon: <MessageSquare className="w-6 h-6" />,
  },
  {
    number: "02",
    title: "AI Qualifies & Scores",
    description:
      "The system asks qualifying questions, detects urgency, and scores the lead. Hot leads get flagged immediately.",
    icon: <SlidersHorizontal className="w-6 h-6" />,
  },
  {
    number: "03",
    title: "Job Gets Booked",
    description:
      "Qualified leads are booked into your calendar and you get an SMS alert. No back-and-forth. No missed revenue.",
    icon: <CalendarCheck2 className="w-6 h-6" />,
  },
];

export function HowItWorks() {
  return (
    <SectionWrapper dark={false} id="how-it-works">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 text-balance mb-4">
          Three Steps. Fully Automated.{" "}
          <span className="text-royal">Zero Effort From You.</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          We build, install, and manage your entire AI system. Here&apos;s what
          happens after launch:
        </p>
      </div>

      {/* Steps */}
      <div className="relative">
        {/* Connector Line (desktop) */}
        <div className="hidden md:block absolute top-24 left-[16.66%] right-[16.66%] h-0.5 bg-gradient-to-r from-royal via-electric to-ice-blue" />

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {steps.map((step, i) => (
            <div key={step.number} className="relative text-center">
              {/* Number Circle */}
              <div className="relative z-10 w-16 h-16 rounded-full bg-royal text-white font-mono font-bold text-lg flex items-center justify-center mx-auto mb-6 shadow-[0_0_30px_rgba(37,99,235,0.3)]">
                {step.number}
              </div>

              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-card-light">
                <div className="w-12 h-12 rounded-xl bg-royal/10 flex items-center justify-center mx-auto mb-4 text-royal">
                  {step.icon}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="text-center mt-12">
        <Button href="/book">
          Book Your Strategy Call &rarr;
        </Button>
      </div>
    </SectionWrapper>
  );
}
