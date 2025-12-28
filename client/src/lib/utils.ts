import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Get the current intake month for availability messaging
 * Shows current month if before the 20th, otherwise next month
 */
export function getIntakeMonth(): string {
  const now = new Date();
  const day = now.getDate();
  const targetDate = day >= 20 ? new Date(now.getFullYear(), now.getMonth() + 1, 1) : now;
  return targetDate.toLocaleDateString('en-US', { month: 'long' });
}

/**
 * Get the current quarter for availability messaging
 * Shows current quarter if before mid-quarter, otherwise next quarter
 */
export function getIntakeQuarter(): string {
  const now = new Date();
  const month = now.getMonth();
  const day = now.getDate();

  // Determine current quarter (0-3)
  const currentQuarter = Math.floor(month / 3);

  // Mid-quarter is roughly day 15 of the second month of each quarter
  const midQuarterMonth = currentQuarter * 3 + 1;
  const isPastMidQuarter = month > midQuarterMonth || (month === midQuarterMonth && day >= 15);

  // If past mid-quarter, show next quarter
  const targetQuarter = isPastMidQuarter ? (currentQuarter + 1) % 4 : currentQuarter;
  const targetYear = isPastMidQuarter && currentQuarter === 3 ? now.getFullYear() + 1 : now.getFullYear();

  return `Q${targetQuarter + 1} ${targetYear}`;
}
