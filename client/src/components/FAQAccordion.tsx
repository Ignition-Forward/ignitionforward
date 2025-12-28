import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

/*
 * FAQ ACCORDION - Unified Component
 *
 * Standard FAQ accordion for all pages.
 * Supports both light and dark variants.
 * Consistent styling, animation, and behavior.
 */

interface FAQ {
  question: string;
  answer: string;
}

interface FAQAccordionProps {
  faqs: FAQ[];
  variant?: "light" | "dark";
  className?: string;
}

export default function FAQAccordion({
  faqs,
  variant = "light",
  className = "",
}: FAQAccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const styles = {
    light: {
      container: "border border-gray-200 rounded-card bg-white",
      button: "hover:bg-gray-50",
      question: "text-navy",
      answer: "text-grey-body",
      chevron: "text-gold",
    },
    dark: {
      container: "border border-white/10 rounded-card bg-navy-light",
      button: "hover:bg-white/5",
      question: "text-off-white",
      answer: "text-off-white/70",
      chevron: "text-gold",
    },
  };

  const style = styles[variant];

  return (
    <div className={`space-y-3 ${className}`}>
      {faqs.map((faq, index) => (
        <motion.div
          key={faq.question}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.05, duration: 0.22, ease: [0.2, 0, 0, 1] }}
          className={`overflow-hidden ${style.container}`}
        >
          <button
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
            className={`w-full p-5 flex items-center justify-between text-left transition-colors duration-[140ms] ${style.button}`}
          >
            <span className={`font-medium ${style.question}`}>{faq.question}</span>
            <ChevronDown
              className={`w-5 h-5 transition-transform duration-[140ms] ${style.chevron} ${
                openIndex === index ? "rotate-180" : ""
              }`}
            />
          </button>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
              >
                <div className={`px-5 pb-5 leading-relaxed ${style.answer}`}>
                  {faq.answer}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
}
