import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import MoveForwardButton from "@/components/MoveForwardButton";
import ForgeBackdrop from "@/components/ForgeBackdrop";
import ScrollIndicator from "@/components/ScrollIndicator";
import ScrollProgress from "@/components/ScrollProgress";

/*
 * ABOUT PAGE - Redesigned
 * - Starts with Who We Are (team first)
 * - Better team layout highlighting Andrew
 * - Track record stats in hero
 * - Mobile-optimized design
 */

const trackRecord = [
  { value: "$1B+", label: "In Exits" },
  { value: "$3B+", label: "Equity & Debt Raised" },
  { value: "500+", label: "Companies Advised" },
];




export default function About() {
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <div className="overflow-hidden pb-mobile-cta">
      <SEO
        title="About Us"
        description="Ignition Forward: AI acceleration for operators who'd rather build than theorize. $1B+ in exits, $3B+ raised, 18 months of AI systems in production."
        canonical="/about"
        structuredData={structuredData}
      />

      <ScrollProgress />

      {/* Hero Section - Track Record Focus */}
      <section className="relative min-h-hero-compact flex items-center bg-navy pt-24 pb-16 overflow-hidden">
        {/* Background Image - Static */}
        <div 
          className="absolute inset-0 z-0 grayscale"
          style={{
            backgroundImage: 'url(/images/hero-about.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.2,
          }}
        />
        
        {/* Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy z-0" />
        
        {/* Forge backdrop - nodes, connections, and rising embers */}
        <ForgeBackdrop />
        
        {/* Subtle Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-10 z-0" />
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
            className="max-w-4xl"
          >
            <span className="section-label">Who We Are</span>

            <h1 className="mt-8 font-display text-4xl md:text-5xl lg:text-7xl text-off-white leading-[1.1] font-semibold">
              AI acceleration <br />
              <em className="text-gold">for operators.</em>
            </h1>

            <p className="mt-8 text-off-white/80 text-lg md:text-xl max-w-2xl leading-relaxed font-body">
              We'd rather build than theorize. Legal training, institutional finance, successful exits—and 18 months of AI systems in production. We solve our own problems first.
            </p>
          </motion.div>
          
          {/* Track Record Stats */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.3 }}
            className="mt-12 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
          >
            {trackRecord.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.24, delay: 0.4 + index * 0.1 }}
                className="text-center md:text-left"
              >
                <div className="text-2xl md:text-4xl font-display text-gold">{stat.value}</div>
                <div className="mt-1 text-xs md:text-sm text-off-white/60">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        <ScrollIndicator />
      </section>

      {/* Our Story - Clear origin explainer */}
      <section className="bg-charcoal py-20 md:py-28 relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            {/* Section Label */}
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">Our Story</span>

            {/* Origin Explainer */}
            <p className="font-body text-lg md:text-xl text-off-white/90 leading-relaxed mt-6">
              <span className="text-gold font-medium">Ignition Forward</span> is the AI practice of The Forward Group. It was born inside <a href="https://www.ignitionconsultants.com" target="_blank" rel="noopener noreferrer" className="text-gold hover:text-gold-hover transition-colors underline underline-offset-2">Ignition Consultants</a>—the fractional CFO firm Craig Gainsboro built after 15 years at PwC.
            </p>
            <p className="font-body text-lg md:text-xl text-off-white/70 leading-relaxed mt-6">
              When we needed AI, we built Maguire ourselves. It worked so well that other operators started asking how.
            </p>
            <p className="font-body text-lg md:text-xl text-off-white/90 leading-relaxed mt-6">
              That's Ignition Forward: the same systems we run, adapted to your business.
            </p>

            {/* CTA */}
            <div className="mt-10">
              <Link href="/maguire" className="inline-flex items-center gap-2 text-gold font-body font-medium hover:text-gold-hover transition-colors">
                See how we built Maguire <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>

          {/* Trust Logos */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-20"
          >
            <p className="text-center text-off-white/40 text-xs tracking-[0.2em] uppercase font-body mb-8">
              Our team has experience from
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12 opacity-50">
              {/* NYU */}
              <div className="h-8 flex items-center">
                <span className="font-display text-2xl text-off-white font-semibold tracking-tight">NYU</span>
              </div>
              {/* PwC */}
              <div className="h-8 flex items-center">
                <span className="font-body text-lg text-off-white font-medium">PwC</span>
              </div>
              {/* E&Y */}
              <div className="h-8 flex items-center">
                <span className="font-body text-lg text-off-white font-medium">E&Y</span>
              </div>
              {/* Davis Polk */}
              <div className="h-8 flex items-center">
                <span className="font-body text-lg text-off-white font-medium">Davis Polk</span>
              </div>
              {/* CustomInk */}
              <div className="h-8 flex items-center">
                <span className="font-body text-lg text-off-white font-medium">CustomInk</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Andrew Section - Founder */}
      <section className="py-16 md:py-24 bg-off-white relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Magazine-style category label */}
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px flex-1 bg-navy/10" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium px-4">Founder</span>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            {/* Two-column editorial layout */}
            <div className="grid md:grid-cols-12 gap-8 md:gap-12">
              {/* Left column - Name and portrait */}
              <div className="md:col-span-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                >
                  {/* Portrait placeholder */}
                  <div className="aspect-[3/4] bg-gradient-to-br from-navy via-navy-light to-navy rounded-sm overflow-hidden relative mb-6">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="text-6xl md:text-7xl font-display text-gold/80">AM</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">
                    Andrew Moss
                  </h2>
                  <p className="mt-2 text-grey-body text-sm tracking-wide">
                    Founder
                  </p>

                  {/* Key numbers */}
                  <div className="mt-8 pt-6 border-t border-navy/10 grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-2xl font-display text-navy">$10B+</div>
                      <div className="text-xs text-grey-body mt-1">AUM navigated</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display text-navy">3</div>
                      <div className="text-xs text-grey-body mt-1">Unicorn seeds</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display text-navy">25+</div>
                      <div className="text-xs text-grey-body mt-1">Years building</div>
                    </div>
                    <div>
                      <div className="text-2xl font-display text-navy">$800M+</div>
                      <div className="text-xs text-grey-body mt-1">In exits</div>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Right column - Editorial narrative */}
              <div className="md:col-span-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                >
                  <p className="text-xl md:text-2xl text-navy leading-relaxed font-display">
                    <span className="float-left text-6xl md:text-7xl font-display text-gold leading-none mr-3 mt-1">A</span>
                    fter years of advising at inflection points, Andrew found deeper fulfillment in building—not just advising on what to build.
                  </p>

                  <div className="mt-8 space-y-6 text-grey-body leading-relaxed">
                    <p>
                      The background: NYU Law, Davis Polk, Assistant General Counsel at Highfields Capital ($10B+ AUM) navigating the 2008 crisis from inside the room. Then Partner and COO of a $185M fund seeded by David Einhorn's Greenlight Capital. Co-founder of CustomInk ($600M+ revenue). Founder of BuyWithMe (Bain Capital, Matrix Partners). Seed investor in three unicorns: Slice, Freshly, HomeChef.
                    </p>

                    <p>
                      For years, that experience translated into advisory work—helping operators at critical moments. But then AI crossed a threshold. Things he'd wanted to create for years became possible. And he realized: even advisory conversations were becoming AI conversations.
                    </p>

                    {/* Pull quote */}
                    <blockquote className="my-10 py-6 border-y border-navy/10">
                      <p className="text-xl md:text-2xl font-display text-navy italic leading-relaxed">
                        "Immersion beats observation."
                      </p>
                    </blockquote>

                    <p>
                      So he shifted. Forward Group is where that work lives now. For the past 18 months, Andrew has been building and running Maguire—an AI system that handles research, deal analysis, and client intelligence. Not theoretical. In production. 232+ iterations and counting.
                    </p>
                  </div>

                  {/* Background */}
                  <div className="mt-12 pt-8 border-t border-navy/10">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6">Background</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                      {[
                        "NYU Law / Davis Polk",
                        "Highfields Capital",
                        "Greenlight-seeded fund",
                        "CustomInk Co-Founder",
                        "3 Unicorn Seeds",
                        "AI Systems Builder"
                      ].map((item, i) => (
                        <div key={i} className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-gold" />
                          <span className="text-sm text-grey-body">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-navy/10" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium px-4">Team</span>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {/* Jackson Moss */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-xl font-display text-gold flex-shrink-0">
                  JM
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-navy">Jackson Moss</h3>
                  <p className="text-sm text-gold mt-1">Forward Deployed Engineer</p>
                  <p className="mt-3 text-grey-body text-sm leading-relaxed">
                    Jackson builds the systems that make Ignition Forward work—from the Uru platform that powers our AI operations to the custom implementations we deploy for clients. He's the builder Andrew always wanted to work alongside.
                  </p>
                </div>
              </motion.div>

              {/* Brian Moran */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-xl font-display text-gold flex-shrink-0">
                  BM
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-navy">Brian Moran</h3>
                  <p className="text-sm text-gold mt-1">CFO & GP Practice Lead</p>
                  <p className="mt-3 text-grey-body text-sm leading-relaxed">
                    7 years at Bain doing exactly what GPs and family offices need: fund admin oversight, budgeting/forecasting, reserve planning, tax/audit coordination.
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-off-white">
              Start a conversation.
            </h2>
            <p className="mt-4 text-off-white/70">
              If you're facing a decision that matters, reach out. No pitch, no pressure—just a conversation to see if there's overlap with what we're building.
            </p>
            <div className="mt-8">
              <MoveForwardButton className="text-lg" />
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
