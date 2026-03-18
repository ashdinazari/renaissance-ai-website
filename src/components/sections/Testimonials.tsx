"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

const testimonials = [
  {
    name: "Mike Rodriguez",
    company: "Mike's Plumbing Co.",
    location: "Chicago, IL",
    quote:
      "I was working 14-hour days and still missing leads. Now the AI handles everything before I even finish my first job. Revenue is up 191% and I actually get home for dinner.",
    metric: "+191% booked jobs",
    avatar: "MR",
  },
  {
    name: "Sarah Chen",
    company: "Ace Drain Solutions",
    location: "Houston, TX",
    quote:
      "I thought AI was hype. Three months later, I've hired two more techs because we have more work than we've ever had. The system pays for itself in the first week.",
    metric: "+128% revenue",
    avatar: "SC",
  },
  {
    name: "James Whitfield",
    company: "Whitfield & Sons Plumbing",
    location: "Atlanta, GA",
    quote:
      "We used to lose every after-hours lead. Now the AI books them while I sleep. Last month we closed $22,000 in jobs that would have gone to competitors.",
    metric: "$22K recovered/month",
    avatar: "JW",
  },
];

export function Testimonials() {
  const [active, setActive] = useState(0);

  const next = () => setActive((prev) => (prev + 1) % testimonials.length);
  const prev = () =>
    setActive(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );

  return (
    <SectionWrapper dark>
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4">
          Don&apos;t Take Our Word For It
        </h2>
        <p className="text-lg text-slate-400 max-w-xl mx-auto">
          Hear from business owners who were skeptical too — until the results
          came in.
        </p>
      </div>

      {/* Testimonial Cards */}
      <div className="max-w-3xl mx-auto">
        <div className="relative">
          {testimonials.map((t, i) => (
            <div
              key={t.name}
              className={`transition-all duration-500 ${
                i === active
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 absolute inset-0 pointer-events-none translate-x-8"
              }`}
            >
              <div className="bg-carbon rounded-2xl p-8 md:p-10 border border-white/5">
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star
                      key={j}
                      size={18}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Quote */}
                <blockquote className="text-lg md:text-xl text-slate-200 leading-relaxed mb-8">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>

                {/* Author */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-royal/20 flex items-center justify-center text-royal font-bold text-sm">
                      {t.avatar}
                    </div>
                    <div>
                      <p className="font-semibold text-white">{t.name}</p>
                      <p className="text-sm text-slate-400">
                        {t.company} — {t.location}
                      </p>
                    </div>
                  </div>
                  <span className="hidden sm:block px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-mono font-semibold">
                    {t.metric}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-royal/40 transition-all"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={18} />
          </button>

          {/* Dots */}
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === active ? "bg-royal w-6" : "bg-white/20"
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:border-royal/40 transition-all"
            aria-label="Next testimonial"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </SectionWrapper>
  );
}
