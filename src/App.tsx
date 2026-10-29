import { useState, useEffect, useCallback } from 'react'
import { NavigationHUD } from './components/NavigationHUD'
import { SlideContainer } from './components/SlideContainer'
import { LaserPointerOverlay } from './components/LaserPointerOverlay'
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
      const target = e.target as HTMLInputElement
      if (
        (target.tagName === 'INPUT' && target.type !== 'range') ||
        target.tagName === 'TEXTAREA'
      ) {
        return
      }

      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        e.stopPropagation()
        if (document.activeElement instanceof HTMLElement) {
          document.activeElement.blur()
        }
        if (e.repeat) return

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

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === ' ' || e.code === 'Space') {
        e.preventDefault()
        e.stopPropagation()
      }
    }

    window.addEventListener('keydown', handleKeyDown, { capture: true })
    window.addEventListener('keyup', handleKeyUp, { capture: true })
    return () => {
      window.removeEventListener('keydown', handleKeyDown, { capture: true })
      window.removeEventListener('keyup', handleKeyUp, { capture: true })
    }
  }, [nextSlide, prevSlide, toggleFullscreen])

  const CurrentSlideComponent = presentationSlides[currentSlide]?.component || presentationSlides[0].component

  return (
    <main className="relative w-screen h-screen overflow-hidden bg-[#f8fafc] text-slate-900 select-none">
      {/* Red Laser Pointer + Auto-Fading Laser Ink Drawing Canvas */}
      {!isExportMode && <LaserPointerOverlay currentSlide={currentSlide} />}

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
