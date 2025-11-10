'use client';

import { motion } from 'framer-motion';

export function DowntimeCostChart() {
  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
      <h4 className="text-lg font-semibold text-navy mb-6">Time Spent Calling Shops</h4>

      <div className="space-y-4">
        {/* Manual Coordination */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">You Calling Around</span>
            <span className="text-sm font-semibold text-red-600">30 minutes</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '100%' }}
              transition={{ duration: 1, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-red-500 to-red-600"
            />
          </div>
        </div>

        {/* Automated Coordination */}
        <div>
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-600">Elmeeda Handling It</span>
            <span className="text-sm font-semibold text-green-600">2 minutes</span>
          </div>
          <div className="h-3 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: '6.67%' }}
              transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
              viewport={{ once: true }}
              className="h-full bg-gradient-to-r from-green-500 to-green-600"
            />
          </div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-gray-700">Annual Downtime Savings (100 trucks)</span>
          <span className="text-2xl font-display font-bold text-orange">$120K</span>
        </div>
      </div>
    </div>
  );
}

export function WarrantyRecoveryChart() {
  return (
    <div className="bg-white rounded-xl p-8 border border-gray-200 shadow-sm">
      <h4 className="text-lg font-semibold text-navy mb-6">Warranty Recovery Rate</h4>

      <div className="grid grid-cols-2 gap-6">
        {/* Manual Review */}
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center mb-4">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#f3f4f6"
                strokeWidth="12"
                fill="none"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="56"
                stroke="#ef4444"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 56}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 56 * 0.4 }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-display font-bold text-navy">60%</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">Manual Review</div>
          <div className="text-xs text-red-600 mt-1">40% missed claims</div>
        </div>

        {/* AI-Powered */}
        <div className="text-center">
          <div className="relative inline-flex items-center justify-center mb-4">
            <svg className="w-32 h-32 transform -rotate-90">
              <circle
                cx="64"
                cy="64"
                r="56"
                stroke="#f3f4f6"
                strokeWidth="12"
                fill="none"
              />
              <motion.circle
                cx="64"
                cy="64"
                r="56"
                stroke="#10b981"
                strokeWidth="12"
                fill="none"
                strokeDasharray={`${2 * Math.PI * 56}`}
                initial={{ strokeDashoffset: 2 * Math.PI * 56 }}
                whileInView={{ strokeDashoffset: 2 * Math.PI * 56 * 0.05 }}
                transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
                viewport={{ once: true }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-3xl font-display font-bold text-navy">95%</span>
            </div>
          </div>
          <div className="text-sm text-gray-600">AI-Powered</div>
          <div className="text-xs text-green-600 mt-1">35% more recovered</div>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-gray-200">
        <div className="text-center">
          <span className="text-sm text-gray-600">Additional money recovered annually (100 trucks):</span>
          <div className="text-2xl font-display font-bold text-orange mt-1">$80K</div>
        </div>
      </div>
    </div>
  );
}
