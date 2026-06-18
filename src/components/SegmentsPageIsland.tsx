import { motion } from 'framer-motion';
import { ArrowRight, Briefcase, Building2, ClipboardList, LineChart, Users, TrendingUp, Zap } from 'lucide-react';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import CometCTA from './CometCTAIsland';

/*
 * SEGMENTS OVERVIEW PAGE - Original Design System
 * Typography: Playfair Display + DM Sans
 * Colors: Navy #1A2332, Gold #C9A962, Off-White #F8F7F4
 * 
 * Includes: The Opportunity section (moved from homepage) + Mark Bugas testimonial
 */

const segments = [
  {
    icon: Briefcase,
    title: 'Professional Services',
    description: 'Consultancies, accounting practices, and professional services firms. Transform billable expertise into scalable systems.',
    href: '/professional-services',
    stats: '40% admin reduction',
  },
  {
    icon: Users,
    title: 'Founder-Led Businesses',
    description: 'Scale your expertise without scaling your calendar. AI systems that multiply your impact.',
    href: '/founder-led',
    stats: '3X revenue potential',
  },
  {
    icon: ClipboardList,
    title: 'EOS Implementers',
    description: 'Scale your practice without scaling your calendar, while keeping the methodology and facilitation yours.',
    href: '/eos-implementers',
    stats: '25-30 client capacity',
  },
  {
    icon: LineChart,
    title: 'GPs & Fund Managers',
    description: 'AI-augmented deal flow and LP relationships. Better decisions, faster execution.',
    href: '/fund-managers',
    stats: '55%→85% conversion',
  },
  {
    icon: Building2,
    title: 'PE Portfolio Operations',
    description: 'Accelerate value creation across holdings. Systematic AI deployment at scale.',
    href: '/pe-portfolio',
    stats: '232+ iterations',
  },
];

const opportunities = [
  {
    icon: TrendingUp,
    title: 'Talent That Wants In',
    description: 'Top performers increasingly want to work with AI-forward organizations. Your AI capability becomes a recruiting advantage.',
  },
  {
    icon: Users,
    title: "Clients You'll Serve Better",
    description: "You'll serve them in ways that weren't possible before. What felt like a trade-off between quality and scale dissolves.",
  },
  {
    icon: Zap,
    title: "Capacity You'll Unlock",
    description: 'The same team, dramatically more output. AI creates leverage that compounds over time.',
  },
];

export default function Segments() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-navy pt-32 pb-20 relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-30" />
        
        {/* Gradient accent */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.4) 0%, transparent 70%)',
          }}
        />

        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36 }}
            className="max-w-3xl"
          >
            <span className="section-label">Who We Work With</span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-semibold text-off-white mt-6 leading-[1.1]">
              Expert-Led <em className="text-gold">Businesses</em>
            </h1>
            <p className="font-body text-xl text-off-white-muted mt-6 max-w-2xl">
              We partner with leaders who've built their success on deep expertise. 
              Our AI systems amplify what makes you exceptional.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================
          THE OPPORTUNITY - What Becomes Possible
          (Moved from Homepage)
          ============================================ */}
      <section className="bg-navy py-24 relative overflow-hidden border-t border-white/5">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        
        <div className="container relative z-10">
          <ScrollReveal className="text-center max-w-3xl mx-auto">
            <span className="section-label">The Opportunity</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white mt-6">
              What becomes possible
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" speed="slow">
            {opportunities.map((opportunity) => (
              <StaggerItem key={opportunity.title}>
                <div className="glass-card p-8 h-full card-hover">
                  <opportunity.icon className="w-8 h-8 mb-4 text-gold" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-off-white">{opportunity.title}</h3>
                  <p className="font-body text-grey-body mt-3">{opportunity.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Mark Bugas Testimonial */}
          <ScrollReveal delay={0.3} className="mt-16">
            <div className="max-w-3xl mx-auto">
              <div className="glass-card p-8 md:p-10 relative">
                {/* Quote decoration */}
                <div className="absolute top-6 left-6 text-gold/20 font-display text-6xl leading-none">"</div>
                
                <blockquote className="font-body text-xl md:text-2xl text-off-white/90 italic leading-relaxed relative z-10 pl-8">
                  "We needed AI strategy that understood our business, not generic consulting. IF delivered exactly that."
                </blockquote>
                
                <div className="flex items-center gap-4 mt-8 pl-8">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold font-body text-lg">
                    MB
                  </div>
                  <div>
                    <p className="font-body text-off-white font-medium text-lg">Mark Bugas</p>
                    <p className="font-body text-grey-body">Partner, Boston Seed Capital</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Segments Grid */}
      <section className="bg-off-white py-24">
        <div className="container">
          <ScrollReveal className="text-center mb-16">
            <span className="section-label" style={{ color: '#1A2332' }}>Our Focus Areas</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-6">
              Where We Create Impact
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {segments.map((segment) => (
              <StaggerItem key={segment.href}>
                <a href={segment.href}>
                  <div className="group h-full p-8 bg-white rounded-xl border border-slate/10 hover:border-[#a8e4d7] transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    {/* Icon */}
                    <div className="w-14 h-14 rounded-lg bg-navy flex items-center justify-center mb-6">
                      <segment.icon className="w-7 h-7 text-gold" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="font-display text-2xl font-semibold text-navy mb-3">
                      {segment.title}
                    </h3>
                    <p className="font-body text-grey-body mb-6">
                      {segment.description}
                    </p>
                    
                    {/* Stats & Arrow */}
                    <div className="flex items-center justify-between">
                      <span className="font-body text-sm font-medium text-gold">
                        {segment.stats}
                      </span>
                      <ArrowRight className="w-5 h-5 text-navy group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </a>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Common Thread Section */}
      <section className="bg-navy py-24">
        <div className="container">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <span className="section-label">The Common Thread</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white mt-6">
              Your expertise is your moat.
            </h2>
            <p className="font-body text-xl text-off-white-muted mt-6">
              Every segment we serve shares one thing: deep expertise that can't be commoditized. 
              Our job is to build AI systems that multiply that expertise — not replace it.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24" style={{ backgroundColor: '#2A3545' }}>
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16 items-center">
            <ScrollReveal className="lg:col-span-3">
              <span className="section-label">Ready to Start?</span>
              <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white mt-6">
                Let's discuss your segment.
              </h2>
              <p className="font-body text-lg text-off-white-muted mt-6 max-w-xl">
                Every expert-led business is unique. We'll help you understand how AI 
                can amplify what makes yours exceptional.
              </p>
            </ScrollReveal>
            
            <ScrollReveal className="lg:col-span-2 flex justify-center lg:justify-end">
              <CometCTA href="/contact" className="w-full sm:w-auto">
                <span className="text-base md:text-lg">Start the conversation</span>
              </CometCTA>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
