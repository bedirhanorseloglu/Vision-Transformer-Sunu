import React, { useRef, useState, useEffect } from 'react'
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
  Lightbulb,
  Users
} from 'lucide-react'

export const Slide06_SelfAttentionQKV: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(0)
  const [currentTime, setCurrentTime] = useState<number>(0)

  useEffect(() => {
    const v = videoRef.current
    if (!v) return
    const sync = () => setIsPlaying(!v.paused)
    v.addEventListener('play', sync)
    v.addEventListener('playing', sync)
    v.addEventListener('pause', sync)
    v.addEventListener('ended', sync)
    return () => {
      v.removeEventListener('play', sync)
      v.removeEventListener('playing', sync)
      v.removeEventListener('pause', sync)
      v.removeEventListener('ended', sync)
    }
  }, [])

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

  const jumpToTime = (seconds: number) => {
    if (!videoRef.current) return
    const dur = videoRef.current.duration || 20
    videoRef.current.currentTime = Math.min(dur, seconds)
    setCurrentTime(videoRef.current.currentTime)
    setProgress((videoRef.current.currentTime / dur) * 100)
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
            <span className="text-xs font-sans font-bold tracking-wider text-blue-700 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200/60">
              BÖLÜM 2: TRANSFORMER TEMELLERİ
            </span>
            <span className="text-xs text-slate-400 font-sans">| Query, Key, Value Matrisleri & Çok Başlı Dikkat (h=8)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Self-Attention: QKV ve Çok Başlı Dikkat
          </h2>
        </div>

        <div className="hidden sm:flex items-center gap-2 text-xs font-sans font-semibold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 shrink-0">
          <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
          <span>Slayt 06</span>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (7 Cols Video, 5 Cols Detailed Speaker Cues) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 my-auto z-10 items-stretch flex-1 py-2.5 min-h-0">

        {/* LEFT COLUMN: INTERACTIVE VIDEO PLAYER (7 Cols) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-7 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Video Container - White background eliminates top/bottom black letterboxing bars */}
          <div
            className="relative w-full flex-1 bg-white border border-slate-200/80 rounded-xl overflow-hidden flex items-center justify-center min-h-[250px] cursor-pointer shadow-xs"
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
              onLoadedMetadata={handleLoadedMetadata} onPlay={() => setIsPlaying(true)} onPause={() => setIsPlaying(false)}
              className="w-full h-full object-contain"
            />

            {!isPlaying && (
              <div className="absolute top-3 right-3 bg-slate-900/80 border border-white/20 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none select-none shadow-sm">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="font-sans font-medium">Durduruldu</span>
              </div>
            )}
          </div>

          {/* Interactive Player Controls + Scene Jump Pills */}
          <div className="mt-2.5 bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/80 flex flex-col gap-2 shrink-0 shadow-xs">
            {/* Scrubber Progress Bar */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-sans text-slate-500 shrink-0 w-9 text-right font-medium">
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
              <span className="text-[11px] font-sans text-slate-500 shrink-0 w-9 font-medium">
                {formatTime(duration)}
              </span>
            </div>

            {/* Buttons Bar + Quick Scene Jumpers */}
            <div className="flex flex-wrap items-center justify-between gap-2">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={togglePlay} data-video-toggle="true"
                  className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs cursor-pointer"
                  title={isPlaying ? "Durdur" : "Oynat"}
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

              {/* Scene Jump Buttons */}
              <div className="hidden xl:flex items-center gap-1.5 text-[11px] font-sans font-bold">
                <button
                  onClick={() => jumpToTime(2)}
                  className="px-2 py-1 rounded-md bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200/80 transition-colors cursor-pointer"
                  title="Q, K, V Matrislerinin Üretimi"
                >
                  1. Q, K, V Üretimi
                </button>
                <button
                  onClick={() => jumpToTime(8)}
                  className="px-2 py-1 rounded-md bg-amber-50 hover:bg-amber-100 text-amber-800 border border-amber-200/80 transition-colors cursor-pointer"
                  title="Softmax ve Attention Hesabı"
                >
                  2. Softmax Filtresi
                </button>
                <button
                  onClick={() => jumpToTime(14)}
                  className="px-2 py-1 rounded-md bg-indigo-50 hover:bg-indigo-100 text-indigo-700 border border-indigo-200/80 transition-colors cursor-pointer"
                  title="8 Başlıkların Birleştirilmesi (Z0..Z7 x W^O = Z)"
                >
                  3. Multi-Head (Z)
                </button>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 flex items-center gap-1.5 text-xs cursor-pointer"
                  title={isMuted ? "Sesi Aç" : "Sesi Kapat"}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-600" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
                  <span className="hidden sm:inline text-[11px] font-sans font-medium">{isMuted ? "Sessiz" : "Sesli"}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* RIGHT COLUMN: SPEAKER REMINDER CUES (5 Cols) - ALL LIGHT THEME */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between gap-2.5 h-full"
        >
          {/* Card 1: Q, K, V Somut Açıklama & Softmax */}
          <div className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-xs flex flex-col justify-between flex-1">
            <div>
              <div className="flex items-center justify-between mb-1.5 pb-1 border-b border-slate-100">
                <h3 className="text-xs sm:text-[13px] font-sans font-bold tracking-wider text-blue-700 uppercase">
                  1. Q, K, V Vektörleri & Softmax Filtresi
                </h3>
                <span className="text-[10px] font-sans font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded border border-slate-200">
                  X · W = Q, K, V
                </span>
              </div>
              <ul className="space-y-1 text-xs sm:text-[13px]">
                <li className="flex items-start gap-2">
                  <Search className="w-3.5 h-3.5 text-blue-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Query (Q):</strong>{' '}
                    <span className="text-slate-600"><em>"Ben ne arıyorum?"</em> (Kelimenin sorgusu).</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Tag className="w-3.5 h-3.5 text-indigo-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Key (K):</strong>{' '}
                    <span className="text-slate-600"><em>"Ben ne içeriyorum?"</em> (Diğer kelimelerin etiketleri).</span>
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <Package className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                  <span>
                    <strong className="text-slate-900 font-bold">Value (V):</strong>{' '}
                    <span className="text-slate-600"><em>"Taşıdığım bilgi nedir?"</em> (Asıl içerik vektörü).</span>
                  </span>
                </li>
              </ul>
            </div>

            <div className="mt-2 bg-slate-50 rounded-lg px-2.5 py-1.5 border border-slate-200/80 flex items-center justify-between text-[11px] font-sans">
              <span className="text-slate-600 font-medium">
                <strong>Softmax Elemesi:</strong> İlgili kelimeler parlatılır, alakasızlar <strong className="text-amber-800">0.001</strong> ile bastırılır.
              </span>
            </div>
          </div>

          {/* Card 2 (2. Kısım): Z0, Z1 ... Z7 Nedir? (8 Uzman Kafa) */}
          <div className="bg-amber-50/50 hover:bg-amber-50/80 rounded-2xl p-3.5 border border-amber-200/70 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <Users className="w-4 h-4 text-amber-600 shrink-0" />
                  <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 font-montserrat">
                    2. Z₀, Z₁ ... Z₇ Nedir? (8 Uzman Başlık)
                  </h4>
                </div>
                <span className="text-[10px] font-sans font-bold text-amber-800 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-200">
                  Aynı Cümleye 8 Bakış
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-snug">
                <span className="font-sans font-bold text-slate-900">Z₀, Z₁ ... Z₇</span> farklı cümleler değil; <strong>aynı cümlenin 8 farklı uzman başlık (Attention Head)</strong> tarafından çıkarılmış dikkat özetleridir:
              </p>
            </div>

            <div className="mt-2 grid grid-cols-3 gap-1.5 text-[11px] font-sans">
              <div className="bg-white/90 rounded-lg px-2 py-1.5 border border-amber-200/80 text-center">
                <div className="font-extrabold text-amber-900">Z₀ (1. Başlık)</div>
                <div className="text-slate-600 text-[10.5px] leading-tight mt-0.5"><em>"Kim?"</em> (Özne-Zamir)</div>
              </div>
              <div className="bg-white/90 rounded-lg px-2 py-1.5 border border-amber-200/80 text-center">
                <div className="font-extrabold text-amber-900">Z₁ (2. Başlık)</div>
                <div className="text-slate-600 text-[10.5px] leading-tight mt-0.5"><em>"Ne yaptı?"</em> (Fiil-Eylem)</div>
              </div>
              <div className="bg-white/90 rounded-lg px-2 py-1.5 border border-amber-200/80 text-center">
                <div className="font-extrabold text-amber-900">Z₂..Z₇ (Diğer)</div>
                <div className="text-slate-600 text-[10.5px] leading-tight mt-0.5"><em>"Nasıl / Nerede?"</em></div>
              </div>
            </div>
          </div>

          {/* Card 3: Multi-Head Attention (Nihai Z Matrisi & W^O Ortak Karar) */}
          <div className="bg-blue-50/50 hover:bg-blue-50/80 rounded-2xl p-3.5 border border-blue-200/70 shadow-xs flex flex-col justify-between flex-1 transition-all">
            <div>
              <div className="flex items-center justify-between mb-1">
                <div className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-blue-600 shrink-0" />
                  <h4 className="text-sm sm:text-[15px] font-bold text-slate-900 font-montserrat">
                    3. Sonuçtaki Z Matrisi (Nihai Ortak Karar)
                  </h4>
                </div>
                <span className="text-[10px] font-sans font-bold text-blue-700 bg-blue-100/80 px-2 py-0.5 rounded border border-blue-200">
                  Hiperparametre: h = 8
                </span>
              </div>
              <p className="text-xs sm:text-[13px] text-slate-700 leading-snug">
                Bu 8 uzmanın raporları (<span className="font-sans font-bold">Z₀ ... Z₇</span>) yan yana konulup <strong className="text-emerald-800">Wᴼ ağırlık matrisiyle</strong> harmanlanarak cümlenin <strong>nihai ortak kararına (Z matrisine)</strong> dönüştürülür ve <strong>Linear katmana</strong> aktarılır.
              </p>
            </div>

            <div className="mt-2 bg-white/90 rounded-lg px-2.5 py-1.5 border border-blue-200/80 flex items-center justify-between text-[11px] font-sans">
              <span className="font-bold text-slate-700">
                Concat[Z₀ ... Z₇] × <span className="text-emerald-700">Wᴼ</span> = <span className="text-blue-700 font-extrabold">Z (Ortak Özeti)</span>
              </span>
              <span className="text-blue-400 font-bold">➔</span>
              <span className="font-bold text-indigo-800 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                Linear Katman
              </span>
            </div>
          </div>

          {/* ViT Bağlantısı (Takeaway) */}
          <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-xs shrink-0">
            <div className="flex items-center gap-2 text-xs">
              <Lightbulb className="w-4 h-4 text-blue-600 shrink-0" />
              <span className="text-slate-700 text-justify leading-snug">
                <strong className="text-slate-900">ViT Bağlantısı:</strong> ViT'de de aynı resme bakan başlıklardan <strong>Z₀ renge</strong>, <strong>Z₁ şekle</strong>, <strong>Z₂ arka plana</strong> odaklanır; <strong>Z matrisi</strong> resmin bütünsel özeti olur!
              </span>
            </div>
          </div>

        </motion.div>

      </div>

    </div>
  )
}
