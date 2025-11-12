'use client';

import { motion } from 'framer-motion';
import { fadeInUp } from '@/lib/animations';

export default function FinalCTA() {

  return (
    <section
      className="py-20 sm:py-26 md:py-32 relative overflow-hidden bg-white"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <motion.h2
          {...fadeInUp}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4 sm:mb-6 leading-[1.1]"
        >
          Ready to <span className="text-[#4169E1]">Deploy Elmeeda?</span>
        </motion.h2>

        {/* Subheadline */}
        <motion.p
          {...fadeInUp}
          transition={{ delay: 0.05 }}
          className="text-base sm:text-lg md:text-xl text-gray-700 mb-8 sm:mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed"
        >
          Schedule a demo to see how autonomous breakdown coordination can transform your fleet operations.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
        >
          <a
            href={process.env.NEXT_PUBLIC_WAITLIST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-[#4169E1] hover:bg-[#3a5dc7] text-white font-semibold text-base sm:text-lg px-8 sm:px-10 md:px-12 py-4 sm:py-5 rounded-full transition-all duration-200 shadow-xl hover:shadow-2xl hover:scale-105"
          >
            Join Waitlist
          </a>
        </motion.div>
      </div>
    </section>
  );
}
