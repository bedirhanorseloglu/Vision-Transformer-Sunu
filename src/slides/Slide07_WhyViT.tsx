import React from 'react'
import { motion } from 'framer-motion'
import {
  HelpCircle,
  Layers,
  Cpu,
  BookOpen,
  ArrowRight
} from 'lucide-react'

export const Slide07_WhyViT: React.FC = () => {
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
            <span className="text-xs text-slate-400 font-mono">| NLP Başarısını Bilgisayarlı Görüye Taşımak</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Neden Vision Transformer? (ViT'in Doğuşu)</h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 07</span>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (7 Cols Visual Animation, 5 Cols Philosophical/Motivational Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 my-auto z-10 items-stretch flex-1 py-3 min-h-0">

        {/* LEFT COLUMN: OFFICIAL GOOGLE ANIMATION (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-7 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Header */}
          <div className="flex items-center justify-between pb-2 mb-2 border-b border-slate-200/70 shrink-0">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-blue-600" />
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Büyük Fikir: Standart Transformer'ı Görüntüye Taşımak
              </h3>
            </div>

          </div>

          {/* Large Image/GIF Container */}
          <div className="relative w-full flex-1 bg-white rounded-xl border border-slate-200 flex items-center justify-center p-2 sm:p-3 overflow-hidden shadow-inner min-h-[240px]">
            <img
              src="/vit_overview_google.gif"
              alt="Vision Transformer Architecture Pipeline"
              className="max-h-full max-w-full object-contain filter contrast-[1.03]"
            />
          </div>

          {/* Core Question Caption */}
          <div className="mt-2.5 bg-white/90 border border-slate-200 rounded-xl p-3 shrink-0 flex items-center gap-2.5 shadow-xs">
            <HelpCircle className="w-4 h-4 text-blue-600 shrink-0" />
            <p className="text-xs sm:text-[13px] text-slate-800 font-medium leading-snug">
              <em>"Metinlerde devrim yaratan bir mimari, neden bilgisayarlı görüde de ana omurga olmasın?"</em>
            </p>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 3 MOTIVATIONAL / PHILOSOPHICAL CARDS (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between gap-3 h-full"
        >
          {/* Card 1: NLP'deki Büyük Başarı */}
          <div className="bg-blue-50/50 hover:bg-blue-50/80 rounded-2xl p-4 border border-blue-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-blue-100 text-blue-800">
                <BookOpen className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                1. NLP'deki Emsalsiz Standart
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Transformer mimarisi Doğal Dil İşleme'de (NLP) fiili standart haline geldi; 100 milyarlarca parametreye ulaştı ve veri büyüdükçe performansı doygunluğa uğramadı.
            </p>
          </div>

          {/* Card 2: Bilgisayarlı Görüdeki CNN Bağımlılığı */}
          <div className="bg-amber-50/50 hover:bg-amber-50/80 rounded-2xl p-4 border border-amber-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-amber-100 text-amber-800">
                <Layers className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                2. Görüntüdeki CNN Alışkanlığı
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Bilgisayarlı görüde ise ResNet gibi evrişimli (convolutional) ağlar hala tek seçenek görülüyordu. Attention kullanılsa bile sadece CNN'lerin içine yardımcı bir katman olarak ekleniyordu.
            </p>
          </div>

          {/* Card 3: Makalenin Cesur Sorusu ve Çıkışı */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-emerald-100 text-emerald-800">
                <Cpu className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                3. Makalenin Büyük İddiası
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Yazarlar şu soruyu sordu: <strong>"CNN'lere olan bu bağımlılık gerçekten şart mı?"</strong> Standart bir NLP Transformer'ını doğrudan görüntülere uygulayarak bu tabuyu yıktılar.
            </p>
          </div>

          {/* Takeaway Ribbon */}
          <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs shrink-0 flex items-center justify-between">
            <span className="text-xs font-semibold text-slate-800">
              💡 <em>"CNN'lere mahkum değiliz; saf Transformer doğrudan görebilir."</em>
            </span>
            <div className="flex items-center gap-1 text-[11px] font-mono text-blue-600 font-bold">
              <span>Devamı: Nasıl Yapıldı?</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  )
}
