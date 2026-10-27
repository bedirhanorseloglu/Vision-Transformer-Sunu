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
  Sparkles 
} from 'lucide-react'

export const Slide03_AttentionWalkthrough: React.FC = () => {
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
      
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-blue-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-emerald-500/5 rounded-full blur-[90px] pointer-events-none" />

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
            <span className="text-xs text-slate-400 font-mono">| Dinamik Ağırlıklandırma & Context Vektörü</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Attention Mekanizması Nasıl Çalışır?</h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 03</span>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 2-COLUMN (Left: Interactive Video, Right: Minimal Speaker Cues) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 my-auto z-10 items-stretch flex-1 py-3 min-h-0">
        
        {/* LEFT COLUMN: VIDEO PLAYER (8 Cols) - Clean Light Container */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-8 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Video Container (No blur when paused) */}
          <div 
            className="relative w-full flex-1 bg-black rounded-xl overflow-hidden flex items-center justify-center min-h-[260px] cursor-pointer" 
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
              <div className="absolute top-3 right-3 bg-black/60 border border-white/20 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none select-none">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="font-mono font-medium">Durduruldu</span>
              </div>
            )}
          </div>

          {/* Interactive Player Controls - Clean White Theme */}
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
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
                  title={isPlaying ? "Durdur" : "Oynat"}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>

                <button
                  onClick={() => skipTime(-5)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="5 Saniye Geri"
                >
                  <Rewind className="w-4 h-4" />
                </button>

                <button
                  onClick={() => skipTime(5)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="5 Saniye İleri"
                >
                  <FastForward className="w-4 h-4" />
                </button>

                <button
                  onClick={restartVideo}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="Başa Sar"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

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

        {/* RIGHT COLUMN: SPEAKER REMINDER CUES (4 Cols) - ALL LIGHT THEMED */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-4 flex flex-col justify-between gap-3 h-full"
        >
          {/* Step 1 */}
          <div className="bg-blue-50/50 hover:bg-blue-50/80 rounded-2xl p-4 border border-blue-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-blue-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                1
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Skorlama & Softmax
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
              Decoder, encoder'dan gelen tüm gizli durumlara bir dikkat puanı verir. <strong>Softmax</strong> ile önemli kelimelerin ağırlığı büyütülür.
            </p>
          </div>

          {/* Step 2 */}
          <div className="bg-indigo-50/50 hover:bg-indigo-50/80 rounded-2xl p-4 border border-indigo-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-indigo-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                2
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Context Vektörü (Ağırlıklı Toplam)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
              Ağırlıklar ile kelime durumları çarpılarak o adıma özel <strong>bağlam vektörü (context vector)</strong> oluşturulur.
            </p>
          </div>

          {/* Step 3 */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/80 rounded-2xl p-4 border border-emerald-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="w-6 h-6 rounded-lg bg-emerald-600 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                3
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Birleştirme & Çıktı Üretimi
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed pl-8">
              Context vektörü decoder durumu ile birleştirilip <strong>Feedforward</strong> katmanına verilir ve yeni kelime üretilir.
            </p>
          </div>

          {/* Light Theme Example Box */}
          <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs shrink-0">
            <div className="flex items-center gap-2 text-xs">
              <Sparkles className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-slate-700">
                <strong className="text-slate-900">Videodaki Örnek:</strong> <em>"ate"</em> kelimesi Fransızca iki kelimeye (<em>"a mangé"</em>) çevrilirken model doğrudan <em>"ate"</em> durumuna kilitlenir.
              </span>
            </div>
          </div>
        </motion.div>

      </div>

    </div>
  )
}
