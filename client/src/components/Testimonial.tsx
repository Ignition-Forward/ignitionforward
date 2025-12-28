import { motion } from "framer-motion";
import { Quote } from "lucide-react";

/*
 * TESTIMONIAL - Unified Component
 *
 * Standard testimonial card for all pages.
 * Supports both dark and light variants.
 * Consistent quote mark, layout, and animation.
 */

interface TestimonialProps {
  quote: string;
  author: string;
  role: string;
  metric?: string;
  variant?: "dark" | "light";
  className?: string;
}

export default function Testimonial({
  quote,
  author,
  role,
  metric,
  variant = "dark",
  className = "",
}: TestimonialProps) {
  const initials = author.split(' ').map(n => n[0]).join('');

  const styles = {
    dark: {
      container: "bg-navy-light",
      quote: "text-gold/30",
      text: "text-off-white",
      authorName: "text-off-white font-medium",
      authorRole: "text-off-white/60 text-sm",
      avatar: "bg-gold/20",
      avatarText: "text-gold font-bold",
      metric: "bg-gold/20 text-gold",
    },
    light: {
      container: "bg-white border border-gray-200",
      quote: "text-gold/40",
      text: "text-navy",
      authorName: "text-navy font-medium",
      authorRole: "text-grey-body text-sm",
      avatar: "bg-gold/10",
      avatarText: "text-gold font-bold",
      metric: "bg-gold/10 text-gold",
    },
  };

  const style = styles[variant];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
      className={`${style.container} rounded-card p-6 md:p-8 ${className}`}
    >
      <Quote className={`w-10 h-10 ${style.quote} mb-4`} />

      <blockquote className={`text-lg md:text-xl lg:text-2xl font-display leading-relaxed ${style.text} mb-6`}>
        "{quote}"
      </blockquote>

      <div className="flex items-center gap-4 flex-wrap">
        <div className={`w-12 h-12 rounded-full ${style.avatar} flex items-center justify-center flex-shrink-0`}>
          <span className={style.avatarText}>{initials}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className={style.authorName}>{author}</div>
          <div className={style.authorRole}>{role}</div>
        </div>
        {metric && (
          <div className={`px-3 py-1 rounded-badge text-sm font-medium ${style.metric}`}>
            {metric}
          </div>
        )}
      </div>
    </motion.div>
  );
}

/*
 * TESTIMONIAL SECTION - Full-width testimonial with centered layout
 *
 * Use for dedicated testimonial sections between content.
 */

interface TestimonialSectionProps {
  quote: string;
  author: string;
  role: string;
  metric?: string;
  className?: string;
}

export function TestimonialSection({
  quote,
  author,
  role,
  metric,
  className = "",
}: TestimonialSectionProps) {
  const initials = author.split(' ').map(n => n[0]).join('');

  return (
    <section className={`py-section-sm bg-navy-light ${className}`}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.36, ease: [0.2, 0, 0, 1] }}
          className="max-w-3xl mx-auto text-center"
        >
          <Quote className="w-12 h-12 text-gold/30 mx-auto mb-6" />

          <blockquote className="text-xl md:text-2xl lg:text-3xl font-display text-off-white leading-relaxed">
            "{quote}"
          </blockquote>

          <div className="mt-8 flex items-center justify-center gap-4 flex-wrap">
            <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center">
              <span className="text-gold font-bold">{initials}</span>
            </div>
            <div className="text-left">
              <div className="text-off-white font-medium">{author}</div>
              <div className="text-off-white/60 text-sm">{role}</div>
            </div>
            {metric && (
              <div className="px-3 py-1 bg-gold/20 rounded-badge">
                <span className="text-gold text-sm font-medium">{metric}</span>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
