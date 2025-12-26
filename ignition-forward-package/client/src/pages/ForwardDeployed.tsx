import { motion, useInView } from "framer-motion";
import { Check, ArrowRight, Users, Settings, Database, Clock, Shield, Zap, ChevronDown, Quote, Target, Layers, Code, FileCheck, Calendar, Building, Award, Briefcase } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import SEO, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * FORWARD DEPLOYED PAGE - Implementation Credibility Design
 * Build WITH You, Not FOR You
 * 
 * DESIGN PHILOSOPHY:
 * - Lead with outcomes, not process
 * - Show real project examples
 * - Clear pricing guidance
 * - IP ownership clarity
 * - Team credibility
 */

const projectTypes = [
  {
    title: "Client Intelligence Systems",
    description: "AI-powered systems that capture, analyze, and surface insights from client interactions",
    outcomes: ["360° client view", "Proactive opportunity alerts", "Relationship health scoring"],
    timeline: "8-12 weeks",
    example: "Built for a $50M consulting firm → 40% increase in cross-sell revenue",
  },
  {
    title: "Knowledge Capture & Retrieval",
    description: "Systems that turn your experts' knowledge into searchable, actionable intelligence",
    outcomes: ["Expertise preservation", "Faster onboarding", "Consistent quality"],
    timeline: "10-14 weeks",
    example: "Built for a PE firm → 60% reduction in due diligence time",
  },
  {
    title: "Workflow Automation",
    description: "End-to-end automation of repetitive processes that drain your team's time",
    outcomes: ["Hours reclaimed weekly", "Error reduction", "Scalable operations"],
    timeline: "6-10 weeks",
    example: "Built for a law firm → 15 hours/week saved per partner",
  },
];

const teamRoles = [
  {
    role: "Engagement Lead",
    description: "Senior strategist who owns your outcomes. Your single point of accountability.",
    icon: Target,
  },
  {
    role: "AI Engineer",
    description: "Hands-on builder who architects and implements your systems.",
    icon: Code,
  },
  {
    role: "Integration Specialist",
    description: "Ensures seamless connection with your existing tools and workflows.",
    icon: Settings,
  },
];

const timeline = [
  {
    phase: "Weeks 1-2",
    title: "Discovery & Design",
    activities: ["Deep-dive into your workflows", "Technical architecture planning", "Success metrics definition", "Stakeholder alignment"],
    deliverable: "Project blueprint & timeline",
  },
  {
    phase: "Weeks 3-8",
    title: "Build & Iterate",
    activities: ["Core system development", "Weekly demos & feedback", "Integration work", "User testing"],
    deliverable: "Working system in staging",
  },
  {
    phase: "Weeks 9-12",
    title: "Deploy & Transfer",
    activities: ["Production deployment", "Team training", "Documentation", "Knowledge transfer"],
    deliverable: "Live system you own",
  },
  {
    phase: "Weeks 13-16",
    title: "Optimize & Support",
    activities: ["Performance monitoring", "Refinement based on usage", "Extended support", "Handoff completion"],
    deliverable: "Optimized, stable system",
  },
];

const guarantees = [
  {
    title: "You Own Everything",
    description: "All code, data, and IP belongs to you. No vendor lock-in, no licensing fees.",
    icon: Shield,
  },
  {
    title: "Milestone-Based Payments",
    description: "Pay as we deliver. No large upfront commitments.",
    icon: FileCheck,
  },
  {
    title: "Knowledge Transfer Included",
    description: "Your team will understand and maintain what we build.",
    icon: Users,
  },
];

const pricingTiers = [
  {
    tier: "Forward Deployed Mini",
    range: "$25K - $50K",
    duration: "4-8 weeks",
    description: "1-2 focused AI implementations with clear scope",
    examples: ["Document automation", "Client intake system", "Single workflow optimization"],
    bestFor: "Companies with a specific need to solve",
  },
  {
    tier: "Forward Deployed Core",
    range: "$75K - $150K",
    duration: "8-16 weeks",
    description: "Full AI transformation with multiple integrated systems",
    examples: ["Client intelligence platform", "Knowledge management system", "Operations hub"],
    bestFor: "Companies ready for major AI initiative",
  },
  {
    tier: "Enterprise Transformation",
    range: "$150K+",
    duration: "12+ weeks",
    description: "Enterprise-wide AI implementation with multiple teams",
    examples: ["Full digital transformation", "Multi-system integration", "Company-wide AI adoption"],
    bestFor: "PE portfolio companies or enterprise clients",
  },
];

