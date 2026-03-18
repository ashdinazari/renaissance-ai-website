"use client";

import { SectionWrapper } from "@/components/ui/SectionWrapper";
import { Button } from "@/components/ui/Button";
import { Shield, Star, Clock, Check } from "lucide-react";
import { useState } from "react";

const benefits = [
  "Full lead flow audit",
  "Revenue leak analysis",
  "Custom AI system blueprint",
  "ROI projection for your business",
  "Zero obligation, zero pressure",
];

export function CTAClose() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    company: "",
    companySize: "",
    painPoint: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      // Send to n8n webhook
      await fetch(
        process.env.NEXT_PUBLIC_N8N_WEBHOOK_URL || "/api/lead",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formData,
            metadata: {
              formId: "homepage-cta-close",
              submittedAt: new Date().toISOString(),
              pageUrl: window.location.href,
              referrer: document.referrer,
              utmSource:
                new URLSearchParams(window.location.search).get("utm_source") ||
                "",
              utmMedium:
                new URLSearchParams(window.location.search).get("utm_medium") ||
                "",
              utmCampaign:
                new URLSearchParams(window.location.search).get(
                  "utm_campaign"
                ) || "",
            },
          }),
        }
      );
      setSubmitted(true);
    } catch {
      // Fallback: redirect to booking page
      window.location.href = "/book";
    } finally {
      setLoading(false);
    }
  }

  return (
    <SectionWrapper dark id="book">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        {/* Left: Offer Copy */}
        <div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white text-balance mb-4">
            Your Competitors Are Already Automating.{" "}
            <span className="gradient-text">Are You?</span>
          </h2>
          <p className="text-lg text-slate-300 mb-8 leading-relaxed">
            Book a free 30-minute strategy call. We&apos;ll audit your current
            lead flow, show you exactly where you&apos;re losing revenue, and
            map out a custom AI system for your business.
          </p>

          {/* Benefits */}
          <ul className="space-y-3 mb-8">
            {benefits.map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                  <Check size={12} className="text-emerald-400" />
                </div>
                <span className="text-slate-300">{benefit}</span>
              </li>
            ))}
          </ul>

          {/* Scarcity */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/20">
            <Clock size={16} className="text-amber-400" />
            <span className="text-sm text-amber-300 font-medium">
              Only accepting 5 new clients this month
            </span>
          </div>
        </div>

        {/* Right: Form */}
        <div className="relative">
          <div className="bg-carbon rounded-2xl p-8 border border-white/5 shadow-glow">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
                  <Check size={32} className="text-emerald-400" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  You&apos;re In!
                </h3>
                <p className="text-slate-400">
                  Check your email for booking confirmation. We&apos;ll send
                  your strategy call link within 5 minutes.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-xl font-bold text-white mb-2">
                  Claim Your Strategy Call
                </h3>
                <p className="text-sm text-slate-400 mb-6">
                  Fill out the form below and we&apos;ll reach out within 5
                  minutes.
                </p>

                <input
                  type="text"
                  placeholder="Full Name"
                  required
                  value={formData.fullName}
                  onChange={(e) =>
                    setFormData({ ...formData, fullName: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-midnight border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/30 transition-all"
                />

                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-midnight border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/30 transition-all"
                />

                <input
                  type="tel"
                  placeholder="Phone Number"
                  required
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-midnight border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/30 transition-all"
                />

                <input
                  type="text"
                  placeholder="Company Name"
                  required
                  value={formData.company}
                  onChange={(e) =>
                    setFormData({ ...formData, company: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-midnight border border-white/10 text-white placeholder:text-slate-500 focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/30 transition-all"
                />

                <select
                  value={formData.companySize}
                  onChange={(e) =>
                    setFormData({ ...formData, companySize: e.target.value })
                  }
                  required
                  className="w-full px-4 py-3 rounded-xl bg-midnight border border-white/10 text-white focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/30 transition-all appearance-none"
                >
                  <option value="" disabled>
                    Number of Employees
                  </option>
                  <option value="just-me">Just me</option>
                  <option value="2-5">2-5</option>
                  <option value="6-15">6-15</option>
                  <option value="16-50">16-50</option>
                  <option value="50+">50+</option>
                </select>

                <select
                  value={formData.painPoint}
                  onChange={(e) =>
                    setFormData({ ...formData, painPoint: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-midnight border border-white/10 text-white focus:outline-none focus:border-royal/50 focus:ring-1 focus:ring-royal/30 transition-all appearance-none"
                >
                  <option value="" disabled>
                    Biggest Challenge (optional)
                  </option>
                  <option value="missing-leads">Missing leads / calls</option>
                  <option value="slow-followup">Slow follow-up</option>
                  <option value="scheduling">Scheduling chaos</option>
                  <option value="reviews">Need more reviews</option>
                  <option value="all">All of the above</option>
                </select>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "Submitting..." : "Claim Your Strategy Call →"}
                </Button>
              </form>
            )}

            {/* Trust elements below form */}
            {!submitted && (
              <div className="mt-6 flex flex-col sm:flex-row items-center justify-center gap-4 text-xs text-slate-500">
                <span className="flex items-center gap-1">
                  <Shield size={12} /> Your info is secure &amp; never shared
                </span>
                <span className="flex items-center gap-1">
                  <Star size={12} /> Rated 4.9/5 by 50+ owners
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
