import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import ScrollProgress from "@/components/ScrollProgress";

/*
 * CAREERS PAGE - AI-Native Growth Lead
 * Single job posting page with detailed role information
 * Matches the Ignition Consultants hiring page style
 */

const stats = [
  { value: "250+", label: "Clients served" },
  { value: "$3B+", label: "Capital raised for founders" },
  { value: "4x", label: "Growth since 2021" },
  { value: "$0", label: "Outside capital taken" },
];

const responsibilities = [
  {
    title: "Pipeline & Demand Generation",
    description: "Own the systems that generate qualified opportunities — not dependent on founders' calendars",
  },
  {
    title: "Larger Relationships",
    description: "Investor groups, family offices, PE portfolios — one conversation that opens many doors",
  },
  {
    title: "Vendor & Partner Leverage",
    description: "Turn relationships into growth partners, not just service providers",
  },
  {
    title: "Experimentation & Learning",
    description: "Test channels, messaging, approaches — with clear thesis and measurable outcomes",
  },
  {
    title: "AI-Native Operations",
    description: "Use Cursor, Claude Code, and our internal AI platform to operate like a team of 5",
  },
];

const fitCriteria = [
  "Have 7-15+ years in growth, GTM, or revenue leadership",
  "Have investor, operator, or CFO experience — you understand finance from the inside",
  "Have scaled a growth function or stepped into mess and made progress",
  "Are inventive AND rigorous — experimentation with clear thesis",
  "Use AI daily to increase speed and leverage",
  "Want visible impact on a small team",
  "Can articulate how you'd approach this — not wait to be told",
];

const notFitCriteria = [
  "Need big teams or big budgets to perform",
  "Want predictability and defined playbooks",
  "See AI as optional or intimidating",
  "Prefer to advise rather than execute",
  "Need someone else to tell you what to try",
];

const cultureValues = [
  {
    title: "Win/Win/Win",
    description: "Every deal, every engagement — sustainable value for all parties. Not extraction. Alignment.",
  },
  {
    title: "Systems over heroics",
    description: "Build things that work without you. No single points of failure.",
  },
  {
    title: "Profit as proof",
    description: "If it doesn't show up in outcomes, it's theater. Ideas are cheap. Results matter.",
  },
  {
    title: "Clear over impressive",
    description: "Transparency beats polish. Say what you mean.",
  },
];

const applicationItems = [
  "Your resume and LinkedIn",
  "A simple sketch explaining how you would hit the ground effectively in the first 30 to 90 days",
  "Explain the reasons you expect Ignition growth should be easy — and why might it be hard",
  "Give one example of how you similarly were able to scale or improve growth elsewhere",
  "List of the AI tools you use daily — a quick walk through your stack",
];

