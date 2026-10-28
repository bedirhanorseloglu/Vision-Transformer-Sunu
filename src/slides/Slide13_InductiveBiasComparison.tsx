import React from 'react'
import { motion } from 'framer-motion'
import {
  Compass,
  Layers,
  Network,
  Scale
} from 'lucide-react'

export const Slide13_InductiveBiasComparison: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-9 select-none">

      {/* Background soft ambient accents */}
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
              BÖLÜM 3: VISION TRANSFORMER (ViT)
            </span>
            <span className="text-xs text-slate-400 font-mono">
              | Inductive Bias (Mimari Ön Varsayım) & Rehberlik
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            CNN vs ViT: Inductive Bias ve Rehberlik Farkı
          </h2>
        </div>

        {/* Sağ Üst: Referans & Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Makale Bölüm 3.1 & 4.3
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 13</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (7 Kolon Diyagram, 5 Kolon Kartlar) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 my-auto z-10 items-stretch flex-1 py-3 min-h-0">

        {/* SOL: CNN INDUCTIVE BIAS DİYAGRAMI (7 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-7 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Görsel Kutusu */}
          <div className="relative w-full flex-1 bg-white rounded-xl border border-slate-200/80 overflow-hidden flex items-center justify-center p-3 min-h-[260px]">
            <img
              src="/cnn_inductive_bias.png"
              alt="CNN High Inductive Bias - Local to Global Receptive Field"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>
        </motion.div>

        {/* SAĞ: AÇIKLAYICI VE SOMUT KARŞILAŞTIRMA KARTLARI (5 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between gap-3 h-full"
        >
          {/* Kart 1: CNN - Yüksek Inductive Bias */}
          <div className="bg-blue-50/50 hover:bg-blue-50/70 rounded-2xl p-4 border border-blue-200/70 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="p-1 rounded-lg bg-blue-100 text-blue-800">
                  <Layers className="w-4 h-4" />
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                  CNN: Yüksek Inductive Bias (Katı Rehberlik)
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>İnsan Eliyle Rehberlik:</strong> Modele baştan <em>"Görüntüyü anlamak için önce sadece yan yana piksellere (kenar/çizgi) bakacaksın"</em> kuralı dikte edilir.
                </p>
                <p>
                  <strong>Kademeli Görüş (Koniler):</strong> İlk katmanlar resmi küçük bir koni deliğinden görür; katman katman birleştikçe ancak en son katmanda büyük resmi kavrar.
                </p>
              </div>
            </div>

            <div className="mt-2.5 bg-white/90 rounded-lg py-1 px-2.5 border border-blue-100 text-[11px] font-mono text-slate-700 flex items-center justify-between">
              <span>Modele Verilen Rehberlik:</span>
              <strong className="text-blue-700 font-bold">Maksimum (Yol Haritası Baştan Çizili)</strong>
            </div>
          </div>

          {/* Kart 2: ViT - Düşük Inductive Bias */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/70 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center gap-2 mb-1.5">
                <span className="p-1 rounded-lg bg-emerald-100 text-emerald-800">
                  <Network className="w-4 h-4" />
                </span>
                <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                  ViT: Düşük Inductive Bias (Serbest Öğrenme)
                </h3>
              </div>

              <div className="space-y-2 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p>
                  <strong>Sıfır Kısıt (Özgür Bakış):</strong> Modele <em>"önce yerel bak"</em> dayatması yapılmaz. Self-Attention ile 1. katmanda bile sol üstteki bir patch, sağ alttakiyle doğrudan konuşabilir.
                </p>
                <p>
                  <strong>Konumu Veriden Öğrenir:</strong> Hangi parçanın nerede olduğu (Position Embedding) bile baştan dikte edilmez; model 2D uzamsal dünyayı tamamen sıfırdan keşfeder.
                </p>
                <p>
                  ViT'in görüntüye özgü inductive bias'ı CNN'den çok daha azdır ama "sıfırdır" denemez.
                </p>
              </div>
            </div>

            <div className="mt-2.5 bg-white/90 rounded-lg py-1 px-2.5 border border-emerald-100 text-[11px] font-mono text-slate-700 flex items-center justify-between">
              <span>Modele Verilen Rehberlik:</span>
              <strong className="text-emerald-800 font-bold">Minimum (Tüm İlişkileri Veriden Keşfeder)</strong>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 3. BOTTOM: SUMMARY TAKEAWAY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.12, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50 rounded-xl py-2 px-4 border border-slate-200 shadow-xs flex items-center justify-between gap-3 shrink-0 text-xs"
      >
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-slate-700 text-xs sm:text-sm">
            <strong className="text-slate-900 font-semibold">Inductive Bias İkilemi:</strong> ViT bu hazır kurallardan (<em>inductive bias</em>) yoksun olduğu için <strong>küçük/orta veride (ImageNet) iyi genelleme yapamaz ve CNN'in gerisinde kalır (Dezavantaj)</strong>; ancak <strong>büyük ölçekli veride (14M-300M1) katı kurallarla kısıtlanmadığı için çok daha esnek öğrenerek CNN'leri geçer (Avantaj)</strong>.
          </span>
        </div>
      </motion.div>

    </div>
  )
}
