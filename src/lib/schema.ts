export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": "https://renaissance-ai.com/#organization",
    name: "Renaissance AI",
    url: "https://renaissance-ai.com",
    logo: {
      "@type": "ImageObject",
      url: "https://renaissance-ai.com/logo.png",
    },
    sameAs: [
      "https://linkedin.com/company/renaissance-ai",
      "https://twitter.com/renaissanceai",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "sales",
      availableLanguage: "English",
    },
  };
}

export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": "https://renaissance-ai.com/#localbusiness",
    name: "Renaissance AI",
    description:
      "AI automation systems for service businesses. Lead qualification, automated booking, and marketing AI.",
    url: "https://renaissance-ai.com",
    priceRange: "$$$",
    areaServed: "United States",
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      reviewCount: "50",
    },
    makesOffer: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Lead Qualification",
          description:
            "Automated AI system that qualifies inbound leads in real-time.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Automated Job Booking",
          description:
            "AI-powered scheduling that books qualified leads directly into your calendar.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "AI Follow-Up System",
          description:
            "Automated follow-up sequences via SMS, email, and voice.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: "Marketing Automation",
          description:
            "AI-driven marketing systems for review generation, referrals, and retention.",
        },
      },
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://renaissance-ai.com/#website",
    name: "Renaissance AI",
    url: "https://renaissance-ai.com",
    publisher: { "@id": "https://renaissance-ai.com/#organization" },
  };
}
