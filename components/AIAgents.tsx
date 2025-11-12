'use client';

import { motion } from 'framer-motion';
import { Phone, FileCheck, Bell, Search, ArrowRight } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';


const agents = [
  {
    id: 'shop-caller',
    title: 'Shop Caller',
    icon: Phone,
    description: "Shop Caller simultaneously contacts 5+ certified repair facilities in your truck's area, compares availability and quotes in real-time, and books the fastest available appointment—reducing coordination time from hours to minutes.",
    comingSoon: false,
    iconGradient: 'from-orange-500 to-orange-600',
  },
  {
    id: 'warranty-scout',
    title: 'Warranty Scout',
    icon: FileCheck,
    description: "Warranty Scout automatically scans every repair order against OEM and aftermarket warranty databases, identifies eligible claims, generates documentation, and files warranty recovery—capturing the 60-75% of claims most fleets miss.",
    comingSoon: false,
    iconGradient: 'from-blue-500 to-blue-600',
  },
  {
    id: 'update-relay',
    title: 'Update Relay',
    icon: Bell,
    description: "Update Relay keeps drivers, dispatchers, and shops synchronized throughout the repair process with real-time text updates on diagnosis, quotes, repair progress, and completion—eliminating 'where's my truck?' calls.",
    comingSoon: false,
    iconGradient: 'from-purple-500 to-pink-500',
  },
  {
    id: 'parts-finder',
    title: 'Parts Finder',
    icon: Search,
    description: "Parts Finder will automatically source critical components from your preferred suppliers and verify availability before booking repairs, ensuring shops have parts in stock when your truck arrives.",
    comingSoon: true,
    iconGradient: 'from-blue-500 to-blue-600',
  },
];

export default function AIAgents() {
  return (
    <section
      id="ai-agents"
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
          <p className="text-[#4169E1] font-semibold text-sm sm:text-base mb-3 sm:mb-4 uppercase tracking-wider">
            Products
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy leading-[1.1]">
            Meet our AI agents
          </h2>
        </motion.div>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {agents.map((agent, index) => (
            <motion.div
              key={agent.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}
              className={`relative bg-white border border-gray-200 rounded-3xl p-8 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
                agent.comingSoon ? 'opacity-70' : ''
              }`}
            >
              {/* Coming Soon Badge */}
              {agent.comingSoon && (
                <div className="absolute top-6 right-6">
                  <span className="inline-block bg-gradient-to-r from-cyan-500 to-blue-500 text-white text-xs font-semibold px-3 py-1 rounded-full">
                    Coming soon
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className={`w-14 h-14 bg-gradient-to-br ${agent.iconGradient} rounded-xl flex items-center justify-center mb-6`}>
                <agent.icon className="w-7 h-7 text-white" strokeWidth={2} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-navy mb-4">
                {agent.title}
              </h3>

              {/* Description */}
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {agent.description}
              </p>

              {/* CTA Link */}
              {!agent.comingSoon && (
                <a
                  href="#"
                  className="inline-flex items-center gap-2 text-[#4169E1] font-medium text-base group transition-all duration-200"
                >
                  <span>Learn more</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" />
                </a>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
