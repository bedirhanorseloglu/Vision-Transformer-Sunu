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
  Zap,
  Layers,
  Cpu,
  ArrowRight
} from 'lucide-react'

export const Slide05_TransformerArchitecture: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(56)
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
    const newTime = (parseFloat(e.target.value) / 100) * (duration || 56)
    videoRef.current.currentTime = newTime
    setProgress(parseFloat(e.target.value))
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const cur = videoRef.current.currentTime
    const dur = videoRef.current.duration || 56
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

      {/* Background subtle ambient glows */}
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
              BÖLÜM 2: TRANSFORMER TEMELLERİ
            </span>
            <span className="text-xs text-slate-400 font-mono">
              | RNN&apos;siz Encoder-Decoder Yığını (Vaswani et al., 2017)
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Transformer Mimarisi: Paralel İşleme
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 05</span>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (7 Cols Video, 5 Cols Rich Architecture Cards) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 my-auto z-10 items-stretch flex-1 py-2.5 min-h-0">

        {/* LEFT COLUMN: INTERACTIVE VIDEO PLAYER (7 Cols) - Seamless White Frame */}
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
              src="/transformer_architecture.mp4"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}
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

            {/* Buttons Bar + Scene Jumpers */}
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
                  onClick={() => skipTime(-5)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 cursor-pointer"
                  title="5 Saniye Geri"
                >
                  <Rewind className="w-4 h-4" />
                </button>

                <button
                  onClick={() => skipTime(5)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 cursor-pointer"
                  title="5 Saniye İleri"
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

              {/* Hızlı Sahne Atlama & Ses */}
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <button
                  onClick={() => seekToTime(0)}
                  className={`px-2.5 py-1 rounded-md transition-all border cursor-pointer ${currentTime < 15
                    ? 'bg-amber-50 text-amber-800 border-amber-200 font-bold shadow-2xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                >
                  1. Genel Yapı (X ➔ Y)
                </button>
                <button
                  onClick={() => seekToTime(15)}
                  className={`px-2.5 py-1 rounded-md transition-all border cursor-pointer ${currentTime >= 15 && currentTime < 32
                    ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold shadow-2xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                >
                  2. 6× Encoder Yığını
                </button>
                <button
                  onClick={() => seekToTime(32)}
                  className={`px-2.5 py-1 rounded-md transition-all border cursor-pointer ${currentTime >= 32
                    ? 'bg-emerald-50 text-emerald-800 border-emerald-200 font-bold shadow-2xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                >
                  3. İç Katmanlar
                </button>

                <button
                  onClick={() => seekToTime(0)}
                  className={`px-2.5 py-1 rounded-md transition-all border cursor-pointer ${currentTime < 15
                    ? 'bg-amber-50 text-amber-800 border-amber-200 font-bold shadow-2xs'
                    : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'
                    }`}
                >
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

        {/* RIGHT COLUMN: 3 SOMUT VE DOLGUN MİMARİ KARTI (5 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between gap-3 h-full"
        >
          {/* Card 1: Paralel İşleme Devrimi */}
          <div className="bg-amber-50/50 hover:bg-amber-50/80 rounded-2xl p-4 border border-amber-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-amber-100 text-amber-800">
                    <Zap className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                    1. Paralel İşleme Devrimi
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-amber-800 bg-white px-2 py-0.5 rounded border border-amber-200">
                  RNN&apos;siz Mimari
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                RNN gibi kelimeleri tek tek sırayla beklemek yerine <strong>tüm girdi dizisini (<code className="font-bold">X</code>) aynı anda paralel</strong> işler; GPU/TPU üzerinde devasa veri kümeleriyle çok daha hızlı eğitilir.
              </p>
            </div>

            <div className="mt-2 bg-white/95 rounded-xl py-1.5 px-3 border border-amber-200/80 flex items-center justify-between text-xs font-mono shadow-2xs">
              <span className="text-slate-400 line-through">RNN: 1 ➔ 2 ➔ 3 (Sıralı)</span>
              <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="font-bold text-amber-900 bg-amber-50 px-2 py-0.5 rounded border border-amber-200">
                Transformer: [1, 2, 3] Aynı Anda ⚡
              </span>
            </div>
          </div>

          {/* Card 2: Encoder & Decoder Yığını (N = 6) */}
          <div className="bg-blue-50/50 hover:bg-blue-50/80 rounded-2xl p-4 border border-blue-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-blue-100 text-blue-800">
                    <Layers className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                    2. Encoder &amp; Decoder Yığını (N = 6)
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-blue-700 bg-white px-2 py-0.5 rounded border border-blue-200">
                  Bağımsız Ağırlıklar
                </span>
              </div>
              <p className="text-xs sm:text-[13.5px] text-slate-700 leading-relaxed">
                Orijinal mimaride <strong>6 adet özdeş Encoder</strong> üst üste biner (her biri kendi bağımsız ağırlıklarını öğrenir). En üstteki Encoder&apos;ın ürettiği temsil matrisi (<strong><code className="text-emerald-700">E</code></strong>), tüm Decoder katmanlarına aktarılır.
              </p>
            </div>

            <div className="mt-2 bg-white/95 rounded-xl py-1.5 px-3 border border-blue-200/80 flex items-center justify-between text-xs font-mono shadow-2xs">
              <span className="text-emerald-800 font-bold">Girdi (X) ➔ 6× Encoder</span>
              <ArrowRight className="w-3.5 h-3.5 text-blue-600 shrink-0" />
              <span className="font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                Temsil (E) ➔ 6× Decoder (Y)
              </span>
            </div>
          </div>

          {/* Card 3: Her Encoder İçindeki 2 Temel Katman */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/80 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1.5">
                <div className="flex items-center gap-2">
                  <span className="p-1.5 rounded-lg bg-emerald-100 text-emerald-800">
                    <Cpu className="w-4 h-4" />
                  </span>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 font-montserrat">
                    3. Her Encoder Bloğunda 2 Katman
                  </h3>
                </div>
                <span className="text-[10px] font-mono font-bold text-emerald-800 bg-white px-2 py-0.5 rounded border border-emerald-200">
                  ViT&apos;in Temel Bloğu
                </span>
              </div>
              <div className="space-y-1 text-xs sm:text-[13px] text-slate-700 leading-snug">
                <p>
                  <strong>1. Self-Attention:</strong> Dizideki kelimelerin birbiriyle ilişkilerini aynı anda modeller.
                </p>
                <p>
                  <strong>2. Feedforward (Linear / MLP):</strong> Her kelime vektörüne bağımsız uygulanan tam bağlantılı katman .
                </p>
              </div>
            </div>

            <div className="mt-2 bg-white/95 rounded-xl py-1.5 px-3 border border-emerald-200/80 flex items-center justify-between text-xs font-mono shadow-2xs">
              <span className="font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                1. Self-Attention
              </span>
              <ArrowRight className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span className="font-bold text-emerald-900 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                2. Feedforward (MLP)
              </span>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  )
}
