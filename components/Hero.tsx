'use client';

import { motion } from 'framer-motion';
import AnimatedTrucks from './AnimatedTrucks';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-gradient-to-br from-navy via-navy-dark to-navy">
      {/* Animated Trucks Background */}
      <AnimatedTrucks />

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8 py-32 text-center">
        {/* Main Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}
          className="text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-8 leading-[1.1]"
        >
          AI That Calls Shops, Books Repairs, {' '}
          <span className="text-orange">and Recovers Warranty.</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.15, ease: "linear" }}
          className="text-xl md:text-2xl text-gray-100 mb-14 max-w-3xl mx-auto leading-relaxed font-light"
        >
          Stop wasting time on finding the right shop. Elmeeda automates the entire process, from shop calling to warranty claims, saving you hundreds of thousands of dollars.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.2, ease: "linear" }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <a
            href="https://www.linkedin.com/in/jayallayorov/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange hover:bg-orange-dark text-white font-semibold px-10 py-5 rounded-lg transition-colors duration-200 shadow-lg"
          >
            Schedule Demo
          </a>
          <a
            href="#how-it-works"
            className="border-2 border-white/40 hover:border-white/60 text-white font-semibold px-10 py-5 rounded-lg transition-all duration-200 hover:bg-white/10 backdrop-blur-sm"
          >
            View Platform
          </a>
        </motion.div>

        {/* Enterprise Credibility */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.25, ease: "linear" }}
          className="flex items-center justify-center gap-6 text-gray-300 text-sm"
        >
          <span>Trusted by 500+ trucks</span>
          <span className="text-gray-400">•</span>
          <span>99.9% uptime SLA</span>
          <span className="text-gray-400">•</span>
          <span>Enterprise security</span>
        </motion.div>
      </div>
    </section>
  );
}
