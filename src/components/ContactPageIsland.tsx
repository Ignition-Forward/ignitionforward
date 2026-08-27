import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ArrowRight, Check, HelpCircle, Users, User, Building2, Rocket, Zap, Target, Sparkles, MessageSquare, Lock, Clock } from "lucide-react";
import { toast, Toaster } from "sonner";
import CometCTA from "./CometCTAIsland";

const CALENDAR_URL = "https://cal.com/zachburkes/15min";

/*
 * CONTACT PAGE - Smart Form Design
 *
 * Philosophy: Maximum signal with minimum effort
 * - Step 1: Just email (single field, instant submit)
 * - Step 2: Quick context via clicks (no typing)
 * - Step 3: Optional details (expandable)
 *
 * Every field is a choice, not a text input where possible
 */

// Company size options - visual chips
const companySizeOptions = [
  { value: "solo", label: "Just me", icon: User },
  { value: "small", label: "2-10", icon: Users },
  { value: "growing", label: "11-50", icon: Building2 },
  { value: "established", label: "50+", icon: Rocket },
];

// What they're looking for - visual cards
const interestOptions = [
  {
    value: "edge",
    label: "Personal AI Training",
    description: "Get fluent in 9 hours",
    icon: Zap,
  },
  {
    value: "forward-deployed",
    label: "Custom AI System",
    description: "Build something specific",
    icon: Target,
  },
  {
    value: "fractional",
    label: "AI Leadership",
    description: "Ongoing strategic guidance",
    icon: Sparkles,
  },
  {
    value: "not-sure",
    label: "Not sure yet",
    description: "Help me figure it out",
    icon: MessageSquare,
  },
];

// How they heard about us - simple chips
const referralOptions = [
  { value: "search", label: "Search" },
  { value: "linkedin", label: "LinkedIn" },
  { value: "referral", label: "Referral" },
  { value: "podcast", label: "Podcast" },
  { value: "event", label: "Event" },
  { value: "other", label: "Other" },
];

// Timeline urgency
const timelineOptions = [
  { value: "asap", label: "ASAP" },
  { value: "this-month", label: "This month" },
  { value: "this-quarter", label: "This quarter" },
  { value: "exploring", label: "Just exploring" },
];

// AI expertise level - 1-5 scale
const expertiseOptions = [
  { value: "1", label: "1", description: "New to AI" },
  { value: "2", label: "2", description: "Dabbled" },
  { value: "3", label: "3", description: "Comfortable" },
  { value: "4", label: "4", description: "Advanced" },
  { value: "5", label: "5", description: "Expert" },
];

// Get the intake month based on current date
// Before 3rd week of month = current month, after = next month
function getIntakeMonth(): string {
  const now = new Date();
  const day = now.getDate();
  const month = now.getMonth();
  const year = now.getFullYear();

  // If we're past the 21st (3rd week), show next month
  const targetMonth = day > 21 ? month + 1 : month;
  const targetYear = targetMonth > 11 ? year + 1 : year;
  const normalizedMonth = targetMonth > 11 ? 0 : targetMonth;

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

  return monthNames[normalizedMonth];
}

// FAQ data for post-submission
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
    question: "How do you protect confidential information?",
    answer: "Your data never trains public models. We've worked with financial advisors, consultants, and professional services firms — confidentiality is foundational to how we operate."
  },
  {
    question: "What's the typical ROI timeline?",
    answer: "Edge clients typically see 10X return within 90 days. Forward Deployed projects show measurable impact within 60 days. We track outcomes, not just outputs."
  },
];

