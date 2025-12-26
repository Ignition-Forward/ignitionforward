import { motion, useInView } from "framer-motion";
import { Check, X, ArrowRight, Target, Shield, Users, FileText, TrendingUp, Database, Clock, Zap, ChevronDown, Quote, Lightbulb, AlertTriangle, Map, BarChart3 } from "lucide-react";
import { useRef, useState } from "react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * STRATEGIC DIAGNOSTIC PAGE - Hidden/Unlisted
 * Entry point for Organization Track buyers who want validation
 *
 * DESIGN PHILOSOPHY:
 * - Position as de-risking, not consulting
 * - Clear deliverables and timeline
 * - Credit toward future engagement
 * - No vendor lock-in messaging
 *
 * NOTE: This page is NOT linked from navigation.
 * Share URL directly: /strategic-diagnostic
 */

const failureModes = [
  {
    title: "Wrong Use Case",
    description: "Building what's technically interesting instead of what drives business value",
    icon: AlertTriangle,
  },
  {
    title: "Data Not Ready",
    description: "Discovering infrastructure gaps after the project is underway",
    icon: Database,
  },
  {
    title: "No Clear Success Criteria",
    description: "Can't measure ROI because you never defined what success looks like",
    icon: Target,
  },
];

const deliverables = [
  { title: "AI Opportunity Map", desc: "Every potential use case in your operations, scored by impact and feasibility", icon: Map },
  { title: "Data Readiness Assessment", desc: "Current state of your data infrastructure with specific gaps identified", icon: Database },
  { title: "Use Case Prioritization Matrix", desc: "Ranked opportunities by business impact, complexity, and risk", icon: BarChart3 },
  { title: "Quick Win Identification", desc: "2-3 opportunities you can act on immediately with existing resources", icon: Zap },
  { title: "Implementation Roadmap", desc: "12-month phased plan with quarterly milestones and dependencies", icon: TrendingUp },
  { title: "Investment Framework", desc: "Expected costs, timelines, and ROI projections for top opportunities", icon: FileText },
];

const timeline = [
  {
    week: "Week 1",
    title: "Discovery",
    activities: ["Stakeholder interviews", "Workflow observation", "Data infrastructure review", "Current state documentation"],
    output: "Interview synthesis, initial opportunity list",
  },
  {
    week: "Week 2",
    title: "Analysis",
    activities: ["Use case scoring", "Data readiness assessment", "Complexity/risk estimation", "ROI modeling"],
    output: "Prioritization matrix, feasibility analysis",
  },
  {
    week: "Week 3",
    title: "Synthesis",
    activities: ["Roadmap development", "Executive presentation prep", "Recommendation refinement"],
    output: "Final deliverables, leadership presentation",
  },
];

const differentiators = [
  {
    title: "We've Done This Ourselves",
    description: "Every recommendation comes from operators who've built AI systems that run real businesses-including our own.",
    icon: Shield,
  },
  {
    title: "Actionable, Not Academic",
    description: "You'll leave with a roadmap you can execute, not a theoretical framework. Quick wins identified for immediate action.",
    icon: Zap,
  },
  {
    title: "No Vendor Lock-In",
    description: "The diagnostic stands alone. Implement with us, your team, or another partner. We're confident enough to let you choose.",
    icon: Users,
  },
];

const goodFit = [
  "You know AI matters but aren't sure where to start",
  "You've been burned by AI projects that didn't deliver",
  "You need to justify AI investment to your board or partners",
  "You want an objective assessment before committing to a vendor",
  "You have budget for implementation but want validation first",
];

const notFit = [
  "You're looking for generic AI education",
  "You want to experiment indefinitely without commitment",
  "You need someone to tell you AI is the answer to everything",
];

