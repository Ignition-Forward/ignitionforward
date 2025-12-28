import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, Zap, Users, Handshake, Layers, Wrench, Sparkles,
  Check, Clock, Shield, AlertTriangle, MessageSquare, Calendar
} from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";
import TwinkleField from "@/components/TwinkleField";
import ScrollIndicator from "@/components/ScrollIndicator";

/*
 * HOW WE HELP - ENHANCED SERVICES OVERVIEW
 *
 * Structure:
 * 1. Hero with proof anchor (80/20 integrated)
 * 2. Why Now (urgency - opportunity-framed)
 * 3. Core Principles (80/20 elevated)
 * 4. Three Service Cards with proof stamps
 * 5. Social Proof testimonial
 * 6. Strong CTA with scarcity
 */

// Reduced to 3 differentiating principles
const principles = [
  {
    icon: Layers,
    title: "80% Proven + 20% Custom",
    description: "Every engagement builds on battle-tested systems we use ourselves. Your 20% customization makes it uniquely yours.",
    proof: "Same core systems that drove 3X revenue at Maguire.",
    featured: true,
  },
  {
    icon: Handshake,
    title: "Build WITH, Not FOR",
    description: "We transfer capability, not just deliverables. You own everything and can run it without us.",
    proof: "100% of clients independent within 90 days.",
  },
  {
    icon: Wrench,
    title: "Start Small, Scale Fast",
    description: "Prove value in weeks, not quarters. Then expand what works.",
    proof: "First workflow live in 3 weeks on average.",
  },
];

