import { Link } from 'wouter';
import { motion, useMotionValue, useScroll, useSpring, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';
import SEO, { generateOrganizationSchema, generateWebsiteSchema } from '@/components/SEO';
import ScrollReveal from '@/components/ScrollReveal';
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
  const [scrollIndicatorVisible, setScrollIndicatorVisible] = useState(true);
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorActive, setCursorActive] = useState(false);

  const heroRectRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number | null>(null);
  const pendingPointerRef = useRef<{ x: number; y: number } | null>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const spotlightAngle = useMotionValue(-35);

  const spotlightAngleSpring = useSpring(spotlightAngle, { damping: 32, stiffness: 260, mass: 0.22 });
  const spotlightAngleSpringOffset = useTransform(spotlightAngleSpring, (value) => value - 5);

  const mouseXSpring = useSpring(mouseX, { damping: 24, stiffness: 520, mass: 0.18 });
  const mouseYSpring = useSpring(mouseY, { damping: 24, stiffness: 520, mass: 0.18 });
  const glowX = useTransform(mouseXSpring, (value) => value - 150);
  const glowY = useTransform(mouseYSpring, (value) => value - 150);

  // Cursor-following spotlight - calculate angle from bottom-right corner to cursor
  const handlePointerMove = useCallback((e: PointerEvent) => {
    pendingPointerRef.current = { x: e.clientX, y: e.clientY };

    if (rafRef.current !== null) return;
    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;
      const hero = heroRef.current;
      if (!hero || !pendingPointerRef.current) return;

      const rect = heroRectRef.current ?? hero.getBoundingClientRect();
      heroRectRef.current = rect;

      const x = pendingPointerRef.current.x - rect.left;
      const y = pendingPointerRef.current.y - rect.top;

      mouseX.set(x);
      mouseY.set(y);

      const originX = rect.width;
      const originY = rect.height;
      const deltaX = x - originX;
      const deltaY = y - originY;
      const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
      spotlightAngle.set(angle + 200);
    });
  }, [mouseX, mouseY, spotlightAngle]);

  useEffect(() => {
    // Check if desktop (no touch, wider than mobile)
    const checkDesktop = () => {
      setIsDesktop(window.matchMedia('(min-width: 1024px) and (hover: hover)').matches);
    };
    checkDesktop();
    window.addEventListener('resize', checkDesktop);
    return () => window.removeEventListener('resize', checkDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop) return;
    const hero = heroRef.current;
    if (!hero) return;

    const updateRect = () => {
      heroRectRef.current = hero.getBoundingClientRect();
    };

    const handlePointerEnter = () => {
      updateRect();
      setCursorActive(true);
    };

    const handlePointerLeave = () => {
      setCursorActive(false);
    };

    updateRect();
    window.addEventListener('resize', updateRect, { passive: true });
    hero.addEventListener('pointerenter', handlePointerEnter, { passive: true });
    hero.addEventListener('pointerleave', handlePointerLeave, { passive: true });
    hero.addEventListener('pointermove', handlePointerMove, { passive: true });

    return () => {
      window.removeEventListener('resize', updateRect);
      hero.removeEventListener('pointerenter', handlePointerEnter);
      hero.removeEventListener('pointerleave', handlePointerLeave);
      hero.removeEventListener('pointermove', handlePointerMove);
      if (rafRef.current !== null) {
        window.cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };
  }, [isDesktop, handlePointerMove]);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const heroY = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

  // Track scroll for scroll indicator
  useEffect(() => {
    const handleScroll = () => {
      // Hide scroll indicator once user starts scrolling
      setScrollIndicatorVisible(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
        {/* Deep solid gradient background */}
        <div
          className="absolute inset-0 z-0"
          style={{
            background: 'linear-gradient(135deg, #0D0D0D 0%, #1A2332 40%, #243044 60%, #1A2332 100%)',
          }}
        />

        {/* Spotlight beams from bottom-right corner */}
        <motion.div
          className="absolute inset-0 z-[1] pointer-events-none overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.3 }}
        >
          {/* Primary beam - follows cursor on desktop, animates on mobile */}
          <motion.div
            className="absolute"
            style={{
              bottom: '-20%',
              right: '-10%',
              width: '120%',
              height: '200%',
              background: 'conic-gradient(from 200deg at 100% 100%, transparent 0deg, rgba(201, 169, 98, 0.04) 12deg, rgba(255, 250, 240, 0.08) 22deg, rgba(201, 169, 98, 0.04) 32deg, transparent 45deg)',
              transformOrigin: 'bottom right',
              willChange: 'transform',
              rotate: isDesktop && cursorActive ? spotlightAngleSpring : undefined,
            }}
            animate={isDesktop && cursorActive ? undefined : { rotate: [0, -15, -5, -38, -35, -38, -35, -20, -8, 0] }}
            transition={isDesktop && cursorActive
              ? undefined
              : { duration: 16, times: [0, 0.12, 0.2, 0.3, 0.4, 0.5, 0.65, 0.8, 0.92, 1], ease: 'easeInOut', repeat: Infinity }
            }
          />

          {/* Secondary beam - follows with offset */}
          <motion.div
            className="absolute"
            style={{
              bottom: '-30%',
              right: '5%',
              width: '100%',
              height: '180%',
              background: 'conic-gradient(from 205deg at 95% 100%, transparent 0deg, rgba(201, 169, 98, 0.02) 15deg, rgba(255, 250, 240, 0.04) 25deg, rgba(201, 169, 98, 0.02) 35deg, transparent 50deg)',
              transformOrigin: 'bottom right',
              willChange: 'transform',
              rotate: isDesktop && cursorActive ? spotlightAngleSpringOffset : undefined,
            }}
            animate={isDesktop && cursorActive ? undefined : { rotate: [0, -12, -3, -32, -30, -33, -30, -18, -6, 0] }}
            transition={isDesktop && cursorActive
              ? undefined
              : { duration: 16, times: [0, 0.12, 0.2, 0.3, 0.4, 0.5, 0.65, 0.8, 0.92, 1], ease: 'easeInOut', repeat: Infinity, delay: 0.3 }
            }
          />

          {/* Glow at cursor position - desktop only */}
          {isDesktop && cursorActive && (
            <motion.div
              className="absolute pointer-events-none"
              style={{
                width: 300,
                height: 300,
                borderRadius: '50%',
                background: 'radial-gradient(circle, rgba(201, 169, 98, 0.15) 0%, rgba(255, 250, 240, 0.05) 40%, transparent 70%)',
                filter: 'blur(40px)',
                willChange: 'transform',
                x: glowX,
                y: glowY,
              }}
            />
          )}

          {/* Focused glow on content - pulses when beams find it */}
          <motion.div
            className="absolute"
            style={{
              left: '5%',
              top: '35%',
              width: '50%',
              height: '30%',
              background: 'radial-gradient(ellipse 100% 100% at 30% 50%, rgba(201, 169, 98, 0.12) 0%, rgba(255, 250, 240, 0.04) 40%, transparent 70%)',
              filter: 'blur(60px)',
            }}
            animate={isDesktop && cursorActive
              ? { opacity: 0.5, scale: 1 }
              : { opacity: [0.1, 0.15, 0.1, 0.6, 0.8, 0.65, 0.8, 0.4, 0.15, 0.1], scale: [0.8, 0.85, 0.8, 1.1, 1, 1.05, 1, 0.9, 0.82, 0.8] }
            }
            transition={isDesktop && cursorActive
              ? { duration: 0.5 }
              : { duration: 16, times: [0, 0.12, 0.2, 0.3, 0.4, 0.5, 0.65, 0.8, 0.92, 1], ease: 'easeInOut', repeat: Infinity }
            }
          />

          {/* Origin haze - corner glow */}
          <motion.div
            className="absolute bottom-0 right-0 w-72 h-72"
            style={{
              background: 'radial-gradient(circle at 100% 100%, rgba(201, 169, 98, 0.15) 0%, rgba(201, 169, 98, 0.05) 30%, transparent 60%)',
              filter: 'blur(40px)',
            }}
            animate={isDesktop && cursorActive
              ? { scale: 1.1, opacity: 0.6 }
              : { scale: [1, 1.1, 1, 1.25, 1.15, 1.2, 1.15, 1.08, 1.02, 1], opacity: [0.4, 0.5, 0.4, 0.9, 0.7, 0.8, 0.7, 0.5, 0.42, 0.4] }
            }
            transition={isDesktop && cursorActive
              ? { duration: 0.5 }
              : { duration: 16, times: [0, 0.12, 0.2, 0.3, 0.4, 0.5, 0.65, 0.8, 0.92, 1], ease: 'easeInOut', repeat: Infinity }
            }
          />
        </motion.div>
        
        <motion.div 
          className="container relative z-10 pt-32 pb-20"
          style={{ opacity: heroOpacity, y: heroY }}
        >
          <div className="max-w-4xl">
            {/* Label - Applied AI badge */}
            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.1, ease: [0.2, 0, 0, 1] }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/10 border border-gold/20">
                {/* Spark indicator */}
                <span className="w-1.5 h-1.5 rounded-full bg-gold shadow-[0_0_6px_2px_rgba(201,169,98,0.4)]" />
                <span className="font-logo text-xs font-semibold tracking-[0.15em] uppercase text-gold">Applied AI</span>
              </span>
            </motion.div>

            {/* Headline - Monumental */}
            <motion.h1
              className="font-display text-6xl md:text-7xl lg:text-8xl font-semibold text-off-white mt-8 leading-[1.1]"
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.18, ease: [0.2, 0, 0, 1] }}
            >
              <span className="block">Accelerate</span>
              <span className="block relative">
                {/* Soft angelic glow behind "What Matters" */}
                <span
                  className="absolute inset-0 blur-2xl opacity-20 pointer-events-none"
                  style={{
                    background: 'radial-gradient(ellipse 100% 100% at 50% 50%, rgba(255, 250, 240, 0.8) 0%, transparent 70%)',
                  }}
                  aria-hidden="true"
                />
                <motion.em
                  className="text-gold relative inline-block"
                  animate={{
                    filter: ['brightness(1)', 'brightness(1.15)', 'brightness(1)'],
                  }}
                  transition={{
                    duration: 4,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                >
                  What Matters.
                </motion.em>
              </span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              className="font-body text-xl md:text-2xl text-off-white mt-8 max-w-2xl leading-relaxed"
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.26, ease: [0.2, 0, 0, 1] }}
            >
              We enable growth-minded operators to unlock necessary leverage from applying AI.
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

        {/* Scroll Indicator - subtle, guiding */}
        <AnimatePresence>
          {scrollIndicatorVisible && (
            <motion.div
              className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
            >
              <span className="text-off-white/50 text-xs tracking-widest uppercase font-body">Explore</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: [0.4, 0, 0.6, 1],
                }}
              >
                <ChevronDown className="w-5 h-5 text-off-white/50" />
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </section>

      {/* ============================================
          THE HOOK - Urgency + credibility + CTA
          Off-white creates contrast after navy hero
          ============================================ */}
      <section className="bg-off-white py-20 md:py-28 relative">
        {/* Subtle gold accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

        <div className="container">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <p className="font-body text-lg md:text-xl text-navy/70 leading-relaxed">
              The gap between AI-fluent firms and everyone else is widening fast.
            </p>
            <p className="font-body text-base md:text-lg text-navy/60 mt-3 italic">
              You've seen it. You know you need to move. The question is how — without gambling what you've built.
            </p>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold text-navy mt-8 leading-tight">
              We've grown 3× in two years <br className="hidden md:block" />
              <span className="text-gold">building AI into everything we do.</span>
            </h2>
            <p className="font-body text-lg text-navy/70 mt-6 max-w-2xl mx-auto">
              Now we're sharing the systems that got us there — with growth-minded leaders who are ready to act.
            </p>
            {/* Secondary CTA after urgency */}
            <div className="mt-10">
              <CometCTA href="/contact">
                Let's Talk
              </CometCTA>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================
          THE PROOF - Why we're credible
          Navy section with Andrew quote leading
          ============================================ */}
      <section className="bg-navy py-24 md:py-32 relative overflow-hidden">
        {/* Warm undertone gradient */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 80% 50% at 20% 80%, var(--warm-glow) 0%, transparent 70%)',
          }}
        />
        <div className="absolute inset-0 grid-pattern pointer-events-none" />

        <div className="container relative z-10">
          {/* Andrew Quote - Lead with credibility, visually differentiated */}
          <ScrollReveal className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Large quote mark decoration */}
              <div className="absolute -top-4 -left-2 md:-left-8 text-gold/25 font-display text-[120px] md:text-[180px] leading-none select-none pointer-events-none">
                "
              </div>
              <div className="relative z-10 pl-4 md:pl-12">
                <blockquote className="font-display text-2xl md:text-3xl lg:text-4xl text-off-white leading-relaxed">
                  We don't just advise. We build. The AI systems we share with clients?
                  <span className="text-gold"> We built them for ourselves first.</span>
                </blockquote>
                <div className="flex items-center gap-4 mt-8">
                  <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold font-body text-lg border-2 border-gold/30">
                    AM
                  </div>
                  <div>
                    <p className="font-body text-off-white font-medium">Andrew Moss</p>
                    <p className="font-body text-off-white/60 text-sm">Managing Partner</p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Maguire Teaser - Compact proof, not heavy */}
          <ScrollReveal delay={0.2} className="mt-20">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6 p-6 md:p-8 rounded-2xl bg-navy-light/50 border border-gold/20">
                {/* Left: Quick proof */}
                <div className="flex-1">
                  <span className="text-gold/70 text-xs tracking-wider uppercase font-medium">Example: Maguire</span>
                  <p className="font-display text-xl md:text-2xl text-off-white mt-2">
                    Our client intelligence system. 26 months. 232 iterations.
                    <span className="text-gold"> 3× growth.</span>
                  </p>
                  <p className="font-body text-off-white/60 text-sm mt-2">
                    We run our entire sales operation on it. Now we build similar systems for clients.
                  </p>
                </div>
                {/* Right: CTA */}
                <Link href="/maguire" className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-lg border border-gold/30 text-gold font-body font-medium hover:bg-gold/10 transition-colors">
                  See the proof <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ScrollReveal>

        </div>
      </section>

      {/* ============================================
          WHO WE WORK WITH - Target customers
          Off-white for visual rhythm break
          ============================================ */}
      <section className="bg-off-white py-20 md:py-24 relative">
        <div className="container">
          <ScrollReveal className="max-w-3xl mx-auto text-center">
            <h2 className="font-display text-3xl md:text-4xl font-semibold text-navy leading-tight">
              We build AI with <span className="text-gold">growth-minded leaders</span> <br className="hidden md:block" />
              whose expertise should not be replaced.
            </h2>
            <p className="font-body text-lg text-navy/70 mt-4">
              If your value is in your judgment, relationships, and thinking — we help you scale it.
            </p>
          </ScrollReveal>

          {/* Audience segments */}
          <div className="mt-12 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
            {[
              { title: 'Professional Services', href: '/professional-services' },
              { title: 'Founder-Led Practices', href: '/founder-led' },
              { title: 'GPs & Fund Managers', href: '/fund-managers' },
              { title: 'EOS Implementers', href: '/eos-implementers' },
              { title: 'PE Portfolio Ops', href: '/pe-portfolio' },
              { title: 'Individual Leaders', href: '/edge', featured: true },
            ].map((segment) => (
              <ScrollReveal key={segment.title}>
                <Link href={segment.href} className="block h-full">
                  <div className={`group text-center p-4 min-h-[9.25rem] h-full rounded-xl transition-all duration-200 flex flex-col items-center justify-center ${
                    segment.featured
                      ? 'bg-navy text-off-white hover:bg-navy/90'
                      : 'border border-navy/10 hover:border-navy/25 hover:bg-white'
                  }`}>
                    <span className={`font-display text-base md:text-lg ${segment.featured ? 'text-gold' : 'text-navy'}`}>
                      {segment.title}
                    </span>
                    <ArrowRight className={`w-4 h-4 mx-auto mt-2 transition-transform group-hover:translate-x-1 ${
                      segment.featured ? 'text-gold/60' : 'text-navy/30 group-hover:text-gold'
                    }`} />
                  </div>
                </Link>
              </ScrollReveal>
            ))}
          </div>

        </div>
      </section>


      {/* ============================================
          SOCIAL PROOF - Asymmetric Layout Break
          Featured quote left, stacked quotes right
          ============================================ */}
      <section className="relative overflow-hidden" style={{ backgroundColor: '#2A3545' }}>
        {/* Warm undertone gradient - opposite corner from "What Makes Us Different" */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: 'radial-gradient(ellipse 60% 80% at 90% 20%, var(--warm-glow-soft) 0%, transparent 60%)',
          }}
        />
        <div className="lg:grid lg:grid-cols-[1.2fr_1fr] relative z-10">
          {/* Left: Featured testimonial - full height */}
          <ScrollReveal className="bg-navy py-20 lg:py-32 px-8 lg:px-16 flex items-center relative">
            {/* Subtle warm glow behind featured quote */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(circle at 30% 60%, var(--warm-glow) 0%, transparent 50%)',
              }}
            />
            <div className="max-w-xl relative z-10">
              <span className="text-off-white/55 text-xs tracking-[0.2em] uppercase font-medium">Client Results</span>
              <blockquote className="mt-6 font-display text-2xl md:text-3xl lg:text-4xl text-off-white leading-relaxed">
                "Ignition Forward's team has been a <span className="text-gold">gamechanger</span> in my practice."
              </blockquote>
              <div className="flex items-center gap-4 mt-8">
                <div className="w-14 h-14 rounded-full bg-gold/20 flex items-center justify-center text-gold font-bold font-body text-lg">
                  JM
                </div>
                <div>
                  <p className="font-body text-off-white font-medium">James Mitchell</p>
                  <p className="font-body text-off-white/60 text-sm">Partner, Mitchell & Associates LLP</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Stacked supporting testimonials + CTA */}
          <div className="py-16 lg:py-32 px-8 lg:px-12 flex flex-col justify-center">
            {/* Supporting quote */}
            <ScrollReveal delay={0.1}>
              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <blockquote className="font-body text-off-white/85 italic leading-relaxed">
                  "The difference is they've done this themselves. They're not theorizing about what might work — they're showing us what already works."
                </blockquote>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-10 h-10 rounded-full bg-gold/15 flex items-center justify-center text-gold font-semibold font-body text-sm">
                    KK
                  </div>
                  <div>
                    <p className="font-body text-off-white font-medium text-sm">Karan Kanwar</p>
                    <p className="font-body text-off-white/55 text-sm">CEO, Flowlie</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* CTA integrated into testimonials section */}
            <ScrollReveal delay={0.2} className="mt-8">
              <div className="p-6 rounded-xl bg-gold/10 border border-gold/20">
                <p className="font-display text-xl text-off-white mb-4">Ready to see what's possible?</p>
                <CometCTA href="/contact">
                  Start the Conversation
                </CometCTA>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </>
  );
}
