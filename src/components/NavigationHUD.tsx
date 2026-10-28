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
  const progressPercent = ((currentSlide + 1) / totalSlides) * 100

  return (
    <>
      {/* Top Hairline Progress Stream */}
      <div className="fixed top-0 left-0 right-0 h-[3px] bg-slate-200/70 z-50 overflow-hidden">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-[0_0_12px_rgba(37,99,235,0.6)]"
          initial={{ width: 0 }}
          animate={{ width: `${progressPercent}%` }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        />
      </div>

      {/* Floating Bottom Navigation Capsule (Compact & Projector-Friendly) */}
      <nav
        aria-label="Presentation Navigation"
        className="fixed bottom-3 left-1/2 -translate-x-1/2 z-40 pointer-events-auto flex items-center"
      >
        <div className="glass-capsule hairline-border px-2 py-1 rounded-2xl flex items-center gap-1 sm:gap-2 shadow-xl backdrop-blur-2xl">
          {/* Previous Button */}
          <button
            onClick={onPrev}
            disabled={currentSlide === 0}
            className="px-2.5 py-1.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100/90 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all duration-200 active:scale-95 flex items-center gap-1 cursor-pointer"
            title="Önceki Slayt (←)"
          >
            <ChevronLeft className="w-4 h-4" />
            <span className="text-xs font-semibold hidden sm:inline">Önceki</span>
          </button>

          {/* Slide Indicator & Overview Toggle */}
          <button
            onClick={() => setIsOverviewOpen(!isOverviewOpen)}
            className="px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-indigo-50 border border-slate-200/90 hover:border-indigo-200 transition-all duration-200 active:scale-95 flex items-center gap-2 group cursor-pointer"
            title="Tüm Slaytları Göster (G veya Tıkla)"
          >
            <Layers className="w-3.5 h-3.5 text-indigo-600 group-hover:rotate-12 transition-transform duration-200" />
            <span className="text-xs font-mono font-semibold tracking-tight text-slate-800">
              <span className="font-extrabold text-slate-950">{currentSlide + 1}</span>
              <span className="text-slate-400 mx-1">/</span>
              <span className="text-slate-600">{totalSlides}</span>
            </span>
          </button>

          {/* Next Button */}
          <button
            onClick={onNext}
            disabled={currentSlide === totalSlides - 1}
            className="px-2.5 py-1.5 rounded-xl text-slate-700 hover:text-slate-950 hover:bg-slate-100/90 disabled:opacity-30 disabled:hover:bg-transparent disabled:cursor-not-allowed transition-all duration-200 active:scale-95 flex items-center gap-1 cursor-pointer"
            title="Sonraki Slayt (→ veya Boşluk)"
          >
            <span className="text-xs font-semibold hidden sm:inline">Sonraki</span>
            <ChevronRight className="w-4 h-4" />
          </button>

          <div className="w-[1px] h-4 bg-slate-200 my-auto mx-0.5" />

          {/* Fullscreen Toggle */}
          <button
            onClick={toggleFullscreen}
            className="p-1.5 rounded-xl text-slate-700 hover:text-indigo-700 hover:bg-indigo-50 transition-all duration-200 active:scale-95 cursor-pointer"
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

      {/* Slide Overview Modal (Light Grid Drawer) */}
      <AnimatePresence>
        {isOverviewOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-50 bg-slate-900/40 backdrop-blur-md flex items-center justify-center p-6 md:p-10"
            onClick={() => setIsOverviewOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 16 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.96, opacity: 0, y: 8 }}
              transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="bg-white border border-slate-200 w-full max-w-5xl max-h-[86vh] rounded-3xl p-6 md:p-8 flex flex-col gap-5 overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between border-b border-slate-200 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-200 text-indigo-600">
                    <Layers className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-lg font-extrabold text-slate-900 tracking-tight font-montserrat">
                      Slayt Gezgini ({totalSlides} Slayt)
                    </h3>
                    <p className="text-xs text-slate-600">
                      İstediğiniz bölüme doğrudan geçiş yapın
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-xs font-mono text-slate-600">
                  <span className="px-2 py-1 rounded bg-slate-100 border border-slate-300 text-slate-800 font-bold">
                    ESC
                  </span>
                  <span>ile Kapat</span>
                </div>
              </div>

              {/* Grid of slides */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5 overflow-y-auto pr-2 custom-scrollbar max-h-[66vh]">
                {slides.map((s, idx) => {
                  const isActive = idx === currentSlide
                  return (
                    <button
                      key={s.id}
                      onClick={() => {
                        onSelectSlide(idx)
                        setIsOverviewOpen(false)
                      }}
                      className={`text-left p-3.5 rounded-2xl border transition-all duration-200 group relative cursor-pointer ${
                        isActive
                          ? 'bg-indigo-50/90 border-indigo-400 ring-2 ring-indigo-500/20 shadow-md'
                          : 'bg-slate-50/80 border-slate-200 hover:bg-white hover:border-blue-300 hover:shadow-sm'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-1.5">
                        <span
                          className={`text-[11px] font-mono px-2 py-0.5 rounded-md font-bold ${
                            isActive
                              ? 'bg-indigo-600 text-white'
                              : 'bg-white text-slate-700 border border-slate-200 group-hover:text-slate-950'
                          }`}
                        >
                          Slayt {idx + 1}
                        </span>
                        {s.section && (
                          <span className="text-[10px] text-slate-500 font-semibold truncate max-w-[115px]">
                            {s.section}
                          </span>
                        )}
                      </div>
                      <h4 className="text-xs sm:text-sm font-bold text-slate-900 group-hover:text-blue-700 line-clamp-1 mb-1 font-montserrat">
                        {s.title}
                      </h4>
                      {s.subtitle && (
                        <p className="text-[11px] text-slate-600 line-clamp-2 leading-snug">
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
