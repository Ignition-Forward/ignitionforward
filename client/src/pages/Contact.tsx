import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageSquare, Mail, Calendar, ChevronDown, ArrowRight, Check, HelpCircle, ChevronLeft } from "lucide-react";
import { toast } from "sonner";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";
import CometCTA from "@/components/CometCTA";

/*
 * DESIGN: Two-Step Contact Form
 * Step 1: Capture essentials (First Name, Email) - low friction
 * Step 2: Optional qualifying questions - helps us help you
 * Expert Panel Recommendation: +20-30% form completion rate
 */

const nextSteps = [
  {
    icon: MessageSquare,
    title: "Share what you're working on",
    description: "The more context you provide, the better we can prepare.",
  },
  {
    icon: Mail,
    title: "We'll review and respond",
    description: "Within 24 hours with initial thoughts and next steps.",
  },
  {
    icon: Calendar,
    title: "Discovery conversation",
    description: "30-minute call to understand your situation and explore fit.",
  },
];

const segmentOptions = [
  { value: "", label: "Select one..." },
  { value: "professional-services", label: "Professional Services (Law, Consulting, Accounting)" },
  { value: "founder-led", label: "Founder-Led Business" },
  { value: "fund-manager", label: "Fund Manager / Investment Firm" },
  { value: "pe-portfolio", label: "PE Portfolio Company" },
  { value: "individual-leader", label: "Individual Leader / Executive" },
  { value: "other", label: "Other" },
];

const timelineOptions = [
  { value: "", label: "Select one..." },
  { value: "asap", label: "As soon as possible" },
  { value: "1-month", label: "Within the next month" },
  { value: "1-3-months", label: "1-3 months" },
  { value: "3-6-months", label: "3-6 months" },
  { value: "exploring", label: "Just exploring" },
];

const teamSizeOptions = [
  { value: "", label: "Select one..." },
  { value: "solo", label: "Just me" },
  { value: "2-5", label: "2-5 people" },
  { value: "6-20", label: "6-20 people" },
  { value: "21-50", label: "21-50 people" },
  { value: "50+", label: "50+ people" },
];

const serviceInterestOptions = [
  { value: "", label: "Select one..." },
  { value: "edge", label: "Edge — Personal AI training (~$15K)" },
  { value: "forward-deployed", label: "Forward Deployed — Custom AI build ($50K-$150K)" },
  { value: "fractional", label: "Fractional AI Officer — Ongoing leadership ($15K+/mo)" },
  { value: "not-sure", label: "Not sure yet — help me decide" },
];

const aiExpertiseOptions = [
  { value: "", label: "Select one..." },
  { value: "beginner", label: "Beginner — Just getting started with AI" },
  { value: "dabbler", label: "Dabbler — Tried ChatGPT and a few tools" },
  { value: "practitioner", label: "Practitioner — Use AI regularly in my work" },
  { value: "advanced", label: "Advanced — Building or deploying AI solutions" },
];

const referralOptions = [
  { value: "", label: "Select one..." },
  { value: "search", label: "Search (Google, etc.)" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "referral", label: "Referral from someone" },
  { value: "podcast", label: "Podcast or interview" },
  { value: "event", label: "Event or conference" },
  { value: "other", label: "Other" },
];

// FAQ data for objection handling at decision point
const faqs = [
  {
    question: "How is this different from hiring an AI consultant?",
    answer: "Most consultants deliver recommendations. We build working systems and transfer ownership. You get both the solution and the capability to evolve it."
  },
  {
    question: "What if AI doesn't work for my specific business?",
    answer: "We only work with expert-led businesses where we've proven results. If we're not confident we can help, we'll tell you in the first conversation."
  },
  {
    question: "How do you protect confidential client information?",
    answer: "High-trust by default. NDA-first when required. Your data never trains public models. We've worked with law firms, fund managers, and M&A advisors — confidentiality is foundational."
  },
  {
    question: "What's the typical ROI timeline?",
    answer: "Edge clients typically see 10X return within 90 days. Forward Deployed projects show measurable impact within 60 days. We track outcomes, not just outputs."
  },
];

