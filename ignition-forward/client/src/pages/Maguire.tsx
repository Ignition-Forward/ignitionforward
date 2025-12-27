import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Check, X, Shield, User, Ban, Send, Search, TrendingUp, ChevronDown } from "lucide-react";
import { useRef, useState, useEffect } from "react";
import { Link } from "wouter";
import SEO, { generateArticleSchema, generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * MAGUIRE CASE STUDY PAGE - STREAMLINED
 * 
 * Structure:
 * 1. Hero (with segments, objection handlers, and stats)
 * 2. The Problem (visible, clear)
 * 3. How It Works (5 steps)
 * 4. Before/After
 * 5. Craig's Story
 * 6. What You'll See (artifacts)
 * 7. Security
 * 8. CTA
 */

/* Section Label Component */
function SectionLabel({ children, centered = false }: { children: React.ReactNode; centered?: boolean }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 8, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
      className={`flex items-center gap-6 mb-8 ${centered ? 'justify-center' : ''}`}
    >
      <div className="w-16 h-px bg-gold" />
      <p className="text-xs tracking-[0.3em] uppercase text-gold font-medium">{children}</p>
      {centered && <div className="w-16 h-px bg-gold" />}
    </motion.div>
  );
}

/* Animated Counter for Stats */
function AnimatedStat({ 
  stat, 
  label, 
  delay = 0 
}: { 
  stat: string; 
  label: string; 
  delay?: number;
}) {
  const [displayValue, setDisplayValue] = useState("");
  const [hasAnimated, setHasAnimated] = useState(false);
  
  useEffect(() => {
    if (hasAnimated) return;
    
    const timer = setTimeout(() => {
      setDisplayValue(stat);
      setHasAnimated(true);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [stat, delay, hasAnimated]);
  
  return (
    <motion.div 
      initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
      whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.36, delay: delay / 1000, ease: [0.2, 0, 0, 1] }}
      className="text-center"
    >
      <p className="font-display text-4xl md:text-5xl text-gold mb-2">{displayValue || stat}</p>
      <p className="text-sm text-off-white/80">{label}</p>
    </motion.div>
  );
}

export default function Maguire() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  const heroStats = [
    { stat: "18%→65%", label: "Conversion Rate" },
    { stat: "3X", label: "Revenue/Client" },
    { stat: "5hrs", label: "Saved/Week" },
    { stat: "232+", label: "Iterations" },
  ];

  const beforeItems = [
    "More clients = more chaos",
    "Scattered notes across email, CRM, and memory",
    "Prep for meetings takes hours",
    "Follow-ups fall through the cracks",
  ];

  const afterItems = [
    "More clients = more leverage",
    "Single source of truth for every relationship",
    "AI-generated briefs in seconds",
    "Automated reminders and suggested actions",
  ];

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateArticleSchema({
        headline: 'Maguire: Relationship Intelligence',
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
        title="Maguire: Relationship Intelligence - Our Proof"
        description="How we built an AI-powered system that transformed our own client relationships. 18%→65% conversion rate, 3X revenue per client. See what's possible."
        canonical="/maguire"
        structuredData={structuredData}
      />
      
      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 h-1 bg-gold z-50"
        style={{ width: progressBarWidth }}
      />
      
      {/* ============================================
          HERO - Compact with segments, objections, stats
          ============================================ */}
      <section className="min-h-screen flex flex-col justify-center px-6 md:px-8 py-24 relative bg-navy">
        <div className="absolute inset-0 bg-gradient-to-b from-navy-dark/50 via-transparent to-navy-dark/30 pointer-events-none" />
        
        <div className="max-w-5xl mx-auto w-full relative z-10">
          {/* Label */}
          <motion.p 
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
            className="text-gold text-xs tracking-[0.35em] uppercase mb-6 font-medium"
          >
            Our Proof
          </motion.p>
          
          {/* Headline */}
          <motion.h1 
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.36, delay: 0.08, ease: [0.2, 0, 0, 1] }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-off-white leading-[1.1] mb-4"
          >
            Maguire
          </motion.h1>
          
          {/* Tagline */}
          <motion.p 
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.36, delay: 0.16, ease: [0.2, 0, 0, 1] }}
            className="font-display text-3xl md:text-4xl text-gold italic mb-6"
          >
            "Close more. Grind less."
          </motion.p>
          
          {/* Subhead */}
          <motion.p 
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.36, delay: 0.24, ease: [0.2, 0, 0, 1] }}
            className="text-lg md:text-xl text-off-white/90 max-w-2xl mb-8 leading-relaxed"
          >
            AI sales coach and copilot for expert-led businesses. Built for Craig, used daily for 18 months. Not SaaS—a training model that learns your patterns.
          </motion.p>
          
          {/* Segment Tags + Who It's For */}
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.36, delay: 0.32, ease: [0.2, 0, 0, 1] }}
            className="mb-10"
          >
            <p className="text-sm text-gold/80 mb-4">Built for expert-led businesses:</p>
            <div className="flex flex-wrap gap-3 mb-4">
              {["Professional Services", "Founder-Led", "Fund Managers", "PE Portfolio"].map((seg, i) => (
                <span 
                  key={i}
                  className="px-4 py-2 bg-navy-dark border border-gold/30 text-off-white text-sm"
                >
                  {seg}
                </span>
              ))}
            </div>
            <p className="text-base text-off-white/70">
              For LP relations, deal teams, rainmakers, and partner-led practices.
            </p>
          </motion.div>
          
          {/* Objection Handlers - Compact */}
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.36, delay: 0.40, ease: [0.2, 0, 0, 1] }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 pb-10 border-b border-white/10"
          >
            {[
              { thought: "I've tried AI tools", response: "This isn't a tool. It's a system built around how YOU work." },
              { thought: "My business is unique", response: "That's the point. Generic doesn't work. Custom does." },
              { thought: "How long until ROI?", response: "First working system: 3 weeks. Results: immediate." },
            ].map((obj, i) => (
              <div key={i} className="bg-navy-dark/50 p-4 border-l-2 border-gold/50">
                <p className="text-gold/80 italic text-sm mb-1">"{obj.thought}"</p>
                <p className="text-off-white text-sm">{obj.response}</p>
              </div>
            ))}
          </motion.div>
          
          {/* Stats Row */}
          <motion.div 
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.36, delay: 0.48, ease: [0.2, 0, 0, 1] }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {heroStats.map((item, i) => (
              <AnimatedStat 
                key={i} 
                stat={item.stat} 
                label={item.label}
                delay={i * 150 + 600}
              />
            ))}
          </motion.div>
        </div>
        
        {/* Scroll Indicator - subtle pulse, not bouncy */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.6 }}
          transition={{ delay: 0.6, duration: 0.36 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        >
          <span className="text-xs text-off-white/50 uppercase tracking-widest">Scroll</span>
          <motion.div
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <ChevronDown className="w-5 h-5 text-gold" />
          </motion.div>
        </motion.div>
      </section>

      {/* ============================================
          THE PROBLEM - Clear and Visible
          ============================================ */}
      <section className="py-20 px-6 md:px-8 bg-off-white">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-medium">The Problem</p>
            <p className="text-2xl md:text-3xl text-navy leading-relaxed">
              Relationship context is fragmented across email, calendar, docs, and memory. 
              Follow-ups slip. Deals die quietly. <span className="text-gold font-semibold">The more clients you have, the worse it gets.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          HOW IT WORKS - 5 Steps
          ============================================ */}
      <section className="py-24 px-6 md:px-8 bg-navy">
        <div className="max-w-5xl mx-auto">
          <SectionLabel centered>How Maguire Works</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-off-white text-center mb-16"
          >
            Five Steps to Relationship Intelligence
          </motion.h2>
          
          <div className="relative">
            {/* Connection Line */}
            <div className="hidden md:block absolute top-12 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-gold/20 via-gold to-gold/20" />
            
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              {[
                { step: "1", title: "Capture", desc: "Interactions from email, calendar, conversations" },
                { step: "2", title: "Normalize", desc: "Build relationship memory over time" },
                { step: "3", title: "Surface", desc: "Next actions, risks, stalled follow-ups" },
                { step: "4", title: "Enable", desc: "Outreach and briefs in your voice" },
                { step: "5", title: "Measure", desc: "Conversion, coverage, relationship health" },
              ].map((item, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.24, delay: i * 0.1 }}
                  className="text-center relative"
                >
                  <div className="w-10 h-10 rounded-full bg-gold text-navy font-bold text-lg flex items-center justify-center mx-auto mb-4 relative z-10">
                    {item.step}
                  </div>
                  <h3 className="text-base font-semibold text-off-white mb-2">{item.title}</h3>
                  <p className="text-sm text-off-white/70">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============================================
          BEFORE/AFTER
          ============================================ */}
      <section className="py-24 px-6 md:px-8 bg-off-white">
        <div className="max-w-4xl mx-auto">
          <SectionLabel centered>The Transformation</SectionLabel>
          
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-0 rounded-xl overflow-hidden shadow-xl"
          >
            {/* Before */}
            <div className="bg-navy p-8">
              <h3 className="text-lg font-semibold text-off-white mb-6 flex items-center gap-2">
                <X className="w-5 h-5 text-red-400" /> Before
              </h3>
              <div className="space-y-4">
                {beforeItems.map((item, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-off-white/80 text-sm"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>
            
            {/* After */}
            <div className="bg-gold p-8">
              <h3 className="text-lg font-semibold text-navy mb-6 flex items-center gap-2">
                <Check className="w-5 h-5 text-navy" /> After
              </h3>
              <div className="space-y-4">
                {afterItems.map((item, i) => (
                  <motion.p 
                    key={i}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="text-navy text-sm font-medium"
                  >
                    {item}
                  </motion.p>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CRAIG'S STORY - Compact
          ============================================ */}
      <section className="py-24 px-6 md:px-8 bg-navy-dark">
        <div className="max-w-4xl mx-auto">
          <SectionLabel>The Story</SectionLabel>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Quote */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-navy p-8 border-l-4 border-gold"
            >
              <div className="text-gold text-4xl mb-4 font-display">"</div>
              <p className="font-display text-xl text-off-white italic leading-relaxed mb-6">
                The time I gained was immense. I was immediately more effective with every client interaction.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
                  <span className="text-gold font-semibold">CG</span>
                </div>
                <div>
                  <p className="text-off-white font-medium">Craig Gainsboro</p>
                  <p className="text-off-white/60 text-sm">Founder, Ignition Consultants</p>
                </div>
              </div>
            </motion.div>
            
            {/* Narrative */}
            <motion.div 
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              <p className="text-off-white/90 leading-relaxed">
                Craig runs an expert-led advisory firm where his expertise IS the product. Every new client meant more prep, more follow-ups, more context to remember. Growth was hitting a ceiling.
              </p>
              <p className="text-off-white/90 leading-relaxed">
                We built Maguire around how he actually works. His decision patterns. His voice. His frameworks.
              </p>
              <p className="text-gold font-semibold">
                18 months in production. 232 iterations. Close rate: 18%→65%. Revenue per client: 3X.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          WHAT YOU'LL SEE - Artifacts
          ============================================ */}
      <section className="py-24 px-6 md:px-8 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <SectionLabel centered>Inside Maguire</SectionLabel>
          <motion.h2 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-display text-4xl md:text-5xl text-navy text-center mb-4"
          >
            What You'll Actually See
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center text-navy/70 mb-12"
          >
            Real outputs from a working system — not mockups or promises.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { 
                title: "Relationship Record", 
                desc: "Full context on every contact",
                preview: "Last Contact: 3 days ago\nOpen Commitments: 2\nRelationship Health: Strong\nNext Action: Follow up on proposal"
              },
              { 
                title: "Weekly Briefing", 
                desc: "AI-generated summary of all activity",
                preview: "🔴 At Risk: 2 deals with no activity\n🟡 Needs Attention: 5 commitments expiring\n🟢 Momentum: 3 deals advancing"
              },
              { 
                title: "Meeting Prep Brief", 
                desc: "Everything you need before any meeting",
                preview: "Context: 3rd meeting, discussing timeline\nTheir Priorities: Speed, minimal IT lift\nOpen Items: Pricing approved, legal pending"
              },
              { 
                title: "Opportunity Alert", 
                desc: "Proactive notifications when deals need attention",
                preview: "⚠️ Acme Corp: No response in 12 days\nSuggested: Send check-in with value recap\nDraft Ready: 'Hi Sarah, wanted to follow up...'"
              },
            ].map((artifact, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md border border-navy/10"
              >
                <h3 className="text-lg font-semibold text-navy mb-1">{artifact.title}</h3>
                <p className="text-navy/60 text-sm mb-4">{artifact.desc}</p>
                <div className="bg-navy/5 p-4 rounded font-mono text-xs text-navy/80 whitespace-pre-line">
                  {artifact.preview}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECURITY - Compact
          ============================================ */}
      <section className="py-24 px-6 md:px-8 bg-navy">
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-navy-dark p-8 md:p-10 border border-gold/20"
          >
            <div className="flex items-center gap-3 mb-6">
              <Shield className="w-6 h-6 text-gold" />
              <h3 className="font-display text-2xl text-off-white">Your Data. Your Control.</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                "NDA-first — we sign before we see anything",
                "Your data never trains our models",
                "Client info never leaves your environment",
                "You own everything we build",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Check className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                  <span className="text-off-white/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          CTA
          ============================================ */}
      <section className="py-24 px-6 md:px-8 bg-navy-dark">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-6 font-medium">See It In Action</p>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mb-6">
              See Maguire in Action
            </h2>
            <p className="text-off-white/80 mb-8 max-w-xl mx-auto">
              15-20 minutes to see what's possible for your firm. Not a generic demo — we'll explore what your system could look like.
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 mb-10 text-sm text-off-white/70">
              <span>18 months in production</span>
              <span>•</span>
              <span>232+ iterations</span>
              <span>•</span>
              <span>4-8 weeks to deploy</span>
            </div>
            
            <CometCTA href="/contact" className="text-lg">
              See Maguire in Action
            </CometCTA>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
