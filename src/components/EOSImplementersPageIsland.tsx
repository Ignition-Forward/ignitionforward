import { motion } from "framer-motion";
import {
  ArrowRight,
  BookOpen,
  CalendarClock,
  Check,
  ChevronDown,
  ClipboardList,
  FileText,
  Repeat,
  Shield,
  Target,
  Users,
  X,
} from "lucide-react";
import { useState } from "react";
import CometCTA from "./CometCTAIsland";

/*
 * EOS IMPLEMENTERS PAGE - WHO WE WORK WITH
 *
 * Mirrors the Professional Services page structure:
 * 1. Hero
 * 2. Scenario + Fit Check
 * 3. Challenges
 * 4. How We Help
 * 5. Outcomes
 * 6. FAQ
 * 7. CTA
 */

const challenges = [
  {
    icon: CalendarClock,
    title: "L10 prep eats your week",
    description:
      "An hour of prep before every L10. Pulling Scorecards, scanning Rocks, drafting agendas with the right IDS sequence. Across 12-20 active clients, that's most of two full workdays. Every week.",
  },
  {
    icon: ClipboardList,
    title: "Fragmented data sources and systems",
    description:
      "We take the existing SaaS tools you already work with and bring the right data into a central place where AI can access it systematically.",
  },
  {
    icon: Users,
    title: "The practice depends on you",
    description:
      "Issues lists, Scorecards, Rocks status — it all lives in your head and your notes. Take two weeks off and things crack. The systems aren't systems yet. They're you.",
  },
  {
    icon: Shield,
    title: "You won't compromise EOS Purity",
    description:
      "You've heard AI pitches that touch facilitation or push past franchise compliance. None of that works for your practice — and you won't be the one explaining it to EOS Worldwide.",
  },
];

const implementationPillars = [
  {
    icon: Shield,
    title: "Strategy that respects the methodology",
    description:
      "Where AI helps (and where it doesn't), grounded in the Six Key Components, your facilitation style, and the bounds of your franchise agreement.",
  },
  {
    icon: Target,
    title: "Implementer leverage workflows",
    description:
      "Personal AI workflows for L10 prep, post-session deliverables, V/TO refresh, and cross-client tracking — the operational drag that eats half your week.",
  },
  {
    icon: BookOpen,
    title: "Systematize your craft",
    description:
      "Capture your best facilitation prep, IDS sequencing, and Rocks/Issues handling into reusable playbooks. Quality scales. You stay irreplaceable.",
  },
  {
    icon: Repeat,
    title: "Multi-line practice enablement",
    description:
      "Standards for any fractional support, junior implementer, or operating partner you've added — or plan to add. Consistency without overhead.",
  },
];

const proofDeliverables = [
  "Working AI agents in production — 1 to 4 deployed in your practice, not prototypes sitting in Notion.",
  "L10 prep time recovered — down from ~30 minutes to ~5 minutes per session.",
  "Same-day post-session deliverables — polished client summaries within an hour of the session ending. Not next week.",
  "Documented AI standards — so a fractional implementer or junior coach can run the playbook the same way you would.",
];

const trustHandling = [
  "Franchise-aligned — designed to stay inside your franchise agreement. Methodology, facilitation, and L10 agenda stay untouched.",
  "Aligned with EOS Worldwide's stance — EOS Worldwide CEO Mark O'Donnell has been clear: AI doesn't replace the implementer. We agree. AI is your leverage; human connection remains your moat.",
  "Your data stays yours — client Scorecards, Rocks, V/TOs, and Issues lists stay in your tools. Minimal footprint, built inside the systems you already use.",
];

const outcomes = [
  "L10 prep cut from ~30 minutes to ~5 minutes per client, every week",
  "Post-session deliverables turned around same-day, not next week",
  "A practice that runs without you in every detail — fractional support actually scales",
  "Capacity to take on 25-30 clients with the operational effort of 15",
];

