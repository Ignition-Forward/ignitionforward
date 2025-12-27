import { motion } from "framer-motion";
import { Building2, TrendingUp, Users, Clock, Check, X, ArrowRight, ChevronDown, FileText, Shield, Target, Settings, BarChart3 } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * PE PORTFOLIO COMPANIES PAGE - WHO WE WORK WITH MASTER v2.0
 * 7-SECTION TEMPLATE
 */

const challenges = [
  {
    icon: TrendingUp,
    title: "Value creation pressure",
    description: "The sponsor expects operational improvement and margin expansion. AI is on the roadmap — but where do you start?",
  },
  {
    icon: Users,
    title: "Lean team, big mandate",
    description: "You don't have a CTO or AI lead. You need to move fast without building a tech org.",
  },
  {
    icon: Clock,
    title: "Time to value matters",
    description: "The hold period is finite. You need quick wins that compound — not multi-year transformation projects.",
  },
  {
    icon: Building2,
    title: "Integration complexity",
    description: "You're integrating acquisitions, standardizing processes, and managing change. AI adds another layer.",
  },
];

const implementationPillars = [
  {
    icon: Target,
    title: "Value creation alignment",
    description: "AI roadmap tied to sponsor priorities: margin, throughput, scalability, exit readiness.",
  },
  {
    icon: Settings,
    title: "Operational workflow redesign",
    description: "Upgrade core workflows (sales, delivery, ops) to be faster, more consistent, and less dependent on key people.",
  },
  {
    icon: BarChart3,
    title: "Measurable ROI",
    description: "Clear metrics, quick wins, and a dashboard the sponsor can see.",
  },
  {
    icon: Shield,
    title: "Governance and standards",
    description: "Policies, QA, and documentation that satisfy diligence and reduce risk.",
  },
];

const proofDeliverables = [
  "AI roadmap aligned to value creation plan",
  "2–3 workflows live in production with measurable impact",
  "Governance pack (policies, QA standards, documentation)",
  "Team enablement + adoption scorecard",
];

const trustHandling = [
  "Sponsor-aligned: designed to fit value creation timelines and reporting cadence",
  "Minimal disruption: build inside existing tools where possible",
  "Exit-ready: documentation and standards that survive diligence",
];

const outcomes = [
  "AI roadmap that aligns with sponsor value creation priorities",
  "Quick wins that demonstrate measurable ROI in 90 days",
  "Operational leverage that improves margin and throughput",
  "Exit-ready AI posture with governance and documentation",
];

const faqs = [
  {
    question: "How do you work with our sponsor?",
    answer: "We align to the value creation plan and reporting cadence. We can work directly with the sponsor or through the portfolio company — whatever fits.",
  },
  {
    question: "What's the time to value?",
    answer: "We structure work as 90-day sprints with clear milestones. Quick wins first, then compound.",
  },
  {
    question: "Do we need a CTO or AI lead?",
    answer: "No — we can operate as your fractional AI capability. We bring the expertise; you bring the context.",
  },
  {
    question: "Will this survive diligence?",
    answer: "Yes — governance, documentation, and standards are built in from the start.",
  },
];

const greatFit = [
  "You have a value creation mandate and AI is on the roadmap.",
  "You want measurable ROI in 90 days — not a multi-year transformation.",
  "You're willing to standardize a few core workflows.",
  "You want exit-ready AI posture with governance and documentation.",
];

