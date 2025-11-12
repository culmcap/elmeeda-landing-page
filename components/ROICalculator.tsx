'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { TrendingUp, ChevronDown, CheckCircle2, DollarSign, Clock } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

// ROI Calculation Constants
// Based on industry research and real fleet data
const WARRANTY_RECOVERY_PER_TRUCK_ANNUAL = 1280; // $/truck/year
const TIME_SAVINGS_HOURS_PER_TRUCK_ANNUAL = 1.0; // hours/truck/year
const COORDINATOR_HOURLY_RATE_LOW = 40; // $/hour fully loaded cost
const COORDINATOR_HOURLY_RATE_HIGH = 50; // $/hour fully loaded cost

export default function ROICalculator() {
  const [fleetSize, setFleetSize] = useState<number>(500);
  const [isMethodologyOpen, setIsMethodologyOpen] = useState(false);
  const [hasCalculated, setHasCalculated] = useState(false);

  /**
   * CALCULATION FORMULAS
   * Uses constants defined above for maintainability
   */
  const calculateSavings = (trucks: number) => {
    // Warranty recovery calculations
    const warrantyLow = trucks * WARRANTY_RECOVERY_PER_TRUCK_ANNUAL;
    const warrantyHigh = trucks * WARRANTY_RECOVERY_PER_TRUCK_ANNUAL;

    // Time savings calculations (coordinator time)
    const timeSavingsHours = Math.round(trucks * TIME_SAVINGS_HOURS_PER_TRUCK_ANNUAL);
    const timeSavingsLow = timeSavingsHours * COORDINATOR_HOURLY_RATE_LOW;
    const timeSavingsHigh = timeSavingsHours * COORDINATOR_HOURLY_RATE_HIGH;

    // Total range
    const totalLow = warrantyLow + timeSavingsLow;
    const totalHigh = warrantyHigh + timeSavingsHigh;

    return {
      totalLow,
      totalHigh,
      warrantyLow,
      warrantyHigh,
      timeSavingsHours,
      timeSavingsLow,
      timeSavingsHigh
    };
  };

  const savings = calculateSavings(fleetSize);

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const handleFleetSizeChange = (value: string) => {
    const numValue = parseInt(value) || 0;
    if (numValue >= 1 && numValue <= 10000) {
      setFleetSize(numValue);
      setHasCalculated(true);
    } else if (numValue > 10000) {
      setFleetSize(10000);
      setHasCalculated(true);
    } else {
      setFleetSize(numValue);
      setHasCalculated(false);
    }
  };

  const isValidFleetSize = fleetSize >= 1 && fleetSize <= 10000;

  return (
    <section
      id="calculator"
      className="py-16 md:py-24 relative overflow-hidden bg-white"
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        {/* SECTION 1: HEADLINE & SUBHEADLINE */}
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
            See What You're Leaving on the Table
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Most fleets miss <span className="font-semibold text-[#4169E1]">60-75% of warranty claims</span>. Calculate your fleet's recovery opportunity.
          </p>
        </motion.div>

        {/* SECTION 2 & 3: INPUT AND RESULTS CARD */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.1 }}
          className="bg-white rounded-none p-8 md:p-12 shadow-xl border border-gray-200 max-w-3xl mx-auto"
        >
          {/* INPUT SECTION */}
          <div className="mb-8 text-center">
            <label
              htmlFor="fleet-size"
              className="block text-sm font-semibold text-gray-900 mb-3"
            >
              Number of trucks in your fleet
            </label>
            <div className="relative max-w-md mx-auto">
              <input
                id="fleet-size"
                type="number"
                min="1"
                max="10000"
                value={fleetSize || ''}
                onChange={(e) => handleFleetSizeChange(e.target.value)}
                placeholder="e.g., 500"
                aria-label="Enter the number of trucks in your fleet"
                aria-describedby="fleet-size-helper"
                className="w-full bg-gray-50 border-2 border-gray-200 rounded-lg px-4 py-3 text-xl font-bold text-gray-900 text-center focus:border-[#4169E1] focus:outline-none focus:ring-2 focus:ring-[#4169E1]/20 transition-all"
              />
            </div>
            <p id="fleet-size-helper" className="mt-2 text-sm text-gray-500">
              Works for fleets of any size (1-10,000 trucks)
            </p>
            {!isValidFleetSize && fleetSize > 0 && (
              <p className="mt-2 text-sm text-red-600" role="alert">
                Please enter a fleet size between 1-10,000
              </p>
            )}
          </div>

          {/* RESULTS DISPLAY */}
          <AnimatePresence mode="wait">
            {hasCalculated && isValidFleetSize ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                aria-live="polite"
                aria-atomic="true"
              >
                {/* Divider */}
                <div className="border-t border-gray-200 my-8" />

                {/* Main Savings Display */}
                <div className="text-center mb-8">
                  <div className="flex items-center justify-center gap-2 text-gray-600 mb-3">
                    <DollarSign className="w-4 h-4 text-[#4169E1]" />
                    <span className="text-sm font-semibold">Your Fleet's Estimated Annual Savings</span>
                  </div>
                  <motion.div
                    key={`${savings.totalLow}-${savings.totalHigh}`}
                    initial={{ scale: 1.05, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-[#4169E1] mb-2"
                  >
                    {formatCurrency(savings.totalLow)} - {formatCurrency(savings.totalHigh)}
                  </motion.div>
                  <p className="text-sm text-gray-500">per year</p>
                </div>

                {/* Simple Breakdown List */}
                <div className="bg-gray-50 rounded-lg p-6 mb-8">
                  <div className="space-y-3 max-w-2xl mx-auto">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        <span className="font-semibold">{formatCurrency(savings.warrantyLow)}</span> in warranty recovery annually
                      </p>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-[#4169E1] flex-shrink-0 mt-0.5" />
                      <p className="text-gray-700">
                        <span className="font-semibold">{formatNumber(savings.timeSavingsHours)} hours</span> saved in coordination time
                      </p>
                    </div>
                  </div>
                </div>

                {/* SECTION 4: COLLAPSIBLE METHODOLOGY */}
                <div className="mb-6">
                  <button
                    onClick={() => setIsMethodologyOpen(!isMethodologyOpen)}
                    className="w-full flex items-center justify-between py-3 px-4 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors text-left"
                    aria-expanded={isMethodologyOpen}
                    aria-controls="methodology-content"
                  >
                    <span className="text-sm font-semibold text-gray-700">How we calculated this</span>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-600 transition-transform duration-300 ${isMethodologyOpen ? 'rotate-180' : ''}`}
                    />
                  </button>

                  <AnimatePresence>
                    {isMethodologyOpen && (
                      <motion.div
                        id="methodology-content"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-gray-50 rounded-b-lg p-6 text-sm text-gray-700 leading-relaxed space-y-4">
                          <p className="font-semibold text-gray-900">Our estimates are based on industry research and real fleet data:</p>

                          <div>
                            <p className="font-semibold text-gray-900 mb-2">💰 Warranty Recovery: $1,280 per truck annually</p>
                            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-600">
                              <li>Based on 10% recovery rate for newer trucks (1-3 years)</li>
                              <li>4-5% recovery rate for older trucks (3+ years)</li>
                              <li>Most fleets miss 60-75% of claims without automation</li>
                              <li className="text-xs text-gray-500">Sources: Fleet Maintenance Journal, ATRI 2024 report</li>
                            </ul>
                          </div>

                          <div>
                            <p className="font-semibold text-gray-900 mb-2">⏱️ Time Savings: {formatNumber(savings.timeSavingsHours)} coordinator hours annually</p>
                            <ul className="list-disc list-inside space-y-1 ml-2 text-gray-600">
                              <li>Average fleet manager salary: $75K-$102K</li>
                              <li>Valued at $40-50/hour fully loaded</li>
                              <li>Eliminates 2-4 hours/week of manual shop coordination</li>
                            </ul>
                          </div>

                          <div className="bg-blue-50 border-l-4 border-blue-400 p-4 rounded">
                            <p className="text-sm">
                              <strong>Case Study:</strong> A 600-truck waste hauler increased warranty recovery from $100K to $1.5M annually with automated tracking.
                            </p>
                          </div>

                          <p className="text-xs text-gray-500 italic">
                            *Actual savings vary by fleet age, maintenance spend, and current processes. Schedule a demo for a custom analysis.
                          </p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* CTA BUTTON */}
                <div className="text-center">
                  <a
                    href={process.env.NEXT_PUBLIC_WAITLIST_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Join waitlist to discuss your fleet's savings"
                    className="inline-block w-full md:w-auto bg-[#4169E1] hover:bg-[#3a5dc7] text-white font-semibold px-12 py-4 md:py-5 rounded-lg transition-all duration-200 shadow-lg hover:shadow-xl hover:scale-[1.02] text-base md:text-lg"
                  >
                    Join Waitlist
                  </a>
                </div>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12 text-gray-400"
              >
                <p className="text-lg">Enter fleet size to see your savings</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
