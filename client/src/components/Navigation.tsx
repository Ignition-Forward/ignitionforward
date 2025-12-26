import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, Menu, X, ArrowRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

/*
 * NAVIGATION - Original Design System
 * Typography: Playfair Display (logo) + DM Sans (links)
 * Colors: Navy #1A2332, Gold #C9A962, Off-White #F8F7F4
 * Button radius: 6px
 */

const howWeHelpLinks = [
  { href: "/edge", label: "Edge", subtitle: "9 hours to AI fluency. By application only." },
  { href: "/fractional-ai", label: "Fractional AI Officer", subtitle: "Strategic AI leadership without the full-time hire." },
  { href: "/forward-deployed", label: "Forward Deployed", subtitle: "Implementation teams working alongside yours." },
];

const whoWeWorkWithLinks = [
  { href: "/professional-services", label: "Professional Services", description: "Where trust is the product and relationships are the moat." },
  { href: "/founder-led", label: "Founder-Led", description: "Scale your expertise without scaling your calendar." },
  { href: "/fund-managers", label: "Fund Managers (GPs)", description: "Systematic sourcing, faster diligence, portfolio leverage." },
  { href: "/pe-portfolio", label: "PE Portfolio", description: "Value creation aligned AI with quick wins that compound." },
];

export default function Navigation() {
  const [location] = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [howWeHelpOpen, setHowWeHelpOpen] = useState(false);
  const [whoWeWorkWithOpen, setWhoWeWorkWithOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-[1000] transition-all duration-500 ${
          isScrolled ? 'py-3' : 'py-5'
        }`}
        style={{ 
          background: isScrolled 
            ? 'linear-gradient(180deg, rgba(26, 35, 50, 0.95) 0%, rgba(26, 35, 50, 0.9) 100%)'
            : 'transparent',
          backdropFilter: isScrolled ? 'blur(20px)' : 'none',
          borderBottom: isScrolled ? '1px solid rgba(255, 255, 255, 0.05)' : 'none',
        }}
      >
        <nav className="container">
          <div className="flex items-center justify-between">
            {/* Logo - Playfair Display */}
            <Link href="/" className="flex items-center">
              <span className="text-xl md:text-2xl tracking-tight font-display">
                <span className="text-off-white italic font-light">Ignition</span>
                <span className="text-gold font-semibold">Forward</span>
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
                  className="flex items-center gap-1 text-gold hover:text-gold/80 transition-colors py-2 font-body text-sm font-medium"
                >
                  How We Help
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${howWeHelpOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {howWeHelpOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
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
                  className="flex items-center gap-1 text-gold hover:text-gold/80 transition-colors py-2 font-body text-sm font-medium"
                >
                  Who We Work With
                  <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${whoWeWorkWithOpen ? 'rotate-180' : ''}`} />
                </button>
                <AnimatePresence>
                  {whoWeWorkWithOpen && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.2 }}
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
                              <span className="text-off-white font-medium font-body">Overview: Who We Work With</span>
                              <ArrowRight className="w-4 h-4 text-off-white group-hover:translate-x-1 transition-transform" />
                            </div>
                          </div>
                        </Link>
                        {whoWeWorkWithLinks.map((link, index) => (
                          <Link
                            key={link.href}
                            href={link.href}
                          >
                            <div 
                              className={`px-5 py-4 hover:bg-white/5 transition-colors group ${
                                index < whoWeWorkWithLinks.length - 1 ? 'border-b border-white/5' : ''
                              }`}
                            >
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
                className="text-gold hover:text-gold/80 transition-colors py-2 font-body text-sm font-medium"
              >
                Our Proof
              </Link>

              <Link 
                href="/about" 
                className="text-gold hover:text-gold/80 transition-colors py-2 font-body text-sm font-medium"
              >
                About
              </Link>

              {/* CTA Button - 6px radius */}
              <Link href="/contact" className="btn btn-gold">
                Move Forward <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-off-white p-2"
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
            className="fixed inset-0 z-[999] lg:hidden bg-navy"
          >
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.3 }}
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
                    <Link href="/segments">
                      <div className="py-3 border-b border-white/10 flex items-center justify-between">
                        <span className="text-off-white text-lg font-body">Overview</span>
                        <ArrowRight className="w-4 h-4 text-off-white" />
                      </div>
                    </Link>
                    {whoWeWorkWithLinks.map((link) => (
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
                  <Link href="/contact" className="btn btn-gold w-full justify-center">
                    Move Forward <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
