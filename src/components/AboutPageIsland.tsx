import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MoveForwardButton from "./MoveForwardButtonIsland";
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
  return (
    <div className="overflow-hidden pb-mobile-cta">
      <ScrollProgress />

      {/* Hero Section - Track Record Focus */}
      <section className="relative min-h-hero-compact flex items-center bg-navy pt-24 pb-16 overflow-hidden">
        {/* Subtle Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-10 z-0" />

        {/* Flywheel/Motor Animation - Right side, accelerating spin */}
        <div className="absolute right-[-5%] md:right-[5%] top-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[550px] md:h-[550px] pointer-events-none">
          {/* Outer ring - slowest rotation */}
          <motion.div
            className="absolute inset-0"
            animate={{ rotate: 360 }}
            transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Outer segmented ring */}
              <circle cx="200" cy="200" r="190" fill="none" stroke="rgba(201, 169, 98, 0.08)" strokeWidth="1" />
              {/* Tick marks around outer edge */}
              {[...Array(60)].map((_, i) => (
                <line
                  key={i}
                  x1="200"
                  y1="15"
                  x2="200"
                  y2={i % 5 === 0 ? "25" : "20"}
                  stroke={i % 5 === 0 ? "rgba(201, 169, 98, 0.25)" : "rgba(201, 169, 98, 0.1)"}
                  strokeWidth={i % 5 === 0 ? "1.5" : "1"}
                  transform={`rotate(${i * 6} 200 200)`}
                />
              ))}
            </svg>
          </motion.div>

          {/* Second ring - medium rotation */}
          <motion.div
            className="absolute inset-[12%]"
            animate={{ rotate: -360 }}
            transition={{ duration: 40, ease: "linear", repeat: Infinity }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="180" fill="none" stroke="rgba(201, 169, 98, 0.1)" strokeWidth="2" strokeDasharray="20 10" />
              {/* Gear teeth effect */}
              {[...Array(24)].map((_, i) => (
                <rect
                  key={i}
                  x="195"
                  y="25"
                  width="10"
                  height="20"
                  rx="2"
                  fill="rgba(201, 169, 98, 0.15)"
                  transform={`rotate(${i * 15} 200 200)`}
                />
              ))}
            </svg>
          </motion.div>

          {/* Third ring - faster rotation */}
          <motion.div
            className="absolute inset-[25%]"
            animate={{ rotate: 360 }}
            transition={{ duration: 25, ease: "linear", repeat: Infinity }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              <circle cx="200" cy="200" r="150" fill="none" stroke="rgba(201, 169, 98, 0.12)" strokeWidth="3" />
              {/* Spokes */}
              {[...Array(8)].map((_, i) => (
                <line
                  key={i}
                  x1="200"
                  y1="60"
                  x2="200"
                  y2="140"
                  stroke="rgba(201, 169, 98, 0.2)"
                  strokeWidth="2"
                  strokeLinecap="round"
                  transform={`rotate(${i * 45} 200 200)`}
                />
              ))}
            </svg>
          </motion.div>

          {/* Inner turbine - fastest rotation */}
          <motion.div
            className="absolute inset-[38%]"
            animate={{ rotate: -360 }}
            transition={{ duration: 12, ease: "linear", repeat: Infinity }}
          >
            <svg viewBox="0 0 400 400" className="w-full h-full">
              {/* Turbine blades */}
              {[...Array(6)].map((_, i) => (
                <path
                  key={i}
                  d="M200 200 L200 80 Q220 120, 200 200"
                  fill="rgba(201, 169, 98, 0.15)"
                  transform={`rotate(${i * 60} 200 200)`}
                />
              ))}
              <circle cx="200" cy="200" r="40" fill="none" stroke="rgba(201, 169, 98, 0.2)" strokeWidth="2" />
            </svg>
          </motion.div>

          {/* Core - glowing center */}
          <motion.div
            className="absolute inset-[45%] rounded-full"
            style={{
              background: 'radial-gradient(circle, rgba(201, 169, 98, 0.3) 0%, rgba(201, 169, 98, 0.1) 50%, transparent 70%)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
            }}
          />

          {/* Energy particles orbiting */}
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 rounded-full bg-gold/40"
              style={{
                left: '50%',
                top: '50%',
                marginLeft: '-4px',
                marginTop: '-4px',
              }}
              animate={{
                x: [0, Math.cos(i * 2.09) * 120, Math.cos(i * 2.09 + 2) * 120, 0],
                y: [0, Math.sin(i * 2.09) * 120, Math.sin(i * 2.09 + 2) * 120, 0],
                opacity: [0, 0.8, 0.8, 0],
                scale: [0.5, 1, 1, 0.5],
              }}
              transition={{
                duration: 4,
                ease: "easeInOut",
                repeat: Infinity,
                delay: i * 1.3,
              }}
            />
          ))}

          {/* Ambient glow */}
          <div
            className="absolute inset-[-20%] rounded-full pointer-events-none"
            style={{
              background: 'radial-gradient(circle, rgba(201, 169, 98, 0.06) 0%, transparent 50%)',
              filter: 'blur(40px)',
            }}
          />
        </div>

        {/* Left-side gradient overlay to ensure text readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/90 to-transparent z-[1]" />
        
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
              We'd rather build than theorize. Legal training, institutional finance, successful exits—and 26 months of AI systems in production. We solve our own problems first.
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
              <a href="/maguire"className="inline-flex items-center gap-2 text-gold font-body font-medium hover:text-gold-hover transition-colors">
                See how we built Maguire <ArrowRight className="w-4 h-4" />
              </a>
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

      {/* Founders Section */}
      <section className="py-16 md:py-24 bg-off-white relative overflow-hidden">
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            {/* Magazine-style category label */}
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px flex-1 bg-navy/10" />
              <span className="text-xs tracking-[0.3em] uppercase text-gold font-medium px-4">Founders</span>
              <div className="h-px flex-1 bg-navy/10" />
            </div>

            {/* Andrew Moss - Two-column editorial layout */}
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
                  <p className="mt-2 text-gold text-sm font-medium tracking-wide">
                    Managing Partner
                  </p>

                  {/* Key numbers - improved grid */}
                  <div className="mt-8 pt-6 border-t border-navy/10 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl md:text-3xl font-display text-navy font-semibold">$800M+</div>
                        <div className="text-xs text-grey-body mt-1">In exits</div>
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-display text-navy font-semibold">3</div>
                        <div className="text-xs text-grey-body mt-1">Unicorn seeds</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl md:text-3xl font-display text-navy font-semibold">100+</div>
                        <div className="text-xs text-grey-body mt-1">Investments</div>
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-display text-navy font-semibold">25+</div>
                        <div className="text-xs text-grey-body mt-1">Years building</div>
                      </div>
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
                    <span className="float-left text-6xl md:text-7xl font-display text-gold leading-none mr-3 mt-1">I</span>
                    thought I'd built enough companies years ago. Four companies, three exits, 100+ investments, five boards. So I figured I'd spend the next decade advising, investing, toward the sidelines.
                  </p>

                  <div className="mt-8 space-y-6 text-grey-body leading-relaxed font-body">
                    <p>
                      Then AI radically changed what a small team could actually build. Not eventually. Now. And more every day. It drew me back in.
                    </p>

                    {/* Pull quote */}
                    <blockquote className="my-10 py-6 border-y border-navy/10">
                      <p className="text-xl md:text-2xl font-display text-navy italic leading-relaxed">
                        "Pattern recognition plus the tools to finally act on it—with you, not for you."
                      </p>
                    </blockquote>

                    <p>
                      I'd been an Ignition client for 10 years. I partnered with Craig, we built a team, and we started using AI to drive big improvements inside our core business. Once we saw results we wanted to share—that's Ignition Forward.
                    </p>
                  </div>

                  {/* Background */}
                  <div className="mt-12 pt-8 border-t border-navy/10">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6">Background</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                      {[
                        "NYU Law",
                        "CustomInk Co-Founder",
                        "Greenlight-backed fund",
                        "100+ Investments",
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

            {/* Divider between founders */}
            <div className="my-16 md:my-20 h-px bg-navy/10" />

            {/* Craig Gainsboro - Two-column editorial layout */}
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
                      <span className="text-6xl md:text-7xl font-display text-gold/80">CG</span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-navy/40 via-transparent to-transparent" />
                  </div>

                  <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">
                    Craig Gainsboro
                  </h2>
                  <p className="mt-2 text-gold text-sm font-medium tracking-wide">
                    Founding Partner
                  </p>

                  {/* Key numbers */}
                  <div className="mt-8 pt-6 border-t border-navy/10 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl md:text-3xl font-display text-navy font-semibold">15</div>
                        <div className="text-xs text-grey-body mt-1">Years at PwC</div>
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-display text-navy font-semibold">500+</div>
                        <div className="text-xs text-grey-body mt-1">Companies advised</div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-2xl md:text-3xl font-display text-navy font-semibold">$3B+</div>
                        <div className="text-xs text-grey-body mt-1">Capital raised</div>
                      </div>
                      <div>
                        <div className="text-2xl md:text-3xl font-display text-navy font-semibold">20+</div>
                        <div className="text-xs text-grey-body mt-1">Years in finance</div>
                      </div>
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
                    <span className="float-left text-6xl md:text-7xl font-display text-gold leading-none mr-3 mt-1">I</span>
                    spent 15 years at PwC learning how institutional finance actually works—then left to build something better for growth-stage companies.
                  </p>

                  <div className="mt-8 space-y-6 text-grey-body leading-relaxed font-body">
                    <p>
                      <a href="https://www.ignitionconsultants.com" target="_blank" rel="noopener noreferrer" className="text-navy hover:text-gold transition-colors">Ignition Consultants</a> was the answer: fractional CFO services that give founders the financial infrastructure of a company ten times their size, without the overhead.
                    </p>

                    <p>
                      Over two decades, I've helped 500+ companies navigate everything from first institutional raise to successful exit. I've seen what separates operators who scale from those who stall—and it usually comes down to the systems they build.
                    </p>

                    {/* Pull quote */}
                    <blockquote className="my-10 py-6 border-y border-navy/10">
                      <p className="text-xl md:text-2xl font-display text-navy italic leading-relaxed">
                        "Execution is the strategy."
                      </p>
                    </blockquote>

                    <p>
                      When Andrew approached me about the AI opportunity, I knew the business could become more than it was. He saw what I'd built and knew how to take it further. Ignition Forward is that next step—applying the operational discipline we've always practiced to the most powerful technology shift of our careers.
                    </p>
                  </div>

                  {/* Background */}
                  <div className="mt-12 pt-8 border-t border-navy/10">
                    <h3 className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6">Background</h3>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-4">
                      {[
                        "PwC Senior Manager",
                        "Ignition Founder",
                        "Fractional CFO",
                        "500+ Companies",
                        "$3B+ Raised",
                        "Finance Operations"
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

              {/* Madeleine Garcia */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-xl font-display text-gold flex-shrink-0">
                  MG
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-navy">Madeleine Garcia</h3>
                  <p className="text-sm text-gold mt-1">AI Implementation Lead</p>
                  <p className="mt-3 text-grey-body text-sm leading-relaxed">
                    Madeleine operationalizes AI inside client organizations—turning workflows into systems that compound. She bridges the gap between what AI can do and what your team actually needs.
                  </p>
                </div>
              </motion.div>

              {/* Michael Lui */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="flex flex-col md:flex-row gap-5 items-start"
              >
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-xl font-display text-gold flex-shrink-0">
                  ML
                </div>
                <div>
                  <h3 className="text-lg font-display font-semibold text-navy">Michael Lui</h3>
                  <p className="text-sm text-gold mt-1">Systems Architect</p>
                  <p className="mt-3 text-grey-body text-sm leading-relaxed">
                    Michael designs the infrastructure that makes AI sustainable at scale—not demos, but production systems that run reliably without constant oversight.
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
              Ready to <span className="text-gold italic">gain an edge?</span>
            </h2>
            <p className="mt-4 text-off-white/70">
              30 minutes. No pitch, no pressure—just clarity on where AI creates leverage in your business.
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
