import { motion } from 'motion/react';

export default function TermsOfService() {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-12"
        >
          <header className="space-y-4 border-b border-slate-100 pb-12">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900">Terms of Service</h1>
            <p className="text-slate-500 font-medium">Last updated: April 24, 2024</p>
          </header>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">1. Acceptance of Terms</h2>
            <p className="text-slate-600 leading-relaxed">
              By accessing and using Lumina, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">2. Use License</h2>
            <p className="text-slate-600 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on Lumina's website for personal, non-commercial transitory viewing only.
            </p>
            <ul className="list-disc list-inside space-y-3 text-slate-600 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to decompile or reverse engineer any software</li>
              <li>Remove any copyright or other proprietary notations</li>
            </ul>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">3. User Accounts</h2>
            <p className="text-slate-600 leading-relaxed">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. Failure to do so constitutes a breach of the Terms, which may result in immediate termination of your account on our Service.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">4. Disclaimer</h2>
            <p className="text-slate-600 leading-relaxed">
              The materials on Lumina's website are provided on an 'as is' basis. Lumina makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">5. Limitations</h2>
            <p className="text-slate-600 leading-relaxed">
              In no event shall Lumina or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Lumina's website.
            </p>
          </section>

          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-slate-900">6. Governing Law</h2>
            <p className="text-slate-600 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Lumina operates and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>
          </section>

          <footer className="pt-12 border-t border-slate-100 text-sm text-slate-400 italic">
            Lumina reserves the right to revise these terms of service for its website at any time without notice.
          </footer>
        </motion.div>
      </div>
    </div>
  );
}
