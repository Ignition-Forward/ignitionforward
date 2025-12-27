import { Link } from "wouter";
import { ArrowRight, Linkedin, Twitter } from "lucide-react";

/*
 * FOOTER - Original Design System
 * Typography: Playfair Display (logo) + DM Sans (links)
 * Colors: Navy #1A2332, Gold #C9A962, Off-White #F8F7F4
 * 4-column grid layout
 */

const footerLinks = {
  services: [
    { href: "/how-we-help", label: "How We Help" },
    { href: "/edge", label: "Edge" },
    { href: "/fractional-ai", label: "Fractional AI Officer" },
    { href: "/forward-deployed", label: "Forward Deployed" },
  ],
  segments: [
    { href: "/professional-services", label: "Professional Services" },
    { href: "/founder-led", label: "Founder-Led" },
    { href: "/fund-managers", label: "GPs & Fund Managers" },
    { href: "/pe-portfolio", label: "PE Portfolio" },
  ],
  company: [
    { href: "/maguire", label: "Our Proof" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy border-t border-white/5">
      <div className="container py-16 md:py-20">
        {/* Main Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block">
              <span className="text-2xl tracking-tight font-display">
                <span className="text-off-white italic font-light">Ignition</span>
                <span className="text-gold font-semibold">Forward</span>
              </span>
            </Link>
            <p className="font-body text-grey-body mt-4 text-sm leading-relaxed">
              We use AI to amplify expert judgment, not replace it. AI enablement and Fractional AI Officers for Expert led businesses.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-6">
              <a 
                href="https://linkedin.com/company/ignitionforward" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-grey-body hover:text-gold hover:bg-white/10 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://twitter.com/ignitionforward" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-grey-body hover:text-gold hover:bg-white/10 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 className="font-body text-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="font-body text-grey-body hover:text-off-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Segments Column */}
          <div>
            <h4 className="font-body text-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Who We Work With
            </h4>
            <ul className="space-y-3">
              {footerLinks.segments.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="font-body text-grey-body hover:text-off-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="font-body text-gold text-sm font-semibold uppercase tracking-wider mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="font-body text-grey-body hover:text-off-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
            
            {/* CTA */}
            <Link 
              href="/contact" 
              className="inline-flex items-center gap-2 mt-6 text-gold font-body text-sm font-medium hover:underline underline-offset-4"
            >
              Move Forward <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-grey-body text-sm">
            © {currentYear} Ignition Forward – Part of{' '}
            <a 
              href="https://www.forwardgroup.ai" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:underline underline-offset-2"
            >
              The Forward Group
            </a>
            . All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="font-body text-grey-body hover:text-off-white transition-colors text-sm"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/terms" 
              className="font-body text-grey-body hover:text-off-white transition-colors text-sm"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
