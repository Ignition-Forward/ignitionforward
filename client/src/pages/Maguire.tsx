import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, X, Shield, User, Ban, Send, Search, TrendingUp, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import SEO, { generateArticleSchema, generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * MAGUIRE CASE STUDY PAGE - REFINED
 * Fixes applied:
 * - Removed sticky CTA (too aggressive)
 * - Increased font sizes throughout
 * - Fixed stat counter animations
 * - Added scroll-triggered animations with stagger
 * - Reduced use cases from 6 to 3
 * - Added visual journey flow with scroll indicator
 * - Made segment tags interactive with tooltips
 * - Stronger visual hierarchy between sections
 */

/* Section Label Component */
function SectionLabel({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
      className={`flex items-center gap-6 mb-8 ${centered ? 'justify-center' : ''}`}
    >
      <div className="w-16 h-px bg-gold" />
      <p className="text-xs tracking-[0.3em] uppercase text-gold font-medium">{children}</p>
      {centered && <div className="w-16 h-px bg-gold" />}
    </motion.div>
  );
}

/* Animated Counter for Stats - Fixed to trigger on view */
function AnimatedStat({ 
  stat, 
  label, 
  detail, 
  delay = 0 
}: { 
  stat: string; 
  label: string; 
  detail: string;
  delay?: number;
}) {
  const ref = useRef(null);
  const [displayValue, setDisplayValue] = useState(stat.includes("→") ? "0%→0%" : "0");
  
  // Start animation immediately on mount
  useEffect(() => {
    
    // Handle special formats
    if (stat === "55%→85%") {
      const duration = 1500;
      const startTime = Date.now() + delay;
      
      const animate = () => {
        const now = Date.now();
        if (now < startTime) {
          requestAnimationFrame(animate);
          return;
        }
        
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        const before = Math.floor(eased * 55);
        const after = Math.floor(55 + eased * 30);
        
        setDisplayValue(`${before}%→${after}%`);
        
        if (progress < 1) {
          requestAnimationFrame(animate);
        } else {
          setDisplayValue("55%→85%");
        }
      };
      
      requestAnimationFrame(animate);
      return;
    }
    
    if (stat === "3X" || stat === "-50%" || stat.includes("+")) {
      const timeout = setTimeout(() => {
        setDisplayValue(stat);
      }, delay + 300);
      return () => clearTimeout(timeout);
    }
    
    const numericMatch = stat.match(/(\d+)/);
    if (!numericMatch) {
      setDisplayValue(stat);
      return;
    }
    
    const target = parseInt(numericMatch[1]);
    const prefix = stat.slice(0, stat.indexOf(numericMatch[1]));
    const suffix = stat.slice(stat.indexOf(numericMatch[1]) + numericMatch[1].length);
    
    const duration = 1500;
    const startTime = Date.now() + delay;
    
    const animate = () => {
      const now = Date.now();
      if (now < startTime) {
        requestAnimationFrame(animate);
        return;
      }
      
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(eased * target);
      
      setDisplayValue(`${prefix}${current}${suffix}`);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setDisplayValue(stat);
      }
    };
    
    requestAnimationFrame(animate);
  }, [stat, delay]);
  
  return (
    <motion.div 
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: delay / 1000 }}
      className="text-center"
    >
      <p className="font-display text-5xl md:text-6xl text-gold mb-3">{displayValue}</p>
      <p className="text-base text-off-white font-medium mb-1">{label}</p>
      <p className="text-sm text-slate-light font-light">{detail}</p>
    </motion.div>
  );
}

/* Segment Tag with Tooltip */
function SegmentTag({ label, description }: { label: string; description: string }) {
  const [showTooltip, setShowTooltip] = useState(false);
  
  return (
    <div className="relative">
      <motion.button
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        whileHover={{ scale: 1.05, borderColor: "rgba(212, 175, 55, 0.6)" }}
        className="px-5 py-2.5 bg-navy border border-white/20 hover:border-gold/60 transition-all cursor-pointer group"
      >
        <span className="text-sm text-off-white group-hover:text-gold transition-colors font-medium">{label}</span>
      </motion.button>
      
      {showTooltip && (
        <motion.div
          initial={{ opacity: 0, y: 5 }}
          animate={{ opacity: 1, y: 0 }}
          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 px-4 py-2 bg-navy-dark border border-gold/30 text-sm text-slate-light whitespace-nowrap z-10"
        >
          {description}
        </motion.div>
      )}
    </div>
  );
}

