"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Play } from "lucide-react";

export function Demo() {
  return (
    <SectionWrapper dark={false}>
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 text-balance mb-4">
          See Your AI System{" "}
          <span className="text-royal">in Action</span>
        </h2>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
          Watch how a lead goes from first contact to booked appointment in
          under 60 seconds — with zero human involvement.
        </p>
      </div>

      {/* Video Container */}
      <div className="relative max-w-4xl mx-auto">
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-slate-900 border border-slate-200 shadow-xl">
          {/* Browser Chrome */}
          <div className="absolute top-0 left-0 right-0 h-10 bg-slate-800 flex items-center px-4 gap-2 z-10">
            <div className="w-3 h-3 rounded-full bg-red-400" />
            <div className="w-3 h-3 rounded-full bg-amber-400" />
            <div className="w-3 h-3 rounded-full bg-emerald-400" />
            <span className="ml-3 text-xs text-slate-400 font-mono">
              renaissance-ai.app/demo
            </span>
          </div>

          {/* Placeholder for video/demo */}
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-midnight to-deep-navy">
            <button
              className="w-20 h-20 rounded-full bg-royal/90 hover:bg-royal flex items-center justify-center transition-all hover:scale-110 shadow-glow"
              aria-label="Play demo"
            >
              <Play size={32} className="text-white ml-1" />
            </button>
          </div>

          {/* Demo Timeline Labels */}
          <div className="absolute bottom-4 left-4 right-4 flex justify-between text-xs text-slate-500 font-mono z-10">
            <span>0:00 — Lead submits form</span>
            <span>0:15 — AI qualifies</span>
            <span>0:45 — Job booked</span>
          </div>
        </div>

        {/* Glow effect */}
        <div className="absolute -inset-4 bg-royal/5 rounded-3xl blur-2xl -z-10" />
      </div>

      <div className="text-center mt-12">
        <Button href="/book">
          Get This Built For Your Business &rarr;
        </Button>
      </div>
    </SectionWrapper>
  );
}
