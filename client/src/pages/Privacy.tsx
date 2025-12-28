import { motion } from "framer-motion";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

/*
 * PRIVACY POLICY PAGE
 * Standard privacy policy for Ignition Forward
 */

export default function Privacy() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Privacy Policy', url: '/privacy' },
      ]),
    ],
  };

  return (
    <div className="bg-off-white min-h-screen">
      <SEO
        title="Privacy Policy"
        description="Privacy Policy for Ignition Forward. Learn how we collect, use, and protect your personal information."
        canonical="/privacy"
        structuredData={structuredData}
      />

      {/* Header */}
      <section className="bg-navy pt-32 pb-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36 }}
            className="max-w-3xl"
          >
            <h1 className="text-off-white">Privacy Policy</h1>
            <p className="mt-4 text-off-white/70">
              Last updated: December 2024
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.36, delay: 0.1 }}
            className="max-w-3xl prose prose-navy"
          >
            <h2>Introduction</h2>
            <p>
              Ignition Forward ("we," "our," or "us") respects your privacy and is committed to protecting your personal data. This privacy policy explains how we collect, use, disclose, and safeguard your information when you visit our website or engage with our services.
            </p>

            <h2>Information We Collect</h2>
            <h3>Information You Provide</h3>
            <p>We may collect information you voluntarily provide, including:</p>
            <ul>
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and job title</li>
              <li>Information submitted through contact forms or consultation requests</li>
              <li>Communications you send to us</li>
            </ul>

            <h3>Automatically Collected Information</h3>
            <p>When you visit our website, we may automatically collect:</p>
            <ul>
              <li>Device and browser information</li>
              <li>IP address and location data</li>
              <li>Pages visited and time spent on our site</li>
              <li>Referring website or source</li>
            </ul>

            <h2>How We Use Your Information</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Respond to your inquiries and provide requested services</li>
              <li>Send relevant communications about our services</li>
              <li>Improve our website and services</li>
              <li>Comply with legal obligations</li>
              <li>Protect against fraudulent or unauthorized activity</li>
            </ul>

            <h2>Information Sharing</h2>
            <p>
              We do not sell your personal information. We may share your information with:
            </p>
            <ul>
              <li>Service providers who assist in our operations (e.g., email services, analytics)</li>
              <li>Professional advisors (lawyers, accountants) when necessary</li>
              <li>Law enforcement when required by law</li>
              <li>Other parties with your consent</li>
            </ul>

            <h2>Data Security</h2>
            <p>
              We implement appropriate technical and organizational measures to protect your personal information. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
            </p>

            <h2>Your Rights</h2>
            <p>Depending on your location, you may have rights to:</p>
            <ul>
              <li>Access the personal information we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Object to or restrict certain processing</li>
              <li>Data portability</li>
              <li>Withdraw consent where applicable</li>
            </ul>

            <h2>Cookies</h2>
            <p>
              We use cookies and similar technologies to enhance your experience on our website. You can control cookie preferences through your browser settings. Essential cookies required for website functionality cannot be disabled.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the privacy practices of these external sites and encourage you to review their privacy policies.
            </p>

            <h2>Children's Privacy</h2>
            <p>
              Our services are not directed to individuals under 18 years of age. We do not knowingly collect personal information from children.
            </p>

            <h2>Changes to This Policy</h2>
            <p>
              We may update this privacy policy from time to time. We will notify you of any material changes by posting the new policy on this page with an updated revision date.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about this privacy policy or our data practices, please contact us at:
            </p>
            <p>
              <strong>Ignition Forward</strong><br />
              Email: privacy@ignitionforward.com
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
