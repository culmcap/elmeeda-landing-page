'use client';

import { motion } from 'framer-motion';
import { Cpu, Link2, Zap } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function Integrations() {

  const integrations = [
    {
      name: 'Samsara',
      category: 'ELD Platform',
      description: 'Real-time fault code detection and vehicle diagnostics',
      color: 'bg-blue-500',
      initials: 'SA',
    },
    {
      name: 'Geotab',
      category: 'Telematics',
      description: 'Fleet tracking and maintenance scheduling integration',
      color: 'bg-teal-500',
      initials: 'GT',
    },
    {
      name: 'Motive',
      category: 'Fleet Management',
      description: 'Automated workflow triggers from breakdown events',
      color: 'bg-purple-500',
      initials: 'MO',
    },
    {
      name: 'OEM Warranty Systems',
      category: 'Direct API',
      description: 'Automated warranty claim filing with manufacturers',
      color: 'bg-gray-500',
      initials: 'OEM',
    },
    {
      name: 'Shop Management Systems',
      category: 'Network',
      description: 'Direct booking with 5,000+ approved repair facilities',
      color: 'bg-gray-500',
      initials: 'SMS',
    },
    {
      name: 'VIN Lookup Database',
      category: 'Data API',
      description: 'Instant warranty status and recall information access',
      color: 'bg-gray-500',
      initials: 'VIN',
    },
  ];

  return (
    <section id="integrations" className="py-32 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-orange/10 border border-orange/20 rounded-full px-4 py-2 mb-6">
            <Cpu className="w-4 h-4 text-orange" />
            <span className="text-orange font-semibold text-sm">Native Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
            Works With Your <span className="text-orange">Existing Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Elmeeda plugs directly into your fleet management systems. No manual data entry, no switching between tools.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {integrations.map((integration, index) => (
            <motion.div
              key={integration.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.05 * index, ease: "linear" }}
              className="bg-white border border-gray-200 rounded-xl p-6 hover:border-orange/30 hover:shadow-md transition-all duration-200"
            >
              <div className="flex items-start gap-4">
                <div className={`${integration.color} w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0`}>
                  <span className="text-white font-bold text-xs">{integration.initials}</span>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-lg font-display font-bold text-navy mb-1">{integration.name}</h3>
                  <p className="text-sm text-orange font-medium mb-2">{integration.category}</p>
                  <p className="text-sm text-gray-600 leading-relaxed">{integration.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-6 py-3">
            <Zap className="w-5 h-5 text-orange" />
            <span className="text-gray-700 font-medium">API-first architecture • Enterprise-grade security • SOC 2 Type II certified</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
