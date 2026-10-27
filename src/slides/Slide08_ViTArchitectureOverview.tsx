import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Grid,
  Layers,
  MapPin,
  Cpu,
  Target,
  ArrowRight,
  ArrowDown,
  ChevronRight
} from 'lucide-react'

export const Slide08_ViTArchitectureOverview: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [activeStep, setActiveStep] = useState<number>(0)

  const steps = [
    {
      num: '01',
      icon: Grid,
      title: "Patch'lere Bölme",
      desc: "2D giriş görüntüsü sabit boyutlu küçük kare patch'lere(örn. 16×16 piksel) bölünür.",
      badge: 'Split into Patches',
      accentColor: 'text-blue-600 bg-blue-50 border-blue-200',
    },
    {
      num: '02',
      icon: Layers,
      title: 'Patch Embedding (Doğrusal Eşleme)',
      desc: 'Her patch düzleştirilir ve Linear katman ile D boyutlu vektör uzayına izdüşürülür.',
      badge: 'Linear Projection',
      accentColor: 'text-indigo-600 bg-indigo-50 border-indigo-200',
    },
    {
      num: '03',
      icon: MapPin,
      title: '[CLS] Token ve Position Embedding',
      desc: 'Dizinin başına sınıflandırma için [CLS] token eklenir; uzamsal sırayı korumak için 1D konum vektörleri toplanır.',
      badge: '[CLS] + Position',
      accentColor: 'text-purple-600 bg-purple-50 border-purple-200',
    },
    {
      num: '04',
      icon: Cpu,
      title: 'Transformer Encoder İşlemi',
      desc: 'Tüm dizi standart Multi-Head Self-Attention ve MLP bloklarından geçerek küresel bağlamı öğrenir.',
      badge: 'Self-Attention Blocks',
      accentColor: 'text-emerald-600 bg-emerald-50 border-emerald-200',
    },
    {
      num: '05',
      icon: Target,
      title: 'MLP Head ile Sınıflandırma',
      desc: 'Çıktıdaki [CLS] token temsili, sınıflandırma başlığından (MLP Head) geçirilerek nihai tahmin üretilir.',
      badge: 'Final Prediction',
      accentColor: 'text-amber-600 bg-amber-50 border-amber-200',
    }
  ]

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
            <span className="text-xs text-blue-700 font-medium bg-blue-50/70 px-2.5 py-0.5 rounded-full border border-blue-100 flex items-center gap-1.5">
              <span>💡 Önce büyük resmi kavrayalım; ardından her adımın detayına ve matematiğine ineceğiz.</span>
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            ViT Mimarisi: 5 Temel Adıma Genel Bakış</h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 08</span>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (6 Cols Animation, 6 Cols Stepper with Downward Arrows) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 my-auto z-10 items-stretch flex-1 py-3 min-h-0">

        {/* LEFT COLUMN: OFFICIAL GOOGLE ANIMATION (6 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-6 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/70 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Baştan Sona ViT Mimarisi (Pipeline)
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
              Dosovitskiy et al. (2021)
            </span>
          </div>

          {/* Large Image/GIF Container */}
          <div className="relative w-full flex-1 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 sm:p-3 overflow-hidden shadow-inner min-h-[260px]">
            <img
              src="/vit_overview_google.gif"
              alt="Vision Transformer Overall Architecture"
              className="max-h-full max-w-full object-contain filter contrast-[1.03]"
            />
          </div>

          {/* Flow Summary Pill */}
          <div className="mt-2.5 bg-white border border-slate-200/90 rounded-xl px-3 py-2 shrink-0 flex items-center justify-between shadow-xs">
            <div className="flex items-center gap-1.5 sm:gap-2 text-[11px] sm:text-xs text-slate-800 font-medium">
              <span className="font-bold text-blue-600">1. Görüntü</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
              <span className="font-bold text-indigo-600">2. Patch'ler</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
              <span className="font-bold text-purple-600">3. Transformer</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
              <span className="font-bold text-emerald-600">4. MLP Head</span>
              <ArrowRight className="w-3 h-3 text-slate-400" />
              <span className="font-bold text-amber-600">5. Sınıf Belirleme</span>
            </div>
            <span className="text-[10px] font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60 uppercase tracking-wider shrink-0">
              Genel Bakış
            </span>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 5 STEPS WITH STYLISH DOWNWARD ARROWS (6 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-6 bg-gradient-to-b from-slate-50/90 to-blue-50/20 rounded-2xl p-3 sm:p-3.5 border border-slate-200/90 shadow-sm flex flex-col justify-between h-full"
        >
          {steps.map((step, idx) => {
            const Icon = step.icon
            const isSelected = activeStep === idx

            return (
              <React.Fragment key={step.num}>
                {/* Step Card */}
                <div
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`relative z-10 bg-white rounded-xl p-2.5 sm:p-3 border transition-all duration-200 cursor-pointer shadow-xs flex items-center gap-3 ${isSelected
                    ? 'border-blue-400 shadow-md ring-2 ring-blue-500/10 scale-[1.01]'
                    : 'border-slate-200/80 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                >
                  {/* Step Icon Badge */}
                  <div className={`w-8 h-8 sm:w-9 sm:h-9 rounded-xl border flex items-center justify-center shrink-0 shadow-xs transition-transform ${step.accentColor} ${isSelected ? 'scale-105' : ''}`}>
                    <Icon className="w-4 h-4" />
                  </div>

                  {/* Step Details */}
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-1.5 mb-0.5">
                      <div className="flex items-center gap-1.5">
                        <span className="text-[10px] font-mono font-bold text-slate-400">
                          {step.num}.
                        </span>
                        <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat truncate">
                          {step.title}
                        </h4>
                      </div>
                      <span className="text-[10px] font-mono font-semibold text-slate-500 bg-slate-100/80 px-2 py-0.5 rounded border border-slate-200/60 shrink-0">
                        {step.badge}
                      </span>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-600 leading-snug">
                      {step.desc}
                    </p>
                  </div>

                  {/* Right Chevron indicator on active */}
                  <ChevronRight className={`w-4 h-4 shrink-0 transition-all ${isSelected ? 'text-blue-600 translate-x-0.5 opacity-100' : 'text-slate-300 opacity-0'}`} />
                </div>

                {/* STYLISH DOWNWARD CONNECTOR ARROW (Between Steps) */}
                {idx < steps.length - 1 && (
                  <div className="flex items-center justify-center my-0.5 z-20">
                    <div className="w-7 h-7 rounded-full bg-blue-50 border-2 border-blue-200 shadow-xs flex items-center justify-center text-blue-600 transition-transform hover:scale-110">
                      <ArrowDown className="w-4 h-4 stroke-[2.5]" />
                    </div>
                  </div>
                )}
              </React.Fragment>
            )
          })}
        </motion.div>

      </div>

    </div>
  )
}
