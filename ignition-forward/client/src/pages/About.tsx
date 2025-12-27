import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Scale, TrendingUp, Building2, Rocket, Bot, Briefcase, Users, Award, ArrowRight, Check } from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

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

const andrewExpertise = [
  { icon: Scale, title: "Legal", items: ["NYU Law JD", "Davis Polk (3 yrs)", "Hedge Fund AGC ($10B+ AUM)"] },
  { icon: TrendingUp, title: "Investment", items: ["Partner/COO, Greenlight-seeded fund", "Highfields Capital ($10B+ AUM)", "3 Unicorn Seed Investments"] },
  { icon: Building2, title: "Board & Advisory", items: ["Board Director, multiple companies", "Strategic advisor to GPs", "LP relations expertise"] },
  { icon: Rocket, title: "Founding & Exits", items: ["CustomInk Co-Founder ($600M+ rev)", "BuyWithMe Founder (Bain/Matrix)", "Multiple successful exits"] },
  { icon: Bot, title: "AI Practitioner", items: ["Maguire (18 months production)", "URU Knowledge Platform", "232+ system iterations"] },
];

const teamMembers = [
  {
    initials: "CG",
    name: "Craig Gainsboro",
    role: "Co-Founder & CEO, Ignition Consultants",
    bio: "15 years at PwC, serving as U.S. CFO for Tax and Advisory ($4.5B combined revenue). Built Ignition with a fundamental belief: growing companies need a trusted partner completely aligned with their interests.",
    highlights: ["PwC US CFO (Tax & Advisory)", "Ernst & Young", "500+ clients served", "$3B+ raised for clients"],
  },
  {
    initials: "BM",
    name: "Brian Moran",
    role: "CFO & GP Practice Lead",
    bio: "7 years at Bain doing exactly what GPs and family offices need: fund admin oversight, budgeting/forecasting, reserve planning, tax/audit coordination. The person you call when you're moving to a new fund admin or need to quarterback LP season.",
    highlights: ["Bain (7 years)", "Fund Admin Expert", "LP Reporting", "Reserve Planning"],
  },
];

const principles = [
  { number: "01", title: "We deploy, not deck.", description: "No 80-slide recommendations that gather dust. We build systems that run on day one." },
  { number: "02", title: "Speed compounds.", description: "Every day of delay is competitive advantage lost. We move fast because the window is closing." },
  { number: "03", title: "Your edge, amplified.", description: "AI should multiply your expertise, not replace it. We build systems that make you more dangerous." },
  { number: "04", title: "Eat our own cooking.", description: "Maguire runs our firm. Everything we deploy, we use ourselves first." },
  { number: "05", title: "Confidentiality is infrastructure.", description: "Legal training informs everything. LP data, portfolio company financials, deal flow intel—it stays yours." },
];

