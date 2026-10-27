import React from 'react'
import { motion } from 'framer-motion'
import {
  Grid,
  Layers,
  ArrowRight,
  Maximize2,
  Hash, } from 'lucide-react'

export const Slide09_PatchingAndEmbedding: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-9 select-none">

      {/* Background subtle ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-3 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 3: VISION TRANSFORMER (ViT)</span>
            <span className="text-xs text-slate-400 font-mono">| 224×224 Görüntüden 196×768 Matrisine Geçiş</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            1. ve 2. Adım: Patch'lere Bölme ve Patch Embedding</h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 09</span>
        </div>
      </motion.div>

      {/* 2. CENTER: WIDE PANORAMA DIAGRAM CONTAINER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm flex flex-col justify-between z-10 my-auto"
      >
        {/* Caption bar */}
        <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/70 text-xs">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-indigo-600" />
            <span className="font-bold text-slate-900 font-montserrat">
              Görüntü (224×224×3) ➔ 196 Patch ➔ Linear Projection ➔ Patch Embeddings (196×768)
            </span>
          </div>
          <span className="text-[10px] font-mono text-slate-500 bg-white px-2 py-0.5 rounded border border-slate-200">
            Aman Arora (Fig-2)
          </span>
        </div>

        {/* Wide Panorama Image */}
        <div className="relative w-full h-[180px] sm:h-[210px] md:h-[230px] bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 overflow-hidden shadow-inner group">
          <img
            src="/vit_fig2_patches_embeddings.png"
            alt="ViT Patching and Linear Projection to Patch Embeddings"
            className="w-full h-full object-contain filter contrast-[1.03] transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </motion.div>

      {/* 3. BOTTOM: 2 BALANCED EXPLANATION CARDS (Step 1 & Step 2) */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 z-10 shrink-0">

        {/* SOL: 1. Adım - Patch'lere Bölme */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="bg-blue-50/40 hover:bg-blue-50/70 rounded-2xl p-4 border border-blue-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                1
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Patch'lere Bölme
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
              196 Patch
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
            <span className="font-semibold text-slate-900">224×224</span> boyutundaki 3 kanallı (RGB) görüntü, <span className="font-semibold text-slate-900">16×16</span> boyutunda küçük kare patch'lere ayrılır.
          </p>

          <div className="bg-white/90 rounded-xl p-2.5 border border-blue-200/60 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-600">Patch Sayısı (N):</span>
            <span className="font-bold text-blue-700">14 × 14 = 196 adet</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600">Piksel/Patch:</span>
            <span className="font-bold text-blue-700">3 × 16 × 16 = 768</span>
          </div>
        </motion.div>

        {/* SAĞ: 2. Adım - Patch Embedding (Linear Katman) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.12, ease: PUNCHY_EASE }}
          className="bg-purple-50/40 hover:bg-purple-50/70 rounded-2xl p-4 border border-purple-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-purple-600 text-white font-mono font-bold text-xs flex items-center justify-center">
                2
              </div>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Patch Embedding (Doğrusal Eşleme)
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">
              196 × 768 Matris
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
            Her patch düzleştirilir ve eğitilebilir bir <strong className="text-slate-900">Linear Katman (Projection)</strong> ile <span className="font-semibold text-purple-900">1×768</span> boyutlu bir vektöre (mor kutular) dönüştürülür.
          </p>

          <div className="bg-white/90 rounded-xl p-2.5 border border-purple-200/60 flex items-center justify-between text-xs font-mono">
            <span className="text-slate-600">Çıktı Matrisi:</span>
            <span className="font-bold text-purple-700">196 (Patch) × 768 (D)</span>
            <span className="text-slate-400">|</span>
            <span className="text-slate-600">Literatür Adı:</span>
            <span className="font-bold text-purple-700">Patch Embeddings</span>
          </div>
        </motion.div>

      </div>

    </div>
  )
}
