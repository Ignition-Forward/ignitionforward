import { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Lightbulb, Wrench, User, Settings, Check, ArrowRight, Scale, TrendingUp, Building2, Rocket, Bot } from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * ABOUT PAGE - Interactive Path Navigation Design
 * Based on the reference HTML with 4 navigable paths:
 * 1. Why We Started - The problem we saw
 * 2. What We've Built - Systems & proof
 * 3. Who We Are - The team
 * 4. How We Work - Our approach
 */

type PathId = "why" | "built" | "who" | "how";

const paths = [
  { id: "why" as PathId, icon: Lightbulb, title: "Why We Started", subtitle: "The Problem We Saw" },
  { id: "built" as PathId, icon: Wrench, title: "What We've Built", subtitle: "Systems & Proof" },
  { id: "who" as PathId, icon: User, title: "Who We Are", subtitle: "The Team" },
  { id: "how" as PathId, icon: Settings, title: "How We Work", subtitle: "Our Approach" },
];

const segments = [
  "Founders & CEOs",
  "GPs & Fund Managers",
  "PE Portfolio Ops",
  "Family Offices",
];

const whyCards = [
  {
    icon: "🚫",
    title: "Pilot Purgatory",
    description: "Endless experiments that never reach production. We only build what we use ourselves—and we've been using these systems for 18+ months.",
    highlight: false,
  },
  {
    icon: "🔨",
    title: "Tool Obsession",
    description: "Chasing the latest AI tool instead of solving business problems. We start with the outcome, then build backward to what actually works.",
    highlight: false,
  },
  {
    icon: "📊",
    title: "No Operator Credibility",
    description: "Consultants who study AI but never deployed it themselves. We've co-founded companies to $600M+ revenue. We've raised $200M+. We've done this.",
    highlight: false,
  },
  {
    icon: "📈",
    title: "LP Reporting Grind",
    description: "Quarterly updates assembled from 14 spreadsheets. Fund admin handoffs that break. Reserve models that don't match reality. We've lived this at $10B+ AUM—and built systems to fix it.",
    highlight: true,
  },
  {
    icon: "⏰",
    title: "The Window Is Closing",
    description: "AI is restructuring the $10 trillion services market. Expert-led businesses that don't adapt will be commoditized—or absorbed by those who did.",
    highlight: false,
  },
];

const proofStats = [
  { value: "500+", label: "Clients served" },
  { value: "$3B+", label: "Capital raised for clients" },
  { value: "50%→85%", label: "Close rate with Maguire" },
  { value: "$10B+", label: "AUM experience" },
  { value: "3X", label: "Business growth in 2 yrs" },
];

const systems = [
  {
    badge: "Sales Intelligence",
    title: "Maguire",
    tagline: '"Close more. Grind less."',
    description: "AI sales coach and copilot for expert-led businesses. Built for Craig, used daily for 18 months. Not SaaS—a training model that learns your patterns.",
    examples: ["Pre-call intelligence briefs", "Relationship decay alerts", "Next-best-action recommendations"],
    stats: [{ value: "95%", label: "Close rate" }, { value: "232+", label: "Iterations" }],
  },
  {
    badge: "Knowledge Platform",
    title: "URU",
    tagline: '"Your expertise, amplified."',
    description: "Turn institutional knowledge into searchable, actionable intelligence. What partners know shouldn't walk out the door when they leave.",
    examples: ["Document intelligence", "Precedent search", "Knowledge capture"],
    stats: [{ value: "50+", label: "Deployments" }, { value: "3X", label: "Efficiency" }],
  },
  {
    badge: "Fund Operations",
    title: "GP Suite",
    tagline: '"LP season, handled."',
    description: "Reserve planning, LP reporting, fund admin coordination. Built from Brian's 7 years at Bain doing exactly this work.",
    examples: ["Automated LP updates", "Reserve model sync", "Fund admin oversight"],
    stats: [{ value: "50%", label: "Time saved" }, { value: "$10B+", label: "AUM managed" }],
  },
];

const gpUseCases = [
  { label: "LP Season", text: "Quarterly reports in hours, not weeks" },
  { label: "Fund Admin", text: "Transition and oversight support" },
  { label: "Reserve Planning", text: "Models that match reality" },
];