const testimonial = {
  quote: "They didn't just build us a system—they taught us how to think about AI. Six months later, we're extending what they built on our own.",
  author: "Jennifer Walsh",
  role: "COO, Investment Advisory Firm",
  result: "System extended 3x internally",
};

const faqs = [
  {
    question: "How is this different from hiring a dev shop?",
    answer: "Dev shops build to spec. We build for outcomes. We start with your business goals, not a requirements doc. And we stay until the system is working in production, not just deployed.",
  },
  {
    question: "What if the project scope changes?",
    answer: "It will. That's why we work in iterative cycles with weekly demos. We adjust as we learn, and you approve changes before we implement them. No surprise bills.",
  },
  {
    question: "Do we need technical staff to work with you?",
    answer: "No. We work directly with business stakeholders. If you have technical staff, great—we'll collaborate. If not, we handle everything and train someone on your team to maintain it.",
  },
  {
    question: "What happens after the project ends?",
    answer: "You own everything. We provide documentation, training, and 30 days of post-launch support. Many clients keep us on retainer for ongoing enhancements, but it's not required.",
  },
  {
    question: "Can you work with our existing systems?",
    answer: "Yes. We integrate with whatever you're using—Salesforce, HubSpot, custom databases, legacy systems. Integration is a core part of what we do.",
  },
];