const notFit = [
  "You want a single tool to \"fix everything.\"",
  "You're unwilling to change how work gets done.",
  "You need a custom model build as the first move (before value/use cases).",
  "You want AI to replace your team instead of enabling them.",
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-navy pr-4">{faq.question}</span>
            <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-5 pb-5"
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function PEPortfolio() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'AI Enablement for PE Portfolio Companies',
        description: 'AI systems aligned to value creation: margin improvement, operational leverage, and exit readiness.',
        provider: { '@type': 'Organization', name: 'Ignition Forward' },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Who We Work With', url: '/#who-we-work-with' },
        { name: 'PE Portfolio Companies', url: '/pe-portfolio' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="AI for PE Portfolio Companies"
        description="AI enablement aligned to value creation. Quick wins in 90 days, operational leverage, and exit-ready governance. For portfolio companies with a mandate to move."
        canonical="/pe-portfolio"
        structuredData={structuredData}
      />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Building2 className="w-8 h-8 text-gold" />
              <span className="label-text text-gold">Who We Help</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.1 }}
              className="text-off-white text-4xl md:text-5xl lg:text-6xl font-display leading-tight"
            >
              PE Portfolio Companies
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.2 }}
              className="mt-6 text-xl text-off-white/80 leading-relaxed max-w-3xl"
            >
              Portfolio companies with a value creation mandate and a sponsor who expects AI to be part of the plan — without a multi-year transformation project.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SCENARIO + FIT CHECK */}
      <section className="bg-navy-light py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display text-off-white mb-6">Your World</h2>
            <div className="p-8 rounded-r-xl bg-navy border-l-4 border-gold">
              <p className="text-off-white/80 text-lg leading-relaxed">
                You're running a portfolio company with a clear value creation mandate. The sponsor expects operational improvement, margin expansion, and AI is on the roadmap. But you don't have a CTO or AI lead, and you can't afford a multi-year transformation. You need quick wins that compound — and governance that survives diligence.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy border border-green-500/30"
            >
              <h3 className="text-lg font-display text-green-400 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" />
                Great fit if…
              </h3>
              <ul className="space-y-3">
                {greatFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white-muted">
                    <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy border border-red-500/30"
            >
              <h3 className="text-lg font-display text-red-400 mb-4 flex items-center gap-2">
                <X className="w-5 h-5" />
                Not a fit if…
              </h3>
              <ul className="space-y-3">
                {notFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white-muted">
                    <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHALLENGES */}
      <section className="bg-off-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="label-text text-gold-dark">The Tension You Feel</span>
            <h2 className="mt-4 text-navy">Challenges We Address</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 group-hover:bg-gold/20 transition-colors">
                  <challenge.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display text-navy mb-2">{challenge.title}</h3>
                <p className="text-grey-body leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE HELP */}
      <section className="bg-navy py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="label-text text-gold">How We Help</span>
            <h2 className="mt-4 text-off-white">AI enablement aligned to value creation</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {implementationPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-navy-light border border-gold/20"
              >
                <pillar.icon className="w-8 h-8 text-gold mb-4" />
                <h3 className="text-lg font-display text-off-white mb-2">{pillar.title}</h3>
                <p className="text-off-white/60 text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy-light border border-white/10"
            >
              <h3 className="text-lg font-display text-gold mb-4">What you can point to internally</h3>
              <ul className="space-y-3">
                {proofDeliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white-muted">
                    <FileText className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy-light border border-white/10"
            >
              <h3 className="text-lg font-display text-gold mb-4">Trust & Data Handling</h3>
              <ul className="space-y-3">
                {trustHandling.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white-muted">
                    <Shield className="w-4 h-4 text-off-white-muted mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUTCOMES */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="label-text text-gold-dark">What Changes</span>
            <h2 className="mt-4 text-navy">Outcomes You Can Expect</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold">{index + 1}</span>
                </div>
                <p className="text-navy font-medium">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="label-text text-gold-dark">Questions</span>
            <h2 className="mt-4 text-navy">Frequently Asked</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-navy">Ready to accelerate value creation?</h2>
            <p className="mt-4 text-grey-body text-lg">
              Let's map the AI enablement plan that aligns with your sponsor's priorities — and delivers quick wins that compound.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/maguire" className="btn-outline-navy inline-flex items-center justify-center gap-2">
                See Our Proof
                <ArrowRight className="w-5 h-5" />
              </Link>
              <CometCTA href="/contact">
                Start the Conversation
              </CometCTA>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