const pricingTiers = [
  {
    tier: "Diagnostic Essentials",
    price: "$15,000",
    duration: "2 weeks",
    scope: "Single department or function",
    description: "Focused assessment with prioritized recommendations",
    includes: ["Executive presentation", "Prioritized opportunity matrix", "Implementation roadmap", "30-day follow-up call"],
  },
  {
    tier: "Diagnostic Complete",
    price: "$25,000",
    duration: "3 weeks",
    scope: "Cross-functional assessment",
    description: "Full organization scan with detailed implementation roadmap",
    includes: ["Everything in Essentials", "Multi-department analysis", "Detailed ROI projections", "Vendor evaluation framework", "Extended follow-up support"],
    recommended: true,
  },
];

const nextPaths = [
  {
    title: "Implement Internally",
    description: "Use the roadmap with your own team. We'll answer questions during your 30-day follow-up.",
    icon: Users,
  },
  {
    title: "Forward Deployed",
    description: "We build the first priority system with you. Diagnostic investment credited toward engagement.",
    icon: Zap,
    credit: true,
  },
  {
    title: "Fractional AI Officer",
    description: "Ongoing leadership to execute the full roadmap. Diagnostic investment credited toward first month.",
    icon: Shield,
    credit: true,
  },
];

const faqs = [
  {
    question: "How is this different from a consulting engagement?",
    answer: "Consultants advise. We assess with operator eyes. Every recommendation comes from people who've built and run AI systems, not theorized about them.",
  },
  {
    question: "What if we already have an AI strategy?",
    answer: "Great-we'll pressure-test it. Most strategies we review have gaps in prioritization or data readiness. We'll validate what's working and identify what's missing.",
  },
  {
    question: "Do we need technical resources involved?",
    answer: "Yes. We'll need access to your IT/data team for the infrastructure assessment. The more access, the more specific our recommendations.",
  },
  {
    question: "What happens if you find we're not ready for AI?",
    answer: "We'll tell you. And we'll tell you exactly what needs to change before AI makes sense. That's more valuable than a roadmap you can't execute.",
  },
  {
    question: "Can we do this remotely?",
    answer: "Yes, though on-site discovery (Week 1) typically yields better insights. We'll discuss the best approach for your situation.",
  },
];

