# Renaissance AI — Complete Website Blueprint

---

## 1. SITE STRUCTURE

### Sitemap

```
renaissance-ai.com/
├── / (Homepage)
├── /services
│   ├── /services/ai-lead-qualification
│   ├── /services/automated-booking
│   ├── /services/ai-follow-up
│   └── /services/marketing-automation
├── /results
│   ├── /results/[case-study-slug]
│   └── /results (index — all case studies)
├── /how-it-works
├── /about
├── /book
├── /blog
│   ├── /blog/[post-slug]
│   └── /blog/category/[category-slug]
├── /industries
│   ├── /industries/plumbing
│   ├── /industries/hvac (future)
│   ├── /industries/electrical (future)
│   └── /industries/[niche-slug] (dynamic)
├── /privacy
├── /terms
└── /sitemap.xml
```

### Navigation Structure

**Primary Nav (sticky, transparent → solid on scroll):**
```
[Logo]  Services ▾  Results  How It Works  About  Blog  [Book a Call →]
```

**Services Mega-dropdown:**
```
AI Lead Qualification | Automated Booking | AI Follow-Up | Marketing Automation
```

**Mobile Nav:** Hamburger → full-screen overlay with large touch targets

**Footer Nav:**
```
Col 1: Services (all 4)
Col 2: Company (About, Results, How It Works, Blog)
Col 3: Legal (Privacy, Terms)
Col 4: Contact (Phone, Email, Address)
```

### Recommended Page Count
- **Launch:** 10 pages (Home, 4 Services, Results, How It Works, About, Book, Blog index)
- **Month 1-3:** +8 blog posts, +2 case studies, +1 industry page
- **Month 3-6:** +12 blog posts, +3 industry pages, +4 case studies

### Funnel Logic

```
TOFU (Awareness)
  → Blog / SEO / Social → Homepage or Industry Page

MOFU (Consideration)
  → Services pages → How It Works → Results/Case Studies

BOFU (Decision)
  → Book Call page → Calendly/Cal.com embed → Confirmation

Every page → CTA to /book
Results page → strongest BOFU conversion path
```

### URL Hierarchy Rationale
- `/services/ai-lead-qualification` — keyword-rich, scannable
- `/results/[slug]` — not "case-studies" (shorter, outcome-focused)
- `/industries/[niche]` — scalable for niche expansion
- `/blog/[slug]` — flat structure for SEO authority

---

## 2. HOMEPAGE WIREFRAME (Section-by-Section)

---

### Section 1: HERO

**Purpose:** Immediate value prop. Stop the scroll. Qualify the visitor.

**Headline:**
> Stop Losing Leads. Start Closing Jobs.

**Subheadline:**
> Renaissance AI builds automated systems that answer every call, qualify every lead, and book every job — so you can run your plumbing business, not chase it.

**Layout:** Split — Left: Copy + dual CTA stack. Right: Dark UI mockup showing the AI system dashboard with live lead notifications.

**CTA Placement:**
- Primary: `Book Your Strategy Call →` (solid button)
- Secondary: `See How It Works` (ghost/outline button, scrolls to mechanism)

**Trust Elements (below CTAs):**
- "Trusted by 50+ service businesses"
- Row of 4-5 client logos (greyscale)
- "⭐ 4.9/5 average client rating"

