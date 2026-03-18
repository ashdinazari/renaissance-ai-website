import { Button } from "@/components/ui/Button";

const footerLinks = {
  services: [
    { label: "AI Lead Qualification", href: "/services/ai-lead-qualification" },
    { label: "Automated Booking", href: "/services/automated-booking" },
    { label: "AI Follow-Up", href: "/services/ai-follow-up" },
    { label: "Marketing Automation", href: "/services/marketing-automation" },
  ],
  company: [
    { label: "About", href: "/about" },
    { label: "Results", href: "/results" },
    { label: "How It Works", href: "#how-it-works" },
    { label: "Blog", href: "/blog" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-midnight border-t border-white/5">
      <div className="container-max px-6 md:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-2 mb-4">
              <span className="font-display text-xl font-bold text-white">
                Renaissance
              </span>
              <span className="text-royal font-bold">AI</span>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              AI-powered automation systems that capture every lead, qualify
              instantly, and book jobs automatically.
            </p>
            <Button href="/book" size="sm">
              Book a Call &rarr;
            </Button>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4">Legal</h4>
            <ul className="space-y-3 mb-6">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-slate-400 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
            <h4 className="text-white font-semibold mb-2">Contact</h4>
            <p className="text-sm text-slate-400">hello@renaissance-ai.com</p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Renaissance AI. All rights
            reserved.
          </p>
          <p className="text-xs text-slate-500">
            Built with precision. Powered by automation.
          </p>
        </div>
      </div>
    </footer>
  );
}