// Sticky CTA component
function StickyCTA({ visible }: { visible: boolean }) {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: visible ? 0 : -100, opacity: visible ? 1 : 0 }}
      transition={{ duration: 0.3 }}
      className="fixed top-20 left-0 right-0 z-40 bg-navy/95 backdrop-blur-sm border-b border-gold/20 py-3"
    >
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-gold font-display text-lg">Forward Deployed</span>
          <span className="text-off-white/60 hidden sm:inline">Custom AI Systems</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-off-white font-bold hidden sm:inline">From $50K</span>
          <Link href="/contact" className="btn-gold text-sm py-2 px-4">
            Scope Your Build
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// FAQ Accordion
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
            <span className="font-medium text-navy">{faq.question}</span>
            <ChevronDown className={`w-5 h-5 text-gold transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
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

export default function ForwardDeployed() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const heroBottom = heroRef.current.getBoundingClientRect().bottom;
        setShowStickyCTA(heroBottom < 0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateServiceSchema({
        name: 'Forward Deployed - Custom AI Systems',
        description: 'Custom AI systems built with you, not for you. From $50K. You own everything we build. Typical timeline: 8-16 weeks.',
        url: '/forward-deployed',
        price: '50000',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'How We Help', url: '/how-we-help' },
        { name: 'Forward Deployed', url: '/forward-deployed' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Forward Deployed - Custom AI Systems Built With You"
        description="Custom AI systems from $50K. You own everything. 8-16 week delivery. Milestone-based payments. Knowledge transfer included."
        canonical="/forward-deployed"
        structuredData={structuredData}
      />

      <StickyCTA visible={showStickyCTA} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gold/10 via-gold/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-teal/5 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-4xl">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">Capacity for 2 new projects in Q1</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="label-text text-gold">Forward Deployed</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-off-white"
            >
              Custom AI Systems <span className="text-gold">You Own Forever</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-6 text-xl text-off-white/80 leading-relaxed max-w-3xl"
            >
              We embed with your team to build AI systems tailored to your business. 
              Not off-the-shelf software. Not endless consulting. Working systems that create lasting competitive advantage.
            </motion.p>

            {/* Key benefits */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 grid sm:grid-cols-3 gap-4"
            >
              {[
                { icon: Shield, text: "You own all IP" },
                { icon: Clock, text: "8-16 week delivery" },
                { icon: FileCheck, text: "Milestone payments" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <item.icon className="w-5 h-5 text-gold" />
                  <span className="text-off-white/80 text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-gold inline-flex items-center justify-center gap-2">
                Scope Your Build
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#what-we-build" className="btn-outline-gold inline-flex items-center justify-center gap-2">
                See What We Build
                <ChevronDown className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Problem/Solution Section */}
      <section className="py-20 bg-navy-light">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
            {/* Problem */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-red-500/30 bg-red-500/5"
            >
              <h3 className="font-display text-2xl text-[#ef4444] mb-4">The Problem</h3>
              <p className="text-off-white/80 text-lg mb-6">
                Custom AI is too expensive. SaaS is too rigid.
              </p>
              <div className="space-y-3">
                {[
                  "Enterprise AI projects: $500K+ and 12+ months",
                  "Off-the-shelf tools: 80% of features you don't need",
                  "Consultants: Recommendations, not results",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-off-white/60">
                    <div className="w-2 h-2 bg-red-400 rounded-full" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-gold/30 bg-gold/5"
            >
              <h3 className="font-display text-2xl text-gold mb-4">Our Solution</h3>
              <p className="text-off-white/80 text-lg mb-6">
                <span className="text-gold font-semibold">80% proven core</span>
                <span className="text-off-white/60"> + </span>
                <span className="text-gold font-semibold">20% custom to you</span>
                <span className="text-off-white/60"> = bespoke at scale.</span>
              </p>
              <div className="space-y-3">
                {[
                  "Leverage patterns from 50+ implementations",
                  "Customize for your specific workflows",
                  "Deliver in weeks, not months",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3 text-off-white/80">
                    <Check className="w-5 h-5 text-gold" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <Link 
                href="/maguire" 
                className="inline-flex items-center gap-2 mt-6 text-gold font-medium hover:underline underline-offset-4"
              >
                See how it works <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What We Build Section */}
      <section id="what-we-build" className="py-24 bg-off-white scroll-mt-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold-dark">What We Build</span>
            <h2 className="mt-4 text-navy">Systems That Create Competitive Advantage</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Every project is custom, but here are the patterns we see most often.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {projectTypes.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all duration-300 group"
              >
                <h3 className="text-xl font-display text-navy mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-6">{project.description}</p>

                <div className="mb-6">
                  <div className="text-sm font-medium text-navy mb-2">Outcomes:</div>
                  <div className="space-y-2">
                    {project.outcomes.map((outcome) => (
                      <div key={outcome} className="flex items-center gap-2 text-gray-600 text-sm">
                        <Check className="w-4 h-4 text-gold" />
                        <span>{outcome}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                    <Clock className="w-4 h-4" />
                    <span>Typical timeline: {project.timeline}</span>
                  </div>
                  <div className="p-3 bg-gold/5 rounded-lg border border-gold/20">
                    <div className="text-xs text-gold-dark font-medium mb-1">Real example:</div>
                    <p className="text-sm text-gray-700">{project.example}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />
            <blockquote className="text-2xl lg:text-3xl font-display text-off-white leading-relaxed">
              "{testimonial.quote}"
            </blockquote>
            <div className="mt-8 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                <span className="text-gold font-bold">{testimonial.author.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <div className="text-left">
                <div className="text-off-white font-medium">{testimonial.author}</div>
                <div className="text-off-white/60 text-sm">{testimonial.role}</div>
              </div>
              <div className="ml-4 px-3 py-1 bg-gold/20 rounded-full">
                <span className="text-gold text-sm font-medium">{testimonial.result}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold-dark">Investment</span>
            <h2 className="mt-4 text-navy">Transparent Pricing</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Every project is scoped individually, but here's what to expect.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {pricingTiers.map((tier, index) => (
              <motion.div
                key={tier.tier}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`p-8 rounded-2xl ${
                  index === 1 
                    ? "bg-navy border-2 border-gold" 
                    : "bg-white border border-gray-200"
                }`}
              >
                {index === 1 && (
                  <div className="text-center mb-4">
                    <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                      Most Common
                    </span>
                  </div>
                )}
                
                <div className="text-center mb-6">
                  <h3 className={`text-xl font-display mb-2 ${index === 1 ? "text-gold" : "text-navy"}`}>
                    {tier.tier}
                  </h3>
                  <div className={`text-3xl font-display ${index === 1 ? "text-off-white" : "text-navy"}`}>
                    {tier.range}
                  </div>
                  <div className={`text-sm mt-1 ${index === 1 ? "text-off-white/60" : "text-gray-500"}`}>
                    {tier.duration}
                  </div>
                </div>

                <p className={`text-sm mb-6 ${index === 1 ? "text-off-white/70" : "text-gray-600"}`}>
                  {tier.description}
                </p>

                <div className={`text-sm font-medium mb-3 ${index === 1 ? "text-off-white" : "text-navy"}`}>
                  Examples:
                </div>
                <div className="space-y-2">
                  {tier.examples.map((example) => (
                    <div 
                      key={example} 
                      className={`flex items-center gap-2 text-sm ${
                        index === 1 ? "text-off-white/70" : "text-gray-600"
                      }`}
                    >
                      <span className={`w-1.5 h-1.5 rounded-full ${index === 1 ? "bg-gold" : "bg-gold"}`} />
                      {example}
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500 text-sm">
              All projects include: Discovery, implementation, testing, documentation, training, and 30-day post-launch support.
            </p>
          </div>
        </div>
      </section>

      {/* Guarantees Section */}
      <section className="py-20 bg-navy-light">
        <div className="container">
          <div className="text-center mb-12">
            <span className="label-text text-gold">Our Commitments</span>
            <h2 className="mt-4 text-off-white">What We Guarantee</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {guarantees.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-display text-off-white mb-2">{item.title}</h3>
                <p className="text-off-white/60 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold">The Journey</span>
            <h2 className="mt-4 text-off-white">From Kickoff to Production</h2>
            <p className="mt-4 text-off-white/70 max-w-2xl mx-auto">
              A typical 12-week engagement. Shorter or longer depending on scope.
            </p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            {/* Timeline line */}
            <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

            <div className="grid lg:grid-cols-4 gap-8">
              {timeline.map((phase, index) => (
                <motion.div
                  key={phase.phase}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  {/* Phase dot */}
                  <div className="hidden lg:flex absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gold text-navy font-bold items-center justify-center z-10 text-sm">
                    {index + 1}
                  </div>

                  <div className="p-6 bg-navy-light rounded-2xl border border-white/10 h-full">
                    <div className="text-gold text-sm font-medium mb-2">{phase.phase}</div>
                    <h3 className="text-lg font-display text-off-white mb-4">{phase.title}</h3>
                    <ul className="space-y-2 mb-4">
                      {phase.activities.map((activity) => (
                        <li key={activity} className="text-off-white/70 text-sm flex items-start gap-2">
                          <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                          {activity}
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t border-white/10">
                      <div className="text-xs text-gold-dark font-medium">Deliverable:</div>
                      <div className="text-off-white/80 text-sm">{phase.deliverable}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Your Team Section */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold-dark">Your Team</span>
            <h2 className="mt-4 text-navy">Who You'll Work With</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              A dedicated team that becomes an extension of yours.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {teamRoles.map((role, index) => (
              <motion.div
                key={role.role}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-8 bg-white rounded-2xl border border-gray-200 text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mx-auto mb-4">
                  <role.icon className="w-8 h-8 text-gold" />
                </div>
                <h3 className="text-lg font-display text-navy mb-2">{role.role}</h3>
                <p className="text-gray-600 text-sm">{role.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="label-text text-gold-dark">Common Questions</span>
              <h2 className="mt-4 text-navy">Everything you need to know</h2>
            </div>

            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-24 bg-navy-light">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-off-white">Ready to build something?</h2>
              <p className="mt-4 text-off-white/70 text-lg">
                Tell us about your challenge. We'll tell you if we can help—and what it would take.
              </p>

              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 inline-block">
                <div className="flex items-center gap-4 text-off-white">
                  <Calendar className="w-6 h-6 text-gold" />
                  <div className="text-left">
                    <div className="font-medium">What happens next?</div>
                    <div className="text-off-white/60 text-sm">Scoping call → Project proposal → Kickoff within 2 weeks</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CometCTA href="/contact" className="text-lg">
                  Scope Your Build
                </CometCTA>
              </div>

              <p className="mt-6 text-off-white/50 text-sm">
                Capacity for 2 new projects in Q1 • No obligation on the scoping call
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
