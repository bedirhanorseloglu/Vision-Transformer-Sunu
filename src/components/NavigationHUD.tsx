import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  ChevronLeft,
  ChevronRight,
  Maximize2,
  Minimize2,
  Layers
} from 'lucide-react'
import type { SlideMeta } from '../types/presentation'

interface NavigationHUDProps {
  currentSlide: number
  totalSlides: number
  slides: SlideMeta[]
  onPrev: () => void
  onNext: () => void
  onSelectSlide: (index: number) => void
  isOverviewOpen: boolean
  setIsOverviewOpen: (open: boolean) => void
  isFullscreen: boolean
  toggleFullscreen: () => void
}

export const NavigationHUD: React.FC<NavigationHUDProps> = ({
  currentSlide,
  totalSlides,
  slides,
  onPrev,
  onNext,
  onSelectSlide,
  isOverviewOpen,
  setIsOverviewOpen,
  isFullscreen,
  toggleFullscreen,
}) => {
  const currentMeta = slides[currentSlide]
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100

  return (
    <>
      {/* Top Hairline Progress Stream */}
      <div className="fixed top-0 left-0 right-0 h-[2.5px] bg-slate-200/60 z-50 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-indigo-600 via-cyan-500 to-purple-600 shadow-[0_0_10px_rgba(99,102,241,0.5)]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Floating Header Badge (Top-Left) */}
      <header className="fixed top-5 left-6 z-40 flex items-center gap-3 pointer-events-auto">
        <div className="glass-capsule hairline-border px-3.5 py-1.5 rounded-full flex items-center gap-2.5 shadow-sm">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shadow-[0_0_6px_#10b981]" />
          <span className="text-xs font-semibold tracking-wider text-slate-800 uppercase">
            Vısıon Transformer
          </span>
        </div>

        {currentMeta?.section && (
          <motion.div
            key={currentMeta.section}
            initial={{ opacity: 0, x: -8 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -8 }}
            transition={{ duration: 0.22, ease: [0.16, 1, 0.3, 1] }}
            className="hidden md:flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium text-slate-600 bg-white/70 border border-slate-200/80 shadow-sm"
          >
            <span>{currentMeta.section}</span>
          </motion.div>
        )}
      </header>

      {/* Floating Bottom Navigation Capsule */}
      <nav
        aria-label="Presentation Navigation"
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex items-center"
      >
        <div className="glass-capsule hairline-border p-1.5 rounded-2xl flex items-center gap-1 sm:gap-2 shadow-xl backdrop-blur-2xl">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all duration-200 active:scale-95 flex items-center gap-1"
            title="Önceki Slayt (← veya Sol Tık)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-xs font-medium hidden sm:inline">Önceki</span>
          </button>

          {/* Slide Indicator & Overview Toggle */}
          <button
            onClick={() => setIsOverviewOpen(!isOverviewOpen)}
            className="px-3 py-1.5 rounded-xl bg-slate-100/90 hover:bg-slate-200/70 border border-slate-200/70 transition-all duration-200 active:scale-95 flex items-center gap-2 group"
            title="Tüm Slaytları Göster (G veya Tıkla)"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-600 group-hover:rotate-12 transition-transform duration-200" />
            <span className="text-xs font-mono font-medium tracking-tight text-slate-800">
              <span className="font-bold text-slate-950">{currentSlide + 1}</span>
              <span className="text-slate-400 mx-1">/</span>
              <span className="text-slate-500">{totalSlides}</span>
            </span>
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="p-2 sm:px-3 sm:py-2 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100/80 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all duration-200 active:scale-95 flex items-center gap-1"
            title="Sonraki Slayt (→ veya Boşluk)"
          >
            <span className="text-xs font-medium hidden sm:inline">Sonraki</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="w-[1px] h-5 bg-slate-200 my-auto mx-0.5" />

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-2 rounded-xl text-slate-600 hover:text-slate-950 hover:bg-slate-100/80 transition-all duration-200 active:scale-95"
            title={isFullscreen ? 'Tam Ekrandan Çık (F)' : 'Tam Ekran (F)'}
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-indigo-600" />
            ) : (
              <Maximize2 className="w-4 h-4" />
            )}
          </button>
        </div>
      </nav>

      {/* Slide Overview Modal (21st.dev Light Grid Drawer) */}
      <AnimatePresence>
        {isOverviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-slate-900/30 backdrop-blur-md flex items-center justify-center p-6 md:p-12"
            onClick={() => setIsOverviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white/95 backdrop-blur-2xl border border-slate-200/90 w-full max-w-4xl max-h-[85vh] rounded-3xl p-6 md:p-8 flex flex-col gap-6 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-100 text-indigo-600">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 tracking-tight">Slayt Gezgini</h3>
                    <p className="text-xs text-slate-500">Sunum haritası ve hızlı geçiş</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-500">
                  <span className="px-2 py-1 rounded bg-slate-100 border border-slate-200 text-slate-700">ESC</span>
                  <span>ile Kapat</span>
                </div>
              </div>

              {/* Grid of slides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 overflow-y-auto pr-2 custom-scrollbar max-h-[60vh]">
                {slides.map((s, idx) => {
                  const isActive = idx === currentSlide
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectSlide(idx)
                        setIsOverviewOpen(false)
                      }}
                      className={`text-left p-4 rounded-2xl border transition-all duration-200 group relative ${isActive
                        ? 'bg-indigo-50/80 border-indigo-300 ring-2 ring-indigo-500/20 shadow-md'
                        : 'bg-slate-50/70 border-slate-200/70 hover:bg-white hover:border-slate-300 hover:shadow-sm'
                        }`}
                    >
                      <div className="flex items-center justify-between mb-2">
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md ${isActive
                          ? 'bg-indigo-600 text-white font-bold'
                          : 'bg-white text-slate-600 border border-slate-200 group-hover:text-slate-900'
                          }`}>
                          #{idx + 1}
                        </span>
                        {s.section && (
                          <span className="text-[10px] text-slate-500 font-medium truncate max-w-[120px]">
                            {s.section}
                          </span>
                        )}
                      </div>
                      <h4 className="text-sm font-semibold text-slate-800 group-hover:text-slate-950 line-clamp-1 mb-1">
                        {s.title}
                      </h4>
                      {s.subtitle && (
                        <p className="text-xs text-slate-500 line-clamp-2">
                          {s.subtitle}
                        </p>
                      )}
                    </button>
                  )
                })}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