const founders = [
  {
    initials: "AM",
    name: "Andrew Moss",
    role: "Co-Founder & Principal",
    tagline: '"Strategic angel with emphasis on strategic."',
    bio: "Andrew served as Partner/COO for a $185M value-oriented hedge fund seeded by David Einhorn/Greenlight Capital, and as Assistant General Counsel at Highfields Capital ($10B+ AUM)—navigating the 2008 crisis from inside the room. His legal + institutional finance background gives him a lens most AI consultants simply don't have. He co-founded CustomInk (grew to $600M+ revenue), founded BuyWithMe (backed by Bain Capital and Matrix Partners), and has been a seed investor in three unicorns: Slice, Freshly, and HomeChef.",
    credentials: [
      { text: "Highfields ($10B+ AUM)", highlight: true },
      { text: "Greenlight/Einhorn-seeded Fund", highlight: true },
      { text: "NYU Law (JD)", highlight: false },
      { text: "Davis Polk", highlight: false },
      { text: "CustomInk Co-Founder", highlight: false },
      { text: "3 Unicorn Seeds", highlight: false },
    ],
    stats: [
      { value: "$10B+", label: "AUM Experience" },
      { value: "$200M+", label: "Capital Deployed" },
      { value: "$800M+", label: "In Exits" },
      { value: "25+", label: "Years Operating" },
    ],
  },
  {
    initials: "CG",
    name: "Craig Gainsboro",
    role: "Co-Founder & CEO, Ignition Consultants",
    tagline: '"Big Four sophistication with startup agility."',
    bio: "Craig founded Ignition Consultants after spending 15 years at PricewaterhouseCoopers, where he served as U.S. CFO for Tax and Advisory Lines of Service representing annual revenues of $4.5B combined. His unique Big Four combination from E&Y and PwC enabled him to develop a well-rounded set of expertise as a CFO. Craig built Ignition with a fundamental belief: growing companies needed more than generic advice—they needed a trusted partner completely aligned with their best interests.",
    credentials: [
      { text: "PwC (15 years)", highlight: false },
      { text: "Ernst & Young", highlight: false },
      { text: "US CFO, Tax & Advisory", highlight: false },
      { text: "$4.5B Revenue Managed", highlight: false },
    ],
    stats: [
      { value: "$4.5B", label: "Revenue Overseen" },
      { value: "25+", label: "Years Finance" },
      { value: "500+", label: "Clients Served" },
      { value: "$3B+", label: "Raised for Clients" },
    ],
  },
];

const brianMoran = {
  initials: "BM",
  name: "Brian Moran",
  role: "CFO & GP Practice Lead",
  bio: "7 years at Bain doing exactly what GPs and family offices need: fund admin oversight, budgeting/forecasting, reserve planning, tax/audit coordination. Brian leads IF's expansion into fund operations—the bridge between institutional rigor and AI-native systems.",
  bio2: "He's the person you call when you're moving to a new fund admin, need someone to quarterback LP season, or want to build reserve models that actually match reality.",
  tags: ["Bain (7 years)", "Fund Admin", "LP Reporting", "Reserve Planning", "Tax/Audit Coordination"],
};

const expertisePillars = [
  { icon: Scale, title: "Legal", items: "NYU Law JD\nDavis Polk (3 yrs)\n$10B+ Hedge Fund AGC" },
  { icon: TrendingUp, title: "Finance", items: "PwC US CFO\n$4.5B Revenue\nHedge Fund Partner/COO" },
  { icon: Building2, title: "Institutional", items: "Highfields ($10B+ AUM)\nGreenlight/Einhorn\nFund Operations" },
  { icon: Rocket, title: "Operator", items: "CustomInk ($600M+)\nBuyWithMe (Bain/Matrix)\nMultiple Exits" },
  { icon: Bot, title: "AI-Native", items: "Maguire (18mo prod)\nURU Platform\n232 Iterations" },
];