export default function Contact() {
  const structuredData = generateBreadcrumbSchema([
    { name: 'Home', url: '/' },
    { name: 'Contact', url: '/contact' },
  ]);

  // Two-step form state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    // Step 2 fields (optional)
    lastName: "",
    company: "",
    role: "",
    segment: "",
    timeline: "",
    teamSize: "",
    serviceInterest: "",
    aiExpertise: "",
    referralSource: "",
    referredBy: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleStep1Submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.firstName && formData.email) {
      setStep(2);
      // Scroll to form
      document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const submitToApi = async () => {
    const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4003';
    const response = await fetch(`${apiUrl}/api/contact`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: `${formData.firstName} ${formData.lastName}`.trim(),
        email: formData.email,
        company: formData.company || 'Not provided',
        role: formData.role || 'Not provided',
        segment: formData.segment || 'Not provided',
        message: formData.message,
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.error || 'Failed to submit');
    }

    return response.json();
  };

  const handleFinalSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await submitToApi();
      setIsSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSkipToSubmit = async () => {
    setIsSubmitting(true);
    try {
      await submitToApi();
      setIsSubmitted(true);
      toast.success("Message sent! We'll be in touch within 24 hours.");
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Custom select component
  const SelectField = ({ 
    id, 
    name, 
    label, 
    options, 
    value, 
    onChange, 
    hint 
  }: { 
    id: string; 
    name: string; 
    label: string; 
    options: { value: string; label: string }[]; 
    value: string; 
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    hint?: string;
  }) => (
    <div>
      <label htmlFor={id} className="block text-sm font-medium text-navy mb-2">
        {label}
      </label>
      {hint && (
        <p className="text-xs text-grey-body mb-2">{hint}</p>
      )}
      <div className="relative">
        <select
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-white text-navy appearance-none focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)] cursor-pointer"
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate pointer-events-none" />
      </div>
    </div>
  );

  return (
    <div className="overflow-hidden">
      <SEO
        title="Contact Us"
        description="Ready to move forward with AI? Contact Ignition Forward for a 30-minute discovery call. We'll respond within 24 hours."
        canonical="/contact"
        structuredData={structuredData}
      />
      
      {/* Hero Section */}
      <section className="relative min-h-[40vh] flex items-center bg-navy pt-24 pb-12">
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-20 right-20 w-64 h-64 border border-white/20 rotate-45" />
          <div className="absolute bottom-10 right-40 w-32 h-32 border border-white/20 rotate-45" />
        </div>
        
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36 }}
            >
              <span className="text-gold text-xs tracking-[0.3em] uppercase font-medium">Let's Talk</span>
              
              <h1 className="mt-6 font-display text-5xl md:text-6xl text-off-white leading-[1.1]">
                Ready to move forward?
              </h1>
              
              <p className="mt-6 text-off-white/70 text-lg max-w-md leading-relaxed">
                Start with just your name and email. We'll take it from there.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.36, delay: 0.2 }}
              className="flex lg:justify-end"
            >
              <CometCTA href="#contact-form" variant="link" className="text-lg">
                Get started below
              </CometCTA>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Contact Options */}
      <section className="bg-gold py-4">
        <div className="container">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
            <span className="text-navy font-medium text-sm">Prefer to reach out directly?</span>
            <div className="flex gap-4">
              <a 
                href="mailto:hello@ignitionforward.com" 
                className="flex items-center gap-2 px-4 py-2 bg-navy text-off-white rounded-lg hover:bg-navy-light transition-colors text-sm font-medium"
              >
                <Mail className="w-4 h-4" />
                Email Us
              </a>
              <a 
                href="sms:+1234567890" 
                className="flex items-center gap-2 px-4 py-2 bg-navy text-off-white rounded-lg hover:bg-navy-light transition-colors text-sm font-medium"
              >
                <MessageSquare className="w-4 h-4" />
                Text Us
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section id="contact-form" className="py-16 px-6 md:px-8 bg-off-white">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Left Column - What Happens Next */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-2"
            >
              <h2 className="text-2xl font-display text-navy mb-8">What happens next</h2>
              
              <div className="space-y-6">
                {nextSteps.map((step, index) => (
                  <div key={index} className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 bg-gold/10 rounded-full flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-gold" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-navy">{step.title}</h3>
                      <p className="text-sm text-grey-body mt-1">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Trust Note */}
              <div className="mt-10 p-4 bg-navy/5 rounded-lg border border-navy/10">
                <p className="text-sm text-navy/80">
                  <span className="font-semibold">High-trust by default.</span> NDA-first when required. Your information stays confidential.
                </p>
              </div>
            </motion.div>

            {/* Right Column - Two-Step Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="lg:col-span-3"
            >
              {/* Progress Indicator */}
              <div className="mb-8">
                <div className="flex items-center gap-4">
                  <div className={`flex items-center gap-2 ${step >= 1 ? 'text-gold' : 'text-slate/50'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 1 ? 'bg-gold text-navy' : 'bg-slate/20 text-slate'}`}>
                      {step > 1 ? <Check className="w-4 h-4" /> : '1'}
                    </div>
                    <span className="text-sm font-medium">Your Info</span>
                  </div>
                  <div className={`flex-1 h-0.5 ${step >= 2 ? 'bg-gold' : 'bg-slate/20'}`} />
                  <div className={`flex items-center gap-2 ${step >= 2 ? 'text-gold' : 'text-slate/50'}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${step >= 2 ? 'bg-gold text-navy' : 'bg-slate/20 text-slate'}`}>
                      2
                    </div>
                    <span className="text-sm font-medium">Help Us Help You</span>
                  </div>
                </div>
              </div>

              <AnimatePresence mode="wait">
                {isSubmitted ? (
                  /* Success State */
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-white rounded-2xl p-10 shadow-lg border border-slate/10 text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Check className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-2xl font-display text-navy mb-4">We've got your message</h3>
                    <p className="text-grey-body mb-6">
                      Expect to hear from us within 24 hours. We're looking forward to learning more about what you're working on.
                    </p>
                    <CometCTA href="/" variant="link">
                      Back to Home
                    </CometCTA>
                  </motion.div>
                ) : step === 1 ? (
                  /* Step 1: Essential Info */
                  <motion.div
                    key="step1"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate/10">
                      <h3 className="text-xl font-display text-navy mb-2">Let's start simple</h3>
                      <p className="text-grey-body text-sm mb-6">Just two fields to get started. We'll ask more on the next step (optional).</p>
                      
                      <form onSubmit={handleStep1Submit} className="space-y-5">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
                            First Name <span className="text-gold">*</span>
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            value={formData.firstName}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)]"
                            placeholder="Your first name"
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
                            value={formData.email}
                            onChange={handleChange}
                            required
                            className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)]"
                            placeholder="you@company.com"
                          />
                        </div>

                        <button
                          type="submit"
                          className="w-full btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2 group"
                        >
                          Continue
                          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                      </form>
                    </div>
                  </motion.div>
                ) : (
                  /* Step 2: Optional Qualifying Questions */
                  <motion.div
                    key="step2"
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -12 }}
                    transition={{ duration: 0.22, ease: [0.2, 0, 0, 1] }}
                  >
                    <div className="bg-white rounded-2xl p-8 shadow-lg border border-slate/10">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="text-xl font-display text-navy">Help us help you</h3>
                        <button
                          onClick={() => setStep(1)}
                          className="text-sm text-slate hover:text-navy flex items-center gap-1"
                        >
                          <ChevronLeft className="w-4 h-4" />
                          Back
                        </button>
                      </div>
                      <p className="text-grey-body text-sm mb-6">
                        All fields optional — but the more you share, the better we can prepare.
                      </p>
                      
                      <form onSubmit={handleFinalSubmit} className="space-y-5">
                        {/* Confirmed info */}
                        <div className="p-3 bg-gold/5 rounded-lg border border-gold/20 flex items-center gap-3">
                          <Check className="w-5 h-5 text-gold flex-shrink-0" />
                          <span className="text-sm text-navy">
                            <span className="font-medium">{formData.firstName}</span> • {formData.email}
                          </span>
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <div>
                            <label htmlFor="lastName" className="block text-sm font-medium text-navy mb-2">
                              Last Name
                            </label>
                            <input
                              type="text"
                              id="lastName"
                              name="lastName"
                              value={formData.lastName}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)]"
                            />
                          </div>
                          
                          <div>
                            <label htmlFor="company" className="block text-sm font-medium text-navy mb-2">
                              Company
                            </label>
                            <input
                              type="text"
                              id="company"
                              name="company"
                              value={formData.company}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)]"
                            />
                          </div>
                        </div>

                        <SelectField
                          id="segment"
                          name="segment"
                          label="Which best describes you?"
                          options={segmentOptions}
                          value={formData.segment}
                          onChange={handleChange}
                        />

                        <div className="grid md:grid-cols-2 gap-5">
                          <SelectField
                            id="serviceInterest"
                            name="serviceInterest"
                            label="Service interest"
                            options={serviceInterestOptions}
                            value={formData.serviceInterest}
                            onChange={handleChange}
                          />
                          
                          <SelectField
                            id="timeline"
                            name="timeline"
                            label="Timeline"
                            options={timelineOptions}
                            value={formData.timeline}
                            onChange={handleChange}
                          />
                        </div>

                        <div className="grid md:grid-cols-2 gap-5">
                          <SelectField
                            id="teamSize"
                            name="teamSize"
                            label="Team size"
                            options={teamSizeOptions}
                            value={formData.teamSize}
                            onChange={handleChange}
                          />
                          
                          <SelectField
                            id="aiExpertise"
                            name="aiExpertise"
                            label="AI expertise level"
                            options={aiExpertiseOptions}
                            value={formData.aiExpertise}
                            onChange={handleChange}
                          />
                        </div>

                        <SelectField
                          id="referralSource"
                          name="referralSource"
                          label="How did you hear about us?"
                          options={referralOptions}
                          value={formData.referralSource}
                          onChange={handleChange}
                        />

                        {formData.referralSource === "referral" && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                          >
                            <label htmlFor="referredBy" className="block text-sm font-medium text-navy mb-2">
                              Who referred you?
                            </label>
                            <input
                              type="text"
                              id="referredBy"
                              name="referredBy"
                              value={formData.referredBy}
                              onChange={handleChange}
                              className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)]"
                              placeholder="Their name"
                            />
                          </motion.div>
                        )}

                        <div>
                          <label htmlFor="message" className="block text-sm font-medium text-navy mb-2">
                            Anything else you'd like us to know?
                          </label>
                          <textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleChange}
                            rows={3}
                            className="w-full px-4 py-3 border border-slate/20 rounded-lg bg-white text-navy focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold transition-all duration-[140ms] ease-[cubic-bezier(0.2,0,0,1)] resize-none"
                            placeholder="What you're working on, challenges you're facing, questions you have..."
                          />
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 pt-2">
                          <button
                            type="submit"
                            disabled={isSubmitting}
                            className="flex-1 btn-primary py-4 text-lg font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                          >
                            {isSubmitting ? (
                              <>
                                <div className="w-5 h-5 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                                Sending...
                              </>
                            ) : (
                              <>
                                Move Forward
                                <ArrowRight className="w-5 h-5" />
                              </>
                            )}
                          </button>
                          
                          <button
                            type="button"
                            onClick={handleSkipToSubmit}
                            disabled={isSubmitting}
                            className="px-6 py-4 text-slate hover:text-navy transition-colors text-sm"
                          >
                            Skip & submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section - Objection Handling at Decision Point */}
      <section className="py-16 px-6 md:px-8 bg-white">
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-10"
          >
            <HelpCircle className="w-8 h-8 text-gold mx-auto mb-4" />
            <h2 className="text-2xl font-display text-navy">Before you reach out</h2>
            <p className="text-grey-body mt-2">Common questions from leaders like you</p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border border-slate/10 rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-slate/5 transition-colors"
                >
                  <span className="font-medium text-navy">{faq.question}</span>
                  <ChevronDown 
                    className={`w-5 h-5 text-slate transition-transform ${expandedFaq === index ? 'rotate-180' : ''}`} 
                  />
                </button>
                <AnimatePresence>
                  {expandedFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="px-6 pb-4 text-grey-body">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="py-12 px-6 md:px-8 bg-navy">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-off-white/70 mb-4">
            Prefer a different way to connect?
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a 
              href="mailto:hello@ignitionforward.com"
              className="text-gold hover:text-gold-light transition-colors"
            >
              hello@ignitionforward.com
            </a>
            <span className="text-off-white/30">•</span>
            <a 
              href="https://linkedin.com/company/ignitionforward"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-gold-light transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
