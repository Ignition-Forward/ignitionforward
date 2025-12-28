import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import MoveForwardButton from "./MoveForwardButton";

/*
 * NAVIGATION - Scroll-Aware Design
 *
 * Behavior:
 * - Top nav: visible at top, hides on scroll down, reappears on scroll up
 * - Bottom nav (desktop): appears after scrolling past hero, provides quick access
 * - Mobile: sticky CTA at bottom always
 *
 * Typography: Playfair Display (logo) + DM Sans (links)
 * Colors: Navy #1A2332, Gold #C9A962, Off-White #F8F7F4
 */

const howWeHelpLinks = [
  { href: "/how-we-help#forward-deployed", label: "Forward Deployed", subtitle: "AI systems that multiply your team." },
  { href: "/how-we-help#fractional-ai", label: "Fractional AI Officer", subtitle: "Executive AI leadership on demand." },
  { href: "/edge", label: "Edge", subtitle: "Personal AI fluency for leaders." },
];

const forYourBusinessLinks = [
  { href: "/professional-services", label: "Professional Services", description: "High-trust advisory firms scaling judgment without diluting trust." },
  { href: "/founder-led", label: "Founder-Led & Expert Practices", description: "Scale your expertise without scaling your calendar." },
  { href: "/fund-managers", label: "GPs & Fund Managers", description: "AI-augmented diligence, deal flow, and LP relationships." },
  { href: "/pe-portfolio", label: "PE Portfolio", description: "Value creation aligned AI with quick wins that compound." },
];

