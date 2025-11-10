'use client';

import { motion } from 'framer-motion';
import { useEffect, useState, useRef } from 'react';

export default function MetricsBar() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const metrics = [
    { value: 2, suffix: ' min', label: 'Average Coordination Time (vs 30 min manual)' },
    { value: 200, prefix: '$', suffix: 'K', label: 'Saved Annually (per 100 trucks)' },
    { value: 95, suffix: '%', label: 'Warranty Claims Recovered' },
  ];

  return (
    <section ref={sectionRef} className="py-20 bg-gradient-to-b from-white to-gray-50 border-y border-gray-200">
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {metrics.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-5xl md:text-6xl font-display font-bold text-navy mb-3">
                {metric.prefix}
                <AnimatedCounter
                  end={metric.value}
                  duration={2}
                  isVisible={isVisible}
                />
                {metric.suffix}
              </div>
              <div className="text-gray-600 font-medium">{metric.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AnimatedCounter({
  end,
  duration,
  isVisible,
}: {
  end: number;
  duration: number;
  isVisible: boolean;
}) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let startTime: number;
    let animationFrame: number;

    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / (duration * 1000), 1);

      setCount(Math.floor(progress * end));

      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration, isVisible]);

  return <span>{end % 1 === 0 ? count : count.toFixed(1)}</span>;
}