const faqs = [
  {
    question: "Will this break my franchise agreement?",
    answer:
      "No. Edge doesn't touch facilitation, the L10 agenda, V/TO sessions, or any other element of the franchise methodology. We install AI agents in the operational layer — prep, synthesis, follow-up — which is yours to run as you see fit. We've designed the program specifically with franchise compliance in mind.",
  },
  {
    question: "Does this work with Ninety, EOS One, or Bloom Growth?",
    answer:
      "Yes. Edge doesn't replace your SaaS — it sits alongside it. Your existing tools stay. We install AI agents that work with the data and workflows you're already running through them.",
  },
  {
    question: "How fast can I see results?",
    answer:
      "The first working agent, typically an L10 Prep Agent, is installed during the first two weeks of the program. Most implementers see ~25 minutes of weekly time recovery per client within the first month.",
  },
  {
    question: "What about EOS Worldwide's stance on AI?",
    answer:
      "EOS Worldwide CEO Mark O'Donnell has publicly said AI won't replace the implementer. We agree completely. Edge is built on that exact principle — AI absorbs the operational drag so the implementer can be more present, more prepared, and more available for the work only they can do.",
  },
];

const greatFit = [
  "You're running 10+ active clients on EOS.",
  "You're at or near practice capacity, with little room to add hours.",
  "You want the methodology, your facilitation, and franchise compliance to stay yours.",
  "You're willing to standardize a few core workflows (L10 prep, post-session deliverables, Quarterly prep).",
  "You want the practice to be less dependent on your personal hours over time.",
];

const notFit = [
  "You want AI to facilitate sessions for you.",
  "You're unwilling to standardize how prep and post-session work get done.",
  "You see AI as a replacement for your coaching judgment.",
  "You want a custom-built product instead of installed workflows inside your practice.",
];

