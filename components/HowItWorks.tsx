'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Phone, FileCheck } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function HowItWorks() {

  const steps = [
    {
      icon: AlertTriangle,
      title: 'Check Engine Light',
      description: 'Your truck throws a code. You get an alert from your ELD system.',
      label: '01',
      color: '#FF8844',
    },
    {
      icon: Phone,
      title: 'We Book in 2 Minutes',
      description: "We call shops nearby, compare prices, and book the best appointment.",
      label: '02',
      color: '#4169E1',
    },
    {
      icon: FileCheck,
      title: 'We Recover Warranty',
      description: "After repair, we file warranty claims and get your money back.",
      label: '03',
      color: '#10B981',
    },
  ];

  return (
    <section
      id="how-it-works"
      className="py-16 sm:py-24 md:py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 90% 70% at 50% 50%,
            rgba(240, 249, 255, 0.8),
            transparent 70%),
          linear-gradient(180deg,
            #FFFFFF 0%,
            #F0F9FF 50%,
            #FFFFFF 100%)
        `
      }}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-12 sm:mb-16 md:mb-20">
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-4 sm:mb-6 leading-[1.1]">
            Here's How It <span className="text-[#4169E1]">Actually Works</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
            A real example from one of our customers running 150 trucks in the Midwest.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-[16.66%] right-[16.66%] h-px bg-gradient-to-r from-[#FF8844] via-[#4169E1] to-[#10B981] opacity-30" />

          <div className="grid md:grid-cols-3 gap-8 sm:gap-10 md:gap-8 relative">
            {steps.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.3, delay: 0.05 * index, ease: "linear" }}
                className="relative flex flex-col items-center text-center"
              >
                {/* Step Number Badge */}
                <div className="text-gray-400 text-xs sm:text-sm font-mono font-bold mb-3 sm:mb-4">
                  {step.label}
                </div>

                {/* Icon Circle */}
                <div
                  className="bg-white border-2 w-16 h-16 sm:w-20 sm:h-20 rounded-none flex items-center justify-center mb-4 sm:mb-6 relative z-10 shadow-lg"
                  style={{ borderColor: step.color + '30' }}
                >
                  <step.icon className="w-7 h-7 sm:w-9 sm:h-9" style={{ color: step.color }} />
                </div>

                {/* Content */}
                <h3 className="text-lg sm:text-xl font-display font-bold text-navy mb-2 sm:mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Badge */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-12 sm:mt-16 md:mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white border border-[#4169E1]/20 rounded-full px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm shadow-md">
            <span className="text-gray-700 font-medium">Native integration with Samsara, Geotab, and Motive</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
