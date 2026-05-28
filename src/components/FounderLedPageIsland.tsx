import { motion } from "framer-motion";
import { Zap, Target, Users, AlertTriangle, Clock, Check, X, ArrowRight, ChevronDown, FileText, Shield, Lightbulb, Settings, BookOpen } from "lucide-react";
import { useState } from "react";
import CometCTA from "./CometCTAIsland";

/*
 * FOUNDER-LED BUSINESSES PAGE - WHO WE WORK WITH MASTER v2.0
 * 7-SECTION TEMPLATE
 */

const challenges = [
  {
    icon: Target,
    title: "The board wants an AI strategy",
    description: "Every meeting now includes AI questions. You need a clear point of view and a plan you can stand behind.",
  },
  {
    icon: Users,
    title: "Tools everywhere, impact nowhere",
    description: "The team is experimenting with AI, but nothing is consistent or measurable. You need repeatable workflows that create value.",
  },
  {
    icon: AlertTriangle,
    title: "Competitive pressure and hype",
    description: "Competitors claim AI capabilities. You can't afford to lag — but you also won't chase noise.",
  },
  {
    icon: Clock,
    title: "You are the bottleneck",
    description: "Your expertise is the advantage, but it doesn't scale. You need AI to multiply your impact without multiplying your hours.",
  },
];

const implementationPillars = [
  {
    icon: Lightbulb,
    title: "Strategy that matches your model",
    description: "Where AI helps (and where it doesn't) given how you sell, deliver, and retain clients.",
  },
  {
    icon: Zap,
    title: "Founder leverage workflows",
    description: "Personal AI workflows for decisions, communication, sales, and delivery review — to get time back.",
  },
  {
    icon: BookOpen,
    title: "Systematize expertise",
    description: "Capture your best judgment into playbooks, templates, and internal copilots so quality scales.",
  },
  {
    icon: Settings,
    title: "Team enablement and standards",
    description: "Simple standards (tool stack, QA, prompt patterns, adoption rituals) so the team gets consistent results.",
  },
];

const proofDeliverables = [
  "Prioritized 90-day roadmap (use cases + ROI hypothesis)",
  "2–3 workflows live in production (not prototypes sitting in Notion)",
  "Playbook library (templates, checklists, examples)",
  "Team enablement session + adoption scorecard",
];

const trustHandling = [
  "Designed so your IP stays yours (processes, playbooks, internal standards)",
  "Minimal disruption: build inside the tools you already rely on where possible",
  "Clear boundaries on what gets shared, stored, or reused",
];

const outcomes = [
  "Clear AI strategy that satisfies board and investors",
  "Systematic approach to AI that creates measurable ROI",
  "Personal AI workflows that multiply your effectiveness",
  "Team capability that reduces dependency on you",
];

const faqs = [
  {
    question: "How fast can we see results?",
    answer: "Fast when we stay focused: pick a small set of high-leverage workflows, implement, measure, iterate. Momentum beats perfection.",
  },
  {
    question: "Will this scale as we grow?",
    answer: "Yes — because the output is a system (standards, workflows, playbooks), not founder-only heroics.",
  },
  {
    question: "Is this going to be another thing I have to manage?",
    answer: "No — the goal is fewer decisions and less review burden over time. Founder involvement is front-loaded and then drops.",
  },
  {
    question: "What's the ROI?",
    answer: "We tie work to measurable drivers: time reclaimed, throughput, conversion, cycle time, quality consistency, and cost-to-serve.",
  },
];

const greatFit = [
  "Your business is expert-led (your judgment is the product).",
  "You want measurable ROI and operational leverage — not \"AI theater.\"",
  "You're willing to standardize a few core workflows and train the team.",
  "You want the business to be less dependent on you over time.",
];

const notFit = [
  "You want a single prompt or tool to \"fix everything.\"",
  "You're unwilling to change how work gets done.",
  "You want a custom model build as the first move (before value/use cases).",
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

export default function FounderLed() {
  return (
    <div className="overflow-hidden">
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
              <Zap className="w-8 h-8 text-gold" />
              <span className="label-text text-gold">Who We Help</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.1 }}
              className="text-off-white text-4xl md:text-5xl lg:text-7xl font-display leading-tight font-semibold"
            >
              Founder-Led & Expert Practices
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-off-white/80 leading-relaxed max-w-3xl font-body"
            >
              Founders and expert practitioners ready to scale their expertise without scaling their calendar — and without losing what makes the business special.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SCENARIO + FIT CHECK */}
      <section className="bg-navy-light py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display text-off-white mb-6 font-semibold">Your World</h2>
            <div className="p-8 rounded-r-xl bg-navy border-l-4 border-gold">
              <p className="text-off-white/80 text-lg leading-relaxed">
                You built the business on judgment, craft, and relationships — and it worked. Now growth is making you the bottleneck: approvals, sales, delivery review, hiring, and decisions. The team is experimenting with AI tools, the board asks about "AI strategy," and competitors are marketing AI whether it's real or not. You need a coherent system that turns AI into leverage — without becoming an AI project manager.
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
      <section className="bg-off-white py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label text-gold">The Tension You Feel</span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display text-navy font-semibold">Challenges We Address</h2>
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
      <section className="bg-navy py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">How We Help</span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display text-off-white font-semibold">Turn AI into leverage — without becoming an AI project manager</h2>
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
                  <Zap className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gold font-display text-lg mb-2">Recommended for Founder-Led Businesses</h3>
                  <p className="text-off-white/70 leading-relaxed mb-4">
                    Most founders start with <a href="/edge" className="text-gold underline underline-offset-2 hover:text-gold/80">Edge</a> to build personal AI fluency and reclaim time. When ready to scale beyond yourself, <a href="/how-we-help#fractional-ai" className="text-gold underline underline-offset-2 hover:text-gold/80">Fractional AI Officer</a> provides strategic leadership without the $400K hire.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/edge" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-navy rounded-full text-sm font-medium hover:bg-gold/90 transition-colors">
                      Edge for Founders
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="/how-we-help#fractional-ai" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-off-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                      Fractional AI Officer
                      <ArrowRight className="w-4 h-4" />
                    </a>
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
                className="p-6 md:p-8 rounded-xl bg-navy-light border border-gold/20"
              >
                <pillar.icon className="w-8 h-8 text-gold/70 mb-4" />
                <h3 className="text-lg md:text-xl font-display text-off-white mb-2 font-semibold">{pillar.title}</h3>
                <p className="text-off-white/70 text-sm md:text-base leading-relaxed font-body">{pillar.description}</p>
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
      <section className="bg-off-white py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label text-gold">What Changes</span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display text-navy font-semibold">Outcomes You Can Expect</h2>
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
      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label text-gold">Questions</span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display text-navy font-semibold">Frequently Asked</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="bg-off-white py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-navy font-semibold">Ready to scale your impact?</h2>
            <p className="mt-6 text-grey-body text-lg md:text-xl font-body leading-relaxed">
              Let's build the AI enablement system that multiplies your effectiveness — without diluting quality.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/maguire" className="btn-outline-navy inline-flex items-center justify-center gap-2">
                See Our Proof
                <ArrowRight className="w-5 h-5" />
              </a>
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
