export interface IndustryConfig {
  name: string;
  slug: string;
  heroHeadline: string;
  heroSubheadline: string;
  painPoints: {
    title: string;
    description: string;
    icon: string;
  }[];
  stats: {
    responseRate: string;
    roi: string;
    revenue: string;
    bookingTime: string;
  };
  solutionPillars: {
    title: string;
    description: string;
  }[];
  metaTitle: string;
  metaDescription: string;
}

export const industries: Record<string, IndustryConfig> = {
  plumbing: {
    name: "Plumbing",
    slug: "plumbing",
    heroHeadline: "Stop Losing Leads. Start Closing Jobs.",
    heroSubheadline:
      "Renaissance AI builds automated systems that answer every call, qualify every lead, and book every job — so you can run your plumbing business, not chase it.",
    painPoints: [
      {
        title: "Missed Calls",
        description:
          "You can't answer when you're on a job. Callers don't leave voicemails. They call the next guy.",
        icon: "phone-missed",
      },
      {
        title: "Slow Follow-Up",
        description:
          "Leads go cold in 5 minutes. Your 'I'll call them back tonight' costs you $2,000/month.",
        icon: "clock",
      },
      {
        title: "Manual Everything",
        description:
          "You're scheduling by text, tracking leads on paper, and losing jobs to competitors who automated.",
        icon: "clipboard",
      },
    ],
    stats: {
      responseRate: "97%",
      roi: "3.2x",
      revenue: "$14,800",
      bookingTime: "12 min",
    },
    solutionPillars: [
      {
        title: "AI Answers Every Lead",
        description:
          "Instant response to calls, texts, and web forms. No lead left behind.",
      },
      {
        title: "Smart Qualification",
        description:
          "AI asks the right questions, scores urgency, and filters tire-kickers before you pick up the phone.",
      },
      {
        title: "Automated Booking",
        description:
          "Qualified leads get booked directly into your calendar. You show up and do the work.",
      },
    ],
    metaTitle:
      "Renaissance AI | AI Automation for Plumbing Companies — Capture Every Lead",
    metaDescription:
      "Renaissance AI builds AI-powered automation systems for plumbing companies. Capture every lead, qualify instantly, and book jobs automatically. Book a free strategy call.",
  },
};

export const defaultIndustry = industries.plumbing;
