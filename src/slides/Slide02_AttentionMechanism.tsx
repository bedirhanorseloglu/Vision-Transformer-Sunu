import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { AlertCircle, CheckCircle2, Maximize2, X, ArrowRight } from 'lucide-react'

export const Slide02_AttentionMechanism: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [selectedImage, setSelectedImage] = useState<{
    src: string
    title: string
    subtitle: string
  } | null>(null)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-8 select-none">

      {/* Background soft ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER: Clean & Focused */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2.5 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 1: DİKKAT (ATTENTION) &amp; SEQ2SEQ
            </span>
            <span className="text-xs text-slate-400 font-mono">
              | Encoder&apos;dan Decoder&apos;a Ne Aktarılıyor?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Geleneksel RNN vs Attention Mekanizması
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 02</span>
        </div>
      </motion.div>

      {/* 2. DİYAGRAM RENK REHBERİ (LEGEND BAR) - Dinleyicinin Şemayı Anında Okumasını Sağlar */}
      <motion.div
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, delay: 0.03, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50/90 rounded-2xl py-2 px-4 border border-slate-200/80 shadow-2xs flex flex-wrap items-center justify-between gap-2 z-10 shrink-0 mt-2 text-xs sm:text-[13px]"
      >
        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-emerald-600 shadow-2xs shrink-0" />
          <span className="text-slate-700">
            <strong className="text-slate-900">Yeşil (Encoder):</strong> Cümleyi kelime kelime okur (<em>&quot;Je suis étudiant&quot;</em>)
          </span>
        </div>

        <div className="hidden md:block text-slate-300">|</div>

        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-amber-400 border border-amber-500/60 shadow-2xs shrink-0" />
          <span className="text-slate-700">
            <strong className="text-slate-900">Sarı Kutu (Hidden State - h):</strong> O ana kadar okunan kelimelerin <strong>hafıza özeti</strong>
          </span>
        </div>

        <div className="hidden md:block text-slate-300">|</div>

        <div className="flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded bg-blue-600 shadow-2xs shrink-0" />
          <span className="text-slate-700">
            <strong className="text-slate-900">Mavi (Decoder):</strong> Hafıza özetine bakarak çeviriyi üretir (<em>&quot;I am a student&quot;</em>)
          </span>
        </div>
      </motion.div>

      {/* 3. MAIN CENTER: 2 LARGE CARDS (Left: Traditional RNN, Right: Attention) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-6 my-auto z-10 items-stretch flex-1 py-2.5 min-h-0">

        {/* SOL: Geleneksel RNN */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.06, ease: PUNCHY_EASE }}
          className="flex flex-col justify-between bg-amber-50/25 hover:bg-amber-50/45 rounded-2xl p-4 sm:p-5 border border-amber-200/80 shadow-sm transition-all h-full"
        >
          {/* Header Title */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-amber-200/60 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-montserrat">
                1. Geleneksel RNN Encoder-Decoder
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-amber-800 bg-amber-100/80 px-2.5 py-1 rounded-lg border border-amber-300">
              Darboğaz (Bottleneck) ⚠️
            </span>
          </div>

          {/* LARGE DIAGRAM CONTAINER */}
          <div
            onClick={() =>
              setSelectedImage({
                src: '/traditional_rnn_encoder_decoder.png',
                title: 'Geleneksel RNN Encoder-Decoder Mimarisi',
                subtitle: 'İlk gizli durumlar (h₁, h₂) atılır; yalnızca son durum (h₃) Decoder’a aktarılır.',
              })
            }
            className="relative w-full flex-1 bg-white rounded-xl border border-slate-200 hover:border-amber-400 flex items-center justify-center p-2 overflow-hidden shadow-inner group min-h-[195px] cursor-pointer transition-all"
            title="Şemayı Büyütmek İçin Tıklayın"
          >
            <img
              src="/traditional_rnn_encoder_decoder.png"
              alt="Geleneksel RNN Encoder-Decoder Diyagramı"
              className="w-full h-full max-h-[280px] object-contain filter contrast-[1.05] scale-[1.04] transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <span className="hidden md:inline-flex items-center gap-1 absolute right-2.5 bottom-2 text-[10px] font-semibold text-slate-500 group-hover:text-amber-700 bg-slate-50/90 px-2 py-0.5 rounded border border-slate-200">
              <Maximize2 className="w-3 h-3" />
              <span>Büyüt</span>
            </span>
          </div>

          {/* HAFIZA AKIŞI KUTUSU (Somut Görsel Karşılaştırma) */}
          <div className="mt-2.5 bg-white rounded-xl py-2 px-3 border border-amber-200/80 flex flex-wrap items-center justify-between gap-1.5 text-xs font-mono shadow-2xs shrink-0">
            <span className="text-slate-400 line-through decoration-rose-500 decoration-2 bg-slate-100 px-2 py-0.5 rounded">
              h₁ (Je) ❌
            </span>
            <span className="text-slate-400 line-through decoration-rose-500 decoration-2 bg-slate-100 px-2 py-0.5 rounded">
              h₂ (suis) ❌
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
            <span className="font-bold text-amber-900 bg-amber-100 px-2.5 py-0.5 rounded border border-amber-300">
              Yalnızca h₃ (Son Kutu) Aktarılır!
            </span>
          </div>

          {/* SPEAKER CUE NOTES */}
          <div className="mt-2.5 bg-amber-50/80 border border-amber-200/80 rounded-xl p-3 shrink-0">
            <div className="flex items-start gap-2.5">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                <strong className="text-amber-950">Temel Kusur:</strong> İlk kelimelerin hafızası (<code className="font-bold">h₁, h₂</code>) çöpe atılır; tüm cümlenin anlamı <strong>tek bir sarı kutuya (<code className="font-bold">h₃</code>)</strong> sıkıştırılır. Cümle uzadıkça başındaki kelimeler tamamen unutulur.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SAĞ: Attention Modeli */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="flex flex-col justify-between bg-blue-50/35 hover:bg-blue-50/55 rounded-2xl p-4 sm:p-5 border border-blue-200/80 shadow-sm transition-all h-full"
        >
          {/* Header Title */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-blue-200/60 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-montserrat">
                2. Attention (Dikkat) Modeli
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-blue-800 bg-blue-100/80 px-2.5 py-1 rounded-lg border border-blue-300">
              Tüm Durumlar (h₁, h₂, h₃) ✅
            </span>
          </div>

          {/* LARGE DIAGRAM CONTAINER */}
          <div
            onClick={() =>
              setSelectedImage({
                src: '/attention_model_seq2seq.png',
                title: 'Attention Mekanizmalı Seq2Seq Mimarisi',
                subtitle: 'Tüm gizli durumlar (h₁, h₂, h₃) Decoder’a aktarılır; model her adımda ilgili kelimeye odaklanır.',
              })
            }
            className="relative w-full flex-1 bg-white rounded-xl border border-blue-200 hover:border-blue-400 flex items-center justify-center p-2 overflow-hidden shadow-inner group min-h-[195px] cursor-pointer transition-all"
            title="Şemayı Büyütmek İçin Tıklayın"
          >
            <img
              src="/attention_model_seq2seq.png"
              alt="Attention Model Diyagramı"
              className="w-full h-full max-h-[280px] object-contain filter contrast-[1.05] scale-[1.04] transition-transform duration-300 group-hover:scale-[1.08]"
            />
            <span className="hidden md:inline-flex items-center gap-1 absolute right-2.5 bottom-2 text-[10px] font-semibold text-slate-500 group-hover:text-blue-700 bg-slate-50/90 px-2 py-0.5 rounded border border-slate-200">
              <Maximize2 className="w-3 h-3" />
              <span>Büyüt</span>
            </span>
          </div>

          {/* HAFIZA AKIŞI KUTUSU (Somut Görsel Karşılaştırma) */}
          <div className="mt-2.5 bg-white rounded-xl py-2 px-3 border border-blue-200/80 flex flex-wrap items-center justify-between gap-1.5 text-xs font-mono shadow-2xs shrink-0">
            <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              h₁ (Je) ✅
            </span>
            <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              h₂ (suis) ✅
            </span>
            <span className="font-semibold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
              h₃ (étudiant) ✅
            </span>
            <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
            <span className="font-bold text-blue-900 bg-blue-100 px-2.5 py-0.5 rounded border border-blue-300">
              Hepsi Aktarılır!
            </span>
          </div>

          {/* SPEAKER CUE NOTES */}
          <div className="mt-2.5 bg-blue-50/80 border border-blue-200/80 rounded-xl p-3 shrink-0">
            <div className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                <strong className="text-blue-950">Attention Çözümü:</strong> Hiçbir kelimenin hafızası çöpe atılmaz; <strong>tüm sarı kutular (<code className="font-bold">h₁, h₂, h₃</code>)</strong> Decoder&apos;a verilir. Model <em>&quot;student&quot;</em> kelimesini üretirken doğrudan <strong><code className="font-bold">h₃ (étudiant)</code></strong> kutusuna odaklanır.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 4. LIGHTBOX MODAL FOR DIAGRAMS */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 bg-slate-950/70 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ duration: 0.2, ease: PUNCHY_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 max-w-5xl w-full p-5 sm:p-7 flex flex-col"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-100">
                <div>
                  <h4 className="text-base sm:text-lg font-extrabold text-slate-900 font-montserrat">
                    {selectedImage.title}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500 mt-0.5">
                    {selectedImage.subtitle}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedImage(null)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="bg-white rounded-2xl border border-slate-200/80 p-4 flex items-center justify-center">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="w-full max-h-[65vh] object-contain filter contrast-[1.05]"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
