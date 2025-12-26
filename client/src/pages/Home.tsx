import { Link } from 'wouter';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Users, Target, TrendingUp, Briefcase, Building2, LineChart, Layers, Shield } from 'lucide-react';
import { useRef } from 'react';
import SEO, { generateOrganizationSchema, generateWebsiteSchema } from '@/components/SEO';
import ParticleField from '@/components/ParticleField';
import AnimatedCounter from '@/components/AnimatedCounter';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/ScrollReveal';
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
        className="relative min-h-screen flex items-center overflow-hidden bg-navy"
      >
        {/* Particle Field Background */}
        <ParticleField />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 grid-pattern pointer-events-none" />
        
        {/* Gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#1A2332]/80 pointer-events-none" />

        <motion.div 
          className="container relative z-10 pt-32 pb-20"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="max-w-4xl">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="section-label">Applied AI</span>
            </motion.div>

            {/* Headline - Monumental */}
            <motion.h1
              className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-off-white mt-8 leading-[1.1]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <span className="block">Accelerate</span>
              <span className="block"><em className="text-gold">What Matters.</em></span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-body text-xl md:text-2xl text-teal mt-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            >
              We build AI systems for expert-led businesses — where judgment and relationships are the product. Including our own.
            </motion.p>

            {/* CTA */}
            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <CometCTA href="/how-we-help">
                See How We Work
              </CometCTA>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <div className="w-6 h-10 rounded-full border-2 border-gold/30 flex justify-center pt-2">
            <motion.div 
              className="w-1.5 h-1.5 rounded-full bg-gold"
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            />
          </div>
        </motion.div>
      </section>

      {/* ============================================
          WHO WE WORK WITH - Tightened Copy, No Segment Tags
          ============================================ */}
      <section className="bg-off-white py-24 md:py-32 gold-top-line">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#1A2332' }}>Who We Work With</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-6">
              Expert-Led Businesses
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-16" staggerDelay={0.1}>
            {[
              {
                icon: Building2,
                title: 'Professional Services',
                description: 'Partners and principals at high-trust firms who want to scale expertise without diluting quality.',
                href: '/professional-services',
              },
              {
                icon: Briefcase,
                title: 'Founder-Led',
                description: 'Founders ready to scale their expertise without scaling their calendar.',
                href: '/founder-led',
              },
              {
                icon: LineChart,
                title: 'Fund Managers (GPs)',
                description: 'GPs who want systematic sourcing, faster diligence, and scalable portfolio support.',
                href: '/fund-managers',
              },
              {
                icon: Layers,
                title: 'PE Portfolio',
                description: 'Portfolio companies with a value creation mandate and a sponsor who expects results.',
                href: '/pe-portfolio',
              },
            ].map((segment) => (
              <StaggerItem key={segment.title}>
                <Link href={segment.href}>
                  <div className="glass-card-light p-8 h-full group card-hover card-hover-glow shine-effect">
                    <segment.icon className="w-10 h-10 text-gold mb-6 transition-transform group-hover:scale-110" strokeWidth={1.5} />
                    <h3 className="font-display text-2xl text-navy">{segment.title}</h3>
                    <p className="font-body text-grey-body mt-3">{segment.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
              Operators, Not Consultants
            </h2>
            <p className="font-body text-xl text-teal mt-6">
              We don't advise from the sidelines. We've built AI systems that run our own 
              business every day. That's the difference between theory and results.
            </p>
          </ScrollReveal>

          {/* Differentiators Row */}
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16" staggerDelay={0.15}>
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
                <div className="glass-card p-8 h-full card-hover card-hover-glow">
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

                {/* 80/20 Bar */}
                <div className="mt-8">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="font-body text-sm text-gold">80% Proven Core</span>
                    <span className="font-body text-sm text-grey-body">+</span>
                    <span className="font-body text-sm text-teal">20% Custom</span>
                  </div>
                  <div className="h-3 rounded-full overflow-hidden bg-navy-light flex">
                    <div className="w-[80%] bg-gold rounded-l-full" />
                    <div className="w-[20%] bg-teal rounded-r-full" />
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

                <Link href="/maguire" className="inline-flex items-center gap-2 mt-8 text-gold font-body font-medium hover:underline underline-offset-4">
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
          HOW WE HELP - 3 Pricing Tiers Only
          No additional callout boxes
          ============================================ */}
      <section className="bg-off-white py-24 md:py-32 gold-top-line">
        <div className="container">
          <ScrollReveal>
            <span className="section-label" style={{ color: '#1A2332' }}>THREE WAYS TO WORK WITH US</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-6">
              Choose Your Path Forward
            </h2>
          </ScrollReveal>

          <StaggerContainer className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-16" staggerDelay={0.15}>
            {[
              {
                label: 'AI FLUENCY',
                price: '~$15K',
                title: 'Edge',
                subtitle: '9 hours to AI fluency. By application only.',
                description: 'Three sessions, three hours each. You keep the workflows we build together.',
                href: '/edge',
                highlight: false,
              },
              {
                label: 'AI LEADERSHIP',
                price: '$15-30K/mo',
                title: 'Fractional AI Officer',
                subtitle: 'Strategic AI leadership without the full-time hire',
                description: 'Get the expertise without the full-time commitment.',
                href: '/fractional-ai',
                highlight: true,
              },
              {
                label: 'IMPLEMENTATION',
                price: 'Custom',
                title: 'Forward Deployed',
                subtitle: 'Implementation teams working alongside yours',
                description: 'We build with you, not for you.',
                href: '/forward-deployed',
                highlight: false,
              },
            ].map((service) => (
              <StaggerItem key={service.title}>
                <Link href={service.href}>
                  <div className={`service-card-gold group shine-effect animated-border ${service.highlight ? 'service-card-gold-highlight' : ''}`}>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-gold text-xs font-semibold tracking-wider font-body">{service.label}</span>
                      <span className="text-gold font-display text-lg">{service.price}</span>
                    </div>
                    <h3 className="font-display text-3xl text-gold">{service.title}</h3>
                    <p className="text-grey-body text-sm font-body mt-2">{service.subtitle}</p>
                    <p className="font-body text-grey-body mt-4">{service.description}</p>
                    <div className="mt-6 flex items-center gap-2 text-gold text-sm font-medium font-body">
                      Learn more <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
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
          <StaggerContainer className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 max-w-4xl mx-auto" staggerDelay={0.1}>
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
          FAQ SECTION - SEO/GEO Optimized
          ============================================ */}
      <section className="bg-off-white py-24">
        <div className="container">
          <ScrollReveal className="text-center mb-12">
            <span className="section-label" style={{ color: '#1A2332' }}>Questions</span>
            <h2 className="font-display text-4xl md:text-5xl font-semibold text-navy mt-6">
              Frequently Asked
            </h2>
          </ScrollReveal>

          <div className="max-w-3xl mx-auto space-y-4">
            {[
              {
                question: "What does 'expert-led business' mean?",
                answer: "Expert-led businesses are companies where judgment and relationships are the product — law firms, consultancies, founder-led companies, fund managers, and PE portfolio companies. Your expertise is the moat, and AI should amplify it, not replace it.",
              },
              {
                question: "How is Ignition Forward different from other AI consultants?",
                answer: "We're operators, not advisors. Every system we offer has been built and refined in our own business first. We've closed 232+ iterations on our internal AI systems, achieving a 95% close rate on qualified opportunities. We don't theorize — we show you what works.",
              },
              {
                question: "What does AI enablement cost?",
                answer: "Edge (executive AI training) starts at ~$15K. Forward Deployed projects range from $25K-$150K depending on scope. Fractional AI Officer engagements run $8K-$30K+/month. We structure work to deliver measurable ROI within 90 days.",
              },
              {
                question: "How long until we see results?",
                answer: "Most clients see measurable impact within 90 days. Edge delivers AI fluency in 9 hours. Forward Deployed projects ship production workflows in 60-90 days. We prioritize quick wins that compound.",
              },
              {
                question: "Do you replace our team or work alongside them?",
                answer: "We work alongside your team and transfer knowledge. The goal is to build internal capability, not create dependency. Every engagement includes enablement sessions and documentation so your team can run systems without us.",
              },
              {
                question: "What about confidentiality and data security?",
                answer: "We operate with NDA-first posture, least-privilege access, and segmented workspaces. We're designed to align with professional liability requirements and confidentiality obligations. We can work within your existing security framework.",
              },
            ].map((faq, index) => (
              <ScrollReveal key={faq.question} delay={index * 0.05}>
                <details className="group bg-white border border-gray-200 rounded-xl overflow-hidden">
                  <summary className="p-5 cursor-pointer flex items-center justify-between hover:bg-gray-50 transition-colors list-none">
                    <span className="font-medium text-navy pr-4">{faq.question}</span>
                    <svg className="w-5 h-5 text-gold flex-shrink-0 transition-transform group-open:rotate-180" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </summary>
                  <div className="px-5 pb-5">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                </details>
              </ScrollReveal>
            ))}
          </div>
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
              <p className="font-body text-lg text-teal mt-4">
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
