"use client";

import { Button } from "@/components/ui/Button";
import { defaultIndustry } from "@/lib/industries";
import { Star } from "lucide-react";

export function Hero() {
  const industry = defaultIndustry;

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-midnight via-deep-navy to-[#0F172A]" />

      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      {/* Glow Orb */}
      <div className="absolute top-1/2 right-1/4 w-[600px] h-[600px] bg-royal/10 rounded-full blur-[120px]" />

      <div className="container-max relative z-10 px-6 md:px-8 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Copy */}
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-royal/20 bg-royal/5 text-sm text-ice-blue mb-6">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              AI Automation for {industry.name} Companies
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-[64px] font-extrabold leading-[1.1] tracking-tight text-white text-balance mb-6">
              {industry.heroHeadline}
            </h1>

            <p className="text-lg md:text-xl text-slate-300 leading-relaxed mb-10 max-w-xl">
              {industry.heroSubheadline}
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button href="/book" size="lg">
                Book Your Strategy Call
                <span className="ml-2">&rarr;</span>
              </Button>
              <Button href="#how-it-works" variant="secondary" size="lg">
                See How It Works
              </Button>
            </div>

            {/* Trust Strip */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="fill-amber-400 text-amber-400"
                  />
                ))}
                <span className="ml-2 text-sm text-slate-400">
                  4.9/5 average rating
                </span>
              </div>
              <span className="text-sm text-slate-400">
                Trusted by 50+ service businesses
              </span>
            </div>
          </div>

          {/* Right: Dashboard Mockup */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl border border-white/10 bg-carbon/80 backdrop-blur-sm p-6 shadow-glow">
              {/* Mock Dashboard Header */}
              <div className="flex items-center gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-400" />
                <div className="w-3 h-3 rounded-full bg-amber-400" />
                <div className="w-3 h-3 rounded-full bg-emerald-400" />
                <span className="ml-3 text-xs text-slate-500 font-mono">
                  renaissance-ai.app/dashboard
                </span>
              </div>

              {/* Mock Stats Row */}
              <div className="grid grid-cols-3 gap-4 mb-6">
                {[
                  { label: "New Leads Today", value: "12", change: "+34%" },
                  { label: "Booked This Week", value: "28", change: "+18%" },
                  { label: "Revenue", value: "$8,420", change: "+52%" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="bg-midnight/50 rounded-xl p-4 border border-white/5"
                  >
                    <p className="text-xs text-slate-500 mb-1">{stat.label}</p>
                    <p className="text-xl font-bold text-white font-mono">
                      {stat.value}
                    </p>
                    <span className="text-xs text-emerald-400 font-mono">
                      {stat.change}
                    </span>
                  </div>
                ))}
              </div>

              {/* Mock Lead Notification */}
              <div className="bg-royal/10 border border-royal/20 rounded-xl p-4 animate-pulse">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-royal/20 flex items-center justify-center">
                    <span className="text-lg">🔔</span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white">
                      New Lead — Emergency Pipe Repair
                    </p>
                    <p className="text-xs text-slate-400">
                      Score: 94/100 • Auto-booked for tomorrow 9 AM
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-carbon border border-white/10 rounded-xl p-4 shadow-lg">
              <p className="text-xs text-slate-400 mb-1">Response Time</p>
              <p className="text-2xl font-bold font-mono text-emerald-400">
                &lt;30s
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
