import { useState, useEffect, useCallback, useRef } from 'react'
import { NavigationHUD } from './components/NavigationHUD'
import { SlideContainer } from './components/SlideContainer'
import { presentationSlides } from './slides'

export function App() {
  const isExportMode = window.location.search.includes('export=true')
  const [currentSlide, setCurrentSlide] = useState<number>(() => {
    const hash = window.location.hash.replace('#', '')
    const num = parseInt(hash, 10)
    if (!isNaN(num) && num >= 1 && num <= presentationSlides.length) {
      return num - 1
    }
    return 0
  })

  const [direction, setDirection] = useState<number>(1)
  const [isOverviewOpen, setIsOverviewOpen] = useState<boolean>(false)
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false)
  const laserGlowRef = useRef<HTMLDivElement>(null)

  // Real-time GPU-accelerated laser pointer glow tracking
  useEffect(() => {
    if (isExportMode) return
    const el = laserGlowRef.current
    if (!el) return

    const handlePointerMove = (e: PointerEvent) => {
      el.style.opacity = '1'
      el.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0)`
    }

    const handlePointerLeave = () => {
      el.style.opacity = '0'
    }

    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    document.addEventListener('mouseleave', handlePointerLeave)
    return () => {
      window.removeEventListener('pointermove', handlePointerMove)
      document.removeEventListener('mouseleave', handlePointerLeave)
    }
  }, [isExportMode])

  // Sync hash with current slide
  useEffect(() => {
    window.location.hash = `${currentSlide + 1}`
  }, [currentSlide])

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement)
    }
    document.addEventListener('fullscreenchange', handleFullscreenChange)
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange)
  }, [])

  const goToSlide = useCallback((index: number, dir?: number) => {
    if (index >= 0 && index < presentationSlides.length) {
      setDirection(dir !== undefined ? dir : index > currentSlide ? 1 : -1)
      setCurrentSlide(index)
    }
  }, [currentSlide])

  const nextSlide = useCallback(() => {
    if (currentSlide < presentationSlides.length - 1) {
      goToSlide(currentSlide + 1, 1)
    }
  }, [currentSlide, goToSlide])

  const prevSlide = useCallback(() => {
    if (currentSlide > 0) {
      goToSlide(currentSlide - 1, -1)
    }
  }, [currentSlide, goToSlide])

  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {})
    } else {
      document.exitFullscreen().catch(() => {})
    }
  }, [])

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input/textarea (except range slider where Space should still control video)
      const target = e.target as HTMLInputElement
      if (
        (target.tagName === 'INPUT' && target.type !== 'range') ||
        target.tagName === 'TEXTAREA'
      ) {
        return
      }

      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        const video = document.querySelector('video') as HTMLVideoElement | null
        if (video) {
          if (video.paused) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
          return
        }
        nextSlide()
      } else if (e.key === 'ArrowRight' || e.key === 'PageDown') {
        e.preventDefault()
        nextSlide()
      } else if (e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault()
        prevSlide()
      } else if (e.key.toLowerCase() === 'f') {
        e.preventDefault()
        toggleFullscreen()
      } else if (e.key.toLowerCase() === 'g' || e.key.toLowerCase() === 'o') {
        e.preventDefault()
        setIsOverviewOpen((prev) => !prev)
      } else if (e.key === 'Escape') {
        setIsOverviewOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown, { capture: true })
    return () => window.removeEventListener('keydown', handleKeyDown, { capture: true })
  }, [nextSlide, prevSlide, toggleFullscreen])

  const CurrentSlideComponent = presentationSlides[currentSlide]?.component || presentationSlides[0].component

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#f8fafc] text-slate-900 select-none">
      {/* Red Laser Pointer Ambient Halo */}
      {!isExportMode && (
        <div
          ref={laserGlowRef}
          className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-150"
          style={{
            background: 'radial-gradient(circle, rgba(239,68,68,0.45) 0%, rgba(220,38,38,0.22) 45%, rgba(239,68,68,0) 75%)',
            boxShadow: '0 0 18px 4px rgba(239, 68, 68, 0.35)',
            willChange: 'transform',
          }}
        />
      )}

      <SlideContainer currentSlide={currentSlide} direction={direction} isExportMode={isExportMode}>
        <CurrentSlideComponent />
      </SlideContainer>

      {!isExportMode && <NavigationHUD
        currentSlide={currentSlide}
        totalSlides={presentationSlides.length}
        slides={presentationSlides}
        onPrev={prevSlide}
        onNext={nextSlide}
        onSelectSlide={(idx) => goToSlide(idx)}
        isOverviewOpen={isOverviewOpen}
        setIsOverviewOpen={setIsOverviewOpen}
        isFullscreen={isFullscreen}
        toggleFullscreen={toggleFullscreen}
      />}
    </main>
  )
}

export default App
