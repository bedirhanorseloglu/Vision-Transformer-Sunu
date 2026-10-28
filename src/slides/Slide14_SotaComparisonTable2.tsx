import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Trophy,
  Cpu,
  ShieldAlert,
  TrendingUp,
  RotateCcw,
  Scale,
  CheckCircle2
} from 'lucide-react'

export const Slide14_SotaComparisonTable2: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [animKey, setAnimKey] = useState(0)

  const computeCostData = [
    {
      model: 'Noisy Student (EfficientNet-L2)',
      dataset: 'JFT-300M (Yarı-Denetimli CNN)',
      days: '12.3k',
      rawDays: '12.300 gün',
      percent: 100,
      badge: 'En Pahalı (Baz)',
      barColor: 'bg-gradient-to-r from-red-500 to-rose-600',
      badgeColor: 'bg-red-50 text-red-700 border-red-200',
      isVit: false,
    },
    {
      model: 'BiT-L (ResNet152×4)',
      dataset: 'JFT-300M (Denetimli Dev CNN)',
      days: '9.9k',
      rawDays: '9.900 gün',
      percent: 80.5,
      badge: 'Çok Yüksek Maliyet',
      barColor: 'bg-gradient-to-r from-amber-500 to-orange-500',
      badgeColor: 'bg-amber-50 text-amber-800 border-amber-200',
      isVit: false,
    },
    {
      model: 'ViT-H/14 (Huge)',
      dataset: 'JFT-300M (Vision Transformer)',
      days: '2.5k',
      rawDays: '2.500 gün',
      percent: 20.3,
      badge: '⚡ ~5× Daha Az Maliyet',
      barColor: 'bg-gradient-to-r from-emerald-500 to-teal-600',
      badgeColor: 'bg-emerald-50 text-emerald-800 border-emerald-300 font-bold',
      isVit: true,
    },
    {
      model: 'ViT-L/16 (Large)',
      dataset: 'JFT-300M (Vision Transformer)',
      days: '0.68k',
      rawDays: '680 gün',
      percent: 6.2,
      badge: '⚡ ~18× Daha Az Maliyet',
      barColor: 'bg-gradient-to-r from-blue-500 to-indigo-600',
      badgeColor: 'bg-blue-50 text-blue-800 border-blue-300 font-bold',
      isVit: true,
    },
    {
      model: 'ViT-L/16 (Halka Açık Veri)',
      dataset: 'ImageNet-21k (8 Çekirdek TPUv3 ≈ 30 Gün)',
      days: '0.23k',
      rawDays: '230 gün',
      percent: 3.2,
      badge: '🎯 Standart Bulut TPU ile ~30 Gün',
      barColor: 'bg-gradient-to-r from-purple-500 to-violet-600',
      badgeColor: 'bg-purple-50 text-purple-800 border-purple-300 font-bold',
      isVit: true,
    },
  ]

  const accuracyBenchmarks = [
    {
      name: 'ImageNet (Top-1)',
      vitH: 88.55,
      bitL: 87.54,
      noisy: 88.40,
      diff: '+1.01% vs BiT-L',
    },
    {
      name: 'ImageNet ReaL',
      vitH: 90.72,
      bitL: 90.54,
      noisy: 90.55,
      diff: '+0.18% SOTA Rekor',
    },
    {
      name: 'CIFAR-100',
      vitH: 94.55,
      bitL: 93.51,
      noisy: null,
      diff: '+1.04% vs BiT-L',
    },
    {
      name: 'VTAB (19 Görev)',
      vitH: 77.63,
      bitL: 76.28,
      noisy: null,
      diff: '+1.35% vs BiT-L',
    },
  ]

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
              | En Gelişmiş CNN Modelleriyle Kıyaslama (Tablo 2 &amp; Şekil 2)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            SOTA CNN vs. ViT: Doğruluk Rekorları ve Hesaplama Maliyeti
          </h2>
        </div>

        {/* Sağ Üst: Referans & Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Makale Bölüm 4.2 (Tablo 2)
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 14</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (Sol 7 Kolon Animasyonlu Grafikler, Sağ 5 Kolon 3 Açıklama Kartı) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch flex-1 py-2 min-h-0">

        {/* SOL: ANİMASYONLU GRAFİK PANELİ (7 Kolon) */}
        <motion.div
          key={animKey}
          initial={{ opacity: 0, x: -18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-7 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-4 border border-slate-200/90 shadow-xs h-full gap-3"
        >
          {/* ÜST GRAFİK: HESAPLAMA MALİYETİ (TPUv3-core-days) */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs flex flex-col justify-between flex-1">
            <div className="flex items-center justify-between pb-2 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200/60">
                  <Cpu className="w-4 h-4" />
                </span>
                <div>
                  <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 font-montserrat">
                    Ön Eğitim Hesaplama Maliyeti (TPUv3-core-days)
                  </h3>
                  <span className="text-[11px] text-slate-500 block">
                    Daha kısa çubuk = Daha az donanım ve enerji harcaması
                  </span>
                </div>
              </div>

              <button
                onClick={() => setAnimKey((prev) => prev + 1)}
                className="inline-flex items-center gap-1 text-[11px] font-semibold text-blue-700 bg-blue-50 hover:bg-blue-100 px-2.5 py-1 rounded-lg border border-blue-200 transition-colors cursor-pointer"
                title="Grafik Animasyonunu Tekrar Oynat"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Canlandır</span>
              </button>
            </div>

            {/* Animasyonlu Barlar */}
            <div className="space-y-2.5 my-auto py-1.5">
              {computeCostData.map((item, idx) => (
                <div key={item.model} className="space-y-1">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-1.5">
                      <span className={`font-bold ${item.isVit ? 'text-slate-950' : 'text-slate-700'}`}>
                        {item.model}
                      </span>
                      <span className="text-[10.5px] text-slate-400 hidden sm:inline">
                        • {item.dataset}
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className={`text-[10px] px-2 py-0.5 rounded-full border ${item.badgeColor}`}>
                        {item.badge}
                      </span>
                      <span className="font-mono font-extrabold text-slate-900 w-12 text-right">
                        {item.days}
                      </span>
                    </div>
                  </div>

                  {/* Bar Track */}
                  <div className="w-full h-3 bg-slate-100 rounded-full overflow-hidden border border-slate-200/70 p-0.5">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={{ width: `${item.percent}%` }}
                      transition={{
                        duration: 0.9,
                        delay: 0.15 + idx * 0.1,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`h-full rounded-full ${item.barColor} shadow-2xs`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ALT GRAFİK: 4 VERİ KÜMESİNDE DOĞRULUK REKORLARI (TABLO 2) */}
          <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 shadow-2xs">
            <div className="flex items-center justify-between pb-2 mb-2.5 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <span className="p-1.5 rounded-lg bg-amber-50 text-amber-600 border border-amber-200/60">
                  <Trophy className="w-4 h-4" />
                </span>
                <h3 className="text-xs sm:text-sm font-extrabold text-slate-900 font-montserrat">
                  Tablo 2: Kıyaslama Veri Kümelerinde Doğruluk Oranları (%)
                </h3>
              </div>

              <div className="flex items-center gap-3 text-[11px] font-semibold">
                <span className="inline-flex items-center gap-1 text-emerald-700">
                  <span className="w-2.5 h-2.5 rounded-sm bg-emerald-500" />
                  ViT-H/14 (JFT)
                </span>
                <span className="inline-flex items-center gap-1 text-amber-700">
                  <span className="w-2.5 h-2.5 rounded-sm bg-amber-500" />
                  BiT-L (CNN)
                </span>
                <span className="inline-flex items-center gap-1 text-rose-700">
                  <span className="w-2.5 h-2.5 rounded-sm bg-rose-500" />
                  Noisy Student
                </span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {accuracyBenchmarks.map((bench, idx) => (
                <motion.div
                  key={bench.name}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.25 + idx * 0.08, ease: PUNCHY_EASE }}
                  className="bg-slate-50/90 rounded-xl p-2.5 border border-slate-200/80 flex flex-col justify-between"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[11px] font-extrabold text-slate-800 font-montserrat">
                      {bench.name}
                    </span>
                  </div>

                  <div className="space-y-1 text-[11px] font-mono">
                    <div className="flex items-center justify-between bg-emerald-50/90 text-emerald-900 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                      <span>ViT-H:</span>
                      <span>%{bench.vitH}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-600 px-1.5">
                      <span>BiT-L:</span>
                      <span>%{bench.bitL}</span>
                    </div>
                    {bench.noisy ? (
                      <div className="flex items-center justify-between text-slate-500 px-1.5">
                        <span>Noisy:</span>
                        <span>%{bench.noisy}</span>
                      </div>
                    ) : (
                      <div className="flex items-center justify-between text-slate-400 px-1.5">
                        <span>Noisy:</span>
                        <span>—</span>
                      </div>
                    )}
                  </div>

                  <div className="mt-1.5 pt-1 border-t border-slate-200/70 text-[10px] font-bold text-emerald-700 flex items-center justify-between">
                    <span>🏆 ViT Lider</span>
                    <span>{bench.diff}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* SAĞ: 3 NET AÇIKLAMA KARTI (5 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: 18 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between gap-3 h-full"
        >
          {/* Kart 1: Kıyaslanan Dev CNN Modelleri */}
          <div className="bg-blue-50/50 hover:bg-blue-50/70 rounded-2xl p-3.5 sm:p-4 border border-blue-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-blue-100 text-blue-800">
                    <ShieldAlert className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    1. Kıyaslanan Dev CNN Rakipleri
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
                  Dönemin Zirvesi
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                ViT modelleri, o dönem bilgisayarlı görü dünyasını domine eden en güçlü iki dev CNN mimarisiyle kıyaslanmıştır:
                denetimli eğitilen <strong>BiT-L (ResNet152×4)</strong> ve yarı-denetimli (<em>semi-supervised</em>) eğitilen <strong>Noisy Student (EfficientNet-L2)</strong>.
              </p>
            </div>
            <div className="mt-2 bg-white/90 rounded-lg py-1 px-2.5 border border-blue-100 text-[11px] font-mono text-slate-700 flex items-center justify-between">
              <span>CNN Şampiyonları:</span>
              <strong className="text-blue-800">ResNet152×4 &amp; EfficientNet-L2</strong>
            </div>
          </div>

          {/* Kart 2: Doğruluk Rekorları */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/70 rounded-2xl p-3.5 sm:p-4 border border-emerald-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
                    <TrendingUp className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    2. Tüm Görevlerde Doğruluk Rekoru
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                  Tablo 2 Sonucu
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <code>JFT-300M</code> üzerinde pre-training yapılan <strong>ViT-H/14</strong>; <strong>ImageNet (%88.55)</strong>, <strong>ImageNet ReaL (%90.72)</strong>, <strong>CIFAR-100 (%94.55)</strong> ve 19 farklı görevden oluşan <strong>VTAB (%77.63)</strong> dahil tüm kıyaslamalarda BiT-L ve Noisy Student&apos;ı geride bırakmıştır.
              </p>
            </div>
            <div className="mt-2 bg-white/90 rounded-lg py-1 px-2.5 border border-emerald-100 text-[11px] font-mono text-slate-700 flex items-center justify-between">
              <span>Yeni SOTA Lideri:</span>
              <strong className="text-emerald-800">ViT-H/14 (Tüm Kulvarlarda 1.)</strong>
            </div>
          </div>

          {/* Kart 3: Hesaplama Maliyeti (TPUv3-core-days) */}
          <div className="bg-purple-50/50 hover:bg-purple-50/70 rounded-2xl p-3.5 sm:p-4 border border-purple-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-purple-100 text-purple-800">
                    <CheckCircle2 className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    3. Çarpıcı Maliyet Tasarrufu (TPU Günü)
                  </h3>
                </div>
                <span className="text-[10px] font-semibold text-purple-800 bg-white px-2 py-0.5 rounded-full border border-purple-200">
                  4–18× Daha Verimli
                </span>
              </div>
              <p className="text-xs text-slate-700 leading-relaxed">
                <strong>BiT-L</strong> <code>9.9k</code> ve <strong>Noisy Student</strong> <code>12.3k</code> TPUv3 çekirdek-günü sürerken; <strong>ViT-H/14</strong> sadece <strong><code>2.5k</code></strong>, <strong>ViT-L/16</strong> ise <strong><code>0.68k</code></strong> günde eğitilmiştir. Halka açık <em>ImageNet-21k</em> ile eğitilen <strong>ViT-L/16</strong> ise sadece <strong><code>0.23k</code> gün</strong> (8 çekirdekli standart bulut TPUv3 ile ~30 gün) harcamıştır.
              </p>
            </div>
            <div className="mt-2 bg-white/90 rounded-lg py-1 px-2.5 border border-purple-100 text-[11px] font-mono text-slate-700 flex items-center justify-between">
              <span>Eğitim Bütçesi:</span>
              <strong className="text-purple-800">12.300 Gün (CNN) ➔ 680–2500 Gün (ViT)</strong>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 3. BOTTOM: SUMMARY TAKEAWAY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.14, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50 rounded-xl py-2 px-4 border border-slate-200 shadow-xs flex items-center justify-between gap-3 shrink-0 text-xs"
      >
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-slate-700 text-xs sm:text-sm">
            <strong className="text-slate-900 font-semibold">Tablo 2 Özeti:</strong> Yeterli ön eğitim verisi sağlandığında Vision Transformer, en güçlü CNN&apos;leri hem doğrulukta geçer hem de <strong>%75 ila %94 daha az hesaplama kaynağı (TPU çekirdek-günü)</strong> harcar.
          </span>
        </div>
      </motion.div>

    </div>
  )
}
