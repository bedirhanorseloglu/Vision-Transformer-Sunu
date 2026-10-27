import React from 'react'
import { motion } from 'framer-motion'
import { 
  Key, 
  MapPin, 
  Cpu, 
  ArrowRight, 
  Sparkles, 
  CheckCircle2,
  Layers,
  Target
} from 'lucide-react'

export const Slide10_ClsPositionMLP: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(147,51,234,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-9 select-none">
      
      {/* Background subtle ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-3 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
              BÖLÜM 3: VISION TRANSFORMER (ViT)</span>
            <span className="text-xs text-slate-400 font-mono">| 197×768 Matrisi, Encoder & MLP Head Tahmini</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            3, 4 ve 5. Adım: [CLS] Token, Konum ve Sınıflandırma</h2>
        </div>

        {/* Sağ Üst: Slayt Numarası & Referans */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Aman Arora (Fig-2 Devamı)
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Slayt 10</span>
          </div>
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
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
            <span className="font-bold text-slate-900 font-montserrat">
              [CLS] Token (1) + 196 Patch = 197×768 Matris ➔ Transformer Encoder ➔ MLP Head ➔ Sınıf Tahmini
            </span>
          </div>
          <span className="text-[10px] font-mono text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-semibold">
            Matris Boyutu: 197 × 768
          </span>
        </div>

        {/* Wide Panorama Image */}
        <div className="relative w-full h-[185px] sm:h-[210px] md:h-[235px] bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 overflow-hidden shadow-inner group">
          <img 
            src="/vit_fig2_full_diagram.png" 
            alt="ViT [CLS] Token, Position Embeddings, Encoder and MLP Head" 
            className="w-full h-full object-contain filter contrast-[1.03] transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </motion.div>

      {/* 3. BOTTOM: 3 CONCISE & BALANCED CARDS (Steps 3, 4, 5) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 z-10 shrink-0">
        
        {/* KART 1: 3. Adım - [CLS] Token ve Position Embeddings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="bg-purple-50/40 hover:bg-purple-50/70 rounded-2xl p-4 border border-purple-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-purple-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                3
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                [CLS] Token & Konum
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">
              196 ➔ 197×768
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
            <span className="font-semibold text-slate-900">BERT benzeri [CLS] token</span> başa eklenir (197×768). CNN'ler gibi sıra bilmeyen Transformer'a yamaların uzamsal yerini öğretmek için <span className="font-semibold text-slate-900">Position Embeddings</span> matrisi eklenir.
          </p>

          <div className="mt-2 bg-white/90 rounded-lg p-2 border border-purple-200/60 text-[11px] font-mono text-purple-900 font-medium flex items-center justify-between">
            <span>[CLS] (1) + 196 Patch</span>
            <strong>➔ 197 × 768</strong>
          </div>
        </motion.div>

        {/* KART 2: 4. Adım - Transformer Encoder */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.13, ease: PUNCHY_EASE }}
          className="bg-amber-50/40 hover:bg-amber-50/70 rounded-2xl p-4 border border-amber-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-amber-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                4
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                Transformer Encoder
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-amber-700 bg-amber-100/70 px-2 py-0.5 rounded">
              Küresel Dikkat
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
            197 vektör Encoder katmanlarından geçer. Self-Attention ile tüm yamalar birbirleriyle ilişki kurar. [CLS] token'ın son durumu (<span className="font-mono font-semibold text-amber-900">1×768</span>), tüm görüntünün ortak özeti olur.
          </p>

          <div className="mt-2 bg-white/90 rounded-lg p-2 border border-amber-200/60 text-[11px] font-mono text-amber-900 font-medium flex items-center justify-between">
            <span>Özet Çıktı:</span>
            <strong>[CLS] = 1 × 768</strong>
          </div>
        </motion.div>

        {/* KART 3: 5. Adım - MLP Head ile Sınıflandırma */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.16, ease: PUNCHY_EASE }}
          className="bg-emerald-50/40 hover:bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                5
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                MLP Head & Tahmin
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
              Sınıflandırma
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
            [CLS] token'ın 1×768 çıktısı bir <span className="font-semibold text-slate-900">Linear Katman (MLP Head)</span> ile sınıflandırma etiketlerine (Kurbağa, Kuş, Kedi, Masa) dönüştürülerek nihai tahmin elde edilir.
          </p>

          <div className="mt-2 bg-white/90 rounded-lg p-2 border border-emerald-200/60 text-[11px] font-mono text-emerald-900 font-medium flex items-center justify-between">
            <span>Tahmin Sonucu:</span>
            <strong>FROG (Kurbağa) %94</strong>
          </div>
        </motion.div>

      </div>

    </div>
  )
}