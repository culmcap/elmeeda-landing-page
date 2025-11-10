'use client';

import { motion } from 'framer-motion';

export default function AnimatedTrucks() {
  return (
    <div className="absolute inset-0 overflow-hidden opacity-20 pointer-events-none">
      <div className="relative w-full h-full flex items-center justify-center">
        {/* Shop Building in Center */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10">
          <svg width="200" height="150" viewBox="0 0 200 150" fill="none">
            {/* Building */}
            <rect x="20" y="30" width="160" height="120" fill="currentColor" opacity="0.3" />

            {/* Garage Door */}
            <rect x="40" y="70" width="120" height="80" fill="currentColor" opacity="0.5" />
            <line x1="100" y1="70" x2="100" y2="150" stroke="currentColor" strokeWidth="2" opacity="0.3" />
            <line x1="40" y1="110" x2="160" y2="110" stroke="currentColor" strokeWidth="2" opacity="0.3" />

            {/* Roof */}
            <polygon points="10,30 100,10 190,30" fill="currentColor" opacity="0.4" />

            {/* Sign */}
            <rect x="60" y="15" width="80" height="10" fill="#ff8844" opacity="0.8" />
          </svg>
        </div>

        {/* Truck 1 - Entering from left */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: ['calc(-100% - 200px)', 'calc(50% - 250px)', 'calc(50% - 100px)'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.45, 0.55],
            repeat: Infinity,
            repeatDelay: 4,
            ease: "easeInOut"
          }}
        >
          <TruckSVG color="#ff8844" />
        </motion.div>

        {/* Truck 2 - Exiting to right */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          initial={{ x: '50%', opacity: 0 }}
          animate={{
            x: ['calc(50% + 100px)', 'calc(50% + 250px)', 'calc(100% + 200px)'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.1, 0.55],
            repeat: Infinity,
            repeatDelay: 4,
            delay: 6,
            ease: "easeInOut"
          }}
        >
          <TruckSVG color="#ff8844" />
        </motion.div>

        {/* Truck 3 - Continuous flow */}
        <motion.div
          className="absolute top-1/2 -translate-y-1/2"
          initial={{ x: '-100%', opacity: 0 }}
          animate={{
            x: ['calc(-100% - 200px)', 'calc(50% - 250px)', 'calc(50% - 100px)'],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 8,
            times: [0, 0.45, 0.55],
            repeat: Infinity,
            repeatDelay: 4,
            delay: 6,
            ease: "easeInOut"
          }}
        >
          <TruckSVG color="#ffa366" />
        </motion.div>
      </div>
    </div>
  );
}

function TruckSVG({ color }: { color: string }) {
  return (
    <svg width="120" height="60" viewBox="0 0 120 60" fill="none">
      {/* Cab */}
      <rect x="10" y="20" width="35" height="25" fill={color} rx="2" />

      {/* Windshield */}
      <rect x="35" y="22" width="8" height="15" fill="white" opacity="0.3" />

      {/* Trailer */}
      <rect x="48" y="15" width="60" height="30" fill={color} rx="2" />

      {/* Trailer lines */}
      <line x1="55" y1="15" x2="55" y2="45" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="70" y1="15" x2="70" y2="45" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="85" y1="15" x2="85" y2="45" stroke="white" strokeWidth="1" opacity="0.2" />
      <line x1="100" y1="15" x2="100" y2="45" stroke="white" strokeWidth="1" opacity="0.2" />

      {/* Wheels */}
      <circle cx="25" cy="48" r="7" fill="#333" />
      <circle cx="25" cy="48" r="4" fill="#666" />

      <circle cx="58" cy="48" r="7" fill="#333" />
      <circle cx="58" cy="48" r="4" fill="#666" />

      <circle cx="95" cy="48" r="7" fill="#333" />
      <circle cx="95" cy="48" r="4" fill="#666" />
    </svg>
  );
}
