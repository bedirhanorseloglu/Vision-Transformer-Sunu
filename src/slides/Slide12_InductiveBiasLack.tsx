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
  AlertTriangle, 
  Cpu, 
  Layers, 
  Sparkles, 
  ShieldCheck, 
  Scale, 
  Zap, 
  Sliders, 
  Network 
} from 'lucide-react'

export const Slide12_InductiveBiasLack: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(26)
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

  const seekToTime = (timeInSeconds: number) => {
    if (!videoRef.current) return
    videoRef.current.currentTime = timeInSeconds
    videoRef.current.play()
    setIsPlaying(true)
  }

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!videoRef.current) return
    const newTime = (parseFloat(e.target.value) / 100) * (duration || 26)
    videoRef.current.currentTime = newTime
    setProgress(parseFloat(e.target.value))
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const cur = videoRef.current.currentTime
    const dur = videoRef.current.duration || 26
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
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-4 sm:p-5 md:p-6 select-none">
      
      {/* Background soft ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[350px] bg-red-500/5 rounded-full blur-[90px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[450px] h-[300px] bg-amber-500/5 rounded-full blur-[90px] pointer-events-none" />

      {/* 1. TOP HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.25, ease: PUNCHY_EASE }}
        className="w-full flex items-center justify-between pb-2 border-b border-slate-100 z-10 shrink-0"
      >
        <div>
          <div className="flex items-center gap-2 mb-0.5">
            <span className="text-[11px] font-mono font-bold tracking-wider text-red-700 bg-red-50 px-2.5 py-0.5 rounded-full border border-red-200/60">
              BÖLÜM 3: VISION TRANSFORMER (ViT)
            </span>
            <span className="text-[11px] text-slate-400 font-mono">| Neden 16×16? & Inductive Bias Eksikliği</span>
          </div>
          <h2 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Neden 16×16 Yama? Karesel Maliyet O(N²) ve Inductive Bias Sınırı
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Makale Bölüm 1 & 3.1
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-red-700 bg-red-50 px-3 py-1.5 rounded-full border border-red-200">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span>Slayt 12</span>
          </div>
        </div>
      </motion.div>

      {/* 2. CENTER: WIDESCREEN GRID (SOL: Video & Checkpoints [7/12], SAĞ: 3 Pedagojik Kart [5/12]) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4 my-auto z-10 flex-1 py-1 items-stretch min-h-0">
        
        {/* SOL: VIDEO OYNATICI VE ZAMAN ÇİZELGESİ (7 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-7 flex flex-col justify-between bg-slate-900/95 rounded-2xl p-2.5 sm:p-3 border border-slate-800 shadow-md min-h-0"
        >
          {/* Video Container (No Blur on Pause!) */}
          <div className="relative w-full flex-1 rounded-xl overflow-hidden bg-black flex items-center justify-center min-h-[170px] max-h-[265px]">
            <video
              ref={videoRef}
              src="/niye_16x16.mp4"
              className="w-full h-full object-contain"
              playsInline
              muted={isMuted}
              autoPlay
              loop
              onTimeUpdate={handleTimeUpdate}
              onLoadedMetadata={handleLoadedMetadata}
            />

            {/* Video Durum Rozeti */}
            <div className="absolute top-2 left-2 z-20 flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10 text-[10px] font-mono text-white">
              <span className={`w-1.5 h-1.5 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-amber-400'}`} />
              <span>{isPlaying ? 'CANLI ANİMASYON' : 'DURAKLATILDI (NET KARE)'}</span>
            </div>

            {/* Çözünürlük ve Attention Ölçeklenme Notu */}
            <div className="absolute bottom-2 right-2 z-20 hidden sm:flex items-center gap-1 bg-black/70 backdrop-blur-md px-2 py-0.5 rounded text-[9.5px] font-mono text-red-300 border border-red-500/30">
              <Cpu className="w-3 h-3 text-red-400" />
              <span>Attention Maliyeti: O(N²)</span>
            </div>
          </div>

          {/* Video Kontrolleri */}
          <div className="mt-2 bg-slate-800/90 rounded-xl p-2 border border-slate-700/60 flex flex-col gap-1.5 shrink-0">
            {/* Progress Slider */}
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-mono text-slate-400 w-8 text-right">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-700 rounded-lg appearance-none cursor-pointer accent-red-500"
              />
              <span className="text-[10px] font-mono text-slate-400 w-8">
                {formatTime(duration)}
              </span>
            </div>

            {/* Butonlar & Checkpoint Navigasyonu */}
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-1">
                <button
                  onClick={togglePlay}
                  className="w-7 h-7 rounded-lg bg-red-600 hover:bg-red-500 text-white flex items-center justify-center transition-colors shadow-xs"
                  title={isPlaying ? 'Durdur' : 'Oynat'}
                >
                  {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 ml-0.5" />}
                </button>
                <button
                  onClick={() => skipTime(-3)}
                  className="w-6 h-6 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-colors text-xs"
                  title="3 sn Geri"
                >
                  <Rewind className="w-3 h-3" />
                </button>
                <button
                  onClick={() => skipTime(3)}
                  className="w-6 h-6 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-colors text-xs"
                  title="3 sn İleri"
                >
                  <FastForward className="w-3 h-3" />
                </button>
                <button
                  onClick={restartVideo}
                  className="w-6 h-6 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-colors text-xs"
                  title="Başa Dön"
                >
                  <RotateCcw className="w-3 h-3" />
                </button>
                <button
                  onClick={toggleMute}
                  className="w-6 h-6 rounded-lg bg-slate-700 hover:bg-slate-600 text-slate-300 flex items-center justify-center transition-colors text-xs ml-1"
                  title={isMuted ? 'Sesi Aç' : 'Sustur'}
                >
                  {isMuted ? <VolumeX className="w-3 h-3 text-red-400" /> : <Volume2 className="w-3 h-3 text-emerald-400" />}
                </button>
              </div>

              {/* Tıklanabilir Checkpoint'ler */}
              <div className="flex items-center gap-1 font-mono text-[9.5px]">
                <button
                  onClick={() => seekToTime(0)}
                  className={`px-2 py-0.5 rounded transition-all ${currentTime < 7 ? 'bg-red-600 text-white font-bold' : 'bg-slate-700/70 text-slate-300 hover:bg-slate-700'}`}
                >
                  0s: 16×16 Sabit
                </button>
                <button
                  onClick={() => seekToTime(8)}
                  className={`px-2 py-0.5 rounded transition-all ${currentTime >= 7 && currentTime < 18 ? 'bg-red-600 text-white font-bold' : 'bg-slate-700/70 text-slate-300 hover:bg-slate-700'}`}
                >
                  8s: O(N²) Patlaması
                </button>
                <button
                  onClick={() => seekToTime(19)}
                  className={`px-2 py-0.5 rounded transition-all ${currentTime >= 18 ? 'bg-amber-600 text-white font-bold' : 'bg-slate-700/70 text-slate-300 hover:bg-slate-700'}`}
                >
                  19s: CNN vs ViT (Veri)
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SAĞ: PEDAGOJİK AÇIKLAMALAR & HESAPLAMA TABLOSU (5 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: 12 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.28, delay: 0.08, ease: PUNCHY_EASE }}
          className="lg:col-span-5 flex flex-col justify-between gap-2 min-h-0"
        >
          {/* Kart 1: Global Piksel Eşleşmesi ve Karesel Patlama */}
          <div className="bg-red-50/40 rounded-xl p-2.5 border border-red-200/80 shadow-2xs">
            <div className="flex items-center justify-between pb-1 border-b border-red-200/60 mb-1.5">
              <div className="flex items-center gap-1.5 text-red-900 font-bold text-xs">
                <Network className="w-3.5 h-3.5 text-red-600" />
                <span>Pikselle İlişki Kurma Çabası & O(N²)</span>
              </div>
              <span className="text-[9px] font-mono font-bold text-red-700 bg-red-100 px-1.5 py-0.2 rounded">
                All-to-All Attention
              </span>
            </div>
            
            <p className="text-[10.5px] text-slate-700 leading-snug mb-1.5">
              Self-Attention her girdiyi diğer tüm girdilerle eşleştirir. Resim piksel olarak verilseydi ($224×224$), <strong>her piksel 50.175 diğer pikselle</strong> ilişki kuracak ve işlem kilitlenecekti.
            </p>

            {/* Karşılaştırma Tablosu */}
            <div className="bg-white rounded-lg p-1.5 border border-red-100 text-[10px] font-mono">
              <div className="grid grid-cols-3 text-slate-400 font-bold pb-0.5 border-b border-slate-100 text-[9px]">
                <span>Girdi Tipi</span>
                <span className="text-center">Token (N)</span>
                <span className="text-right">Attention (N²)</span>
              </div>
              <div className="grid grid-cols-3 text-red-900 py-0.5 border-b border-slate-50 items-center">
                <span>Her Piksel</span>
                <span className="text-center font-bold">50.176</span>
                <span className="text-right font-bold text-red-600">≈ 2.5 Milyar ⚠️</span>
              </div>
              <div className="grid grid-cols-3 text-emerald-900 pt-0.5 items-center">
                <span>16×16 Yama</span>
                <span className="text-center font-bold">196</span>
                <span className="text-right font-bold text-emerald-600">≈ 38.416 ✅</span>
              </div>
            </div>
          </div>

          {/* Kart 2: 16x16 Neden Seçildi? 4 Temel Boyut */}
          <div className="bg-white rounded-xl p-2.5 border border-slate-200 shadow-2xs">
            <div className="flex items-center justify-between pb-1 border-b border-slate-100 mb-1.5">
              <span className="text-xs font-bold text-slate-900 font-montserrat">
                16×16 Neden Seçildi? (Tek Neden Maliyet mi?)
              </span>
              <span className="text-[9px] font-mono text-emerald-700 bg-emerald-50 px-1.5 py-0.2 rounded font-semibold border border-emerald-200">
                65.000× Tasarruf
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5 text-[9.5px]">
              <div className="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                <strong className="text-slate-900 block font-semibold mb-0.5">1. Hesaplama:</strong>
                <span className="text-slate-600 leading-tight block">Token'ı 256 kat azaltarak quadratic patlamayı önler.</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                <strong className="text-slate-900 block font-semibold mb-0.5">2. Yerel Örüntü:</strong>
                <span className="text-slate-600 leading-tight block">Tek piksel kördür; 16×16 blok kenar ve doku taşır.</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                <strong className="text-slate-900 block font-semibold mb-0.5">3. Denge Noktası:</strong>
                <span className="text-slate-600 leading-tight block">Küçükse maliyet uçar; büyükse detaylar kaybolur.</span>
              </div>
              <div className="bg-slate-50 rounded-lg p-1.5 border border-slate-100">
                <strong className="text-slate-900 block font-semibold mb-0.5">4. Hiperparametre:</strong>
                <span className="text-slate-600 leading-tight block">Kural değil; ViT-14 (detay) veya ViT-32 (hız) de vardır.</span>
              </div>
            </div>
          </div>

          {/* Kart 3: Inductive Bias & Veri Açlığı */}
          <div className="bg-amber-50/40 rounded-xl p-2.5 border border-amber-200/80 shadow-2xs">
            <div className="flex items-center justify-between pb-1 border-b border-amber-200/60 mb-1">
              <div className="flex items-center gap-1.5 text-amber-900 font-bold text-xs">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-600" />
                <span>Inductive Bias Yokluğu (CNN vs ViT)</span>
              </div>
              <span className="text-[9px] font-mono text-amber-800 bg-amber-100 px-1.5 py-0.2 rounded font-bold">
                Veri Açlığı
              </span>
            </div>
            <div className="text-[10px] text-slate-700 space-y-1 leading-snug">
              <div>
                <strong className="text-emerald-800">CNN:</strong> Doğuştan Yerellik ($3×3$) ve Öteleme Değişmezliği bilir; az veriyle iyi çalışır ama tavana çarpar.
              </div>
              <div>
                <strong className="text-amber-800">ViT:</strong> Sıfır mimari ön varsayım. 2D yapıyı sıfırdan öğrenir; küçük veride ezberler, <strong>büyük veride CNN'i ezer!</strong>
              </div>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 3. BOTTOM: SUMMARY TAKEAWAY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.12, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50 rounded-xl py-1.5 px-3 border border-slate-200 shadow-xs flex items-center justify-between gap-3 shrink-0 text-xs"
      >
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-red-600 shrink-0" />
          <span className="text-slate-700 text-[11px] sm:text-xs">
            <strong className="text-slate-900">Pedagojik Çıkarım:</strong> ViT, her pikselin her pikselle ilişki kurma maliyetini ($2.5B$) <strong>16×16 yamalama</strong> ile ($38K$) çözer; fakat mimari ön varsayımı olmadığı için küçük veride CNN gerisinde kalır.
          </span>
        </div>
        <div className="hidden sm:flex items-center gap-1 font-mono text-[11px] text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 font-semibold shrink-0">
          <span>Sırada: Büyük Veri Gücü ➔</span>
        </div>
      </motion.div>

    </div>
  )
}
