import { useEffect } from 'react';
import { useLocation } from 'wouter';

/**
 * Custom page tracking hook
 * Logs visits to our backend (Supabase) for custom analytics
 */
export function usePageTracking() {
  const [location] = useLocation();

  useEffect(() => {
    const trackVisit = async () => {
      try {
        const apiUrl = import.meta.env.VITE_API_URL || 'http://localhost:4003';

        await fetch(`${apiUrl}/api/track`, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            page: location,
            referrer: document.referrer || null,
            userAgent: navigator.userAgent,
            screenWidth: window.screen.width,
            screenHeight: window.screen.height,
          }),
        });
      } catch (error) {
        // Silently fail - tracking should never break the site
        console.debug('Page tracking failed:', error);
      }
    };

    trackVisit();
  }, [location]);
}
