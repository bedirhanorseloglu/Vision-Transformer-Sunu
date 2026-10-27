import React from 'react'
import { motion } from 'framer-motion'
import {
  Award,
  HelpCircle,
  ExternalLink,
  Smartphone,
  Trophy,
  CheckCircle2,
  GraduationCap,
  BookOpen
} from 'lucide-react'

export const Slide18_ThankYouAndKahoot: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-8 select-none font-sans">

      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[550px] h-[380px] bg-purple-500/5 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[340px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2.5 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-bold tracking-wider text-purple-700 bg-purple-50 px-2.5 py-0.5 rounded-full border border-purple-200/60 font-sans">
              KAPANIŞ VE DEĞERLENDİRME
            </span>
            <span className="text-xs text-slate-500 font-sans">
              | Soru & Cevap (Q&A) ve Kahoot! Bilgi Yarışması
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Teşekkürler & Kahoot!
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2 font-sans">
          <span className="text-xs text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Sunum Sonu
          </span>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Slayt 18</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 2 KOLON (SOL TEŞEKKÜR & KÜNYE, SAĞ KAHOOT QR & GİRİŞ) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch flex-1 py-1.5 w-full min-h-0 font-sans">

        {/* SOL: TEŞEKKÜR & SUNUM KÜNYESİ (6 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-slate-50/90 via-blue-50/30 to-indigo-50/20 rounded-2xl p-5 border border-slate-200/90 shadow-2xs h-full"
        >
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100/70 text-blue-800 px-3 py-1 rounded-full text-xs font-semibold mb-3">
              <GraduationCap className="w-4 h-4 text-blue-700" />
              <span>Yüksek Lisans Seminer Sunumu</span>
            </div>

            <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-montserrat tracking-tight leading-snug mb-2">
              Dinlediğiniz İçin Teşekkür Ederim
            </h3>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans mb-4">
              <em>"An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"</em> makalesi kapsamında Vision Transformer mimarisi ve temel yeniliklerini inceledik.
            </p>

            {/* Künye Kartı */}
            <div className="bg-white/90 rounded-xl p-3.5 border border-slate-200/80 shadow-2xs space-y-2 text-xs font-sans">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Sunan:</span>
                <span className="font-bold text-slate-900 text-[13px]">Bedirhan Örseloğlu</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Kurum:</span>
                <span className="font-semibold text-slate-800">Karadeniz Teknik Üniversitesi</span>
              </div>
              <div className="flex items-center justify-between pb-2 border-b border-slate-100">
                <span className="text-slate-500 font-medium">Program:</span>
                <span className="font-semibold text-slate-800">Yapay Zeka ve Veri Mühendisliği YL</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-slate-500 font-medium">Ders:</span>
                <span className="font-semibold text-blue-700">Multimodal Makine Öğrenmesi</span>
              </div>
            </div>
          </div>

          {/* Soru & Cevap Daveti */}
          <div className="mt-4 bg-white/80 rounded-xl p-3 border border-blue-100 flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center shrink-0">
              <HelpCircle className="w-5 h-5" />
            </div>
            <div>
              <span className="text-xs font-bold text-slate-900 block font-montserrat">
                Sorularınız & Katkılarınız?
              </span>
              <span className="text-[11.5px] text-slate-600 leading-tight block">
                Mimari detaylar, inductive bias veya deneysel sonuçlar üzerine tartışabiliriz.
              </span>
            </div>
          </div>
        </motion.div>

        {/* SAĞ: KAHOOT! BİLGİ YARIŞMASI & QR KOD (6 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-purple-50/90 via-indigo-50/40 to-slate-50/80 rounded-2xl p-5 border border-purple-200/80 shadow-2xs h-full"
        >
          {/* Kahoot Başlık */}
          <div className="flex items-center justify-between pb-2 border-b border-purple-200/60">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-lg bg-[#46178F] text-white flex items-center justify-center font-bold text-sm shadow-xs font-montserrat">
                K!
              </div>
              <div>
                <h3 className="text-base font-extrabold text-[#46178F] font-montserrat tracking-tight leading-tight">
                  Kahoot! Bilgi Yarışması
                </h3>
                <span className="text-[11px] text-slate-500 font-sans">
                  Sunum Değerlendirmesi • 10 Soru
                </span>
              </div>
            </div>

            <div className="flex items-center gap-1.5 bg-white px-2.5 py-1 rounded-full border border-purple-200 text-xs font-bold text-[#46178F] shadow-2xs">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span>Canlı Quiz</span>
            </div>
          </div>

          {/* QR Kod Vitrini */}
          <div className="my-auto py-2 flex flex-col sm:flex-row items-center justify-center gap-5">
            {/* QR Kod Çerçevesi */}
            <div className="relative bg-white rounded-2xl p-3 border-2 border-purple-200 shadow-md group hover:border-purple-400 transition-colors">
              <img
                src="/kahoot_qr.png"
                alt="Kahoot Join QR Code"
                className="w-36 h-36 sm:w-40 sm:h-40 object-contain rounded-lg"
              />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-500 animate-ping pointer-events-none" />
              <span className="absolute -top-2 -right-2 w-4 h-4 rounded-full bg-emerald-500 border-2 border-white pointer-events-none" />
            </div>

            {/* Katılım Yönergeleri */}
            <div className="space-y-2 text-xs font-sans text-slate-700 max-w-[210px]">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  1
                </div>
                <p className="leading-snug">
                  Telefon kamerasını <strong>QR koda</strong> tutun veya <strong>kahoot.it</strong> adresine gidin.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  2
                </div>
                <p className="leading-snug">
                  Ekranda açılacak <strong>Game PIN</strong> numarasını ve isminizi girin.
                </p>
              </div>

              <div className="flex items-start gap-2">
                <div className="w-5 h-5 rounded-full bg-purple-100 text-purple-800 font-bold text-[10px] flex items-center justify-center shrink-0 mt-0.5">
                  3
                </div>
                <p className="leading-snug">
                  10 soruluk eğlenceli <strong>ViT Quiz</strong> yarışmasına başlayın!
                </p>
              </div>
            </div>
          </div>

          {/* Kahoot Şekilleri Dekoratif Şerit */}
          <div className="pt-2.5 border-t border-purple-200/60 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-3.5 h-3.5 rounded-sm bg-[#E21B3C]" title="Üçgen" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#1368CE]" title="Elmas" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#D89E00]" title="Daire" />
              <span className="w-3.5 h-3.5 rounded-sm bg-[#26890C]" title="Kare" />
              <span className="text-slate-600 font-sans text-[11px] ml-1">kahoot.it</span>
            </div>

            <span className="font-sans font-bold text-xs text-purple-700 bg-white px-2.5 py-0.5 rounded border border-purple-200">
              PIN: CANLI YAYINDA
            </span>
          </div>
        </motion.div>

      </div>

    </div>
  )
}
