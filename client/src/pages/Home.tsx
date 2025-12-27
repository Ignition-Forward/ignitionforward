import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Target, TrendingUp, Briefcase, Building2, LineChart, Layers, Shield, Zap, Lock, User } from 'lucide-react';
import { useRef } from 'react';
import SEO, { generateOrganizationSchema, generateWebsiteSchema } from '@/components/SEO';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
import TwinkleField from '@/components/TwinkleField';
import CometCTA from '@/components/CometCTA';

/*
 * IGNITION FORWARD - STREAMLINED HOMEPAGE
 * 
 * Flow:
 * 1. Hero
 * 2. Who We Work With (4 cards, tightened copy, no segment tags)
 * 3. What Makes Us Different (merged Operators + Maguire Proof with 80/20 bar)
 * 4. How We Help (3 pricing tiers only, no callout boxes)
 * 5. Social Proof + CTA (2 testimonials with integrated final CTA)
 * 6. Footer
 */

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });
  
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [generateOrganizationSchema(), generateWebsiteSchema()],
  };

  return (
    <>
      <SEO
        title="Home"
        description="We build AI systems for expert-led businesses — where judgment and relationships are the product. AI enablement for professional services, founder-led companies, and PE portfolio companies."
        canonical="/"
        structuredData={structuredData}
      />

      {/* ============================================
          HERO SECTION
          ============================================ */}
      <section 
        ref={heroRef}
        className="relative min-h-[100dvh] flex items-center overflow-hidden bg-navy"
      >
        {/* Background Image */}
        <div 
          className="absolute inset-0 z-0 grayscale-[0.2]"
          style={{
            backgroundImage: 'url(/images/hero-main.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.25,
          }}
        />
        
        {/* Sophisticated Overlays for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy via-navy/80 to-transparent z-0" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-navy z-0" />
        
        {/* Smooth ambient twinkle field */}
        <TwinkleField />

        {/* Subtle Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none opacity-10 z-[1]" />
        
        <motion.div 
          className="container relative z-10 pt-32 pb-20"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="max-w-4xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            >
              <span className="section-label">Applied AI</span>
            </motion.div>

            {/* Headline - Monumental */}
            <motion.h1
              className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-off-white mt-8 leading-[1.1]"
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.18, ease: [0.2, 0, 0, 1] }}
            >
              <span className="block">Accelerate</span>
              <span className="block"><em className="text-gold">What Matters.</em></span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-body text-xl md:text-2xl text-off-white mt-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.26, ease: [0.2, 0, 0, 1] }}
            >
              We build AI systems for expert-led businesses — where <span className="text-gold font-medium">judgment and relationships</span> are the product.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.34, ease: [0.2, 0, 0, 1] }}
            >
              <CometCTA href="/how-we-help">
                See How We Work
              </CometCTA>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* ============================================
          WHO WE WORK WITH - FOR YOUR BUSINESS + FOR YOU Structure
          ============================================ */}
      <section className="bg-off-white py-24 md:py-32 gold-top-line">
        <div className="container">
          {/* Header Block */}
          <ScrollReveal className="max-w-3xl">
            <span className="section-label" style={{ color: '#1A2332' }}>Who We Work With</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-6">
              Leaders of expert-led businesses.
            </h2>
            <p className="font-body text-xl text-navy/80 mt-6">
              We work with expert-led businesses where judgment and relationships are the product.
            </p>
            <p className="font-body text-lg text-grey-body mt-4">
              Growth-minded leaders in these spaces tend to find the most leverage.
            </p>
          </ScrollReveal>

          {/* FOR YOUR BUSINESS - 4 Segment Cards */}
          <ScrollReveal className="mt-16">
            <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6">For Your Business</p>
          </ScrollReveal>
          
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6" speed="base">
            {[
              {
                icon: Shield,
                title: 'Professional Services',
                description: 'Partners and principals at law firms, accounting practices, and consultancies who want AI leverage — without compromising trust.',
                href: '/professional-services',
              },
              {
                icon: Zap,
                title: 'Founder-Led & Expert Practices',
                description: 'Founders and expert practitioners ready to scale their expertise without scaling their calendar.',
                href: '/founder-led',
              },
              {
                icon: TrendingUp,
                title: 'GPs & Fund Managers',
                description: 'Emerging managers building differentiation through AI-augmented diligence, deal flow, and LP relationships.',
                href: '/fund-managers',
              },
              {
                icon: Target,
                title: 'PE Portfolio Operations',
                description: 'Operating partners and portfolio leaders accelerating value creation across holdings — fast, measurable, and repeatable.',
                href: '/pe-portfolio',
              },
            ].map((segment) => (
              <StaggerItem key={segment.title}>
                <Link href={segment.href}>
                  <div className="glass-card-light p-8 h-full group card-hover">
                    <segment.icon className="w-10 h-10 text-gold mb-6 transition-transform duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105" strokeWidth={1.5} />
                    <h3 className="font-display text-xl text-navy">{segment.title}</h3>
                    <p className="font-body text-grey-body mt-3 text-sm">{segment.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* FOR YOU - Individual Leaders */}
          <ScrollReveal className="mt-12">
            <p className="text-xs tracking-[0.2em] uppercase text-gold font-medium mb-6">For You</p>
          </ScrollReveal>
          
          <ScrollReveal>
            <Link href="/edge">
              <div className="glass-card-light p-8 group card-hover max-w-2xl">
                <div className="flex items-start gap-6">
                  <User className="w-12 h-12 text-gold flex-shrink-0 transition-transform duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)] group-hover:scale-105" strokeWidth={1.5} />
                  <div>
                    <h3 className="font-display text-2xl text-navy">Individual Leaders</h3>
                    <p className="font-body text-grey-body mt-3">
                      Personal AI leverage for any leader who needs to scale their judgment — regardless of industry or company type.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn About Edge <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </ScrollReveal>

          {/* Trust Note */}
          <ScrollReveal className="mt-12">
            <div className="flex items-center justify-center gap-3 text-navy/70">
              <Lock className="w-5 h-5 text-gold" />
              <p className="font-body text-base">
                <span className="font-medium text-navy">High-trust by default:</span> governance-led, NDA-first when required, and designed to protect your IP and relationships.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          WHAT MAKES US DIFFERENT - Merged Operators + Maguire Proof
          Philosophy first, then one stat block with 80/20 bar
          ============================================ */}
      <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
        {/* Grid pattern */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        
        <div className="container relative z-10">
          {/* Philosophy Lead */}
          <ScrollReveal className="max-w-3xl">
            <span className="section-label">What Makes Us Different</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white mt-6">
              Operators Who've Been in the Seat
            </h2>
            <p className="font-body text-xl text-off-white/80 mt-6 italic border-l-2 border-gold/30 pl-6">
              We don't advise from the sidelines. We've built AI systems that run our own 
              business every day. That's the difference between theory and results.
            </p>
          </ScrollReveal>

          {/* Differentiators Row */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" speed="slow">
            {[
              {
                icon: Target,
                title: 'Battle-Tested',
                description: 'Every system we offer has been refined through 232+ iterations in our own operations.',
              },
              {
                icon: TrendingUp,
                title: 'Results-Driven',
                description: 'We measure success by outcomes, not hours. Our systems deliver measurable ROI.',
              },
              {
                icon: Users,
                title: 'Knowledge Transfer',
                description: "We build WITH you, not FOR you. You'll own the capability when we're done.",
              },
            ].map((differentiator) => (
              <StaggerItem key={differentiator.title}>
                <div className="glass-card p-8 h-full card-hover">
                  <differentiator.icon className="w-8 h-8 mb-4 text-gold" strokeWidth={1.5} />
                  <h3 className="font-display text-2xl text-off-white">{differentiator.title}</h3>
                  <p className="font-body text-grey-body mt-3">{differentiator.description}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

          {/* Maguire Proof Block */}
          <ScrollReveal delay={0.3} className="mt-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Left: Stats + 80/20 Bar */}
              <div>
                <h3 className="font-display text-3xl text-gold">
                  Maguire: Our Client Intelligence OS
                </h3>
                <p className="font-body text-grey-body mt-4">
                  We built it for ourselves first. Now it powers our entire client relationship engine.
                </p>
                <p className="font-body text-lg text-off-white mt-4 italic border-l-2 border-gold pl-4">
                  CRM tracks what happened. Maguire makes you better at what's next.
                </p>

                {/* 80/20 Bar */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-body text-sm text-gold font-semibold">80% Proven Core</span>
                    <span className="font-body text-sm text-grey-body">+</span>
                    <span className="font-body text-sm text-off-white/60">20% Custom</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden bg-navy-light flex">
                    <div className="w-[80%] bg-gold rounded-l-full" />
                    <div className="w-[20%] bg-gold/30 rounded-r-full" />
                  </div>
                  <p className="font-body text-xs text-grey-body mt-2">= Bespoke at scale</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-6 mt-10">
                  <div>
                    <div className="font-display text-3xl text-gold">
                      <AnimatedCounter value={95} suffix="%" />
                    </div>
                    <p className="font-body text-grey-body text-sm mt-1">Close Rate</p>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-gold">
                      <AnimatedCounter value={50} prefix="-" suffix="%" />
                    </div>
                    <p className="font-body text-grey-body text-sm mt-1">Admin Time</p>
                  </div>
                  <div>
                    <div className="font-display text-3xl text-gold">
                      <AnimatedCounter value={232} suffix="+" />
                    </div>
                    <p className="font-body text-grey-body text-sm mt-1">Iterations</p>
                  </div>
                </div>

                {/* Andrew Quote */}
                <div className="mt-10 p-6 bg-navy-light/50 border border-gold/20">
                  <blockquote className="font-body text-off-white/90 italic">
                    "We don't just advise. We build. Maguire is proof — 232 iterations, 18 months of development, running our own sales operation."
                  </blockquote>
                  <div className="flex items-center gap-3 mt-4">
                    <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold font-body text-sm">
                      AM
                    </div>
                    <div>
                      <p className="font-body text-off-white font-medium text-sm">Andrew Moss</p>
                      <p className="font-body text-grey-body text-xs">Managing Partner</p>
                    </div>
                  </div>
                </div>

                <Link href="/maguire" className="inline-flex items-center gap-2 mt-6 text-gold font-body font-medium hover:underline underline-offset-4">
                  See the Full Case Study <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Right: Maguire Image */}
              <div className="relative">
                <div className="relative rounded-2xl overflow-hidden border border-gold/20 shadow-lg">
                  <img 
                    src="/images/maguire-data-flow-updated.png" 
                    alt="Maguire data flow visualization showing 3X business growth" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Data Security Note */}
          <ScrollReveal delay={0.4}>
            <div className="mt-16 flex items-center gap-4 p-6 rounded-xl border border-teal/30 bg-teal/5 max-w-2xl">
              <Shield className="w-6 h-6 text-teal flex-shrink-0" />
              <p className="font-body text-off-white">
                <span className="font-semibold">Your data stays yours.</span>{' '}
                <span className="text-grey-body">Systems run in your environment—no client information leaves your control.</span>
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          HOW WE HELP - Two Paths Forward
          Executive Track vs Organization Track
          ============================================ */}
      <section className="bg-off-white py-24 md:py-32 gold-top-line">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#1A2332' }}>HOW WE WORK</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-6">
              Two Paths Forward
            </h2>
            <p className="font-body text-xl text-navy/80 mt-6 max-w-3xl">
              Whether you're an executive seeking personal AI fluency or an organization ready to transform operations — we have a path designed for where you are.
            </p>
          </ScrollReveal>

          {/* Two Paths Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-16">
            {/* Executive Track */}
            <ScrollReveal>
              <div className="border border-navy/20 rounded-xl p-8 h-full bg-white">
                <span className="inline-block px-4 py-1.5 bg-navy text-off-white text-xs font-semibold tracking-wider rounded-full mb-6">
                  EXECUTIVE TRACK
                </span>
                <h3 className="font-display text-3xl text-navy">For Individual Leaders</h3>
                <p className="font-body text-grey-body mt-4">
                  Build personal AI fluency and strategic clarity. Become the champion who leads your organization's transformation.
                </p>

                {/* Edge Program Card */}
                <Link href="/edge">
                  <div className="mt-8 p-6 border border-gold/30 rounded-lg bg-navy/5 group hover:bg-navy/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-xl text-navy">EDGE Program</span>
                      <span className="text-gold text-sm font-body">9 Hours • 1:1</span>
                    </div>
                    <p className="font-body text-grey-body text-sm">
                      Premium executive transformation. Move from "AI-curious" to "AI-fluent." Build your own operational personas. Leave with working systems, not just knowledge.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                      Learn about EDGE <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollReveal>

            {/* Organization Track */}
            <ScrollReveal delay={0.1}>
              <div className="border border-gold/30 rounded-xl p-8 h-full bg-white shadow-lg">
                <span className="inline-block px-4 py-1.5 bg-gold text-navy text-xs font-semibold tracking-wider rounded-full mb-6">
                  ORGANIZATION TRACK
                </span>
                <h3 className="font-display text-3xl text-navy">For Companies & Teams</h3>
                <p className="font-body text-grey-body mt-4">
                  Strategic assessment and hands-on implementation. We identify what matters, build what works, and stay until it's running.
                </p>

                {/* Fractional AI Officer Card */}
                <Link href="/fractional-ai">
                  <div className="mt-8 p-6 border border-gold/30 rounded-lg bg-navy/5 group hover:bg-navy/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-xl text-navy">Fractional AI Officer</span>
                      <span className="text-gold text-sm font-body">$15-30K/mo</span>
                    </div>
                    <p className="font-body text-grey-body text-sm">
                      AI leadership without full-time cost. Use case prioritization by business impact. Board reporting, governance, vendor management.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                      Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>

                {/* Forward Deployed Card */}
                <Link href="/forward-deployed">
                  <div className="mt-4 p-6 border border-gold/30 rounded-lg bg-navy/5 group hover:bg-navy/10 transition-colors">
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-display text-xl text-navy">Forward Deployed</span>
                      <span className="text-gold text-sm font-body">6-8 Weeks</span>
                    </div>
                    <p className="font-body text-grey-body text-sm">
                      One outcome, full focus. Data readiness assessment included. Working system in production before the engagement ends.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-gold text-sm font-medium">
                      Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================
          SOCIAL PROOF + FINAL CTA - 2 Testimonials with Integrated CTA
          ============================================ */}
      <section className="py-24 md:py-32 relative overflow-hidden" style={{ backgroundColor: '#2A3545' }}>
        {/* Subtle gradient accent */}
        <div 
          className="absolute top-0 right-0 w-[600px] h-[600px] opacity-20 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse at center, rgba(201, 169, 98, 0.4) 0%, transparent 70%)',
          }}
        />
        
        <div className="container relative z-10">
          <ScrollReveal className="text-center">
            <span className="section-label">The Results Speak</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-off-white mt-6">
              From Our Clients
            </h2>
          </ScrollReveal>

          {/* 2 Testimonials */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto" speed="base">
            {[
              {
                quote: "They didn't just give us tools — they gave us a system that actually works. Our conversion rate went from hoping to knowing.",
                name: 'Blaine Barnett',
                title: 'Managing Partner, Hawk Partners',
                initials: 'BB',
              },
              {
                quote: "The difference is they've done this themselves. They're not theorizing about what might work — they're showing us what already works.",
                name: 'Karan Kanwar',
                title: 'CEO, Flowlie',
                initials: 'KK',
              },
            ].map((testimonial) => (
              <StaggerItem key={testimonial.name}>
                <div className="glass-card p-8 h-full relative quote-decorated card-hover">
                  <blockquote className="font-body text-off-white/90 italic leading-relaxed relative z-10">
                    "{testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center gap-4 mt-6">
                    <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center text-gold font-semibold font-body">
                      {testimonial.initials}
                    </div>
                    <div>
                      <p className="font-body text-off-white font-medium">{testimonial.name}</p>
                      <p className="font-body text-grey-body text-sm">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>

        </div>
      </section>

      {/* ============================================
          FINAL CTA SECTION
          ============================================ */}
      <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        <div className="container relative z-10">
          {/* Integrated Final CTA */}
          <ScrollReveal delay={0.3}>
            <div className="text-center max-w-2xl mx-auto">
              <h3 className="font-display text-3xl md:text-4xl font-semibold text-off-white">
                Ready to move forward?
              </h3>
              <p className="font-body text-lg text-off-white/70 mt-4">
                We work with growth-minded leaders in expert-led businesses. 
                If you're ready to move, we should talk.
              </p>
              <div className="mt-8 flex justify-center">
                <CometCTA href="/contact">
                  <span className="text-base md:text-lg">Start the Conversation</span>
                </CometCTA>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
