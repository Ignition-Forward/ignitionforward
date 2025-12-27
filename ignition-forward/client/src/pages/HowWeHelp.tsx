import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, Zap, Users, Rocket, Handshake, BookOpen, Target, Wrench, Sparkles, CheckCircle } from "lucide-react";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * DESIGN: How We Help Page - TIGHTENED VERSION
 * 
 * CHANGES FROM PREVIOUS:
 * 1. Removed redundant white service cards (ladder visualization is sufficient)
 * 2. Strengthened hero copy to be concrete, not abstract
 * 3. Added micro-proofs to principles
 * 4. Strengthened CTA with specific action
 * 5. Added Quick Selector above ladder
 */

const principles = [
  {
    icon: Handshake,
    title: "Build WITH You",
    description: "We don't disappear into a black box. Your team learns alongside ours.",
    proof: "100% of clients can run their systems without us after 90 days.",
  },
  {
    icon: BookOpen,
    title: "Transfer Knowledge",
    description: "Every engagement includes training. You'll never be dependent on us.",
    proof: "Documented playbooks and team training included in every engagement.",
  },
  {
    icon: Target,
    title: "Measure Outcomes",
    description: "We track business impact, not activity metrics.",
    proof: "Revenue, time saved, conversion rates — not hours billed.",
  },
  {
    icon: Wrench,
    title: "Start Small, Scale Fast",
    description: "Prove value quickly, then expand what works.",
    proof: "Average time from first call to first workflow: 3 weeks.",
  },
];

const quickSelectors = [
  {
    question: "I want to learn AI myself",
    answer: "Edge",
    description: "9 hours to AI fluency",
    href: "/edge",
  },
  {
    question: "I need help building something",
    answer: "Forward Deployed",
    description: "Implementation teams",
    href: "/forward-deployed",
  },
  {
    question: "I need ongoing AI leadership",
    answer: "Fractional AI Officer",
    description: "Strategic leadership",
    href: "/fractional-ai",
  },
];

