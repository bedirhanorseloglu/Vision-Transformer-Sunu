import React from 'react'
import { motion } from 'framer-motion'
import { Bot, BookOpen, Layers, Cpu } from 'lucide-react'

export const Slide01_Cover: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-8 sm:p-12 md:p-14 select-none">
      
      {/* Soft Ambient Light */}
      <div className="absolute -bottom-16 -left-16 w-[420px] h-[420px] bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" />

      {/* TOP HEADER: University & Year */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between z-20"
      >
        <div className="flex items-center gap-3 text-blue-600">
          <div className="p-1.5 rounded-xl bg-blue-50/80 border border-blue-200/50">
            <Bot className="w-5 h-5 text-blue-600" />
          </div>
          <span className="text-base sm:text-lg font-semibold tracking-wide text-blue-700 font-montserrat">
            Karadeniz Teknik Üniversitesi
          </span>
        </div>

        <div className="text-base sm:text-lg font-semibold text-blue-700 tracking-wide font-mono bg-blue-50/60 px-3 py-1 rounded-full border border-blue-200/40">
          2026
        </div>
      </motion.div>

      {/* CENTER HERO CONTENT */}
      <div className="relative z-10 my-auto py-4">
        {/* Subtitle pill */}
        <motion.div
          initial={{ opacity: 0, y: 12, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.25, ease: PUNCHY_EASE }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50/90 border border-blue-200/70 mb-6"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-blue-600 animate-pulse" />
          <span className="text-xs sm:text-sm font-semibold text-blue-700 tracking-wide font-montserrat">
            Multimodal Makine Öğrenmesi Dersi — Seminer Sunumu
          </span>
        </motion.div>

        {/* Main Title */}
        <motion.h1
          initial={{ opacity: 0, y: 16, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-slate-900 font-montserrat leading-[1.12]"
        >
          Vision Transformer{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 font-black">
            (ViT)
          </span>
        </motion.h1>

        {/* Paper Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1, ease: PUNCHY_EASE }}
          className="mt-5 text-lg sm:text-xl md:text-2xl font-medium text-slate-600 max-w-4xl leading-relaxed"
        >
          "An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"
        </motion.p>

        {/* Academic metadata badges */}
        <motion.div
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.15, ease: PUNCHY_EASE }}
          className="mt-8 flex flex-wrap items-center gap-3"
        >
          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-mono text-slate-700">
            <BookOpen className="w-4 h-4 text-blue-600" />
            <span>Dosovitskiy et al., Google Research (ICLR 2021)</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-mono text-slate-700">
            <Layers className="w-4 h-4 text-indigo-600" />
            <span>Görüntüleri Kelimeler Gibi Parçalara Bölmek</span>
          </div>

          <div className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 border border-slate-200/80 text-xs sm:text-sm font-mono text-slate-700">
            <Cpu className="w-4 h-4 text-emerald-600" />
            <span>Pure Transformer Mimarisi</span>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM FOOTER */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.18, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pt-6 border-t border-slate-100 z-10"
      >
        <div>
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold block">
            Sunumu Hazırlayan
          </span>
          <span className="text-lg font-bold text-slate-800 font-montserrat">
            Bedirhan Örseloğlu
          </span>
        </div>

        <div className="text-right">
          <span className="text-xs uppercase tracking-wider text-slate-400 font-mono font-semibold block">
            Bölüm & Enstitü
          </span>
          <span className="text-sm sm:text-base font-medium text-slate-600 font-montserrat">
            Bilgisayar Mühendisliği ABD / Fen Bilimleri Enstitüsü
          </span>
        </div>
      </motion.div>
    </div>
  )
}