export default function Careers() {
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowStickyHeader(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Careers", url: "/careers" },
  ]);

  return (
    <div className="overflow-hidden pb-mobile-cta">
      {/* Sticky Header */}
      <AnimatePresence>
        {showStickyHeader && (
          <motion.div
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -80, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 z-50 bg-black border-b border-white/10"
          >
            <div className="container py-3">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2">
                <div className="flex items-center gap-3 flex-wrap">
                  <span className="px-2 py-1 bg-gold text-black text-[10px] font-bold tracking-wider uppercase">
                    New Role
                  </span>
                  <span className="text-white font-display font-semibold text-sm md:text-base">
                    AI-Native <span className="text-gold">Growth Lead</span>
                  </span>
                  <span className="text-white/50 text-xs md:text-sm">
                    @ Ignition Consultants
                  </span>
                  <span className="text-white/30 text-xs hidden lg:inline">
                    (Big 4 Pedigree with Startup Agility)
                  </span>
                </div>
                <div className="text-xs">
                  <span className="text-gold font-medium">Location:</span>
                  <span className="ml-1 text-white/80">Texas or Massachusetts (Remote-first)</span>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <SEO
        title="AI-Native Growth Lead - Join Us"
        description="Build the growth engine for Ignition Consultants. $140K-$180K + Performance + Equity. Remote-first in Texas or Massachusetts."
        canonical="/careers"
        structuredData={structuredData}
      />

      <ScrollProgress />

      {/* Hero Section */}
      <section className="relative bg-charcoal pt-32 pb-20 overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: "blur(8px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
            className="max-w-4xl"
          >
            {/* Tag */}
            <span className="inline-block px-4 py-2 bg-gold text-navy text-xs font-bold tracking-wider uppercase">
              New Role
            </span>

            <h1 className="mt-8 font-display text-4xl md:text-5xl lg:text-6xl text-off-white leading-[1.1] font-semibold">
              AI-Native <span className="text-gold italic">Growth Lead</span>
            </h1>

            <p className="mt-8 text-off-white/80 text-lg md:text-xl max-w-3xl leading-relaxed font-body">
              Build the growth engine for a firm that already has product-market fit, happy clients, and zero outside capital. First dedicated growth hire. Real impact. Real outcomes.
            </p>

            {/* Job Details */}
            <div className="mt-10">
              <span className="text-gold text-sm font-medium">Location:</span>
              <span className="ml-2 text-off-white text-sm">Texas or Massachusetts (Remote-first)</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Opportunity */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
              The Opportunity — At Ignition Consultants (CFOs)
            </span>

            <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">
              We've grown 4x on relationships alone. Now we're adding the engine.
            </h2>

            <div className="mt-8 space-y-6 text-grey-body leading-relaxed">
              <p>
                <a href="https://www.ignitionconsultants.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:underline underline-offset-2">Ignition Consultants</a> provides fractional CFO services to growth-stage companies. We've helped 250+ clients raise over $3B in capital. Our growth has been organic — word of mouth, referrals, founders talking to founders.
              </p>
              <p>
                That flywheel works. But we are prepared for more scale. Come build a repeatable growth engine that multiplies what's already working — without losing what makes us different.
              </p>
            </div>

            {/* Stats Grid */}
            <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white border border-navy/10 rounded-lg p-6"
                >
                  <div className="text-3xl md:text-4xl font-display text-navy font-semibold">
                    {stat.value}
                  </div>
                  <div className="mt-2 text-sm text-grey-body">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* What You'll Own */}
      <section className="py-16 md:py-24 bg-off-white border-t border-navy/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
              What You'll Own
            </span>

            <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">
              Build the engine. Don't just run plays.
            </h2>

            <div className="mt-10 space-y-0">
              {responsibilities.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 py-6 border-b border-navy/10 last:border-b-0"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-grey-body">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Who You Are */}
      <section className="py-16 md:py-24 bg-off-white border-t border-navy/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
              Who You Are
            </span>

            <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">
              This role is for builders, not advisors.
            </h2>

            <div className="mt-10 grid md:grid-cols-2 gap-8">
              {/* Fit */}
              <div>
                <h3 className="font-display font-semibold text-navy text-lg mb-6">
                  You're a fit if you:
                </h3>
                <ul className="space-y-4">
                  {fitCriteria.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span className="text-grey-body">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Not Fit - Inverted */}
              <div className="bg-charcoal rounded-lg p-8">
                <h3 className="font-display font-semibold text-off-white text-lg mb-6">
                  This won't work if you:
                </h3>
                <ul className="space-y-4">
                  {notFitCriteria.map((item, index) => (
                    <li key={index} className="flex gap-3">
                      <span className="text-gold mt-1">—</span>
                      <span className="text-off-white/80">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Our Culture */}
      <section className="py-16 md:py-24 bg-off-white border-t border-navy/10">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">
              Our Culture
            </span>

            <h2 className="mt-6 font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">
              Built by operators, not advisors.
            </h2>

            <div className="mt-10 space-y-0">
              {cultureValues.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex gap-4 py-6 border-b border-navy/10 last:border-b-0"
                >
                  <div className="w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-gold" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-navy text-lg">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-grey-body">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section - High Impact */}
      <section className="py-20 md:py-32 bg-charcoal relative overflow-hidden">
        {/* Background accent */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-0 right-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-gold rounded-full blur-3xl" />
        </div>

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-semibold text-off-white leading-tight">
              Ready to build something <span className="text-gold italic">that matters?</span>
            </h2>
            <p className="mt-6 text-off-white/70 text-lg md:text-xl max-w-2xl mx-auto">
              The future of finance is platform augmented and delivered right-sized to each business. Help growth-minded operators with us.
            </p>

            <p className="mt-10 text-off-white/60 text-sm uppercase tracking-wider">
              Please send an email to:
            </p>
            <a
              href="mailto:tyler@ignitionconsultants.com"
              className="inline-block mt-3 px-10 py-5 bg-gold hover:bg-gold-hover text-navy text-lg font-bold rounded-lg transition-all hover:scale-105 shadow-lg shadow-gold/20"
            >
              tyler@ignitionconsultants.com
            </a>

            <div className="mt-16 bg-black/30 border border-white/10 rounded-xl p-8 md:p-10 text-left max-w-2xl mx-auto">
              <h3 className="font-display font-semibold text-gold text-xl mb-6">
                Include:
              </h3>
              <ol className="space-y-4">
                {applicationItems.map((item, index) => (
                  <li key={index} className="flex gap-4">
                    <span className="flex-shrink-0 w-8 h-8 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold text-sm">
                      {index + 1}
                    </span>
                    <span className="text-off-white/80 pt-1">{item}</span>
                  </li>
                ))}
              </ol>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
