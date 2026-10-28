import React, { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Smartphone,
  Trophy,
  GraduationCap,
  Layers,
  Zap,
  Globe,
  Cpu,
  Clock,
  Target,
  ExternalLink,
  Code2,
  Star
} from 'lucide-react'

export const Slide20_ThankYouAndKahoot: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const [platform, setPlatform] = useState<'wayground' | 'kahoot'>('wayground')

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_60px_-15px_rgba(15,23,42,0.06)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-8 select-none font-sans">

      {/* Background Soft Ambient Meshes */}
      <div className="absolute -top-24 -right-24 w-[550px] h-[550px] bg-gradient-to-br from-indigo-100/40 via-purple-100/25 to-transparent rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-[550px] h-[550px] bg-gradient-to-tr from-blue-100/40 via-sky-100/25 to-transparent rounded-full blur-[100px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-3 border-b border-slate-100 z-10 shrink-0"
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
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-montserrat tracking-tight leading-tight mt-0.5">
              Teşekkürler & Canlı Bilgi Yarışması
            </h2>
          </div>
        </div>

        {/* Sağ Üst Rozetler */}
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/bedirhanorseloglu"
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-1.5 text-xs text-slate-700 hover:text-slate-950 bg-slate-50 hover:bg-slate-100 px-3 py-1.5 rounded-full border border-slate-200/80 font-semibold transition-colors"
            title="GitHub Profilini Aç"
          >
            <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            <span>@bedirhanorseloglu</span>
            <ExternalLink className="w-3 h-3 text-slate-400" />
          </a>
          <div className="flex items-center gap-1.5 text-xs font-semibold text-purple-700 bg-purple-50 px-3 py-1.5 rounded-full border border-purple-200/80">
            <span className="w-2 h-2 rounded-full bg-purple-600 animate-pulse" />
            <span>Slayt 19</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN BENTO GRID (2 DENGELİ, BOŞLUKSUZ VE ZENGİN KOLON) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 my-auto z-10 items-stretch flex-1 py-2.5 w-full min-h-0 font-sans">

        {/* SOL: KURUMSAL TEŞEKKÜR, 4 ÖZET KARTI & GITHUB VİTRİNİ (6 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-6 flex flex-col justify-between bg-gradient-to-br from-slate-50/95 via-white to-blue-50/30 rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] h-full gap-3.5"
        >
          {/* Üst: KTÜ Kurumsal Başlık & Teşekkür */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2.5">
                <img
                  src="/ktu_logo.svg"
                  alt="KTÜ Logo"
                  className="w-9 h-9 object-contain shrink-0"
                />
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-800 block font-montserrat">
                    Karadeniz Teknik Üniversitesi
                  </span>
                  <span className="text-[11px] text-slate-500 font-medium block">
                    Yapay Zeka ve Veri Mühendisliği Yüksek Lisans
                  </span>
                </div>
              </div>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-[34px] font-black text-slate-900 tracking-tight font-montserrat leading-tight mb-2">
              Dinlediğiniz İçin{' '}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Teşekkür Ederim
              </span>
            </h1>

            <p className="text-xs sm:text-[13px] text-slate-600 leading-relaxed font-sans">
              <em>&quot;An Image is Worth 16×16 Words: Transformers for Image Recognition at Scale&quot;</em> (ICLR 2021) makalesi çerçevesinde Vision Transformer mimarisinin temel yapı taşlarını inceledik.
            </p>
          </div>

          {/* Orta: 4'lü Dolgun Bento Kazanım Izgarası (Boşluk Bırakmaz) */}
          <div className="grid grid-cols-2 gap-3 flex-1 items-stretch">
            <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 border-l-4 border-l-blue-600 shadow-2xs flex flex-col justify-center gap-1 hover:border-blue-300 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                  <Layers className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-[15px] font-bold text-slate-900 font-montserrat">
                  16×16 Patch Dizisi
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-snug pl-0.5">
                Görüntüyü pikseller yerine 196 görsel kelimeye (token) bölerek karesel maliyeti aşma.
              </p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 border-l-4 border-l-indigo-600 shadow-2xs flex flex-col justify-center gap-1 hover:border-indigo-300 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                  <Globe className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-[15px] font-bold text-slate-900 font-montserrat">
                  Küresel (Global) Algı
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-snug pl-0.5">
                İlk katmandan itibaren tüm resme bütüncül ve şekil odaklı (shape-biased) bakış.
              </p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 border-l-4 border-l-purple-600 shadow-2xs flex flex-col justify-center gap-1 hover:border-purple-300 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                  <Zap className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-[15px] font-bold text-slate-900 font-montserrat">
                  Büyük Ölçekli Güç
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-snug pl-0.5">
                JFT-300M ön eğitimiyle inductive bias eksikliğini telafi edip CNN rekorlarını kırma.
              </p>
            </div>

            <div className="bg-white rounded-xl p-3.5 border border-slate-200/90 border-l-4 border-l-emerald-600 shadow-2xs flex flex-col justify-center gap-1 hover:border-emerald-300 transition-all">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                  <Cpu className="w-4 h-4" />
                </div>
                <span className="text-sm sm:text-[15px] font-bold text-slate-900 font-montserrat">
                  Yüksek Hesaplama Verimi
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-600 leading-snug pl-0.5">
                Standart NLP mimarisiyle en gelişmiş CNN&apos;lerden çok daha az ön eğitim maliyeti.
              </p>
            </div>
          </div>

          {/* Alt: Sunucu Profili & GitHub Açık Kaynak Sunum Vitrin Kartı */}
          <div className="bg-white rounded-2xl p-3.5 border border-slate-200/90 shadow-xs flex flex-col gap-2.5">
            {/* Sunucu & Ders Satırı */}
            <div className="flex flex-wrap items-center justify-between gap-2 pb-2.5 border-b border-slate-100">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                  Hazırlayan & Sunan
                </span>
                <span className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                  Bedirhan Örseloğlu
                </span>
                <span className="text-[11px] text-blue-700 font-semibold block">
                  Multimodal Makine Öğrenmesi: Teori ve Uygulamalar
                </span>
              </div>

              <a
                href="https://github.com/bedirhanorseloglu"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-3.5 py-2 rounded-xl text-xs font-bold transition-all shadow-xs hover:scale-[1.02]"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
                </svg>
                <span>github.com/bedirhanorseloglu</span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-300" />
              </a>
            </div>

            {/* GitHub Repo Vitrin Kutusu */}
            <a
              href="https://github.com/bedirhanorseloglu/Vision-Transformer-Sunu"
              target="_blank"
              rel="noreferrer"
              className="group bg-gradient-to-r from-indigo-50/80 via-blue-50/60 to-slate-50 hover:from-indigo-100/80 hover:to-blue-100/60 rounded-xl p-2.5 border border-indigo-200/80 flex items-center justify-between gap-3 transition-all"
            >
              <div className="flex items-center gap-2.5 min-w-0">
                <div className="w-8 h-8 rounded-lg bg-indigo-600 text-white flex items-center justify-center shrink-0 shadow-xs">
                  <Code2 className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="text-xs font-extrabold text-slate-900 font-montserrat truncate">
                      bedirhanorseloglu / Vision-Transformer-Sunu
                    </span>
                    <span className="text-[10px] font-bold text-indigo-700 bg-white px-1.5 py-0.5 rounded border border-indigo-200 shrink-0">
                      Açık Kaynak
                    </span>
                  </div>
                  <span className="text-[11px] text-slate-600 block truncate">
                    Sunumun tüm interaktif React + TypeScript kodları, diyagramları ve README özeti
                  </span>
                </div>
              </div>

              <span className="inline-flex items-center gap-1 text-xs font-bold text-indigo-700 bg-white px-2.5 py-1.5 rounded-lg border border-indigo-200 shadow-2xs shrink-0 group-hover:translate-x-0.5 transition-transform">
                <Star className="w-3.5 h-3.5 text-amber-500 fill-amber-400" />
                <span>Repoyu Aç</span>
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </div>
        </motion.div>

        {/* SAĞ: İNTERAKTİF CANLI QUIZ ARENASI (6 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: 15 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className={`lg:col-span-6 flex flex-col justify-between rounded-2xl p-5 sm:p-6 border shadow-[0_4px_25px_-5px_rgba(0,0,0,0.04)] h-full transition-all duration-300 relative overflow-hidden gap-3.5 ${platform === 'wayground'
            ? 'bg-gradient-to-br from-indigo-50/85 via-white to-sky-50/45 border-indigo-200/90'
            : 'bg-gradient-to-br from-purple-50/85 via-white to-pink-50/45 border-purple-200/90'
            }`}
        >
          {/* Üst Kısım: Başlık & Segmented Switcher */}
          <div className="flex items-center justify-between pb-2.5 border-b border-slate-200/80">
            <div className="flex items-center gap-2.5">
              <div
                className={`w-9 h-9 rounded-xl text-white flex items-center justify-center font-extrabold text-sm shadow-sm transition-colors ${platform === 'wayground' ? 'bg-[#4F46E5]' : 'bg-[#46178F]'
                  }`}
              >
                {platform === 'wayground' ? 'W!' : 'K!'}
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 font-montserrat tracking-tight leading-none">
                    {platform === 'wayground' ? 'Wayground Canlı Quiz' : 'Kahoot! Canlı Quiz'}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full border border-emerald-200/60">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-ping" />
                    CANLI
                  </span>
                </div>
                <span className="text-[11px] text-slate-500 font-sans block mt-0.5">
                  Şimdi Telefonlarınızla Katılın • 10 Soru • Anlık Liderlik Tablosu
                </span>
              </div>
            </div>

            {/* Segmented Pill Switcher */}
            <div className="flex items-center bg-slate-100/90 p-1 rounded-xl border border-slate-200 shadow-2xs gap-1">
              <button
                type="button"
                onClick={() => setPlatform('wayground')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${platform === 'wayground'
                  ? 'bg-[#4F46E5] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Wayground
              </button>
              <button
                type="button"
                onClick={() => setPlatform('kahoot')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all cursor-pointer ${platform === 'kahoot'
                  ? 'bg-[#46178F] text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
                  }`}
              >
                Kahoot!
              </button>
            </div>
          </div>

          {/* Quiz Kuralları & Katılım Barı */}
          <div className="grid grid-cols-3 gap-2.5 text-center text-xs">
            <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center justify-center gap-1.5">
              <Clock className="w-4 h-4 text-blue-600" />
              <span className="font-bold text-slate-800 text-xs">20 Sn / Soru</span>
            </div>
            <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center justify-center gap-1.5">
              <Target className="w-4 h-4 text-indigo-600" />
              <span className="font-bold text-slate-800 text-xs">10 Soru Test</span>
            </div>
            <div className="bg-white/95 rounded-xl p-2.5 border border-slate-200/80 shadow-2xs flex items-center justify-center gap-1.5">
              <Trophy className="w-4 h-4 text-amber-500" />
              <span className="font-bold text-slate-800 text-xs">Canlı Sıralama</span>
            </div>
          </div>

          {/* Orta Kısım: Büyük QR Kod & Yanında Hizalı 3 Adım Kartı */}
          <div className="flex-1 flex flex-col sm:flex-row items-center justify-center gap-5 w-full my-auto">

            {/* QR Kod Çerçevesi (Büyütülmüş - Sınıftan Rahat Okunur) */}
            <div className="relative group shrink-0">
              <div
                className={`absolute -inset-2.5 rounded-3xl opacity-45 blur-lg transition-colors ${platform === 'wayground' ? 'bg-indigo-300' : 'bg-purple-300'
                  }`}
              />

              <div className="relative bg-white rounded-2xl p-4 border-2 border-slate-200/90 shadow-xl flex flex-col items-center">
                {/* Viewfinder Köşe İmleri */}
                <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-indigo-500 rounded-tl-sm pointer-events-none" />
                <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-indigo-500 rounded-tr-sm pointer-events-none" />
                <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-indigo-500 rounded-bl-sm pointer-events-none" />
                <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-indigo-500 rounded-br-sm pointer-events-none" />

                <img
                  src={platform === 'wayground' ? '/wayground_qr.png' : '/kahoot_qr.png'}
                  alt={platform === 'wayground' ? 'Wayground QR' : 'Kahoot QR'}
                  className="w-48 h-48 sm:w-52 sm:h-52 object-contain rounded-lg"
                />

                {/* Doğrudan Bağlantı Rozeti */}
                <div className="mt-2.5 inline-flex items-center gap-1.5 bg-slate-50 text-slate-800 px-4 py-1 rounded-full border border-slate-200 text-xs font-bold shadow-2xs">
                  <Smartphone className="w-3.5 h-3.5 text-indigo-600" />
                  <span>{platform === 'wayground' ? 'wayground.com' : 'kahoot.it'}</span>
                </div>
              </div>
            </div>

            {/* 3 Adımlı Bento Katılım Akışı */}
            <div className="flex flex-col justify-between gap-3 text-xs font-sans text-slate-700 w-full flex-1">
              <div className="flex items-center gap-3.5 bg-white/95 p-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-indigo-300 transition-colors">
                <div
                  className={`w-8 h-8 rounded-lg text-white font-extrabold text-xs flex items-center justify-center shrink-0 ${platform === 'wayground' ? 'bg-[#4F46E5]' : 'bg-[#46178F]'
                    }`}
                >
                  1
                </div>
                <div>
                  <span className="font-bold text-slate-900 block leading-tight text-sm sm:text-[15px]">
                    QR Kodu Okutun
                  </span>
                  <span className="text-xs text-slate-500">
                    Telefon kameranızla doğrudan taratın
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-white/95 p-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-indigo-300 transition-colors">
                <div
                  className={`w-8 h-8 rounded-lg text-white font-extrabold text-xs flex items-center justify-center shrink-0 ${platform === 'wayground' ? 'bg-[#4F46E5]' : 'bg-[#46178F]'
                    }`}
                >
                  2
                </div>
                <div>
                  <span className="font-bold text-slate-900 block leading-tight text-sm sm:text-[15px]">
                    {platform === 'wayground' ? 'Oda Kodunu Girin' : 'Game PIN Girin'}
                  </span>
                  <span className="text-xs text-slate-500">
                    İsminizi yazıp lobiye bağlanın
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-3.5 bg-white/95 p-3.5 rounded-xl border border-slate-200/90 shadow-2xs hover:border-amber-300 transition-colors">
                <div className="w-8 h-8 rounded-lg bg-amber-500 text-white font-extrabold text-xs flex items-center justify-center shrink-0 shadow-2xs">
                  <Trophy className="w-4 h-4" />
                </div>
                <div>
                  <span className="font-bold text-slate-900 block leading-tight text-sm sm:text-[15px]">
                    Zirveye Yarışın!
                  </span>
                  <span className="text-xs text-slate-500">
                    Hızlı ve doğru cevaplar daha çok puan kazandırır
                  </span>
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
                {platform === 'wayground' ? 'Wayground Canlı Yarışma' : 'Kahoot! Canlı Yarışma'}
              </span>
            </div>

            <div
              className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-bold border shadow-2xs ${platform === 'wayground'
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
