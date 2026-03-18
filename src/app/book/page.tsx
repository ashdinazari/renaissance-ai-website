import type { Metadata } from "next";
import { Check, Shield, Star, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Book a Strategy Call | Renaissance AI",
  description:
    "Book a free 30-minute strategy call with Renaissance AI. Get a custom AI automation blueprint for your business.",
};

const benefits = [
  "Full lead flow audit",
  "Revenue leak analysis",
  "Custom AI system blueprint",
  "ROI projection for your business",
  "Zero obligation, zero pressure",
];

const expectations = [
  {
    time: "First 5 min",
    description: "We learn about your business and current lead flow",
  },
  {
    time: "Next 15 min",
    description:
      "We show you where you're losing revenue and how automation fixes it",
  },
  {
    time: "Last 10 min",
    description: "We map out a custom AI system blueprint and ROI projection",
  },
];

export default function BookPage() {
  return (
    <div className="min-h-screen bg-midnight pt-24">
      <div className="container-max px-6 md:px-8 py-16">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left: Info */}
          <div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4">
              Book Your Free{" "}
              <span className="gradient-text">Strategy Call</span>
            </h1>
            <p className="text-lg text-slate-300 mb-8 leading-relaxed">
              30 minutes. Zero fluff. You&apos;ll walk away with a custom AI
              automation blueprint — whether you work with us or not.
            </p>

            {/* What You Get */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-white mb-4">
                What You&apos;ll Get:
              </h2>
              <ul className="space-y-3">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                      <Check size={12} className="text-emerald-400" />
                    </div>
                    <span className="text-slate-300">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* What to Expect */}
            <div className="mb-10">
              <h2 className="text-lg font-bold text-white mb-4">
                What to Expect:
              </h2>
              <div className="space-y-4">
                {expectations.map((item) => (
                  <div
                    key={item.time}
                    className="flex gap-4 items-start bg-carbon rounded-xl p-4 border border-white/5"
                  >
                    <span className="text-xs font-mono text-royal bg-royal/10 px-2 py-1 rounded whitespace-nowrap">
                      {item.time}
                    </span>
                    <p className="text-sm text-slate-300">
                      {item.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Trust */}
            <div className="flex flex-wrap gap-4 text-sm text-slate-500">
              <span className="flex items-center gap-1">
                <Shield size={14} /> Secure & private
              </span>
              <span className="flex items-center gap-1">
                <Star size={14} /> 4.9/5 rating
              </span>
              <span className="flex items-center gap-1">
                <Clock size={14} /> Avg call: 28 min
              </span>
            </div>
          </div>

          {/* Right: Calendar Embed Placeholder */}
          <div>
            <div className="bg-carbon rounded-2xl border border-white/5 overflow-hidden shadow-glow">
              {/*
                Replace with your Cal.com or Calendly embed:

                Cal.com:
                <iframe
                  src="https://cal.com/renaissance-ai/strategy-call"
                  className="w-full h-[650px] border-0"
                />

                Calendly:
                <iframe
                  src="https://calendly.com/renaissance-ai/strategy-call"
                  className="w-full h-[650px] border-0"
                />
              */}
              <div className="flex flex-col items-center justify-center h-[650px] text-center p-8">
                <div className="w-16 h-16 rounded-full bg-royal/20 flex items-center justify-center mb-4">
                  <Clock size={32} className="text-royal" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  Calendar Loading...
                </h3>
                <p className="text-sm text-slate-400 max-w-xs">
                  Replace this placeholder with your Cal.com or Calendly embed.
                  See the code comments for instructions.
                </p>
              </div>
            </div>

            {/* Scarcity */}
            <div className="mt-4 flex items-center justify-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
              <Clock size={14} className="text-amber-400" />
              <span className="text-sm text-amber-300 font-medium">
                Only 5 spots remaining this month
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
