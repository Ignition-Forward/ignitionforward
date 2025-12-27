import { motion, useInView } from "framer-motion";
import { Check, X, Calendar, Shield, Users, Lightbulb, ArrowRight, Clock, Briefcase, ChevronDown, Quote, Target, Zap, FileText, TrendingUp, Building, Award } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import SEO, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * FRACTIONAL AI OFFICER PAGE - Leadership Positioning Design
 * AI Leadership Without the Full-Time Commitment
 * 
 * DESIGN PHILOSOPHY:
 * - Position as strategic leadership, not consulting
 * - Clear cost comparison vs. full-time hire
 * - Show what "a month in the life" looks like
 * - Recommend the right engagement level
 * - Include board-ready credibility
 */

const comparisonData = {
  fullTime: {
    salary: "$350-500K",
    benefits: "$50-100K",
    recruiting: "$75-150K",
    rampTime: "3-6 months",
    totalYear1: "$400K+",
  },
  fractional: {
    monthly: "$15-30K",
    annual: "$180K-$360K",
    startTime: "Immediate",
    flexibility: "Scale up/down",
  },
};

// Guide-aligned comparison table data
const comparisonTable = [
  { metric: "Annual Cost", fullTime: "$400K+", fractional: "$180K-$360K" },
  { metric: "Time to Impact", fullTime: "3-6 months", fractional: "Immediate" },
  { metric: "Flexibility", fullTime: "Fixed commitment", fractional: "Scale up/down" },
  { metric: "Experience", fullTime: "Single perspective", fractional: "Cross-industry insights" },
  { metric: "Network", fullTime: "Limited", fractional: "Extensive vendor/talent network" },
];

const engagementModels = [
  {
    id: "advisory",
    title: "Advisory",
    hours: "8-12 hours/month",
    price: "$8,000 - $12,000",
    priceNote: "/month",
    description: "High-level strategic guidance for companies with internal execution capability",
    bestFor: "Companies with technical teams who need strategic direction",
    includes: [
      "Monthly strategy sessions",
      "Quarterly board presentations",
      "Vendor evaluation support",
      "On-call advisory access",
    ],
    notIncluded: ["Hands-on implementation", "Team management"],
  },
  {
    id: "active",
    title: "Active",
    hours: "20-30 hours/month",
    price: "$15,000 - $25,000",
    priceNote: "/month",
    description: "Hands-on AI leadership for companies building their AI function",
    bestFor: "Companies ready to build AI capabilities with guidance",
    recommended: true,
    includes: [
      "Weekly leadership meetings",
      "Team training and coaching",
      "Implementation oversight",
      "Governance framework development",
      "Vendor management",
      "Progress reporting",
    ],
    notIncluded: ["Full-time presence"],
  },
  {
    id: "intensive",
    title: "Intensive",
    hours: "40+ hours/month",
    price: "$30,000+",
    priceNote: "/month",
    description: "Full fractional CAIO role for companies in transformation",
    bestFor: "Companies undergoing significant AI transformation",
    includes: [
      "All Active benefits",
      "Direct team management",
      "Cross-functional coordination",
      "Change management leadership",
      "Executive team integration",
      "Board-level reporting",
    ],
    notIncluded: [],
  },
];

const monthTimeline = [
  {
    week: 1,
    title: "Align & Prioritize",
    activities: ["Strategy review with leadership", "Stakeholder alignment sessions", "Priority setting for the month", "Risk assessment update"],
  },
  {
    week: 2,
    title: "Execute & Guide",
    activities: ["Implementation oversight", "Vendor coordination calls", "Team coaching sessions", "Technical decision support"],
  },
  {
    week: 3,
    title: "Review & Refine",
    activities: ["Progress review meetings", "Roadmap refinement", "Governance check-ins", "Documentation updates"],
  },
  {
    week: 4,
    title: "Report & Plan",
    activities: ["Board/leadership update prep", "Next month planning", "Success metrics review", "Strategic recommendations"],
  },
];

