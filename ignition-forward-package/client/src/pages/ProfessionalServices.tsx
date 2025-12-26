import { motion } from "framer-motion";
import { Shield, AlertTriangle, Users, Lock, Brain, Check, X, ArrowRight, ChevronDown, FileText, BookOpen, Settings, Package } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * PROFESSIONAL SERVICES PAGE - WHO WE WORK WITH MASTER v2.0
 * 
 * 7-SECTION TEMPLATE:
 * 1. Hero (navy bg)
 * 2. Scenario + Fit Check (navy-dark bg)
 * 3. Challenges - 4 cards (light bg)
 * 4. How We Help - 4 pillars + proof deliverables + trust handling (navy bg)
 * 5. Outcomes - 4 items (light-grey bg)
 * 6. FAQ - 4 questions (white bg)
 * 7. CTA - "See Our Proof" + "Start the Conversation" (light-grey bg)
 */

const challenges = [
  {
    icon: AlertTriangle,
    title: "Premium delivery is being challenged",
    description: "Clients are asking why they should pay premium rates when AI can draft, research, or summarize. You need AI to make your expertise more valuable, not cheaper.",
  },
  {
    icon: Users,
    title: "AI expectations are now table stakes",
    description: "RFPs increasingly include AI questions. Competitors are touting AI-enabled services. You need to demonstrate capability without overpromising.",
  },
  {
    icon: Lock,
    title: "Liability and confidentiality risk",
    description: "Accuracy, privilege, and professional responsibility introduce real risk. You need governance, guardrails, and documented standards.",
  },
  {
    icon: Brain,
    title: "Institutional knowledge is trapped",
    description: "Decades of partner judgment live in people's heads. You need to capture and reuse that expertise before it retires or walks.",
  },
];

const implementationPillars = [
  {
    icon: Shield,
    title: "Governance before tools",
    description: "Use-case policy, review standards, and risk workflows that leadership can sign off on.",
  },
  {
    icon: BookOpen,
    title: "Knowledge capture & reuse",
    description: "Turn partner judgment into reusable playbooks, templates, and internal copilots.",
  },
  {
    icon: Settings,
    title: "Delivery workflow redesign",
    description: "Upgrade drafting/research/analysis workflows to be faster, more consistent, and still accountable.",
  },
  {
    icon: Package,
    title: "Client-facing capability packaging",
    description: "Offer AI-augmented services with clear boundaries, QA standards, and language clients can trust.",
  },
];

const proofDeliverables = [
  "AI policy pack + approved use-case registry",
  "2–3 redesigned workflows with SOPs and QA checklists",
  "Knowledge library (playbooks/templates) aligned to your services",
  "Enablement sessions for partners/associates + adoption guide",
  "RFP-ready narrative: what you do, what you don't do, and why",
];

const trustHandling = [
  "NDA-first posture when required",
  "Designed to minimize data exposure and align to confidentiality obligations",
  "Least-privilege access and segmented workspaces (by team/matter when needed)",
  "Auditability: documented review checkpoints and usage standards",
  "Able to align to your internal tool stack and security requirements",
];

const outcomes = [
  "AI-augmented service delivery that defends premium pricing",
  "Governance frameworks that satisfy professional liability requirements",
  "Knowledge capture that preserves institutional expertise",
  "Client-facing AI capability that wins competitive RFPs",
];

const faqs = [
  {
    question: "Will this work in a regulated / high-liability environment?",
    answer: "Yes — the work starts with governance, use-case boundaries, and review standards. The goal is controlled leverage, not uncontrolled automation.",
  },
  {
    question: "How much partner time does this take?",
    answer: "Partner time is focused on decisions (use-case prioritization, risk posture, standards). Execution runs through a small pilot team with tight checkpoints.",
  },
  {
    question: "What's the risk if it doesn't work?",
    answer: "We structure work as bounded pilots with clear success criteria and artifacts you keep (policies, workflows, training). No \"big bang\" commitments.",
  },
  {
    question: "Can I trust you with client relationships and confidentiality?",
    answer: "We operate with least-privilege access, NDA-first where required, and workflows designed to minimize data exposure while preserving accountability.",
  },
];