const forYouLinks = [
  { href: "/edge", label: "Individual Leaders", description: "Personal AI leverage for any leader — regardless of industry." },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [topNavVisible, setTopNavVisible] = useState(true);
  const [showBottomNav, setShowBottomNav] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [howWeHelpOpen, setHowWeHelpOpen] = useState(false);
  const [whoWeWorkWithOpen, setWhoWeWorkWithOpen] = useState(false);
  // Bottom nav dropdown states
  const [bottomHowWeHelpOpen, setBottomHowWeHelpOpen] = useState(false);
  const [bottomWhoWeWorkWithOpen, setBottomWhoWeWorkWithOpen] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const heroHeight = window.innerHeight;

      // Basic scrolled state for background
      setIsScrolled(currentScrollY > 50);

      // Bottom nav: show after scrolling past hero (desktop only)
      const shouldShowBottomNav = currentScrollY > heroHeight * 0.7;
      setShowBottomNav(shouldShowBottomNav);

      // Top nav logic:
      // - If bottom nav is showing → hide top nav (maximize reading space)
      // - If near top of page → show top nav
      // - Otherwise → show on scroll up, hide on scroll down
      if (shouldShowBottomNav) {
        // Bottom nav is active → keep top nav hidden
        setTopNavVisible(false);
      } else if (currentScrollY < 100) {
        // Near top → always show top nav
        setTopNavVisible(true);
      } else {
        // Middle zone: show on scroll up, hide on scroll down
        if (currentScrollY > lastScrollY.current + 10) {
          setTopNavVisible(false);
        } else if (currentScrollY < lastScrollY.current - 10) {
          setTopNavVisible(true);
        }
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-300 ease-[cubic-bezier(0.2,0,0,1)] ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        style={{
          background: isScrolled
            ? 'linear-gradient(180deg, rgba(26, 35, 50, 0.95) 0%, rgba(26, 35, 50, 0.9) 100%)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
          transform: topNavVisible ? 'translateY(0)' : 'translateY(-100%)',
          opacity: topNavVisible ? 1 : 0,
        }}
      >
        <nav className="container">
          <div className="flex items-center justify-between">
            {/* Logo - Montserrat - All caps, confident with one-time comet animation */}
            <Link href="/" className="flex items-center group">
              <span className="text-[1rem] md:text-[1.1rem] tracking-[0.08em] font-logo uppercase flex items-baseline">
                <span className="text-off-white font-bold">Ignition</span>
                <span className="relative text-gold font-extrabold">
                  Forward
                  {/* Comet underline - animates once on load then dissipates */}
                  <span className="absolute -bottom-0.5 left-0 right-0 h-[1.5px] overflow-hidden" aria-hidden="true">
                    {/* Comet that streaks across and fades */}
                    <span className="absolute inset-y-0 w-8 bg-gradient-to-r from-transparent via-gold to-off-white/90 animate-[comet-streak_1.2s_ease-out_0.5s_forwards] opacity-0 blur-[0.5px]" />
                  </span>
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              {/* How We Help Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setHowWeHelpOpen(true)}
                onMouseLeave={() => setHowWeHelpOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-off-white hover:text-off-white/70 transition-colors py-2 font-body text-[0.9375rem] font-medium"
                >
                  How We Help
                  <ChevronDown className={`w-4 h-4 transition-transform duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)] ${howWeHelpOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {howWeHelpOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.14, ease: [0.2, 0, 0, 1] }}
                      className="absolute top-full left-0 pt-2 z-50"
                    >
                      <div 
                        className="w-80 rounded-lg overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(36, 48, 68, 0.98) 0%, rgba(26, 35, 50, 0.99) 100%)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        }}
                      >
                        {/* Overview Link */}
                        <Link href="/how-we-help">
                          <div className="px-5 py-4 hover:bg-white/5 transition-colors group border-b border-white/10">
                            <div className="flex items-center justify-between">
                              <span className="text-off-white font-medium font-body">Overview: How We Help</span>
                              <ArrowRight className="w-4 h-4 text-off-white group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                        {howWeHelpLinks.map((link, index) => (
                          <Link
                            key={link.href}
                            href={link.href}
                          >
                            <div 
                              className={`px-5 py-4 hover:bg-white/5 transition-colors group ${
                                index < howWeHelpLinks.length - 1 ? 'border-b border-white/5' : ''
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-off-white font-medium font-body">{link.label}</span>
                              </div>
                              {link.subtitle && (
                                <p className="text-grey-body text-sm mt-0.5 font-body">{link.subtitle}</p>
                              )}
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Who We Work With Dropdown */}
              <div 
                className="relative"
                onMouseEnter={() => setWhoWeWorkWithOpen(true)}
                onMouseLeave={() => setWhoWeWorkWithOpen(false)}
              >
                <button
                  className="flex items-center gap-1 text-off-white hover:text-off-white/70 transition-colors py-2 font-body text-[0.9375rem] font-medium"
                >
                  Who We Work With
                  <ChevronDown className={`w-4 h-4 transition-transform duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)] ${whoWeWorkWithOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {whoWeWorkWithOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 6 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 6 }}
                      transition={{ duration: 0.14, ease: [0.2, 0, 0, 1] }}
                      className="absolute top-full left-0 pt-2 z-50"
                    >
                      <div 
                        className="w-80 rounded-lg overflow-hidden"
                        style={{
                          background: 'linear-gradient(135deg, rgba(36, 48, 68, 0.98) 0%, rgba(26, 35, 50, 0.99) 100%)',
                          backdropFilter: 'blur(20px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)',
                        }}
                      >
                        {/* Overview Link */}
                        <Link href="/segments">
                          <div className="px-5 py-4 hover:bg-white/5 transition-colors group border-b border-white/10">
                            <div className="flex items-center justify-between">
                              <span className="text-gold font-medium font-body">View All Segments</span>
                              <ArrowRight className="w-4 h-4 text-gold group-hover:translate-x-1 transition-transform" />
                            </div>
                            <p className="text-grey-body text-sm mt-0.5 font-body">Expert-led businesses where judgment is the product.</p>
                          </div>
                        </Link>
                        
                        {/* FOR YOUR BUSINESS */}
                        <div className="px-5 py-3 border-b border-white/10">
                          <span className="text-xs tracking-[0.15em] uppercase text-gold font-medium">For Your Business</span>
                        </div>
                        {forYourBusinessLinks.map((link, index: number) => (
                          <Link
                            key={link.href}
                            href={link.href}
                          >
                            <div 
                              className={`px-5 py-4 hover:bg-white/5 transition-colors group ${
                                index < forYourBusinessLinks.length - 1 ? 'border-b border-white/5' : ''
                              }`}
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-off-white font-medium font-body">{link.label}</span>
                              </div>
                              <p className="text-grey-body text-sm mt-0.5 font-body">{link.description}</p>
                            </div>
                          </Link>
                        ))}
                        
                        {/* FOR YOU */}
                        <div className="px-5 py-3 border-t border-white/10 border-b border-white/10 mt-2">
                          <span className="text-xs tracking-[0.15em] uppercase text-gold font-medium">For You</span>
                        </div>
                        {forYouLinks.map((link) => (
                          <Link
                            key={link.href}
                            href={link.href}
                          >
                            <div className="px-5 py-4 hover:bg-white/5 transition-colors group">
                              <div className="flex items-center justify-between">
                                <span className="text-off-white font-medium font-body">{link.label}</span>
                              </div>
                              <p className="text-grey-body text-sm mt-0.5 font-body">{link.description}</p>
                            </div>
                          </Link>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <Link
                href="/maguire"
                className="text-off-white hover:text-off-white/70 transition-colors py-2 font-body text-[0.9375rem] font-medium"
              >
                Our Proof
              </Link>

              <Link
                href="/about"
                className="text-off-white hover:text-off-white/70 transition-colors py-2 font-body text-[0.9375rem] font-medium"
              >
                About
              </Link>

              {/* CTA Button - Command-line aesthetic */}
              <MoveForwardButton />
            </div>

            {/* Mobile Menu Button - 48px minimum touch target */}
            <button
              className="lg:hidden text-off-white p-3 -mr-2 min-w-[48px] min-h-[48px] flex items-center justify-center"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.14 }}
            className="fixed inset-0 z-[999] lg:hidden bg-navy"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.22, ease: [0.2, 0, 0, 1] }}
              className="absolute inset-0 pt-24 px-6 overflow-y-auto"
            >
              <div className="space-y-8">
                {/* How We Help */}
                <div>
                  <p className="section-label mb-4">How We Help</p>
                  <div className="space-y-1">
                    <Link href="/how-we-help">
                      <div className="py-3 border-b border-white/10 flex items-center justify-between">
                        <span className="text-off-white text-lg font-body">Overview</span>
                        <ArrowRight className="w-4 h-4 text-off-white" />
                      </div>
                    </Link>
                    {howWeHelpLinks.map((link) => (
                      <Link key={link.href} href={link.href}>
                        <div className="py-3 border-b border-white/5">
                          <span className="text-off-white text-lg font-body">{link.label}</span>
                          {link.subtitle && (
                            <p className="text-grey-body text-sm mt-1 font-body">{link.subtitle}</p>
                          )}
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Who We Work With */}
                <div>
                  <p className="section-label mb-4">Who We Work With</p>
                  <div className="space-y-1">
                    {/* FOR YOUR BUSINESS */}
                    <div className="py-2">
                      <span className="text-xs tracking-[0.15em] uppercase text-gold font-medium">For Your Business</span>
                    </div>
                    {forYourBusinessLinks.map((link: { href: string; label: string; description: string }) => (
                      <Link key={link.href} href={link.href}>
                        <div className="py-3 border-b border-white/5">
                          <span className="text-off-white text-lg font-body">{link.label}</span>
                          <p className="text-grey-body text-sm mt-1 font-body">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                    
                    {/* FOR YOU */}
                    <div className="py-2 mt-4">
                      <span className="text-xs tracking-[0.15em] uppercase text-gold font-medium">For You</span>
                    </div>
                    {forYouLinks.map((link: { href: string; label: string; description: string }) => (
                      <Link key={link.href} href={link.href}>
                        <div className="py-3 border-b border-white/5">
                          <span className="text-off-white text-lg font-body">{link.label}</span>
                          <p className="text-grey-body text-sm mt-1 font-body">{link.description}</p>
                        </div>
                      </Link>
                    ))}
                  </div>
                </div>

                {/* Other Links */}
                <div className="space-y-1">
                  <Link href="/maguire">
                    <div className="py-3 border-b border-white/5">
                      <span className="text-off-white text-lg font-body">Our Proof</span>
                    </div>
                  </Link>
                  <Link href="/about">
                    <div className="py-3 border-b border-white/5">
                      <span className="text-off-white text-lg font-body">About</span>
                    </div>
                  </Link>
                </div>

                {/* CTA */}
                <div className="pt-4">
                  <MoveForwardButton fullWidth />
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Bottom Nav - Appears after scrolling past hero */}
      <AnimatePresence>
        {showBottomNav && (
          <motion.div
            className="fixed bottom-0 left-0 right-0 z-[998] hidden lg:block pointer-events-none"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 100, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.2, 0, 0, 1] }}
          >
            {/* Subtle gradient fade above */}
            <div className="absolute inset-x-0 bottom-full h-8 bg-gradient-to-t from-navy/60 to-transparent" />

            <div
              className="pointer-events-auto border-t border-gold/20"
              style={{
                background: 'linear-gradient(180deg, rgba(26, 35, 50, 0.95) 0%, rgba(26, 35, 50, 0.98) 100%)',
                backdropFilter: 'blur(20px)',
              }}
            >
              <div className="container py-3">
                <div className="flex items-center justify-between">
                  {/* Left: Logo + Nav links with dropdowns */}
                  <div className="flex items-center gap-6">
                    {/* Home Logo */}
                    <Link href="/" className="flex items-center group mr-2">
                      <span className="text-[0.9rem] tracking-[0.08em] font-logo uppercase flex items-baseline">
                        <span className="text-off-white font-bold">Ignition</span>
                        <span className="text-gold font-extrabold">Forward</span>
                      </span>
                    </Link>

                    {/* Divider */}
                    <div className="h-4 w-px bg-white/20" />

                    {/* How We Help Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setBottomHowWeHelpOpen(true)}
                      onMouseLeave={() => setBottomHowWeHelpOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-off-white/70 hover:text-off-white text-sm font-body transition-colors">
                        How We Help
                        <ChevronDown className={`w-3 h-3 transition-transform duration-[140ms] ${bottomHowWeHelpOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {bottomHowWeHelpOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.14, ease: [0.2, 0, 0, 1] }}
                            className="absolute bottom-full left-0 pb-2 z-50"
                          >
                            <div
                              className="w-72 rounded-lg overflow-hidden"
                              style={{
                                background: 'linear-gradient(135deg, rgba(36, 48, 68, 0.98) 0%, rgba(26, 35, 50, 0.99) 100%)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 -10px 40px -12px rgba(0, 0, 0, 0.4)',
                              }}
                            >
                              <Link href="/how-we-help">
                                <div className="px-4 py-3 hover:bg-white/5 transition-colors group border-b border-white/10">
                                  <div className="flex items-center justify-between">
                                    <span className="text-off-white font-medium font-body text-sm">Overview</span>
                                    <ArrowRight className="w-3 h-3 text-off-white group-hover:translate-x-1 transition-transform" />
                                  </div>
                                </div>
                              </Link>
                              {howWeHelpLinks.map((link) => (
                                <Link key={link.href} href={link.href}>
                                  <div className="px-4 py-3 hover:bg-white/5 transition-colors border-b border-white/5 last:border-0">
                                    <span className="text-off-white font-medium font-body text-sm">{link.label}</span>
                                    <p className="text-grey-body text-xs mt-0.5">{link.subtitle}</p>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Who We Work With Dropdown */}
                    <div
                      className="relative"
                      onMouseEnter={() => setBottomWhoWeWorkWithOpen(true)}
                      onMouseLeave={() => setBottomWhoWeWorkWithOpen(false)}
                    >
                      <button className="flex items-center gap-1 text-off-white/70 hover:text-off-white text-sm font-body transition-colors">
                        Who We Work With
                        <ChevronDown className={`w-3 h-3 transition-transform duration-[140ms] ${bottomWhoWeWorkWithOpen ? 'rotate-180' : ''}`} />
                      </button>
                      <AnimatePresence>
                        {bottomWhoWeWorkWithOpen && (
                          <motion.div
                            initial={{ opacity: 0, y: 6 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 6 }}
                            transition={{ duration: 0.14, ease: [0.2, 0, 0, 1] }}
                            className="absolute bottom-full left-0 pb-2 z-50"
                          >
                            <div
                              className="w-72 rounded-lg overflow-hidden"
                              style={{
                                background: 'linear-gradient(135deg, rgba(36, 48, 68, 0.98) 0%, rgba(26, 35, 50, 0.99) 100%)',
                                backdropFilter: 'blur(20px)',
                                border: '1px solid rgba(255, 255, 255, 0.1)',
                                boxShadow: '0 -10px 40px -12px rgba(0, 0, 0, 0.4)',
                              }}
                            >
                              {/* For Your Business */}
                              <div className="px-4 py-2 border-b border-white/10">
                                <span className="text-xs tracking-[0.12em] uppercase text-gold font-medium">For Your Business</span>
                              </div>
                              {forYourBusinessLinks.map((link) => (
                                <Link key={link.href} href={link.href}>
                                  <div className="px-4 py-2.5 hover:bg-white/5 transition-colors border-b border-white/5">
                                    <span className="text-off-white font-medium font-body text-sm">{link.label}</span>
                                  </div>
                                </Link>
                              ))}
                              {/* For You */}
                              <div className="px-4 py-2 border-t border-white/10">
                                <span className="text-xs tracking-[0.12em] uppercase text-gold font-medium">For You</span>
                              </div>
                              {forYouLinks.map((link) => (
                                <Link key={link.href} href={link.href}>
                                  <div className="px-4 py-2.5 hover:bg-white/5 transition-colors">
                                    <span className="text-off-white font-medium font-body text-sm">{link.label}</span>
                                  </div>
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link href="/maguire" className="text-off-white/70 hover:text-off-white text-sm font-body transition-colors">
                      Our Proof
                    </Link>
                    <Link href="/about" className="text-off-white/70 hover:text-off-white text-sm font-body transition-colors">
                      About
                    </Link>
                  </div>

                  {/* Right: CTA with comet streak */}
                  <div className="flex items-center gap-4 relative">
                    {/* Comet animation - plays once on mount */}
                    <motion.div
                      className="absolute right-full mr-4 pointer-events-none"
                      initial={{ x: -140, opacity: 0 }}
                      animate={{ x: 90, opacity: [0, 1, 1, 0] }}
                      transition={{
                        duration: 1.4,
                        delay: 0.3,
                        ease: [0.4, 0, 0.2, 1],
                        times: [0, 0.08, 0.75, 1],
                      }}
                    >
                      {/* Comet head */}
                      <div className="relative">
                        <div className="w-2 h-2 rounded-full bg-gold shadow-[0_0_8px_2px_rgba(201,169,98,0.6)]" />
                        {/* Comet tail */}
                        <div
                          className="absolute top-1/2 right-full -translate-y-1/2 w-16 h-[2px]"
                          style={{
                            background: 'linear-gradient(to left, rgba(201,169,98,0.8), rgba(201,169,98,0.3), transparent)',
                          }}
                        />
                      </div>
                    </motion.div>

                    <Link href="/contact">
                      <motion.span
                        className="btn-gold text-sm px-5 py-2"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        transition={{ duration: 0.14, ease: [0.2, 0, 0, 1] }}
                      >
                        Move Forward <ArrowRight className="w-4 h-4 inline ml-1" />
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile Sticky CTA - Always visible on mobile */}
      <div className="fixed bottom-0 left-0 right-0 z-[998] lg:hidden bg-navy/95 backdrop-blur-lg border-t border-white/10 p-3 safe-area-pb">
        <MoveForwardButton fullWidth className="text-base py-3" />
      </div>
    </>
  );
}
