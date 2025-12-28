import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { useRef, useState, useEffect } from "react";
import {
  ArrowRight, Zap, Clock, FileText, TrendingUp, Target,
  Check, Sparkles
} from "lucide-react";
import SEO, { generateServiceSchema, generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";
import TwinkleField from "@/components/TwinkleField";
import ScrollIndicator from "@/components/ScrollIndicator";
import FAQAccordion from "@/components/FAQAccordion";
import { getIntakeMonth } from "@/lib/utils";

/*
 * EDGE - STANDALONE SERVICE PAGE
 * Executive AI Training Program
 * 9 hours to AI fluency
 */

// Edge data
const edgeTransformation = {
  before: [
    "Hours spent on repetitive tasks",
    "Wondering where to start with AI",
    "Watching competitors move faster",
    "Generic ChatGPT experiments",
  ],
  after: [
    "2-3 workflows saving 5+ hours/week",
    "Clear AI roadmap for your role",
    "Practical skills you use daily",
    "Custom systems for YOUR work",
  ],
};

const edgeProcess = [
  {
    step: 1,
    title: "Audit & Design",
    duration: "3 hours",
    description: "We map your current workflows, identify high-impact AI opportunities, and design 2-3 custom workflows tailored to your actual work.",
    outcome: "Clear picture of where AI creates the most value",
  },
  {
    step: 2,
    title: "Build & Install",
    duration: "3 hours",
    description: "We build the workflows together, install them into your tools, and run them on real work so you see immediate results.",
    outcome: "Working systems you can use tomorrow",
  },
  {
    step: 3,
    title: "Refine & Transfer",
    duration: "3 hours",
    description: "We refine based on real usage, document everything, and ensure you can run and modify these workflows independently.",
    outcome: "Complete ownership and confidence",
  },
];

const edgeFaqs = [
  {
    question: "What if I'm not technical?",
    answer: "Edge is designed for business leaders, not engineers. If you can use email and spreadsheets, you can do Edge. We focus on practical application, not coding.",
  },
  {
    question: "What tools will I learn?",
    answer: "We work with whatever tools make sense for your workflows—ChatGPT, Claude, custom GPTs, automation platforms. The specific tools matter less than the thinking frameworks.",
  },
  {
    question: "Can my team join?",
    answer: "Edge is designed for individuals or small groups (up to 3). For larger teams, we recommend starting with one leader who can then champion AI adoption internally.",
  },
  {
    question: "How is this different from online courses?",
    answer: "Courses teach generic skills. Edge builds YOUR specific workflows, with YOUR data, for YOUR role. You leave with working systems, not just knowledge.",
  },
  {
    question: "What's the time commitment?",
    answer: "9 hours total, spread over 2-3 weeks. Sessions are flexible and scheduled around your calendar. Most clients complete Edge in 2-3 weeks.",
  },
  {
    question: "What happens after Edge?",
    answer: "You'll have complete documentation and working systems. Many Edge graduates later bring us in for Forward Deployed engagements to scale their learnings across their organization.",
  },
];

function AnimatedCounter({ value, suffix = "", duration = 2 }: { value: number; suffix?: string; duration?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = value;
      const incrementTime = (duration * 1000) / end;
      const timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start >= end) clearInterval(timer);
      }, incrementTime);
      return () => clearInterval(timer);
    }
  }, [isInView, value, duration]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Edge() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateServiceSchema({
        name: 'Edge - 9 Hours to AI Fluency',
        description: 'Install 2-3 AI workflows into your real day-to-day in just 9 hours. Executive AI training for business leaders.',
        url: '/edge',
        price: '7500',
      }),
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'How We Help', url: '/how-we-help' },
        { name: 'Edge', url: '/edge' },
      ]),
    ],
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Edge - 9 Hours to AI Fluency"
        description="From AI-curious to AI-fluent in just 9 hours. Walk away with 2-3 working AI workflows built for YOUR role, YOUR data, YOUR daily work. From $7,500."
        canonical="/edge"
        structuredData={structuredData}
      />

      {/* ================================================================== */}
      {/* HERO SECTION */}
      {/* ================================================================== */}
      <section className="relative bg-navy overflow-hidden pt-32 pb-20">
        <div
          className="absolute inset-0 z-0 grayscale"
          style={{
            backgroundImage: 'url(/images/hero-services.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            opacity: 0.15,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-navy/80 via-navy/90 to-navy z-0" />
        <TwinkleField />

        <div className="container relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            {/* Availability Badge */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full mb-6"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-gold text-sm font-medium">3 spots available for {getIntakeMonth()}</span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.1, ease: [0.2, 0, 0, 1] }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold/15 border border-gold/20 mb-6"
            >
              <Zap className="w-4 h-4 text-gold" />
              <span className="text-gold text-xs font-semibold tracking-wider uppercase">Edge Program</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.15, ease: [0.2, 0, 0, 1] }}
              className="text-off-white text-4xl md:text-5xl lg:text-6xl font-display font-semibold leading-tight"
            >
              From AI-Curious to<br />
              <span className="text-gold italic">AI-Fluent</span> in 9 Hours
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              transition={{ duration: 0.36, delay: 0.2, ease: [0.2, 0, 0, 1] }}
              className="mt-6 text-lg md:text-xl text-off-white/70 font-body leading-relaxed max-w-2xl mx-auto"
            >
              Walk away with 2-3 working AI workflows built for YOUR role, YOUR data, YOUR daily work.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.3 }}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href="/contact" className="btn-gold inline-flex items-center justify-center gap-2">
                Apply for Edge
                <ArrowRight className="w-5 h-5" />
              </Link>
              <a href="#process" className="btn-outline-light inline-flex items-center justify-center gap-2">
                See the Process
              </a>
            </motion.div>
          </div>
        </div>

        <ScrollIndicator />
      </section>

      {/* ================================================================== */}
      {/* ROI + INVESTMENT SECTION */}
      {/* ================================================================== */}
      <section className="bg-navy-light py-20">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* ROI Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-navy rounded-2xl border border-white/10"
              >
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-6 h-6 text-gold" />
                  <span className="text-gold font-medium">Average ROI</span>
                </div>
                <p className="text-off-white/80 text-lg leading-relaxed">
                  Edge graduates save <span className="text-gold font-bold">5+ hours per week</span>.
                  At $200/hour, that's <span className="text-gold font-bold">$52,000/year</span> in recovered time.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-white/10">
                  <div className="text-center">
                    <div className="text-2xl font-display text-gold font-bold">
                      <AnimatedCounter value={50} suffix="+" />
                    </div>
                    <div className="text-off-white/60 text-xs">Leaders trained</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display text-gold font-bold">
                      <AnimatedCounter value={5} suffix="+" />
                    </div>
                    <div className="text-off-white/60 text-xs">Hours saved weekly</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-display text-gold font-bold">100%</div>
                    <div className="text-off-white/60 text-xs">Completion rate</div>
                  </div>
                </div>
              </motion.div>

              {/* Investment Card */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gradient-to-br from-navy to-navy-light rounded-2xl border border-gold/40"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Sparkles className="w-5 h-5 text-gold" />
                  <span className="text-gold text-sm font-medium uppercase tracking-wider">Investment</span>
                </div>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-4xl lg:text-5xl font-display text-off-white">$7.5K–$15K</span>
                </div>
                <p className="text-off-white/60 mb-6">We review fit in a 30-minute call • 4-6 clients/quarter</p>

                <div className="space-y-3">
                  {[
                    { icon: Clock, text: "9 hours over 2-3 weeks", sub: "Flexible to your schedule" },
                    { icon: Zap, text: "2-3 working AI workflows", sub: "Built for your specific role" },
                    { icon: FileText, text: "Complete documentation", sub: "Reference guides you'll actually use" },
                  ].map((item) => (
                    <div key={item.text} className="flex items-center gap-4 p-3 bg-white/5 rounded-xl">
                      <div className="w-10 h-10 rounded-lg bg-gold/20 flex items-center justify-center">
                        <item.icon className="w-5 h-5 text-gold" />
                      </div>
                      <div>
                        <div className="text-off-white font-medium text-sm">{item.text}</div>
                        <div className="text-off-white/50 text-xs">{item.sub}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <Link href="/contact" className="btn-gold w-full text-center flex items-center justify-center gap-2 mt-6">
                  Apply for Edge
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* TRANSFORMATION SECTION */}
      {/* ================================================================== */}
      <section className="bg-navy py-20">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <span className="label-text text-gold">The Transformation</span>
              <h2 className="mt-2 text-off-white text-3xl font-display">Before Edge vs. After Edge</h2>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-white/5 rounded-2xl border border-white/10 relative"
              >
                <div className="absolute -top-3 left-6 px-4 py-1 bg-white/20 text-off-white/80 text-sm font-medium rounded-full">
                  Before
                </div>
                <div className="mt-4 space-y-4">
                  {edgeTransformation.before.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="flex items-center gap-3 text-off-white/60"
                    >
                      <div className="w-2 h-2 bg-white/40 rounded-full" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="p-8 bg-gold/10 rounded-2xl border-2 border-gold relative"
              >
                <div className="absolute -top-3 left-6 px-4 py-1 bg-gold text-navy text-sm font-bold rounded-full">
                  After Edge
                </div>
                <div className="mt-4 space-y-4">
                  {edgeTransformation.after.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: 10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 + 0.2 }}
                      className="flex items-center gap-3 text-off-white"
                    >
                      <Check className="w-5 h-5 text-gold flex-shrink-0" />
                      <span>{item}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* PROCESS SECTION */}
      {/* ================================================================== */}
      <section id="process" className="scroll-mt-32 bg-off-white py-20">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-12">
              <span className="label-text text-gold-dark">The Process</span>
              <h2 className="mt-2 text-navy text-3xl font-display">Three Sessions. Real Results.</h2>
              <p className="mt-4 text-grey-body max-w-2xl mx-auto">
                Each session is 3 hours, scheduled flexibly around your calendar. Most clients complete Edge in 2-3 weeks.
              </p>
            </div>

            <div className="relative">
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-gold/20 via-gold to-gold/20 -translate-y-1/2" />

              <div className="grid lg:grid-cols-3 gap-8">
                {edgeProcess.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.36, delay: index * 0.2 }}
                    className="relative"
                  >
                    <div className="hidden lg:flex absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gold text-navy font-bold text-xl items-center justify-center z-10 shadow-lg shadow-gold/30">
                      {step.step}
                    </div>

                    <div className="p-6 bg-white rounded-2xl border border-gray-200 h-full shadow-sm">
                      <div className="lg:hidden text-4xl font-display text-gold/30 mb-3">{step.step}</div>
                      <h3 className="text-xl font-display text-navy mb-2">{step.title}</h3>
                      <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 rounded-full mb-4">
                        <Clock className="w-4 h-4 text-gold-dark" />
                        <span className="text-gold-dark text-sm font-medium">{step.duration}</span>
                      </div>
                      <p className="text-grey-body text-sm leading-relaxed mb-4">{step.description}</p>
                      <div className="pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-gold-dark text-sm">
                          <Target className="w-4 h-4" />
                          <span className="font-medium">Outcome:</span>
                        </div>
                        <p className="text-navy text-sm mt-1 font-medium">{step.outcome}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FAQ SECTION */}
      {/* ================================================================== */}
      <section className="bg-navy py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <span className="label-text text-gold">Common Questions</span>
              <h2 className="mt-2 text-off-white text-2xl font-display">About Edge</h2>
            </div>
            <FAQAccordion faqs={edgeFaqs} variant="dark" />
          </div>
        </div>
      </section>

      {/* ================================================================== */}
      {/* FINAL CTA */}
      {/* ================================================================== */}
      <section className="bg-off-white py-20">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-navy text-3xl font-display">Ready to gain your Edge?</h2>
            <p className="mt-4 text-grey-body text-lg">
              30 minutes. We'll discuss your role, your workflows, and whether Edge is the right fit. No pressure.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <CometCTA href="/contact">
                Apply for Edge
              </CometCTA>
              <Link href="/how-we-help" className="btn-outline-navy inline-flex items-center justify-center gap-2">
                Explore All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