const principles = [
  { number: "01", title: "We deploy, not deck.", description: "No 80-slide recommendations that gather dust. We build systems that run on day one.", highlight: false },
  { number: "02", title: "Speed compounds.", description: "Every day of delay is competitive advantage lost. We move fast because the window is closing.", highlight: false },
  { number: "03", title: "Your edge, amplified.", description: "AI should multiply your expertise, not replace it. We build systems that make you more dangerous.", highlight: false },
  { number: "04", title: "Eat our own cooking.", description: "Maguire runs our firm. Everything we deploy, we use ourselves first.", highlight: false },
  { number: "05", title: "Confidentiality is infrastructure.", description: "Legal training informs everything. LP data, portfolio company financials, deal flow intel—it stays yours. We've handled sensitive information at $10B+ AUM. We know what's at stake.", highlight: true },
  { number: "06", title: "Not for everyone.", description: "We work with growth-minded leaders ready to move. If you want to wait and see, we're not the right fit.", highlight: false },
];

const flywheelSteps = ["Build", "Use", "Deploy", "Learn", "Repeat"];

/* Animated Counter Component */
function AnimatedStat({ value, label }: { value: string; label: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-2xl p-7 text-center border border-gray-200 hover:border-gold hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
    >
      <div className="text-4xl font-display text-navy">{value}</div>
      <div className="mt-2 text-sm text-gray-600 leading-snug">{label}</div>
    </motion.div>
  );
}

