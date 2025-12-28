import { motion } from "framer-motion";

/*
 * SKELETON - Loading State Component
 *
 * Use for content loading states.
 * Subtle pulse animation, no distracting shimmer.
 * System Initializing motion - deterministic, not decorative.
 */

interface SkeletonProps {
  className?: string;
  variant?: "text" | "heading" | "card" | "avatar" | "button";
}

export default function Skeleton({
  className = "",
  variant = "text",
}: SkeletonProps) {
  const variantStyles = {
    text: "h-4 w-full rounded",
    heading: "h-8 w-3/4 rounded",
    card: "h-48 w-full rounded-card",
    avatar: "h-12 w-12 rounded-full",
    button: "h-11 w-32 rounded-input",
  };

  return (
    <motion.div
      className={`bg-navy/10 ${variantStyles[variant]} ${className}`}
      animate={{ opacity: [0.5, 0.8, 0.5] }}
      transition={{
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

/*
 * SKELETON TEXT - Multiple lines of text loading
 */
interface SkeletonTextProps {
  lines?: number;
  className?: string;
}

export function SkeletonText({ lines = 3, className = "" }: SkeletonTextProps) {
  return (
    <div className={`space-y-2 ${className}`}>
      {Array.from({ length: lines }).map((_, i) => (
        <Skeleton
          key={i}
          variant="text"
          className={i === lines - 1 ? "w-2/3" : "w-full"}
        />
      ))}
    </div>
  );
}

/*
 * SKELETON CARD - Card loading state
 */
interface SkeletonCardProps {
  className?: string;
  showImage?: boolean;
}

export function SkeletonCard({ className = "", showImage = true }: SkeletonCardProps) {
  return (
    <div className={`rounded-card bg-white border border-gray-200 p-6 ${className}`}>
      {showImage && (
        <Skeleton variant="card" className="mb-4 h-32" />
      )}
      <Skeleton variant="heading" className="mb-3" />
      <SkeletonText lines={2} />
    </div>
  );
}

/*
 * SKELETON PAGE - Full page loading state
 */
export function SkeletonPage() {
  return (
    <div className="min-h-screen bg-navy pt-24 pb-16">
      <div className="container">
        {/* Hero skeleton */}
        <div className="max-w-4xl mb-16">
          <Skeleton variant="text" className="w-24 h-3 mb-4 bg-gold/20" />
          <Skeleton variant="heading" className="h-12 mb-4 bg-white/10" />
          <Skeleton variant="heading" className="h-12 w-1/2 mb-6 bg-white/10" />
          <SkeletonText lines={2} className="max-w-2xl [&>*]:bg-white/10" />
        </div>

        {/* Cards skeleton */}
        <div className="grid md:grid-cols-3 gap-grid">
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: i * 0.1 }}
            >
              <SkeletonCard />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
