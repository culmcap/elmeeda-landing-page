'use client';

import { motion } from 'framer-motion';
import { DowntimeCostChart, WarrantyRecoveryChart } from './DataVisualization';
import { fadeInUp } from '@/lib/animations';

export default function Problem() {

  return (
    <section className="py-32 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
            You're Losing <span className="text-orange">$200K a Year</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Every breakdown costs you money in two ways: time wasted calling shops, and warranty claims you never file. Here's what that adds up to for a 100-truck fleet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Downtime Cost Visualization */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.3, delay: 0.1, ease: "linear" }}
          >
            <DowntimeCostChart />
          </motion.div>

          {/* Warranty Recovery Visualization */}
          <motion.div
            {...fadeInUp}
            transition={{ duration: 0.3, delay: 0.15, ease: "linear" }}
          >
            <WarrantyRecoveryChart />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
