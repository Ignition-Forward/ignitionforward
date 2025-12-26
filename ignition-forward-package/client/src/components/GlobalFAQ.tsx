import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/*
 * GLOBAL FAQ COMPONENT - SEO/GEO Optimized
 * 
 * Designed to:
 * 1. Generate FAQ schema for rich snippets
 * 2. Provide LLM-friendly content for GEO
 * 3. Handle objections while targeting keywords
 */

export interface FAQItem {
  question: string;
  answer: string;
}

interface GlobalFAQProps {
  faqs: FAQItem[];
  title?: string;
  subtitle?: string;
  className?: string;
}

export function generateFAQSchema(faqs: FAQItem[]) {
  return {
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export default function GlobalFAQ({ faqs, title = "Frequently Asked", subtitle, className = "" }: GlobalFAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className={`py-20 ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="label-text text-gold-dark">Questions</span>
          <h2 className="mt-4 text-navy">{title}</h2>
          {subtitle && <p className="mt-4 text-grey-body max-w-2xl mx-auto">{subtitle}</p>}
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
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
                <ChevronDown 
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`} 
                />
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
      </div>
    </section>
  );
}

// Pre-built FAQ sets for different contexts
export const homepageFAQs: FAQItem[] = [
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
  {
    question: "Can you help if we don't have a technical team?",
    answer: "Yes — that's common among our clients. We can operate as your fractional AI capability, bringing the expertise while you bring the context. No CTO or AI lead required.",
  },
  {
    question: "What if AI doesn't work for our business?",
    answer: "We structure work as bounded pilots with clear success criteria. You keep all artifacts (policies, workflows, training) regardless of outcome. No 'big bang' commitments — we prove value before scaling.",
  },
];

export const edgeFAQs: FAQItem[] = [
  {
    question: "What is Edge and who is it for?",
    answer: "Edge is a 9-hour executive AI training program for leaders who want AI fluency without the fluff. It's designed for partners, principals, and founders who need to make informed AI decisions and lead their teams effectively.",
  },
  {
    question: "Why is Edge by application only?",
    answer: "We limit Edge cohorts to ensure quality and fit. We're looking for leaders who are ready to implement, not just learn. The application helps us understand your context so we can tailor the experience.",
  },
  {
    question: "What do I get from Edge?",
    answer: "You leave with: (1) AI fluency — understanding what's possible and what's hype, (2) Personal AI workflows you can use immediately, (3) A prioritized roadmap for your business, (4) Confidence to lead AI conversations with your team and clients.",
  },
  {
    question: "How much does Edge cost?",
    answer: "Edge starts at ~$15K for the standard program. Andrew-led premium sessions are available at higher investment levels for those who want direct access to our founder's expertise.",
  },
];

export const fractionalFAQs: FAQItem[] = [
  {
    question: "What does a Fractional AI Officer do?",
    answer: "A Fractional AI Officer provides strategic AI leadership without the full-time hire. We help you set AI strategy, prioritize use cases, oversee implementation, and build internal capability — typically 1-4 days per week depending on your needs.",
  },
  {
    question: "How is this different from hiring a full-time AI lead?",
    answer: "A full-time AI hire costs $400K+ annually, takes 3-6 months to ramp, and comes with fixed overhead. A Fractional AI Officer costs $96K-$360K/year, delivers immediate impact, and scales up or down with your needs.",
  },
  {
    question: "What's included in a Fractional AI Officer engagement?",
    answer: "Depending on tier: AI strategy and roadmap, use-case prioritization, vendor/tool evaluation, implementation oversight, team enablement, board/LP reporting support, and ongoing advisory. All tiers include knowledge transfer.",
  },
  {
    question: "How long do Fractional engagements typically last?",
    answer: "Most engagements run 6-12 months, though some clients maintain ongoing advisory relationships. The goal is to build internal capability so you eventually don't need us — or need us less.",
  },
];
