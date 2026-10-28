import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Trophy,
  Cpu,
  ShieldAlert,
  TrendingUp,
  RotateCcw,
  CheckCircle2
} from 'lucide-react'

export const Slide14_SotaComparisonTable2: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [animKey, setAnimKey] = useState(0)

  const computeCostData = [
    {
      model: 'Noisy Student (EfficientNet-L2 • CNN)',
      tag: 'CNN',
      days: '12.3k gün',
      percent: 100,
      badge: 'En Pahalı CNN',
      barColor: 'bg-gradient-to-r from-rose-500 to-red-600',
      badgeColor: 'bg-rose-50 text-rose-700 border-rose-200 font-semibold',
    },
    {
      model: 'BiT-L (ResNet152×4 • CNN)',
      tag: 'CNN',
      days: '9.9k gün',
      percent: 80.5,
      badge: 'Dev CNN',
      barColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200 font-semibold',
    },
    {
      model: 'ViT-H/14 (JFT-300M)',
      tag: 'ViT',
      days: '2.5k gün',
      percent: 20.3,
      badge: '⚡ 5× Daha Ucuz',
      barColor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold',
    },
    {
      model: 'ViT-L/16 (JFT-300M)',
      tag: 'ViT',
      days: '0.68k gün',
      percent: 6.5,
      badge: '⚡ 18× Daha Ucuz',
      barColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-300 font-bold',
    },
    {
      model: 'ViT-L/16 (ImageNet-21k)',
      tag: 'ViT',
      days: '0.23k gün',
      percent: 3.5,
      badge: '🎯 ~30 Gün (Bulut TPU)',
      barColor: 'bg-gradient-to-r from-purple-500 to-violet-600',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-300 font-bold',
    },
  ]

  const accuracyData = [
    {
      dataset: 'ImageNet',
      vit: 88.55,
      bit: 87.54,
      noisy: 88.40,
      minScale: 85,
      maxScale: 90,
    },
    {
      dataset: 'ImageNet ReaL',
      vit: 90.72,
      bit: 90.54,
      noisy: 90.55,
      minScale: 88,
      maxScale: 92,
    },
    {
      dataset: 'CIFAR-100',
      vit: 94.55,
      bit: 93.51,
      noisy: null,
      minScale: 91,
      maxScale: 96,
    },
    {
      dataset: 'VTAB (19 Görev)',
      vit: 77.63,
      bit: 76.28,
      noisy: null,
      minScale: 73,
      maxScale: 79,
    },
  ]

  const getBarWidth = (val: number, min: number, max: number) =>
    Math.min(100, Math.max(15, ((val - min) / (max - min)) * 100))

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-8 select-none font-sans">

      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2.5 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 3: VISION TRANSFORMER (ViT)
            </span>
            <span className="text-xs text-slate-400 font-mono">
              | En Gelişmiş Modellerle Karşılaştırma (Tablo 2)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            SOTA CNN vs. ViT: Performans ve Hesaplama Maliyeti
          </h2>
        </div>

        <div className="flex items-center gap-2">
          <div className="hidden sm:flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 14</span>
          </div>
        </div>
      </motion.div>

      {/* 2. CENTER HERO: YAN YANA 2 BÜYÜK VE FERAH ANİMASYONLU GRAFİK */}
      <div
        key={animKey}
        className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch flex-1 py-3 min-h-0"
      >
        {/* SOL GRAFİK: HESAPLAMA MALİYETİ (6 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-6 bg-slate-50/70 rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between"
        >
          <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                  Eğitim Maliyeti (TPUv3 Çekirdek-Günü)
                </h3>
                <span className="text-xs text-slate-500">
                  Daha kısa çubuk = Daha az donanım süresi
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-4 my-auto py-2">
            {computeCostData.map((item, idx) => (
              <div key={item.model} className="space-y-1.5">
                <div className="flex items-center justify-between text-xs sm:text-sm">
                  <div className="flex items-center gap-2">
                    <span
                      className={`text-[10px] font-extrabold px-2 py-0.5 rounded border ${
                        item.tag === 'ViT'
                          ? 'bg-emerald-100 text-emerald-800 border-emerald-300'
                          : 'bg-rose-100 text-rose-800 border-rose-300'
                      }`}
                    >
                      {item.tag}
                    </span>
                    <span className="font-bold text-slate-900">{item.model}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className={`text-[11px] px-2.5 py-0.5 rounded-full border ${item.badgeColor}`}>
                      {item.badge}
                    </span>
                    <span className="font-mono font-extrabold text-slate-900 w-20 text-right">
                      {item.days}
                    </span>
                  </div>
                </div>

                <div className="w-full h-4 bg-white rounded-full overflow-hidden border border-slate-200/90 p-0.5 shadow-2xs">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percent}%` }}
                    transition={{
                      duration: 0.9,
                      delay: 0.15 + idx * 0.1,
                      ease: PUNCHY_EASE,
                    }}
                    className={`h-full rounded-full ${item.barColor}`}
                  />
                </div>
              </div>
            ))}
      </div>
    </motion.div>

        {/* SAĞ GRAFİK: DOĞRULUK KARŞILAŞTIRMASI (6 Kolon) */ }
  <motion.div
    initial={{ opacity: 0, x: 15 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.28, delay: 0.08, ease: PUNCHY_EASE }}
    className="lg:col-span-6 bg-slate-50/70 rounded-2xl p-5 border border-slate-200/90 shadow-xs flex flex-col justify-between"
  >
    <div className="flex items-center justify-between pb-3 border-b border-slate-200/80">
      <div className="flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-xl bg-amber-100 text-amber-700 flex items-center justify-center">
          <Trophy className="w-4 h-4" />
        </div>
        <div>
          <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
            Doğruluk Rekorları (Tablo 2 — %)
          </h3>
          <span className="text-xs text-slate-500">
            JFT-300M ön eğitimi sonrası hedef veri kümeleri
          </span>
        </div>
      </div>

          <div className="flex items-center gap-2.5 text-[11px] font-bold">
            <span className="inline-flex items-center gap-1 text-emerald-700">
              <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
              ViT-H/14
            </span>
              <span className="inline-flex items-center gap-1 text-amber-700">
                <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
                BiT-L (CNN)
              </span>
                <span className="inline-flex items-center gap-1 text-rose-700">
                  <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />
                  Noisy Student (CNN)
                </span>
              </div>
          </div>

          <div className="grid grid-cols-2 gap-3.5 my-auto py-1">
            {accuracyData.map((item, idx) => (
              <div
                key={item.dataset}
                className="bg-white rounded-xl p-3.5 border border-slate-200/80 shadow-2xs flex flex-col justify-between gap-2.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs sm:text-sm font-extrabold text-slate-900 font-montserrat">
                    {item.dataset}
                  </span>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200">
                    🏆 ViT Lider
                  </span>
                </div>

                <div className="space-y-2 text-xs font-mono">
                  {/* ViT-H/14 Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between font-bold text-emerald-800">
                      <span>ViT-H/14 (ViT)</span>
                      <span>%{item.vit}</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${getBarWidth(item.vit, item.minScale, item.maxScale)}%`,
                        }}
                        transition={{ duration: 0.85, delay: 0.2 + idx * 0.1, ease: PUNCHY_EASE }}
                        className="h-full bg-emerald-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* BiT-L Bar */}
                  <div className="space-y-1">
                    <div className="flex justify-between text-slate-600">
                      <span>BiT-L (CNN)</span>
                      <span>%{item.bit}</span>
                    </div>
                    <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{
                          width: `${getBarWidth(item.bit, item.minScale, item.maxScale)}%`,
                        }}
                        transition={{ duration: 0.85, delay: 0.28 + idx * 0.1, ease: PUNCHY_EASE }}
                        className="h-full bg-amber-500 rounded-full"
                      />
                    </div>
                  </div>

                  {/* Noisy Student Bar (if available) */}
                  {item.noisy && (
                    <div className="space-y-1">
                      <div className="flex justify-between text-slate-500">
                        <span>Noisy Student (CNN)</span>
                        <span>%{item.noisy}</span>
                      </div>
                      <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{
                            width: `${getBarWidth(item.noisy, item.minScale, item.maxScale)}%`,
                          }}
                          transition={{ duration: 0.85, delay: 0.35 + idx * 0.1, ease: PUNCHY_EASE }}
                          className="h-full bg-rose-500 rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* 3. BOTTOM: 3 TEK CÜMLELİK HAP NOT KARTI */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 z-10 shrink-0">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.1, ease: PUNCHY_EASE }}
          className="bg-blue-50/50 rounded-2xl p-3.5 border border-blue-200/80 flex items-start gap-3"
        >
          <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <ShieldAlert className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat mb-0.5">
              1. Kıyaslanan Dev CNN Modelleri
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Dönemin en güçlü iki <strong>CNN</strong> modeli olan <strong>BiT-L (ResNet152×4)</strong> ve <strong>Noisy Student (EfficientNet-L2)</strong> ile yarışılmıştır.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.14, ease: PUNCHY_EASE }}
          className="bg-emerald-50/50 rounded-2xl p-3.5 border border-emerald-200/80 flex items-start gap-3"
        >
          <div className="w-7 h-7 rounded-lg bg-emerald-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat mb-0.5">
              2. Tüm Kulvarlarda Liderlik
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              <strong>ViT-H/14</strong>; ImageNet, ReaL, CIFAR-100 ve VTAB dahil tüm görevlerde her iki dev <strong>CNN</strong> modelini de geride bırakmıştır.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.25, delay: 0.18, ease: PUNCHY_EASE }}
          className="bg-purple-50/50 rounded-2xl p-3.5 border border-purple-200/80 flex items-start gap-3"
        >
          <div className="w-7 h-7 rounded-lg bg-purple-600 text-white flex items-center justify-center shrink-0 mt-0.5">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat mb-0.5">
              3. 5× ila 18× Daha Az Maliyet
            </h4>
            <p className="text-xs text-slate-700 leading-relaxed">
              Dev <strong>CNN</strong>&apos;ler <strong>9.9k–12.3k</strong> TPU günü harcarken; ViT modelleri sadece <strong>0.23k–2.5k</strong> günde eğitilerek büyük tasarruf sağlamıştır.
            </p>
          </div>
        </motion.div>
      </div>

    </div>
    )
}