function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="space-y-3">
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05 }}
          className="border border-gray-200 rounded-xl overflow-hidden bg-white"
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className="w-full p-5 flex items-center justify-between text-left hover:bg-gray-50 transition-colors"
          >
            <span className="font-medium text-navy pr-4">{faq.question}</span>
            <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`} />
          </button>
          {openIndex === index && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              className="px-5 pb-5"
            >
              <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  );
}

export default function EOSImplementers() {
  return (
    <div className="overflow-hidden">
      {/* SECTION 1: HERO */}
      <section className="relative min-h-[60vh] flex items-center bg-navy overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gold/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-pulse" style={{ animationDelay: "1s" }} />
        </div>

        <div className="container relative z-10 pt-32 pb-16">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.24 }}
              className="inline-flex items-center gap-3 mb-6"
            >
              <ClipboardList className="w-8 h-8 text-gold" />
              <span className="label-text text-gold">Who We Help</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.1 }}
              className="text-off-white text-4xl md:text-5xl lg:text-7xl font-display leading-tight font-semibold"
            >
              EOS Implementers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.2 }}
              className="mt-8 text-lg md:text-xl text-off-white/80 leading-relaxed max-w-3xl font-body"
            >
              Implementers ready to scale the practice without scaling the calendar — and without compromising the methodology, the facilitation, or the franchise agreement.
            </motion.p>
          </div>
        </div>
      </section>

      {/* SECTION 2: SCENARIO + FIT CHECK */}
      <section className="bg-navy-light py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl font-display text-off-white mb-6 font-semibold">Your World</h2>
            <div className="p-8 rounded-r-xl bg-navy border-l-4 border-gold">
              <p className="text-off-white/80 text-lg leading-relaxed">
                You're running between 10 and 20 active clients. You know the Six Key Components cold. You've ridden the 90-Minute Meeting, the Focus Day, the Vision Building Day. You've built something real.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mt-5">
                Now you're hitting the ceiling — not because the methodology stopped working, but because every client adds the same prep, the same synthesis, the same Quarterly load to your week.
              </p>
              <p className="text-off-white/80 text-lg leading-relaxed mt-5">
                AI tools are everywhere, but they're either generic or they make you nervous about the franchise agreement. You need something built for how you actually work.
              </p>
            </div>
          </motion.div>

          <div className="mt-12 grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy border border-green-500/30"
            >
              <h3 className="text-lg font-display text-green-400 mb-4 flex items-center gap-2">
                <Check className="w-5 h-5" />
                Great fit if…
              </h3>
              <ul className="space-y-3">
                {greatFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white-muted">
                    <Check className="w-4 h-4 text-green-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy border border-red-500/30"
            >
              <h3 className="text-lg font-display text-red-400 mb-4 flex items-center gap-2">
                <X className="w-5 h-5" />
                Not a fit if…
              </h3>
              <ul className="space-y-3">
                {notFit.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white-muted">
                    <X className="w-4 h-4 text-red-400 mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CHALLENGES */}
      <section className="bg-off-white py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label text-gold">The Tension You Feel</span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display text-navy font-semibold">Challenges We Address</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {challenges.map((challenge, index) => (
              <motion.div
                key={challenge.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-xl bg-white border border-gray-200 hover:border-[#a8e4d7] hover:shadow-lg transition-all group"
              >
                <div className="w-12 h-12 rounded-lg bg-navy/5 flex items-center justify-center mb-4 group-hover:bg-navy/10 transition-colors">
                  <challenge.icon className="w-6 h-6 text-navy/50" />
                </div>
                <h3 className="text-lg font-display text-navy mb-2">{challenge.title}</h3>
                <p className="text-grey-body leading-relaxed">{challenge.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 4: HOW WE HELP */}
      <section className="bg-navy py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label">How We Help</span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display text-off-white font-semibold">Install AI inside the practice — without touching the methodology</h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16"
          >
            <div className="p-6 rounded-2xl bg-gold/10 border border-gold/30">
              <div className="flex flex-col md:flex-row items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-gold" />
                </div>
                <div className="flex-1">
                  <h3 className="text-gold font-display text-lg mb-2">Recommended for EOS Implementers</h3>
                  <p className="text-off-white/70 leading-relaxed mb-4">
                    Most implementers start with <a href="/edge" className="text-gold underline underline-offset-2 hover:text-gold/80">Edge</a> to install personal AI fluency and the first set of working agents. When ready to scale beyond yourself — multi-line practices, fractional team support, productized cohorts — <a href="/how-we-help#fractional-ai" className="text-gold underline underline-offset-2 hover:text-gold/80">Fractional AI Officer</a> provides strategic leadership across the operation.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <a href="/edge" className="inline-flex items-center gap-2 px-4 py-2 bg-gold text-navy rounded-full text-sm font-medium hover:bg-gold/90 transition-colors">
                      Edge for EOS Implementers
                      <ArrowRight className="w-4 h-4" />
                    </a>
                    <a href="/how-we-help#fractional-ai" className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 text-off-white rounded-full text-sm font-medium hover:bg-white/20 transition-colors">
                      Fractional AI Officer
                      <ArrowRight className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mb-16">
            {implementationPillars.map((pillar, index) => (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 md:p-8 rounded-xl bg-navy-light border border-white/10"
              >
                <pillar.icon className="w-8 h-8 text-gold/70 mb-4" />
                <h3 className="text-lg md:text-xl font-display text-off-white mb-2 font-semibold">{pillar.title}</h3>
                <p className="text-off-white/70 text-sm md:text-base leading-relaxed font-body">{pillar.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy-light border border-white/10"
            >
              <h3 className="text-lg font-display text-gold mb-4">What you can point to internally</h3>
              <ul className="space-y-3">
                {proofDeliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white-muted">
                    <FileText className="w-4 h-4 text-gold mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="p-6 rounded-xl bg-navy-light border border-white/10"
            >
              <h3 className="text-lg font-display text-gold mb-4">Trust & Data Handling</h3>
              <ul className="space-y-3">
                {trustHandling.map((item, index) => (
                  <li key={index} className="flex items-start gap-3 text-off-white-muted">
                    <Shield className="w-4 h-4 text-off-white-muted mt-1 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* SECTION 5: OUTCOMES */}
      <section className="bg-off-white py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label text-gold">What Changes</span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display text-navy font-semibold">Outcomes You Can Expect</h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {outcomes.map((outcome, index) => (
              <motion.div
                key={outcome}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-white border border-gray-200"
              >
                <div className="w-8 h-8 rounded-full bg-gold/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-gold font-bold">{index + 1}</span>
                </div>
                <p className="text-navy font-medium">{outcome}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 6: FAQ */}
      <section className="bg-white py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <span className="section-label text-gold">Questions</span>
            <h2 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-display text-navy font-semibold">Frequently Asked</h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <FAQAccordion />
          </div>
        </div>
      </section>

      {/* SECTION 7: CTA */}
      <section className="bg-off-white py-20 md:py-24">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-display text-navy font-semibold">Ready to install the leverage?</h2>
            <p className="mt-6 text-grey-body text-lg md:text-xl font-body leading-relaxed">
              Let's map where AI can expand your practice — without touching what makes you irreplaceable.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/maguire" className="btn-outline-navy inline-flex items-center justify-center gap-2">
                See Our Proof
                <ArrowRight className="w-5 h-5" />
              </a>
              <CometCTA href="/contact">
                Start the Conversation
              </CometCTA>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