const greatFit = [
  "You want governance before tools and a clear, defensible AI posture.",
  "You need to capture partner judgment and standardize quality at scale.",
  "You want to win AI-heavy RFPs with credible, bounded claims.",
  "You're done with scattered experiments and want measurable leverage.",
];

const notFit = [
  "You want a generic chatbot rollout with no governance.",
  "You want AI to replace professional judgment or reduce review standards.",
  "You can't sponsor a small pilot team (even temporarily).",
  "You need \"set-and-forget automation\" in regulated client work.",
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

export default function ProfessionalServices() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'Service',
        name: 'AI Enablement for Professional Services',
        description: 'AI enablement for law firms, accounting practices, and consultancies. Governance-led approach that protects trust while creating leverage.',
        provider: {
          '@type': 'Organization',
          name: 'Ignition Forward',
        },
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Who We Work With', url: '/#who-we-work-with' },
        { name: 'Professional Services', url: '/professional-services' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="AI for Professional Services - Law, Accounting, Consulting"
        description="AI enablement for high-trust advisory firms. Scale your expertise without scaling your headcount. Partners at law firms, accounting practices, and consultancies trust us to build AI that protects what makes them valuable."
        canonical="/professional-services"
        structuredData={structuredData}
      />

      {/* SECTION 1: HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <Shield className="w-8 h-8 text-gold" />
              <span className="label-text text-gold">Who We Help</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-off-white text-4xl md:text-5xl lg:text-6xl font-display leading-tight"
            >
              Professional Services
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-xl text-off-white/80 leading-relaxed max-w-3xl"
            >
              Partners and principals at law firms, accounting practices, and consultancies who want AI leverage — without compromising trust, liability, or premium positioning.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SCENARIO + FIT CHECK */}
      <section className="bg-navy-light py-16">
        <div className="container">
          {/* Scenario */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-display text-off-white mb-6">Your World</h2>
            <div className="p-8 rounded-r-xl bg-navy border-l-4 border-gold">
              <p className="text-off-white/80 text-lg leading-relaxed">
                You're responsible for reputation and revenue. Clients are asking what AI means for delivery and pricing. Associates are experimenting with tools. Competitors are marketing "AI capabilities." Meanwhile, risk and compliance are rightly focused on confidentiality and professional responsibility. You need a path that modernizes the firm — without betting the brand on unproven technology.
              </p>
            </div>
          </motion.div>

          {/* Fit Check */}
          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Great Fit */}
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
                  <li key={index} className="flex items-start gap-3 text-off-white/70">
                    <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Not a Fit */}
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
                  <li key={index} className="flex items-start gap-3 text-off-white/70">
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
            initial={{ opacity: 0, y: 20 }}
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
                initial={{ opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="label-text text-gold">How We Help</span>
            <h2 className="mt-4 text-off-white">AI enablement built for high-trust work</h2>
          </motion.div>

          {/* Implementation Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {implementationPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
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

          {/* Proof Deliverables + Trust Handling */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* What you can point to internally */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy-light border border-white/10"
            >
              <h3 className="text-lg font-display text-gold mb-4">What you can point to internally</h3>
              <ul className="space-y-3">
                {proofDeliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white/70">
                    <FileText className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trust & Data Handling */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy-light border border-white/10"
            >
              <h3 className="text-lg font-display text-gold mb-4">Trust & Data Handling</h3>
              <ul className="space-y-3">
                {trustHandling.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white/70">
                    <Shield className="w-4 h-4 text-teal mt-1 flex-shrink-0" />
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
            initial={{ opacity: 0, y: 20 }}
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
                initial={{ opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, y: 20 }}
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
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-navy">Ready to lead your firm forward?</h2>
            <p className="mt-4 text-grey-body text-lg">
              Let's map a governance-led AI enablement plan that strengthens delivery, protects trust, and creates measurable leverage.
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
