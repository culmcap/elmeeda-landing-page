'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled ? 'bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-white/80 backdrop-blur-md'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="text-2xl font-display font-bold text-navy hover:text-orange transition-colors">
            Elmeeda
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="#how-it-works" className="text-sm text-gray-600 hover:text-navy transition-colors">
              Platform
            </Link>
            <Link href="#integrations" className="text-sm text-gray-600 hover:text-navy transition-colors">
              Integrations
            </Link>
          </div>

          {/* CTA Button */}
          <a
            href="https://www.linkedin.com/in/jayallayorov/"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-orange hover:bg-orange-dark text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-200"
          >
            Schedule Demo
          </a>
        </div>
      </div>
    </nav>
  );
}
