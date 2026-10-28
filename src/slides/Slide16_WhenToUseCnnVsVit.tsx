import React from 'react'
import { motion } from 'framer-motion'
import {
  Layers,
  Network,
  Scale,
  Zap
} from 'lucide-react'

export const Slide16_WhenToUseCnnVsVit: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-8 select-none">

      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2.5 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-sans font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 4: DENEYSEL ANALİZ & PRATİK SEÇİM
            </span>
            <span className="text-xs text-slate-400 font-sans">
              | Hangi Senaryoda Hangi Mimari Tercih Edilmeli?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Hangi Veride CNN, Hangi Veride ViT?
          </h2>
        </div>

        {/* Sağ Üst: Referans & Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-sans text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Makale Bölüm 4.2 & 4.3
          </span>
          <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 15</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (Sol 7 Kolon GIF Görseli, Sağ 5 Kolon 3 Net Karar Kartı) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-6 my-auto z-10 items-stretch flex-1 py-2 min-h-0">

        {/* SOL: GÖRSEL (7 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-7 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Görsel Kutusu */}
          <div className="relative w-full flex-1 bg-white rounded-xl border border-slate-200/80 overflow-hidden flex items-center justify-center p-2 min-h-[260px]">
            <img
              src="/cnn_vs_vit_scaling.gif"
              alt="Convolution of CNN vs Attention of Vision Transformer"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />
          </div>


        </motion.div>

        {/* SAĞ: HANGİ DURUMDA NE KULLANILIR? (5 Kolon - 3 Net Kart) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between gap-2.5 sm:gap-3 h-full"
        >
          {/* Kart 1: Küçük ve Orta Veri Kümeleri */}
          <div className="bg-blue-50/50 hover:bg-blue-50/70 rounded-2xl p-3.5 border border-blue-200/70 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-blue-100 text-blue-800">
                    <Layers className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                    1. Küçük & Orta Veri (&lt; 10M Görsel)
                  </h3>
                </div>
                <span className="text-[10px] font-sans font-bold text-blue-700 bg-white px-2 py-0.5 rounded-full border border-blue-200">
                  CNN Tercih Edilmeli
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Veriniz kısıtlıysa (ImageNet-1K gibi), <strong>CNN (ResNet)</strong> daha başarılıdır. CNN'in doğuştan gelen <em>yerel arama kuralı</em> az veride rehber olur. ViT ise bu kurallardan yoksun olduğu için az veriyi ezberler (overfitting).
              </p>
            </div>
            <div className="mt-2 bg-white/90 rounded-lg py-1 px-2.5 border border-blue-100 text-[11px] font-sans text-slate-700 flex items-center justify-between">
              <span>Makale Sonucu:</span>
              <strong className="text-blue-700 font-bold">ImageNet-1K'da ResNet Öndedir</strong>
            </div>
          </div>

          {/* Kart 2: Devasa Büyük Veri Kümeleri */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/70 rounded-2xl p-3.5 border border-emerald-200/70 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-emerald-100 text-emerald-800">
                    <Network className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                    2. Devasa Büyük Veri (&gt; 100M-300M)
                  </h3>
                </div>
                <span className="text-[10px] font-sans font-bold text-emerald-800 bg-white px-2 py-0.5 rounded-full border border-emerald-200">
                  ViT Tercih Edilmeli
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Elinizde JFT-300M gibi yüz milyonlarca görsel varsa, <strong>Vision Transformer</strong> seçilmelidir. CNN yerel filtreleri yüzünden bir süre sonra doygunluğa (tavana) ulaşır; ViT ise küresel dikkatiyle sınırsızca öğrenir ve rekor kırar.
              </p>
            </div>
            <div className="mt-2 bg-white/90 rounded-lg py-1 px-2.5 border border-emerald-100 text-[11px] font-sans text-slate-700 flex items-center justify-between">
              <span>Makale Sonucu:</span>
              <strong className="text-emerald-800 font-bold">JFT-300M'de ViT SOTA (%88.55)</strong>
            </div>
          </div>

          {/* Kart 3: Pratikteki Altın Kural (İnce Ayar) */}
          <div className="bg-purple-50/50 hover:bg-purple-50/70 rounded-2xl p-3.5 border border-purple-200/70 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-purple-100 text-purple-800">
                    <Zap className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                    3. Pratikteki Çözüm: Fine-Tuning
                  </h3>
                </div>
                <span className="text-[10px] font-sans font-bold text-purple-800 bg-white px-2 py-0.5 rounded-full border border-purple-200">
                  En Yaygın Kullanım
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Kimsenin sıfırdan 300 milyon resim eğitecek TPU bütçesi yoktur. Bu yüzden pratikte <strong>büyük veride önceden eğitilmiş (Pre-trained) ViT alınır</strong> ve kendi küçük hedef verimize <strong>ince ayar (Fine-tuning)</strong> yapılır.
              </p>
            </div>
            <div className="mt-2 bg-white/90 rounded-lg py-1 px-2.5 border border-purple-100 text-[11px] font-sans text-purple-900 flex items-center justify-between">
              <span>En İyi Pratik:</span>
              <strong className="text-purple-800 font-bold">Pre-trained ViT + Fine-Tuning</strong>
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
          <span className="text-slate-700 text-xs sm:text-sm text-justify">
            <strong className="text-slate-900 font-semibold">Temel Çıkarım:</strong> Küçük veride CNN'in mimari varsayımları hayat kurtarır (ViT overfit olur); devasa veride ise ViT sınır tanımaz. Gerçek hayatta ise hazır eğitilmiş ViT alınıp hedef veriye ince ayar (fine-tuning) yapılır.
          </span>
        </div>
      </motion.div>

    </div>
  )
}
