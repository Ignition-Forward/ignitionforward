import { ReactNode } from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  dark?: boolean;
  id?: string;
}

export default function SectionWrapper({ 
  children, 
  className = "", 
  dark = false,
  id 
}: SectionWrapperProps) {
  const bgClass = dark ? "bg-navy text-off-white" : "bg-off-white text-navy";
  
  return (
    <section id={id} className={`section-padding ${bgClass} ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="container"
      >
        {children}
      </motion.div>
    </section>
  );
}

interface SectionLabelProps {
  children: ReactNode;
  dark?: boolean;
}

export function SectionLabel({ children, dark = false }: SectionLabelProps) {
  return (
    <span className={`label-text ${dark ? 'text-gold' : 'text-gold'}`}>
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
}

export function SectionHeading({ children, className = "" }: SectionHeadingProps) {
  return (
    <h2 className={`mt-4 ${className}`}>
      {children}
    </h2>
  );
}

interface SectionSubheadProps {
  children: ReactNode;
  dark?: boolean;
  className?: string;
}

export function SectionSubhead({ children, dark = false, className = "" }: SectionSubheadProps) {
  return (
    <p className={`mt-4 text-lg md:text-xl ${dark ? 'text-off-white/80' : 'text-grey-body'} ${className}`}>
      {children}
    </p>
  );
}
