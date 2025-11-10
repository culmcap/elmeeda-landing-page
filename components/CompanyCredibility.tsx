'use client';

import { motion } from 'framer-motion';
import { Shield, Award, Users, TrendingUp } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';

export default function CompanyCredibility() {

  const credentials = [
    {
      icon: Shield,
      title: 'Enterprise Security',
      description: 'SOC 2 Type II certified with bank-level encryption. Your fleet data is protected.',
    },
    {
      icon: Users,
      title: 'Trusted by 500+ Trucks',
      description: 'From owner-operators to fleets of 200+, managing millions in maintenance annually.',
    },
    {
      icon: TrendingUp,
      title: '99.9% Uptime SLA',
      description: 'Mission-critical reliability. Our system is always there when your trucks need service.',
    },
    {
      icon: Award,
      title: 'Industry Expertise',
      description: 'Built by fleet operators who understand the real challenges of truck maintenance coordination.',
    },
  ];

  return (
    <section className="py-32 bg-gradient-to-b from-gray-50 to-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
            Built for <span className="text-orange">Enterprise Fleets</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We handle maintenance coordination for some of the most demanding fleets in America. Here's what sets us apart.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {credentials.map((credential, index) => (
            <motion.div
              key={credential.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.3, delay: 0.05 * index, ease: "linear" }}
              className="bg-white border border-gray-200 rounded-xl p-8 hover:border-orange/30 hover:shadow-lg transition-all duration-200"
            >
              <div className="bg-orange/10 w-14 h-14 rounded-lg flex items-center justify-center mb-6">
                <credential.icon className="w-7 h-7 text-orange" />
              </div>
              <h3 className="text-2xl font-display font-bold text-navy mb-3">{credential.title}</h3>
              <p className="text-gray-600 leading-relaxed">{credential.description}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