// FAQ Accordion Item
function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="font-display text-lg text-off-white">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gold transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.2 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-grey-body font-body">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function StrategicDiagnostic() {
  const heroRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });

  return (
    <>
      <SEO
        title="Strategic Diagnostic"
        description="Map where AI creates leverage-and where it doesn't. 2-3 week assessment with prioritized roadmap. $15K-$25K."
        canonical="/strategic-diagnostic"
        noindex={true}
      />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy to-navy-light opacity-90" />

        <div className="container relative z-10 py-24 md:py-32">
          <motion.div
            ref={heroRef}
            initial={{ opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.36 }}
            className="max-w-4xl"
          >
            <span className="inline-block px-4 py-1.5 bg-gold text-navy text-xs font-semibold tracking-wider rounded-full mb-6">
              ORGANIZATION TRACK
            </span>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-off-white leading-tight">
              Strategic<br />
              <span className="text-gold italic">Diagnostic</span>
            </h1>

            <p className="mt-8 text-xl md:text-2xl text-off-white/90 font-body max-w-2xl">
              Map where AI creates leverage-and where it doesn't.
            </p>

            <p className="mt-6 text-lg text-grey-body font-body max-w-2xl">
              Before you invest in AI transformation, know exactly where to start. In 2-3 weeks, we'll assess your operations, identify high-impact opportunities, and deliver a prioritized roadmap you can act on-whether with us or on your own.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-6">
              <Link href="/contact">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="btn-gold text-lg px-8 py-4"
                >
                  Schedule a Diagnostic Call <ArrowRight className="inline ml-2 w-5 h-5" />
                </motion.button>
              </Link>
              <div className="text-off-white">
                <span className="font-display text-2xl text-gold">$15K - $25K</span>
                <span className="text-grey-body ml-2">| 2-3 Weeks</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="bg-off-white py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
          >
            <span className="section-label" style={{ color: '#1A2332' }}>WHY THIS MATTERS</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-6">
              Most AI Initiatives Fail Before They Start
            </h2>
            <p className="mt-6 text-xl text-navy/80 font-body max-w-3xl">
              Companies waste months and millions on AI projects that never deliver. The problem isn't the technology-it's starting in the wrong place.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {failureModes.map((mode, index) => (
              <motion.div
                key={mode.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl border border-navy/10"
              >
                <div className="w-12 h-12 rounded-full bg-red-100 flex items-center justify-center mb-6">
                  <mode.icon className="w-6 h-6 text-red-600" />
                </div>
                <h3 className="font-display text-xl text-navy">{mode.title}</h3>
                <p className="mt-3 text-grey-body font-body">{mode.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36, delay: 0.3 }}
            className="mt-12 text-center text-xl text-navy font-body"
          >
            The Strategic Diagnostic eliminates these risks <span className="text-gold font-semibold">before</span> you commit to implementation.
          </motion.p>
        </div>
      </section>

      {/* Deliverables Section */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="text-center"
          >
            <span className="section-label">DELIVERABLES</span>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mt-6">
              A Roadmap, Not a Report
            </h2>
            <p className="mt-6 text-xl text-grey-body font-body max-w-2xl mx-auto">
              We don't deliver 100-page decks that sit in a drawer. You get a prioritized action plan with clear next steps.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.05 }}
                className="p-6 bg-navy-light rounded-xl border border-white/10"
              >
                <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-5 h-5 text-gold" />
                </div>
                <h3 className="font-display text-lg text-off-white">{item.title}</h3>
                <p className="mt-2 text-grey-body font-body text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="bg-off-white py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="text-center"
          >
            <span className="section-label" style={{ color: '#1A2332' }}>THE PROCESS</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-6">
              Three Weeks to Clarity
            </h2>
          </motion.div>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {timeline.map((phase, index) => (
              <motion.div
                key={phase.week}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.1 }}
                className="relative"
              >
                <div className="p-8 bg-white rounded-xl border border-navy/10 h-full">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="w-12 h-12 rounded-full bg-gold text-navy font-display text-lg flex items-center justify-center">
                      {index + 1}
                    </span>
                    <div>
                      <span className="text-gold text-sm font-semibold">{phase.week}</span>
                      <h3 className="font-display text-xl text-navy">{phase.title}</h3>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {phase.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2 text-grey-body font-body text-sm">
                        <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                        {activity}
                      </li>
                    ))}
                  </ul>

                  <div className="pt-4 border-t border-navy/10">
                    <span className="text-xs text-navy/60 uppercase tracking-wider">Output</span>
                    <p className="text-navy font-medium text-sm mt-1">{phase.output}</p>
                  </div>
                </div>

                {index < timeline.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gold/30" />
                )}
              </motion.div>
            ))}
          </div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36, delay: 0.3 }}
            className="mt-12 text-center text-grey-body font-body"
          >
            We work alongside your team-IT, operations, and business leaders. No black box consulting.
          </motion.p>
        </div>
      </section>

      {/* Differentiators Section */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
          >
            <span className="section-label">OUR APPROACH</span>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mt-6">
              Operators, Not Consultants
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {differentiators.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.1 }}
                className="p-8 bg-navy-light rounded-xl border border-white/10"
              >
                <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="font-display text-xl text-off-white">{item.title}</h3>
                <p className="mt-3 text-grey-body font-body">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fit Section */}
      <section className="bg-off-white py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="text-center"
          >
            <span className="section-label" style={{ color: '#1A2332' }}>IS THIS RIGHT FOR YOU?</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-6">
              Built for Leaders Ready to Move
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 mt-16 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36 }}
            >
              <h3 className="font-display text-xl text-navy mb-6 flex items-center gap-2">
                <Check className="w-6 h-6 text-green-600" /> Good Fit
              </h3>
              <ul className="space-y-4">
                {goodFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-grey-body font-body">
                    <Check className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.36 }}
            >
              <h3 className="font-display text-xl text-navy mb-6 flex items-center gap-2">
                <X className="w-6 h-6 text-red-600" /> Not a Fit
              </h3>
              <ul className="space-y-4">
                {notFit.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-grey-body font-body">
                    <X className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="text-center"
          >
            <span className="section-label">INVESTMENT</span>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mt-6">
              Transparent Pricing
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 mt-16 max-w-4xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.1 }}
                className={`p-8 rounded-xl border ${tier.recommended ? 'border-gold bg-navy-light' : 'border-white/10 bg-navy-light/50'} relative`}
              >
                {tier.recommended && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-xs font-semibold rounded-full">
                    RECOMMENDED
                  </span>
                )}

                <h3 className="font-display text-2xl text-off-white">{tier.tier}</h3>
                <div className="mt-4">
                  <span className="font-display text-4xl text-gold">{tier.price}</span>
                  <span className="text-grey-body ml-2">| {tier.duration}</span>
                </div>
                <p className="mt-2 text-gold/80 text-sm">{tier.scope}</p>
                <p className="mt-4 text-grey-body font-body">{tier.description}</p>

                <ul className="mt-6 space-y-3">
                  {tier.includes.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-off-white font-body text-sm">
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <p className="text-grey-body font-body">
              <span className="text-gold font-semibold">Payment Terms:</span> 50% upfront, 50% on delivery
            </p>
          </motion.div>
        </div>
      </section>

      {/* What Happens Next Section */}
      <section className="bg-off-white py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="text-center"
          >
            <span className="section-label" style={{ color: '#1A2332' }}>AFTER THE DIAGNOSTIC</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-6">
              Your Choice, Our Support
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {nextPaths.map((path, index) => (
              <motion.div
                key={path.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.36, delay: index * 0.1 }}
                className="p-8 bg-white rounded-xl border border-navy/10 relative"
              >
                {path.credit && (
                  <span className="absolute -top-3 right-4 px-3 py-1 bg-gold text-navy text-xs font-semibold rounded-full">
                    CREDIT APPLIES
                  </span>
                )}
                <div className="w-12 h-12 rounded-full bg-navy/10 flex items-center justify-center mb-6">
                  <path.icon className="w-6 h-6 text-navy" />
                </div>
                <h3 className="font-display text-xl text-navy">{path.title}</h3>
                <p className="mt-3 text-grey-body font-body">{path.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36, delay: 0.3 }}
            className="mt-12 p-6 bg-gold/10 rounded-xl border border-gold/30 max-w-3xl mx-auto"
          >
            <p className="text-center text-navy font-body">
              <span className="font-semibold">If you move forward with us</span>, your diagnostic investment applies to the next engagement.
              <span className="font-semibold"> If you don't</span>, you still have a roadmap you can act on.
            </p>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-navy py-24 md:py-32">
        <div className="container max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="text-center mb-16"
          >
            <span className="section-label">QUESTIONS</span>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mt-6">
              Frequently Asked
            </h2>
          </motion.div>

          <div>
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-navy-light py-24 md:py-32">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl text-off-white">
              Ready to Know Where to Start?
            </h2>
            <p className="mt-6 text-xl text-grey-body font-body">
              The first conversation is about fit. If we can help, we'll tell you. If we can't, we'll tell you that too.
            </p>

            <div className="mt-10">
              <CometCTA href="/contact" className="text-lg">
                Schedule a Diagnostic Call
              </CometCTA>
            </div>

            <p className="mt-8 text-grey-body">
              Or email directly: <a href="mailto:hello@ignitionforward.com" className="text-gold hover:underline">hello@ignitionforward.com</a>
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
