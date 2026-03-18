import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { MobileCTA } from "@/components/sections/MobileCTA";
import {
  generateOrganizationSchema,
  generateLocalBusinessSchema,
  generateWebSiteSchema,
} from "@/lib/schema";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title:
    "Renaissance AI | AI Automation for Plumbing Companies — Capture Every Lead",
  description:
    "Renaissance AI builds AI-powered automation systems for plumbing companies. Capture every lead, qualify instantly, and book jobs automatically. Book a free strategy call.",
  keywords: [
    "AI automation",
    "plumbing leads",
    "lead qualification",
    "automated booking",
    "plumbing business automation",
    "AI for plumbers",
  ],
  openGraph: {
    title: "Renaissance AI | AI Automation for Plumbing Companies",
    description:
      "Capture every lead, qualify instantly, and book jobs automatically.",
    url: "https://renaissance-ai.com",
    siteName: "Renaissance AI",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Renaissance AI | AI Automation for Plumbing Companies",
    description:
      "Capture every lead, qualify instantly, and book jobs automatically.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                generateOrganizationSchema(),
                generateLocalBusinessSchema(),
                generateWebSiteSchema(),
              ],
            }),
          }}
        />
      </head>
      <body>
        <Navbar />
        <main>{children}</main>
        <Footer />
        <MobileCTA />
      </body>
    </html>
  );
}