export default function HowWeHelp() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Ignition Forward Services',
        description: 'Three ways to work with Ignition Forward for AI enablement',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Forward Deployed',
            description: 'Custom AI implementation teams that build systems tailored to your business',
            url: 'https://ignitionforward.com/how-we-help#forward-deployed',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Fractional AI Officer',
            description: 'Executive AI leadership without the full-time commitment',
            url: 'https://ignitionforward.com/how-we-help#fractional-ai',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Edge',
            description: 'Personal AI fluency training for individual leaders',
            url: 'https://ignitionforward.com/edge',
          },
        ],
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'How We Help', url: '/how-we-help' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="How We Help - AI Services"
        description="Three ways to build AI capability: Edge training for executives, Forward Deployed implementation teams, and Fractional AI Officer leadership."
        canonical="/how-we-help"
        structuredData={structuredData}
      />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="relative bg-navy overflow-hidden pt-32 pb-16 md:pb-20">
        <div
          className="absolute inset-0 z-0 grayscale"
          style={{
            backgroundImage: 'url(/images/hero-services.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy z-0" />
        <TwinkleField />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/20 mb-6"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-semibold tracking-wider uppercase">How We Work</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="text-off-white text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight"
            >
              Your Expertise, <span className="text-gold italic">Multiplied</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.2, ease: [0.2, 0, 0, 1] }}
              className="mt-6 text-lg md:text-xl text-off-white/70 font-body leading-relaxed max-w-2xl mx-auto"
            >
              AI that protects what makes you valuable—and extends it further than you thought possible.
            </motion.p>

            {/* 80/20 Proof Anchor */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.3, ease: [0.2, 0, 0, 1] }}
              className="mt-8 inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-gold/10 border border-gold/25"
            >
              <Layers className="w-5 h-5 text-gold" />
              <span className="text-gold text-sm font-medium">80% proven systems + 20% custom to you</span>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ================================================================== */}
      {/* WHY NOW - Opportunity-Framed Urgency */}
      {/* ================================================================== */}
      <section className="bg-navy-light py-12 border-b border-white/10">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12"
            >
              {/* Opportunity Message */}
              <div className="flex-1 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/20 border border-gold/30 rounded-full mb-4">
                  <Sparkles className="w-4 h-4 text-gold" />
                  <span className="text-gold text-xs font-semibold uppercase tracking-wider">The Window is Open</span>
                </div>
                <h3 className="text-off-white text-2xl md:text-3xl font-display leading-tight">
                  Leaders who move now will define their industry.<br className="hidden md:block" />
                  <span className="text-gold">Those who wait will spend years catching up.</span>
                </h3>
              </div>

              {/* Key Numbers - Black cards for verified proof authority */}
              <div className="flex-shrink-0 grid grid-cols-3 gap-4 lg:gap-6">
                <div className="text-center px-4 py-5 bg-black rounded-xl border border-white/10">
                  <div className="text-3xl lg:text-4xl font-display text-gold font-bold">3X</div>
                  <div className="text-off-white/60 text-xs mt-1">revenue growth<br />at Maguire</div>
                </div>
                <div className="text-center px-4 py-5 bg-black rounded-xl border border-white/10">
                  <div className="text-3xl lg:text-4xl font-display text-gold font-bold">80/20</div>
                  <div className="text-off-white/60 text-xs mt-1">proven systems<br />+ custom</div>
                </div>
                <div className="text-center px-4 py-5 bg-black rounded-xl border border-white/10">
                  <div className="text-3xl lg:text-4xl font-display text-gold font-bold">90d</div>
                  <div className="text-off-white/60 text-xs mt-1">to full<br />independence</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PRINCIPLES SECTION - Elevated 80/20 */}
      {/* ================================================================== */}
      <section className="bg-off-white py-20 md:py-24">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            {/* Featured Principle - 80/20 */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="p-8 md:p-12 rounded-3xl bg-gradient-to-br from-navy to-navy-light border border-gold/30 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl" />
                <div className="absolute bottom-0 left-0 w-48 h-48 bg-gold/5 rounded-full blur-2xl" />

                <div className="relative z-10 flex flex-col md:flex-row items-start gap-6 md:gap-10">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-gold/20 flex items-center justify-center">
                      <Layers className="w-8 h-8 text-gold" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <span className="text-gold text-xs font-semibold uppercase tracking-wider">Our Core Differentiator</span>
                    <h2 className="mt-2 text-off-white text-3xl md:text-4xl font-display">
                      80% Proven + 20% Custom
                    </h2>
                    <p className="mt-4 text-off-white/70 text-lg leading-relaxed max-w-2xl">
                      Every engagement builds on proprietary systems we've refined across dozens of implementations. Your 20% customization makes it uniquely yours—running on the infrastructure you choose.
                    </p>
                    <div className="mt-6 flex flex-wrap gap-4">
                      <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full">
                        <Check className="w-4 h-4 text-gold" />
                        <span className="text-off-white/80 text-sm">Proprietary systems, battle-tested</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full">
                        <Check className="w-4 h-4 text-gold" />
                        <span className="text-off-white/80 text-sm">Your data stays yours</span>
                      </div>
                      <div className="flex items-center gap-2 px-4 py-2 bg-gold/10 rounded-full">
                        <Check className="w-4 h-4 text-gold" />
                        <span className="text-off-white/80 text-sm">Model-agnostic flexibility</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Other Two Principles */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <span className="text-gold-dark text-xs tracking-wider uppercase font-semibold">How We Work</span>
              <h3 className="mt-2 text-navy text-2xl font-display">Two more beliefs that shape every engagement</h3>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-8">
              {principles.filter(p => !p.featured).map((principle, index) => (
                <motion.div
                  key={principle.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 rounded-2xl bg-white border border-gray-200 hover:border-gold/30 hover:shadow-lg transition-all"
                >
                  <div className="flex gap-5">
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                        <principle.icon className="w-6 h-6 text-gold-dark" />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-navy font-display text-xl mb-2">{principle.title}</h4>
                      <p className="text-grey-body leading-relaxed">{principle.description}</p>
                      <p className="mt-3 text-gold-dark text-sm font-medium">{principle.proof}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* THREE SERVICES - Simplified Cards */}
      {/* ================================================================== */}
      <section className="bg-navy py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <span className="text-gold text-xs tracking-wider uppercase font-semibold">Three Paths to AI That Works</span>
              <h2 className="mt-4 text-off-white text-3xl md:text-4xl font-display">
                Every path starts with your expertise.<br className="hidden md:block" />
                We give it leverage.
              </h2>
            </motion.div>

            {/* Two Primary Services - Full Width */}
            <div className="grid lg:grid-cols-2 gap-8 mb-8">
              {/* FORWARD DEPLOYED - Featured */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0 }}
                id="forward-deployed"
                className="scroll-mt-32"
              >
                <div className="h-full p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-gold/15 to-navy-light border-2 border-gold/40 hover:border-gold/60 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                        <Users className="w-7 h-7 text-gold" />
                      </div>
                      <div>
                        <span className="text-gold/70 text-xs uppercase tracking-wider font-semibold">For Your Team</span>
                        <h3 className="text-gold font-display text-2xl">Forward Deployed</h3>
                      </div>
                    </div>

                    <p className="text-off-white text-2xl font-display mb-4">
                      AI systems that multiply your team
                    </p>

                    <p className="text-off-white/70 leading-relaxed mb-6">
                      We embed alongside your people to build AI systems tailored to how you actually work. The same battle-tested approach that drove 3X revenue at Maguire—adapted to your business in weeks, not quarters.
                    </p>

                    {/* Why Us */}
                    <div className="p-4 rounded-xl bg-navy/50 border border-gold/20 mb-4">
                      <h4 className="text-gold text-sm font-semibold mb-2">Why This Works</h4>
                      <p className="text-off-white/60 text-sm leading-relaxed">
                        Most AI projects fail because consultants build for you, not with you. We work shoulder-to-shoulder with your team—transferring capability so you own the system AND the expertise to evolve it.
                      </p>
                    </div>

                    {/* Proof Stamp */}
                    <div className="flex items-center gap-2 text-gold/70 text-xs mb-6">
                      <Layers className="w-3.5 h-3.5" />
                      <span>Built on the same systems that drove 3X revenue at Maguire</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {[
                        "Client intelligence systems",
                        "Knowledge capture & retrieval",
                        "Proposal & deliverable automation",
                        "Custom workflow agents",
                        "Full IP ownership",
                        "Team trained to maintain",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-off-white/70 text-sm">
                          <Check className="w-4 h-4 text-gold flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-gold/20">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-4 h-4 text-gold/60" />
                        <span className="text-off-white/60 text-sm">Typically 6-16 weeks • Scoped to your needs</span>
                      </div>
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Discuss Your Project
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* FRACTIONAL AI OFFICER - Featured */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                id="fractional-ai"
                className="scroll-mt-32"
              >
                <div className="h-full p-8 lg:p-10 rounded-2xl bg-gradient-to-br from-gold/15 to-navy-light border-2 border-gold/40 hover:border-gold/60 transition-all relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gold/5 rounded-full blur-3xl" />

                  <div className="relative z-10">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-14 h-14 rounded-xl bg-gold/20 flex items-center justify-center">
                        <Shield className="w-7 h-7 text-gold" />
                      </div>
                      <div>
                        <span className="text-gold/70 text-xs uppercase tracking-wider font-semibold">For Your Organization</span>
                        <h3 className="text-gold font-display text-2xl">Fractional AI Officer</h3>
                      </div>
                    </div>

                    <p className="text-off-white text-2xl font-display mb-4">
                      Executive AI leadership without the $400K hire
                    </p>

                    <p className="text-off-white/70 leading-relaxed mb-6">
                      Get a seasoned AI executive who owns your strategy, guides implementation, and builds your internal capabilities—at a fraction of the cost and commitment of a full-time Chief AI Officer.
                    </p>

                    {/* Why Us */}
                    <div className="p-4 rounded-xl bg-navy/50 border border-gold/20 mb-4">
                      <h4 className="text-gold text-sm font-semibold mb-2">Why This Works</h4>
                      <p className="text-off-white/60 text-sm leading-relaxed">
                        Most firms don't need a full-time AI executive—they need experienced judgment available when it matters. You get strategic leadership without the overhead, with the flexibility to scale as your AI maturity grows.
                      </p>
                    </div>

                    {/* Proof Stamp */}
                    <div className="flex items-center gap-2 text-gold/70 text-xs mb-6">
                      <Layers className="w-3.5 h-3.5" />
                      <span>80% proven playbooks + strategic judgment from 232 iterations</span>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-8">
                      {[
                        "Strategic roadmap & governance",
                        "Vendor evaluation & management",
                        "Team training & enablement",
                        "Board-level reporting",
                        "Implementation oversight",
                        "AI risk & compliance",
                      ].map((item) => (
                        <div key={item} className="flex items-center gap-2 text-off-white/70 text-sm">
                          <Check className="w-4 h-4 text-gold flex-shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-6 border-t border-gold/20">
                      <div className="flex items-center gap-2 mb-4">
                        <Clock className="w-4 h-4 text-gold/60" />
                        <span className="text-off-white/60 text-sm">Ongoing engagement • Flexible hours</span>
                      </div>
                      <Link
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Schedule a Conversation
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* EDGE - De-emphasized as personal starting point */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-2xl mx-auto"
            >
              <div className="p-6 rounded-2xl bg-navy-light/50 border border-white/10 hover:border-white/20 transition-all">
                <div className="flex flex-col md:flex-row md:items-center gap-6">
                  <div className="flex items-center gap-4 flex-shrink-0">
                    <div className="w-12 h-12 rounded-xl bg-gold/10 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-gold/80" />
                    </div>
                    <div>
                      <span className="text-off-white/40 text-xs uppercase tracking-wider">For Individual Leaders</span>
                      <h3 className="text-off-white font-display text-xl">Edge</h3>
                    </div>
                  </div>

                  <div className="flex-1">
                    <p className="text-off-white/60 text-sm leading-relaxed">
                      Curious about AI but not ready to bring it to your whole organization? Start with personal fluency. 9 hours of 1:1 training to build your own AI workflows and understand what's possible—before committing to a larger initiative.
                    </p>
                    <p className="text-gold/70 text-sm mt-2 font-medium">
                      Includes 30-day async access to Andrew for implementation questions.
                    </p>
                  </div>

                  <Link
                    href="/edge"
                    className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-2.5 bg-white/10 text-off-white font-medium rounded-lg hover:bg-white/15 transition-colors border border-white/10 text-sm"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Capacity Signal */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex items-center justify-center gap-2 text-gold/60 text-sm mt-10"
            >
              <span className="w-2 h-2 bg-gold rounded-full animate-pulse" />
              <span>3-4 Forward Deployed spots available per quarter</span>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* SOCIAL PROOF - Testimonial (Black background for gravitas) */}
      {/* ================================================================== */}
      <section className="bg-black py-20 md:py-24 border-t border-white/5">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <motion.blockquote
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              {/* Decorative quote mark - slightly brighter on true black */}
              <div className="absolute -top-4 -left-2 md:-left-8 text-gold/20 font-display text-[100px] md:text-[140px] leading-none select-none pointer-events-none">
                "
              </div>
              <div className="relative z-10 pl-4 md:pl-8">
                <p className="text-off-white text-xl md:text-2xl lg:text-3xl font-display leading-relaxed">
                  The difference is they've done this themselves. They're not theorizing about what might work—
                  <span className="text-gold">they're showing us what already works.</span>
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-display font-bold text-xl border-2 border-gold/30">
                    KK
                  </div>
                  <div>
                    <p className="text-off-white font-medium text-lg">Karan Kanwar</p>
                    <p className="text-off-white/50 text-sm">CEO, Flowlie</p>
                  </div>
                </div>
              </div>
            </motion.blockquote>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CTA - Sophisticated & Premium */}
      {/* ================================================================== */}
      <section className="bg-off-white py-24 md:py-32 relative overflow-hidden">
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/30 to-transparent" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/4 right-0 w-64 h-64 bg-navy/5 rounded-full blur-3xl pointer-events-none" />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            {/* Content wrapper with premium card treatment */}
            <div className="text-center">
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-navy/5 border border-navy/10 mb-8">
                <span className="w-2 h-2 bg-gold rounded-full" />
                <span className="text-navy/70 text-xs font-medium tracking-wider uppercase">Start Here</span>
              </span>

              <h2 className="text-navy text-4xl md:text-5xl font-display font-semibold leading-tight">
                One conversation.<br />
                <span className="text-gold">Complete clarity.</span>
              </h2>

              <p className="mt-6 text-grey-body text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
                In 30 minutes, you'll know exactly where AI creates leverage in your business—and whether we're the right team to build it with you.
              </p>

              {/* Trust Signals - warm grey card for layered depth */}
              <div className="mt-10 inline-flex flex-wrap items-center justify-center gap-x-6 gap-y-3 px-6 py-4 bg-warm-grey rounded-2xl">
                <span className="flex items-center gap-2 text-navy/80">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm font-medium">Same-week availability</span>
                </span>
                <span className="flex items-center gap-2 text-navy/80">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm font-medium">No obligation</span>
                </span>
                <span className="flex items-center gap-2 text-navy/80">
                  <div className="w-5 h-5 rounded-full bg-gold/20 flex items-center justify-center">
                    <Check className="w-3 h-3 text-gold" />
                  </div>
                  <span className="text-sm font-medium">Real strategy, not a pitch</span>
                </span>
              </div>

              {/* CTA Button - elevated treatment */}
              <div className="mt-12">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-navy text-off-white font-semibold text-lg rounded-xl hover:bg-navy-light transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 text-gold" />
                  <span>Schedule Your Strategy Call</span>
                  <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Subtle reassurance */}
              <p className="mt-6 text-grey-body/60 text-sm">
                Speaking directly with Andrew Moss, not a sales team.
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
