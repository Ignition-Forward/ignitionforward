import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { useState, useEffect } from "react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import MoveForwardButton from "@/components/MoveForwardButton";
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

// Evolution stages - from horse & buggy to AI/rocket
const evolutionStages = [
  {
    id: 'buggy',
    label: '1800s',
    // Horse and buggy silhouette
    svg: (
      <svg viewBox="0 0 200 80" fill="currentColor" className="w-full h-full">
        {/* Horse */}
        <ellipse cx="45" cy="50" rx="20" ry="15" opacity="0.9" />
        <ellipse cx="35" cy="40" rx="8" ry="12" opacity="0.9" />
        <path d="M28 30 Q25 20, 30 15 L35 25 Z" opacity="0.9" />
        {/* Legs */}
        <rect x="30" y="58" width="4" height="18" rx="2" opacity="0.8" />
        <rect x="40" y="58" width="4" height="18" rx="2" opacity="0.8" />
        <rect x="50" y="58" width="4" height="18" rx="2" opacity="0.8" />
        <rect x="58" y="58" width="4" height="18" rx="2" opacity="0.8" />
        {/* Connection */}
        <rect x="65" y="48" width="30" height="4" opacity="0.7" />
        {/* Buggy body */}
        <ellipse cx="120" cy="45" rx="25" ry="18" opacity="0.9" />
        {/* Wheels */}
        <circle cx="100" cy="65" r="12" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.8" />
        <circle cx="140" cy="65" r="12" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.8" />
        {/* Spokes */}
        <line x1="100" y1="53" x2="100" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="88" y1="65" x2="112" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="140" y1="53" x2="140" y2="77" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
        <line x1="128" y1="65" x2="152" y2="65" stroke="currentColor" strokeWidth="1.5" opacity="0.5" />
      </svg>
    ),
  },
  {
    id: 'train',
    label: '1850s',
    // Steam locomotive
    svg: (
      <svg viewBox="0 0 200 80" fill="currentColor" className="w-full h-full">
        {/* Boiler */}
        <rect x="20" y="30" width="80" height="30" rx="15" opacity="0.9" />
        {/* Cab */}
        <rect x="100" y="20" width="40" height="45" rx="3" opacity="0.9" />
        <rect x="105" y="25" width="12" height="12" rx="2" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.6" />
        {/* Smokestack */}
        <rect x="35" y="10" width="15" height="20" rx="2" opacity="0.85" />
        <ellipse cx="42.5" cy="8" rx="10" ry="4" opacity="0.7" />
        {/* Steam puffs */}
        <circle cx="42" cy="-2" r="6" opacity="0.3" />
        <circle cx="50" cy="-8" r="5" opacity="0.2" />
        <circle cx="38" cy="-10" r="4" opacity="0.15" />
        {/* Cowcatcher */}
        <path d="M5 65 L20 35 L20 65 Z" opacity="0.7" />
        {/* Wheels */}
        <circle cx="45" cy="65" r="14" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.85" />
        <circle cx="85" cy="65" r="14" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.85" />
        <circle cx="120" cy="65" r="10" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.8" />
        <circle cx="145" cy="65" r="10" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.8" />
        {/* Connecting rod */}
        <rect x="45" y="60" width="45" height="3" rx="1" opacity="0.6" />
      </svg>
    ),
  },
  {
    id: 'car',
    label: '1920s',
    // Early automobile
    svg: (
      <svg viewBox="0 0 200 80" fill="currentColor" className="w-full h-full">
        {/* Body */}
        <path d="M30 50 L40 30 L80 25 L130 25 L150 35 L160 50 L160 55 L30 55 Z" opacity="0.9" />
        {/* Roof */}
        <path d="M55 25 L60 12 L120 12 L125 25" fill="none" stroke="currentColor" strokeWidth="3" opacity="0.8" />
        {/* Windows */}
        <rect x="62" y="14" width="20" height="10" rx="1" opacity="0.4" />
        <rect x="88" y="14" width="20" height="10" rx="1" opacity="0.4" />
        {/* Hood */}
        <rect x="130" y="35" width="35" height="18" rx="2" opacity="0.85" />
        {/* Headlight */}
        <circle cx="168" cy="42" r="5" opacity="0.7" />
        {/* Fenders */}
        <ellipse cx="55" cy="58" rx="20" ry="8" opacity="0.85" />
        <ellipse cx="135" cy="58" rx="20" ry="8" opacity="0.85" />
        {/* Wheels */}
        <circle cx="55" cy="62" r="14" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.9" />
        <circle cx="55" cy="62" r="8" opacity="0.5" />
        <circle cx="135" cy="62" r="14" fill="none" stroke="currentColor" strokeWidth="4" opacity="0.9" />
        <circle cx="135" cy="62" r="8" opacity="0.5" />
        {/* Running board */}
        <rect x="70" y="55" width="50" height="4" rx="1" opacity="0.7" />
      </svg>
    ),
  },
  {
    id: 'plane',
    label: '1960s',
    // Jet airplane
    svg: (
      <svg viewBox="0 0 200 80" fill="currentColor" className="w-full h-full">
        {/* Fuselage */}
        <ellipse cx="100" cy="40" rx="75" ry="12" opacity="0.9" />
        {/* Nose cone */}
        <path d="M175 40 L195 40 L175 35 M175 40 L195 40 L175 45" opacity="0.85" />
        {/* Cockpit */}
        <ellipse cx="165" cy="38" rx="12" ry="6" opacity="0.5" />
        {/* Wings */}
        <path d="M80 40 L60 70 L70 70 L100 45 Z" opacity="0.85" />
        <path d="M80 40 L60 10 L70 10 L100 35 Z" opacity="0.85" />
        {/* Tail */}
        <path d="M25 40 L10 20 L20 20 L35 35 Z" opacity="0.8" />
        <path d="M25 40 L15 55 L25 55 L35 45 Z" opacity="0.8" />
        {/* Engines */}
        <ellipse cx="75" cy="55" rx="12" ry="5" opacity="0.75" />
        <ellipse cx="75" cy="25" rx="12" ry="5" opacity="0.75" />
        {/* Windows */}
        <circle cx="140" cy="38" r="2" opacity="0.4" />
        <circle cx="130" cy="38" r="2" opacity="0.4" />
        <circle cx="120" cy="38" r="2" opacity="0.4" />
        <circle cx="110" cy="38" r="2" opacity="0.4" />
      </svg>
    ),
  },
  {
    id: 'rocket',
    label: 'Now',
    // Modern rocket / spacecraft
    svg: (
      <svg viewBox="0 0 200 80" fill="currentColor" className="w-full h-full">
        {/* Main body */}
        <path d="M40 40 L170 40 L190 35 L190 45 L170 40" opacity="0.95" />
        <ellipse cx="105" cy="40" rx="70" ry="14" opacity="0.9" />
        {/* Nose cone - sleek */}
        <path d="M175 40 Q195 40, 198 40" stroke="currentColor" strokeWidth="8" fill="none" opacity="0.9" strokeLinecap="round" />
        {/* Fins */}
        <path d="M45 40 L25 65 L40 60 L55 45 Z" opacity="0.85" />
        <path d="M45 40 L25 15 L40 20 L55 35 Z" opacity="0.85" />
        <path d="M50 40 L40 55 L55 50 Z" opacity="0.7" />
        <path d="M50 40 L40 25 L55 30 Z" opacity="0.7" />
        {/* Engine glow */}
        <ellipse cx="30" cy="40" rx="8" ry="6" opacity="0.6" />
        {/* Thrust flames */}
        <path d="M30 40 L5 35 L15 40 L5 45 Z" opacity="0.4" />
        <path d="M25 40 L-5 38 L10 40 L-5 42 Z" opacity="0.25" />
        {/* Window/viewport */}
        <ellipse cx="160" cy="40" rx="8" ry="6" opacity="0.5" />
        {/* Tech details */}
        <line x1="80" y1="30" x2="80" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="100" y1="28" x2="100" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="120" y1="28" x2="120" y2="52" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <line x1="140" y1="30" x2="140" y2="50" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        {/* Speed lines */}
        <line x1="-10" y1="35" x2="20" y2="35" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <line x1="-20" y1="40" x2="15" y2="40" stroke="currentColor" strokeWidth="1.5" opacity="0.25" />
        <line x1="-10" y1="45" x2="20" y2="45" stroke="currentColor" strokeWidth="1" opacity="0.2" />
      </svg>
    ),
  },
];




