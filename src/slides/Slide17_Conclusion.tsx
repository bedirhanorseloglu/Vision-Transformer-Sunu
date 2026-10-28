import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  CheckCircle2,
  Award,
  Compass,
  ZoomIn,
  X,
  Maximize2
} from 'lucide-react'

export const Slide17_Conclusion: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [isModalOpen, setIsModalOpen] = useState(false)

  // Escape tuşu ile modalı kapatma
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-8 select-none font-sans">

      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[380px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[340px] bg-indigo-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2.5 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 font-sans">
              BÖLÜM 5: SONUÇ VE GELECEK ÇALIŞMALAR
            </span>
            <span className="text-xs text-slate-500 font-sans">
              | Ana Sonuç, Önemli Çıkarımlar ve Açık Noktalar
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Sonuç ve Gelecek Çalışmalar
          </h2>
        </div>

        {/* Sağ Üst: Referans & Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2 font-sans">

          <div className="flex items-center gap-1.5 text-xs font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 17</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 2 SÜTUNLU DENGELİ DÜZEN (SOLDA GÖRSEL, SAĞDA 3 NET KART) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch flex-1 py-1.5 w-full min-h-0 font-sans">

        {/* SOL: GÖRSEL PANELİ (5 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.08, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3.5 border border-slate-200/90 shadow-2xs h-full group"
        >


          {/* Görsel Kutusu */}
          <div
            onClick={() => setIsModalOpen(true)}
            className="relative w-full flex-1 bg-white rounded-xl border border-slate-200/90 overflow-hidden flex items-center justify-center p-2 cursor-pointer shadow-xs hover:border-blue-300 transition-all duration-200 min-h-[220px]"
          >
            <img
              src="/vit_conclusion_future_directions.png"
              alt="ViT Future Directions"
              className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-[1.01]"
            />


          </div>


        </motion.div>

        {/* SAĞ: KULLANICININ İSTEDİĞİ 3 BÖLÜM (7 Kolon) */}
        <div className="lg:col-span-7 flex flex-col justify-between gap-3 h-full min-h-0 font-sans">

          {/* KART 1: ANA SONUÇ */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
            className="bg-blue-50/50 hover:bg-blue-50/70 rounded-2xl p-3.5 sm:p-4 border border-blue-200/80 shadow-2xs flex flex-col justify-center gap-2 flex-1 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-blue-100 text-blue-700">
                <CheckCircle2 className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Ana Sonuç
              </h3>
            </div>
            <p className="text-xs sm:text-[13px] text-slate-800 font-medium leading-relaxed font-sans pl-1">
              Görüntüyü <strong>patch'lere bölüp</strong> standart bir <strong>Transformer’a vermek</strong>, büyük veri ile eğitildiğinde <strong>CNN’lerden daha iyi sonuç verebiliyor</strong> ve <strong>daha az hesaplama gücü</strong> harcıyor.
            </p>
          </motion.div>

          {/* KART 2: ÖNEMLİ ÇIKARIMLAR */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: 0.14, ease: PUNCHY_EASE }}
            className="bg-indigo-50/50 hover:bg-indigo-50/70 rounded-2xl p-3.5 sm:p-4 border border-indigo-200/80 shadow-2xs flex flex-col justify-center gap-2 flex-1 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-indigo-100 text-indigo-700">
                <Award className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Önemli Çıkarımlar
              </h3>
            </div>

            <div className="space-y-1.5 pl-1 text-xs sm:text-[12.5px] text-slate-800 font-medium font-sans">
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-600 shrink-0 mt-1.5" />
                <p className="leading-snug">
                  <strong>Büyük ölçekli eğitim</strong>, inductive bias eksikliğini telafi edebiliyor.
                </p>
              </div>
              <div className="flex items-start gap-2">
                <span className="w-2 h-2 rounded-full bg-blue-600 shrink-0 mt-1.5" />
                <p className="leading-snug">
                  ViT, özellikle çok büyük veri setlerinde <strong>state-of-the-art (o dönemin en iyi)</strong> performansa ulaşıyor.
                </p>
              </div>
            </div>
          </motion.div>

          {/* KART 3: AÇIK NOKTALAR */}
          <motion.div
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.28, delay: 0.18, ease: PUNCHY_EASE }}
            className="bg-emerald-50/50 hover:bg-emerald-50/70 rounded-2xl p-3.5 sm:p-4 border border-emerald-200/80 shadow-2xs flex flex-col justify-center gap-2 flex-1 transition-all"
          >
            <div className="flex items-center gap-2">
              <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-700">
                <Compass className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Açık Noktalar
              </h3>
            </div>

            <div className="space-y-2 pl-0.5 text-xs font-sans">
              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  1
                </span>
                <div>
                  <p className="font-semibold text-slate-900 leading-snug text-xs sm:text-[12.5px]">
                    Detection ve segmentation'a uyarlanması
                  </p>
                  <p className="text-[11px] text-slate-600 font-normal leading-relaxed mt-0.5">
                    ViT makalede sadece tüm resmi sınıflandırdı; nesnelerin yerini bulma (detection) ve piksel sınırlarını çizme görevlerine uyarlanması gerekiyor.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  2
                </span>
                <div>
                  <p className="font-semibold text-slate-900 leading-snug text-xs sm:text-[12.5px]">
                    Self-supervised öğrenmenin güçlendirilmesi
                  </p>
                  <p className="text-[11px] text-slate-600 font-normal leading-relaxed mt-0.5">
                    İnsan etiketine muhtaç olmadan, etiketlenmemiş devasa görsellerden (BERT gibi maskeleme ile) kendi kendine öğrenme başarısı henüz sınırlı.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-2">
                <span className="w-5 h-5 rounded-md bg-emerald-100 text-emerald-800 font-bold text-[11px] flex items-center justify-center shrink-0 mt-0.5">
                  3
                </span>
                <div>
                  <p className="font-semibold text-slate-900 leading-snug text-xs sm:text-[12.5px]">
                    Daha büyük modellerin incelenmesi
                  </p>
                  <p className="text-[11px] text-slate-600 font-normal leading-relaxed mt-0.5">
                    Model büyüdükçe performans doygunluğa (plato) ulaşmıyor; milyarlarca parametreli devasa mimarilerin sınırları henüz test edilmedi.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

        </div>

      </div>

      {/* 4. LIGHTBOX MODAL: GÖRSELİN TAM EKRAN İNCELENMESİ */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/75 backdrop-blur-sm p-4 sm:p-6 font-sans"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.2, ease: PUNCHY_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden flex flex-col p-4 sm:p-6"
            >
              {/* Modal Başlığı */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-700 flex items-center justify-center">
                    <Maximize2 className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-900 font-montserrat">
                      ViT Gelecek Çalışmalar: 3 Temel Yön
                    </h4>
                    <p className="text-xs text-slate-500 font-sans">
                      1) Detection & Segmentation | 2) Self-Supervised Learning | 3) Scaling
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Görseli */}
              <div className="w-full bg-slate-50 rounded-2xl border border-slate-200/80 p-2 flex items-center justify-center overflow-hidden max-h-[65vh]">
                <img
                  src="/vit_conclusion_future_directions.png"
                  alt="ViT Future Directions Detailed Graphic"
                  className="w-full h-auto max-h-[60vh] object-contain rounded-xl"
                />
              </div>

              {/* Modal Alt Notu */}
              <div className="mt-3 pt-2 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-sans">
                <span>ESC tuşuna basarak veya dışarı tıklayarak kapatabilirsiniz</span>
                <span className="text-blue-700 font-semibold font-sans">Dosovitskiy et al., 2021 (ICLR)</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
