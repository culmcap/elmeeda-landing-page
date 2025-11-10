'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, Phone, FileCheck } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function HowItWorks() {

  const steps = [
    {
      icon: AlertTriangle,
      title: 'Check Engine Light Comes On',
      description: 'Your truck throws a code at 2pm on I-40. Your driver pulls over and you get an alert from your ELD system.',
      label: '01',
    },
    {
      icon: Phone,
      title: 'We Book the Repair in 2 Minutes',
      description: "By 2:02pm, we've called 8 shops within 50 miles, found one with availability tomorrow at 8am for $850, and booked the appointment.",
      label: '02',
    },
    {
      icon: FileCheck,
      title: 'We Get Your Money Back',
      description: "Repair gets done. Two weeks later, we've filed the warranty claim for the turbo actuator ($420) and the check is on its way.",
      label: '03',
    },
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
            Here's How It <span className="text-orange">Actually Works</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A real example from last Tuesday with one of our customers running 150 trucks in the Midwest.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

          <div className="grid md:grid-cols-3 gap-8 relative">
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
                <div className="text-orange/40 text-sm font-mono font-bold mb-4">
                  {step.label}
                </div>

                {/* Icon Circle */}
                <div className="bg-gray-100 border border-gray-200 w-20 h-20 rounded-lg flex items-center justify-center mb-6 relative z-10">
                  <step.icon className="w-9 h-9 text-orange" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display font-bold text-navy mb-3">{step.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Integration Badge */}
        <motion.div
          {...fadeInUp}
          transition={{ delay: 0.2 }}
          className="mt-20 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-gray-100 border border-gray-200 rounded-lg px-5 py-2.5 text-sm">
            <span className="text-gray-600">Native integration with Samsara, Geotab, and Motive</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
