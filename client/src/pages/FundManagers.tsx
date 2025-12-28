import { motion } from "framer-motion";
import { TrendingUp, Search, FileText, Clock, Check, X, ArrowRight, ChevronDown, Shield, Target, BarChart3, Layers } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * FUND MANAGERS (GPs) PAGE - WHO WE WORK WITH MASTER v2.0
 * 7-SECTION TEMPLATE
 */

const challenges = [
  {
    icon: Search,
    title: "Deal sourcing is still manual",
    description: "You're relying on networks, inbound, and brokers. You need a systematic way to surface opportunities earlier and filter faster.",
  },
  {
    icon: FileText,
    title: "Diligence is time-intensive",
    description: "Every deal requires the same research loops. You need to compress prep time without missing signals.",
  },
  {
    icon: Clock,
    title: "Portfolio support is reactive",
    description: "You want to help portfolio companies more, but bandwidth limits proactive engagement.",
  },
  {
    icon: TrendingUp,
    title: "LP expectations are rising",
    description: "LPs are asking about AI strategy. You need a credible answer — and ideally, a competitive edge.",
  },
];

const implementationPillars = [
  {
    icon: Target,
    title: "Sourcing acceleration",
    description: "Systematic deal discovery, thesis-aligned filtering, and early signal detection.",
  },
  {
    icon: BarChart3,
    title: "Diligence compression",
    description: "Pre-meeting briefs, market scans, and research workflows that cut prep time in half.",
  },
  {
    icon: Layers,
    title: "Portfolio leverage",
    description: "Scalable support tools (playbooks, templates, AI copilots) you can offer to portfolio companies.",
  },
  {
    icon: Shield,
    title: "LP-ready narrative",
    description: "Clear, defensible AI posture for LP conversations and fund marketing.",
  },
];

const proofDeliverables = [
  "Sourcing workflow + thesis-aligned filtering criteria",
  "Diligence prep automation (briefs, market scans, comps)",
  "Portfolio support toolkit (playbooks, templates, enablement sessions)",
  "LP-ready AI narrative (what you do, what you don't, and why)",
];

const trustHandling = [
  "Deal-level confidentiality: segmented workspaces, no cross-deal data leakage",
  "LP-sensitive: designed to align with fund governance and reporting standards",
  "Minimal footprint: build inside your existing stack where possible",
];

const outcomes = [
  "Systematic deal sourcing that surfaces opportunities earlier",
  "Diligence prep time cut in half without missing signals",
  "Scalable portfolio support that creates real value",
  "LP-ready AI narrative that differentiates the fund",
];

const faqs = [
  {
    question: "Will this work with our existing deal flow tools?",
    answer: "Yes — we design around your stack (CRM, data rooms, research tools). The goal is leverage, not replacement.",
  },
  {
    question: "How do you handle deal confidentiality?",
    answer: "Segmented workspaces, no cross-deal data sharing, and workflows designed to minimize data exposure.",
  },
  {
    question: "What's the ROI?",
    answer: "We tie work to measurable drivers: deals sourced, diligence time, portfolio engagement, and LP perception.",
  },
  {
    question: "Can we use this as a portfolio value-add?",
    answer: "Yes — the portfolio toolkit is designed to be shared with companies as a differentiated GP offering.",
  },
];

const greatFit = [
  "You want systematic sourcing and diligence leverage — not \"AI theater.\"",
  "You're willing to standardize a few core workflows (sourcing, diligence, portfolio support).",
  "You want a credible AI narrative for LP conversations.",
  "You see AI as a fund-level capability, not just a personal productivity hack.",
];

const notFit = [
  "You want a single tool to \"fix everything.\"",
  "You're unwilling to standardize any part of your process.",
  "You want AI to replace judgment in investment decisions.",
  "You need a custom model build as the first move (before value/use cases).",
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

export default function FundManagers() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'AI Enablement for Fund Managers',
        description: 'AI systems for GPs: deal sourcing, diligence compression, and portfolio leverage.',
        provider: { '@type': 'Organization', name: 'Ignition Forward' },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Who We Work With', url: '/#who-we-work-with' },
        { name: 'Fund Managers', url: '/fund-managers' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="AI for Fund Managers (GPs)"
        description="Systematic deal sourcing, diligence compression, and portfolio leverage. AI enablement for GPs who want measurable edge — not AI theater."
        canonical="/fund-managers"
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
              <TrendingUp className="w-8 h-8 text-gold" />
              <span className="label-text text-gold">Who We Help</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.1 }}
              className="text-off-white text-4xl md:text-5xl lg:text-6xl font-display leading-tight"
            >
              Fund Managers (GPs)
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.2 }}
              className="mt-6 text-xl text-off-white/80 leading-relaxed max-w-3xl"
            >
              GPs who want systematic sourcing, faster diligence, and scalable portfolio support — without adding headcount or losing the craft.
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
                You're managing deal flow, diligence, portfolio support, and LP relationships — all at once. AI tools are everywhere, but nothing is integrated or systematic. LPs are asking about your AI strategy. Competitors are claiming AI-driven sourcing. You need a coherent approach that creates real leverage — without becoming a tech project manager.
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
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-[#a8e4d7] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-navy/10 transition-colors">
                  <challenge.icon className="w-6 h-6 text-navy/50" />
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
            <h2 className="mt-4 text-off-white">AI enablement built for the GP workflow</h2>
          </motion.div>

          {/* SERVICE RECOMMENDATION - Segment-to-Service Mapping */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-6 rounded-2xl bg-gold/10 border border-gold/30">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gold font-display text-lg mb-2">Recommended for Fund Managers</h3>
                  <p className="text-off-white/70 leading-relaxed mb-4">
                    Most GPs start with <Link href="/how-we-help#forward-deployed" className="text-gold underline underline-offset-2 hover:text-gold/80">Forward Deployed</Link> to build systematic sourcing and diligence workflows. For fund-level AI strategy and LP-ready narrative, consider <Link href="/how-we-help#fractional-ai" className="text-gold underline underline-offset-2 hover:text-gold/80">Fractional AI Officer</Link>.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href="/how-we-help#forward-deployed" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-navy rounded-full text-sm font-medium hover:bg-gold/90 transition-colors">
                      Forward Deployed
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/how-we-help#fractional-ai" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-off-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                      Fractional AI Officer
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {implementationPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-navy-light border border-white/10"
              >
                <pillar.icon className="w-8 h-8 text-off-white/60 mb-4" />
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
                    <FileText className="w-4 h-4 text-off-white/50 mt-1 flex-shrink-0" />
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
            <h2 className="text-navy">Ready to build your edge?</h2>
            <p className="mt-4 text-grey-body text-lg">
              Let's map the AI enablement system that creates real leverage — for sourcing, diligence, and portfolio support.
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
