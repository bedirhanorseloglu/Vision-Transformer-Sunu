import React, { useRef, useState } from 'react'
import { motion } from 'framer-motion'
import {
  ExternalLink,
  Play,
  Pause,
  RotateCcw,
  FastForward,
  Rewind,
  Volume2,
  VolumeX,
  Eye,
  Layers, Scale,
  Network,
} from 'lucide-react'

export const Slide12_CnnVsVitReceptiveField: React.FC = () => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const videoRef = useRef<HTMLVideoElement>(null)

  const [isPlaying, setIsPlaying] = useState<boolean>(true)
  const [isMuted, setIsMuted] = useState<boolean>(true)
  const [progress, setProgress] = useState<number>(0)
  const [duration, setDuration] = useState<number>(48)
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
    const newTime = (parseFloat(e.target.value) / 100) * (duration || 48)
    videoRef.current.currentTime = newTime
    setProgress(parseFloat(e.target.value))
  }

  const handleTimeUpdate = () => {
    if (!videoRef.current) return
    const cur = videoRef.current.currentTime
    const dur = videoRef.current.duration || 48
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
            <span className="text-xs text-slate-400 font-mono">| Alıcı Alanı & Görsel Algı (CNN vs ViT)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-montserrat tracking-tight">
            CNN vs ViT: Alıcı Alanı ve Görsel Algı
          </h2>
        </div>

        {/* Sağ Üst: Slayt Numarası & Canlı Simülatör */}
        <div className="hidden sm:flex items-center gap-2.5">
          <motion.a
            href="https://jaden-shin-1214.github.io/attention-visualization/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -1 }}
            whileTap={{ scale: 0.96 }}
            className="relative flex items-center gap-2 text-xs font-bold text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 px-3.5 py-1.5 rounded-full shadow-md shadow-blue-500/25 ring-2 ring-blue-400/40 hover:ring-blue-500 transition-all group overflow-hidden cursor-pointer"
            title="Canlı Attention Görselleştirme Uygulamasını Yeni Sekmede Aç"
          >
            {/* Canlı Parlama Efekti */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/25 to-transparent pointer-events-none" />

            {/* Yanıp Sönen Yeşil Canlı Durum Sinyali */}
            <span className="relative flex h-2 w-2 shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400" />
            </span>

            <span className="tracking-wide">Canlı Simülatör</span>
            <ExternalLink className="w-3.5 h-3.5 text-white/90 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform shrink-0" />
          </motion.a>


          <div className="flex items-center gap-1.5 text-xs font-mono font-semibold text-blue-700 bg-blue-50 px-3 py-1.5 rounded-full border border-blue-200">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
            <span>Slayt 11</span>
          </div>
        </div>
      </motion.div>

      {/* 2. MAIN CONTENT: 12 COLS (8 Cols Video, 4 Cols 3 Açıklayıcı Kart) */}
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
              src="/cnn_ve_vit.mp4"
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
                {currentTime < 16 ? '🌐 1. ve Son Patch Arası Global Attention' : currentTime < 33 ? '👁️ Küresel (ViT) vs Yerel (CNN) Alıcı Alanı' : '🐱 CNN (Doku) vs ViT (Şekil / Silüet)'}
              </span>
            </div>
          </div>

          {/* Oynatıcı Kontrolleri (Slide 05 Standartı Mavi Tema) */}
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
                  title="Başa Dön"
                >
                  <RotateCcw className="w-4 h-4" />
                </button>
              </div>

              {/* Tıklanabilir Bölüm Butonları & Ses */}
              <div className="flex items-center gap-1.5 font-mono text-[10px]">
                <button
                  onClick={() => seekToTime(0)}
                  className={`px-2.5 py-1 rounded-md transition-all border ${currentTime < 16 ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold shadow-2xs' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                >
                  Küresel Dikkat
                </button>
                <button
                  onClick={() => seekToTime(17)}
                  className={`px-2.5 py-1 rounded-md transition-all border ${currentTime >= 16 && currentTime < 33 ? 'bg-blue-50 text-blue-700 border-blue-200 font-bold shadow-2xs' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                >
                  Alıcı Alanı (Receptive Field)
                </button>
                <button
                  onClick={() => seekToTime(34)}
                  className={`px-2.5 py-1 rounded-md transition-all border ${currentTime >= 33 ? 'bg-amber-50 text-amber-800 border-amber-200 font-bold shadow-2xs' : 'bg-slate-50 text-slate-600 border-slate-200 hover:bg-slate-100'}`}
                >
                  Doku vs Şekil
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
          {/* Kart 1: ViT'in Küresel Alıcı Alanı */}
          <div className="bg-blue-50/50 hover:bg-blue-50/70 rounded-2xl p-4 border border-blue-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-blue-100 text-blue-800">
                <Network className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                ViT: Küresel Alıcı Alanı (Global Receptive Field)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
              Self-Attention sayesinde <strong>1. patch ile son patch</strong> arasındaki ilişki daha ilk katmandan itibaren hesaplanır. Model görüntünün tüm parçalarını aynı anda birbirine bağlayarak bütünsel bir bağlam kurar.
            </p>
            <div className="flex items-center justify-between gap-2">
              <div className="bg-white/90 rounded-lg py-1 px-2.5 border border-blue-100 text-[11px] font-mono text-slate-700 flex-1">
                <span>Görüş Kapsamı: </span>
                <strong className="text-blue-700 font-bold">İlk Katmandan Tüm Resim</strong>
              </div>
              <motion.a
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                href="https://jaden-shin-1214.github.io/attention-visualization/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 py-1.5 px-3 rounded-lg shadow-xs shadow-blue-500/20 transition-all shrink-0 cursor-pointer"
                title="Canlı Attention Simülasyonunu Aç"
              >
                <span>Canlı Simülatör</span>
                <ExternalLink className="w-3 h-3 text-white/90" />
              </motion.a>
            </div>
          </div>

          {/* Kart 2: CNN'in Yerel Alıcı Alanı */}
          <div className="bg-emerald-50/50 hover:bg-emerald-50/70 rounded-2xl p-4 border border-emerald-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-emerald-100 text-emerald-800">
                <Layers className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                CNN: Yerel Alıcı Alanı (Local Receptive Field)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
              CNN filtreleri (örn. 3×3) yalnızca yan yana duran pikselleri işler (Inductive Bias). Resmin tamamına dair küresel bilgiye ancak <strong>çok derin katmanlar geçildikten sonra</strong> kademeli olarak ulaşabilir.
            </p>
            <div className="bg-white/90 rounded-lg py-1 px-2.5 border border-emerald-100 text-[11px] font-mono text-slate-600 flex items-center justify-between">
              <span>Görüş Kapsamı:</span>
              <strong className="text-emerald-900 font-bold">Piksel Piksel Adım Adım Büyür</strong>
            </div>
          </div>

          {/* Kart 3: Görsel Algı Farkı: Doku vs Şekil */}
          <div className="bg-amber-50/50 hover:bg-amber-50/70 rounded-2xl p-4 border border-amber-200/70 shadow-xs flex flex-col justify-center flex-1 transition-all">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="p-1 rounded-lg bg-amber-100 text-amber-800">
                <Eye className="w-4 h-4" />
              </span>
              <h3 className="text-sm sm:text-base font-bold text-slate-900 font-montserrat">
                Görsel Algı: Doku (CNN) vs Şekil (ViT)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed mb-2">
              CNN yerel detaylara odaklandığı için nesneleri çoğunlukla <strong>dokusuna (texture - kürk deseni)</strong> bakarak sınıflandırır. ViT ise küresel dikkat sayesinde nesnenin ana <strong>silüetine ve şekline (shape)</strong> odaklanır.
            </p>
            <div className="bg-white/90 rounded-lg py-1 px-2.5 border border-amber-100 text-[11px] font-mono flex items-center justify-between">
              <span className="text-emerald-800 font-semibold">CNN = Doku Önyargısı</span>
              <span className="text-amber-800 font-bold">ViT = Şekil Önyargısı 🐾</span>
            </div>
          </div>
        </motion.div>

      </div>

      {/* 3. BOTTOM: SUMMARY TAKEAWAY */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, delay: 0.12, ease: PUNCHY_EASE }}
        className="w-full bg-slate-50 rounded-xl py-2 px-4 border border-slate-200 shadow-xs flex items-center justify-between gap-3 shrink-0 text-xs"
      >
        <div className="flex items-center gap-2">
          <Scale className="w-4 h-4 text-blue-600 shrink-0" />
          <span className="text-slate-700 text-xs sm:text-sm text-justify">
            <strong className="text-slate-900 font-semibold">Temel Çıkarım:</strong> CNN yerel filtreleriyle nesneleri daha çok dokusundan (kürk, desen) yakalarken; ViT ilk katmandan itibaren tüm patch'leri eşleştirerek küresel şekil ve silüete odaklanır.
          </span>
        </div>

        <motion.a
          whileHover={{ scale: 1.04 }}
          whileTap={{ scale: 0.96 }}
          href="https://jaden-shin-1214.github.io/attention-visualization/"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:flex items-center gap-1.5 text-xs font-bold text-blue-700 hover:text-blue-900 bg-white hover:bg-blue-50 px-3 py-1 rounded-lg border border-blue-200 shadow-2xs transition-all shrink-0 cursor-pointer"
          title="Canlı Attention Görselleştirme Uygulamasını Aç"
        >
          <span>Canlı Simülatör ↗</span>
        </motion.a>
      </motion.div>

    </div>
  )
}
