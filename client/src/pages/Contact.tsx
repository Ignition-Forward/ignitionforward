import { useState } from "react";
import { motion } from "framer-motion";
import { MessageSquare, Mail, Calendar, ChevronDown, ArrowRight, Check } from "lucide-react";
import { toast } from "sonner";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * DESIGN: Premium Contact Page - Matching Reference Design
 * Features:
 * - Two-column hero with headline left, CTA right
 * - Gold credentials bar
 * - "What happens next" process steps
 * - Enhanced form with segment dropdown
 * - Premium styling throughout
 */

const nextSteps = [
  {
    icon: MessageSquare,
    title: "Submit your information",
    description: "Tell us about yourself and what you're trying to solve.",
  },
  {
    icon: Mail,
    title: "We'll review and respond",
    description: "Within 24 hours, we'll reach out to schedule a conversation.",
  },
  {
    icon: Calendar,
    title: "Discovery conversation",
    description: "30-minute call to understand your situation and explore fit.",
  },
];

const segmentOptions = [
  { value: "", label: "Select an option" },
  { value: "professional-services", label: "Professional Services (Law, Consulting, Accounting)" },
  { value: "founder-led", label: "Founder-Led Business" },
  { value: "fund-manager", label: "Fund Manager / Investment Firm" },
  { value: "pe-portfolio", label: "PE Portfolio Company" },
  { value: "other", label: "Other" },
];

export default function Contact() {
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    segment: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      setIsSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <SEO
        title="Contact Us"
        description="Ready to move forward with AI? Contact Ignition Forward for a 30-minute discovery call. We'll respond within 24 hours with a tailored recommendation for your expert-led business."
        canonical="/contact"
        structuredData={structuredData}
      />
      
      {/* Hero Section - Two Column */}
      <section className="relative min-h-[45vh] flex items-center bg-navy pt-24 pb-16">
        {/* Subtle diagonal line pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 border border-white/20 rotate-45" />
          <div className="absolute bottom-10 right-40 w-32 h-32 border border-white/20 rotate-45" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Headline */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Let's Talk</span>
              
              <h1 className="mt-6 font-display text-5xl md:text-6xl lg:text-7xl text-off-white leading-[1.1]">
                Ready to move forward?
              </h1>
              
              <p className="mt-6 text-off-white/70 text-lg max-w-md leading-relaxed">
                Tell us about yourself and what you're trying to solve. We'll be in touch within 24 hours.
              </p>
            </motion.div>
            
            {/* Right Column - CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex lg:justify-end"
            >
              <CometCTA href="#contact-form" className="text-lg">
                Connect with us to move forward
              </CometCTA>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Credentials Bar */}
      <section className="bg-navy-dark py-10 border-t border-b border-white/5">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <p className="text-gold text-lg md:text-xl font-medium tracking-wide">
              Legal training. Successful exits. AI practitioner.
            </p>
            <p className="mt-3 text-off-white/60 text-sm max-w-2xl mx-auto">
              We understand confidentiality, value creation, and implementation — because we've lived all three.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-20 px-6 md:px-8 bg-off-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left Column - What Happens Next */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-display text-3xl md:text-4xl text-navy">What happens next</h2>
              
              <div className="mt-10 space-y-8">
                {nextSteps.map((step, index) => (
                  <motion.div 
                    key={step.title} 
                    className="flex gap-5 group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.1 * index }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-gold/20">
                      <step.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-navy text-lg">{step.title}</h4>
                      <p className="mt-1 text-slate text-sm leading-relaxed">{step.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              {/* Prefer Email Box */}
              <motion.div 
                className="mt-12 p-6 bg-navy-dark rounded-lg"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <h4 className="text-off-white font-medium">Prefer email?</h4>
                <p className="mt-2 text-off-white/70 text-sm">
                  Reach out directly at{" "}
                  <a href="mailto:hello@ignitionforward.com" className="text-gold hover:underline">
                    hello@ignitionforward.com
                  </a>
                </p>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {isSubmitted ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                  className="p-10 rounded-xl text-center relative overflow-hidden bg-white border border-gold/20"
                  style={{
                    boxShadow: '0 0 40px rgba(201, 169, 98, 0.1)',
                  }}
                >
                  {/* Success particles */}
                  <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    {[...Array(6)].map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-2 h-2 rounded-full bg-gold/40"
                        initial={{ 
                          x: '50%', 
                          y: '50%',
                          opacity: 0,
                          scale: 0 
                        }}
                        animate={{ 
                          x: `${20 + Math.random() * 60}%`,
                          y: `${20 + Math.random() * 60}%`,
                          opacity: [0, 0.6, 0],
                          scale: [0, 1, 0.5]
                        }}
                        transition={{ 
                          duration: 1.5,
                          delay: i * 0.1,
                          ease: 'easeOut'
                        }}
                      />
                    ))}
                  </div>

                  <motion.div 
                    className="w-16 h-16 rounded-full flex items-center justify-center mx-auto bg-gold/10"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
                  >
                    <motion.div
                      initial={{ scale: 0, rotate: -45 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ type: 'spring', stiffness: 200, delay: 0.4 }}
                    >
                      <Check className="w-8 h-8 text-gold" />
                    </motion.div>
                  </motion.div>
                  
                  <motion.h3 
                    className="mt-6 text-2xl font-display text-navy"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                  >
                    Message Received
                  </motion.h3>
                  <motion.p 
                    className="mt-4 text-slate"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6 }}
                  >
                    Thank you for reaching out. We'll be in touch within 24 hours to discuss how we can help.
                  </motion.p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-navy mb-2">
                        Name <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate/20 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-300"
                        placeholder="Your name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Email <span className="text-gold">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate/20 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-300"
                        placeholder="you@company.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                        Company <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="company"
                        name="company"
                        required
                        value={formData.company}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate/20 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-300"
                        placeholder="Your company"
                      />
                    </div>
                    <div>
                      <label htmlFor="role" className="block text-sm font-medium text-navy mb-2">
                        Role <span className="text-gold">*</span>
                      </label>
                      <input
                        type="text"
                        id="role"
                        name="role"
                        required
                        value={formData.role}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate/20 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-300"
                        placeholder="Your role"
                      />
                    </div>
                  </div>
                  
                  {/* Segment Dropdown */}
                  <div>
                    <label htmlFor="segment" className="block text-sm font-medium text-navy mb-2">
                      Which best describes you? <span className="text-gold">*</span>
                    </label>
                    <div className="relative">
                      <select
                        id="segment"
                        name="segment"
                        required
                        value={formData.segment}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-slate/20 bg-white text-navy appearance-none focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-300 cursor-pointer"
                      >
                        {segmentOptions.map((option) => (
                          <option key={option.value} value={option.value}>
                            {option.label}
                          </option>
                        ))}
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate pointer-events-none" />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                      What are you trying to solve?
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-slate/20 bg-white text-navy placeholder:text-slate/50 focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-300 resize-none"
                      placeholder="Tell us about your situation and what you're hoping to achieve..."
                    />
                  </div>
                  
                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gold text-navy font-semibold text-lg flex items-center justify-center gap-2 hover:bg-gold/90 transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed group"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Move Forward
                        <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                      </>
                    )}
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
