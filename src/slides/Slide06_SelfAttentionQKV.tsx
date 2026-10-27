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
  Search, 
  Tag, 
  Package, 
  Layers, 
  Lightbulb 
} from 'lucide-react'

export const Slide06_SelfAttentionQKV: React.FC = () => {
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
              BÖLÜM 2: TRANSFORMER TEMELLERİ</span>
            <span className="text-xs text-slate-400 font-mono">| Query, Key, Value Matrisleri & Çok Başlı Dikkat (h=8)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Self-Attention: QKV ve Çok Başlı Dikkat</h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-mono font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 06</span>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (8 Cols Video, 4 Cols Clean Speaker Cues) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 my-auto z-10 items-stretch flex-1 py-3 min-h-0">
        
        {/* LEFT COLUMN: INTERACTIVE VIDEO PLAYER (8 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-8 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Video Container (No blur when paused, 100% sharp frame) */}
          <div 
            className="relative w-full flex-1 bg-black rounded-xl overflow-hidden flex items-center justify-center min-h-[260px] cursor-pointer" 
            onClick={togglePlay}
          >
            <video
              ref={videoRef}
              src="/encoder_self_attention.mp4"
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

        {/* RIGHT COLUMN: SPEAKER REMINDER CUES (4 Cols) - ALL LIGHT THEME */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-4 flex flex-col justify-between gap-3 h-full"
        >
          {/* Card 1: Q, K, V Somut Açıklama */}
          <div className="bg-white rounded-2xl p-4 border border-slate-200 shadow-sm shrink-0">
            <h3 className="text-xs font-mono font-bold tracking-wider text-blue-700 uppercase mb-2.5 pb-1.5 border-b border-slate-100">
              Q, K, V Vektörleri Ne İşe Yarar?
            </h3>
            <ul className="space-y-2 text-xs sm:text-[13px]">
              <li className="flex items-start gap-2">
                <Search className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-bold">Query (Q):</strong>{' '}
                  <span className="text-slate-600"><em>"Ben ne arıyorum?"</em> (Kelimenin sorgusu).</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Tag className="w-4 h-4 text-indigo-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-bold">Key (K):</strong>{' '}
                  <span className="text-slate-600"><em>"Ben ne içeriyorum?"</em> (Diğer kelimelerin etiketleri).</span>
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Package className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span>
                  <strong className="text-slate-900 font-bold">Value (V):</strong>{' '}
                  <span className="text-slate-600"><em>"Taşıdığım bilgi nedir?"</em> (Asıl içerik vektörü).</span>
                </span>
              </li>
            </ul>
          </div>

          {/* Card 2: Softmax Filtrelemesi */}
          <div className="bg-amber-50/50 hover:bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat mb-1">
              Softmax ile Alakasız Kelimeleri Eleme
            </h4>
            <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
              İlgili kelimelerin puanları büyütülürken, alakasız kelimeler <span className="font-mono font-bold text-amber-900">0.001</span> gibi küçük katsayılarla çarpılarak geri plana itilir.
            </p>
          </div>

          {/* Card 3: Multi-Head Attention (Hiperparametre & Z Çıktısı) */}
          <div className="bg-blue-50/50 hover:bg-blue-50/80 rounded-2xl p-3.5 border border-blue-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center justify-between mb-1">
              <div className="flex items-center gap-1.5">
                <Layers className="w-4 h-4 text-blue-600" />
                <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-montserrat">
                  Multi-Head Attention (h = 8 Kafa)
                </h4>
              </div>
              <span className="text-[10px] font-mono font-semibold text-blue-700 bg-blue-100/70 px-2 py-0.5 rounded">
                Hiperparametre
              </span>
            </div>
            <p className="text-[11px] sm:text-xs text-slate-700 leading-relaxed">
              Kafa sayısı bir <strong>hiperparametredir</strong> (burada <span className="font-mono font-bold">h = 8</span>); model anlam ve bağlam gibi farklı yönlere aynı anda odaklanır.
            </p>
            <p className="text-[11px] sm:text-xs text-blue-900 font-medium mt-1 leading-snug">
              ➔ Kafaların birleşiminden çıkan <span className="font-mono font-bold">Z matrisi</span>, Encoder'ın 2. katmanı olan <strong>Fully Connected (Linear) katmana</strong> aktarılır.
            </p>
          </div>

          {/* ViT Bağlantısı (Takeaway) */}
          <div className="bg-white rounded-xl p-3 border border-slate-200 shadow-xs shrink-0">
            <div className="flex items-center gap-2 text-xs">
              <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-slate-700">
                <strong className="text-slate-900">ViT Bağlantısı:</strong> Vision Transformer (ViT), Decoder kullanmaz; yalnızca bu Encoder bloklarını üst üste dizerek görüntüleri anlar!
              </span>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  )
}
