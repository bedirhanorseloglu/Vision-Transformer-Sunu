import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Eye, X } from 'lucide-react'

export const Slide10_ClsPositionMLP: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [isAttentionModalOpen, setIsAttentionModalOpen] = useState(false)

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsAttentionModalOpen(false)
      }
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-6 md:p-7 select-none">

      {/* Background subtle ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-purple-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-sans font-bold tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60">
              BÖLÜM 3: VISION TRANSFORMER (ViT)
            </span>
            <span className="text-xs text-slate-400 font-sans">| 197×768 Matrisi, Encoder &amp; MLP Head Tahmini</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            3, 4 ve 5. Adım: [CLS] Token, Position Embedding ve Sınıflandırma
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2">
          <div className="flex items-center gap-1.5 text-xs font-sans font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Slayt 10</span>
          </div>
        </div>
      </motion.div>

      {/* 2. CENTER: STACKED WIDE PANORAMA DIAGRAMS (Fig-2 + Fig-4) */}
      <motion.div
        initial={{ opacity: 0, scale: 0.98 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50/80 rounded-2xl p-2.5 border border-slate-200/90 shadow-sm flex flex-col justify-between gap-2 z-10 my-auto flex-1 min-h-0"
      >
        {/* Caption bar */}
        <div className="flex items-center justify-between pb-1 border-b border-slate-200/70 text-xs shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-600" />
            <span className="font-bold text-slate-900 font-montserrat">
              [CLS] Token (1) + 196 Patch = 197×768 Matris ➔ Transformer Encoder ➔ MLP Head ➔ Sınıf Tahmini
            </span>
          </div>
          <span className="text-[10px] font-sans text-purple-700 bg-purple-50 px-2 py-0.5 rounded border border-purple-200 font-semibold">
            Matris Boyutu: 197 × 768
          </span>
        </div>

        {/* 1st Image: Slide 10 Original Diagram (vit_fig2_full_diagram.png) */}
        <div className="relative w-full flex-1 min-h-[115px] bg-white rounded-xl border border-slate-200 flex items-center justify-center p-1.5 overflow-hidden shadow-inner group">
          <img
            src="/vit_fig2_full_diagram.png"
            alt="ViT [CLS] Token, Position Embeddings, Encoder and MLP Head"
            className="w-full h-full object-contain filter contrast-[1.03] transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>

        {/* 2nd Image: Slide 11 Diagram Placed Right Below (vit_fig4_cls_position_clean.png) */}
        <div className="relative w-full flex-1 min-h-[115px] bg-white rounded-xl border border-slate-200 flex items-center justify-center p-1.5 overflow-hidden shadow-inner group">
          <img
            src="/vit_fig4_cls_position_clean.png"
            alt="ViT Prepending [CLS] token and adding Positional Embeddings"
            className="w-full h-full object-contain filter contrast-[1.03] transition-transform duration-300 group-hover:scale-[1.01]"
          />
        </div>
      </motion.div>

      {/* 3. BOTTOM: 3 CONCISE & BALANCED CARDS (Steps 3, 4, 5) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 z-10 shrink-0 mt-2">

        {/* KART 1: 3. Adım - [CLS] Token ve Position Embeddings */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="bg-purple-50/40 hover:bg-purple-50/70 rounded-2xl p-3 border border-purple-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-purple-600 text-white font-sans font-bold text-xs flex items-center justify-center shadow-xs">
                  3
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                  [CLS] Token &amp; Position Embedding
                </h3>
              </div>
              <span className="text-[10px] font-sans font-semibold text-purple-700 bg-purple-100/70 px-2 py-0.5 rounded">
                196 ➔ 197×768
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-700 leading-snug">
              Sınıflandırma için en başa bir <span className="font-semibold text-slate-900">[CLS] token</span> eklenir. Karışık bir yapboz gibi parça sırasını bilmeyen Transformer&apos;a konum düzenini öğretmek için de her patch&apos;e birer <span className="font-semibold text-slate-900">1D Position Embedding</span> toplanır.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-700 leading-snug mt-1.5">
              <span className="font-semibold text-purple-800">NOT:</span> <code>[CLS]</code> kullanımı zorunlu değildir; NLP&apos;deki hazır ve verimli Transformer altyapısını <strong>hiç değiştirmeden (<em>out-of-the-box</em>)</strong> kullanabilmek adına orijinal mimariye (BERT) sadık kalınmıştır. (Doğru öğrenme oranıyla <code>3·10⁻⁴</code>, CNN&apos;de de kullanılan <span className="italic">Average Pooling</span> de aynı performansı verir.)
            </p>
          </div>

          <div className="mt-2 bg-white/90 rounded-lg p-1.5 border border-purple-200/60 text-[11px] font-sans text-purple-900 font-medium flex items-center justify-between shadow-2xs">
            <span>[CLS] (1) + 196 Patch:</span>
            <strong>➔ 197 × 768</strong>
          </div>
        </motion.div>

        {/* KART 2: 4. Adım - Transformer Encoder (BUTON İLE DİKKAT HARİTASI AÇILIR) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.13, ease: PUNCHY_EASE }}
          className="bg-amber-50/40 hover:bg-amber-50/70 rounded-2xl p-3 border border-amber-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-amber-600 text-white font-sans font-bold text-xs flex items-center justify-center shadow-xs">
                  4
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                  Transformer Encoder
                </h3>
              </div>

              {/* Tıklanabilir Dikkat Haritası Butonu */}
              <motion.button
                animate={{
                  scale: [1, 1.05, 1],
                  boxShadow: [
                    '0 3px 10px rgba(245, 158, 11, 0.3)',
                    '0 5px 18px rgba(245, 158, 11, 0.55)',
                    '0 3px 10px rgba(245, 158, 11, 0.3)'
                  ]
                }}
                transition={{
                  repeat: Infinity,
                  duration: 2.2,
                  ease: 'easeInOut'
                }}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setIsAttentionModalOpen(true)}
                className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-gradient-to-r from-amber-500 via-amber-600 to-orange-500 text-white font-sans text-[11px] font-bold border border-amber-300 shadow-md cursor-pointer group"
                title="Şekil 6 Dikkat Haritasını Büyüt (Tıkla)"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-white"></span>
                </span>
                <Eye className="w-3.5 h-3.5 text-white group-hover:rotate-12 transition-transform" />
                <span className="tracking-tight">Dikkat Haritası (Fig. 6) ↗</span>
              </motion.button>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-700 leading-snug">
              197 vektör Encoder katmanlarından geçer. <strong>Self-Attention</strong> ile tüm patch&apos;ler birbiriyle konuşur; arka planı karartıp doğrudan ana nesneye (köpek, uçak) odaklanır.
            </p>
            <p className="text-[11px] sm:text-xs text-slate-700 leading-snug mt-1.5">
              <span className="font-semibold text-amber-900">Neden 2D değil de 1D Konum?</span> Model <code>224×224</code> piksel yerine <code>14×14</code> gibi küçük bir yama ızgarasında çalıştığı için 2 boyutlu komşuluğu 1D vektörlerden de kolayca öğrenebilmektedir.
            </p>
          </div>

          <div
            onClick={() => setIsAttentionModalOpen(true)}
            className="mt-2 bg-amber-100/50 hover:bg-amber-100 rounded-lg p-1.5 border border-amber-300/80 text-[11px] font-sans text-amber-950 font-medium flex items-center justify-between shadow-2xs cursor-pointer transition-all hover:scale-[1.01]"
            title="Dikkat Haritasını Açmak İçin Tıklayın"
          >
            <span>Özet Çıktı: <strong>[CLS] = 1 × 768</strong></span>
            <span className="text-[10px] text-amber-800 font-sans font-bold flex items-center gap-1 bg-white/90 px-1.5 py-0.5 rounded border border-amber-200">
              🔍 Haritayı Aç
            </span>
          </div>
        </motion.div>

        {/* KART 3: 5. Adım - MLP Head ile Sınıflandırma */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, delay: 0.16, ease: PUNCHY_EASE }}
          className="bg-emerald-50/40 hover:bg-emerald-50/70 rounded-2xl p-3 border border-emerald-200/80 shadow-xs flex flex-col justify-between transition-all"
        >
          <div>
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 rounded-lg bg-emerald-600 text-white font-sans font-bold text-xs flex items-center justify-center shadow-xs">
                  5
                </div>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                  MLP Head &amp; Tahmin
                </h3>
              </div>
              <span className="text-[10px] font-sans font-semibold text-emerald-700 bg-emerald-100/70 px-2 py-0.5 rounded">
                Sınıflandırma
              </span>
            </div>

            <p className="text-[11px] sm:text-xs text-slate-700 leading-snug">
              Encoder çıkışındaki [CLS] token durumu (<code>1×768</code>), resmin nihai temsilidir. Hem ön eğitimde hem ince ayarda <span className="font-semibold text-slate-900">Linear Katman (MLP Head)</span> doğrudan bu duruma bağlanarak sınıf tahminini üretir.
            </p>
          </div>

          <div className="mt-2 bg-white/90 rounded-lg p-1.5 border border-emerald-200/60 text-[11px] font-sans text-emerald-900 font-medium flex items-center justify-between shadow-2xs">
            <span>Tahmin Sonucu:</span>
            <strong>FROG (Kurbağa) %94</strong>
          </div>
        </motion.div>

      </div>

      {/* DİKKAT HARİTASI MODAL (LIGHTBOX) */}
      <AnimatePresence>
        {isAttentionModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsAttentionModalOpen(false)}
            className="fixed inset-0 z-50 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6"
          >
            <motion.div
              initial={{ scale: 0.92, opacity: 0, y: 10 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 10 }}
              transition={{ duration: 0.22, ease: PUNCHY_EASE }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-w-[680px] w-full max-h-[92vh] flex flex-col p-5 sm:p-6 select-none"
            >
              {/* Modal Başlık */}
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-100">
                <div className="flex items-center gap-2">
                  <div className="w-7 h-7 rounded-lg bg-amber-500 text-white flex items-center justify-center shadow-xs">
                    <Eye className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                      Self-Attention Dikkat Haritaları
                    </h3>
                    <p className="text-[11px] text-slate-500 font-sans">
                      Makale Şekil 6 (Figure 6) — Dosovitskiy et al.
                    </p>
                  </div>
                </div>

                <button
                  onClick={() => setIsAttentionModalOpen(false)}
                  className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center transition-colors cursor-pointer"
                  title="Kapat (Esc)"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Modal Görsel Gövdesi */}
              <div className="bg-slate-50 rounded-2xl border border-slate-200 p-4 flex items-center justify-center overflow-hidden my-auto">
                <img
                  src="/vit_attention_input_output_fig6.png"
                  alt="ViT Input vs Attention Map Figure 6"
                  className="h-[460px] sm:h-[520px] max-h-[62vh] w-auto object-contain rounded-xl drop-shadow-sm"
                />
              </div>

              {/* Modal Alt Açıklama */}
              <div className="mt-3 bg-amber-50/70 rounded-xl p-2.5 border border-amber-200 text-xs text-slate-700 leading-relaxed">
                <strong>Gözlem:</strong> Vision Transformer, girdi görüntüsündeki dikkat dağıtıcı arka planları (çimen, bulut, taşlar) doğal olarak karartıp doğrudan sınıflandırma yapılacak nesneye (köpek, uçak, yılan) odaklanır.
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </div>
  )
}
