import { motion } from "framer-motion";
import {
  ArrowRight, Zap, Users, Layers,
  Check, Clock, Shield, MessageSquare, Calendar
} from "lucide-react";
import ScrollIndicator from "@/components/ScrollIndicator";

/*
 * HOW WE HELP - SERVICES OVERVIEW
 *
 * Structure:
 * 1. Hero with inline proof stats
 * 2. Core 80/20 differentiator
 * 3. Three Service Cards
 * 4. Social Proof testimonial
 * 5. Final CTA
 */

export default function HowWeHelp() {
  return (
    <div className="overflow-hidden">
      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="relative bg-black overflow-hidden pt-32 pb-24 md:pb-32 min-h-[70vh] flex items-center">
        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.2, 0, 0, 1] }}
              className="text-off-white text-5xl md:text-6xl lg:text-7xl font-display font-semibold leading-snug"
            >
              Useful AI for owners.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="text-off-white/40 text-5xl md:text-6xl lg:text-7xl font-display font-light italic leading-snug mt-4"
            >
              Not engineers.
            </motion.p>

            {/* Two Principle Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: [0.2, 0, 0, 1] }}
              className="mt-16 grid md:grid-cols-2 gap-6 max-w-3xl mx-auto"
            >
              <div className="p-7 rounded-xl bg-white/5 border border-white/10 border-l-2 border-l-gold text-left">
                <h4 className="text-off-white font-display text-xl md:text-2xl mb-2">Build WITH, Not FOR</h4>
                <p className="text-off-white/60 text-base leading-relaxed">We transfer capability, not just deliverables. You own everything and can run it without us.</p>
                <p className="mt-3 text-gold text-sm font-medium">100% of clients independent within 90 days.</p>
              </div>
              <div className="p-7 rounded-xl bg-white/5 border border-white/10 border-l-2 border-l-gold text-left">
                <h4 className="text-off-white font-display text-xl md:text-2xl mb-2">Start Small, Scale Fast</h4>
                <p className="text-off-white/60 text-base leading-relaxed">Prove value in weeks, not quarters. Then expand what works.</p>
                <p className="mt-3 text-gold text-sm font-medium">First workflow live in 3 weeks on average.</p>
              </div>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ================================================================== */}
      {/* PRINCIPLES SECTION - 80/20 with Stats */}
      {/* ================================================================== */}
      <section className="bg-off-white py-20 md:py-24">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col lg:flex-row gap-6">
                {/* 80/20 Card */}
                <div className="flex-1 p-8 md:p-10 rounded-3xl bg-navy border border-navy-light/50">
                  <div className="flex flex-col md:flex-row items-start gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 rounded-2xl bg-gold/20 flex items-center justify-center">
                        <Layers className="w-7 h-7 text-gold" />
                      </div>
                    </div>
                    <div className="flex-1">
                      <span className="text-gold text-xs font-semibold uppercase tracking-wider">Our Core Differentiator</span>
                      <h2 className="mt-2 text-off-white text-2xl md:text-3xl font-display">
                        80% Proven + 20% Custom
                      </h2>
                      <p className="mt-4 text-off-white/70 leading-relaxed">
                        Every engagement builds on proprietary systems we've refined across dozens of implementations. Your 20% customization makes it uniquely yours—running on the infrastructure you choose.
                      </p>
                      <div className="mt-6 flex flex-wrap gap-3">
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                          <Check className="w-3.5 h-3.5 text-gold" />
                          <span className="text-off-white/80 text-sm">Battle-tested systems</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                          <Check className="w-3.5 h-3.5 text-gold" />
                          <span className="text-off-white/80 text-sm">Your data stays yours</span>
                        </div>
                        <div className="flex items-center gap-2 px-3 py-1.5 bg-white/5 rounded-full border border-white/10">
                          <Check className="w-3.5 h-3.5 text-gold" />
                          <span className="text-off-white/80 text-sm">Model-agnostic</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Black Stat Boxes - Right Side */}
                <div className="flex-shrink-0 grid grid-cols-3 lg:grid-cols-1 gap-4">
                  <div className="text-center px-6 py-5 bg-black rounded-xl border border-white/10">
                    <div className="text-3xl lg:text-4xl font-display text-gold font-bold">3X</div>
                    <div className="text-off-white/60 text-xs mt-1">revenue growth<br />at Maguire</div>
                  </div>
                  <div className="text-center px-6 py-5 bg-black rounded-xl border border-white/10">
                    <div className="text-2xl lg:text-3xl font-display text-gold font-bold">No LLM</div>
                    <div className="text-off-white/60 text-xs mt-1">Lock in</div>
                  </div>
                  <div className="text-center px-6 py-5 bg-black rounded-xl border border-white/10">
                    <div className="text-3xl lg:text-4xl font-display text-gold font-bold">90d</div>
                    <div className="text-off-white/60 text-xs mt-1">to full<br />independence</div>
                  </div>
                </div>
              </div>
            </motion.div>
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
                      <a
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Discuss Your Project
                      </a>
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
                      <a
                        href="/contact"
                        className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-gold text-navy font-semibold rounded-lg hover:bg-gold/90 transition-colors"
                      >
                        <MessageSquare className="w-5 h-5" />
                        Schedule a Conversation
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* EDGE - Black standout design for individual leaders */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="max-w-3xl mx-auto"
            >
              <div className="p-8 md:p-10 rounded-2xl bg-black border border-white/10 relative overflow-hidden">
                {/* Subtle glow accent */}
                <div className="absolute top-0 right-0 w-64 h-64 bg-gold/5 rounded-full blur-3xl pointer-events-none" />

                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 rounded-xl bg-gold/20 flex items-center justify-center">
                      <Zap className="w-6 h-6 text-gold" />
                    </div>
                    <div>
                      <span className="text-off-white/50 text-xs uppercase tracking-wider font-semibold">For Individual Leaders</span>
                      <h3 className="text-off-white font-display text-2xl">Edge</h3>
                    </div>
                  </div>

                  <p className="text-off-white/80 text-lg leading-relaxed mb-4">
                    Curious about AI but not ready to bring it to your whole organization? Start with personal fluency. <span className="text-gold font-medium">9 hours of 1:1 training</span> to build your own AI workflows and understand what's possible—before committing to a larger initiative.
                  </p>

                  <p className="text-gold text-sm font-medium mb-8">
                    Includes 30-day async access to Andrew for implementation questions.
                  </p>

                  <a
                    href="/edge"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 text-off-white font-semibold rounded-lg hover:bg-white/15 transition-colors border border-white/20 hover:border-white/30"
                  >
                    Learn More
                    <ArrowRight className="w-4 h-4" />
                  </a>
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
      {/* FINAL CTA - Bold Black Section */}
      {/* ================================================================== */}
      <section className="bg-off-white py-24 md:py-32 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="text-center">
              <h2 className="text-navy text-4xl md:text-5xl lg:text-6xl font-display font-light leading-tight italic">
                You know AI matters.<br />
                But you have a business to run.
              </h2>

              {/* CTA Button */}
              <div className="mt-12">
                <a
                  href="/contact"
                  className="group inline-flex items-center gap-3 px-8 py-4 bg-navy text-off-white font-semibold text-lg rounded-xl hover:bg-navy-light transition-all duration-300 shadow-lg hover:-translate-y-0.5"
                >
                  <Calendar className="w-5 h-5 text-gold" />
                  <span>Schedule Your Strategy Call</span>
                  <ArrowRight className="w-5 h-5 text-gold group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
