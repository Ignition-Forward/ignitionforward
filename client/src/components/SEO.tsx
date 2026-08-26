import { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogType?: 'website' | 'article' | 'product';
  ogImage?: string;
  twitterCard?: 'summary' | 'summary_large_image';
  structuredData?: object;
  noindex?: boolean;
}

const BASE_URL = 'https://www.ignitionforward.com';
const DEFAULT_IMAGE = '/images/og-default.jpg';
const SITE_NAME = 'Ignition Forward';
const TWITTER_HANDLE = '@ignitionforward';

export default function SEO({
  title,
  description,
  canonical,
  ogType = 'website',
  ogImage = DEFAULT_IMAGE,
  twitterCard = 'summary_large_image',
  structuredData,
  noindex = false,
}: SEOProps) {
  const fullTitle = title === 'Home' 
    ? `${SITE_NAME} | AI Enablement for Expert-Led Businesses`
    : `${title} | ${SITE_NAME}`;
  
  const canonicalUrl = canonical ? `${BASE_URL}${canonical}` : undefined;
  const ogImageUrl = ogImage.startsWith('http') ? ogImage : `${BASE_URL}${ogImage}`;

  useEffect(() => {
    // Update document title
    document.title = fullTitle;

    // Helper to update or create meta tag
    const setMetaTag = (name: string, content: string, isProperty = false) => {
      const attr = isProperty ? 'property' : 'name';
      let meta = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement;
      if (!meta) {
        meta = document.createElement('meta');
        meta.setAttribute(attr, name);
        document.head.appendChild(meta);
      }
      meta.content = content;
    };

    // Helper to update or create link tag
    const setLinkTag = (rel: string, href: string) => {
      let link = document.querySelector(`link[rel="${rel}"]`) as HTMLLinkElement;
      if (!link) {
        link = document.createElement('link');
        link.rel = rel;
        document.head.appendChild(link);
      }
      link.href = href;
    };

    // Basic meta tags
    setMetaTag('description', description);
    if (noindex) {
      setMetaTag('robots', 'noindex, nofollow');
    } else {
      setMetaTag('robots', 'index, follow');
    }

    // Open Graph tags
    setMetaTag('og:title', fullTitle, true);
    setMetaTag('og:description', description, true);
    setMetaTag('og:type', ogType, true);
    setMetaTag('og:image', ogImageUrl, true);
    setMetaTag('og:site_name', SITE_NAME, true);
    if (canonicalUrl) {
      setMetaTag('og:url', canonicalUrl, true);
    }

    // Twitter Card tags
    setMetaTag('twitter:card', twitterCard);
    setMetaTag('twitter:site', TWITTER_HANDLE);
    setMetaTag('twitter:title', fullTitle);
    setMetaTag('twitter:description', description);
    setMetaTag('twitter:image', ogImageUrl);

    // Canonical URL
    if (canonicalUrl) {
      setLinkTag('canonical', canonicalUrl);
    }

    // Structured Data (JSON-LD)
    const existingScript = document.querySelector('script[data-seo-ld]');
    if (existingScript) {
      existingScript.remove();
    }

    if (structuredData) {
      const script = document.createElement('script');
      script.type = 'application/ld+json';
      script.setAttribute('data-seo-ld', 'true');
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }

    // Cleanup function
    return () => {
      const ldScript = document.querySelector('script[data-seo-ld]');
      if (ldScript) {
        ldScript.remove();
      }
    };
  }, [fullTitle, description, canonicalUrl, ogType, ogImageUrl, twitterCard, structuredData, noindex]);

  return null;
}

// Pre-defined structured data generators
export const generateOrganizationSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'Ignition Forward',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  description: 'AI enablement partner for expert-led businesses. We build AI systems that amplify expertise.',
  foundingDate: '2024',
  sameAs: [
    'https://linkedin.com/company/ignitionforward',
    'https://twitter.com/ignitionforward',
  ],
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'sales',
    url: `${BASE_URL}/contact`,
  },
  areaServed: 'US',
  serviceType: ['AI Consulting', 'AI Implementation', 'Fractional AI Leadership'],
});

export const generateWebsiteSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: 'Ignition Forward',
  url: BASE_URL,
  description: 'AI enablement partner for expert-led businesses',
  publisher: {
    '@type': 'Organization',
    name: 'Ignition Forward',
  },
});

export const generateServiceSchema = (service: {
  name: string;
  description: string;
  url: string;
  price?: string;
  priceRange?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'AI Consulting',
  provider: {
    '@type': 'Organization',
    name: 'Ignition Forward',
    url: BASE_URL,
  },
  name: service.name,
  description: service.description,
  url: `${BASE_URL}${service.url}`,
  ...(service.price && { 
    offers: {
      '@type': 'Offer',
      price: service.price,
      priceCurrency: 'USD',
    }
  }),
  ...(service.priceRange && { priceRange: service.priceRange }),
  areaServed: 'US',
});

export const generateFAQSchema = (faqs: { question: string; answer: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.question,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.answer,
    },
  })),
});

export const generateBreadcrumbSchema = (items: { name: string; url: string }[]) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: `${BASE_URL}${item.url}`,
  })),
});

export const generateArticleSchema = (article: {
  headline: string;
  description: string;
  url: string;
  datePublished?: string;
  dateModified?: string;
  image?: string;
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: article.headline,
  description: article.description,
  url: `${BASE_URL}${article.url}`,
  datePublished: article.datePublished || new Date().toISOString(),
  dateModified: article.dateModified || new Date().toISOString(),
  image: article.image ? `${BASE_URL}${article.image}` : `${BASE_URL}${DEFAULT_IMAGE}`,
  author: {
    '@type': 'Organization',
    name: 'Ignition Forward',
  },
  publisher: {
    '@type': 'Organization',
    name: 'Ignition Forward',
    logo: {
      '@type': 'ImageObject',
      url: `${BASE_URL}/images/logo.png`,
    },
  },
});

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'ProfessionalService',
  name: 'Ignition Forward',
  description: 'AI enablement partner for expert-led businesses. We build AI systems that amplify expertise using our proven 80/20 model.',
  url: BASE_URL,
  logo: `${BASE_URL}/images/logo.png`,
  priceRange: '$$$',
  areaServed: {
    '@type': 'Country',
    name: 'United States',
  },
  serviceType: [
    'AI Strategy Consulting',
    'AI Implementation',
    'Fractional AI Officer',
    'AI Workflow Development',
  ],
});
