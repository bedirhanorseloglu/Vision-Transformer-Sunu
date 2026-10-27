import React from 'react'
import {
  motion
} from 'framer-motion'
import {
  Key,
  MapPin,
  ArrowRight,
  Layers,
  Plus,
  Cpu,
  Target
} from 'lucide-react'

export const Slide11_ClsAndPositionDetail: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-6 md:p-7 select-none">

      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />

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
            <span className="text-xs text-slate-400 font-mono">| BERT Tipi [CLS] Token ve 1D Konum Vektörleri</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            3. Adım Detayı: [CLS] Token ve Position Embeddings
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası & Referans */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Aman Arora (Fig-4)
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 11</span>
          </div>
        </div>
      </motion.div>

      {/* 2. HERO VISUAL: WIDE PANORAMA FIG-4 DIAGRAM */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50/80 rounded-2xl p-2.5 sm:p-3 border border-slate-200/90 shadow-sm flex flex-col justify-between z-10 my-auto"
      >
        {/* Crystal Clear Hero Image (Perfect Aspect Ratio, Zero Overflow) */}
        <div className="relative w-full h-[160px] sm:h-[185px] md:h-[200px] bg-white rounded-xl border border-slate-200/80 flex items-center justify-center p-2 sm:p-2.5 overflow-hidden shadow-inner group">
          <img
            src="/vit_fig4_cls_position_clean.png"
            alt="ViT Prepending [CLS] token and adding Positional Embeddings (Aman Arora Fig-4)"
            className="w-full h-full object-contain filter contrast-[1.03] transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>

        {/* Tensör Akış ve Toplam Bandı */}
        <div className="mt-2 bg-white rounded-xl py-1.5 px-3 border border-slate-200/80 shadow-xs flex flex-wrap items-center justify-between gap-2 text-xs">
          <div className="flex items-center gap-1.5 text-slate-600 font-medium">
            <Layers className="w-3.5 h-3.5 text-purple-600 shrink-0" />
            <span className="font-semibold text-slate-900 text-xs">Matematiksel Dönüşüm:</span>
          </div>

          <div className="flex items-center gap-2 font-mono text-[11px] sm:text-xs">
            <span className="bg-purple-50 text-purple-800 px-2 py-0.5 rounded font-bold border border-purple-200">
              [CLS] Token: (1 × 768)
            </span>
            <span className="text-slate-400 font-bold">+</span>
            <span className="bg-slate-100 text-slate-800 px-2 py-0.5 rounded font-semibold border border-slate-200">
              Patch Embeddings: (196 × 768)
            </span>
            <ArrowRight className="w-3 h-3 text-blue-500" />
            <span className="bg-blue-50 text-blue-800 px-2 py-0.5 rounded font-bold border border-blue-200">
              (197 × 768)
            </span>
            <span className="text-blue-600 font-bold">+</span>
            <span className="bg-indigo-50 text-indigo-800 px-2 py-0.5 rounded font-bold border border-indigo-200">
              Pos. Emb. (197 × 768)
            </span>
            <span className="text-slate-400 font-bold">=</span>
            <span className="bg-emerald-100 text-emerald-900 px-2.5 py-0.5 rounded font-extrabold border border-emerald-300 shadow-xs">
              Encoder Girişi (197 × 768)
            </span>
          </div>
        </div>
      </motion.div>

      {/* 3. BOTTOM: 3 CONCISE SPEAKER CARDS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 z-10 shrink-0">

        {/* KART 1: Position Embeddings (1D Konum Bilgisi) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="bg-blue-50/40 hover:bg-blue-50/70 rounded-2xl p-3.5 border border-blue-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-lg bg-blue-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                1
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                1D Position Embeddings
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
              Uzamsal Sıra
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
            Görseli patch'lere ayırdık ancak Transformer bunların resmin neresine ait olduğunu bilmez; tıpkı masaya karışık saçılmış bir <span className="font-semibold text-slate-900">yapboz</span> gibidir. Hangi parçanın nerede durduğunu öğretmek için her patch'e birer <span className="font-semibold text-slate-900">1D Position Embedding</span> eklenir; böylece yapboz anlamlı bir bütün haline gelir.
          </p>

          <div className="mt-2 bg-white/90 rounded-lg p-1.5 border border-blue-200/60 text-[11px] font-mono text-blue-900 font-medium flex items-center justify-between">
            <span>Matris Toplamı:</span>
            <strong>(197 × 768)</strong>
          </div>
        </motion.div>

        {/* KART 2: [CLS] Token (BERT Mantığı) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.13, ease: PUNCHY_EASE }}
          className="bg-purple-50/40 hover:bg-purple-50/70 rounded-2xl p-3.5 border border-purple-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-lg bg-purple-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                2
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                [CLS] Token
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">
              196 ➔ 197 × 768
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
            Derse (Encoder'a) <strong>bütün sınıf birlikte girer</strong>. Ders boyunca başkan (<span className="font-semibold text-purple-900">[CLS]</span>), 196 öğrencinin hepsiyle konuşup notlarını toplar. Dersin sonunda müdürün (<span className="font-semibold text-slate-900">MLP Head</span>) odasına sınıf adına <strong>sadece başkan ([CLS])</strong> gidip rapor verir.
          </p>

          <div className="mt-2 bg-white/90 rounded-lg p-1.5 border border-purple-200/60 text-[11px] font-mono text-purple-900 font-medium flex items-center justify-between">
            <span>Giriş / Çıkış:</span>
            <strong>Giriş: 197 ➔ Tahmin: Sadece [CLS]</strong>
          </div>
        </motion.div>

        {/* KART 3: Çıktı Temsili ve Sınıflandırma (z_L^0) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.16, ease: PUNCHY_EASE }}
          className="bg-emerald-50/40 hover:bg-emerald-50/70 rounded-2xl p-3.5 border border-emerald-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <div className="w-5 h-5 rounded-lg bg-emerald-600 text-white font-mono font-bold text-xs flex items-center justify-center shadow-xs">
                3
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                Encoder Çıktısı
              </h3>
            </div>
            <span className="text-[10px] font-mono font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
              Makaleden Alıntı
            </span>
          </div>

          <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
            Transformer Encoder çıkışındaki [CLS] token durumu, resmin nihai temsilidir. Hem ön eğitimde hem ince ayarda sınıflandırma başlığı doğrudan bu duruma bağlanır.
          </p>

          <div className="mt-2 bg-white/90 rounded-lg p-1.5 border border-emerald-200/60 text-[11px] font-mono text-emerald-900 font-medium flex items-center justify-between">
            <span>Bağlantı Noktası:</span>
            <strong>[CLS] Çıktısı ➔ MLP Head </strong>
          </div>
        </motion.div>

      </div>

    </div>
  )
}