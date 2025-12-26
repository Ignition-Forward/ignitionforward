# Ignition Forward Component Library

**Version:** 1.0  
**Last Updated:** December 25, 2024  
**Author:** Manus AI

---

## Table of Contents

1. [Button Components](#button-components)
2. [Card Components](#card-components)
3. [Navigation Components](#navigation-components)
4. [Section Components](#section-components)
5. [Form Components](#form-components)
6. [Animation Components](#animation-components)
7. [Utility Components](#utility-components)

---

## Button Components

### Primary Button (Gold)

The primary CTA button used for main conversion actions.

```jsx
// Usage
<Link href="/contact" className="btn-gold">
  Move Forward <ArrowRight className="w-5 h-5" />
</Link>
```

```css
/* CSS Implementation */
.btn-gold {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background-color: #C9A962;
  color: #1A2332;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 0.5rem;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
}

.btn-gold:hover {
  background-color: #B8944D;
  transform: translateY(-2px);
  box-shadow: 0 10px 15px -3px rgba(201, 169, 98, 0.3);
}
```

### Secondary Button (Outline)

Used for secondary actions alongside primary buttons.

```jsx
<Link href="/maguire" className="btn-outline">
  See Case Study <ArrowRight className="w-4 h-4" />
</Link>
```

```css
.btn-outline {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.875rem 1.75rem;
  background-color: transparent;
  color: #C9A962;
  border: 1.5px solid #C9A962;
  font-family: 'DM Sans', sans-serif;
  font-weight: 600;
  font-size: 0.9375rem;
  border-radius: 0.5rem;
  transition: all 200ms cubic-bezier(0.4, 0, 0.2, 1);
}

.btn-outline:hover {
  background-color: rgba(201, 169, 98, 0.1);
  transform: translateY(-2px);
}
```

### Comet CTA Link

Animated text link with comet trail effect for prominent CTAs.

```jsx
// CometCTA.tsx
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface CometCTAProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export default function CometCTA({ href, children, className = "" }: CometCTAProps) {
  return (
    <Link href={href} className={`group inline-flex items-center gap-2 ${className}`}>
      <span className="relative text-gold font-body font-medium text-lg">
        {children}
        {/* Animated underline */}
        <span className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-gold via-gold to-transparent origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        {/* Comet particles */}
        <span className="absolute -bottom-1 left-0 w-1 h-1 rounded-full bg-gold opacity-0 group-hover:opacity-100 group-hover:animate-comet-1" />
        <span className="absolute -bottom-1 left-0 w-0.5 h-0.5 rounded-full bg-gold/70 opacity-0 group-hover:opacity-100 group-hover:animate-comet-2" />
      </span>
      <ArrowRight className="w-5 h-5 text-gold transition-transform duration-300 group-hover:translate-x-1" />
    </Link>
  );
}
```

```css
/* Comet animation keyframes */
@keyframes comet-1 {
  0% { left: 0; opacity: 1; }
  100% { left: 100%; opacity: 0; }
}

@keyframes comet-2 {
  0% { left: 0; opacity: 0.7; }
  100% { left: 90%; opacity: 0; }
}

.animate-comet-1 {
  animation: comet-1 0.6s ease-out forwards;
}

.animate-comet-2 {
  animation: comet-2 0.5s ease-out 0.1s forwards;
}
```

---

## Card Components

### Service Card

Used in the "How We Help" section for Edge, Fractional AI, and Forward Deployed.

```jsx
interface ServiceCardProps {
  label: string;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  index: number;
}

function ServiceCard({ label, title, subtitle, description, href, index }: ServiceCardProps) {
  return (
    <Link href={href}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
        className="group relative h-full"
      >
        {/* Gold top line accent */}
        <div className="absolute top-0 left-6 right-6 h-1 bg-gradient-to-r from-transparent via-gold to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Card */}
        <div className="relative h-full p-8 bg-white rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 group-hover:border-gold/50 group-hover:shadow-lg group-hover:-translate-y-1">
          {/* Shine effect */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-gold/5 to-transparent -translate-x-full group-hover:translate-x-[200%] transition-transform duration-1000" />
          </div>
          
          {/* Content */}
          <div className="relative">
            <span className="label-text text-gold-dark">{label}</span>
            <h3 className="font-display text-2xl text-navy mt-3">{title}</h3>
            <p className="font-display text-lg text-gold mt-1">{subtitle}</p>
            <p className="font-body text-grey-muted mt-4">{description}</p>
            
            <div className="mt-6 flex items-center gap-2 text-gold font-medium">
              Learn more
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}
```

### Segment Card

Used in the "Who We Work With" section for Professional Services, Founder-Led, etc.

```jsx
interface SegmentCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  href: string;
}

function SegmentCard({ icon, title, description, href }: SegmentCardProps) {
  return (
    <Link href={href}>
      <div className="group p-6 bg-white rounded-xl border border-gray-200 transition-all duration-300 hover:border-gold/50 hover:shadow-md hover:-translate-y-1">
        {/* Icon container */}
        <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4 transition-colors group-hover:bg-gold/20">
          {icon}
        </div>
        
        <h4 className="font-display text-xl text-navy">{title}</h4>
        <p className="font-body text-grey-muted mt-2 text-sm">{description}</p>
        
        <div className="mt-4 flex items-center gap-1 text-gold text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Learn more <ArrowRight className="w-3 h-3" />
        </div>
      </div>
    </Link>
  );
}
```

### Testimonial Card

Used in the "Results Speak" section.

```jsx
interface TestimonialCardProps {
  quote: string;
  name: string;
  title: string;
  company: string;
  segment: string;
  initials: string;
}

function TestimonialCard({ quote, name, title, company, segment, initials }: TestimonialCardProps) {
  return (
    <div className="relative p-8 bg-navy-light rounded-2xl border border-gold/20">
      {/* Segment tag */}
      <span className="absolute top-4 right-4 px-3 py-1 bg-gold/10 text-gold text-xs font-medium rounded-full">
        {segment}
      </span>
      
      {/* Quote decoration */}
      <div className="absolute top-6 left-6 text-6xl text-gold/20 font-display leading-none">
        "
      </div>
      
      {/* Quote */}
      <blockquote className="relative z-10 font-body text-off-white/90 text-lg leading-relaxed mt-8">
        "{quote}"
      </blockquote>
      
      {/* Attribution */}
      <div className="flex items-center gap-4 mt-6 pt-6 border-t border-gold/10">
        {/* Avatar */}
        <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center ring-2 ring-gold/30">
          <span className="font-display text-gold font-semibold">{initials}</span>
        </div>
        
        <div>
          <div className="font-body font-semibold text-off-white">{name}</div>
          <div className="font-body text-grey-body text-sm">{title}, {company}</div>
        </div>
      </div>
    </div>
  );
}
```

### Differentiator Card

Used in the "What Makes Us Different" section.

```jsx
interface DifferentiatorCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  isHighlighted?: boolean;
}

function DifferentiatorCard({ icon, title, description, isHighlighted }: DifferentiatorCardProps) {
  return (
    <div className={`p-6 rounded-xl border transition-all duration-300 hover:-translate-y-1 ${
      isHighlighted 
        ? 'bg-navy-light border-gold/50 shadow-lg' 
        : 'bg-navy-light/50 border-gold/20 hover:border-gold/40'
    }`}>
      {/* Icon */}
      <div className="w-10 h-10 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
        {icon}
      </div>
      
      <h4 className="font-display text-xl text-off-white">{title}</h4>
      <p className="font-body text-grey-body mt-2">{description}</p>
    </div>
  );
}
```

---

## Navigation Components

### Header Navigation

```jsx
// Header.tsx
import { useState } from "react";
import { Link, useLocation } from "wouter";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function Header() {
  const [location] = useLocation();
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const howWeHelpLinks = [
    { href: "/how-we-help", label: "Overview: How We Help", isOverview: true },
    { href: "/edge", label: "Edge", subtitle: "9 hours to AI fluency" },
    { href: "/fractional-ai", label: "Fractional AI Officer", subtitle: "AI leadership without the hire" },
    { href: "/forward-deployed", label: "Forward Deployed", subtitle: "Implementation teams" },
  ];

  const whoWeWorkWithLinks = [
    { href: "/segments", label: "Overview: Who We Work With", isOverview: true },
    { href: "/professional-services", label: "Professional Services" },
    { href: "/founder-led", label: "Founder-Led" },
    { href: "/fund-managers", label: "GPs & Fund Managers" },
    { href: "/pe-portfolio", label: "PE Portfolio" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-navy/95 backdrop-blur-sm border-b border-gold/10">
      <div className="container flex items-center justify-between h-16">
        {/* Logo */}
        <Link href="/" className="font-display text-xl text-off-white">
          Ignition<span className="text-gold">Forward</span>
        </Link>

        {/* Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {/* How We Help Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setOpenDropdown('how')}
            onMouseLeave={() => setOpenDropdown(null)}
          >
            <button className="flex items-center gap-1 text-off-white/80 hover:text-off-white transition-colors">
              How We Help
              <ChevronDown className={`w-4 h-4 transition-transform ${openDropdown === 'how' ? 'rotate-180' : ''}`} />
            </button>
            
            {openDropdown === 'how' && (
              <div className="absolute top-full left-0 pt-2">
                <div className="bg-navy-light rounded-lg border border-gold/20 shadow-xl py-2 min-w-[280px]">
                  {howWeHelpLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`block px-4 py-3 hover:bg-gold/10 transition-colors ${
                        link.isOverview ? 'border-b border-gold/10 mb-1' : ''
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-off-white font-medium">{link.label}</span>
                        {link.isOverview && <ArrowRight className="w-4 h-4 text-gold" />}
                      </div>
                      {link.subtitle && (
                        <span className="text-grey-body text-sm">{link.subtitle}</span>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Other nav items */}
          <Link href="/maguire" className="text-off-white/80 hover:text-off-white transition-colors">
            Our Proof
          </Link>
          <Link href="/about" className="text-off-white/80 hover:text-off-white transition-colors">
            About
          </Link>
        </nav>

        {/* CTA */}
        <Link href="/contact" className="btn-gold">
          Move Forward <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </header>
  );
}
```

### Footer

```jsx
// Footer.tsx
import { Link } from "wouter";
import { Linkedin, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-navy border-t border-gold/10 py-16">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <Link href="/" className="font-display text-xl text-off-white">
              Ignition<span className="text-gold">Forward</span>
            </Link>
            <p className="font-body text-grey-body mt-4 text-sm">
              AI enablement for expert-led businesses.
            </p>
            <div className="flex gap-4 mt-6">
              <a href="#" className="text-grey-body hover:text-gold transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-grey-body hover:text-gold transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* How We Help */}
          <div>
            <h4 className="font-body font-semibold text-off-white mb-4">How We Help</h4>
            <ul className="space-y-3">
              <li><Link href="/edge" className="text-grey-body hover:text-gold transition-colors text-sm">Edge</Link></li>
              <li><Link href="/fractional-ai" className="text-grey-body hover:text-gold transition-colors text-sm">Fractional AI Officer</Link></li>
              <li><Link href="/forward-deployed" className="text-grey-body hover:text-gold transition-colors text-sm">Forward Deployed</Link></li>
            </ul>
          </div>

          {/* Who We Work With */}
          <div>
            <h4 className="font-body font-semibold text-off-white mb-4">Who We Work With</h4>
            <ul className="space-y-3">
              <li><Link href="/professional-services" className="text-grey-body hover:text-gold transition-colors text-sm">Professional Services</Link></li>
              <li><Link href="/founder-led" className="text-grey-body hover:text-gold transition-colors text-sm">Founder-Led</Link></li>
              <li><Link href="/fund-managers" className="text-grey-body hover:text-gold transition-colors text-sm">GPs & Fund Managers</Link></li>
              <li><Link href="/pe-portfolio" className="text-grey-body hover:text-gold transition-colors text-sm">PE Portfolio</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-body font-semibold text-off-white mb-4">Company</h4>
            <ul className="space-y-3">
              <li><Link href="/maguire" className="text-grey-body hover:text-gold transition-colors text-sm">Our Proof</Link></li>
              <li><Link href="/about" className="text-grey-body hover:text-gold transition-colors text-sm">About</Link></li>
              <li><Link href="/contact" className="text-grey-body hover:text-gold transition-colors text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gold/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-grey-body text-sm">
            © {new Date().getFullYear()} The Forward Group. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-grey-body hover:text-gold transition-colors text-sm">Privacy Policy</Link>
            <Link href="/terms" className="text-grey-body hover:text-gold transition-colors text-sm">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
```

---

## Section Components

### Section Label

```jsx
function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span className={`section-label ${className}`}>
      {children}
    </span>
  );
}
```

```css
.section-label {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  font-family: 'DM Sans', sans-serif;
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: #C9A962;
}

.section-label::before {
  content: '';
  width: 2rem;
  height: 1px;
  background-color: currentColor;
}
```

### Section Header

```jsx
interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

function SectionHeader({ label, title, description, centered = true, light = false }: SectionHeaderProps) {
  return (
    <div className={`max-w-3xl ${centered ? 'mx-auto text-center' : ''}`}>
      <SectionLabel className={light ? 'text-gold-dark' : 'text-gold'}>
        {label}
      </SectionLabel>
      
      <h2 className={`font-display text-4xl md:text-5xl font-semibold mt-6 ${
        light ? 'text-navy' : 'text-off-white'
      }`}>
        {title}
      </h2>
      
      {description && (
        <p className={`font-body text-lg mt-4 ${
          light ? 'text-grey-muted' : 'text-grey-body'
        }`}>
          {description}
        </p>
      )}
    </div>
  );
}
```

### Gold Top Line Section

```jsx
// Section with gold accent line at top
<section className="bg-off-white py-24 relative gold-top-line">
  {/* Content */}
</section>
```

```css
.gold-top-line::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 120px;
  height: 3px;
  background: linear-gradient(90deg, transparent, #C9A962, transparent);
}
```

---

## Form Components

### Text Input

```jsx
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
}

function Input({ label, required, ...props }: InputProps) {
  return (
    <div>
      <label className="block font-body text-off-white text-sm mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <input
        {...props}
        className="w-full px-4 py-3 bg-navy-light border border-gold/20 rounded-lg text-off-white placeholder:text-grey-body/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors"
      />
    </div>
  );
}
```

### Textarea

```jsx
function Textarea({ label, required, ...props }: TextareaProps) {
  return (
    <div>
      <label className="block font-body text-off-white text-sm mb-2">
        {label} {required && <span className="text-gold">*</span>}
      </label>
      <textarea
        {...props}
        rows={5}
        className="w-full px-4 py-3 bg-navy-light border border-gold/20 rounded-lg text-off-white placeholder:text-grey-body/50 focus:outline-none focus:border-gold/50 focus:ring-1 focus:ring-gold/30 transition-colors resize-none"
      />
    </div>
  );
}
```

---

## Animation Components

### ScrollReveal

Wrapper component for scroll-triggered animations.

```jsx
// ScrollReveal.tsx
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  variant?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scale';
}

const variants = {
  fadeUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeLeft: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  fadeRight: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  scale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  }
};

export default function ScrollReveal({ 
  children, 
  className = "", 
  delay = 0,
  variant = 'fadeUp'
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants[variant]}
      transition={{ 
        duration: 0.6, 
        delay,
        ease: [0.4, 0, 0.2, 1]
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

### AnimatedCounter

Number counter that animates when scrolled into view.

```jsx
// AnimatedCounter.tsx
import { motion, useInView, useSpring, useTransform } from "framer-motion";
import { useRef, useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
}

export default function AnimatedCounter({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2
}: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  
  const spring = useSpring(0, { 
    duration: duration * 1000,
    bounce: 0
  });
  
  const display = useTransform(spring, (current) => 
    `${prefix}${Math.round(current)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, value, spring]);

  return (
    <motion.span ref={ref}>
      {display}
    </motion.span>
  );
}
```

### PageTransition

Full-page transition animation for route changes.

```jsx
// PageTransition.tsx
import { motion, AnimatePresence } from "framer-motion";
import { useLocation } from "wouter";
import { useEffect, useState } from "react";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const [location] = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 300);
    return () => clearTimeout(timer);
  }, [location]);

  return (
    <>
      {/* Loading bar */}
      <AnimatePresence>
        {isLoading && (
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-0 left-0 right-0 h-1 bg-gold origin-left z-[100]"
          />
        )}
      </AnimatePresence>

      {/* Page content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={location}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
```

---

## Utility Components

### SEO Component

```jsx
// SEO.tsx
import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  structuredData?: object;
}

export default function SEO({ title, description, canonical, structuredData }: SEOProps) {
  const fullTitle = `${title} | Ignition Forward`;
  const siteUrl = "https://ignitionforward.com";

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={`${siteUrl}${canonical || ''}`} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={`${siteUrl}${canonical || ''}`} />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      
      {/* Structured Data */}
      {structuredData && (
        <script type="application/ld+json">
          {JSON.stringify(structuredData)}
        </script>
      )}
    </Helmet>
  );
}
```

### Container

```jsx
function Container({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`container ${className}`}>
      {children}
    </div>
  );
}
```

```css
.container {
  width: 100%;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

@media (min-width: 640px) {
  .container {
    padding-left: 2rem;
    padding-right: 2rem;
  }
}
```

---

## Component File Structure

```
client/src/components/
├── ui/                    # shadcn/ui base components
│   ├── button.tsx
│   ├── card.tsx
│   ├── dialog.tsx
│   └── ...
├── Header.tsx             # Site header with navigation
├── Footer.tsx             # Site footer
├── SEO.tsx                # Meta tags and structured data
├── ScrollReveal.tsx       # Scroll-triggered animations
├── AnimatedCounter.tsx    # Number counter animation
├── PageTransition.tsx     # Route transition animations
├── CometCTA.tsx           # Animated CTA link
└── Map.tsx                # Google Maps integration
```

---

*All components should be implemented with TypeScript for type safety and better developer experience.*