const deliverables = [
  { title: "Use Case Prioritization", desc: "Ranked by business impact, not technical novelty", icon: Target },
  { title: "AI Strategy Roadmap", desc: "12-month plan with quarterly milestones", icon: TrendingUp },
  { title: "Governance Framework", desc: "Policies, risk management, compliance", icon: Shield },
  { title: "Vendor Evaluation", desc: "Objective analysis of AI tools and partners", icon: Briefcase },
  { title: "Team Development Plan", desc: "Skills assessment and training roadmap", icon: Users },
  { title: "Board Presentations", desc: "Executive-ready AI progress reports", icon: FileText },
  { title: "Implementation Oversight", desc: "Technical guidance and quality assurance", icon: Zap },
];

const testimonial = {
  quote: "The difference is they've done this themselves. They're not theorizing about what might work — they're showing us what already works.",
  author: "Karan Kanwar",
  role: "CEO, Flowlie",
  result: "AI-native operations",
};

const faqs = [
  {
    question: "How is this different from AI consulting?",
    answer: "Consultants advise. We lead. As your Fractional AI Officer, we're accountable for outcomes, not just recommendations. We attend your leadership meetings, manage your AI initiatives, and own the results.",
  },
  {
    question: "What if we outgrow fractional?",
    answer: "That's the goal. When you're ready for a full-time AI leader, we help you hire the right person and ensure a smooth transition. Many clients keep us on in an advisory capacity afterward.",
  },
  {
    question: "How quickly can we start?",
    answer: "Most engagements begin within 1-2 weeks of signing. We'll start with a deep-dive into your current state and have a preliminary roadmap within the first month.",
  },
  {
    question: "Do you work with our existing team?",
    answer: "Absolutely. We integrate with your leadership team and work alongside your technical staff. A key part of our role is building internal AI capability, not creating dependency.",
  },
  {
    question: "What industries do you work with?",
    answer: "We specialize in expert-led businesses: professional services, founder-led companies, and PE portfolio companies. Our experience spans legal, consulting, financial services, and B2B technology.",
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
          <span className="text-gold font-display text-lg">Fractional AI Officer</span>
          <span className="text-off-white/60 hidden sm:inline">AI Leadership on Your Terms</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-off-white font-bold hidden sm:inline">From $15K/mo</span>
          <Link href="/contact" className="btn-gold text-sm py-2 px-4">
            Schedule a Conversation
          </Link>
        </div>
      </div>
    </motion.div>
  );
}

// Guide-aligned comparison table component
function ComparisonTable() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 12 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      transition={{ duration: 0.36 }}
      className="overflow-hidden rounded-2xl border border-white/10"
    >
      <table className="w-full">
        <thead>
          <tr className="bg-navy-light">
            <th className="py-4 px-6 text-left text-off-white/60 font-medium">Metric</th>
            <th className="py-4 px-6 text-center text-off-white/60 font-medium">Full-Time Hire</th>
            <th className="py-4 px-6 text-center text-gold font-medium">Fractional AI Officer</th>
          </tr>
        </thead>
        <tbody>
          {comparisonTable.map((row, index) => (
            <motion.tr
              key={row.metric}
              initial={{ opacity: 0, x: -10 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="border-t border-white/10"
            >
              <td className="py-4 px-6 text-off-white font-medium">{row.metric}</td>
              <td className="py-4 px-6 text-center text-off-white/60">{row.fullTime}</td>
              <td className="py-4 px-6 text-center text-gold font-medium">{row.fractional}</td>
            </motion.tr>
          ))}
        </tbody>
      </table>
    </motion.div>
  );
}

