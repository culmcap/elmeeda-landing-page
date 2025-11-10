'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function ROICalculator() {
  const [fleetSize, setFleetSize] = useState<number>(100);
  const savingsPerTruck = 2000;
  const estimatedSavings = fleetSize * savingsPerTruck;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section id="pricing" className="py-32 bg-gradient-to-b from-navy-dark to-navy">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1]">
            Calculate Your <span className="text-orange">ROI</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Estimate annual warranty recovery savings based on your fleet size.
          </p>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="bg-navy-dark border border-white/10 rounded-2xl p-10 md:p-14"
        >
          <div className="space-y-8">
            {/* Input Section */}
            <div>
              <label htmlFor="fleet-size" className="block text-lg font-semibold text-white mb-4">
                Number of trucks in your fleet
              </label>
              <div className="relative">
                <input
                  id="fleet-size"
                  type="number"
                  min="1"
                  max="10000"
                  value={fleetSize}
                  onChange={(e) => setFleetSize(Math.max(1, parseInt(e.target.value) || 1))}
                  className="w-full bg-navy border-2 border-white/20 rounded-xl px-6 py-4 text-2xl font-bold text-white focus:border-orange focus:outline-none transition-colors"
                />
              </div>
              <input
                type="range"
                min="1"
                max="1000"
                value={fleetSize}
                onChange={(e) => setFleetSize(parseInt(e.target.value))}
                className="w-full mt-4 h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-orange"
              />
            </div>

            {/* Divider */}
            <div className="border-t border-white/10" />

            {/* Output Section */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-gray-300 mb-3">
                <TrendingUp className="w-5 h-5 text-orange" />
                <span className="text-lg font-semibold">Estimated Annual Warranty Savings</span>
              </div>
              <motion.div
                key={estimatedSavings}
                initial={{ scale: 1.1, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="text-6xl md:text-7xl font-display font-bold text-orange mb-4"
              >
                {formatCurrency(estimatedSavings)}
              </motion.div>
              <p className="text-gray-400 text-sm">
                Based on ${savingsPerTruck.toLocaleString()} average warranty recovery per truck annually
              </p>
            </div>

            {/* CTA Button */}
            <div className="text-center pt-4">
              <a
                href="https://www.linkedin.com/in/jayallayorov/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-orange hover:bg-orange-dark text-white font-semibold px-10 py-5 rounded-lg transition-colors duration-200 shadow-lg"
              >
                Schedule Demo
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
