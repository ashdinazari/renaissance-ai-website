"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { defaultIndustry } from "@/lib/industries";
import { PhoneOff, Clock, ClipboardList } from "lucide-react";

const iconMap: Record<string, React.ReactNode> = {
  "phone-missed": <PhoneOff className="w-8 h-8 text-red-400" />,
  clock: <Clock className="w-8 h-8 text-amber-400" />,
  clipboard: <ClipboardList className="w-8 h-8 text-orange-400" />,
};

export function ProblemAgitation() {
  const industry = defaultIndustry;

  return (
    <SectionWrapper dark={false}>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 text-balance mb-4">
          Your Phone Rings. You&apos;re Under a Sink.
          <br />
          <span className="text-red-500">Another Lead Gone.</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          The average plumbing company loses 40% of inbound leads to missed
          calls, slow follow-up, and zero automation. That&apos;s revenue
          walking out the door every single day.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {industry.painPoints.map((point, i) => (
          <div
            key={point.title}
            className="relative bg-white rounded-2xl p-8 border border-red-100 shadow-card-light hover:shadow-card-hover hover:-translate-y-0.5 transition-all duration-200"
          >
            <div className="w-14 h-14 rounded-xl bg-red-50 flex items-center justify-center mb-6">
              {iconMap[point.icon]}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">
              {point.title}
            </h3>
            <p className="text-slate-500 leading-relaxed">
              {point.description}
            </p>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