export default function About() {
  const [currentStage, setCurrentStage] = useState(0);

  // Cycle through evolution stages
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentStage((prev) => (prev + 1) % evolutionStages.length);
    }, 3000); // 3 seconds per stage

    return () => clearInterval(interval);
  }, []);

  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <div className="overflow-hidden pb-mobile-cta">
      <SEO
        title="About Us"
        description="Ignition Forward: AI acceleration for operators who'd rather build than theorize. $1B+ in exits, $3B+ raised, 26 months of AI systems in production."
        canonical="/about"
        structuredData={structuredData}
      />

      <ScrollProgress />

      {/* Hero Section - Track Record Focus */}
      <section className="relative min-h-hero-compact flex items-center bg-navy pt-24 pb-16 overflow-hidden">
        {/* Evolution Animation Background - positioned to the right */}
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* Timeline track - shifted right */}
          <div
            className="absolute w-[60%] h-[2px] top-1/2 -translate-y-1/2 right-0"
            style={{
              background: 'linear-gradient(90deg, transparent 0%, rgba(201, 169, 98, 0.15) 30%, rgba(201, 169, 98, 0.25) 70%, rgba(201, 169, 98, 0.1) 100%)',
            }}
          />

          {/* Stage indicators - positioned to the right */}
          <div className="absolute bottom-[18%] right-[15%] md:right-[20%] flex items-center gap-3 md:gap-6">
            {evolutionStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className="flex flex-col items-center gap-2"
                animate={{
                  opacity: currentStage === index ? 1 : 0.3,
                  scale: currentStage === index ? 1.1 : 1,
                }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    currentStage === index
                      ? 'bg-gold shadow-[0_0_12px_rgba(201,169,98,0.6)]'
                      : currentStage > index
                        ? 'bg-gold/50'
                        : 'bg-white/20'
                  }`}
                />
                <span className={`text-[10px] md:text-xs font-body tracking-wide transition-colors duration-300 ${
                  currentStage === index ? 'text-gold' : 'text-white/40'
                }`}>
                  {stage.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Evolution silhouette - shape-shifting morph animation, positioned right */}
          <div className="absolute right-[10%] md:right-[15%] top-1/2 -translate-y-1/2 w-[280px] md:w-[450px] h-[120px] md:h-[180px]">
            {/* Show all stages, morph between them with opacity and blur */}
            {evolutionStages.map((stage, index) => (
              <motion.div
                key={stage.id}
                className="absolute inset-0 text-gold/25"
                initial={false}
                animate={{
                  opacity: currentStage === index ? 1 : 0,
                  scale: currentStage === index ? 1 : 0.95,
                  filter: currentStage === index ? 'blur(0px)' : 'blur(8px)',
                }}
                transition={{
                  duration: 1.2,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                {stage.svg}
              </motion.div>
            ))}
          </div>

          {/* Ambient glow behind current stage - positioned right */}
          <motion.div
            className="absolute right-[10%] md:right-[13%] top-1/2 -translate-y-1/2 w-[350px] h-[180px] md:w-[500px] md:h-[250px]"
            style={{
              background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.08) 0%, transparent 60%)',
              filter: 'blur(40px)',
            }}
            animate={{
              scale: [1, 1.15, 1],
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
          />
        </div>

        {/* Sophisticated Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy z-0" />

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
                    started a business at 20 selling promotional items to campus groups. People thought I was crazy to leave NYU Law for a t-shirt company—until it sold for $700 million.
                  </p>

                  <div className="mt-8 space-y-6 text-grey-body leading-relaxed font-body">
                    <p>
                      I left CustomInk early. A decision I still call a lesson learned. Then I spent a decade building other things: a hedge fund with Greenlight backing, a company with 190 employees that sold to Gilt, another that got acquired back into CustomInk. I returned as President and helped finish what I'd walked away from.
                    </p>

                    <p>
                      Somewhere in there I made 100+ investments. Three became unicorns. I've been on boards where I've hired CEOs and boards where I've delivered news nobody wanted to hear.
                    </p>

                    {/* Pull quote */}
                    <blockquote className="my-10 py-6 border-y border-navy/10">
                      <p className="text-xl md:text-2xl font-display text-navy italic leading-relaxed">
                        "If the structure doesn't work for everyone, I walk."
                      </p>
                    </blockquote>

                    <p>
                      For ten years, I stopped building to advise and invest. Then AI crossed a threshold. Things I'd wanted to build for years became buildable. I'd been a client of Ignition for 15 years. I knew the business. I knew what it could become. I told Craig, the founder: you're a doer, not a builder. Let me partner with you.
                    </p>

                    <p>
                      We don't sell things we haven't used. The AI systems here run our own business first. If they don't make us better, we don't deploy them for anyone else.
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
