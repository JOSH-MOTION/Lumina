import { motion } from 'motion/react';

export default function PrivacyPolicy() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="space-y-4 border-b border-slate-100 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>
            <p className="text-slate-500 font-medium">Last updated: April 24, 2024</p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">Our Commitment to Privacy</h2>
            <p className="text-slate-600 leading-relaxed text-lg">
              At Lumina, we believe that privacy is a fundamental human right. This policy describes how we collect, use, and protect your personal information when you use our website and services.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">1. Information We Collect</h2>
            <p className="text-slate-600 leading-relaxed">
              When you visit our site or use our services, we may collect:
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
              <li>Contact information (such as your name and email address)</li>
              <li>Authentication data (handled securely via Apple ID / Firebase)</li>
              <li>Transaction history and purchase details</li>
              <li>Device and usage information through cookies and similar technologies</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">2. How We Use Your Information</h2>
            <p className="text-slate-600 leading-relaxed">
              We use your data to:
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
              <li>Provide and maintain our services</li>
              <li>Process your orders and transactions</li>
              <li>Communicate with you about products, services, and promotions</li>
              <li>Improve and personalize your shopping experience</li>
              <li>Ensure the security and integrity of our platform</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">3. Data Sharing and Security</h2>
            <p className="text-slate-600 leading-relaxed">
              We do not sell your personal information to third parties. We only share data with service providers who assist us in operating our business, such as payment processors and shipping companies. All data is protected using industry-standard encryption and security measures.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">4. Your Rights</h2>
            <p className="text-slate-600 leading-relaxed">
              You have the right to:
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
              <li>Access and receive a copy of your personal data</li>
              <li>Request the deletion of your personal information</li>
              <li>Opt-out of marketing communications</li>
              <li>Correct any inaccurate or incomplete data</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">5. Contact Us</h2>
            <p className="text-slate-600 leading-relaxed">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us at <span className="font-bold text-slate-900">privacy@lumina.com</span>.
            </p>
          </section>

          <footer className="pt-12 border-t border-slate-100 text-sm text-slate-400 italic">
            This policy may be updated from time to time. We encourage you to review it periodically for any changes.
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