export default function About() {
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'About', url: '/about' },
  ]);

  return (
    <div className="overflow-hidden">
      <SEO
        title="About Us"
        description="Meet the team behind Ignition Forward. $1B+ in exits, $3B+ raised, 500+ companies advised. Legal training, institutional finance, and AI practitioner expertise combined."
        canonical="/about"
        structuredData={structuredData}
      />
      
      {/* Hero Section - Track Record Focus */}
      <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center bg-navy pt-24 pb-16">
        {/* Particle field */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-gold/30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
        
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36 }}
            className="max-w-4xl"
          >
            <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Who We Are</span>
            
            <h1 className="mt-6 font-display text-4xl md:text-5xl lg:text-6xl text-off-white leading-[1.1]">
              Operators who build what we use.
            </h1>
            
            <p className="mt-6 text-off-white/70 text-lg md:text-xl max-w-2xl leading-relaxed">
              Legal training. Institutional finance. Successful exits. AI practitioners. We've been on your side of the table—and we built systems to solve our own problems first.
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
      </section>

      {/* Andrew Section - Featured Leader */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">Leadership</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4">
              Meet Andrew Moss
            </h2>
            <p className="mt-4 text-grey-body max-w-2xl mx-auto">
              Co-Founder & Principal — The rare combination of legal training, institutional finance, and operator experience that makes our approach different.
            </p>
          </motion.div>
          
          {/* Andrew's Full Profile */}
          <div className="max-w-5xl mx-auto">
            {/* Bio Card */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white rounded-2xl p-6 md:p-10 border border-slate/10 shadow-sm"
            >
              <div className="flex flex-col md:flex-row gap-8">
                {/* Avatar and Quick Stats */}
                <div className="flex flex-col items-center md:items-start">
                  <div className="w-24 h-24 md:w-32 md:h-32 rounded-2xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-3xl md:text-4xl font-display text-gold">
                    AM
                  </div>
                  <div className="mt-4 text-center md:text-left">
                    <h3 className="text-xl font-semibold text-navy">Andrew Moss</h3>
                    <p className="text-sm text-grey-body">Co-Founder & Principal</p>
                  </div>
                  <p className="mt-3 text-sm text-gold italic text-center md:text-left">
                    "Strategic angel with emphasis on strategic."
                  </p>
                </div>
                
                {/* Bio Text */}
                <div className="flex-1">
                  <p className="text-grey-body leading-relaxed">
                    Andrew served as Partner/COO for a $185M value-oriented hedge fund seeded by David Einhorn/Greenlight Capital, and as Assistant General Counsel at Highfields Capital ($10B+ AUM)—navigating the 2008 crisis from inside the room.
                  </p>
                  <p className="mt-4 text-grey-body leading-relaxed">
                    His legal + institutional finance background gives him a lens most AI consultants simply don't have. He co-founded CustomInk (grew to $600M+ revenue), founded BuyWithMe (backed by Bain Capital and Matrix Partners), and has been a seed investor in three unicorns: Slice, Freshly, and HomeChef.
                  </p>
                  
                  {/* Quick Stats Row */}
                  <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="text-center p-3 bg-navy/5 rounded-lg">
                      <div className="text-lg font-semibold text-navy">$10B+</div>
                      <div className="text-xs text-grey-body">AUM Experience</div>
                    </div>
                    <div className="text-center p-3 bg-navy/5 rounded-lg">
                      <div className="text-lg font-semibold text-navy">$200M+</div>
                      <div className="text-xs text-grey-body">Capital Deployed</div>
                    </div>
                    <div className="text-center p-3 bg-navy/5 rounded-lg">
                      <div className="text-lg font-semibold text-navy">$800M+</div>
                      <div className="text-xs text-grey-body">In Exits</div>
                    </div>
                    <div className="text-center p-3 bg-navy/5 rounded-lg">
                      <div className="text-lg font-semibold text-navy">25+</div>
                      <div className="text-xs text-grey-body">Years Operating</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            {/* Expertise Grid */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-8 grid grid-cols-2 md:grid-cols-5 gap-4"
            >
              {andrewExpertise.map((area, index) => (
                <motion.div
                  key={area.title}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white rounded-xl p-5 border border-slate/10 hover:border-gold/30 hover:shadow-md transition-all duration-300"
                >
                  <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-3">
                    <area.icon className="w-5 h-5 text-gold" />
                  </div>
                  <h4 className="font-semibold text-navy text-sm">{area.title}</h4>
                  <ul className="mt-2 space-y-1">
                    {area.items.map((item, i) => (
                      <li key={i} className="text-xs text-grey-body">{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section - Craig and Brian */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">The Team</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy mt-4">
              Built by Operators
            </h2>
            <p className="mt-4 text-grey-body max-w-2xl mx-auto">
              We've been on your side of the table. Finance leaders, fund operators, and builders who understand what's at stake.
            </p>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-off-white rounded-2xl p-6 md:p-8 border border-slate/10"
              >
                <div className="flex items-start gap-4">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-navy to-navy-light flex items-center justify-center text-xl font-display text-gold flex-shrink-0">
                    {member.initials}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-navy">{member.name}</h3>
                    <p className="text-sm text-gold">{member.role}</p>
                  </div>
                </div>
                
                <p className="mt-4 text-grey-body text-sm leading-relaxed">
                  {member.bio}
                </p>
                
                <div className="mt-4 flex flex-wrap gap-2">
                  {member.highlights.map((highlight, i) => (
                    <span key={i} className="px-3 py-1 bg-navy/5 rounded-full text-xs text-navy">
                      {highlight}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How We Work - Principles */}
      <section className="py-16 md:py-24 bg-navy">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="text-xs tracking-[0.2em] uppercase text-gold font-medium">How We Work</span>
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-off-white mt-4">
              Our Principles
            </h2>
          </motion.div>
          
          <div className="max-w-4xl mx-auto grid gap-4">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.number}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 md:gap-6 p-4 md:p-6 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <span className="text-gold font-display text-xl md:text-2xl">{principle.number}</span>
                <div>
                  <h3 className="text-off-white font-semibold">{principle.title}</h3>
                  <p className="mt-1 text-off-white/60 text-sm">{principle.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24 bg-off-white">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy">
              Ready to work with operators who've been there?
            </h2>
            <p className="mt-4 text-grey-body">
              We only take on engagements where we're confident we can deliver real value. Let's see if there's a fit.
            </p>
            <div className="mt-8">
              <CometCTA href="/contact" variant="button" className="text-lg">
                Move Forward
              </CometCTA>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
