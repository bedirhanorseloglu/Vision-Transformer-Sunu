import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  ArrowRight
} from 'lucide-react'

export const Slide03_AttentionWalkthrough: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(21)
  const [currentTime, setCurrentTime] = useState<number>(0)

  const togglePlay = () => {
    if (!videoRef.current) return
    if (videoRef.current.paused) {
      videoRef.current.play()
      setIsPlaying(true)
    } else {
      videoRef.current.pause()
      setIsPlaying(false)
    }
  }

  const toggleMute = () => {
    if (!videoRef.current) return
    videoRef.current.muted = !videoRef.current.muted
    setIsMuted(videoRef.current.muted)
  }

  const skipTime = (seconds: number) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = Math.max(
      0,
      Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds)
    )
  }

  const seekToTime = (timeInSeconds: number) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = timeInSeconds
    videoRef.current.play()
    setIsPlaying(true)
  }

  const restartVideo = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    videoRef.current.play()
    setIsPlaying(true)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const newTime = (parseFloat(e.target.value) / 100) * (duration || 21)
    videoRef.current.currentTime = newTime
    setProgress(parseFloat(e.target.value))
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const cur = videoRef.current.currentTime
    const dur = videoRef.current.duration || 21
    setCurrentTime(cur)
    setProgress((cur / dur) * 100)
  }

  const handleLoadedMetadata = () => {
    if (!videoRef.current) return
    setDuration(videoRef.current.duration)
  }

  const formatTime = (secs: number) => {
    const m = Math.floor(secs / 60)
    const s = Math.floor(secs % 60)
    return `${m}:${s < 10 ? '0' : ''}${s}`
  }

  return (
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-5 sm:p-7 md:p-8 select-none">

      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

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
              BÖLÜM 1: DİKKAT (ATTENTION) &amp; SEQ2SEQ
            </span>
            <span className="text-xs text-slate-400 font-mono">
              | Dinamik Ağırlıklandırma &amp; Context Vektörü
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Attention Mekanizması Nasıl Çalışır?
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 03</span>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 2-COLUMN (Left: Interactive Video, Right: Concrete Math + Speaker Cues) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 my-auto z-10 items-stretch flex-1 py-2.5 min-h-0">

        {/* LEFT COLUMN: VIDEO PLAYER (7 Cols) - Seamless White Frame (No Black Bars) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-7 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Video Container - White background eliminates black letterboxing bars */}
          <div
            className="relative w-full flex-1 bg-white rounded-xl border border-slate-200/80 overflow-hidden flex items-center justify-center min-h-[260px] cursor-pointer shadow-inner"
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/attention_mechanism_walkthrough.mp4"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-contain"
            />

            {!isPlaying && (
              <div className="absolute top-3 right-3 bg-slate-900/80 border border-slate-700 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1.5 pointer-events-none select-none shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="font-mono font-medium">Durduruldu (Net Kare)</span>
              </div>
            )}
          </div>

          {/* Interactive Player Controls */}
          <div className="mt-3 bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/80 flex flex-col gap-2 shrink-0 shadow-xs">
            {/* Scrubber Progress Bar */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-slate-500 shrink-0 w-9 text-right font-medium">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress || 0}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500"
              />
              <span className="text-[11px] font-mono text-slate-500 shrink-0 w-9 font-medium">
                {formatTime(duration)}
              </span>
            </div>

            {/* Buttons Bar + Step Jumpers */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs cursor-pointer"
                  title={isPlaying ? 'Durdur' : 'Oynat'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={() => skipTime(-3)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 cursor-pointer"
                  title="3 Saniye Geri"
                >
                  <Rewind className="w-4 h-4" />
                </button>

                <button
                  onClick={() => skipTime(3)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 cursor-pointer"
                  title="3 Saniye İleri"
                >
                  <FastForward className="w-4 h-4" />
                </button>

                <button
                  onClick={restartVideo}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 cursor-pointer"
                  title="Başa Sar"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Hızlı Adım Atlama & Ses */}
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <button
                  onClick={() => seekToTime(0)}
                  className={`px-2.5 py-1 rounded-md transition-all border cursor-pointer ${
                    currentTime < 7
                      ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold shadow-2xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  1. Skorlama
                </button>
                <button
                  onClick={() => seekToTime(7)}
                  className={`px-2.5 py-1 rounded-md transition-all border cursor-pointer ${
                    currentTime >= 7 && currentTime < 14
                      ? 'bg-indigo-50 text-indigo-700 border-indigo-200 font-bold shadow-2xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  2. Softmax &amp; Çarpım
                </button>
                <button
                  onClick={() => seekToTime(14)}
                  className={`px-2.5 py-1 rounded-md transition-all border cursor-pointer ${
                    currentTime >= 14
                      ? 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold shadow-2xs'
                      : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                  }`}
                >
                  3. Context Özeti
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 flex items-center gap-1.5 text-xs ml-1 cursor-pointer"
                  title={isMuted ? 'Sesi Aç' : 'Sesi Kapat'}
                >
                  {isMuted ? (
                    <VolumeX className="w-4 h-4 text-amber-600" />
                  ) : (
                    <Volume2 className="w-4 h-4 text-emerald-600" />
                  )}
                  <span className="hidden sm:inline text-[11px] font-mono font-medium">
                    {isMuted ? 'Sessiz' : 'Sesli'}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: 3 SOMUT VE DOLGUN ADIM KARTI (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between gap-3 h-full"
        >
          {/* Step 1: Skorlama & Softmax */}
          <div className="bg-blue-50/50 hover:bg-blue-50/80 rounded-2xl p-4 border border-blue-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    1
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                    Skorlama &amp; Softmax (Önem Derecesi)
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                  Toplam = 1.00
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Decoder, gelen her gizli duruma (<code className="font-bold">h₁, h₂, h₃</code>) o anki çeviri adımıyla ne kadar alakalı olduğuna göre bir <strong>ham puan (score)</strong> verir; <strong>Softmax</strong> bu puanları yüzdelik ağırlıklara çevirir.
              </p>
            </div>

            {/* Videodaki Sayısal Kanıt Kutusu */}
            <div className="mt-2 bg-white/95 rounded-xl py-1.5 px-3 border border-blue-200/80 flex items-center justify-between text-xs font-mono shadow-2xs">
              <span className="text-slate-600">
                Skor: <strong>[13, 9, 9]</strong>
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="text-blue-900 font-bold bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Softmax: [0.96, 0.02, 0.02]
              </span>
            </div>
          </div>

          {/* Step 2: Ağırlıklı Çarpım & Filtreleme */}
          <div className="bg-indigo-50/50 hover:bg-indigo-50/80 rounded-2xl p-4 border border-indigo-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    2
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                    Ağırlıklı Çarpım (Alakasızları Karartma)
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-indigo-700 bg-white px-2 py-0.5 rounded border border-indigo-200">
                  h₁ Parlar • h₂,h₃ Söner
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Her gizli durum kendi Softmax skoruyla çarpılır. Böylece alakalı kelime (<strong><code className="text-emerald-700">h₁ × 0.96</code></strong>) parlak kalırken; alakasız kelimeler (<code className="text-slate-500">h₂, h₃ × 0.02</code>) sıfıra yaklaşıp <strong>karartılır (filtrelenir)</strong>.
              </p>
            </div>

            {/* Videodaki Matematiksel Çarpım Kutusu */}
            <div className="mt-2 bg-white/95 rounded-xl py-1.5 px-3 border border-indigo-200/80 flex items-center justify-between text-xs font-mono shadow-2xs">
              <span className="text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                0.96·h₁ (Net)
              </span>
              <span className="text-slate-400">+</span>
              <span className="text-slate-400">0.02·h₂ (Silik)</span>
              <span className="text-slate-400">+</span>
              <span className="text-slate-400">0.02·h₃ (Silik)</span>
            </div>
          </div>

          {/* Step 3: Context Vektörü & Kelime Üretimi */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    3
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                    Context Vektörü &amp; Çıktı Üretimi
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                  Bağlam Özeti
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Ağırlıklandırılmış vektörler toplanarak o adıma özel <strong>Context Vektörü (bağlam özeti)</strong> elde edilir; Decoder durumuyla birleştirilip <strong>Feedforward (Linear)</strong> katmanından geçirilerek yeni kelime üretilir.
              </p>
            </div>

            {/* Çıktı Akışı Kutusu */}
            <div className="mt-2 bg-white/95 rounded-xl py-1.5 px-3 border border-emerald-200/80 flex items-center justify-between text-xs font-mono shadow-2xs">
              <span className="text-slate-700 font-semibold">Context + Decoder</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="text-slate-700">Linear Katman</span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-bold text-emerald-900 bg-emerald-100/80 px-2 py-0.5 rounded border border-emerald-300">
                Yeni Kelime
              </span>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  )
}
