import { motion } from "framer-motion";
import SEO, { generateBreadcrumbSchema } from "@/components/SEO";

/*
 * TERMS OF SERVICE PAGE
 * Standard terms of service for Ignition Forward
 */

export default function Terms() {
  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      generateBreadcrumbSchema([
        { name: 'Home', url: '/' },
        { name: 'Terms of Service', url: '/terms' },
      ]),
    ],
  };

  return (
    <div className="bg-off-white min-h-screen">
      <SEO
        title="Terms of Service"
        description="Terms of Service for Ignition Forward. Read our terms and conditions for using our website and services."
        canonical="/terms"
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
            <h1 className="text-off-white">Terms of Service</h1>
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
            <h2>Agreement to Terms</h2>
            <p>
              By accessing or using the Ignition Forward website and services, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
            </p>

            <h2>Services</h2>
            <p>
              Ignition Forward provides AI enablement consulting, training, and implementation services for businesses. Our services include but are not limited to:
            </p>
            <ul>
              <li>Edge: Executive AI training programs</li>
              <li>Forward Deployed: Custom AI system implementation</li>
              <li>Fractional AI Officer: Strategic AI leadership services</li>
            </ul>
            <p>
              Specific terms for each service engagement will be outlined in separate service agreements.
            </p>

            <h2>Use of Website</h2>
            <p>You agree to use our website only for lawful purposes and in accordance with these Terms. You agree not to:</p>
            <ul>
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorized access to any part of the website</li>
              <li>Interfere with or disrupt the website's operation</li>
              <li>Transmit any malicious code or harmful content</li>
              <li>Collect or harvest user information without consent</li>
            </ul>

            <h2>Intellectual Property</h2>
            <p>
              All content on this website, including text, graphics, logos, images, and software, is the property of Ignition Forward or its licensors and is protected by intellectual property laws. You may not reproduce, distribute, modify, or create derivative works without our express written permission.
            </p>

            <h2>Client Engagements</h2>
            <p>
              All consulting and service engagements are governed by separate service agreements that will specify:
            </p>
            <ul>
              <li>Scope of work and deliverables</li>
              <li>Pricing and payment terms</li>
              <li>Timeline and milestones</li>
              <li>Intellectual property ownership</li>
              <li>Confidentiality obligations</li>
              <li>Termination conditions</li>
            </ul>

            <h2>Confidentiality</h2>
            <p>
              We take confidentiality seriously. Any confidential information shared during consultations or engagements will be protected according to the terms of our service agreements and applicable law.
            </p>

            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Ignition Forward shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our website or services. Our total liability shall not exceed the amounts paid by you for our services in the twelve months preceding the claim.
            </p>

            <h2>Disclaimer of Warranties</h2>
            <p>
              Our website and services are provided "as is" without warranties of any kind, either express or implied. We do not guarantee that our services will achieve specific results, as outcomes depend on many factors including client implementation and market conditions.
            </p>

            <h2>Indemnification</h2>
            <p>
              You agree to indemnify and hold harmless Ignition Forward, its officers, directors, employees, and agents from any claims, damages, losses, or expenses arising from your use of our website or services or your violation of these Terms.
            </p>

            <h2>Third-Party Links</h2>
            <p>
              Our website may contain links to third-party websites. We are not responsible for the content, accuracy, or practices of these external sites.
            </p>

            <h2>Modifications to Terms</h2>
            <p>
              We reserve the right to modify these Terms at any time. Changes will be effective upon posting to the website. Your continued use of our services after changes constitutes acceptance of the modified Terms.
            </p>

            <h2>Termination</h2>
            <p>
              We may terminate or suspend your access to our website at any time, without notice, for conduct that we believe violates these Terms or is harmful to other users, us, or third parties.
            </p>

            <h2>Governing Law</h2>
            <p>
              These Terms shall be governed by and construed in accordance with the laws of the State of Delaware, without regard to its conflict of law provisions.
            </p>

            <h2>Dispute Resolution</h2>
            <p>
              Any disputes arising from these Terms or your use of our services shall first be attempted to be resolved through good-faith negotiation. If negotiation fails, disputes shall be resolved through binding arbitration in accordance with the rules of the American Arbitration Association.
            </p>

            <h2>Severability</h2>
            <p>
              If any provision of these Terms is found to be unenforceable, the remaining provisions shall continue in full force and effect.
            </p>

            <h2>Contact Us</h2>
            <p>
              If you have questions about these Terms of Service, please contact us at:
            </p>
            <p>
              <strong>Ignition Forward</strong><br />
              Email: legal@ignitionforward.com
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