**Visual Direction:**
- Dark gradient background (#0A0A0F → #111118)
- Floating UI mockup with glow effect
- Subtle particle/grid animation in background
- Old English "R" logomark top-left

**Conversion Psychology:**
- Pain-first headline (loss aversion > gain framing)
- Specificity ("every call, every lead, every job") builds credibility
- Dashboard mockup = proof of a real product, not vaporware
- Dual CTA = high-intent AND low-intent paths

---

### Section 2: PROBLEM AGITATION

**Purpose:** Make the pain undeniable. Create "that's me" recognition.

**Headline:**
> Your Phone Rings. You're Under a Sink. Another Lead Gone.

**Subheadline:**
> The average plumbing company loses 40% of inbound leads to missed calls, slow follow-up, and zero automation. That's revenue walking out the door every single day.

**Layout:** 3-column grid of pain point cards.

**Cards:**
1. **Missed Calls** — "You can't answer when you're on a job. Callers don't leave voicemails. They call the next guy."
2. **Slow Follow-Up** — "Leads go cold in 5 minutes. Your 'I'll call them back tonight' costs you $2,000/month."
3. **Manual Everything** — "You're scheduling by text, tracking leads on paper, and losing jobs to competitors who automated."

**Visual Direction:**
- Light section (contrast from dark hero)
- Red/orange accent icons on each card
- Subtle "danger" visual language — thin red borders, warning-style icons
- Stats in bold, oversized type

**Conversion Psychology:**
- Specific numbers ("40%", "$2,000/month") create urgency
- Second-person language ("you're under a sink") = vivid mental imagery
- Three pain points = manageable cognitive load
- Reader self-identifies → primed for solution

---

### Section 3: SOLUTION

**Purpose:** Position Renaissance AI as the answer. Transition from pain to hope.

**Headline:**
> What If Every Lead Was Answered, Qualified, and Booked — Automatically?

**Subheadline:**
> Renaissance AI replaces your missed calls, forgotten follow-ups, and manual scheduling with an AI-powered system that works 24/7.

**Layout:** Centered text block → 3 icon+text columns below

**Solution Pillars:**
1. **AI Answers Every Lead** — "Instant response to calls, texts, and web forms. No lead left behind."
2. **Smart Qualification** — "AI asks the right questions, scores urgency, and filters tire-kickers before you pick up the phone."
3. **Automated Booking** — "Qualified leads get booked directly into your calendar. You show up and do the work."

**CTA:** `See the Full System →` (links to /how-it-works)

**Visual Direction:**
- Gradient accent line separating from problem section
- Clean white/light background
- Blue/teal accent color for solution icons (trust + innovation)
- Subtle upward motion animation on scroll

**Conversion Psychology:**
- "What if" framing = aspirational without being pushy
- Directly mirrors the 3 pain points from previous section
- "Replaces" language = not adding complexity, removing it
- "24/7" addresses the always-on fear

---

### Section 4: MECHANISM (How It Works)

**Purpose:** Demystify the product. Show simplicity. Reduce "is this complicated?" objection.

**Headline:**
> Three Steps. Fully Automated. Zero Effort From You.

**Subheadline:**
> We build, install, and manage your entire AI system. Here's what happens after launch:

**Layout:** Horizontal 3-step timeline with numbered nodes and connector lines.

**Steps:**
1. **Lead Comes In** — "A customer calls, fills out a form, or sends a text. Your AI responds instantly with human-like conversation."
2. **AI Qualifies & Scores** — "The system asks qualifying questions, detects urgency, and scores the lead. Hot leads get flagged immediately."
3. **Job Gets Booked** — "Qualified leads are booked into your calendar and you get an SMS alert. No back-and-forth. No missed revenue."

**CTA:** `Book Your Strategy Call →`

**Visual Direction:**
- Numbered circles (1, 2, 3) connected by a flowing line
- Each step has a small animated icon or micro-illustration
- Step 3 glows/pulses slightly to emphasize the outcome
- Dark section (alternating rhythm)

**Conversion Psychology:**
- "Three steps" = simplicity signal
- "Zero effort from you" kills the tech-phobia objection
- "We build, install, and manage" = done-for-you positioning
- End-state visualization (job booked) anchors the value

---

### Section 5: RESULTS / ROI

**Purpose:** Prove it works with numbers. Shift from "sounds good" to "this is real."

**Headline:**
> Real Numbers. Real Businesses. Real Revenue.

**Subheadline:**
> Here's what happens when plumbing companies stop losing leads and start automating.

**Layout:** 4-column stat bar → 2 featured case study cards below

**Stats Bar:**
- `97%` — Lead Response Rate
- `3.2x` — Average ROI in 90 Days
- `$14,800` — Average Monthly Revenue Recovered
- `12 min` — Average Time to Booked Appointment

**Case Study Cards (2-up grid):**
Each card:
- Company name + location
- Before/After metrics
- One-line quote
- `Read Full Story →` link

**CTA:** `See All Results →` (links to /results)

**Visual Direction:**
- Stats in oversized, bold font with subtle count-up animation on scroll
- Case study cards with subtle hover lift effect
- Client photos or company logos on each card
- Accent gradient on stat numbers

**Conversion Psychology:**
- Specific numbers > vague claims
- "Revenue recovered" framing = they're already losing money
- Social proof from peers (other plumbing companies)
- Stats animate on scroll = engagement + perceived credibility

---

### Section 6: AUTOMATION DEMO VISUAL

**Purpose:** Show the product. Make abstract AI tangible. Build "I want that" desire.

**Headline:**
> See Your AI System in Action

**Subheadline:**
> Watch how a lead goes from first contact to booked appointment in under 60 seconds — with zero human involvement.

**Layout:** Full-width centered section. Embedded video or animated product walkthrough.

**Content Options (pick one):**
- A. Loom-style screen recording of the system processing a lead
- B. Animated step-by-step product mockup
- C. Interactive demo (click through the flow)

**CTA:** `Get This Built For Your Business →`

**Visual Direction:**
- Dark background with centered video/demo container
- Subtle glow/border effect around the demo area
- Play button overlay if video
- Browser chrome mockup around the demo for realism

**Conversion Psychology:**
- Seeing = believing for skeptical audience
- "Under 60 seconds" = speed proof
- "Zero human involvement" reinforces automation value
- Moves from conceptual → concrete

---

### Section 7: TESTIMONIALS

**Purpose:** Peer validation. Overcome "does this work for people like me?" objection.

**Headline:**
> Don't Take Our Word For It

**Subheadline:**
> Hear from business owners who were skeptical too — until the results came in.

**Layout:** 3-card horizontal carousel (auto-advances, manual arrows)

**Each Testimonial Card:**
- Photo (headshot)
- Name + Company + Location
- Star rating (5 stars)
- 2-3 sentence quote
- Key metric badge: "↑ 47% more booked jobs"

**Visual Direction:**
- Light section
- Cards with subtle shadow and rounded corners
- Quote marks as oversized decorative element
- Metric badge in brand accent color

**Conversion Psychology:**
- "Skeptical too" in subheadline validates their doubt
- Photos + names + locations = verifiable, real
- Metric badges tie emotion (quote) to logic (number)
- Carousel = more proof without overwhelming

---

### Section 8: OFFER / CTA CLOSE

**Purpose:** Final conversion push. Remove all remaining objections. Make action irresistible.

**Headline:**
> Your Competitors Are Already Automating. Are You?

**Subheadline:**
> Book a free 30-minute strategy call. We'll audit your current lead flow, show you exactly where you're losing revenue, and map out a custom AI system for your business.

**Layout:** Split — Left: offer details + bullet list. Right: Calendly/Cal.com embed or form.

**What You'll Get (bullet list):**
- ✓ Full lead flow audit
- ✓ Revenue leak analysis
- ✓ Custom AI system blueprint
- ✓ ROI projection for your business
- ✓ Zero obligation, zero pressure

**CTA:** `Claim Your Strategy Call →` (inside the form/embed)

**Trust Elements Below Form:**
- "🔒 Your information is secure and never shared"
- "Rated 4.9/5 by 50+ business owners"
- "Average call lasts 28 minutes"

**Visual Direction:**
- Dark gradient background (bookends with hero)
- Form/embed area has subtle glow border
- Urgency element: "Only accepting 5 new clients this month"
- Company logos repeated as trust strip

**Conversion Psychology:**
- Competitive framing ("competitors are automating") = FOMO
- "Free" + "Zero obligation" = friction elimination
- Specific deliverables (audit, blueprint, projection) = perceived value
- "Claim" > "Book" = ownership language
- Scarcity ("5 new clients") creates urgency without being sleazy

---

## 3. DESIGN SYSTEM

### Color Palette

```
Primary:
  --midnight:    #0A0A0F  (backgrounds, dark sections)
  --deep-navy:   #111118  (secondary dark)
  --carbon:      #1A1A24  (cards on dark bg)

Accent:
  --royal-blue:  #2563EB  (primary CTA, links)
  --electric:    #3B82F6  (hover states, highlights)
  --ice-blue:    #60A5FA  (tertiary accent)

Neutral:
  --white:       #FFFFFF  (light bg)
  --ghost:       #F8FAFC  (off-white sections)
  --slate-100:   #F1F5F9  (light cards)
  --slate-300:   #CBD5E1  (borders, dividers)
  --slate-500:   #64748B  (body text on light)
  --slate-700:   #334155  (headings on light)
  --slate-900:   #0F172A  (heavy text on light)

Semantic:
  --success:     #10B981  (green, positive stats)
  --warning:     #F59E0B  (amber, urgency)
  --danger:      #EF4444  (red, problem sections)

Gradient:
  --hero-gradient:  linear-gradient(135deg, #0A0A0F 0%, #111118 50%, #0F172A 100%)
  --cta-gradient:   linear-gradient(135deg, #2563EB 0%, #3B82F6 100%)
  --glow:           0 0 80px rgba(37, 99, 235, 0.15)
```

### Font Pairings

```
Headings:    Inter (700, 800 weight) — clean, authoritative, universally readable
Body:        Inter (400, 500 weight) — seamless pairing, no extra font load
Accent/Logo: Playfair Display (700) — Old English feel for "Renaissance" wordmark only
Mono:        JetBrains Mono (400) — for code snippets, stats, technical elements

Scale (Desktop):
  H1:  64px / 1.1 line-height / -0.02em tracking
  H2:  48px / 1.15 / -0.01em
  H3:  32px / 1.2 / 0
  H4:  24px / 1.3 / 0
  Body: 18px / 1.6 / 0
  Small: 14px / 1.5 / 0.01em

Scale (Mobile):
  H1:  40px
  H2:  32px
  H3:  24px
  H4:  20px
  Body: 16px
  Small: 13px
```

### Button Styles

```
Primary:
  bg: --royal-blue → --electric (gradient)
  text: white
  padding: 16px 32px
  border-radius: 12px
  font: Inter 600, 16px
  shadow: 0 4px 14px rgba(37, 99, 235, 0.4)
  hover: scale(1.02), shadow intensifies

Secondary (Ghost):
  bg: transparent
  border: 1.5px solid --slate-300
  text: --slate-700 (light bg) or white (dark bg)
  padding: 16px 32px
  border-radius: 12px
  hover: bg fills subtly, border color shifts to --royal-blue

Small CTA:
  padding: 10px 20px
  font: 14px
  border-radius: 8px
```

### Card Style

```
Light Background Cards:
  bg: white
  border: 1px solid --slate-100
  border-radius: 16px
  padding: 32px
  shadow: 0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)
  hover: shadow deepens, translateY(-2px)

Dark Background Cards:
  bg: --carbon (#1A1A24)
  border: 1px solid rgba(255,255,255,0.06)
  border-radius: 16px
  padding: 32px
  shadow: none
  hover: border → rgba(37, 99, 235, 0.3)
```

### Spacing System

```
Base unit: 4px
xs:   4px
sm:   8px
md:   16px
lg:   24px
xl:   32px
2xl:  48px
3xl:  64px
4xl:  96px
5xl:  128px

Section padding: 96px vertical (desktop), 64px (mobile)
Container max-width: 1280px
Container padding: 24px (mobile), 32px (tablet), 0 (desktop)
```

### Border Radius

```
Small (buttons, inputs): 8px-12px
Medium (cards): 16px
Large (sections, hero elements): 24px
Full (avatars, badges): 9999px
```

### Shadow System

```
shadow-xs:  0 1px 2px rgba(0,0,0,0.05)
shadow-sm:  0 1px 3px rgba(0,0,0,0.04), 0 4px 12px rgba(0,0,0,0.03)
shadow-md:  0 4px 6px rgba(0,0,0,0.05), 0 10px 24px rgba(0,0,0,0.05)
shadow-lg:  0 8px 16px rgba(0,0,0,0.06), 0 20px 40px rgba(0,0,0,0.08)
shadow-glow: 0 0 40px rgba(37, 99, 235, 0.15)
```

### Icon Direction

- **Style:** Lucide React icons (consistent, lightweight, open-source)
- **Size:** 24px default, 20px in buttons, 32px in feature cards
- **Stroke:** 1.5px
- **Color:** Inherit from parent text, accent on hover

### Animation Suggestions

```
Page Load:
  - Hero text: fade-up 0.6s ease-out
  - Hero image: fade-in 0.8s ease-out (0.2s delay)
  - Logo strip: fade-in 1s (0.4s delay)

Scroll Triggers (IntersectionObserver):
  - Sections: fade-up 0.5s when 20% visible
  - Cards: stagger 0.1s per card
  - Stat numbers: count-up animation over 2s
  - Timeline steps: sequential reveal 0.3s delay each

Interactions:
  - Buttons: scale(1.02) 0.2s ease
  - Cards: translateY(-2px) 0.2s ease
  - Links: color transition 0.15s
  - Nav: backdrop-blur on scroll, 0.3s transition

Performance:
  - Use transform/opacity only (GPU-accelerated)
  - Respect prefers-reduced-motion
  - No autoplay video (play on click)
  - Lazy load below-fold images
```

### Mobile-First Adjustments

- **Nav:** Collapses to hamburger at 768px. Full-screen overlay.
- **Hero:** Stacks vertically — copy on top, mockup below.
- **Grids:** 3-col → 1-col on mobile. 2-col on tablet.
- **Cards:** Full-width on mobile with 16px margin.
- **CTA buttons:** Full-width on mobile (100% width).
- **Stats bar:** 2x2 grid on mobile instead of 4-column.
- **Section padding:** Reduced from 96px to 64px.
- **Font sizes:** See mobile scale above.
- **Touch targets:** Minimum 44px height on all interactive elements.
- **Sticky mobile CTA:** Fixed bottom bar with "Book a Call" on mobile (appears after scrolling past hero).

---

## 4. SEO STRUCTURE

### Homepage H1
```
AI Automation Systems for Plumbing Companies — Never Miss Another Lead
```

### Supporting H2/H3 Structure
```html
<h1>AI Automation Systems for Plumbing Companies — Never Miss Another Lead</h1>

<h2>The Hidden Cost of Missed Leads</h2>
  <h3>Missed Calls Cost You Thousands</h3>
  <h3>Slow Follow-Up Kills Conversions</h3>
  <h3>Manual Processes Can't Scale</h3>

<h2>AI-Powered Lead Capture, Qualification, and Booking</h2>
  <h3>Instant Lead Response</h3>
  <h3>Intelligent Lead Scoring</h3>
  <h3>Automated Job Booking</h3>

<h2>How Renaissance AI Works</h2>
  <h3>Step 1: Lead Capture</h3>
  <h3>Step 2: AI Qualification</h3>
  <h3>Step 3: Automatic Booking</h3>

<h2>Results That Speak for Themselves</h2>
  <h3>[Client Name] Case Study</h3>

<h2>See the System in Action</h2>

<h2>What Our Clients Say</h2>

<h2>Book Your Free Strategy Call</h2>
```

### Meta Title
```
Renaissance AI | AI Automation for Plumbing Companies — Capture Every Lead
```
(60 characters)

### Meta Description
```
Renaissance AI builds AI-powered automation systems for plumbing companies. Capture every lead, qualify instantly, and book jobs automatically. Book a free strategy call.
```
(168 characters)

### Schema Markup Structure

```json
{
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://renaissance-ai.com/#organization",
      "name": "Renaissance AI",
      "url": "https://renaissance-ai.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://renaissance-ai.com/logo.png"
      },
      "sameAs": [
        "https://linkedin.com/company/renaissance-ai",
        "https://twitter.com/renaissanceai"
      ],
      "contactPoint": {
        "@type": "ContactPoint",
        "telephone": "+1-XXX-XXX-XXXX",
        "contactType": "sales",
        "availableLanguage": "English"
      }
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://renaissance-ai.com/#localbusiness",
      "name": "Renaissance AI",
      "description": "AI automation systems for service businesses. Lead qualification, automated booking, and marketing AI.",
      "url": "https://renaissance-ai.com",
      "telephone": "+1-XXX-XXX-XXXX",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "City",
        "addressRegion": "State",
        "postalCode": "00000",
        "addressCountry": "US"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": "XX.XXXX",
        "longitude": "-XX.XXXX"
      },
      "priceRange": "$$$",
      "areaServed": "United States",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "50"
      },
      "makesOffer": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Lead Qualification",
            "description": "Automated AI system that qualifies inbound leads in real-time."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Automated Job Booking",
            "description": "AI-powered scheduling that books qualified leads directly into your calendar."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "AI Follow-Up System",
            "description": "Automated follow-up sequences via SMS, email, and voice."
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Marketing Automation",
            "description": "AI-driven marketing systems for review generation, referrals, and retention."
          }
        }
      ]
    },
    {
      "@type": "WebSite",
      "@id": "https://renaissance-ai.com/#website",
      "name": "Renaissance AI",
      "url": "https://renaissance-ai.com",
      "publisher": {"@id": "https://renaissance-ai.com/#organization"},
      "potentialAction": {
        "@type": "SearchAction",
        "target": "https://renaissance-ai.com/blog?q={search_term_string}",
        "query-input": "required name=search_term_string"
      }
    },
    {
      "@type": "SoftwareApplication",
      "name": "Renaissance AI Automation Platform",
      "applicationCategory": "BusinessApplication",
      "operatingSystem": "Web",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD",
        "description": "Custom pricing based on business needs"
      }
    }
  ]
}
```

### Internal Linking Strategy

```
Homepage → links to all 4 service pages, /results, /how-it-works, /book
Service Pages → link to /how-it-works, /results, /book, and each other
Results Page → links to relevant service pages, /book
How It Works → links to /services, /results, /book
Blog Posts → contextual links to service pages, /results, and other posts
Industry Pages → link to relevant services, /results filtered by industry, /book
Every Page → persistent nav CTA to /book
```

**Anchor text strategy:** Use varied, natural anchor text. Mix branded ("Renaissance AI system"), keyword-rich ("AI lead qualification for plumbers"), and action-oriented ("see the results").

### Blog Topic Clusters for Plumbers

**Pillar Content:**
1. "The Complete Guide to AI Automation for Plumbing Companies"
2. "How to Never Miss Another Plumbing Lead"

**Cluster Topics:**

*Lead Generation:*
- How plumbers can capture leads 24/7 without hiring a receptionist
- 5 reasons plumbing companies lose leads (and how to fix each one)
- The real cost of a missed plumbing call
- Google LSA vs. AI lead capture: what works better for plumbers

*Operations:*
- How to automate plumbing job scheduling
- CRM for plumbers: why most fail and what to use instead
- How to follow up with plumbing leads without being annoying
- Text message marketing for plumbing companies

*Growth:*
- How to scale a plumbing business without hiring more office staff
- AI tools every plumbing company should be using
- How to get more 5-star reviews automatically
- Plumbing SEO: what actually works

*Seasonal:*
- How to handle the winter plumbing rush with automation
- Summer slowdown? Here's how to keep leads flowing
- Holiday emergency plumbing: automating after-hours leads

### Niche Expansion SEO Strategy

When expanding beyond plumbing:
1. Create `/industries/[niche]` pages (HVAC, electrical, roofing, etc.)
2. Duplicate the blog cluster strategy per niche
3. Use the same H-tag structure with niche-swapped keywords
4. Internal link from general blog posts to niche-specific industry pages
5. Each industry page gets its own meta tags, schema, and case studies

---

## 5. CONVERSION OPTIMIZATION

### CTA Strategy

**Primary CTA (appears 4+ times on homepage):**
"Book Your Strategy Call →"

**Secondary CTAs by section:**
- Hero: "See How It Works" (low commitment)
- Mechanism: "Book Your Strategy Call →"
- Results: "See All Results →"
- Demo: "Get This Built For Your Business →"
- Close: "Claim Your Strategy Call →"

**CTA Rules:**
- Every section must have a CTA or lead into one
- Primary CTA is always visible (nav button + sticky mobile bar)
- Use action verbs: Book, Claim, See, Get
- Never: "Submit", "Learn More", "Contact Us"

### Friction Reduction Methods

1. **Minimize form fields:** Name, email, phone, company size (dropdown). That's it.
2. **No required "message" field.** Kills conversion.
3. **Inline Calendly/Cal.com embed** on /book page — no redirects.
4. **Progress indicators** if multi-step form is used.
5. **Auto-fill enabled** for all form fields.
6. **Click-to-call on mobile** for phone numbers.
7. **No login walls.** No gated content until exit intent.
8. **Fast page load:** Target < 2s LCP. Lazy load everything below fold.

### Trust Stacking Framework

**Layer 1 — Social Proof (passive):**
- Client logos in hero
- Review count + star rating
- "Trusted by X+ businesses"

**Layer 2 — Evidence (active):**
- Specific ROI numbers (stat bar)
- Case studies with before/after metrics
- Video testimonials if available

**Layer 3 — Authority:**
- "As seen in" press mentions (when available)
- Industry certifications or partnerships
- Professional headshots on About page

**Layer 4 — Safety:**
- "No obligation, no pressure" on CTA sections
- Privacy reassurance near forms
- Detailed "What to expect on the call" copy

### Risk Reversal Positioning

**Primary Risk Reversal:**
> "If we don't increase your booked jobs within 90 days, we'll work for free until we do."

**Supporting Risk Reversal Copy:**
- "Zero setup fees. You only pay when the system is live."
- "Month-to-month. No long-term contracts."
- "Full system ownership — if you leave, you keep everything we built."

**Placement:** Directly below the final CTA form and in the offer bullet list.

### Offer Positioning Strategy

**The offer is NOT "AI automation."**
**The offer IS:** "A free revenue audit that shows you exactly how much money you're leaving on the table — and a custom blueprint to capture it."

**Positioning Framework:**
1. The call is valuable even if they don't buy (audit + blueprint)
2. It's free and no-obligation (zero risk)
3. It's time-boxed (30 minutes, not an hour-long sales pitch)
4. It's exclusive (limited spots/month)
5. The deliverable is tangible (they get a custom blueprint)

### Exit Intent Idea

**Trigger:** Mouse leaves viewport (desktop) or scroll-up behavior (mobile)

**Popup Content:**
> **Before you go — see what you're leaving on the table.**
>
> Enter your website URL and we'll run a free AI Lead Audit. You'll get:
> - Estimated monthly leads you're missing
> - Your current response time grade
> - Custom recommendations (delivered in 24hrs)
>
> [Your Website URL] [Get My Free Audit →]

**Design:** Dark overlay, centered modal, single input field + button. Close X in top-right. Fires once per session.

**Why This Works:**
- It's NOT asking for a call (lower commitment than main CTA)
- "Website URL" is a low-friction input (not email + phone)
- Creates a deliverable that justifies email follow-up
- "Free audit" = perceived high value, zero risk
- Results delivered in 24hrs = urgency + anticipation

### Lead Magnet Suggestion

**Primary Lead Magnet:**
"The Plumber's AI Playbook: 7 Automations That Book More Jobs While You Sleep"

**Format:** PDF (5-7 pages, heavily designed)

**Distribution:** Offered via exit intent popup or blog sidebar

**Contents:**
1. AI answering service setup
2. Automated lead scoring
3. SMS follow-up sequences
4. Review request automation
5. Referral system automation
6. After-hours lead capture
7. Job scheduling automation

Each section: 1-paragraph explanation + "how Renaissance AI does this" callout box.

**Follow-up sequence after download:**
- Day 0: Deliver PDF + welcome email
- Day 2: "Did you read automation #3? Here's a case study..."
- Day 5: "Free strategy call" offer
- Day 10: "Last chance" urgency email

---

## 6. n8n INTEGRATION PLAN

### Smart Form Field Structure

**Contact Form (Homepage + /book page):**

| Field | Type | Required | Webhook Key |
|-------|------|----------|-------------|
| Full Name | text | yes | `fullName` |
| Email | email | yes | `email` |
| Phone | tel | yes | `phone` |
| Company Name | text | yes | `company` |
| Number of Employees | select | yes | `companySize` |
| Biggest Challenge | select | no | `painPoint` |
| Preferred Call Time | select | no | `preferredTime` |

**Select Options for "Number of Employees":**
- Just me
- 2-5
- 6-15
- 16-50
- 50+

**Select Options for "Biggest Challenge":**
- Missing leads / calls
- Slow follow-up
- Scheduling chaos
- Need more reviews
- All of the above

**Select Options for "Preferred Call Time":**
- Morning (9-12)
- Afternoon (12-5)
- I'm flexible

### Webhook Payload Format

```json
{
  "formData": {
    "fullName": "Mike Johnson",
    "email": "mike@mikesplumbing.com",
    "phone": "+13125551234",
    "company": "Mike's Plumbing Co",
    "companySize": "6-15",
    "painPoint": "Missing leads / calls",
    "preferredTime": "Morning (9-12)"
  },
  "metadata": {
    "formId": "homepage-cta",
    "submittedAt": "2026-02-27T14:30:00Z",
    "pageUrl": "https://renaissance-ai.com/",
    "referrer": "https://google.com",
    "utmSource": "google",
    "utmMedium": "cpc",
    "utmCampaign": "plumbing-ai-automation",
    "utmContent": "hero-cta",
    "userAgent": "Mozilla/5.0...",
    "ipAddress": "192.168.1.1"
  }
}
```

### Urgency Detection Logic

**Implemented as n8n Code Node after webhook:**

```
Score Breakdown (0-100):

Company Size:
  Just me        = 5
  2-5            = 15
  6-15           = 25
  16-50          = 35
  50+            = 40

Pain Point:
  Missing leads  = 30
  Slow follow-up = 25
  Scheduling     = 20
  Need reviews   = 10
  All of above   = 35

Time Preference:
  Morning        = 10  (decisive, ready to act)
  Afternoon      = 5
  I'm flexible   = 3

Source Bonus:
  Direct         = 10
  Referral       = 15
  Paid (cpc)     = 8
  Organic        = 10
  Social         = 5

Urgency Tiers:
  80-100 = HOT    → Immediate SMS + priority booking
  50-79  = WARM   → Same-day email + booking link
  25-49  = COOL   → Nurture sequence
  0-24   = COLD   → Newsletter only
```

### CRM Sync Logic

**Recommended CRM: GoHighLevel (for service businesses) or HubSpot (for scale)**

**n8n Flow:**
```
Webhook → Code (scoring) → Switch (urgency tier)
  ├─ HOT  → CRM Create Contact (tag: hot) → Create Opportunity → Assign to senior rep
  ├─ WARM → CRM Create Contact (tag: warm) → Create Opportunity → Auto-assign
  ├─ COOL → CRM Create Contact (tag: cool) → Add to nurture pipeline
  └─ COLD → CRM Create Contact (tag: cold) → Add to newsletter list
```

**CRM Field Mapping:**
```json
{
  "firstName": "{{ formData.fullName.split(' ')[0] }}",
  "lastName": "{{ formData.fullName.split(' ').slice(1).join(' ') }}",
  "email": "{{ formData.email }}",
  "phone": "{{ formData.phone }}",
  "company": "{{ formData.company }}",
  "tags": ["web-lead", "{{ scoring.urgencyTier }}"],
  "customFields": {
    "lead_score": "{{ scoring.totalScore }}",
    "pain_point": "{{ formData.painPoint }}",
    "company_size": "{{ formData.companySize }}",
    "utm_source": "{{ metadata.utmSource }}",
    "utm_campaign": "{{ metadata.utmCampaign }}"
  },
  "source": "Website Form",
  "pipeline": "New Leads",
  "stage": "{{ scoring.urgencyTier === 'HOT' ? 'Qualified' : 'New' }}"
}
```

### SMS Alert Flow

**n8n Twilio Node — triggered for HOT leads:**

```
To: +1[SALES_TEAM_PHONE]
From: +1[TWILIO_NUMBER]

Message template:
"🔥 HOT LEAD — {{ formData.fullName }} from {{ formData.company }}
({{ formData.companySize }} employees)

Pain: {{ formData.painPoint }}
Score: {{ scoring.totalScore }}/100
Phone: {{ formData.phone }}
Email: {{ formData.email }}

Call them NOW. Lead submitted {{ scoring.minutesAgo }} min ago."
```

**Routing logic:**
- HOT → SMS to founder/sales lead immediately
- WARM → SMS digest at end of day (batch via Schedule Trigger)
- COOL/COLD → No SMS

### Call Booking Integration

**Recommended: Cal.com (open source, API-friendly, n8n native node)**

**Flow:**
```
Lead submits form → n8n webhook → scoring →
  IF score >= 50:
    → Generate Cal.com booking link (pre-filled with lead data)
    → Send email: "Pick a time that works for you: [LINK]"
    → Send SMS: "Hey {{ firstName }}, thanks for reaching out! Book your strategy call here: [LINK]"
  IF score < 50:
    → Add to nurture sequence
    → Send email: "Thanks for your interest. Here's our free Plumber's AI Playbook: [PDF]"
```

**Cal.com booking link generation:**
```
https://cal.com/renaissance-ai/strategy-call
  ?name={{ formData.fullName }}
  &email={{ formData.email }}
  &notes=Score: {{ scoring.totalScore }} | Pain: {{ formData.painPoint }}
```

### Analytics Event Tracking Structure

**Events to fire from n8n → GA4 Measurement Protocol:**

| Event Name | Trigger | Parameters |
|------------|---------|------------|
| `form_submission` | Webhook received | form_id, page_url, utm_source |
| `lead_scored` | After Code node | score, tier, pain_point |
| `hot_lead_alert` | SMS sent | lead_name, score |
| `booking_link_sent` | Email sent with cal link | lead_email, score |
| `booking_completed` | Cal.com webhook fires | lead_email, booking_time |
| `nurture_started` | Cool/cold lead routed | lead_email, sequence_name |

**GA4 Measurement Protocol payload:**
```json
{
  "client_id": "{{ metadata.clientId }}",
  "events": [{
    "name": "form_submission",
    "params": {
      "form_id": "{{ metadata.formId }}",
      "lead_score": "{{ scoring.totalScore }}",
      "urgency_tier": "{{ scoring.urgencyTier }}",
      "pain_point": "{{ formData.painPoint }}",
      "company_size": "{{ formData.companySize }}",
      "utm_source": "{{ metadata.utmSource }}",
      "utm_medium": "{{ metadata.utmMedium }}",
      "utm_campaign": "{{ metadata.utmCampaign }}"
    }
  }]
}
```

---

## 7. FUTURE-PROOFING FOR NICHE EXPANSION

### Architecture for Niche Pivoting

**Core principle:** Separate content from structure. The site framework stays the same — only the industry-specific copy, case studies, and keywords change.

**Implementation:**

1. **Dynamic Industry Pages (`/industries/[slug]`):**
   - Each industry page shares identical layout components
   - Content is driven by a CMS or JSON config per niche
   - URL structure: `/industries/plumbing`, `/industries/hvac`, `/industries/electrical`

2. **Config-Driven Content:**
```typescript
// lib/industries.ts
export const industries = {
  plumbing: {
    name: "Plumbing",
    slug: "plumbing",
    heroHeadline: "Stop Losing Leads. Start Closing Jobs.",
    heroSubheadline: "AI automation for plumbing companies...",
    painPoints: ["Missed calls on the job", "Slow follow-up", "Manual scheduling"],
    stats: { responseRate: "97%", roi: "3.2x", revenue: "$14,800", bookingTime: "12 min" },
    caseStudies: ["mikes-plumbing", "ace-drain"],
    blogCluster: "plumbing",
    metaTitle: "AI Automation for Plumbing Companies | Renaissance AI",
    metaDescription: "...",
    schema: { /* industry-specific schema */ }
  },
  hvac: {
    name: "HVAC",
    slug: "hvac",
    heroHeadline: "Stop Losing Service Calls. Start Booking Jobs.",
    // ... same structure, different content
  }
}
```

3. **Shared Components with Industry Props:**
```
<HeroSection industry={currentIndustry} />
<PainPoints items={currentIndustry.painPoints} />
<Stats data={currentIndustry.stats} />
<CaseStudies ids={currentIndustry.caseStudies} />
```

### Dynamic Landing Page Structure

**For paid traffic, create `/lp/[niche]-[offer]` pages:**
- `/lp/plumbing-ai-automation`
- `/lp/hvac-lead-capture`
- `/lp/electrical-booking-system`

**Landing page template:**
```
[Industry-specific hero]
[3 pain points for that niche]
[How it works (universal)]
[Industry-specific case study]
[Universal social proof]
[Booking form with industry pre-selected]
```

**All LP content driven by the same config object — no unique templates per niche.**

### Scalable SEO Page Format

**Per-niche SEO assets:**
1. `/industries/[niche]` — main industry page (2000+ words, optimized)
2. `/blog/ai-automation-for-[niche]` — pillar content
3. `/blog/[niche]-specific-topic` — cluster articles (8-15 per niche)
4. `/results/[niche-client-slug]` — case studies tagged by industry

**URL pattern consistency ensures crawlers can predict structure.**

**Each industry page includes:**
- Industry-specific H1 with primary keyword
- Custom FAQ section (generates FAQ schema)
- Internal links to relevant blog cluster
- CTA with industry context ("Built for [Niche] Companies")

### Modular Service Positioning Strategy

**Services don't change — only the framing does.**

| Universal Service | Plumbing Frame | HVAC Frame | Electrical Frame |
|------------------|----------------|------------|-----------------|
| AI Lead Qualification | "Never miss a plumbing call" | "Capture every service call" | "Answer every electrical inquiry" |
| Automated Booking | "Book plumbing jobs automatically" | "Schedule HVAC appointments 24/7" | "Fill your electrical schedule" |
| AI Follow-Up | "Follow up on every plumbing estimate" | "Close more HVAC quotes" | "Convert more electrical bids" |
| Marketing AI | "Get more plumbing reviews" | "Dominate HVAC reviews" | "Build your electrical reputation" |

**Implementation:** Service components accept `industryContext` prop that swaps headline, subheadline, and example copy while keeping the layout identical.

---

## 8. BUILD OUTPUT — Next.js + Tailwind

See the `/src` directory for the complete Next.js project structure and code.