export default function About() {
  const [activePath, setActivePath] = useState<PathId>("why");
  const navRef = useRef<HTMLDivElement>(null);
  
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  const handlePathChange = (pathId: PathId) => {
    setActivePath(pathId);
    // Scroll to content
    navRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="About Us"
        description="Ignition Forward: Operators who advise, not consultants who theorize. 500+ clients served, $3B+ capital raised, $10B+ AUM experience. Legal training, successful exits, and AI practitioners."
        canonical="/about"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative bg-navy py-24 md:py-32 overflow-hidden">
        {/* Gold gradient overlay */}
        <div 
          className="absolute top-0 right-0 w-3/5 h-full pointer-events-none"
          style={{ background: 'linear-gradient(135deg, transparent 0%, rgba(201, 169, 98, 0.08) 100%)' }}
        />
        
        <div className="container relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="label-text text-gold"
          >
            About Ignition Forward
          </motion.p>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-off-white leading-tight"
          >
            Operators who <span className="text-gold">advise</span>.<br />
            Not consultants who theorize.
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-8 text-xl text-gray-300 max-w-3xl leading-relaxed"
          >
            We've built, financed, and scaled companies ourselves. Now we help growth-minded leaders move first—with AI systems we proved on ourselves.
          </motion.p>
          
          {/* Segments */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-12 flex flex-wrap gap-8"
          >
            {segments.map((segment) => (
              <div key={segment} className="flex items-center gap-3 text-gray-400">
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-sm">{segment}</span>
              </div>
            ))}
          </motion.div>
          
          {/* Prompt */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-12 text-gray-400 flex items-center gap-3"
          >
            <span>Choose your path below</span>
            <motion.span
              animate={{ y: [0, 6, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-gold"
            >
              ↓
            </motion.span>
          </motion.p>
        </div>
      </section>

      {/* Path Navigation */}
      <nav 
        ref={navRef}
        className="sticky top-0 z-50 bg-gray-50 border-b border-gray-200"
      >
        <div className="max-w-6xl mx-auto flex">
          {paths.map((path) => (
            <button
              key={path.id}
              onClick={() => handlePathChange(path.id)}
              className={`flex-1 py-6 px-4 flex flex-col items-center gap-2 border-b-[3px] transition-all duration-300 ${
                activePath === path.id
                  ? "bg-white text-navy border-gold"
                  : "bg-transparent text-gray-600 border-transparent hover:bg-white hover:text-navy"
              }`}
            >
              <path.icon className={`w-6 h-6 ${activePath === path.id ? "text-gold" : ""}`} />
              <span className="font-semibold text-sm md:text-base">{path.title}</span>
              <span className={`text-xs uppercase tracking-wider ${
                activePath === path.id ? "text-gold-dark" : "text-gray-400"
              }`}>
                {path.subtitle}
              </span>
            </button>
          ))}
        </div>
      </nav>

      {/* Path Content */}
      <AnimatePresence mode="wait">
        {/* WHY WE STARTED */}
        {activePath === "why" && (
          <motion.div
            key="why"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <section className="py-20 px-6 md:px-16">
              <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-20">
                  {/* Story */}
                  <div className="lg:pr-10">
                    <p className="label-text text-gold-dark">The Problem We Saw</p>
                    <h2 className="mt-4 text-navy">Expert services are trapped in a linear model.</h2>
                    
                    <div className="mt-8 space-y-6 text-gray-700 leading-relaxed">
                      <p>More expertise requires more experts. Slow. Expensive. Unscalable. We watched AI transform industries while expert-led businesses—law firms, consultancies, investment teams, fund managers—struggled to adapt.</p>
                      <p>The problem wasn't the technology. It was the implementation. Generic AI tools that don't understand how professionals actually work. Consultants who advise but don't deploy. Technology that creates more problems than it solves.</p>
                      <p><strong>We built Ignition Forward to bridge that gap.</strong> Not with slide decks. With systems that actually run. AI infrastructure that amplifies expertise instead of replacing it.</p>
                    </div>
                    
                    {/* Quote Block */}
                    <div className="mt-10 bg-navy rounded-2xl p-10 relative overflow-hidden">
                      <span className="absolute -top-5 left-5 text-[120px] font-display text-gold/15 leading-none">"</span>
                      <p className="relative z-10 text-lg text-white italic leading-relaxed">
                        When the world was falling apart in 2008, I was in the room at a $10B+ hedge fund. That experience taught me what's at stake when systems fail—and what it takes to build ones that don't.
                      </p>
                      <p className="mt-6 text-gold font-semibold">Andrew Moss</p>
                      <p className="text-gray-400 text-sm">Co-Founder, Ignition Forward</p>
                    </div>
                  </div>
                  
                  {/* Why Cards */}
                  <div className="space-y-6">
                    {whyCards.map((card, index) => (
                      <motion.div
                        key={card.title}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className={`p-8 rounded-2xl border transition-all duration-300 hover:border-gold hover:shadow-lg ${
                          card.highlight
                            ? "bg-gradient-to-br from-navy to-navy-light border-gold"
                            : "bg-gray-50 border-gray-200"
                        }`}
                      >
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl ${
                          card.highlight ? "bg-gold" : "bg-navy"
                        }`}>
                          {card.icon}
                        </div>
                        <h3 className={`mt-5 text-lg font-bold ${card.highlight ? "text-gold" : "text-navy"}`}>
                          {card.title}
                        </h3>
                        <p className={`mt-3 text-sm leading-relaxed ${card.highlight ? "text-gray-300" : "text-gray-600"}`}>
                          {card.description}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* WHAT WE'VE BUILT */}
        {activePath === "built" && (
          <motion.div
            key="built"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <section className="py-20 px-6 md:px-16 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                  <p className="label-text text-gold-dark">The Proof</p>
                  <h2 className="mt-4 text-navy">We let our track record speak.</h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                    No fluff. No vague promises. Here's what we've built, who we serve, and what we've delivered.
                  </p>
                </div>
                
                {/* Proof Grid */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-5 mb-16">
                  {proofStats.map((stat) => (
                    <AnimatedStat key={stat.label} value={stat.value} label={stat.label} />
                  ))}
                </div>
                
                {/* Systems Showcase */}
                <div className="grid md:grid-cols-3 gap-8 mb-12">
                  {systems.map((system, index) => (
                    <motion.div
                      key={system.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-navy rounded-3xl p-10 relative overflow-hidden"
                    >
                      {/* Gold gradient corner */}
                      <div className="absolute top-0 right-0 w-36 h-36 bg-gradient-radial from-gold/15 to-transparent pointer-events-none" />
                      
                      <span className="inline-block px-3 py-1.5 bg-gold/20 rounded text-xs font-semibold uppercase tracking-wider text-gold">
                        {system.badge}
                      </span>
                      
                      <h3 className="mt-5 text-3xl font-display text-white">{system.title}</h3>
                      <p className="mt-2 text-sm text-gold">{system.tagline}</p>
                      <p className="mt-5 text-gray-300 text-sm leading-relaxed">{system.description}</p>
                      
                      {/* Examples */}
                      <div className="mt-6 bg-white/5 rounded-xl p-5">
                        <p className="text-xs font-semibold text-gold uppercase tracking-wider mb-3">Examples</p>
                        {system.examples.map((example) => (
                          <p key={example} className="text-sm text-gray-200 py-2 border-b border-white/5 last:border-0 italic">
                            {example}
                          </p>
                        ))}
                      </div>
                      
                      {/* Stats */}
                      <div className="mt-6 pt-5 border-t border-white/10 flex gap-6">
                        {system.stats.map((stat) => (
                          <div key={stat.label} className="text-center">
                            <div className="text-xl font-bold text-gold">{stat.value}</div>
                            <div className="text-xs text-gray-400 uppercase tracking-wider">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* GP Use Cases Box */}
                <div className="bg-white border-2 border-gold rounded-3xl p-10">
                  <div className="flex items-center gap-4 mb-8">
                    <div className="w-14 h-14 bg-navy rounded-2xl flex items-center justify-center text-2xl">
                      📊
                    </div>
                    <div>
                      <h4 className="text-xl font-bold text-navy">For GPs & Fund Managers</h4>
                      <p className="text-gray-600 text-sm">Specialized systems for fund operations</p>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-3 gap-6">
                    {gpUseCases.map((useCase) => (
                      <div key={useCase.label} className="p-5 bg-gray-50 rounded-xl">
                        <p className="text-xs font-semibold text-gold-dark uppercase tracking-wider mb-2">{useCase.label}</p>
                        <p className="text-navy font-medium">{useCase.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* WHO WE ARE */}
        {activePath === "who" && (
          <motion.div
            key="who"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <section className="py-20 px-6 md:px-16">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                  <p className="label-text text-gold-dark">The Team</p>
                  <h2 className="mt-4 text-navy">Lived experience. Not theories.</h2>
                  <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
                    Legal training. Successful exits. Hedge fund operations. $10B+ AUM experience. We've been where you are—and built our way forward.
                  </p>
                </div>
                
                {/* Founders Grid */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  {founders.map((founder, index) => (
                    <motion.div
                      key={founder.name}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="bg-gray-50 rounded-3xl overflow-hidden"
                    >
                      {/* Header */}
                      <div className="bg-navy p-10 flex gap-8">
                        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-gold-dark to-gold flex items-center justify-center text-4xl font-display text-navy flex-shrink-0">
                          {founder.initials}
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white">{founder.name}</h3>
                          <p className="text-gold text-sm mt-1">{founder.role}</p>
                          <p className="text-gray-300 text-sm italic mt-4">{founder.tagline}</p>
                        </div>
                      </div>
                      
                      {/* Body */}
                      <div className="p-10">
                        <p className="text-gray-700 text-sm leading-relaxed mb-8">{founder.bio}</p>
                        
                        {/* Credentials */}
                        <div className="flex flex-wrap gap-3 mb-8">
                          {founder.credentials.map((cred) => (
                            <span
                              key={cred.text}
                              className={`px-4 py-2 rounded-lg text-sm font-medium ${
                                cred.highlight
                                  ? "bg-navy text-gold"
                                  : "bg-white border border-gray-200 text-navy"
                              }`}
                            >
                              {cred.text}
                            </span>
                          ))}
                        </div>
                        
                        {/* Stats */}
                        <div className="grid grid-cols-2 gap-4">
                          {founder.stats.map((stat) => (
                            <div key={stat.label} className="bg-white rounded-xl p-5 text-center border border-gray-200">
                              <div className="text-2xl font-display text-navy">{stat.value}</div>
                              <div className="text-xs text-gray-600 mt-1">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Brian Moran */}
                <div className="bg-gray-50 rounded-3xl p-10 border border-gray-200 mb-12">
                  <div className="mb-8">
                    <p className="text-sm font-semibold text-gold-dark uppercase tracking-wider">GP Practice Lead</p>
                    <h3 className="mt-2 text-2xl font-bold text-navy">Dedicated expertise for fund managers</h3>
                  </div>
                  
                  <div className="flex flex-col md:flex-row gap-8 bg-white rounded-2xl p-8 border border-gray-200">
                    <div className="w-20 h-20 rounded-full bg-navy flex items-center justify-center text-3xl font-display text-gold flex-shrink-0 mx-auto md:mx-0">
                      {brianMoran.initials}
                    </div>
                    <div className="text-center md:text-left">
                      <h4 className="text-xl font-bold text-navy">{brianMoran.name}</h4>
                      <p className="text-gold-dark text-sm">{brianMoran.role}</p>
                      <p className="text-gray-700 text-sm leading-relaxed mt-4">{brianMoran.bio}</p>
                      <p className="text-gray-700 text-sm leading-relaxed mt-4">{brianMoran.bio2}</p>
                      <div className="flex flex-wrap gap-2 mt-4 justify-center md:justify-start">
                        {brianMoran.tags.map((tag) => (
                          <span key={tag} className="px-3 py-1.5 bg-gray-100 rounded-md text-xs font-medium text-navy">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Expertise Spectrum */}
                <div className="bg-navy rounded-3xl p-16">
                  <div className="text-center mb-12">
                    <h3 className="text-3xl font-display text-white">The Full Spectrum</h3>
                    <p className="mt-4 text-gray-300 max-w-2xl mx-auto">
                      Most advisors have one or two of these. We have all five—integrated and battle-tested.
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                    {expertisePillars.map((pillar, index) => (
                      <motion.div
                        key={pillar.title}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="text-center p-8 bg-white/5 rounded-2xl border border-gold/20 hover:bg-gold/10 hover:border-gold hover:-translate-y-1 transition-all duration-300"
                      >
                        <div className="w-14 h-14 bg-gold rounded-2xl flex items-center justify-center mx-auto mb-5">
                          <pillar.icon className="w-6 h-6 text-navy" />
                        </div>
                        <h4 className="text-gold font-bold mb-3">{pillar.title}</h4>
                        <p className="text-gray-300 text-sm whitespace-pre-line leading-relaxed">{pillar.items}</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}

        {/* HOW WE WORK */}
        {activePath === "how" && (
          <motion.div
            key="how"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <section className="py-20 px-6 md:px-16 bg-gray-50">
              <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="text-center mb-16">
                  <p className="label-text text-gold-dark">Our Approach</p>
                  <h2 className="mt-4 text-navy">Six principles. Zero exceptions.</h2>
                </div>
                
                {/* Principles Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                  {principles.map((principle, index) => (
                    <motion.div
                      key={principle.number}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative p-10 rounded-3xl border overflow-hidden group transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                        principle.highlight
                          ? "bg-navy border-gold"
                          : "bg-white border-gray-200 hover:border-gold"
                      }`}
                    >
                      {/* Gold line on hover */}
                      <div className={`absolute top-0 left-0 w-full h-1 bg-gold transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ${
                        principle.highlight ? "scale-x-100" : ""
                      }`} />
                      
                      <div className={`text-5xl font-display mb-4 ${
                        principle.highlight ? "text-gold/30" : "text-gray-200"
                      }`}>
                        {principle.number}
                      </div>
                      <h3 className={`text-xl font-bold mb-3 ${
                        principle.highlight ? "text-gold" : "text-navy"
                      }`}>
                        {principle.title}
                      </h3>
                      <p className={`text-sm leading-relaxed ${
                        principle.highlight ? "text-gray-300" : "text-gray-600"
                      }`}>
                        {principle.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
                
                {/* Flywheel Section */}
                <div className="bg-navy rounded-3xl p-16 text-center">
                  <h3 className="text-3xl font-display text-white mb-4">The Compounding Loop</h3>
                  <p className="text-gray-300 max-w-2xl mx-auto mb-10">
                    Each client makes the entire system smarter. Every engagement, every workflow, every piece of data compounds the advantage.
                  </p>
                  
                  <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6">
                    {flywheelSteps.map((step, index) => (
                      <div key={step} className="flex items-center gap-4">
                        <motion.div
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          className="px-6 py-4 bg-gold/15 border border-gold rounded-xl text-gold font-semibold"
                        >
                          {step}
                        </motion.div>
                        {index < flywheelSteps.length - 1 && (
                          <span className="text-gold text-xl hidden md:block">→</span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CTA Section */}
      <section className="bg-navy py-20 text-center">
        <div className="container max-w-3xl">
          <h2 className="text-off-white">Ready to build your edge?</h2>
          <p className="mt-4 text-gray-300 text-lg">
            We help growth-minded leaders move first. If you're ready, let's talk.
          </p>
          <div className="mt-8">
            <Link href="/contact" className="btn-gold inline-flex items-center gap-2">
              Move Forward
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
