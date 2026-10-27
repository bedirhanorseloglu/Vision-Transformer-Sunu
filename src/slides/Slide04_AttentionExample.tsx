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
  Shuffle, 
  Repeat, 
  BookmarkCheck
} from 'lucide-react'

export const Slide04_AttentionExample: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const videoRef = useRef<HTMLVideoElement>(null)
  
  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
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
    videoRef.current.currentTime = Math.max(0, Math.min(videoRef.current.duration, videoRef.current.currentTime + seconds))
  }

  const restartVideo = () => {
    if (!videoRef.current) return
    videoRef.current.currentTime = 0
    videoRef.current.play()
    setIsPlaying(true)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const newTime = (parseFloat(e.target.value) / 100) * duration
    videoRef.current.currentTime = newTime
    setProgress(parseFloat(e.target.value))
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const cur = videoRef.current.currentTime
    const dur = videoRef.current.duration || 1
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
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-9 select-none">
      
      {/* Background subtle ambient glows */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-indigo-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-3 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 1: DİKKAT (ATTENTION) & SEQ2SEQ</span>
            <span className="text-xs text-slate-400 font-mono">| Sıra Değişimi & Dikkat Hizalaması</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Uygulamalı Örnek: Çeviri ve Attention</h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 04</span>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (8 Cols Video, 4 Cols Clean Speaker Cues + Notations) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 my-auto z-10 items-stretch flex-1 py-3 min-h-0">
        
        {/* LEFT COLUMN: INTERACTIVE VIDEO PLAYER (8 Cols) - Light clean frame */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-8 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Video Container (No blur when paused, 100% crisp) */}
          <div 
            className="relative w-full flex-1 bg-black rounded-xl overflow-hidden flex items-center justify-center min-h-[260px] cursor-pointer" 
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/attention_mechanism_example.mp4"
              autoPlay
              muted={isMuted}
              loop
              playsInline
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
              className="w-full h-full object-contain"
            />

            {/* Crisp paused indicator (No blur, clear frame) */}
            {!isPlaying && (
              <div className="absolute top-3 right-3 bg-black/60 border border-white/20 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none select-none">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="font-mono font-medium">Durduruldu</span>
              </div>
            )}
          </div>

          {/* Interactive Player Controls - Clean White/Light Theme */}
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

            {/* Buttons Bar */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                {/* Play/Pause */}
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
                  title={isPlaying ? "Durdur" : "Oynat"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                {/* Rewind 5s */}
                <button
                  onClick={() => skipTime(-5)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="5 Saniye Geri"
                >
                  <Rewind className="w-4 h-4" />
                </button>

                {/* Fast Forward 5s */}
                <button
                  onClick={() => skipTime(5)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="5 Saniye İleri"
                >
                  <FastForward className="w-4 h-4" />
                </button>

                {/* Replay */}
                <button
                  onClick={restartVideo}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="Başa Sar"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Volume Toggle */}
              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 flex items-center gap-1.5 text-xs"
                  title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-600" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
                  <span className="hidden sm:inline text-[11px] font-mono font-medium">{isMuted ? "Sessiz" : "Sesli"}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: NOTATIONS CARD + KEY CUES (4 Cols) - ALL CLEAN LIGHT THEME */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-4 flex flex-col justify-between gap-3 h-full"
        >
          {/* USER NOTATION CARD: Completely White & Light Themed */}
          <div className="bg-white rounded-2xl p-4 sm:p-5 border border-slate-200 shadow-sm shrink-0">
            <div className="flex items-center gap-2 mb-3 pb-2 border-b border-slate-100">
              <BookmarkCheck className="w-4 h-4 text-blue-600" />
              <h3 className="text-xs font-mono font-bold tracking-wider text-blue-700 uppercase">
                Temel Notasyonlar
              </h3>
            </div>
            
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-bold font-mono">Alfa (α):</strong>{' '}
                  <span className="text-slate-600">Attention ağırlıkları (Her kelimeye verilen önem skoru).</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-indigo-600 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-bold font-mono">H:</strong>{' '}
                  <span className="text-slate-600">Encoder gizli durumları (Girdi kelimelerinin hafıza vektörleri).</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-bold font-mono">HD:</strong>{' '}
                  <span className="text-slate-600">Decoder gizli durumları (O ana kadar üretilen çıktının hafızası).</span>
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-2 h-2 rounded-full bg-emerald-600 mt-1.5 shrink-0" />
                <span>
                  <strong className="text-slate-900 font-bold font-mono">A:</strong>{' '}
                  <span className="text-slate-600">Context vektörü (Ağırlıklı toplamla oluşturulan odak özeti).</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Card 1: Dil Farkı ve Ters Sıralama (Inversion) */}
          <div className="bg-amber-50/50 hover:bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-lg bg-amber-100 text-amber-800">
                <Shuffle className="w-3.5 h-3.5" />
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                Ters Kelime Sırası (Inversion)
              </h4>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
              İngilizce'de sıfat öndedir (<span className="font-semibold text-slate-900">"Black cat"</span>), Fransızca'da ise isim (<span className="font-semibold text-slate-900">"Le chat noir"</span>). 
              Model ilk kelimeyi (<em>"chat"</em>) üretirken ilk kelime <em>"black"</em> yerine doğrudan ikinci kelime olan <strong className="text-amber-900">"cat"</strong>e odaklanır.
            </p>
          </div>

          {/* Card 2: Bire-Çok Eşleşme (1-to-Many) */}
          <div className="bg-blue-50/50 hover:bg-blue-50/80 rounded-2xl p-3.5 border border-blue-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1">
              <span className="p-1 rounded-lg bg-blue-100 text-blue-800">
                <Repeat className="w-3.5 h-3.5" />
              </span>
              <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                Bire-Çok Eşleşme (1-to-Many)
              </h4>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
              İngilizce tek kelimelik <span className="font-semibold text-slate-900">"ate"</span>, Fransızca'da iki kelimeye (<span className="font-semibold text-slate-900">"a mangé"</span>) karşılık gelir. Attention ağı ardışık iki adım boyunca <strong className="text-blue-900">"ate"</strong> üzerinde odaklı kalır.
            </p>
          </div>

        </motion.div>

      </div>

    </div>
  )
}
