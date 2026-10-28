import React, { useEffect, useState, useRef } from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'
import { presentationSlides } from '../slides'

interface SlideContainerProps {
  currentSlide: number
  direction: number
  isExportMode?: boolean
  children: React.ReactNode
}

// Encoded academic attribution tokens (invisible to plain-text search)
const _A1 = [66, 101, 100, 105, 114, 104, 97, 110, 32, 214, 114, 115, 101, 108, 111, 287, 108, 117]
const _A2 = [98, 101, 100, 105, 114, 104, 97, 110, 111, 114, 115, 101, 108, 111, 103, 108, 117]
const _U1 = [75, 97, 114, 97, 100, 101, 110, 105, 122, 32, 84, 101, 107, 110, 105, 107, 32, 220, 110, 105, 118, 101, 114, 115, 105, 116, 101, 115, 105]
const _dec = (arr: number[]) => String.fromCharCode(...arr)

export const SlideContainer: React.FC<SlideContainerProps> = ({
  currentSlide,
  direction,
  isExportMode,
  children,
}) => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const
  const containerRef = useRef<HTMLDivElement>(null)
  const [isTampered, setIsTampered] = useState(false)

  useEffect(() => {
    const authorName = _dec(_A1)
    const githubHandle = _dec(_A2)
    const uniName = _dec(_U1)

    // 1. Check component function source integrity across Slide 01 and Slide 19
    const firstSlideFn = presentationSlides[0]?.component?.toString() || ''
    const lastSlideFn = presentationSlides[presentationSlides.length - 1]?.component?.toString() || ''

    if (
      !firstSlideFn.includes(authorName) ||
      !firstSlideFn.includes(uniName) ||
      !lastSlideFn.includes(authorName) ||
      !lastSlideFn.includes(githubHandle)
    ) {
      setIsTampered(true)
      return
    }

    // 2. Live DOM verification when on Cover or Closing slide (prevents DevTools DOM editing)
    if (currentSlide === 0 || currentSlide === presentationSlides.length - 1) {
      const timer = setTimeout(() => {
        const text = containerRef.current?.innerText || ''
        if (!text.includes(authorName)) {
          setIsTampered(true)
        }
      }, 450)
      return () => clearTimeout(timer)
    }
  }, [currentSlide])

  const variants: Variants = {
    enter: (dir: number) => ({
      x: dir > 0 ? 30 : -30,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.25,
        ease: PUNCHY_EASE,
      },
    },
    exit: (dir: number) => ({
      x: dir > 0 ? -25 : 25,
      opacity: 0,
      scale: 0.99,
      transition: {
        duration: 0.18,
        ease: PUNCHY_EASE,
      },
    }),
  }

  if (isTampered) {
    const authorName = _dec(_A1)
    const githubHandle = _dec(_A2)
    const uniName = _dec(_U1)
    return (
      <div className="fixed inset-0 z-50 bg-slate-950 text-white flex items-center justify-center p-6 select-none font-sans">
        <div className="max-w-xl w-full bg-slate-900 border-2 border-red-500/80 rounded-3xl p-8 text-center shadow-2xl space-y-4">
          <div className="w-14 h-14 rounded-2xl bg-red-500/20 border border-red-500/40 text-red-400 flex items-center justify-center mx-auto text-2xl font-bold">
            ⚠️
          </div>
          <h2 className="text-2xl font-extrabold tracking-tight text-white">
            Akademik Telif &amp; Bütünlük Koruması
          </h2>
          <p className="text-sm text-slate-300 leading-relaxed">
            Bu interaktif sunum uygulaması, <strong>{uniName}</strong> Yüksek Lisans Programı kapsamında{' '}
            <strong className="text-blue-400">{authorName}</strong> tarafından geliştirilmiştir.
          </p>
          <p className="text-xs text-red-300 bg-red-950/60 border border-red-800/70 rounded-xl p-3">
            Orijinal yazar veya kurum künyesi üzerinde izinsiz değişiklik tespit edildiği için sunum kilitlenmiştir.
          </p>
          <div className="pt-2 text-xs text-slate-400 font-mono">
            Orijinal Kaynak: github.com/{githubHandle}/Vision-Transformer-Sunu
          </div>
        </div>
      </div>
    )
  }

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-screen flex items-center justify-center ${
        isExportMode
          ? 'p-2 sm:p-3'
          : 'px-3 sm:px-5 md:px-6 pt-2.5 pb-14'
      } overflow-hidden select-none`}
    >
      {/* Dynamic Ambient Glow Backdrops */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 ambient-glow-indigo rounded-full pointer-events-none opacity-25" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 ambient-glow-cyan rounded-full pointer-events-none opacity-20" />

      {/* Background Matrix Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      {/* Slide Content taking full 16:9 projector width/height */}
      <div className="relative z-10 w-full max-w-[1680px] h-[calc(100vh-4rem)] max-h-[960px] flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col will-change-transform"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
