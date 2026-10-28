import React from 'react'
import { motion } from 'framer-motion'
import {
  Sliders,
  Zap,
  Lightbulb,
  Scale
} from 'lucide-react'

export const Slide17_ModelVariants: React.FC = () => {
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
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 4: MODEL VARYANTLARI & PARAMETRELER
            </span>
            <span className="text-xs text-slate-400 font-mono">
              | Tablo 1'deki Sayılar ve İsimler Ne Anlama Geliyor?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            ViT Model Varyantları: Base, Large ve Huge
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası & Referans */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 17</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: ÜSTTE ORİJİNAL TABLO, ALTTA 3 ANLAŞILIR DERS KARTI */}
      <div className="flex flex-col justify-between gap-3.5 my-auto z-10 flex-1 py-1 min-h-0">

        {/* ÜST PANEL: ORİJİNAL MAKALE TABLOSU GÖRSELİ */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="w-full bg-slate-50/70 rounded-2xl p-2.5 sm:p-3 border border-slate-200/80 shadow-xs flex items-center justify-center shrink-0"
        >
          <div className="bg-white rounded-xl border border-slate-200/90 py-2.5 px-8 flex items-center justify-center shadow-2xs w-full">
            <img
              src="/vit_table1_model_variants.png"
              alt="Table 1: Details of Vision Transformer model variants"
              className="h-[105px] sm:h-[125px] w-auto max-w-full object-contain"
            />
          </div>
        </motion.div>

        {/* ALT PANEL: HERKESİN ANLAYACAĞI 3 SOMUT AÇIKLAMA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 items-stretch flex-1">

          {/* KART 1: İsimlendirme Mantığı */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
            className="bg-blue-50/50 hover:bg-blue-50/70 rounded-2xl p-4 border border-blue-200/80 shadow-xs flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-blue-100 text-blue-800">
                    <Sliders className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    1. "ViT-L/16" İsmi Ne Demektir?
                  </h3>
                </div>

              </div>

              {/* Formül Kutusu */}
              <div className="bg-white/95 rounded-xl p-2 border border-blue-200 shadow-2xs space-y-1.5 my-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                    ViT-L (Large)
                  </span>
                  <span className="text-slate-700 font-sans text-[11px]">➔ <strong>Modelin beyni:</strong> 24 katman, 307M parametre</span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono border-t border-slate-100 pt-1">
                  <span className="font-bold text-blue-800 bg-blue-50 px-1.5 py-0.5 rounded border border-blue-200">
                    /16 (Patch)
                  </span>
                  <span className="text-slate-700 font-sans text-[11px]">➔ <strong>Görsel çözünürlük:</strong> 16×16 piksel parçalar</span>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mt-1">
                İsimler doğrudan NLP'deki <strong>BERT</strong> modellerinden (Base, Large) alınmıştır.
              </p>
              <br />
              <p className="text-xs text-slate-700 leading-relaxed mt-1">
                <strong>ViT-L/16</strong> demek; <em>"307 milyonluk Large modeli al, resmi 16×16 piksellik parçalara bölerek eğit"</em> anlamına gelir.
              </p>
            </div>
          </motion.div>

          {/* KART 2: Karesel Patch Bedeli (/16 vs /32) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.13, ease: PUNCHY_EASE }}
            className="bg-amber-50/50 hover:bg-amber-50/70 rounded-2xl p-4 border border-amber-200/80 shadow-xs flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-amber-100 text-amber-800">
                    <Zap className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    2. Neden /16 Modeller /32'den Pahalı?
                  </h3>
                </div>
              </div>

              {/* İki Dünyanın Karşılaştırması */}
              <div className="bg-white/95 rounded-xl p-2 border border-amber-200 shadow-2xs space-y-1.5 my-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-sans">Büyük Parça (/32):</span>
                  <span className="font-bold text-slate-800">49 Parça (Kaba ama Hızlı)</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-1">
                  <span className="text-amber-800 font-sans font-bold">Küçük Parça (/16):</span>
                  <span className="font-bold text-amber-900 bg-amber-100/70 px-1.5 py-0.5 rounded">
                    196 Parça (4× Parça ➔ 16× Maliyet!)
                  </span>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mt-1">
                Görseli küçük parçalara (16) bölerseniz parça sayısı <strong>4 katına</strong> çıkar.
              </p>
              <br />
              <p className="text-xs text-slate-700 leading-relaxed mt-1">
                Transformer her parçayı diğer tüm parçalarla kıyasladığı için hesaplama maliyeti <strong>16 katına</strong> (4² = 16) fırlar. Yani /16 modeli çok daha net görür ama bilgisayarı 16 kat fazla yorar.
              </p>
            </div>
          </motion.div>

          {/* KART 3: Tablodaki Gizli Kural (MLP = 4 × D) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.16, ease: PUNCHY_EASE }}
            className="bg-emerald-50/50 hover:bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/80 shadow-xs flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <span className="p-1 rounded-lg bg-emerald-100 text-emerald-800">
                    <Lightbulb className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    3. Tablodaki Sütunlar: MLP Neden Hep 4 Katı?
                  </h3>
                </div>
              </div>

              {/* Matematiksel Kanıt Kutusu */}
              <div className="bg-white/95 rounded-xl p-2 border border-emerald-200 shadow-2xs space-y-1 my-2 text-xs font-mono">
                <div className="flex justify-between items-center text-[11px]">
                  <span className="text-slate-600 font-sans">ViT-Base:</span>
                  <span className="text-slate-800">D = 768 ➔ MLP = <strong>768 × 4 = 3072</strong></span>
                </div>
                <div className="flex justify-between items-center text-[11px] border-t border-slate-100 pt-0.5">
                  <span className="text-slate-600 font-sans">ViT-Large:</span>
                  <span className="text-slate-800">D = 1024 ➔ MLP = <strong>1024 × 4 = 4096</strong></span>
                </div>
                <div className="flex justify-between items-center text-[11px] border-t border-slate-100 pt-0.5">
                  <span className="text-slate-600 font-sans">ViT-Huge:</span>
                  <span className="text-slate-800">D = 1280 ➔ MLP = <strong>1280 × 4 = 5120</strong></span>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-relaxed mt-1">
                <strong>Gizli Boyut (D):</strong> Bir patch'i tarif eden özellik sayısıdır (vektör hafızası).
              </p>

              {/* Neden 4x Açıklama Kutusu */}
              <div className="bg-white/95 rounded-xl p-2.5 border border-emerald-200/90 text-[11px] text-slate-700 space-y-2 mt-1.5 shadow-2xs">
                <div className="flex items-center justify-between pb-1 border-b border-emerald-100">
                  <span className="font-bold text-emerald-900 text-xs flex items-center gap-1">
                    💡 Neden 4 Kat Genişletiyoruz (4×D)?
                  </span>
                  <span className="font-mono text-[10px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-semibold">
                    D ➔ 4×D ➔ D
                  </span>
                </div>

                <p className="leading-relaxed text-slate-600">
                  • <strong>Attention Bağlar, MLP Anlamlandırır:</strong> Attention parçaları eşleştirir ("nereye bakacağını" bulur); MLP ise parçanın <em>ne olduğunu</em> çözer. Detayların üst üste binmemesi için bilgi 4 kat geniş masada açılır, analiz edilir ve en kritik özet tekrar <strong>D boyutuna sıkıştırılır</strong>.
                </p>

                <div className="pt-1 border-t border-slate-100">
                  <strong className="text-emerald-900 font-bold block mb-1">
                    ❓ Peki Neden 5 veya 6 Değil de Tam 4 Kat?
                  </strong>
                  <ul className="space-y-1 pl-2 border-l-2 border-emerald-300 text-slate-600 leading-relaxed text-[10.5px]">
                    <li>
                      <strong>1. Başarı / Maliyet Dengesi (Sweet Spot):</strong> 2× yapıldığında model yetersiz kalır. 4 kattan sonra (5×, 6×) parametre sayısı ve GPU bellek maliyeti katlanırken performanstaki artış neredeyse sıfıra iner (doygunluk sınırı).
                    </li>
                    <li>
                      <strong>2. Donanım Uyumu (2'nin Kuvveti):</strong> 4 çarpanı (2²), GPU/TPU tensör çekirdeklerinin matris çarpımlarını %100 paralellikte ve sıfır israfla yapmasını sağlar; 5 veya 7 gibi tek sayılar donanımı yavaşlatır.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* 3. BOTTOM: SUMMARY TAKEAWAY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.2, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50 rounded-xl py-2.5 px-4 border border-slate-200 shadow-xs flex items-center justify-between gap-3 shrink-0 text-xs"
      >
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-slate-700 text-xs sm:text-sm">
            <strong className="text-slate-900 font-semibold">Temel Çıkarım:</strong> Model seçiminde donanımı asıl zorlayan faktör modelin büyüklüğü (Base/Large) kadar <strong>seçilen patch boyutudur (/14, /16, /32)</strong>; çünkü patch küçüldükçe hesaplama maliyeti karesel olarak patlar.
          </span>
        </div>
      </motion.div>

    </div>
  )
}