export default function HowWeHelp() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'ItemList',
        name: 'Ignition Forward Services',
        description: 'Three ways to work with Ignition Forward for AI enablement',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Edge',
            description: 'Executive AI Training - From $7,500',
            url: 'https://ignitionforward.com/edge',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: 'Forward Deployed',
            description: 'Implementation teams - $25K-$150K',
            url: 'https://ignitionforward.com/forward-deployed',
          },
          {
            '@type': 'ListItem',
            position: 3,
            name: 'Fractional AI Officer',
            description: 'Strategic AI leadership - $8K-$30K/month',
            url: 'https://ignitionforward.com/fractional-ai',
          },
        ],
      },
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'How We Help', url: '/how-we-help' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="How We Help - AI Services"
        description="Three ways to build AI capability: Edge (executive training), Forward Deployed (implementation), and Fractional AI Officer (strategic leadership). Pick your entry point."
        canonical="/how-we-help"
        structuredData={structuredData}
      />
      
      {/* HERO SECTION - CONCRETE, NOT ABSTRACT */}
      <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-teal/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>
        
        <div className="absolute inset-0 grid-pattern opacity-30" />
        
        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gold/10 border border-gold/20 mb-8"
            >
              <Sparkles className="w-4 h-4 text-gold" />
              <span className="text-gold text-sm font-medium">The Ignition Forward Method</span>
            </motion.div>
            
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.1 }}
              className="text-off-white text-4xl md:text-5xl lg:text-6xl font-display leading-tight"
            >
              Three ways to build AI capability.
              <br />
              <span className="text-gold italic">Pick your entry point.</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-off-white/70 leading-relaxed max-w-2xl mx-auto"
            >
              Most clients start with Edge. Some skip straight to implementation. We'll help you choose the right starting point.
            </motion.p>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-navy-light to-transparent" />
      </section>

      {/* QUICK SELECTOR - NEW */}
      <section className="bg-navy-light py-12">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-8"
          >
            <span className="label-text text-gold">Quick Start</span>
            <h2 className="mt-2 text-2xl font-display text-off-white">What best describes you?</h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {quickSelectors.map((selector, index) => (
              <motion.div
                key={selector.answer}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Link href={selector.href}>
                  <div className="p-6 rounded-xl bg-navy border border-white/10 hover:border-gold/50 transition-all cursor-pointer group text-center">
                    <p className="text-off-white/60 text-sm mb-2">"{selector.question}"</p>
                    <p className="text-gold font-display text-xl group-hover:text-gold-hover transition-colors">{selector.answer}</p>
                    <p className="text-off-white/50 text-sm mt-1">{selector.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PRINCIPLES SECTION - WITH MICRO-PROOFS */}
      <section className="bg-off-white py-20">
        <div className="container">
          <div className="text-center mb-16">
            <span className="label-text text-gold-dark">Our Principles</span>
            <h2 className="mt-4 text-navy">How We Work</h2>
            <p className="mt-4 text-grey-body max-w-2xl mx-auto">
              These aren't just words on a wall. They're the operating system behind every engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {principles.map((principle, index) => (
              <motion.div
                key={principle.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.24, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-gold/50 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center mb-4">
                  <principle.icon className="w-6 h-6 text-gold" />
                </div>
                <h4 className="text-lg font-display text-navy">{principle.title}</h4>
                <p className="mt-2 text-grey-body text-sm leading-relaxed">{principle.description}</p>
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                    <p className="text-xs text-grey-body italic">{principle.proof}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICE LADDER VISUALIZATION - PRIMARY CONTENT */}
      <section className="bg-navy py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="label-text text-gold">The Ignition Forward Ladder</span>
            <h2 className="mt-4 text-off-white">Every Client Climbs the Ladder</h2>
            <p className="mt-4 text-off-white/60 max-w-2xl mx-auto">
              Our job is to make each step so valuable you can't imagine stopping.
            </p>
          </motion.div>

          {/* Ladder Visualization */}
          <div className="max-w-4xl mx-auto">
            {/* Step 1: Edge */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.24 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-lg">1</div>
                  <div className="w-0.5 h-24 bg-gradient-to-b from-gold to-gold/30" />
                </div>
                <div className="flex-1 pb-8">
                  <Link href="/edge">
                    <div className="p-6 rounded-xl bg-navy-light border border-gold/30 hover:border-gold/60 transition-colors group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Zap className="w-5 h-5 text-gold" />
                            <span className="text-gold text-sm font-medium">From $7,500</span>
                          </div>
                          <h3 className="text-2xl font-display text-off-white">Edge</h3>
                          <p className="text-off-white/60 mt-2">9 hours to AI fluency. Build your first workflows.</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-teal text-sm italic">"Now I understand AI. What should I build?"</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Step 2: Forward Deployed */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.24, delay: 0.1 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-lg">2</div>
                  <div className="w-0.5 h-24 bg-gradient-to-b from-gold to-gold/30" />
                </div>
                <div className="flex-1 pb-8">
                  <Link href="/forward-deployed">
                    <div className="p-6 rounded-xl bg-navy-light border border-gold/30 hover:border-gold/60 transition-colors group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Rocket className="w-5 h-5 text-gold" />
                            <span className="text-gold text-sm font-medium">$25K – $150K</span>
                          </div>
                          <h3 className="text-2xl font-display text-off-white">Forward Deployed</h3>
                          <p className="text-off-white/60 mt-2">Implementation teams building AI systems alongside yours.</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-teal text-sm italic">"That worked. What else can we do?"</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>

            {/* Step 3: Fractional AI Officer */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.24, delay: 0.2 }}
              className="relative"
            >
              <div className="flex items-start gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 rounded-full bg-gold flex items-center justify-center text-navy font-bold text-lg">3</div>
                </div>
                <div className="flex-1">
                  <Link href="/fractional-ai">
                    <div className="p-6 rounded-xl bg-navy-light border border-gold/30 hover:border-gold/60 transition-colors group cursor-pointer">
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="flex items-center gap-3 mb-2">
                            <Users className="w-5 h-5 text-gold" />
                            <span className="text-gold text-sm font-medium">$8K – $30K/month</span>
                          </div>
                          <h3 className="text-2xl font-display text-off-white">Fractional AI Officer</h3>
                          <p className="text-off-white/60 mt-2">Ongoing strategic AI leadership as you scale.</p>
                        </div>
                        <ArrowRight className="w-5 h-5 text-gold opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <div className="mt-4 pt-4 border-t border-white/10">
                        <p className="text-teal text-sm italic">"We're AI-native now. Keep us ahead."</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom note */}
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="text-center text-off-white/50 text-sm mt-12 max-w-xl mx-auto"
          >
            Not everyone starts at Edge. Some clients jump straight to Forward Deployed or Fractional. 
            We'll help you find the right entry point.
          </motion.p>
        </div>
      </section>

      {/* CTA Section - STRENGTHENED */}
      <section className="bg-off-white">
        <div className="container section-padding text-center">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.36 }}
          >
            <h2 className="text-navy">Know where you want to start?</h2>
            <p className="mt-4 text-grey-body text-lg max-w-2xl mx-auto">
              Book a 30-minute fit call. We'll recommend the right entry point based on where you are and where you want to go.
            </p>
            <div className="mt-8">
              <CometCTA href="/contact">
                Book a Fit Call
              </CometCTA>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