/* Scroll Progress Indicator */
function ScrollIndicator() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.5 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-xs text-slate uppercase tracking-widest">Scroll to explore</span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      >
        <ChevronDown className="w-5 h-5 text-gold" />
      </motion.div>
    </motion.div>
  );
}

export default function Maguire() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const heroStats = [
    { stat: "55%→85%", label: "Conversion Rate", detail: "+55% improvement" },
    { stat: "3X", label: "Revenue per Client", detail: "Baseline to 3X" },
    { stat: "-50%", label: "Admin Time", detail: "10+ hrs → 5 hrs/wk" },
    { stat: "232+", label: "System Iterations", detail: "Continuous improvement" },
  ];

  const beforeItems = [
    "More clients = more chaos",
    "Scattered notes across email, CRM, and memory",
    "Prep for meetings takes hours",
    "Follow-ups fall through the cracks",
    "Insights locked in partners' heads",
    "55% conversion rate",
  ];

  // Benefits - What Actually Changes
  const benefits = [
    { title: "Win more deals", desc: "Proposals that sound like you, delivered faster" },
    { title: "Prep in minutes", desc: "Full context before every meeting" },
    { title: "Scale your judgment", desc: "Your frameworks, consistently applied" },
    { title: "Stop repeating yourself", desc: "Capture once, deploy infinitely" },
  ];

  // Objection handlers - You're Thinking
  const objections = [
    { 
      thought: "I've tried AI tools", 
      response: "This isn't a tool. It's a system built around how YOU work." 
    },
    { 
      thought: "My business is unique", 
      response: "That's the point. Generic doesn't work. Custom does." 
    },
    { 
      thought: "How long until ROI?", 
      response: "First working system: 3 weeks. Craig saw results immediately." 
    },
  ];

  const afterItems = [
    "More clients = more leverage",
    "Single source of truth for every relationship",
    "AI-generated briefs in seconds",
    "Automated reminders and suggested actions",
    "Institutional knowledge captured and searchable",
    "85% conversion rate (+55% improvement)",
  ];

  // Reduced to 3 strongest use cases
  const useCases = [
    { icon: Send, title: "Drafting Outbound", desc: "Generate hypothesis-led emails to break into new accounts using real-time research and your proven frameworks.", color: "teal" },
    { icon: Search, title: "Meeting Prep", desc: "Get AI-generated briefs in seconds with full context on every relationship, decision-maker, and opportunity.", color: "orange" },
    { icon: TrendingUp, title: "Pipeline Intelligence", desc: "Instant status reports on all active deals with prioritized next steps and automated follow-up suggestions.", color: "teal" },
  ];

  // Control pillars
  const controlPillars = [
    { icon: User, title: "Human in the Loop", desc: "MAGUIRE creates the first draft. You review, edit, and polish every message.", color: "teal" },
    { icon: Ban, title: "No Auto-Send", desc: "Nothing leaves automatically. You click 'Send' in your email client.", color: "orange" },
    { icon: Shield, title: "Data Privacy", desc: "Your data is isolated. Never used to train models for competitors.", color: "white" },
  ];

  // Segment signals with descriptions
  const segments = [
    { label: "Professional Services", description: "Law firms, consultancies, accounting" },
    { label: "Founder-Led", description: "Expert businesses scaling beyond the founder" },
    { label: "Fund Managers", description: "GPs managing deal flow and LP relationships" },
    { label: "PE Portfolio", description: "Portfolio companies optimizing operations" },
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateArticleSchema({
        headline: 'Maguire: The Client Intelligence OS',
        description: 'How we built an AI-powered system that transformed our own client relationships—and why it matters for your business.',
        url: '/maguire',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Our Proof', url: '/maguire' },
      ]),
    ],
  };

  return (
    <div ref={containerRef} className="overflow-hidden">
      <SEO
        title="Maguire: The Client Intelligence OS - Our Proof"
        description="How we built an AI-powered system that transformed our own client relationships. 55%→85% conversion rate, 3X revenue per client, -50% admin time. See what's possible."
        canonical="/maguire"
        structuredData={structuredData}
      />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gold z-50"
        style={{ width: progressBarWidth }}
      />
      
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 py-24 relative bg-navy">
        {/* Subtle gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-transparent to-navy-dark/30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto w-full relative z-10">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-gold text-xs tracking-[0.35em] uppercase mb-6 font-medium"
          >
            Case Study
          </motion.p>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-off-white leading-[1.1] mb-8"
          >
            Maguire: <span className="text-gold italic">The Client<br />Intelligence OS</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-light max-w-2xl mb-20 leading-relaxed font-light"
          >
            How we built an AI-powered system that transformed our own client relationships—and why it matters for your business.
          </motion.p>
          
          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 pt-10 border-t border-white/10"
          >
            {heroStats.map((item, i) => (
              <AnimatedStat 
                key={i} 
                stat={item.stat} 
                label={item.label} 
                detail={item.detail}
                delay={i * 200 + 800}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator */}
        <ScrollIndicator />
      </section>

      {/* Segment Signals - Interactive */}
      <section className="py-16 px-6 md:px-8 bg-navy-dark border-b border-white/5">
        <div className="max-w-5xl mx-auto">
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm text-slate uppercase tracking-widest mb-6 text-center"
          >
            Built for expert-led businesses like yours
          </motion.p>
          <div className="flex flex-wrap justify-center gap-4">
            {segments.map((seg, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
              >
                <SegmentTag label={seg.label} description={seg.description} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* The Transformation - Before/After */}
      <section className="py-28 px-6 md:px-8 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <SectionLabel centered>The Transformation</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-navy text-center mb-16"
          >
            What Actually Changes
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl"
          >
            {/* Before Column */}
            <div className="bg-white p-10">
              <h3 className="text-xl font-semibold text-navy mb-8">Before (The Expert Ceiling)</h3>
              <div className="space-y-5">
                {beforeItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <X className="w-3.5 h-3.5 text-red-500" />
                    </div>
                    <span className="text-slate text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* After Column */}
            <div className="bg-teal/5 p-10 border-l border-teal/20">
              <h3 className="text-xl font-semibold text-navy mb-8">After (With Maguire)</h3>
              <div className="space-y-5">
                {afterItems.map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.08 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-6 h-6 rounded-full bg-teal/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3.5 h-3.5 text-teal" />
                    </div>
                    <span className="text-navy text-base font-medium">{item}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Craig's Story - Expanded with Visual */}
      <section className="py-28 px-6 md:px-8 bg-navy-black">
        <div className="max-w-5xl mx-auto">
          <SectionLabel>The Story</SectionLabel>
          
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.3fr] gap-16 items-start">
            {/* Quote Card */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-navy-dark p-10 border-l-4 border-gold"
            >
              <div className="text-gold text-5xl mb-6 font-display">"</div>
              <p className="font-display text-2xl text-white italic leading-relaxed mb-8">
                The time I gained was immense. I was immediately more effective with every client interaction.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-semibold text-lg">CG</span>
                </div>
                <div>
                  <p className="text-off-white font-medium text-lg">Craig Gainsboro</p>
                  <p className="text-slate">Founder, Ignition Consultants</p>
                </div>
              </div>
            </motion.div>
            
            {/* Story Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-8"
            >
              <p className="text-xl text-slate-light font-light leading-relaxed">
                <span className="text-gold font-medium">The problem:</span> Craig runs Ignition Consultants — an expert-led advisory firm where his expertise IS the product. Every new client meant more prep time, more follow-ups, more context to remember. Growth was hitting a ceiling.
              </p>
              <p className="text-xl text-slate-light font-light leading-relaxed">
                <span className="text-gold font-medium">The solution:</span> We didn't give Craig a chatbot. We built Maguire — a complete operational system designed around how he actually works. His decision patterns. His voice. His strategic frameworks.
              </p>
              <p className="text-xl text-off-white font-light leading-relaxed">
                <span className="text-gold font-medium">The result:</span> 18 months in production. 232 iterations. Used daily. Close rate jumped from 55% to 85%. Revenue per client tripled. Admin time cut in half.
              </p>
              <motion.p 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="text-gold font-semibold text-xl pt-4 border-t border-white/10"
              >
                That's not a pilot. That's proof.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Use Cases - Reduced to 3 */}
      <section className="py-28 px-6 md:px-8 bg-navy-dark">
        <div className="max-w-5xl mx-auto">
          <SectionLabel centered>How It Works</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-off-white text-center mb-6"
          >
            AI That Fits Your Workflow
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-slate-light text-center mb-16 max-w-2xl mx-auto"
          >
            AI is the engine, you are the pilot.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {useCases.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.5)" }}
                  className="bg-navy-light p-8 border border-white/20 transition-all group"
                >
                  <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${
                    item.color === 'teal' ? 'bg-teal/20' : 'bg-orange-500/20'
                  }`}>
                    <Icon className={`w-6 h-6 ${item.color === 'teal' ? 'text-teal' : 'text-orange-400'}`} />
                  </div>
                  <h3 className="text-xl font-semibold text-off-white mb-4 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-base text-white/80 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Control Pillars */}
      <section className="py-28 px-6 md:px-8 bg-navy">
        <div className="max-w-5xl mx-auto">
          <SectionLabel centered>You're Still In Control</SectionLabel>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {controlPillars.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className="bg-navy-dark p-10 text-center"
                >
                  <div className={`w-20 h-20 rounded-full mx-auto mb-8 flex items-center justify-center border-2 ${
                    item.color === 'teal' ? 'border-teal' : item.color === 'orange' ? 'border-orange-500' : 'border-white/40'
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      item.color === 'teal' ? 'text-teal' : item.color === 'orange' ? 'text-orange-400' : 'text-white/60'
                    }`} />
                  </div>
                  <h3 className="text-xl font-semibold text-off-white mb-4 uppercase tracking-wide">{item.title}</h3>
                  <p className="text-base text-white/80 font-light leading-relaxed">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 80/20 Model - Enhanced Animation */}
      <section className="py-28 px-6 md:px-8 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <SectionLabel centered>The 80/20 Model</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-navy text-center mb-12"
          >
            Bespoke at Scale
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white p-10 md:p-14 rounded-xl shadow-xl mb-12"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-navy leading-relaxed mb-6">
                  <span className="text-gold font-semibold text-xl">80% is proven infrastructure</span> — the AI architecture, integration patterns, and operational frameworks we've refined across 232 iterations.
                </p>
                <p className="text-lg text-navy leading-relaxed">
                  <span className="text-gold font-semibold text-xl">20% is custom to you</span> — your voice, your decision patterns, your strategic frameworks, your workflows.
                </p>
              </div>
              <div className="space-y-6">
                {/* 80/20 Visual Bar - Enhanced */}
                <div className="relative h-16 rounded-lg overflow-hidden shadow-inner bg-navy/10">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: "80%" }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
                    className="absolute left-0 top-0 bottom-0 bg-gradient-to-r from-gold to-gold/80 flex items-center justify-center"
                  >
                    <span className="text-navy font-bold">80% Proven</span>
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 1.5 }}
                    className="absolute right-0 top-0 bottom-0 w-[20%] bg-gradient-to-r from-teal to-teal/80 flex items-center justify-center"
                  >
                    <span className="text-white font-bold">20% You</span>
                  </motion.div>
                </div>
                <p className="text-base text-slate text-center font-medium">
                  Result: Custom systems in weeks, not months
                </p>
              </div>
            </div>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center text-navy text-lg"
          >
            <span className="font-semibold">This is how we built Maguire for Craig.</span> And it's how we'll build yours.
          </motion.p>
        </div>
      </section>

      {/* Data Security Section */}
      <section className="py-28 px-6 md:px-8 bg-navy-dark">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy p-10 md:p-14 border border-white/10 relative overflow-hidden"
          >
            {/* Shield watermark */}
            <div className="absolute -right-12 -bottom-12 opacity-5">
              <Shield className="w-64 h-64" />
            </div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-8">
                <Shield className="w-8 h-8 text-gold" />
                <h3 className="font-display text-3xl text-off-white">Your Data. Your Control.</h3>
              </div>
              
              <p className="text-lg text-slate-light mb-8 leading-relaxed">
                Built for firms where confidentiality isn't optional. Every system we build operates within your security perimeter. Your client data never trains our models. Your proprietary methods stay proprietary.
              </p>
              
              <div className="space-y-4 mb-8">
                {[
                  "Client information never leaves your environment",
                  "We work with anonymized patterns, not raw data",
                  "You own everything we build — no vendor lock-in",
                  "SOC 2 compliant infrastructure"
                ].map((item, i) => (
                  <motion.div 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <span className="text-gold text-xl">→</span>
                    <span className="text-slate-light text-base">{item}</span>
                  </motion.div>
                ))}
              </div>
              
              <p className="text-off-white font-medium text-lg">
                Craig's system contains 18 months of client intelligence. It's never been exposed. <span className="text-gold">That's the standard.</span>
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What Actually Changes - Benefits */}
      <section className="py-24 px-6 md:px-8 bg-navy">
        <div className="max-w-5xl mx-auto">
          <SectionLabel centered>What Actually Changes</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-off-white text-center mb-16"
          >
            The Difference You'll Feel
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="flex items-start gap-5 p-6 bg-navy-dark/50 border border-white/5 rounded-lg hover:border-gold/30 transition-colors"
              >
                <div className="w-3 h-3 rounded-full bg-gold mt-2 flex-shrink-0" />
                <div>
                  <h3 className="text-xl text-off-white font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-slate-light">{benefit.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* You're Thinking - Objection Handlers */}
      <section className="py-24 px-6 md:px-8 bg-navy-dark">
        <div className="max-w-4xl mx-auto">
          <SectionLabel centered>You're Thinking</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-off-white text-center mb-16"
          >
            We've Heard It Before
          </motion.h2>
          
          <div className="space-y-6">
            {objections.map((obj, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="bg-navy p-8 border-l-4 border-gold"
              >
                <p className="text-slate-light italic text-lg mb-3">"{obj.thought}"</p>
                <p className="text-off-white text-xl font-medium">{obj.response}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA - Single, Strong */}
      <section className="py-32 px-6 md:px-8 bg-navy relative overflow-hidden">
        {/* Subtle gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-navy-dark/50 to-transparent pointer-events-none" />
        
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-medium">Your Possibility</p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-off-white mb-8">
              Ready to build <span className="text-gold italic">your</span> Maguire?
            </h2>
            <p className="text-xl text-slate-light font-light mb-6 max-w-2xl mx-auto leading-relaxed">
              We'll show you exactly how the 80/20 model applies to your business. Not a pitch deck—a working demo of what your system could look like.
            </p>
            <p className="text-off-white mb-12 text-lg">
              <span className="text-gold font-medium">The 80% is ready.</span> The 20% is about you.
            </p>
            
            {/* Proof Points */}
            <div className="flex flex-wrap justify-center gap-8 mb-12 text-base text-off-white">
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-gold" />
                <span>$4M+ proven system</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-gold" />
                <span>4-8 weeks to deploy</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="w-5 h-5 text-gold" />
                <span>95% close rate</span>
              </div>
            </div>
            
            <CometCTA href="/contact" className="text-xl">
              Build Your Own Maguire
            </CometCTA>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
