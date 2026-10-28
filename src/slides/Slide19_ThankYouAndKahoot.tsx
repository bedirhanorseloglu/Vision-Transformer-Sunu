import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Trophy,
  GraduationCap,
  Layers,
  Zap,
  Globe,
  MessageSquare,
  Cpu,
  Clock,
  Target,
  ExternalLink
} from 'lucide-react'

export const Slide19_ThankYouAndKahoot: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [platform, setPlatform] = useState<'wayground' | 'kahoot'>('wayground')

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-6 md:p-7 select-none font-sans">

      {/* Background Soft Ambient Meshes */}
      <div className="absolute -top-24 -right-24 w-[550px] h-[550px] bg-gradient-to-br from-indigo-100/35 via-purple-100/25 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[550px] h-[550px] bg-gradient-to-tr from-blue-100/35 via-sky-100/25 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2.5 border-b border-slate-100 z-10 shrink-0"
      >
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center shadow-sm shadow-blue-500/20">
            <GraduationCap className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-[11px] font-bold tracking-wider uppercase text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60 font-sans">
                KAPANIŞ VE DEĞERLENDİRME
              </span>
              <span className="text-xs text-slate-400 font-sans hidden sm:inline">
                | Yüksek Lisans Seminer Sunumu
              </span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-montserrat tracking-tight leading-tight mt-0.5">
              Teşekkürler & Canlı Bilgi Yarışması
            </h2>
          </div>
        </div>

        {/* Sağ Üst Rozetler */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/bedirhanorseloglu/Vision-Transformer-Sunu"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/80 font-semibold transition-colors"
            title="Sunumun GitHub Deposunu Aç"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>GitHub Repo</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200/80">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Slayt 19</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN BENTO GRID (2 DENGELİ VE DOLU KOLON) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch flex-1 py-2 w-full min-h-0 font-sans">

        {/* SOL: TEŞEKKÜR, 4 VURGU, KÜNYE & TARTIŞMA (6 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-slate-50/90 via-white to-blue-50/20 rounded-2xl p-5 border border-slate-200/80 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.03)] h-full gap-2.5"
        >
          {/* Başlık ve Teşekkür */}
          <div>
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-700 bg-blue-50/90 border border-blue-200/60 px-3 py-1 rounded-full mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              <span>Seminer Oturumu Tamamlandı</span>
            </div>

            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-montserrat leading-tight mb-1.5">
              Dinlediğiniz İçin{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Teşekkür Ederim
              </span>
            </h1>

            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
              <em>"An Image is Worth 16x16 Words: Transformers for Image Recognition at Scale"</em> makalesi odağında Vision Transformer mimarisini ve bilgisayarlı görüdeki devrimini inceledik.
            </p>
          </div>

          {/* 4'lü Bento Vurgu Matrisi */}
          <div className="grid grid-cols-2 gap-2">
            <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:border-blue-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                <Layers className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-montserrat block">16×16 Patch</span>
                <span className="text-[11px] text-slate-500 block leading-tight">Pikselden Token Dizisine</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:border-indigo-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                <Globe className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-montserrat block">Global Dikkat</span>
                <span className="text-[11px] text-slate-500 block leading-tight">1. Katmandan İtibaren</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:border-purple-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                <Zap className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-montserrat block">Büyük Veri Gücü</span>
                <span className="text-[11px] text-slate-500 block leading-tight">JFT-300M ile CNN'i Aşan</span>
              </div>
            </div>

            <div className="bg-white rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center gap-3 hover:border-emerald-200 transition-colors">
              <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <span className="text-xs font-bold text-slate-900 font-montserrat block">Hesaplama Verimi</span>
                <span className="text-[11px] text-slate-500 block leading-tight">Daha Az Ön Eğitim Süresi</span>
              </div>
            </div>
          </div>

          {/* Künye & GitHub Kartı */}
          <div className="bg-white/95 rounded-xl p-3 border border-slate-200/80 shadow-2xs space-y-1.5 text-xs font-sans">
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Sunumu Hazırlayan:</span>
              <div className="flex items-center gap-2">
                <span className="font-bold text-slate-900 text-xs sm:text-[13px]">Bedirhan Örseloğlu</span>
                <a
                  href="https://github.com/bedirhanorseloglu"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-1 text-[11px] font-semibold text-slate-700 hover:text-blue-700 bg-slate-100 hover:bg-blue-50 px-2 py-0.5 rounded-md border border-slate-200 transition-colors"
                >
                  <svg className="w-3 h-3 fill-current" viewBox="0 0 24 24">
                    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                  </svg>
                  <span>@bedirhanorseloglu</span>
                </a>
              </div>
            </div>
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Enstitü / Program:</span>
              <span className="font-semibold text-slate-800">KTÜ • Yapay Zeka ve Veri Mühendisliği YL</span>
            </div>
            <div className="flex items-center justify-between pb-1.5 border-b border-slate-100">
              <span className="text-slate-500 font-medium">Ders:</span>
              <span className="font-semibold text-blue-700">Multimodal Makine Öğrenmesi: Teori ve Uygulamalar</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-slate-500 font-medium">Sunum Kaynak Kodu:</span>
              <a
                href="https://github.com/bedirhanorseloglu/Vision-Transformer-Sunu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 font-semibold text-indigo-600 hover:text-indigo-800 transition-colors"
              >
                <span>github.com/bedirhanorseloglu/Vision-Transformer-Sunu</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Soru & Cevap (Q&A) ve Tartışma Kutusu */}
          <div className="bg-gradient-to-r from-blue-50/90 to-indigo-50/60 rounded-xl p-3 border border-blue-200/70 flex flex-col gap-2 shadow-2xs">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-lg bg-blue-600 text-white flex items-center justify-center shrink-0 shadow-sm shadow-blue-500/20">
                <MessageSquare className="w-3.5 h-3.5" />
              </div>
              <span className="text-xs font-bold text-slate-900 font-montserrat">
                Sorularınız & Katkılarınız (Q&A Tartışma)
              </span>
            </div>
            {/* Tartışma Konu Çipleri */}
            <div className="flex flex-wrap items-center gap-1.5 text-[10.5px]">
              <span className="bg-white/80 text-blue-800 px-2.5 py-0.5 rounded-md border border-blue-200/70 font-medium">
                Inductive Bias Farkı
              </span>
              <span className="bg-white/80 text-blue-800 px-2.5 py-0.5 rounded-md border border-blue-200/70 font-medium">
                O(N²) Karesel Maliyet
              </span>
              <span className="bg-white/80 text-blue-800 px-2.5 py-0.5 rounded-md border border-blue-200/70 font-medium">
                JFT-300M Ön Eğitim
              </span>
              <span className="bg-white/80 text-blue-800 px-2.5 py-0.5 rounded-md border border-blue-200/70 font-medium">
                Segmentation & Detection
              </span>
            </div>
          </div>
        </motion.div>

        {/* SAĞ: İNTERAKTİF CANLI QUIZ ARENASI (6 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className={`lg:col-span-6 flex flex-col justify-between rounded-2xl p-5 border shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] h-full transition-all duration-300 relative overflow-hidden gap-3 ${
            platform === 'wayground'
              ? 'bg-gradient-to-br from-indigo-50/80 via-white to-sky-50/40 border-indigo-200/90'
              : 'bg-gradient-to-br from-purple-50/80 via-white to-pink-50/40 border-purple-200/90'
          }`}
        >
          {/* Üst Kısım: Başlık & 21st.dev Style Switcher */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-8 h-8 rounded-xl text-white flex items-center justify-center font-bold text-sm shadow-sm transition-colors ${
                  platform === 'wayground' ? 'bg-[#4F46E5]' : 'bg-[#46178F]'
                }`}
              >
                {platform === 'wayground' ? 'W!' : 'K!'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base font-extrabold text-slate-900 font-montserrat tracking-tight leading-none">
                    {platform === 'wayground' ? 'Wayground Canlı Quiz' : 'Kahoot! Canlı Quiz'}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    CANLI
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-sans block mt-0.5">
                  10 Soru • Anlık Liderlik Tablosu
                </span>
              </div>
            </div>

            {/* 21st.dev Segmented Pill Switcher */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 shadow-2xs gap-1">
              <button
                type="button"
                onClick={() => setPlatform('wayground')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  platform === 'wayground'
                    ? 'bg-[#4F46E5] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Wayground
              </button>
              <button
                type="button"
                onClick={() => setPlatform('kahoot')}
                className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                  platform === 'kahoot'
                    ? 'bg-[#46178F] text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                Kahoot!
              </button>
            </div>
          </div>

          {/* Quiz Kuralları & Katılım Barı */}
          <div className="grid grid-cols-3 gap-2 text-center text-xs">
            <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center justify-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-blue-600" />
              <span className="font-bold text-slate-800 text-[11px]">20 Sn / Soru</span>
            </div>
            <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center justify-center gap-1.5">
              <Target className="w-3.5 h-3.5 text-indigo-600" />
              <span className="font-bold text-slate-800 text-[11px]">10 Soru Test</span>
            </div>
            <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center justify-center gap-1.5">
              <Trophy className="w-3.5 h-3.5 text-amber-500" />
              <span className="font-bold text-slate-800 text-[11px]">Canlı Sıralama</span>
            </div>
          </div>

          {/* Orta Kısım: Viewfinder Scanner Çerçevesi & Katılım Kartları */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-6 w-full py-1">
            
            {/* QR Kod Çerçevesi (Viewfinder / Reticle Tasarımı - Büyütülmüş) */}
            <div className="relative group shrink-0">
              <div
                className={`absolute -inset-2.5 rounded-3xl opacity-45 blur-lg transition-colors ${
                  platform === 'wayground' ? 'bg-indigo-300' : 'bg-purple-300'
                }`}
              />

              <div className="relative bg-white rounded-2xl p-3.5 border-2 border-slate-200/90 shadow-xl flex flex-col items-center">
                {/* Viewfinder Köşe İmleri */}
                <div className="absolute top-1.5 left-1.5 w-4 h-4 border-t-2 border-l-2 border-indigo-500 rounded-tl-sm pointer-events-none" />
                <div className="absolute top-1.5 right-1.5 w-4 h-4 border-t-2 border-r-2 border-indigo-500 rounded-tr-sm pointer-events-none" />
                <div className="absolute bottom-1.5 left-1.5 w-4 h-4 border-b-2 border-l-2 border-indigo-500 rounded-bl-sm pointer-events-none" />
                <div className="absolute bottom-1.5 right-1.5 w-4 h-4 border-b-2 border-r-2 border-indigo-500 rounded-br-sm pointer-events-none" />

                <img
                  src={platform === 'wayground' ? '/wayground_qr.png' : '/kahoot_qr.png'}
                  alt={platform === 'wayground' ? 'Wayground QR' : 'Kahoot QR'}
                  className="w-40 h-40 sm:w-44 sm:h-44 object-contain rounded-lg"
                />

                {/* Doğrudan Bağlantı Rozeti */}
                <div className="mt-2.5 inline-flex items-center gap-1.5 bg-slate-50 text-slate-700 px-3.5 py-1 rounded-full border border-slate-200 text-xs font-semibold shadow-2xs">
                  <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{platform === 'wayground' ? 'wayground.com' : 'kahoot.it'}</span>
                </div>
              </div>
            </div>

            {/* 3 Adımlı Bento Katılım Akışı */}
            <div className="space-y-2.5 text-xs font-sans text-slate-700 w-full max-w-[230px]">
              <div className="flex items-center gap-3 bg-white/95 p-3 rounded-xl border border-slate-200/90 shadow-2xs hover:border-indigo-300 transition-colors">
                <div
                  className={`w-7 h-7 rounded-lg text-white font-extrabold text-xs flex items-center justify-center shrink-0 ${
                    platform === 'wayground' ? 'bg-[#4F46E5]' : 'bg-[#46178F]'
                  }`}
                >
                  1
                </div>
                <div>
                  <span className="font-bold text-slate-900 block leading-tight text-xs">QR Kodu Okutun</span>
                  <span className="text-[11px] text-slate-500">veya tarayıcıdan girin</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/95 p-3 rounded-xl border border-slate-200/90 shadow-2xs hover:border-indigo-300 transition-colors">
                <div
                  className={`w-7 h-7 rounded-lg text-white font-extrabold text-xs flex items-center justify-center shrink-0 ${
                    platform === 'wayground' ? 'bg-[#4F46E5]' : 'bg-[#46178F]'
                  }`}
                >
                  2
                </div>
                <div>
                  <span className="font-bold text-slate-900 block leading-tight text-xs">
                    {platform === 'wayground' ? 'Oda Kodunu Girin' : 'Game PIN Girin'}
                  </span>
                  <span className="text-[11px] text-slate-500">ekrandaki kodu yazın</span>
                </div>
              </div>

              <div className="flex items-center gap-3 bg-white/95 p-3 rounded-xl border border-slate-200/90 shadow-2xs hover:border-amber-300 transition-colors">
                <div className="w-7 h-7 rounded-lg bg-amber-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block leading-tight text-xs">ViT Quiz Başlasın</span>
                  <span className="text-[11px] text-slate-500">10 soruda lideri seçin</span>
                </div>
              </div>
            </div>

          </div>

          {/* Alt Kısım: Marka Rozetleri ve Canlı Yayın Göstergesi */}
          <div className="pt-2.5 border-t border-slate-200/80 flex items-center justify-between text-xs font-semibold">
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-[#E21B3C]" />
              <span className="w-3 h-3 rounded-full bg-[#1368CE]" />
              <span className="w-3 h-3 rounded-full bg-[#D89E00]" />
              <span className="w-3 h-3 rounded-full bg-[#26890C]" />
              <span className="text-slate-600 font-sans text-[11px] ml-1">
                {platform === 'wayground' ? 'Wayground Platform' : 'Kahoot Platform'}
              </span>
            </div>

            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border shadow-2xs ${
                platform === 'wayground'
                  ? 'bg-indigo-50 text-indigo-700 border-indigo-200'
                  : 'bg-purple-50 text-purple-700 border-purple-200'
              }`}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>{platform === 'wayground' ? 'KOD: EKRANDA CANLI' : 'PIN: EKRANDA CANLI'}</span>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  )
}
