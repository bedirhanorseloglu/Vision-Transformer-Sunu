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
  Scale,
  Network,
  Wrench
} from 'lucide-react'

export const Slide14_PatchSizeQuadraticCost: React.FC = () => {
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
    <div className="relative w-full h-full bg-white rounded-3xl shadow-[0_20px_50px_-15px_rgba(37,99,235,0.07)] border border-slate-200/90 overflow-hidden flex flex-col justify-between p-6 sm:p-8 md:p-9 select-none">

      {/* Background soft ambient accents */}
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
              BÖLÜM 3: VISION TRANSFORMER (ViT)
            </span>
            <span className="text-xs text-slate-400 font-mono">| Karesel Maliyet O(N²) & Çözüm Yolları</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            Neden 16×16 Patch? Karesel Maliyet ve Çözüm Yolları
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası */}
        <div className="hidden sm:flex items-center gap-2">
          <span className="text-xs font-mono text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200 font-medium">
            Makale Bölüm 1 & 3.2
          </span>
          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 15</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (8 Cols Video Player, 4 Cols 3 Açıklayıcı Kart) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-7 my-auto z-10 items-stretch flex-1 py-3 min-h-0">

        {/* SOL: ETKİLEŞİMLİ VİDEO OYNATICI (8 Kolon) */}
        <motion.div
          initial={{ opacity: 0, x: -20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.05, ease: PUNCHY_EASE }}
          className="lg:col-span-8 flex flex-col justify-between bg-slate-50/80 rounded-2xl p-3 sm:p-4 border border-slate-200/90 shadow-sm overflow-hidden h-full group"
        >
          {/* Video Container - Yüksekliği Doldurur, Durdurulduğunda No Blur (Kristal Net) */}
          <div
            className="relative w-full flex-1 bg-black rounded-xl overflow-hidden flex items-center justify-center min-h-[260px] cursor-pointer"
            onClick={togglePlay}
          >
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

            {/* Durdurulduğunda Donmuş Net Kare Rozeti */}
            {!isPlaying && (
              <div className="absolute top-3 right-3 bg-black/60 border border-white/20 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none select-none">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span className="font-mono font-medium">Durduruldu (Net Kare)</span>
              </div>
            )}

            {/* Canlı Konsept Bilgisi (Sol Üst) */}
            <div className="absolute top-3 left-3 bg-black/60 border border-white/20 text-white text-xs px-2.5 py-1 rounded-full flex items-center gap-1.5 pointer-events-none select-none">
              <span className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-blue-500 animate-pulse' : 'bg-slate-400'}`} />
              <span className="font-mono text-[11px]">
                {currentTime < 8 ? '🎯 16×16 Sabit Patch Boyutu' : currentTime < 19 ? '⚡ Çözünürlük Büyüdükçe Karesel Patlama' : '🛡️ CNN vs ViT: Veri Miktarı Karşılaştırması'}
              </span>
            </div>
          </div>

          {/* Oynatıcı Kontrolleri (Slide 05 ile Birebir Aynı Temiz Mavi Tasarım) */}
          <div className="mt-3 bg-white rounded-xl p-2.5 sm:p-3 border border-slate-200/80 flex flex-col gap-2 shrink-0 shadow-xs">
            {/* İlerleme Çubuğu */}
            <div className="flex items-center gap-3">
              <span className="text-[11px] font-mono text-slate-500 shrink-0 w-9 text-right font-medium">
                {formatTime(currentTime)}
              </span>
              <input
                type="range"
                min="0"
                max="100"
                step="0.1"
                value={progress}
                onChange={handleSeek}
                className="w-full h-1.5 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-600 hover:accent-blue-500"
              />
              <span className="text-[11px] font-mono text-slate-500 shrink-0 w-9 font-medium">
                {formatTime(duration)}
              </span>
            </div>

            {/* Butonlar ve Anlatım Noktaları */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <button
                  onClick={togglePlay}
                  className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white transition-colors shadow-xs"
                  title={isPlaying ? 'Durdur' : 'Oynat'}
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4 fill-white" />}
                </button>
                <button
                  onClick={() => skipTime(-3)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="3 Saniye Geri"
                >
                  <Rewind className="w-4 h-4" />
                </button>
                <button
                  onClick={() => skipTime(3)}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="3 Saniye İleri"
                >
                  <FastForward className="w-4 h-4" />
                </button>
                <button
                  onClick={restartVideo}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60"
                  title="Başa Dön"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Tıklanabilir Bölüm Butonları & Ses */}
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <button
                  onClick={() => seekToTime(0)}
                  className={`px-2.5 py-1 rounded-md transition-all border ${currentTime < 8 ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold shadow-2xs' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                >
                  16×16 Sabit Boyut
                </button>
                <button
                  onClick={() => seekToTime(8)}
                  className={`px-2.5 py-1 rounded-md transition-all border ${currentTime >= 8 && currentTime < 19 ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold shadow-2xs' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                >
                  Çözünürlük & Karesel Patlama
                </button>
                <button
                  onClick={() => seekToTime(19)}
                  className={`px-2.5 py-1 rounded-md transition-all border ${currentTime >= 19 ? 'bg-amber-50 text-amber-800 border-amber-200 font-bold shadow-2xs' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                >
                  CNN vs ViT (Veri)
                </button>

                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg bg-slate-100 hover:bg-slate-200 text-slate-700 transition-colors border border-slate-200/60 flex items-center gap-1.5 text-xs ml-1"
                  title={isMuted ? 'Sesi Aç' : 'Sustur'}
                >
                  {isMuted ? <VolumeX className="w-4 h-4 text-amber-600" /> : <Volume2 className="w-4 h-4 text-emerald-600" />}
                  <span className="hidden sm:inline text-[11px] font-mono font-medium">{isMuted ? 'Sessiz' : 'Sesli'}</span>
                </button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* SAĞ: NET AÇIKLAMALAR VE ÇIKARIMLAR (4 Kolon - 3 Dengeli Kart) */}
        <motion.div
          initial={{ opacity: 0, x: 20, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.28, delay: 0.1, ease: PUNCHY_EASE }}
          className="lg:col-span-4 flex flex-col justify-between gap-3 h-full"
        >
          {/* Kart 1: 16x16 Neden Seçildi? (Altın Denge) */}
          <div className="bg-blue-50/50 hover:bg-blue-50/70 rounded-2xl p-4 border border-blue-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-blue-100 text-blue-800">
                <Layers className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                1. Neden 16×16? (Denge Noktası)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
              Tek bir piksel görsel bir desen taşımaz. 16×16 piksellik bir patch; kenar, köşe ve doku gibi <strong>anlamlı görsel parçaları</strong> korur. Patch çok büyürse detaylar kaybolur; çok küçülürse hesaplama patlar.
            </p>
            <div className="bg-white/90 rounded-lg py-1 px-2.5 border border-blue-100 text-[11px] font-mono text-slate-600 flex items-center justify-between">
              <span>Patch Seçenekleri:</span>
              <strong className="text-blue-900 font-bold">ViT-14 (Detaylı) | ViT-16 (Standart) | ViT-32 (Hızlı)</strong>
            </div>
          </div>

          {/* Kart 2: Çözünürlük Büyüdükçe Karesel Patlama (Video ile Uyumlu) */}
          <div className="bg-red-50/50 hover:bg-red-50/70 rounded-2xl p-4 border border-red-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-red-100 text-red-800">
                <Network className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                2. Çözünürlük ve Karesel Patlama: O(N²)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
              Videoda görüldüğü gibi, 16×16 patch boyutu sabit kalsa dahi çözünürlük arttıkça patch sayısı katlanır. 128×128 resimde <strong>4.096</strong> olan attention hesabı, 2048×2048 çözünürlükte <strong>268 Milyon'a fırlar!</strong> Piksel piksel verilseydi bu hesaplama trilyonlara ulaşırdı.
            </p>
            <div className="bg-white/90 rounded-lg py-1 px-2.5 border border-red-100 text-[11px] font-mono text-slate-700 flex items-center justify-between">
              <span>Videodaki Karesel Artış:</span>
              <strong className="text-red-700 font-bold">128px (4 Bin) ➔ 2048px (268 Milyon Attention)</strong>
            </div>
          </div>

          {/* Kart 3: Bu Kilitlenme Pratikte Nasıl Çözülür? (Sade ve Anlaşılır) */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-emerald-100 text-emerald-800">
                <Wrench className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                3. Bu Kilitlenme Pratikte Nasıl Çözülür?
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
              <strong>1. Patch Boyutunu Büyütmek (ViT-32):</strong> Görüntü çok büyükse (2048px), 16×16 yerine <strong>32×32 patch</strong> kullanılır; böylece patch sayısı 4 kat azalarak donanım rahatlatılır.
              <br />
              <strong>2. Küçük Başlayıp Büyütme:</strong> <strong>Pre-training</strong> düşük çözünürlükte (<code>224×224</code>) hızlıca yapılır; <strong>fine-tuning</strong> aşamasında ise çözünürlük büyütülerek hem donanım korunur hem de <strong>performans artırılır</strong>.
            </p>
            <div className="bg-white/90 rounded-lg py-1 px-2.5 border border-emerald-100 text-[11px] font-mono flex items-center justify-between text-slate-700">
              <span>Büyük Resim İçin Pratik Çözüm:</span>
              <strong className="text-emerald-800 font-bold">Daha Büyük Patch (32×32)</strong>
            </div>
          </div>
        </motion.div>

      </div>



    </div>
  )
}
