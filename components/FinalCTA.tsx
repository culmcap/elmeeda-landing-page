'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function FinalCTA() {

  return (
    <section className="py-32 bg-gradient-to-b from-navy to-navy-dark border-t border-white/10">
      <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h2
          {...fadeInUp}
          className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1]"
        >
          Ready to <span className="text-orange">Deploy Elmeeda?</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.05 }}
          className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto"
        >
          Schedule a demo to see how autonomous breakdown coordination can transform your fleet operations.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <a
            href="https://www.linkedin.com/in/jayallayorov/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange hover:bg-orange-dark text-white font-semibold text-lg px-12 py-5 rounded-lg transition-colors duration-200 shadow-lg"
          >
            Schedule Demo
          </a>
        </motion.div>

        {/* Enterprise Info */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.15 }}
          className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500"
        >
          <span>3-week implementation</span>
          <span className="hidden sm:block">•</span>
          <span>Dedicated account manager</span>
          <span className="hidden sm:block">•</span>
          <span>SOC 2 Type II compliant</span>
        </motion.div>
      </div>
    </section>
  );
}
