'use client';

import { motion } from 'framer-motion';
import { Phone, Cpu, FileText } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function Solution() {

  const capabilities = [
    {
      icon: Phone,
      title: 'We Call the Shops',
      description: 'When your truck breaks down, we call 5-10 shops near your location, compare their prices and availability, and book you the best appointment—all in under 2 minutes.',
    },
    {
      icon: Cpu,
      title: 'You Get Real-Time Updates',
      description: 'We text you as soon as the appointment is booked. You see everything in your dashboard: which shop, what time, how much it will cost.',
    },
    {
      icon: FileText,
      title: 'We File Your Warranty Claims',
      description: 'After the repair, we review every invoice to find parts still under warranty. Then we file the claims with the manufacturer and get your money back.',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-navy to-navy-dark">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-6 leading-[1.1]">
            Here's What <span className="text-orange">We Actually Do</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            No jargon. Just three things that save you time and money on every breakdown.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {capabilities.map((capability, index) => (
            <motion.div
              key={capability.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.05 * index, ease: "linear" }}
              className="bg-navy-dark border border-white/10 rounded-xl p-8 hover:border-white/20 transition-all duration-200"
            >
              <div className="bg-orange/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <capability.icon className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-xl font-display font-bold text-white mb-3">{capability.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{capability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