// Animated comparison
function CostComparison() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div ref={ref} className="grid md:grid-cols-2 gap-8">
      {/* Full-Time Column */}
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
        transition={{ duration: 0.36 }}
        className="p-8 bg-gray-100 rounded-2xl border border-gray-200 relative overflow-hidden"
      >
        {/* Strike-through effect */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
          transition={{ duration: 0.36, delay: 0.5 }}
          className="absolute top-1/2 left-0 right-0 h-0.5 bg-red-400 origin-left"
        />

        <div className="text-center mb-6">
          <div className="text-sm text-gray-500 uppercase tracking-wider mb-2">Full-Time CAIO</div>
          <div className="text-3xl font-display text-gray-400 line-through">{comparisonData.fullTime.totalYear1}</div>
          <div className="text-sm text-gray-400 mt-1">Year 1 total cost</div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-gray-400">
            <span className="line-through">Base salary</span>
            <span className="line-through">{comparisonData.fullTime.salary}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span className="line-through">Benefits & equity</span>
            <span className="line-through">{comparisonData.fullTime.benefits}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span className="line-through">Recruiting fees (25-30%)</span>
            <span className="line-through">{comparisonData.fullTime.recruiting}</span>
          </div>
          <div className="flex justify-between text-gray-400">
            <span className="line-through">Time to productivity</span>
            <span className="line-through">{comparisonData.fullTime.rampTime}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex items-center gap-2 text-red-500 text-sm">
            <X className="w-4 h-4" />
            <span>Fixed commitment, limited flexibility</span>
          </div>
        </div>
      </motion.div>

      {/* Fractional Column */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
        transition={{ duration: 0.36, delay: 0.2 }}
        className="p-8 bg-navy rounded-2xl border-2 border-gold relative"
      >
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold text-navy text-sm font-bold rounded-full">
          Recommended
        </div>

        <div className="text-center mb-6">
          <div className="text-sm text-gold uppercase tracking-wider mb-2">Fractional AI Officer</div>
          <div className="text-3xl font-display text-off-white">{comparisonData.fractional.monthly}</div>
          <div className="text-sm text-off-white/60 mt-1">per month • flexible commitment</div>
        </div>

        <div className="space-y-3 text-sm">
          <div className="flex justify-between text-off-white/80">
            <span>Annual investment</span>
            <span className="text-gold">{comparisonData.fractional.annual}</span>
          </div>
          <div className="flex justify-between text-off-white/80">
            <span>Time to start</span>
            <span className="text-gold">{comparisonData.fractional.startTime}</span>
          </div>
          <div className="flex justify-between text-off-white/80">
            <span>Recruiting fees</span>
            <span className="text-gold">$0</span>
          </div>
          <div className="flex justify-between text-off-white/80">
            <span>Flexibility</span>
            <span className="text-gold">{comparisonData.fractional.flexibility}</span>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 text-gold text-sm">
            <Check className="w-4 h-4" />
            <span>Save 40-60% vs. full-time hire</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Engagement Model Cards
function EngagementModels() {
  const [selectedModel, setSelectedModel] = useState("active");

  return (
    <div className="space-y-6">
      {/* Model Selector */}
      <div className="flex flex-wrap gap-3 justify-center">
        {engagementModels.map((model) => (
          <button
            key={model.id}
            onClick={() => setSelectedModel(model.id)}
            className={`px-6 py-3 rounded-full font-medium transition-all ${
              selectedModel === model.id
                ? "bg-gold text-navy"
                : "bg-white border border-gray-200 text-gray-600 hover:border-gold/50"
            }`}
          >
            {model.title}
            {model.recommended && selectedModel !== model.id && (
              <span className="ml-2 text-xs bg-gold/20 text-gold px-2 py-0.5 rounded-full">Recommended</span>
            )}
          </button>
        ))}
      </div>

      {/* Selected Model Details */}
      {engagementModels.map((model) => (
        model.id === selectedModel && (
          <motion.div
            key={model.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className={`p-8 rounded-2xl ${model.recommended ? "bg-navy border-2 border-gold" : "bg-white border border-gray-200"}`}
          >
            <div className="grid lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <h3 className={`text-2xl font-display ${model.recommended ? "text-gold" : "text-navy"}`}>
                    {model.title}
                  </h3>
                  {model.recommended && (
                    <span className="px-3 py-1 bg-gold/20 text-gold text-xs font-medium rounded-full">
                      Most Popular
                    </span>
                  )}
                </div>
                
                <div className="flex items-baseline gap-2 mb-4">
                  <span className={`text-4xl font-display ${model.recommended ? "text-off-white" : "text-navy"}`}>
                    {model.price}
                  </span>
                  <span className={model.recommended ? "text-off-white/60" : "text-gray-500"}>
                    {model.priceNote}
                  </span>
                </div>
                
                <p className={`mb-4 ${model.recommended ? "text-off-white/70" : "text-gray-600"}`}>
                  {model.description}
                </p>
                
                <div className={`p-4 rounded-xl ${model.recommended ? "bg-white/5" : "bg-gray-50"}`}>
                  <div className={`text-sm font-medium mb-1 ${model.recommended ? "text-gold" : "text-navy"}`}>
                    Best for:
                  </div>
                  <p className={`text-sm ${model.recommended ? "text-off-white/70" : "text-gray-600"}`}>
                    {model.bestFor}
                  </p>
                </div>
                
                <div className={`text-sm mt-4 ${model.recommended ? "text-off-white/60" : "text-gray-500"}`}>
                  {model.hours}
                </div>
              </div>
              
              <div>
                <div className={`text-sm font-medium mb-3 ${model.recommended ? "text-off-white" : "text-navy"}`}>
                  What's included:
                </div>
                <div className="space-y-2">
                  {model.includes.map((item) => (
                    <div key={item} className={`flex items-center gap-2 ${model.recommended ? "text-off-white/80" : "text-gray-600"}`}>
                      <Check className={`w-4 h-4 flex-shrink-0 ${model.recommended ? "text-gold" : "text-green-500"}`} />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                
                {model.notIncluded.length > 0 && (
                  <>
                    <div className={`text-sm font-medium mt-6 mb-3 ${model.recommended ? "text-off-white/60" : "text-gray-400"}`}>
                      Not included:
                    </div>
                    <div className="space-y-2">
                      {model.notIncluded.map((item) => (
                        <div key={item} className={`flex items-center gap-2 ${model.recommended ? "text-off-white/40" : "text-gray-400"}`}>
                          <X className="w-4 h-4 flex-shrink-0" />
                          <span className="text-sm">{item}</span>
                        </div>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 items-center justify-between">
              <p className={`text-sm ${model.recommended ? "text-off-white/60" : "text-gray-500"}`}>
                All engagements include our AI Governance Framework
              </p>
              <Link 
                href="/contact" 
                className={model.recommended ? "btn-gold" : "btn-outline-gold"}
              >
                Discuss {model.title}
              </Link>
            </div>
          </motion.div>
        )
      ))}
    </div>
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
          className="border border-white/10 rounded-xl overflow-hidden bg-navy-light"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-white/5 transition-colors"
          >
            <span className="font-medium text-off-white">{faq.question}</span>
            <ChevronDown className={`w-5 h-5 text-gold transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-5 pb-5"
            >
              <p className="text-off-white/70 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function FractionalAI() {
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
        name: 'Fractional AI Officer',
        description: 'AI leadership without the full-time commitment. Strategic guidance, implementation oversight, and team development from experienced AI practitioners.',
        url: '/fractional-ai',
        price: '15000',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'How We Help', url: '/how-we-help' },
        { name: 'Fractional AI Officer', url: '/fractional-ai' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Fractional AI Officer - AI Leadership Without the Full-Time Commitment"
        description="Get strategic AI leadership from $15K/month. Save 40-60% vs. a full-time hire. Start within 1 week. Governance framework included."
        canonical="/fractional-ai"
        structuredData={structuredData}
      />

      <StickyCTA visible={showStickyCTA} />

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-2/3 h-full bg-gradient-to-r from-gold/5 via-gold/3 to-transparent" />
          <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-gradient-to-tl from-gold/5 to-transparent" />
        </div>

        <div className="container relative z-10 pt-24 pb-16">
          <div className="max-w-4xl">
            {/* Availability badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">2 engagement slots available for Q1</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.1 }}
            >
              <span className="label-text text-gold">Fractional AI Officer</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.2 }}
              className="mt-4 text-off-white"
            >
              AI Leadership Without the <span className="text-gold">$400K Hire</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.3 }}
              className="mt-6 text-xl text-off-white/80 leading-relaxed max-w-3xl"
            >
              Get a seasoned AI leader who owns your AI strategy, guides implementation, and builds your team's capabilities—at a fraction of the cost of a full-time hire.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.35 }}
              className="mt-4 text-lg text-gold font-display italic"
            >
              We help you move faster than your competition—with AI that works.
            </motion.p>

            {/* Key benefits */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.4 }}
              className="mt-8 grid sm:grid-cols-3 gap-4"
            >
              {[
                { icon: TrendingUp, text: "Save 40-60% vs. full-time" },
                { icon: Clock, text: "Start within 1 week" },
                { icon: Shield, text: "Governance included" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                  <item.icon className="w-5 h-5 text-gold" />
                  <span className="text-off-white/80 text-sm">{item.text}</span>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.5 }}
              className="mt-10 flex flex-col sm:flex-row gap-4"
            >
              <Link href="/contact" className="btn-gold inline-flex items-center justify-center gap-2">
                Schedule a Conversation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#engagement-models" className="btn-outline-gold inline-flex items-center justify-center gap-2">
                See Engagement Options
                <ChevronDown className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Cost Comparison Section */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold-dark">The Smart Choice</span>
            <h2 className="mt-4 text-navy">Full-Time vs. Fractional: The Math</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Get senior AI leadership at a fraction of the cost—with the flexibility to scale as your needs evolve.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <CostComparison />
          </div>

          {/* Guide-aligned table comparison */}
          <div className="max-w-4xl mx-auto mt-16">
            <div className="text-center mb-8">
              <span className="label-text text-gold-dark">THE MATH</span>
              <h3 className="mt-2 text-2xl font-display text-navy">Side-by-Side Comparison</h3>
            </div>
            <div className="bg-navy rounded-2xl p-1">
              <ComparisonTable />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="py-20 bg-navy-light">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
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

      {/* What You Get Section */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold">What You Get</span>
            <h2 className="mt-4 text-off-white">Deliverables, Not Just Advice</h2>
            <p className="mt-4 text-off-white/70 max-w-2xl mx-auto">
              Every engagement produces tangible outputs you can use, share with your board, and build upon.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deliverables.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 bg-navy-light rounded-xl border border-white/10 hover:border-gold/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-gold" />
                </div>
                <h3 className="text-lg font-display text-off-white mb-2">{item.title}</h3>
                <p className="text-off-white/60 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* A Typical Month Section */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold-dark">What To Expect</span>
            <h2 className="mt-4 text-navy">A Month in the Life</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Consistent engagement, clear deliverables, measurable progress. Here's what a typical month looks like.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {monthTimeline.map((week, index) => (
              <motion.div
                key={week.week}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {/* Week number */}
                <div className="absolute -top-3 left-4 px-3 py-1 bg-gold text-navy text-sm font-bold rounded-full">
                  Week {week.week}
                </div>
                
                <div className="p-6 pt-8 bg-white rounded-xl border border-gray-200 h-full">
                  <h3 className="text-lg font-display text-navy mb-4">{week.title}</h3>
                  <ul className="space-y-2">
                    {week.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-2 text-gray-600 text-sm">
                        <span className="w-1.5 h-1.5 bg-gold rounded-full mt-1.5 flex-shrink-0" />
                        {activity}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Engagement Models Section */}
      <section id="engagement-models" className="py-24 bg-gray-50 scroll-mt-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold-dark">Engagement Models</span>
            <h2 className="mt-4 text-navy">Choose Your Level of Partnership</h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              Flexible options designed to match your stage and needs. Scale up or down as you grow.
            </p>
          </div>

          <div className="max-w-5xl mx-auto">
            <EngagementModels />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 bg-navy">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="label-text text-gold">Common Questions</span>
              <h2 className="mt-4 text-off-white">Everything you need to know</h2>
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-off-white">Ready for AI leadership?</h2>
              <p className="mt-4 text-off-white/70 text-lg">
                Get the strategic guidance you need without the full-time commitment. 
                We'll help you build AI capabilities that compound over time.
              </p>

              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 inline-block">
                <div className="flex items-center gap-4 text-off-white">
                  <Calendar className="w-6 h-6 text-gold" />
                  <div className="text-left">
                    <div className="font-medium">What happens next?</div>
                    <div className="text-off-white/60 text-sm">30-minute fit call → Scope your needs → Start within 1-2 weeks</div>
                  </div>
                </div>
              </div>

              <div className="mt-10">
                <CometCTA href="/contact" className="text-lg">
                  Schedule a Conversation
                </CometCTA>
              </div>

              <p className="mt-6 text-off-white/50 text-sm">
                2 engagement slots available for Q1 • No obligation on the fit call
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
