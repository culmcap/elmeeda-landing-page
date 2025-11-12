'use client';

import { motion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { fadeInUp } from '@/lib/animations';
import IntegrationsOrbit from '@/components/ui/integrations-orbit';

export default function Integrations() {

  return (
    <section
      id="integrations"
      className="py-32 relative overflow-hidden"
      style={{
        background: `
          radial-gradient(ellipse 100% 70% at 50% 30%,
            rgba(224, 242, 254, 0.5),
            transparent 70%),
          linear-gradient(180deg,
            #DBEAFE 0%,
            #F0F9FF 50%,
            #FFFFFF 100%)
        `
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <motion.div {...fadeInUp} className="text-center mb-20">
          <div className="inline-flex items-center gap-2 bg-white border border-[#4169E1]/20 rounded-full px-4 py-2 mb-6 shadow-md">
            <Cpu className="w-4 h-4 text-[#4169E1]" />
            <span className="text-[#4169E1] font-semibold text-sm">Native Integrations</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-navy mb-6 leading-[1.1]">
            Works With Your <span className="text-[#4169E1]">Existing Tools</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Elmeeda plugs directly into your fleet management systems. No manual data entry, no switching between tools.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <IntegrationsOrbit />
        </motion.div>
      </div>
    </section>
  );
}
