'use client'

import { useEffect, useState } from "react"
import { ArrowRight, LayoutDashboard } from 'lucide-react'
import Link from "next/link"
import { AnimatedLines } from '@/components/ui/animated-lines'

export function ElmeedaHero() {
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setMobileOpen(false)
    }
    window.addEventListener("keydown", onKey)
    return () => window.removeEventListener("keydown", onKey)
  }, [])

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
  }, [mobileOpen])

  return (
    <div className="min-h-screen text-white relative overflow-hidden">
      {/* Enhanced Blue Cloud Gradient Background */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background: `
            radial-gradient(ellipse 120% 80% at 50% -30%,
              rgba(100, 149, 237, 0.5),
              transparent 70%),
            radial-gradient(ellipse 80% 80% at 85% 40%,
              rgba(135, 206, 250, 0.45),
              transparent 70%),
            radial-gradient(ellipse 90% 90% at 15% 50%,
              rgba(176, 196, 222, 0.4),
              transparent 70%),
            radial-gradient(ellipse 100% 70% at 60% 80%,
              rgba(135, 206, 250, 0.35),
              transparent 70%),
            radial-gradient(ellipse 80% 60% at 25% 90%,
              rgba(147, 197, 253, 0.3),
              transparent 70%),
            linear-gradient(180deg,
              #4169E1 0%,
              #6495ED 35%,
              #87CEEB 65%,
              #B0D9F1 90%,
              #E8F4FF 100%)
          `
        }}
      />

      {/* Animated Background Lines */}
      <div className="absolute top-0 left-0 right-0 h-full z-[1] pointer-events-none overflow-hidden">
        <AnimatedLines />
      </div>

      {/* Enhanced Cloud Overlay Effects */}
      <div className="absolute inset-0 pointer-events-none z-[1]">
        <div
          className="absolute inset-0 opacity-70"
          style={{
            background: `
              radial-gradient(circle 600px at 25% 15%,
                rgba(255, 255, 255, 0.25),
                transparent 60%),
              radial-gradient(circle 500px at 75% 25%,
                rgba(255, 255, 255, 0.2),
                transparent 55%),
              radial-gradient(circle 700px at 50% 70%,
                rgba(255, 255, 255, 0.15),
                transparent 65%),
              radial-gradient(circle 400px at 80% 85%,
                rgba(255, 255, 255, 0.18),
                transparent 50%)
            `
          }}
        />
      </div>

      {/* Main Content */}
      <main className="main min-h-screen pt-24 sm:pt-32 md:pt-40 pb-12 sm:pb-16 md:pb-20 relative z-[2]">
        <div className="content-wrapper max-w-4xl mx-auto px-4 sm:px-6 md:px-12 text-center">
          {/* Tagline */}
          <div className="mb-4 sm:mb-6">
            <span className="inline-block px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-xs sm:text-sm font-medium tracking-[0.12em] sm:tracking-[0.15em] uppercase">
              Built for Fleet Operations
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-[80px] font-light leading-[1.1] mb-6 sm:mb-8 tracking-tight font-display">
            Run your fleet
            <br />
            like a living system
          </h1>

          {/* CTA Button */}
          <div className="mb-12 sm:mb-16">
            <a
              href={process.env.NEXT_PUBLIC_WAITLIST_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-white text-[#4169E1] font-semibold px-6 sm:px-8 py-3 sm:py-4 rounded-full text-sm sm:text-base hover:bg-white/90 hover:scale-105 transition-all duration-200 shadow-lg"
            >
              Join Waitlist
            </a>
          </div>

          {/* Operational Overview Dashboard Widget */}
          <div className="max-w-sm sm:max-w-md mx-auto bg-white rounded-none shadow-2xl overflow-hidden">
            {/* Widget Header */}
            <div className="flex items-center justify-between p-4 sm:p-5 border-b border-gray-100">
              <div className="flex items-center gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500 rounded-none flex items-center justify-center">
                  <LayoutDashboard className="w-4 h-4 sm:w-5 sm:h-5 text-white" />
                </div>
                <div className="text-left">
                  <h3 className="text-gray-900 font-semibold text-xs sm:text-sm">Operational Overview</h3>
                  <p className="text-gray-500 text-[10px] sm:text-xs">482 units active</p>
                </div>
              </div>
              <button className="text-gray-400 hover:text-gray-600">
                <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor" className="sm:w-5 sm:h-5">
                  <circle cx="10" cy="4" r="1.5" />
                  <circle cx="10" cy="10" r="1.5" />
                  <circle cx="10" cy="16" r="1.5" />
                </svg>
              </button>
            </div>

            {/* Widget Content */}
            <div className="p-4 sm:p-5">
              {/* Maintenance Events Header */}
              <div className="flex items-center justify-between mb-3 sm:mb-4">
                <h4 className="text-gray-900 font-semibold text-sm sm:text-base">Maintenance Events</h4>
                <span className="text-gray-900 font-bold text-lg sm:text-xl">32</span>
              </div>

              {/* Progress Bar */}
              <div className="mb-5">
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden flex">
                  <div className="bg-blue-500" style={{ width: '70%' }} />
                  <div className="bg-yellow-400" style={{ width: '20%' }} />
                  <div className="bg-green-500" style={{ width: '10%' }} />
                </div>
              </div>

              {/* Event Breakdown */}
              <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-blue-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-xs sm:text-sm">Booked & confirmed</span>
                  </div>
                  <span className="text-gray-900 font-medium text-xs sm:text-sm">
                    24 <span className="text-gray-500 font-normal">Events</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-yellow-400 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-xs sm:text-sm">Calling shops</span>
                  </div>
                  <span className="text-gray-900 font-medium text-xs sm:text-sm">
                    3 <span className="text-gray-500 font-normal">Events</span>
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 sm:gap-2">
                    <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-green-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 text-xs sm:text-sm">Awaiting approval</span>
                  </div>
                  <span className="text-gray-900 font-medium text-xs sm:text-sm">
                    5 <span className="text-gray-500 font-normal">Events</span>
                  </span>
                </div>
              </div>

              {/* View All Maintenance Link */}
              <button
                className="w-full flex items-center justify-between px-3 sm:px-4 py-2.5 sm:py-3 bg-gray-50 hover:bg-gray-100 rounded-lg transition-colors duration-200"
                aria-label="View all maintenance events"
              >
                <span className="text-gray-700 text-xs sm:text-sm font-medium">View all maintenance</span>
                <ArrowRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-gray-500 flex-shrink-0" />
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
