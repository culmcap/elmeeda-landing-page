'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { FileText, Scan, CheckCircle, AlertCircle, RefreshCw } from 'lucide-react'
import { useState, useEffect } from 'react'

export function WarrantyScanner() {
  const [scanState, setScanState] = useState<'idle' | 'scanning' | 'analyzing' | 'complete'>('idle')
  
  // Start loop
  useEffect(() => {
    const sequence = async () => {
      // Reset
      setScanState('idle')
      await new Promise(r => setTimeout(r, 1000))
      
      // Start Scanning
      setScanState('scanning')
      await new Promise(r => setTimeout(r, 2500))
      
      // Analyze/Found
      setScanState('analyzing')
      await new Promise(r => setTimeout(r, 2000))
      
      // Complete
      setScanState('complete')
      await new Promise(r => setTimeout(r, 4000))
      
      // Loop
      sequence()
    }
    
    sequence()
  }, [])

  return (
    <div className="w-full h-[320px] bg-slate-50 rounded-xl border border-gray-200 overflow-hidden relative flex flex-col shadow-inner">
      
      {/* Header / Status Bar */}
      <div className="bg-white border-b border-gray-100 p-3 flex items-center justify-between z-20 shadow-sm h-12">
        <div className="flex items-center gap-2">
          <FileText className="w-4 h-4 text-slate-500" />
          <span className="text-xs font-semibold text-slate-700">Invoice #INV-9284</span>
        </div>
        <div className="flex items-center gap-2">
          {scanState === 'scanning' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex items-center gap-1.5 text-blue-600 bg-blue-50 px-2 py-0.5 rounded-full"
            >
              <Scan className="w-3 h-3 animate-pulse" />
              <span className="text-xs font-bold uppercase tracking-wider">Scanning</span>
            </motion.div>
          )}
           {scanState === 'analyzing' && (
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="flex items-center gap-1.5 text-amber-600 bg-amber-50 px-2 py-0.5 rounded-full"
            >
              <AlertCircle className="w-3 h-3" />
              <span className="text-xs font-bold uppercase tracking-wider">Analyzing Matches</span>
            </motion.div>
          )}
          {scanState === 'complete' && (
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }}
              className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full"
            >
              <CheckCircle className="w-3 h-3" />
              <span className="text-xs font-bold uppercase tracking-wider">Recovery Found</span>
            </motion.div>
          )}
        </div>
      </div>

      {/* Invoice Content */}
      <div className="p-5 font-mono text-xs text-slate-600 relative z-10 bg-white m-4 mt-2 rounded-lg shadow-sm border border-gray-100 flex-1">
        <div className="flex justify-between mb-6 border-b border-gray-100 pb-2">
          <div>
            <p className="font-bold text-slate-800">MIDWEST TRUCK CENTER</p>
            <p className="text-[10px] text-slate-400">Indianapolis, IN</p>
          </div>
          <div className="text-right">
             <p className="font-bold text-slate-800">NOV 14, 2025</p>
             <p className="text-[10px] text-slate-400">Unit: #4091 (2023 Cascadia)</p>
          </div>
        </div>

        <div className="space-y-3">
          {/* Line Items */}
          <div className="grid grid-cols-[1fr_auto] gap-2 pb-2 border-b border-dashed border-gray-100 opacity-50">
            <span>Diagnostic Labor (1.0 hr)</span>
            <span>$165.00</span>
          </div>

          {/* TARGET ITEM */}
          <div className="relative">
             <motion.div 
               className="grid grid-cols-[1fr_auto] gap-2 py-1 px-2 -mx-2 rounded"
               animate={{ 
                 backgroundColor: (scanState === 'analyzing' || scanState === 'complete') ? 'rgba(236, 253, 245, 1)' : 'rgba(255, 255, 255, 0)',
                 color: (scanState === 'analyzing' || scanState === 'complete') ? '#059669' : 'inherit'
               }}
             >
               <span className="font-bold">A0001405878 - DEF Pump Module</span>
               <span className="font-bold">$2,845.00</span>
             </motion.div>
             
             {/* Detection Tag */}
             <AnimatePresence>
               {(scanState === 'analyzing' || scanState === 'complete') && (
                 <motion.div
                   initial={{ opacity: 0, x: -10 }}
                   animate={{ opacity: 1, x: 0 }}
                   exit={{ opacity: 0 }}
                   className="absolute left-0 top-full mt-1 z-20"
                 >
                    <div className="flex items-center gap-1.5 bg-emerald-600 text-white text-[10px] px-2 py-1 rounded shadow-lg">
                      <CheckCircle className="w-3 h-3" />
                      <span>OEM Emissions Warranty Active</span>
                    </div>
                 </motion.div>
               )}
             </AnimatePresence>
          </div>

          <div className="grid grid-cols-[1fr_auto] gap-2 pb-2 border-b border-dashed border-gray-100 opacity-50">
            <span>Shop Supplies / Environmental</span>
            <span>$85.00</span>
          </div>
          
           <div className="grid grid-cols-[1fr_auto] gap-2 pt-2 font-bold text-slate-800">
            <span>TOTAL DUE</span>
            <span>$3,095.00</span>
          </div>
        </div>
      </div>

      {/* Scanner Bar Animation */}
      <AnimatePresence>
        {scanState === 'scanning' && (
          <motion.div
            initial={{ top: '0%' }}
            animate={{ top: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 2, ease: "linear" }}
            className="absolute left-0 right-0 h-32 bg-gradient-to-b from-blue-500/5 to-blue-500/20 z-20 border-b-2 border-blue-400/50 pointer-events-none"
          />
        )}
      </AnimatePresence>

       {/* Result Overlay */}
      <AnimatePresence>
        {scanState === 'complete' && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur border border-emerald-100 rounded-lg p-3 shadow-xl z-30"
          >
            <div className="flex justify-between items-start">
               <div>
                 <p className="text-[10px] text-emerald-600 font-bold uppercase mb-0.5">Warranty Recovery Action</p>
                 <p className="text-sm font-bold text-slate-800">Claim filed automatically.</p>
                 <p className="text-xs text-slate-500">Midwest Truck Center notified.</p>
               </div>
               <div className="text-right">
                 <p className="text-[10px] text-slate-400 mb-0.5">Recovered</p>
                 <p className="text-lg font-bold text-emerald-600">+$2,845</p>
               </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}

