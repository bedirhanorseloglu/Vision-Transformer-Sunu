import React from 'react'
import { motion } from 'framer-motion'
import { AlertCircle, CheckCircle2 } from 'lucide-react'

export const Slide02_AttentionMechanism: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-9 select-none">

      {/* Background soft ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER: Clean & Focused */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-3 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 1: DİKKAT (ATTENTION) & SEQ2SEQ</span>
            <span className="text-xs text-slate-400 font-mono">| Encoder'dan Decoder'a Ne Aktarılıyor?</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Geleneksel RNN vs Attention Mekanizması</h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 02</span>
        </div>
      </motion.div>

      {/* 2. MAIN CENTER: 2 LARGE CARDS (Left: Traditional RNN, Right: Attention) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 sm:gap-7 my-auto z-10 items-stretch flex-1 py-3 min-h-0">

        {/* SOL: Geleneksel RNN */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="flex flex-col justify-between bg-slate-50/60 hover:bg-slate-50/80 rounded-2xl p-4 sm:p-5 border border-slate-200/90 shadow-sm transition-all h-full"
        >
          {/* Header Title */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-slate-200/70 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-amber-500" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-montserrat">
                Geleneksel RNN Encoder-Decoder
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded border border-amber-200">
              Sadece Son Durum (h₃)
            </span>
          </div>

          {/* LARGE DIAGRAM CONTAINER - Takes maximum space */}
          <div className="relative w-full flex-1 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-3 sm:p-4 overflow-hidden shadow-inner group min-h-[220px]">
            <img
              src="/traditional_rnn_encoder_decoder.png"
              alt="Geleneksel RNN Encoder-Decoder Diyagramı"
              className="w-full h-full max-h-[340px] object-contain filter contrast-[1.05] transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* SPEAKER CUE NOTES (1-2 sentences max) */}
          <div className="mt-3 bg-amber-50/70 border border-amber-200/60 rounded-xl p-3 shrink-0">
            <div className="flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                Decoder'a <strong className="text-amber-900">yalnızca son gizli durum (hidden state #3)</strong> iletilir. Cümle uzadıkça önceki kelimeler unutulur.
              </p>
            </div>
          </div>
        </motion.div>

        {/* SAĞ: Attention Modeli */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="flex flex-col justify-between bg-blue-50/30 hover:bg-blue-50/50 rounded-2xl p-4 sm:p-5 border border-blue-200/80 shadow-sm transition-all h-full"
        >
          {/* Header Title */}
          <div className="flex items-center justify-between pb-2.5 mb-2 border-b border-blue-100 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-blue-600" />
              <h3 className="text-base sm:text-lg font-bold text-slate-900 font-montserrat">
                Attention Modeli
              </h3>
            </div>
            <span className="text-xs font-mono font-bold text-blue-700 bg-blue-100/70 px-2.5 py-0.5 rounded border border-blue-200">
              Tüm Durumlar (h₁, h₂, h₃)
            </span>
          </div>

          {/* LARGE DIAGRAM CONTAINER - Takes maximum space */}
          <div className="relative w-full flex-1 bg-white rounded-xl border border-blue-200 flex items-center justify-center p-3 sm:p-4 overflow-hidden shadow-inner group min-h-[220px]">
            <img
              src="/attention_model_seq2seq.png"
              alt="Attention Model Diyagramı"
              className="w-full h-full max-h-[340px] object-contain filter contrast-[1.05] transition-transform duration-300 group-hover:scale-[1.02]"
            />
          </div>

          {/* SPEAKER CUE NOTES (1-2 sentences max) */}
          <div className="mt-3 bg-blue-50/80 border border-blue-200/60 rounded-xl p-3 shrink-0">
            <div className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
              <p className="text-xs sm:text-sm text-slate-700 leading-snug">
                Decoder'a <strong className="text-blue-900">tüm zaman adımlarındaki gizli durumlar</strong> aktarılır. Model çeviri yaparken ilgili kelimeye odaklanabilir.
              </p>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  )
}
