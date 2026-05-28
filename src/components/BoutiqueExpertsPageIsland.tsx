import { motion } from "framer-motion";
import { Compass, Users, Clock, Brain, Sparkles, Check, X, ArrowRight, ChevronDown, Target, Layers, Settings, Zap } from "lucide-react";
import { useState } from "react";
import CometCTA from "./CometCTAIsland";

/*
 * BOUTIQUE EXPERT TEAMS PAGE - WHO WE WORK WITH
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
    icon: Users,
    title: "Growth means dilution",
    description: "Every new client or project stretches your capacity. You can't clone yourself, but you can't afford to deliver anything less than your best.",
  },
  {
    icon: Clock,
    title: "Admin eats expertise time",
    description: "Proposals, follow-ups, research, and coordination consume hours that should go to high-value client work.",
  },
  {
    icon: Brain,
    title: "Your methods live in your head",
    description: "The frameworks, approaches, and judgment that make you valuable aren't documented or reusable. Every engagement starts from scratch.",
  },
  {
    icon: Sparkles,
    title: "AI tools don't fit your workflow",
    description: "Generic AI products don't understand how expert practices actually work. You need systems built around your specific methods.",
  },
];

const implementationPillars = [
  {
    icon: Target,
    title: "Workflow-first design",
    description: "We start with how you actually work, then build AI that fits your process — not the other way around.",
  },
  {
    icon: Layers,
    title: "Knowledge capture & reuse",
    description: "Turn your expertise into reusable templates, frameworks, and copilots that maintain your standards.",
  },
  {
    icon: Settings,
    title: "Delivery acceleration",
    description: "Speed up proposals, research, and client prep without sacrificing the quality that defines you.",
  },
  {
    icon: Zap,
    title: "Relationship intelligence",
    description: "Never miss a follow-up, forget context, or lose track of what matters to each client.",
  },
];

const proofDeliverables = [
  "Custom AI copilot trained on your methods and voice",
  "Automated client prep and meeting intelligence",
  "Proposal and deliverable acceleration workflows",
  "Knowledge library capturing your frameworks and approaches",
  "Relationship tracking with proactive follow-up suggestions",
];

const trustHandling = [
  "Your data stays yours — never used to train models for others",
  "Built within your existing security perimeter",
  "Confidentiality-first design for client-sensitive work",
  "You own everything we build — no vendor lock-in",
  "Designed for practices where reputation is everything",
];

const outcomes = [
  "Scale delivery capacity without adding headcount",
  "Reclaim hours spent on admin for high-value work",
  "Capture and reuse your expertise systematically",
  "Maintain quality standards as you grow",
];

const faqs = [
  {
    question: "We're a small team — is this overkill?",
    answer: "The opposite. Small expert teams get the most leverage from AI because every hour matters more. We've built systems for teams as small as 3 people.",
  },
  {
    question: "How is this different from ChatGPT or other AI tools?",
    answer: "Generic tools don't know your methods, your voice, or your clients. We build systems trained on how YOU work — your frameworks, your standards, your approach.",
  },
  {
    question: "What's the time commitment?",
    answer: "Initial setup requires 4-6 hours of your time over 2-3 weeks. After that, the system works in the background. Most clients see ROI within the first month.",
  },
  {
    question: "What if our work is highly confidential?",
    answer: "We built our own systems for confidential client work. Your data never trains our models, stays within your security perimeter, and you own everything we build.",
  },
];

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left group"
      >
        <span className="font-display text-lg text-navy pr-8">{question}</span>
        <ChevronDown className={`w-5 h-5 text-gold transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>
      <motion.div
        initial={false}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <p className="pb-6 text-grey-body leading-relaxed">{answer}</p>
      </motion.div>
    </div>
  );
}

export default function BoutiqueExperts() {
  return (
    <div className="overflow-hidden">
      {/* ============================================
          SECTION 1: HERO
          ============================================ */}
      <section className="relative bg-navy pt-32 pb-20 overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-gold/5 to-transparent pointer-events-none" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36 }}
          >
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Who We Help</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.1 }}
            className="font-display text-5xl md:text-6xl lg:text-7xl text-off-white mt-6 max-w-4xl"
          >
            Boutique Expert Teams
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.2 }}
            className="text-xl md:text-2xl text-slate-light mt-8 max-w-3xl leading-relaxed"
          >
            Expert practices scaling delivery and relationships without diluting quality — where expertise is the product.
          </motion.p>
        </div>
      </section>

      {/* ============================================
          SECTION 2: SCENARIO + FIT CHECK
          ============================================ */}
      <section className="bg-navy-dark py-16">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Scenario */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.24 }}
            >
              <h2 className="text-gold text-sm tracking-[0.2em] uppercase mb-4">The Scenario</h2>
              <p className="text-off-white text-lg leading-relaxed">
                You've built a practice on expertise and relationships. Clients come to you because you're the best at what you do. But growth creates a ceiling — you can't scale yourself, and hiring dilutes what makes you special.
              </p>
              <p className="text-slate-light mt-4 leading-relaxed">
                AI should help you do more of what you're great at, not replace the judgment that clients pay for.
              </p>
            </motion.div>
            
            {/* Fit Check */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.24, delay: 0.1 }}
              className="bg-navy/50 border border-gold/20 rounded-2xl p-8"
            >
              <h3 className="text-gold text-sm tracking-[0.2em] uppercase mb-6">Good Fit If</h3>
              <ul className="space-y-4">
                {[
                  "Your expertise is the product — clients hire YOU",
                  "Growth is limited by your personal capacity",
                  "Quality matters more than volume",
                  "You're ready to systematize what makes you effective",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-off-white">{item}</span>
                  </li>
                ))}
              </ul>
              
              <h3 className="text-slate-light text-sm tracking-[0.2em] uppercase mt-8 mb-6">Not A Fit If</h3>
              <ul className="space-y-4">
                {[
                  "You want to fully automate client delivery",
                  "You're looking for off-the-shelf AI tools",
                  "You're not ready to document your methods",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-slate-light mt-0.5 flex-shrink-0" />
                    <span className="text-slate-light">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 3: CHALLENGES
          ============================================ */}
      <section className="bg-off-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">The Challenge</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-4">
              Growth shouldn't mean compromise
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6">
            {challenges.map((challenge, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.24, delay: i * 0.1 }}
                className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-gold/30 hover:shadow-lg transition-all duration-300"
              >
                <challenge.icon className="w-10 h-10 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-xl text-navy mb-3">{challenge.title}</h3>
                <p className="text-grey-body leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 4: HOW WE HELP
          ============================================ */}
      <section className="bg-navy py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">How We Help</span>
            <h2 className="font-display text-4xl md:text-5xl text-off-white mt-4">
              AI built around your expertise
            </h2>
          </motion.div>
          
          {/* Implementation Pillars */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {implementationPillars.map((pillar, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.24, delay: i * 0.1 }}
                className="bg-navy-light/50 border border-gold/10 rounded-2xl p-6 hover:border-gold/30 transition-colors"
              >
                <pillar.icon className="w-8 h-8 text-gold mb-4" strokeWidth={1.5} />
                <h3 className="font-display text-lg text-off-white mb-2">{pillar.title}</h3>
                <p className="text-slate-light text-sm leading-relaxed">{pillar.description}</p>
              </motion.div>
            ))}
          </div>
          
          {/* Proof Deliverables + Trust Handling */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-navy-dark/50 rounded-2xl p-8"
            >
              <h3 className="text-gold text-sm tracking-[0.2em] uppercase mb-6">What You Get</h3>
              <ul className="space-y-3">
                {proofDeliverables.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-off-white">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-navy-dark/50 rounded-2xl p-8"
            >
              <h3 className="text-gold text-sm tracking-[0.2em] uppercase mb-6">Trust & Confidentiality</h3>
              <ul className="space-y-3">
                {trustHandling.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-gold mt-0.5 flex-shrink-0" />
                    <span className="text-off-white">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 5: OUTCOMES
          ============================================ */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Outcomes</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-4">
              What changes
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {outcomes.map((outcome, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.24, delay: i * 0.1 }}
                className="flex items-start gap-4 bg-white p-6 rounded-xl border border-gray-100"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <Check className="w-4 h-4 text-gold" />
                </div>
                <span className="text-navy font-medium">{outcome}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 6: FAQ
          ============================================ */}
      <section className="bg-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">FAQ</span>
            <h2 className="font-display text-4xl md:text-5xl text-navy mt-4">
              Common questions
            </h2>
          </motion.div>
          
          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, i) => (
              <FAQItem key={i} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </div>
      </section>

      {/* ============================================
          SECTION 7: CTA
          ============================================ */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="font-display text-4xl md:text-5xl text-navy">
              Ready to scale without compromise?
            </h2>
            <p className="text-xl text-grey-body mt-6">
              See how we've helped other expert teams, or start a conversation about your practice.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">
              <a href="/maguire">
                <span className="inline-flex items-center gap-2 px-6 py-3 border-2 border-navy text-navy font-medium rounded-full hover:bg-navy hover:text-off-white transition-colors">
                  See Our Proof <ArrowRight className="w-4 h-4" />
                </span>
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
