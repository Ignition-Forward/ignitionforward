import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Check, Shield, Users, Target, Zap, TrendingUp, Clock, Brain, MessageSquare, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import TwinkleField from "@/components/TwinkleField";
import MoveForwardButton from "./MoveForwardButtonIsland";
import ScrollIndicator from "@/components/ScrollIndicator";

/*
 * MAGUIRE - AI PROOF PAGE
 *
 * Core message: Craig proves AI works. This is the artifact.
 *
 * Structure:
 * 1. Hero - Meet Craig. This is what AI did for his practice.
 * 2. Problem → Solution - Interactive before/after experience
 * 3. The System - What Maguire actually does
 * 4. Real Results - 26 months of compound gains
 * 5. CTA - Get yours
 */

/* Staggered animation config */
const stagger = {
  container: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  },
  item: {
    hidden: { opacity: 0, y: 12, filter: 'blur(8px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 0.36, ease: [0.2, 0, 0, 1] }
    }
  }
};

export default function Maguire() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef });
  const progressBarWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const [showAfter, setShowAfter] = useState(false);

  return (
    <div ref={containerRef} className="overflow-hidden pb-mobile-cta">
      {/* Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 h-1 bg-gold z-50"
        style={{ width: progressBarWidth }}
      />

      {/* ============================================
          SECTION 1: HERO
          Meet Craig. Leaner, asymmetric layout.
          ============================================ */}
      <section className="min-h-hero flex flex-col justify-center px-6 md:px-8 py-24 md:py-32 relative bg-navy overflow-hidden">
        {/* Background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url(/images/hero-maguire.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.12,
            filter: 'grayscale(100%)',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/70 via-navy/60 to-navy pointer-events-none z-0" />
        <TwinkleField />

        <div className="max-w-5xl mx-auto w-full relative z-10">
          {/* Asymmetric layout - headline left, Craig right */}
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            {/* Left: Headline + CTA */}
            <div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1]">
                {/* "Grind less" - heavy, labored entrance */}
                <motion.span
                  className="block text-off-white/60 mb-2"
                  initial={{ opacity: 0, y: 20, filter: 'blur(4px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.8,
                    delay: 0.2,
                    ease: [0.4, 0, 0.2, 1]
                  }}
                >
                  Grind less.
                </motion.span>
                {/* "Close more" - smooth, effortless, golden */}
                <motion.span
                  className="block text-gold italic"
                  initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
                  animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
                  transition={{
                    duration: 0.5,
                    delay: 0.9,
                    ease: [0, 0, 0.2, 1]
                  }}
                >
                  Close more.
                </motion.span>
              </h1>

              <motion.p
                className="mt-6 text-lg text-off-white/70 leading-relaxed max-w-md"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
              >
                Craig built Maguire to solve his own problem: too many clients, not enough hours.
                <span className="text-off-white font-medium"> 26 months later</span>, it's still running every day.
              </motion.p>

              <motion.div
                className="mt-8 flex items-center gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
              >
                <a href="/contact"className="btn-gold inline-flex items-center gap-2">
                  Get yours built
                  <ArrowRight className="w-4 h-4" />
                </a>
                <span className="text-off-white/40 text-sm">The proof AI works.</span>
              </motion.div>
            </div>

            {/* Right: Craig's testimonial + stats */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {/* Craig info + quote card */}
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-6 md:p-8">
                {/* Craig's identity */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center border-2 border-gold/40">
                    <span className="text-gold font-bold text-xl">CG</span>
                  </div>
                  <div>
                    <p className="text-off-white font-medium">Craig Gainsboro</p>
                    <p className="text-off-white/50 text-sm">CEO, Ignition Consultants</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="pl-4 border-l-2 border-gold/40 mb-6">
                  <p className="text-off-white/90 italic text-lg leading-relaxed">
                    "Every client gets my full attention now. I'm not just faster—I'm sharper."
                  </p>
                </blockquote>

                {/* Stats row */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-white/10">
                  <div className="text-center">
                    <div className="flex items-center justify-center gap-1.5 mb-1">
                      <span className="text-off-white/30 text-sm line-through">45%</span>
                      <ArrowRight className="w-3 h-3 text-gold/50" />
                      <span className="text-gold text-xl font-display font-bold">85%</span>
                    </div>
                    <div className="text-off-white/40 text-[10px]">Close rate</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-xl text-gold font-bold">3X</div>
                    <div className="text-off-white/40 text-[10px]">Revenue</div>
                  </div>
                  <div className="text-center">
                    <div className="font-display text-xl text-gold font-bold">26mo</div>
                    <div className="text-off-white/40 text-[10px]">Daily use</div>
                  </div>
                </div>
              </div>

              {/* Badge - offset */}
              <div className="absolute -top-3 -right-3 bg-gold px-3 py-1.5 rounded-full shadow-lg">
                <span className="text-navy text-xs font-bold">232 iterations</span>
              </div>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Key insight - moved up for prominence */}
      <section className="py-10 md:py-14 px-6 md:px-8 bg-navy-light">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="text-off-white/90 text-lg md:text-xl lg:text-2xl leading-relaxed">
            Maguire doesn't replace your expertise—it <span className="text-gold font-semibold">amplifies</span> it.
            You still make every decision. You just walk in with complete context and zero cognitive overhead.
          </p>
        </motion.div>
      </section>

      {/* ============================================
          SECTION 2: BEFORE → AFTER
          Interactive problem/solution experience
          ============================================ */}
      <section className="py-section px-6 md:px-8 bg-off-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          {/* Toggle header with dynamic commentary */}
          <motion.div
            className="text-center mb-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy leading-tight mb-4">
              A day in the life
            </h2>

            {/* Dynamic subhead based on toggle state */}
            <AnimatePresence mode="wait">
              <motion.p
                key={showAfter ? "after-desc" : "before-desc"}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.2 }}
                className="text-navy/60 text-base md:text-lg max-w-xl mx-auto mb-8"
              >
                {showAfter
                  ? "Same day, same clients. But now you show up prepared, respond faster, and nothing slips."
                  : "The grind most relationship-driven professionals know too well. Context scattered, time squeezed, balls dropped."
                }
              </motion.p>
            </AnimatePresence>

            {/* Interactive toggle */}
            <div className="inline-flex items-center bg-navy rounded-full p-1.5">
              <button
                onClick={() => setShowAfter(false)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  !showAfter
                    ? "bg-white text-navy shadow-lg"
                    : "text-off-white/60 hover:text-off-white"
                }`}
              >
                Before Maguire
              </button>
              <button
                onClick={() => setShowAfter(true)}
                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                  showAfter
                    ? "bg-gold text-navy shadow-lg"
                    : "text-off-white/60 hover:text-off-white"
                }`}
              >
                After Maguire
              </button>
            </div>
          </motion.div>

          {/* Before/After content */}
          <div className="relative min-h-[400px]">
            <AnimatePresence mode="wait">
              {!showAfter ? (
                /* BEFORE STATE */
                <motion.div
                  key="before"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {[
                    {
                      icon: Brain,
                      time: "7:45 AM",
                      title: "The problem: Context is scattered",
                      detail: "You're digging through emails, notes, and your memory trying to piece together what this client needs. You're already running late.",
                      pain: "20 min wasted"
                    },
                    {
                      icon: Clock,
                      time: "11:30 AM",
                      title: "The problem: Prep steals your day",
                      detail: "Three calls today. Each one needs context, history, talking points. That's 2 hours of prep you don't have.",
                      pain: "Quality suffers"
                    },
                    {
                      icon: MessageSquare,
                      time: "4:15 PM",
                      title: "The problem: Things slip through",
                      detail: "Client asks about the intro you promised last week. You forgot. They noticed. Trust takes a hit.",
                      pain: "Trust eroded"
                    }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white p-6 border border-red-200/50 rounded-xl relative overflow-hidden"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-400/50 to-red-300/30" />
                        <div className="flex items-center gap-2 mb-4">
                          <Icon className="w-4 h-4 text-red-400/70" />
                          <span className="text-navy/40 text-xs font-mono">{item.time}</span>
                        </div>
                        <h3 className="text-navy font-semibold mb-2">{item.title}</h3>
                        <p className="text-navy/60 text-sm leading-relaxed mb-4">{item.detail}</p>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-red-50 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-red-400" />
                          <span className="text-red-600/80 text-xs font-medium">{item.pain}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              ) : (
                /* AFTER STATE */
                <motion.div
                  key="after"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 md:grid-cols-3 gap-6"
                >
                  {[
                    {
                      icon: Target,
                      time: "7:45 AM",
                      title: "The solution: Context in seconds",
                      detail: "Full client history, commitments, and talking points on your phone before you leave. No digging. No scrambling.",
                      win: "Instant recall"
                    },
                    {
                      icon: Zap,
                      time: "11:30 AM",
                      title: "The solution: Prep is automatic",
                      detail: "Maguire surfaces exactly what you need. Three calls today? Three briefings ready. You show up sharp.",
                      win: "2 hours saved"
                    },
                    {
                      icon: Check,
                      time: "4:15 PM",
                      title: "The solution: Nothing falls through",
                      detail: "That intro you promised? Already drafted and waiting. Review, personalize, send. Client impressed.",
                      win: "Trust deepened"
                    }
                  ].map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.4, delay: i * 0.1 }}
                        className="bg-white p-6 border border-gold/30 rounded-xl relative overflow-hidden shadow-lg"
                      >
                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-gold to-gold/50" />
                        <div className="flex items-center gap-2 mb-4">
                          <Icon className="w-4 h-4 text-gold" />
                          <span className="text-navy/40 text-xs font-mono">{item.time}</span>
                        </div>
                        <h3 className="text-navy font-semibold mb-2">{item.title}</h3>
                        <p className="text-navy/60 text-sm leading-relaxed mb-4">{item.detail}</p>
                        <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-gold/10 rounded-full">
                          <Check className="w-3 h-3 text-gold" />
                          <span className="text-gold-dark text-xs font-medium">{item.win}</span>
                        </div>
                      </motion.div>
                    );
                  })}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Transition prompt */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-10 text-center"
          >
            <button
              onClick={() => setShowAfter(!showAfter)}
              className="inline-flex items-center gap-2 text-navy/60 hover:text-navy transition-colors text-sm"
            >
              <span>{showAfter ? "See the problem" : "See the solution"}</span>
              <ChevronRight className={`w-4 h-4 transition-transform ${showAfter ? "rotate-180" : ""}`} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: 26 MONTHS OF PROOF
          Craig's daily-driven artifact
          ============================================ */}
      <section className="py-section px-6 md:px-8 bg-navy relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-10" />

        <div className="max-w-5xl mx-auto relative z-10">
          {/* Section header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-off-white mb-4">
              26 months of <span className="text-gold italic">compound gains</span>
            </h2>
            <p className="text-off-white/60 text-base md:text-lg max-w-xl mx-auto">
              What happens when AI works every day, not just launch day.
            </p>
          </motion.div>

          {/* Transformation metrics */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 }}
            className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 p-8 md:p-10 max-w-4xl mx-auto"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
              {[
                { before: "45%", after: "85%", label: "Close rate" },
                { before: "1X", after: "3X", label: "Revenue/client" },
                { before: "10+ hrs", after: "2 hrs", label: "Weekly prep" },
                { before: "4 hrs", after: "15 min", label: "Response time" },
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="text-center"
                >
                  <div className="flex items-center justify-center gap-2 mb-2">
                    <span className="text-off-white/30 text-lg line-through">{stat.before}</span>
                    <ArrowRight className="w-4 h-4 text-gold/50" />
                    <span className="text-gold text-2xl md:text-3xl font-display font-bold">{stat.after}</span>
                  </div>
                  <div className="text-off-white/50 text-xs">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Bottom proof bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-8 flex flex-wrap items-center justify-center gap-8 md:gap-16 text-center"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <TrendingUp className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <div className="font-display text-xl text-off-white">232+</div>
                <div className="text-off-white/50 text-xs">Refinements shipped</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Zap className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <div className="font-display text-xl text-off-white">100%</div>
                <div className="text-off-white/50 text-xs">Daily usage streak</div>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center">
                <Check className="w-5 h-5 text-gold" />
              </div>
              <div className="text-left">
                <div className="font-display text-xl text-off-white">0</div>
                <div className="text-off-white/50 text-xs">Dropped commitments</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: GET YOURS BUILT
          Same system, customized for you
          ============================================ */}
      <section className="py-section px-6 md:px-8 bg-off-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-navy mb-4">
              Same system. <span className="text-gold italic">Your practice.</span>
            </h2>
            <p className="text-navy/70 text-base md:text-lg max-w-2xl mx-auto">
              We take what's proven—232 refinements of battle-tested patterns—and customize it to how you work.
            </p>
          </motion.div>

          {/* 80/20 visual */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto mb-12"
          >
            <div className="bg-white rounded-2xl border border-navy/10 p-8 shadow-lg">
              <div className="flex items-center gap-4 mb-6">
                <span className="text-gold font-display text-4xl font-bold">80%</span>
                <div className="flex-1">
                  <span className="text-navy font-semibold">Proven core</span>
                  <p className="text-navy/60 text-sm">Craig's daily-driven system: context retrieval, draft generation, commitment tracking</p>
                </div>
              </div>
              <div className="h-4 rounded-full overflow-hidden bg-navy/10 flex mb-6">
                <motion.div
                  className="bg-gold rounded-l-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "80%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                />
                <motion.div
                  className="bg-navy/30 rounded-r-full"
                  initial={{ width: 0 }}
                  whileInView={{ width: "20%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 1.0 }}
                />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-navy font-display text-4xl font-bold">20%</span>
                <div className="flex-1">
                  <span className="text-navy font-semibold">Custom to you</span>
                  <p className="text-navy/60 text-sm">Your voice, your patterns, your client categories, your workflow triggers</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Timeline */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              {
                phase: "Week 1-2",
                title: "Discovery",
                items: ["Map your client patterns", "Define what success looks like", "Identify quick wins"]
              },
              {
                phase: "Week 3-4",
                title: "Build",
                items: ["Deploy Maguire core", "Customize to your voice", "Initial training on your data"]
              },
              {
                phase: "Week 5+",
                title: "Compound",
                items: ["Daily use refines the system", "New patterns emerge", "Continuous improvement"]
              },
            ].map((phase, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="relative"
              >
                <div className="bg-white border border-navy/10 p-6 rounded-xl h-full shadow-md">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-gold font-mono text-sm font-medium">{phase.phase}</span>
                    <div className="flex-1 h-px bg-gold/30" />
                  </div>
                  <h3 className="font-display text-xl text-navy mb-4">{phase.title}</h3>
                  <ul className="space-y-2">
                    {phase.items.map((item, j) => (
                      <li key={j} className="flex items-start gap-2 text-navy/60 text-sm">
                        <Check className="w-4 h-4 text-gold mt-0.5 flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
