import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  Sliders,
  Zap,
  Lightbulb,
  Scale,
  Maximize2,
  X
} from 'lucide-react'

export const Slide17_ModelVariants: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [isTableModalOpen, setIsTableModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsTableModalOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-6 md:p-7 select-none">

      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 4: MODEL VARYANTLARI &amp; PARAMETRELER
            </span>
            <span className="text-xs text-slate-500 font-mono">
              | Tablo 1&apos;deki Sayılar ve İsimler Ne Anlama Geliyor?
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            ViT Model Varyantları: Base, Large ve Huge
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası & Tablo Büyütme */}
        <div className="hidden sm:flex items-center gap-2">
          <button
            onClick={() => setIsTableModalOpen(true)}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-indigo-700 bg-indigo-50 hover:bg-indigo-100 px-3 py-1.5 rounded-full border border-indigo-200 transition-colors cursor-pointer"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Tablo 1&apos;i Büyüt</span>
          </button>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 16</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: ÜSTTE ORİJİNAL TABLO, ALTTA 3 ANLAŞILIR DERS KARTI */}
      <div className="flex flex-col justify-between gap-3 my-auto z-10 flex-1 py-1.5 min-h-0">

        {/* ÜST PANEL: ORİJİNAL MAKALE TABLOSU GÖRSELİ (Tıklanabilir Lightbox) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.99 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          onClick={() => setIsTableModalOpen(true)}
          className="w-full bg-slate-50/80 hover:bg-blue-50/40 rounded-2xl p-2 border border-slate-200/90 hover:border-blue-300 shadow-xs flex items-center justify-center shrink-0 cursor-pointer group transition-all"
          title="Tabloyu Tam Ekran Büyütmek İçin Tıklayın"
        >
          <div className="bg-white rounded-xl border border-slate-200/90 py-2 px-6 flex items-center justify-center shadow-2xs w-full relative">
            <img
              src="/vit_table1_model_variants.png"
              alt="Table 1: Details of Vision Transformer model variants"
              className="h-[98px] sm:h-[115px] w-auto max-w-full object-contain group-hover:scale-[1.01] transition-transform"
            />
            <span className="hidden md:inline-flex items-center gap-1 absolute right-3 bottom-2 text-[10px] font-semibold text-slate-500 group-hover:text-blue-700 bg-slate-50 px-2 py-0.5 rounded border border-slate-200">
              <Maximize2 className="w-3 h-3" />
              <span>Büyüt</span>
            </span>
          </div>
        </motion.div>

        {/* ALT PANEL: HERKESİN ANLAYACAĞI 3 SOMUT AÇIKLAMA */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch flex-1 min-h-0">

          {/* KART 1: İsimlendirme Mantığı */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
            className="bg-blue-50/50 hover:bg-blue-50/70 rounded-2xl p-4 border border-blue-200/80 shadow-xs flex flex-col justify-between transition-all"
          >
            <div>
              <div className="flex items-center gap-2 mb-2.5">
                <span className="p-1.5 rounded-lg bg-blue-100 text-blue-800">
                  <Sliders className="w-4 h-4" />
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                  1. &quot;ViT-L/16&quot; İsmi Ne Demektir?
                </h3>
              </div>

              {/* Formül Kutusu */}
              <div className="bg-white/95 rounded-xl p-3 border border-blue-200 shadow-2xs space-y-2 my-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    ViT-L (Large)
                  </span>
                  <span className="text-slate-700 font-sans text-xs">
                    ➔ <strong>Modelin beyni:</strong> 24 katman, 307M parametre
                  </span>
                </div>
                <div className="flex items-center justify-between text-xs font-mono border-t border-slate-100 pt-2">
                  <span className="font-bold text-blue-800 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    /16 (Patch)
                  </span>
                  <span className="text-slate-700 font-sans text-xs">
                    ➔ <strong>Görsel çözünürlük:</strong> 16×16 piksel parçalar
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed mt-3">
                <p>
                  İsimler doğrudan NLP&apos;deki <strong>BERT</strong> modellerinden (Base, Large) alınmıştır.
                </p>
                <p>
                  <strong>ViT-L/16</strong> demek; <em>&quot;307 milyonluk Large modeli al, resmi 16×16 piksellik parçalara bölerek eğit&quot;</em> anlamına gelir.
                </p>
              </div>
            </div>

            <div className="mt-3 bg-white/90 rounded-lg py-1.5 px-3 border border-blue-200/70 text-xs font-mono text-blue-900 flex items-center justify-between">
              <span>Varyantlar:</span>
              <strong>Base (86M) • Large (307M) • Huge (632M)</strong>
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
              <div className="flex items-center gap-2 mb-2.5">
                <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                  <Zap className="w-4 h-4" />
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                  2. Neden /16 Modeller /32&apos;den Pahalı?
                </h3>
              </div>

              {/* İki Dünyanın Karşılaştırması */}
              <div className="bg-white/95 rounded-xl p-3 border border-amber-200 shadow-2xs space-y-2 my-2 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-600 font-sans">Büyük Parça (/32):</span>
                  <span className="font-bold text-slate-800">49 Parça (Kaba ama Hızlı)</span>
                </div>
                <div className="flex items-center justify-between border-t border-slate-100 pt-2">
                  <span className="text-amber-800 font-sans font-bold">Küçük Parça (/16):</span>
                  <span className="font-bold text-amber-900 bg-amber-100/70 px-2 py-0.5 rounded">
                    196 Parça (4× Parça ➔ 16× Maliyet!)
                  </span>
                </div>
              </div>

              <div className="space-y-2 text-xs sm:text-[13px] text-slate-700 leading-relaxed mt-3">
                <p>
                  Görseli küçük parçalara (16×16) bölerseniz parça sayısı <strong>4 katına</strong> çıkar.
                </p>
                <p>
                  Transformer her parçayı diğer tüm parçalarla kıyasladığı için hesaplama maliyeti <strong>16 katına</strong> (4² = 16) fırlar. Yani <code>/16</code> modeli çok daha net görür ama bilgisayarı 16 kat fazla yorar.
                </p>
              </div>
            </div>

            <div className="mt-3 bg-white/90 rounded-lg py-1.5 px-3 border border-amber-200/70 text-xs font-mono text-amber-900 flex items-center justify-between">
              <span>Karesel Bedel:</span>
              <strong>4× Daha Fazla Patch ➔ 16× Attention Hesabı</strong>
            </div>
          </motion.div>

          {/* KART 3: Tablodaki Gizli Kural (MLP = 4 × D) */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.28, delay: 0.16, ease: PUNCHY_EASE }}
            className="bg-emerald-50/50 hover:bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/80 shadow-xs flex flex-col justify-between transition-all"
          >
            <div className="flex flex-col flex-1 justify-between">
              <div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
                    <Lightbulb className="w-4 h-4" />
                  </span>
                  <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                    3. Tablodaki Sütunlar: MLP Neden Hep 4 Katı?
                  </h3>
                </div>

                {/* Matematiksel Kanıt Kutusu */}
                <div className="bg-white/95 rounded-xl p-2.5 border border-emerald-200 shadow-2xs space-y-1 my-2 text-xs font-mono">
                  <div className="flex justify-between items-center">
                    <span className="text-slate-600 font-sans font-semibold">ViT-Base:</span>
                    <span className="text-slate-800">D = 768 ➔ MLP = <strong>768 × 4 = 3072</strong></span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-100 pt-1">
                    <span className="text-slate-600 font-sans font-semibold">ViT-Large:</span>
                    <span className="text-slate-800">D = 1024 ➔ MLP = <strong>1024 × 4 = 4096</strong></span>
                  </div>
                  <div className="flex justify-between items-center border-t border-slate-100 pt-1">
                    <span className="text-slate-600 font-sans font-semibold">ViT-Huge:</span>
                    <span className="text-slate-800">D = 1280 ➔ MLP = <strong>1280 × 4 = 5120</strong></span>
                  </div>
                </div>
              </div>

              {/* Neden 4x Açıklama Kutusu - Büyütülmüş ve Ferah */}
              <div className="bg-white/95 rounded-xl p-3.5 border border-emerald-200/90 text-xs sm:text-[13px] text-slate-700 space-y-2.5 shadow-2xs my-auto">
                <div className="flex items-center justify-between pb-1.5 border-b border-emerald-100">
                  <span className="font-bold text-emerald-950 text-xs sm:text-sm">
                    💡 Neden 4 Kat Genişletiyoruz (4×D)?
                  </span>
                  <span className="font-mono text-xs text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200 font-bold">
                    D ➔ 4×D ➔ D
                  </span>
                </div>

                <p className="leading-relaxed text-slate-700">
                  • <strong>Attention Bağlar, MLP Anlamlandırır:</strong> Bilgi 4 kat geniş alanda açılıp analiz edilir ve tekrar <strong>D boyutuna sıkıştırılır</strong>.
                </p>

                <ul className="space-y-1.5 pl-3 border-l-2 border-emerald-400 text-slate-700 leading-relaxed">
                  <li>
                    <strong>1. Başarı / Maliyet Dengesi:</strong> 4 kattan sonra (5×, 6×) bellek maliyeti katlanırken performans artışı doygunluğa ulaşır.
                  </li>
                  <li>
                    <strong>2. Donanım Uyumu (2² = 4):</strong> GPU/TPU tensör çekirdeklerinin matris çarpımlarını %100 paralellikte yapmasını sağlar.
                  </li>
                </ul>
              </div>

              <div className="mt-2.5 bg-white/90 rounded-lg py-1.5 px-3 border border-emerald-200/70 text-xs font-mono text-emerald-900 flex items-center justify-between">
                <span>Altın Oran:</span>
                <strong>MLP Boyutu = 4 × Hidden Size (D)</strong>
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
        className="w-full bg-slate-50 rounded-xl py-2 px-4 border border-slate-200 shadow-xs flex items-center justify-between gap-3 shrink-0 text-xs"
      >
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-slate-700 text-xs sm:text-sm">
            <strong className="text-slate-900 font-semibold">Temel Çıkarım:</strong> Model seçiminde donanımı asıl zorlayan faktör modelin büyüklüğü (Base/Large) kadar <strong>seçilen patch boyutudur (/14, /16, /32)</strong>; çünkü patch küçüldükçe hesaplama maliyeti karesel olarak patlar.
          </span>
        </div>
      </motion.div>

      {/* 4. LIGHTBOX MODAL FOR TABLE 1 */}
      <AnimatePresence>
        {isTableModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsTableModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4 sm:p-6 font-sans"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: PUNCHY_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-5 sm:p-7"
            >
              <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-montserrat">
                      Table 1: Vision Transformer Model Varyantları
                    </h4>
                    <p className="text-xs text-slate-500">
                      ViT-Base (86M) • ViT-Large (307M) • ViT-Huge (632M)
                    </p>
                  </div>
                </div>
                <button
                  onClick={() => setIsTableModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="w-full bg-white rounded-2xl border border-slate-200/80 p-6 flex items-center justify-center">
                <img
                  src="/vit_table1_model_variants.png"
                  alt="Table 1 Full View"
                  className="w-full h-auto object-contain"
                />
              </div>

              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                <span>ESC tuşuna basarak veya dışarı tıklayarak kapatabilirsiniz</span>
                <span className="text-blue-700 font-semibold">Dosovitskiy et al., ICLR 2021 (Table 1)</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
