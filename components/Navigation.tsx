'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, []);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/98 backdrop-blur-md border-b border-gray-200 shadow-sm' : 'bg-white/5 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <Link
              href="/"
              className={`text-xl sm:text-2xl font-display font-bold transition-colors ${
                isScrolled ? 'text-navy hover:text-[#4169E1]' : 'text-white hover:text-white/80'
              }`}
            >
              Elmeeda
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="#how-it-works"
                className={`text-sm transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-navy' : 'text-white/90 hover:text-white'
                }`}
              >
                Platform
              </Link>
              <Link
                href="#integrations"
                className={`text-sm transition-colors ${
                  isScrolled ? 'text-gray-600 hover:text-navy' : 'text-white/90 hover:text-white'
                }`}
              >
                Integrations
              </Link>
            </div>

            {/* Desktop CTA Button */}
            <a
              href={process.env.NEXT_PUBLIC_WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden md:inline-block font-semibold px-6 py-3 rounded-full transition-all duration-200 ${
                isScrolled
                  ? 'bg-[#4169E1] hover:bg-[#3a5dc7] text-white border border-[#4169E1]'
                  : 'bg-white/10 hover:bg-white/20 text-white border border-white/30 backdrop-blur-sm'
              }`}
            >
              Join Waitlist
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-3 rounded-lg transition-colors ${
                isScrolled ? 'text-navy hover:bg-gray-100' : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle mobile menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/50 z-40 md:hidden"
            onClick={closeMobileMenu}
            aria-hidden="true"
          />

          {/* Mobile Menu Panel */}
          <div className="fixed top-16 sm:top-20 left-0 right-0 bottom-0 bg-white z-40 md:hidden overflow-y-auto">
            <div className="px-4 sm:px-6 py-8 space-y-6">
              {/* Mobile Navigation Links */}
              <div className="space-y-4">
                <Link
                  href="#how-it-works"
                  onClick={closeMobileMenu}
                  className="block text-lg font-medium text-gray-900 hover:text-[#4169E1] transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
                >
                  Platform
                </Link>
                <Link
                  href="#integrations"
                  onClick={closeMobileMenu}
                  className="block text-lg font-medium text-gray-900 hover:text-[#4169E1] transition-colors py-3 px-4 rounded-lg hover:bg-gray-50"
                >
                  Integrations
                </Link>
              </div>

              {/* Mobile CTA Button */}
              <a
                href={process.env.NEXT_PUBLIC_WAITLIST_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobileMenu}
                className="block w-full text-center bg-[#4169E1] hover:bg-[#3a5dc7] text-white font-semibold px-6 py-4 rounded-full transition-all duration-200 shadow-lg"
              >
                Join Waitlist
              </a>
            </div>
          </div>
        </>
      )}
    </>
  );
}
