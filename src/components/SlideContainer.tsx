import React from 'react'
import { motion, AnimatePresence, type Variants } from 'framer-motion'

interface SlideContainerProps {
  currentSlide: number
  direction: number
  children: React.ReactNode
}

export const SlideContainer: React.FC<SlideContainerProps> = ({
  currentSlide,
  direction,
  children,
}) => {
  const PUNCHY_EASE = [0.16, 1, 0.3, 1] as const

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

  return (
    <div className="relative w-full h-screen flex items-center justify-center p-3 sm:p-5 md:p-6 lg:p-8 pt-4 pb-20 overflow-hidden select-none">
      {/* Dynamic Ambient Glow Backdrops */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 ambient-glow-indigo rounded-full pointer-events-none opacity-20" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 ambient-glow-cyan rounded-full pointer-events-none opacity-15" />
      
      {/* Background Matrix Pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      {/* Slide Content taking full presentation width/height */}
      <div className="relative z-10 w-full max-w-[1520px] h-[calc(100vh-5.5rem)] max-h-[860px] flex flex-col justify-center">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full h-full flex flex-col"
          >
            {children}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}
