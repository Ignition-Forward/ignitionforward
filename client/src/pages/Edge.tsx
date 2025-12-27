import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Check, Clock, Zap, FileText, ArrowRight, Users, Target, Sparkles, ChevronDown, Quote, Calculator, Calendar, Star, TrendingUp } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import SEO, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";
import TwinkleField from "@/components/TwinkleField";

/*
 * EDGE SERVICE PAGE - Executive AI Training
 * 9 Hours to AI Fluency
 * 
 * POSITIONING: This is a TRAINING PRODUCT, not consulting
 * Per CRO Analysis: High-margin, scalable training product
 * 
 * DESIGN PHILOSOPHY:
 * - Lead with transformation, not features
 * - Show ROI clearly and early
 * - Include social proof throughout
 * - Create urgency without being pushy ("By application only")
 * - Visual journey, not just text
 * - Position as premium executive training
 */

const transformation = {
  before: [
    "Hours spent on repetitive tasks",
    "Wondering where to start with AI",
    "Watching competitors move faster",
    "Generic ChatGPT experiments",
  ],
  after: [
    "2-3 workflows saving 5+ hours/week",
    "Clear AI roadmap for your role",
    "Practical skills you use daily",
    "Custom systems for YOUR work",
  ],
};

const process = [
  {
    step: 1,
    title: "Audit & Design",
    duration: "3 hours",
    description: "We map your current workflows, identify high-impact AI opportunities, and design 2-3 custom workflows tailored to your actual work.",
    outcome: "Clear picture of where AI creates the most value",
  },
  {
    step: 2,
    title: "Build & Install",
    duration: "3 hours",
    description: "We build the workflows together, install them into your tools, and run them on real work so you see immediate results.",
    outcome: "Working systems you can use tomorrow",
  },
  {
    step: 3,
    title: "Refine & Transfer",
    duration: "3 hours",
    description: "We refine based on real usage, document everything, and ensure you can run and modify these workflows independently.",
    outcome: "Complete ownership and confidence",
  },
];

const faqs = [
  {
    question: "What if I'm not technical?",
    answer: "Edge is designed for business leaders, not engineers. If you can use email and spreadsheets, you can do Edge. We focus on practical application, not coding.",
  },
  {
    question: "What tools will I learn?",
    answer: "We work with whatever tools make sense for your workflows—ChatGPT, Claude, custom GPTs, automation platforms. The specific tools matter less than the thinking frameworks.",
  },
  {
    question: "Can my team join?",
    answer: "Edge is designed for individuals or small groups (up to 3). For larger teams, we recommend starting with one leader who can then champion AI adoption internally.",
  },
  {
    question: "What if I already use ChatGPT?",
    answer: "Most people use AI at 10% of its potential. Edge takes you from casual user to systematic practitioner with workflows that compound over time.",
  },
  {
    question: "How is this different from online courses?",
    answer: "Courses teach generic skills. Edge builds YOUR specific workflows, with YOUR data, for YOUR role. You leave with working systems, not just knowledge.",
  },
];

const testimonial = {
  quote: "I went from spending 3 hours on client research to 20 minutes. Edge didn't just teach me AI—it changed how I work.",
  author: "Sarah Chen",
  role: "Managing Director, Boutique Consulting",
  metric: "5+ hours saved weekly",
};

// Animated counter component
function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return (
    <span ref={ref}>
      {count}{suffix}
    </span>
  );
}

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
          <span className="text-gold font-display text-lg">Edge</span>
          <span className="text-off-white/60">9 Hours to AI Fluency</span>
        </div>
        <div className="flex items-center gap-4">
          <span className="text-off-white font-bold">~$15K</span>
          <Link href="/contact" className="btn-gold text-sm py-2 px-4">
            Apply for Edge
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