export default function Contact() {
  // Form state
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    email: "",
    firstName: "",
    companyName: "",
    companySize: "",
    interest: "",
    timeline: "",
    aiExpertise: "",
    referralSource: "",
    hasQuestion: false,
    question: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null);
  const [showOptional, setShowOptional] = useState(false);

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.email && formData.firstName) {
      setStep(2);
    }
  };

  const submitToApi = async () => {
    // Map raw select values (e.g. "forward-deployed") to the visible labels
    // (e.g. "Custom AI System") so the FormSpree email matches what the user saw.
    const labelOf = (
      options: { value: string; label: string }[],
      value: string,
    ) => options.find((o) => o.value === value)?.label ?? value;

    const response = await fetch('https://formspree.io/f/mkoeyzyb', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        _subject: `New contact form submission${formData.firstName ? ` from ${formData.firstName}` : ''}`,
        Name: formData.firstName || 'Not provided',
        email: formData.email,
        Company: formData.companyName || 'Not provided',
        'Company size': labelOf(companySizeOptions, formData.companySize) || 'Not provided',
        'What brings you here?': labelOf(interestOptions, formData.interest) || 'Not provided',
        Timeline: labelOf(timelineOptions, formData.timeline) || 'Not provided',
        'AI expertise (1-5)': labelOf(expertiseOptions, formData.aiExpertise) || 'Not provided',
        'How did you hear about us?': labelOf(referralOptions, formData.referralSource) || 'Not provided',
        Message: formData.question || '',
      }),
    });

    if (!response.ok) {
      let message = `Failed to submit (${response.status})`;
      try {
        const error = await response.clone().json();
        message = error?.error || message;
      } catch {
        // Ignore non-JSON error bodies
      }
      throw new Error(message);
    }

    return response.json();
  };

  const handleFinalSubmit = async () => {
    setIsSubmitting(true);

    try {
      await submitToApi();
      setIsSubmitted(true);
      toast.success("Got it! We'll be in touch within 48 hours.");
      window.location.assign(CALENDAR_URL);
    } catch (error) {
      console.error('Contact form error:', error);
      toast.error("Something went wrong. Please try again or email us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Chip selector component
  const ChipSelector = ({
    options,
    value,
    onChange,
    className = "",
  }: {
    options: { value: string; label: string }[];
    value: string;
    onChange: (value: string) => void;
    className?: string;
  }) => (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {options.map((option) => (
        <button
          key={option.value}
          type="button"
          onClick={() => onChange(value === option.value ? "" : option.value)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-[140ms] ${
            value === option.value
              ? "bg-gold text-navy"
              : "bg-white border border-slate/20 text-navy/70 hover:border-gold/50"
          }`}
        >
          {option.label}
        </button>
      ))}
    </div>
  );

  // Icon chip selector
  const IconChipSelector = ({
    options,
    value,
    onChange,
  }: {
    options: { value: string; label: string; icon: React.ComponentType<{ className?: string }> }[];
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div className="flex flex-wrap gap-3">
      {options.map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(value === option.value ? "" : option.value)}
            className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all duration-[140ms] ${
              isSelected
                ? "bg-gold text-navy shadow-md"
                : "bg-white border border-slate/20 text-navy/70 hover:border-gold/50 hover:bg-gold/5"
            }`}
          >
            <Icon className={`w-4 h-4 ${isSelected ? "text-navy" : "text-gold"}`} />
            {option.label}
          </button>
        );
      })}
    </div>
  );

  // Interest card selector - compact and elegant
  const InterestCards = ({
    value,
    onChange,
  }: {
    value: string;
    onChange: (value: string) => void;
  }) => (
    <div className="grid grid-cols-2 gap-2">
      {interestOptions.map((option) => {
        const Icon = option.icon;
        const isSelected = value === option.value;
        return (
          <button
            key={option.value}
            type="button"
            onClick={() => onChange(value === option.value ? "" : option.value)}
            className={`p-3 md:p-3.5 rounded-xl text-left transition-all duration-[140ms] ${
              isSelected
                ? "bg-navy text-off-white shadow-lg ring-2 ring-gold"
                : "bg-slate/5 border border-transparent hover:border-gold/30 hover:bg-gold/5"
            }`}
          >
            <Icon className={`w-4 h-4 mb-1.5 ${isSelected ? "text-gold" : "text-gold/70"}`} />
            <div className={`font-medium text-xs md:text-sm leading-tight ${isSelected ? "text-off-white" : "text-navy"}`}>
              {option.label}
            </div>
            <div className={`text-[10px] md:text-xs mt-0.5 leading-tight ${isSelected ? "text-off-white/60" : "text-grey-body"}`}>
              {option.description}
            </div>
          </button>
        );
      })}
    </div>
  );

  return (
    <div className="overflow-hidden pb-mobile-cta">
      <Toaster richColors position="top-center" />

      {/* Full-page layout - mobile stacked, desktop asymmetric */}
      <section className="min-h-screen relative overflow-hidden">
        {/* Background: Navy full on mobile, split on desktop */}
        <div className="absolute inset-0 bg-navy" />
        <div className="hidden lg:block absolute inset-0">
          <div className="absolute top-0 right-0 w-[55%] h-full bg-off-white" />
        </div>

        {/* Subtle accent lines - desktop only */}
        <div className="hidden lg:block absolute top-32 left-16 w-px h-24 bg-gold/20" />
        <div className="hidden lg:block absolute top-32 left-16 w-24 h-px bg-gold/20" />

        <div className="container relative z-10 pt-28 md:pt-32 pb-12 md:pb-16">
          {/* Mobile: Stacked layout with form focal */}
          {/* Desktop: Two-column asymmetric */}
          <div className="lg:grid lg:grid-cols-[0.9fr_1.1fr] lg:gap-16 xl:gap-24 lg:items-start">

            {/* Left: Headline + subtle confidence */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center lg:text-left lg:sticky lg:top-32 mb-10 lg:mb-0 relative"
            >
              <span className="text-gold text-xs tracking-[0.25em] uppercase font-medium">Let's Talk</span>

              <h1 className="mt-4 md:mt-6 font-display text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-off-white leading-[1.1]">
                Gain an Edge,<br />
                <span className="text-gold italic">Before Others Do.</span>
              </h1>

              <p className="mt-4 md:mt-6 text-off-white/60 text-sm md:text-base lg:text-lg leading-relaxed max-w-sm mx-auto lg:mx-0">
                One call. That's all it takes to close the gap between where you are and where AI can take you.
              </p>

              {/* Subtle proof points - horizontal on mobile, vertical on desktop */}
              <div className="mt-6 md:mt-8 lg:mt-10 flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2 lg:flex-col lg:space-y-3 lg:gap-0">
                <div className="flex items-center gap-2 text-off-white/50 text-xs md:text-sm">
                  <Check className="w-3.5 h-3.5 text-gold/60" />
                  <span>48-hour response</span>
                </div>
                <div className="flex items-center gap-2 text-off-white/50 text-xs md:text-sm">
                  <Check className="w-3.5 h-3.5 text-gold/60" />
                  <span>Same-week call</span>
                </div>
                <div className="flex items-center gap-2 text-off-white/50 text-xs md:text-sm">
                  <Check className="w-3.5 h-3.5 text-gold/60" />
                  <span>No obligation</span>
                </div>
              </div>

              {/* Urgency - hidden on mobile, shown on desktop */}
              <div className="hidden lg:flex mt-6 items-center gap-2 text-gold/70 text-sm">
                <span className="w-1.5 h-1.5 bg-gold rounded-full animate-pulse" />
                <span>Limited spots for {getIntakeMonth()}</span>
              </div>

              {/* Flywheel Ecosystem Animation - positioned below content */}
              <div className="hidden lg:block absolute -bottom-32 left-1/2 -translate-x-1/2 w-[400px] h-[300px] pointer-events-none">
                {/* Orbital rings expanding outward */}
                {[0, 1, 2].map((i) => (
                  <motion.div
                    key={`ring-${i}`}
                    className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border"
                    style={{
                      borderColor: i === 1 ? 'rgba(201, 169, 98, 0.15)' : 'rgba(248, 247, 244, 0.08)',
                      width: 80,
                      height: 80,
                    }}
                    animate={{
                      width: [80, 320],
                      height: [80, 320],
                      opacity: [0.4, 0],
                    }}
                    transition={{
                      duration: 12,
                      ease: 'linear',
                      repeat: Infinity,
                      delay: i * 4,
                    }}
                  />
                ))}

                {/* Gold accent arc on one ring */}
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
                  <motion.circle
                    cx="200"
                    cy="150"
                    r="60"
                    fill="none"
                    stroke="rgba(201, 169, 98, 0.2)"
                    strokeWidth="1.5"
                    strokeDasharray="60 320"
                    strokeLinecap="round"
                    animate={{
                      r: [60, 160],
                      opacity: [0.3, 0],
                    }}
                    transition={{
                      duration: 12,
                      ease: 'linear',
                      repeat: Infinity,
                      delay: 1,
                    }}
                  />
                </svg>

                {/* Static network nodes that rings pass through */}
                {[
                  { x: 50, y: 40 },
                  { x: 85, y: 65 },
                  { x: 20, y: 55 },
                  { x: 70, y: 30 },
                  { x: 35, y: 70 },
                ].map((pos, i) => (
                  <motion.div
                    key={`node-${i}`}
                    className="absolute w-1.5 h-1.5 rounded-full bg-off-white/20"
                    style={{
                      left: `${pos.x}%`,
                      top: `${pos.y}%`,
                    }}
                    animate={{
                      opacity: [0.15, 0.4, 0.15],
                      scale: [1, 1.3, 1],
                    }}
                    transition={{
                      duration: 4,
                      ease: 'easeInOut',
                      repeat: Infinity,
                      delay: i * 0.8,
                    }}
                  />
                ))}

                {/* Central subtle glow */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-full"
                  style={{
                    background: 'radial-gradient(circle, rgba(201, 169, 98, 0.15) 0%, transparent 70%)',
                  }}
                  animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 6,
                    ease: 'easeInOut',
                    repeat: Infinity,
                  }}
                />
              </div>
            </motion.div>

            {/* Right: Form card - focal point */}
            <div className="lg:pl-4 xl:pl-8">
          <AnimatePresence mode="wait">
            {isSubmitted ? (
              /* Success State - Clean and confident */
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                className="space-y-4"
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl text-center">
                  <div className="w-12 h-12 bg-gold/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check className="w-6 h-6 text-gold" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-display text-navy mb-2">
                    Looking forward to it{formData.firstName ? `, ${formData.firstName}` : ""}
                  </h3>
                  <p className="text-grey-body text-sm md:text-base mb-4">
                    Expect a response within 48 hours to find a time this week.
                  </p>
                  <CometCTA href="/" variant="link" className="text-sm">
                    Back to Home
                  </CometCTA>
                </div>

                {/* FAQ Section - Simplified */}
                <div className="bg-white rounded-2xl p-5 md:p-6 shadow-lg border border-slate/5">
                  <div className="flex items-center gap-2 mb-4">
                    <HelpCircle className="w-4 h-4 text-gold" />
                    <h3 className="text-sm font-medium text-navy">While you wait</h3>
                  </div>
                  <div className="space-y-1.5">
                    {faqs.map((faq, index) => (
                      <div key={index} className="border border-slate/8 rounded-lg overflow-hidden">
                        <button
                          onClick={() => setExpandedFaq(expandedFaq === index ? null : index)}
                          className="w-full px-4 py-2.5 flex items-center justify-between text-left hover:bg-slate/3 transition-colors"
                        >
                          <span className="font-medium text-navy text-xs md:text-sm">{faq.question}</span>
                          <ChevronDown
                            className={`w-3.5 h-3.5 text-slate/50 transition-transform flex-shrink-0 ml-2 ${expandedFaq === index ? 'rotate-180' : ''}`}
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
                              <div className="px-4 pb-2.5 text-grey-body text-xs md:text-sm leading-relaxed">
                                {faq.answer}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ) : step === 1 ? (
              /* Step 1: Email + First Name - Clean and focused */
              <motion.div
                key="step1"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate/10">
                    <span className="text-xs font-medium text-navy/60">Step 1 of 2</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-1 rounded-full bg-gold" />
                      <div className="w-8 h-1 rounded-full bg-slate/20" />
                    </div>
                  </div>
                  <form onSubmit={handleEmailSubmit} className="space-y-4">
                    <div>
                      <label htmlFor="firstName" className="block text-sm font-medium text-navy mb-2">
                        First name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        value={formData.firstName}
                        onChange={(e) => setFormData(prev => ({ ...prev, firstName: e.target.value }))}
                        required
                        autoFocus
                        className="w-full px-4 py-3.5 border border-slate/10 rounded-xl bg-warm-grey text-navy text-base focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold focus:bg-white transition-all"
                        placeholder="What should we call you?"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-navy mb-2">
                        Work email
                      </label>
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                        required
                        className="w-full px-4 py-3.5 border border-slate/10 rounded-xl bg-warm-grey text-navy text-base focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold focus:bg-white transition-all"
                        placeholder="you@company.com"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full btn-gold py-3.5 flex items-center justify-center gap-2 text-base font-semibold mt-1"
                    >
                      Next: Quick Context
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </form>
                </div>

                {/* Confidentiality note */}
                <div className="mt-4 flex items-center justify-center gap-2 text-off-white/40 lg:text-navy/40">
                  <Lock className="w-3 h-3" />
                  <span className="text-[11px]">Your information stays confidential. We work with advisors, fund managers, and professional services firms.</span>
                </div>
              </motion.div>
            ) : (
              /* Step 2: Quick Context */
              <motion.div
                key="step2"
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.22 }}
              >
                {/* Fixed info bar - shows submitted info is locked in */}
                <div className="mb-3 flex items-center gap-2.5 px-3 py-2 bg-white/80 backdrop-blur-sm rounded-lg border border-slate/10 shadow-sm">
                  <div className="w-5 h-5 rounded-full bg-gold/90 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-navy" />
                  </div>
                  <div className="flex-1 min-w-0 truncate">
                    <span className="text-xs text-navy font-medium">{formData.firstName}</span>
                    <span className="text-navy/30 mx-1.5">·</span>
                    <span className="text-xs text-navy/50">{formData.email}</span>
                  </div>
                  <button
                    onClick={() => setStep(1)}
                    className="text-gold/80 hover:text-gold text-[10px] font-medium flex-shrink-0"
                  >
                    edit
                  </button>
                </div>

                <div className="bg-white rounded-2xl p-6 md:p-8 shadow-xl space-y-5">
                  {/* Step indicator */}
                  <div className="flex items-center justify-between pb-4 border-b border-slate/10 -mt-1">
                    <span className="text-xs font-medium text-navy/60">Step 2 of 2</span>
                    <div className="flex items-center gap-1.5">
                      <div className="w-8 h-1 rounded-full bg-gold" />
                      <div className="w-8 h-1 rounded-full bg-gold" />
                    </div>
                  </div>

                  {/* What are you looking for? - Primary question */}
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2.5">
                      What brings you here?
                    </label>
                    <InterestCards
                      value={formData.interest}
                      onChange={(value) => setFormData(prev => ({ ...prev, interest: value }))}
                    />
                  </div>

                  {/* Timeline - Quick chips */}
                  <div>
                    <label className="block text-sm font-medium text-navy mb-2.5">
                      Timeline
                    </label>
                    <ChipSelector
                      options={timelineOptions}
                      value={formData.timeline}
                      onChange={(value) => setFormData(prev => ({ ...prev, timeline: value }))}
                    />
                  </div>

                  {/* Optional section toggle - Collapsed by default */}
                  <div className="pt-3 border-t border-slate/10">
                    <button
                      type="button"
                      onClick={() => setShowOptional(!showOptional)}
                      className="flex items-center gap-2 text-xs text-navy/40 hover:text-navy/70 transition-colors"
                    >
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform ${showOptional ? 'rotate-180' : ''}`} />
                      {showOptional ? "Less" : "Add more context (optional)"}
                    </button>

                    <AnimatePresence>
                      {showOptional && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.22 }}
                          className="space-y-4 pt-4 overflow-hidden"
                        >
                          {/* AI expertise scale */}
                          <div>
                            <label className="block text-sm font-medium text-navy mb-2">
                              AI experience
                            </label>
                            <div className="flex items-center gap-1.5">
                              {expertiseOptions.map((option) => (
                                <button
                                  key={option.value}
                                  type="button"
                                  onClick={() => setFormData(prev => ({ ...prev, aiExpertise: option.value }))}
                                  className={`flex-1 py-2.5 rounded-lg text-center transition-all duration-[140ms] ${
                                    formData.aiExpertise === option.value
                                      ? "bg-gold text-navy font-bold"
                                      : "bg-slate/5 text-navy/60 hover:bg-gold/10"
                                  }`}
                                >
                                  <span className="text-base font-display">{option.label}</span>
                                </button>
                              ))}
                            </div>
                            <div className="flex justify-between mt-1.5 text-[10px] text-grey-body/70 px-0.5">
                              <span>New</span>
                              <span>Expert</span>
                            </div>
                          </div>

                          {/* Team size */}
                          <div>
                            <label className="block text-sm font-medium text-navy mb-2">
                              Team size
                            </label>
                            <IconChipSelector
                              options={companySizeOptions}
                              value={formData.companySize}
                              onChange={(value) => setFormData(prev => ({ ...prev, companySize: value }))}
                            />
                          </div>

                          {/* How did you find us */}
                          <div>
                            <label className="block text-sm font-medium text-navy mb-2">
                              How did you find us?
                            </label>
                            <ChipSelector
                              options={referralOptions}
                              value={formData.referralSource}
                              onChange={(value) => setFormData(prev => ({ ...prev, referralSource: value }))}
                            />
                          </div>

                          {/* Open question */}
                          <div>
                            <label htmlFor="question" className="block text-sm font-medium text-navy mb-2">
                              Anything specific?
                            </label>
                            <textarea
                              id="question"
                              value={formData.question}
                              onChange={(e) => setFormData(prev => ({ ...prev, question: e.target.value }))}
                              rows={2}
                              className="w-full px-3 py-2.5 border border-slate/10 rounded-lg bg-warm-grey text-navy text-sm focus:outline-none focus:ring-2 focus:ring-gold/30 focus:border-gold focus:bg-white transition-all resize-none"
                              placeholder="Optional"
                            />
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>

                  {/* Submit button */}
                  <button
                    onClick={handleFinalSubmit}
                    disabled={isSubmitting}
                    className="w-full btn-gold py-3.5 text-base font-semibold flex items-center justify-center gap-2 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-navy/30 border-t-navy rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Get My Strategy Call
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  {/* 48-hour badge */}
                  <div className="flex items-center justify-center gap-2 pt-2">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-gold/10 rounded-full">
                      <Clock className="w-3.5 h-3.5 text-gold" />
                      <span className="text-xs font-medium text-navy">Response within 48 hours</span>
                    </div>
                  </div>
                </div>

                {/* Confidentiality note */}
                <div className="mt-4 flex items-center justify-center gap-2 text-off-white/40 lg:text-navy/40">
                  <Lock className="w-3 h-3" />
                  <span className="text-[11px]">Your information stays confidential. We work with advisors, fund managers, and professional services firms.</span>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
            </div>
          </div>
        </div>
      </section>

      {/* Partner Inquiry - Separate, elevated pathway */}
      <section className="bg-navy border-t border-white/10">
        <div className="container py-16 md:py-20">
          <div className="max-w-2xl mx-auto text-center">
            <span className="text-gold/60 text-xs tracking-[0.2em] uppercase font-medium">For Partners</span>
            <h2 className="mt-4 font-display text-2xl md:text-3xl text-off-white">
              Strategic Partnership Inquiries
            </h2>
            <p className="mt-4 text-off-white/50 text-sm md:text-base leading-relaxed max-w-lg mx-auto">
              If you represent a firm, fund, or platform with a meaningful collaboration opportunity,
              we welcome a direct conversation.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="mailto:partners@ignitionforward.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-gold/40 rounded-lg text-gold hover:bg-gold/10 transition-colors text-sm font-medium"
              >
                <span>partners@ignitionforward.com</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
            <p className="mt-6 text-off-white/30 text-xs">
              Please include context on your organization and the nature of the opportunity.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
