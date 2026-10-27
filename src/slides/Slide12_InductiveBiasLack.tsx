import React from 'react'
import { motion } from 'framer-motion'
import { 
  AlertTriangle, 
  Cpu, 
  Layers, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Scale,
  Zap,
  Sliders,
  Network
} from 'lucide-react'

export const Slide12_InductiveBiasLack: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-4 sm:p-5 md:p-6 select-none">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-red-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-amber-700 bg-amber-50 px-2.5 py-0.5 rounded-full border border-amber-200/60">
              BÖLÜM 3: VISION TRANSFORMER (ViT)
            </span>
            <span className="text-[11px] text-slate-400 font-mono">| Karesel Maliyet O(N²) & Inductive Bias Yoksunluğu</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            ViT'in İki Temel Kısıtı: Karesel Maliyet ve Inductive Bias Eksikliği
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Makale Bölüm 1 & 3.1
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-700 bg-amber-50 px-3 py-1.5 rounded-full border border-amber-200">
            <span className="w-2 h-2 rounded-full bg-amber-600 animate-pulse" />
            <span>Slayt 12</span>
          </div>
        </div>
      </motion.div>

      {/* 2. CENTER: 2 EQUAL COLUMNS (Left: O(N²), Global Pixel Attention & 16x16, Right: Inductive Bias & Locality) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 sm:gap-4 my-auto z-10 flex-1 py-1 items-stretch min-h-0">
        
        {/* SOL KOLON: HESAPLAMA KISITI - O(N²) VE NEDEN 16x16? */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="bg-red-50/30 hover:bg-red-50/50 rounded-2xl p-3 sm:p-3.5 border border-red-200/70 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="space-y-2">
            {/* Header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-red-200/60">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-red-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  <Cpu className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    1. Hesaplama Kısıtı: O(N²) Karesel Maliyet
                  </h3>
                  <span className="text-[10px] font-mono text-red-700 font-semibold">
                    Her Pikselin Diğer Tüm Piksellerle İlişki Kurma Çabası
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-mono font-bold text-red-800 bg-red-100/80 px-2 py-0.5 rounded">
                Quadratic Explosion
              </span>
            </div>

            {/* Piksel Düzeyi İlişki Açıklaması */}
            <div className="bg-red-100/40 rounded-xl p-2 border border-red-200/70 text-[11px] text-slate-700 leading-snug">
              <div className="flex items-start gap-1.5">
                <Network className="w-3.5 h-3.5 text-red-600 mt-0.5 shrink-0" />
                <p>
                  <strong className="text-red-950 font-semibold">Her Pikselle İlişki Kurma Çabası:</strong> Self-Attention her girdiyi diğer tüm $N-1$ girdiyle karşılaştırır. Resim doğrudan piksel piksel verilseydi, her bir piksel diğer <strong>50.175 pikselle</strong> tek tek ilişki kurmaya çalışacak ve donanımı kilitleyecekti.
                </p>
              </div>
            </div>

            {/* Karşılaştırma Tablosu */}
            <div className="bg-white rounded-xl p-2 border border-red-200/80 shadow-2xs">
              <div className="grid grid-cols-3 text-[10px] font-mono pb-1 border-b border-slate-100 text-slate-500 font-bold">
                <span>Girdi Yaklaşımı</span>
                <span className="text-center">Token Sayısı (N)</span>
                <span className="text-right">Attention İlişkisi (≈ N²)</span>
              </div>
              <div className="grid grid-cols-3 text-[11px] font-mono py-1 border-b border-slate-100 items-center text-red-900">
                <span className="font-semibold text-[10px]">Her Piksel (1×1)</span>
                <span className="text-center font-bold">224×224 = 50.176</span>
                <span className="text-right font-bold text-red-600">≈ 2.5 Milyar ⚠️</span>
              </div>
              <div className="grid grid-cols-3 text-[11px] font-mono pt-1 items-center text-emerald-900">
                <span className="font-semibold text-[10px]">16×16 Patch'ler</span>
                <span className="text-center font-bold">14×14 = 196</span>
                <span className="text-right font-bold text-emerald-600">≈ 38.416 ✅</span>
              </div>
            </div>

            {/* 16x16 Neden Seçildi? 4 Temel Boyut */}
            <div>
              <div className="text-[10px] font-mono font-bold text-slate-600 mb-1 flex items-center justify-between">
                <span>16×16 Seçiminin 4 Temel Nedeni:</span>
                <span className="text-red-700 bg-red-50 px-1.5 py-0.2 rounded border border-red-200 font-semibold">65.000 Kat Tasarruf</span>
              </div>
              <div className="grid grid-cols-2 gap-1.5 text-[10px]">
                <div className="bg-white/90 rounded-lg p-1.5 border border-red-100 shadow-2xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1 mb-0.5">
                    <Zap className="w-3 h-3 text-red-600" />
                    Hesaplama Verimliliği
                  </div>
                  <p className="text-slate-600 leading-tight text-[9.5px]">
                    Token sayısını 256 kat azaltarak karesel attention patlamasını önler.
                  </p>
                </div>

                <div className="bg-white/90 rounded-lg p-1.5 border border-red-100 shadow-2xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1 mb-0.5">
                    <Layers className="w-3 h-3 text-red-600" />
                    Yerel Örüntü Yakalama
                  </div>
                  <p className="text-slate-600 leading-tight text-[9.5px]">
                    16×16 tek piksel gibi kör değildir; kenar, köşe ve doku bilgisi barındırır.
                  </p>
                </div>

                <div className="bg-white/90 rounded-lg p-1.5 border border-red-100 shadow-2xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1 mb-0.5">
                    <Scale className="w-3 h-3 text-red-600" />
                    Hassas Denge Noktası
                  </div>
                  <p className="text-slate-600 leading-tight text-[9.5px]">
                    Çok küçükse maliyet uçar; çok büyükse görüntüdeki ince ayrıntılar kaybolur.
                  </p>
                </div>

                <div className="bg-white/90 rounded-lg p-1.5 border border-red-100 shadow-2xs">
                  <div className="font-bold text-slate-900 flex items-center gap-1 mb-0.5">
                    <Sliders className="w-3 h-3 text-red-600" />
                    Tasarım Hiperparametresi
                  </div>
                  <p className="text-slate-600 leading-tight text-[9.5px]">
                    Kural değildir; ViT-14 (daha detaylı) veya ViT-32 (daha hızlı) de vardır.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-1.5 bg-red-100/70 rounded-lg p-1.5 border border-red-200 text-[10.5px] text-red-950 font-medium flex items-center justify-between">
            <span>Piksel düzeyinde global all-to-all dikkat:</span>
            <strong className="text-red-900 font-bold">Gerçekçi donanımda çalışamaz!</strong>
          </div>
        </motion.div>

        {/* SAĞ KOLON: ÖĞRENME KISITI - INDUCTIVE BIAS YOKSUNLUĞU */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.08, ease: PUNCHY_EASE }}
          className="bg-amber-50/30 hover:bg-amber-50/50 rounded-2xl p-3 sm:p-3.5 border border-amber-200/70 shadow-xs flex flex-col justify-between transition-all"
        >
          <div className="space-y-2">
            {/* Header */}
            <div className="flex items-center justify-between pb-1.5 border-b border-amber-200/60">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-lg bg-amber-600 text-white flex items-center justify-center font-bold text-xs shadow-xs">
                  <AlertTriangle className="w-3.5 h-3.5" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    2. Öğrenme Kısıtı: Inductive Bias Yokluğu
                  </h3>
                  <span className="text-[10px] font-mono text-amber-800 font-semibold">
                    ViT Piksellerin Komşuluğunu Doğuştan Bilmez
                  </span>
                </div>
              </div>
              <span className="text-[9px] font-mono font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded">
                Veri Açlığı
              </span>
            </div>

            {/* İki Mimari Karşılaştırması */}
            <div className="space-y-1.5 text-xs text-slate-700">
              <div className="bg-white/90 rounded-xl p-2.5 border border-emerald-200/80 shadow-2xs">
                <div className="font-bold text-emerald-950 text-[11px] mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    CNN Doğuştan Bilir (Mimarisine Kazınmıştır)
                  </span>
                  <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded border border-emerald-200">
                    Kuvvetli Inductive Bias
                  </span>
                </div>
                <ul className="text-[10.5px] text-slate-600 space-y-1 leading-snug">
                  <li>
                    <strong className="text-slate-800">Locality (Yerellik):</strong> $3×3$ filtreler sadece yan yana piksellerin ilişkili olduğunu peşinen kabul eder.
                  </li>
                  <li>
                    <strong className="text-slate-800">Translation Equivariance:</strong> Kedi sol üstte de olsa sağ altta da olsa aynı konvolüsyon filtresi yakalar.
                  </li>
                </ul>
              </div>

              <div className="bg-white/90 rounded-xl p-2.5 border border-amber-200/80 shadow-2xs">
                <div className="font-bold text-amber-950 text-[11px] mb-1 flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                    ViT Sıfırdan Öğrenmek Zorundadır
                  </span>
                  <span className="text-[9px] font-mono text-amber-800 bg-amber-50 px-1.5 py-0.5 rounded border border-amber-200">
                    Sıfır İndüktif Ön Varsayım
                  </span>
                </div>
                <ul className="text-[10.5px] text-slate-600 space-y-1 leading-snug">
                  <li>
                    <strong className="text-slate-800">Mekansal Körlük:</strong> 1. yama ile 2. yamanın komşu olduğunu bilmez; resmi 196 kelimelik bağımsız bir torba gibi algılar.
                  </li>
                  <li>
                    <strong className="text-slate-800">2D Dünyayı Keşfetme:</strong> Piksellerin ve yamaların birbirine yakınlığını Position Embeddings üzerinden tamamen veriden öğrenir.
                  </li>
                </ul>
              </div>
            </div>

            {/* Veri Ölçeği Paradoksu */}
            <div className="bg-amber-100/50 rounded-xl p-2 border border-amber-200 text-[10.5px] text-slate-800 leading-snug">
              <span className="font-bold text-amber-950">Temel Paradoks:</span> CNN ön varsayımları sayesinde az veriyle hızlı öğrenir ama tavana çarpar; ViT ise ön varsayımsız olduğu için küçük veride ezberler (overfitting), ancak devasa veride sınır tanımaz.
            </div>
          </div>

          {/* Sonuç Kutusu */}
          <div className="mt-1.5 bg-amber-100/70 rounded-lg p-1.5 border border-amber-200 text-[10.5px] text-amber-950 font-medium flex items-center justify-between">
            <span>Orta/Küçük Veride (ImageNet-1k):</span>
            <strong className="text-amber-900 font-bold">CNN Üstündür, ViT Geri Kalır!</strong>
          </div>
        </motion.div>

      </div>

      {/* 3. BOTTOM: SUMMARY TAKEAWAY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.12, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50 rounded-xl py-1.5 px-3 border border-slate-200 shadow-xs flex items-center justify-between gap-3 shrink-0 text-xs"
      >
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-amber-600 shrink-0" />
          <span className="text-slate-700 text-[11px] sm:text-xs">
            <strong className="text-slate-900">Pedagojik Çıkarım:</strong> ViT, her pikselin her pikselle ilişki kurma maliyetini (2.5 Milyar) <strong>16×16 yamalama</strong> ile (38.416) çözer; fakat mimari ön varsayımları olmadığı için <strong>büyük veriye muhtaçtır</strong>.
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold shrink-0">
          <span>Sırada: Büyük Veri Gücü ➔</span>
        </div>
      </motion.div>

    </div>
  )
}