export default function Edge() {
  const [showStickyCTA, setShowStickyCTA] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  // Track scroll for sticky CTA
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
        name: 'Edge - 9 Hours to AI Fluency',
        description: 'Install 2-3 AI workflows into your real day-to-day in just 9 hours. By application only. Average participant saves 5+ hours per week.',
        url: '/edge',
        price: '15000',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'How We Help', url: '/how-we-help' },
        { name: 'Edge', url: '/edge' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Edge - 9 Hours to AI Fluency"
        description="Install 2-3 AI workflows into your real day-to-day in just 9 hours. ~$15K investment, by application only. Average participant saves 5+ hours per week."
        canonical="/edge"
        structuredData={structuredData}
      />

      <StickyCTA visible={showStickyCTA} />
      
      {/* Hero Section - Lead with Transformation */}
      <section ref={heroRef} className="relative min-h-[85vh] flex items-center bg-navy overflow-hidden">
        {/* Animated background - Ambient Intelligence style */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 right-0 w-2/3 h-full bg-gradient-to-l from-gold/10 via-gold/5 to-transparent" />
          <div className="absolute bottom-0 left-0 w-1/2 h-1/2 bg-gradient-to-tr from-gold/5 to-transparent" />
        </div>
        
        {/* Smooth random twinkle field */}
        <TwinkleField />
        
        {/* Subtle Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-10 z-0" />
        
        <div className="container relative z-10 pt-24 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            {/* Left: Content */}
            <div>
              {/* Availability badge */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6"
              >
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-gold text-sm font-medium">3 spots available for January</span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.1 }}
              >
                <span className="label-text text-gold">Edge</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.2 }}
                className="mt-4 text-off-white"
              >
                From AI-Curious to <span className="text-gold">AI-Fluent</span> in 9 Hours
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.3 }}
                className="mt-6 text-xl text-off-white/80 leading-relaxed"
              >
                Walk away with 2-3 working AI workflows built for YOUR role, YOUR data, YOUR daily work. Not theory—systems you'll use tomorrow.
              </motion.p>

              {/* ROI Statement */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.4 }}
                className="mt-8 p-5 bg-white/5 rounded-xl border border-gold/20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <TrendingUp className="w-5 h-5 text-gold" />
                  <span className="text-gold font-medium">Average ROI</span>
                </div>
                <p className="text-off-white/80">
                  Edge graduates save <span className="text-gold font-bold">5+ hours per week</span>. 
                  At $200/hour, that's <span className="text-gold font-bold">$52,000/year</span> in recovered time.
                </p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.36, delay: 0.5 }}
                className="mt-8 flex flex-col sm:flex-row gap-4"
              >
                <Link href="/contact" className="btn-gold inline-flex items-center justify-center gap-2">
                  Apply for Edge
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <a href="#process" className="btn-outline-gold inline-flex items-center justify-center gap-2">
                  See How It Works
                  <ChevronDown className="w-5 h-5" />
                </a>
              </motion.div>
            </div>
            
            {/* Right: Premium Pricing Card */}
            <motion.div
              initial={{ opacity: 0, x: 30, rotateY: -5 }}
              animate={{ opacity: 1, x: 0, rotateY: 0 }}
              transition={{ duration: 0.36, delay: 0.4 }}
              className="relative"
            >
              {/* Glow effect */}
              <div className="absolute -inset-4 bg-gradient-to-r from-gold/20 via-gold/30 to-gold/20 rounded-3xl blur-2xl opacity-50" />
              
              <div className="relative p-8 lg:p-10 bg-gradient-to-br from-navy-light to-navy rounded-2xl border border-gold/40 overflow-hidden">
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gold/10 rounded-bl-full" />
                
                {/* Animated shine */}
                <motion.div
                  initial={{ x: "-100%", opacity: 0 }}
                  animate={{ x: "200%", opacity: 0.2 }}
                  transition={{ duration: 2.5, delay: 1.5, repeat: Infinity, repeatDelay: 6 }}
                  className="absolute inset-0 w-1/3 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"
                />
                
                <div className="relative">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-5 h-5 text-gold" />
                      <span className="text-gold text-sm font-medium uppercase tracking-wider">Investment</span>
                    </div>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-gold fill-gold" />
                      ))}
                    </div>
                  </div>
                  
                  {/* Price */}
                  <div className="mb-8">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl lg:text-6xl font-display text-off-white">~$15K</span>
                    </div>
                    <p className="text-off-white/60 mt-2">By application only • 4-6 clients/quarter</p>
                  </div>
                  
                  {/* What's included */}
                  <div className="space-y-4 mb-8">
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                        <Clock className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-off-white font-medium">9 hours over 2-3 weeks</div>
                        <div className="text-off-white/50 text-sm">Flexible to your schedule</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                        <Zap className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-off-white font-medium">2-3 working AI workflows</div>
                        <div className="text-off-white/50 text-sm">Built for your specific role</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                        <FileText className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-off-white font-medium">Complete documentation</div>
                        <div className="text-off-white/50 text-sm">Reference guides you'll actually use</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* CTA */}
                  <Link href="/contact" className="btn-gold w-full text-center flex items-center justify-center gap-2 text-lg py-4">
                    Claim Your Spot
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  
                  <p className="text-center text-off-white/40 text-sm mt-4">
                    30-minute fit call included • No obligation
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="py-6 bg-gold">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            <div className="text-center">
              <div className="text-3xl font-display text-navy font-bold">
                <AnimatedCounter value={50} suffix="+" />
              </div>
              <div className="text-navy/70 text-sm">Leaders trained</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-navy font-bold">
                <AnimatedCounter value={5} suffix="+" />
              </div>
              <div className="text-navy/70 text-sm">Hours saved weekly</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-navy font-bold">
                <AnimatedCounter value={9} />
              </div>
              <div className="text-navy/70 text-sm">Hours to fluency</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-display text-navy font-bold">100%</div>
              <div className="text-navy/70 text-sm">Completion rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Transformation Section - Before/After */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold-dark">The Transformation</span>
            <h2 className="mt-4 text-navy">Before Edge vs. After Edge</h2>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Before */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-gray-100 rounded-2xl border border-gray-200 relative"
            >
              <div className="absolute -top-3 left-6 px-4 py-1 bg-gray-400 text-white text-sm font-medium rounded-full">
                Before
              </div>
              <div className="mt-4 space-y-4">
                {transformation.before.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-3 text-gray-600"
                  >
                    <div className="w-2 h-2 bg-gray-400 rounded-full" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            {/* After */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-8 bg-navy rounded-2xl border-2 border-gold relative"
            >
              <div className="absolute -top-3 left-6 px-4 py-1 bg-gold text-navy text-sm font-bold rounded-full">
                After Edge
              </div>
              <div className="mt-4 space-y-4">
                {transformation.after.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.2 }}
                    className="flex items-center gap-3 text-off-white"
                  >
                    <Check className="w-5 h-5 text-gold flex-shrink-0" />
                    <span>{item}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
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
                <span className="text-gold text-sm font-medium">{testimonial.metric}</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="py-24 bg-navy scroll-mt-24">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold">The Process</span>
            <h2 className="mt-4 text-off-white">Three Sessions. Real Results.</h2>
            <p className="mt-4 text-off-white/70 max-w-2xl mx-auto">
              Each session builds on the last. By the end, you'll have working AI workflows you own forever.
            </p>
          </div>
          
          <div className="relative max-w-5xl mx-auto">
            {/* Connection line */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 -translate-y-1/2" />
            
            <div className="grid lg:grid-cols-3 gap-8">
              {process.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.36, delay: index * 0.2 }}
                  className="relative"
                >
                  {/* Step indicator */}
                  <div className="hidden lg:flex absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl items-center justify-center z-10 shadow-lg shadow-gold/30">
                    {step.step}
                  </div>
                  
                  <div className="p-8 bg-navy-light rounded-2xl border border-white/10 hover:border-gold/50 transition-all duration-300 h-full group">
                    <div className="lg:hidden text-5xl font-display text-gold/20 mb-4">{step.step}</div>
                    
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-2xl font-display text-off-white">Session {step.step}: {step.title}</h3>
                    </div>
                    
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 rounded-full mb-4">
                      <Clock className="w-4 h-4 text-gold" />
                      <span className="text-gold text-sm font-medium">{step.duration}</span>
                    </div>
                    
                    <p className="text-off-white/70 leading-relaxed mb-6">{step.description}</p>
                    
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex items-center gap-2 text-gold text-sm">
                        <Target className="w-4 h-4" />
                        <span className="font-medium">Outcome:</span>
                      </div>
                      <p className="text-off-white/80 mt-1">{step.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For */}
      <section className="py-24 bg-off-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="label-text text-gold-dark">Is Edge Right For You?</span>
              <h2 className="mt-4 text-navy">Edge is perfect if you're...</h2>
              
              <div className="mt-8 space-y-4">
                {[
                  { title: "Ready to lead AI adoption", desc: "You want to lead AI adoption, not just understand it" },
                  { title: "Hands-on learner", desc: "You want hands-on experience, not just strategy decks" },
                  { title: "Time is your bottleneck", desc: "Your executive time is the constraint, not budget" },
                  { title: "Learn by doing", desc: "You learn by doing, not by watching" },
                ].map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-200"
                  >
                    <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-gold" />
                    </div>
                    <div>
                      <div className="font-medium text-navy">{item.title}</div>
                      <div className="text-gray-600 text-sm mt-1">{item.desc}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            <div>
              <div className="p-8 bg-navy rounded-2xl">
                <h3 className="text-xl font-display text-off-white mb-6">Edge might NOT be for you if...</h3>
                <div className="space-y-3">
                  {[
                    "You want someone else to run AI for you",
                    "You're looking for a quick demo or overview",
                    "You can't commit 9 hours over 3 weeks",
                    "You need enterprise-wide transformation (see FAO or Forward Deployed)",
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3 text-off-white/70">
                      <div className="w-5 h-5 rounded-full border border-off-white/30 flex items-center justify-center">
                        <span className="text-xs">✕</span>
                      </div>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 pt-6 border-t border-white/10">
                  <p className="text-off-white/60 text-sm">
                    For enterprise transformation, explore our <Link href="/fractional-ai" className="text-gold hover:underline">Fractional AI Officer</Link> or <Link href="/forward-deployed" className="text-gold hover:underline">Forward Deployed</Link> services.
                  </p>
                </div>
              </div>
            </div>
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
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-off-white">Ready to get your edge?</h2>
              <p className="mt-4 text-off-white/70 text-lg">
                In 9 hours, you'll have working AI workflows that save you time every day. 
                The question isn't whether you can afford Edge—it's whether you can afford to wait.
              </p>
              
              <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10 inline-block">
                <div className="flex items-center gap-4 text-off-white">
                  <Calendar className="w-6 h-6 text-gold" />
                  <div className="text-left">
                    <div className="font-medium">What happens next?</div>
                    <div className="text-off-white/60 text-sm">30-minute fit call → Custom session design → Start within 2 weeks</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10">
                <CometCTA href="/contact" className="text-lg">
                  Apply for Edge
                </CometCTA>
              </div>
              
              <p className="mt-6 text-off-white/50 text-sm">
                Only 3 spots available for January • No obligation on the fit call
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
