'use client';

import { motion } from 'framer-motion';
import { Search, AlertCircle, FileCheck, ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function VINChecker() {

  const benefits = [
    {
      icon: Search,
      title: 'Instant VIN Lookup',
      description: 'Check warranty status and coverage details in seconds',
    },
    {
      icon: AlertCircle,
      title: 'Active Recall Alerts',
      description: 'Stay informed about safety recalls affecting your fleet',
    },
    {
      icon: FileCheck,
      title: 'Coverage Verification',
      description: 'Know exactly what\'s covered before authorizing repairs',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-white via-gray-50 to-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 rounded-full px-4 py-2 mb-6">
            <Search className="w-4 h-4 text-blue-600" />
            <span className="text-blue-600 font-semibold text-sm">Additional Tool</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
            Plus: <span className="text-orange">Instant VIN Warranty & Recall Lookup</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Beyond breakdown coordination, access our comprehensive VIN database to check warranty status and recall information for any truck in your fleet.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.05 * index, ease: "linear" }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange/30 hover:shadow-md transition-all duration-200"
            >
              <div className="bg-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                <benefit.icon className="w-6 h-6 text-orange" />
              </div>
              <h3 className="text-xl font-display font-bold text-navy mb-2">{benefit.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* VIN Checker Demo Card */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.15 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-display font-bold text-navy mb-4 text-center">
              Try VIN Warranty Lookup
            </h3>
            <p className="text-gray-600 text-center mb-6">
              Enter any VIN to check warranty status and active recalls
            </p>

            <div className="flex gap-3">
              <input
                type="text"
                placeholder="Enter 17-digit VIN (e.g., 1HGBH41JXMN109186)"
                className="flex-1 px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-orange focus:outline-none text-navy font-mono text-sm"
                maxLength={17}
              />
              <button className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200 flex items-center gap-2 whitespace-nowrap">
                Check VIN
                <ArrowRight className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-6 pt-6 border-t border-gray-200">
              <div className="flex items-start gap-3 text-sm text-gray-600">
                <FileCheck className="w-5 h-5 text-orange flex-shrink-0 mt-0.5" />
                <p>
                  Access warranty coverage details, expiration dates, and active safety recalls for all Class 8 trucks and trailers.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-gray-500">
            VIN lookup included with all Elmeeda plans • Data sourced from OEM and NHTSA databases
          </p>
        </motion.div>
      </div>
    </section>
  );
}
