import React, { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
}

interface Stroke {
  points: Point[]
}

interface LaserPointerOverlayProps {
  currentSlide: number
}

// While mouse is held down (or while actively writing multi-stroke words), nothing fades.
// After releasing the mouse and pausing writing for 1.1s, everything smoothly fades out in 0.45s.
const IDLE_BEFORE_FADE_MS = 1100
const FADE_DURATION_MS = 450

export const LaserPointerOverlay: React.FC<LaserPointerOverlayProps> = ({ currentSlide }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const strokesRef = useRef<Stroke[]>([])
  const activeStrokeRef = useRef<Stroke | null>(null)
  const isDrawingRef = useRef<boolean>(false)
  const lastReleasedAtRef = useRef<number | null>(null)
  const dragDistanceRef = useRef<number>(0)
  const lastPosRef = useRef<Point | null>(null)

  // Clear all strokes when changing slides
  useEffect(() => {
    strokesRef.current = []
    activeStrokeRef.current = null
    isDrawingRef.current = false
    lastReleasedAtRef.current = null
    dragDistanceRef.current = 0
  }, [currentSlide])

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let animationFrameId: number

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = window.innerWidth * dpr
      canvas.height = window.innerHeight * dpr
      canvas.style.width = `${window.innerWidth}px`
      canvas.style.height = `${window.innerHeight}px`
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0)
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    const isInteractiveControl = (target: EventTarget | null): boolean => {
      if (!(target instanceof Element)) return false
      return Boolean(
        target.closest('button, a, input, textarea, select, [role="button"]')
      )
    }

    // Prevent browser native image/element drag from firing pointercancel mid-drawing!
    const handleDragStart = (e: DragEvent) => {
      e.preventDefault()
    }

    const startNewStroke = (x: number, y: number) => {
      isDrawingRef.current = true
      lastReleasedAtRef.current = null // Pause any fade-out while drawing!
      const startPoint: Point = { x, y }
      lastPosRef.current = startPoint

      const newStroke: Stroke = {
        points: [startPoint],
      }
      activeStrokeRef.current = newStroke
      strokesRef.current.push(newStroke)
    }

    const handlePointerDown = (e: PointerEvent) => {
      dragDistanceRef.current = 0
      if (e.button !== 0 || isInteractiveControl(e.target)) {
        isDrawingRef.current = false
        return
      }
      startNewStroke(e.clientX, e.clientY)
    }

    const handlePointerMove = (e: PointerEvent) => {
      // If left mouse button is physically held down ((e.buttons & 1) === 1),
      // keep drawing even if browser fired a stray pointer event
      const isLeftButtonPressed = (e.buttons & 1) === 1

      if (!isLeftButtonPressed) {
        if (isDrawingRef.current) {
          endDrawing()
        }
        return
      }

      if (!isDrawingRef.current || !activeStrokeRef.current) {
        if (isInteractiveControl(e.target)) return
        startNewStroke(e.clientX, e.clientY)
      }

      lastReleasedAtRef.current = null // Never fade while mouse button is held down

      const currentPoint: Point = { x: e.clientX, y: e.clientY }
      if (lastPosRef.current) {
        const dx = currentPoint.x - lastPosRef.current.x
        const dy = currentPoint.y - lastPosRef.current.y
        const dist = Math.hypot(dx, dy)
        if (dist < 1.5) return
        dragDistanceRef.current += dist
      }

      lastPosRef.current = currentPoint
      activeStrokeRef.current?.points.push(currentPoint)
    }

    const endDrawing = () => {
      if (!isDrawingRef.current) return
      isDrawingRef.current = false

      if (activeStrokeRef.current) {
        if (activeStrokeRef.current.points.length < 2 && dragDistanceRef.current < 6) {
          strokesRef.current = strokesRef.current.filter((s) => s !== activeStrokeRef.current)
        }
        activeStrokeRef.current = null
      }

      // Start the countdown only after mouse button is released
      if (strokesRef.current.length > 0) {
        lastReleasedAtRef.current = performance.now()
      }

      setTimeout(() => {
        dragDistanceRef.current = 0
      }, 80)
    }

    const handleClickCapture = (e: MouseEvent) => {
      if (isInteractiveControl(e.target)) {
        dragDistanceRef.current = 0
        return
      }
      if (dragDistanceRef.current >= 22) {
        e.stopPropagation()
        e.preventDefault()
        dragDistanceRef.current = 0
      }
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' || e.key.toLowerCase() === 'c') {
        strokesRef.current = []
        activeStrokeRef.current = null
        isDrawingRef.current = false
        lastReleasedAtRef.current = null
      }
    }

    const renderLoop = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      if (strokesRef.current.length > 0) {
        let alpha = 1

        // ONLY fade when user is NOT holding down the mouse button
        if (!isDrawingRef.current && lastReleasedAtRef.current !== null) {
          const idleElapsed = now - lastReleasedAtRef.current
          if (idleElapsed >= IDLE_BEFORE_FADE_MS + FADE_DURATION_MS) {
            strokesRef.current = []
            lastReleasedAtRef.current = null
            alpha = 0
          } else if (idleElapsed > IDLE_BEFORE_FADE_MS) {
            alpha = Math.max(0, 1 - (idleElapsed - IDLE_BEFORE_FADE_MS) / FADE_DURATION_MS)
          }
        }

        if (alpha > 0.01) {
          ctx.save()
          ctx.lineCap = 'round'
          ctx.lineJoin = 'round'
          ctx.shadowColor = `rgba(220, 38, 38, ${0.35 * alpha})`
          ctx.shadowBlur = 4
          ctx.strokeStyle = `rgba(220, 38, 38, ${0.95 * alpha})`
          ctx.lineWidth = 3.2

          for (const stroke of strokesRef.current) {
            const pts = stroke.points
            if (pts.length < 2) continue

            ctx.beginPath()
            ctx.moveTo(pts[0].x, pts[0].y)
            for (let i = 1; i < pts.length - 1; i++) {
              const midX = (pts[i].x + pts[i + 1].x) / 2
              const midY = (pts[i].y + pts[i + 1].y) / 2
              ctx.quadraticCurveTo(pts[i].x, pts[i].y, midX, midY)
            }
            ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y)
            ctx.stroke()
          }

          ctx.restore()
        }
      }

      animationFrameId = requestAnimationFrame(renderLoop)
    }

    animationFrameId = requestAnimationFrame(renderLoop)

    window.addEventListener('dragstart', handleDragStart, { capture: true })
    window.addEventListener('pointerdown', handlePointerDown, { capture: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerup', endDrawing, { capture: true })
    window.addEventListener('click', handleClickCapture, { capture: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('dragstart', handleDragStart, { capture: true })
      window.removeEventListener('pointerdown', handlePointerDown, { capture: true })
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', endDrawing, { capture: true })
      window.removeEventListener('click', handleClickCapture, { capture: true })
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-[9998]"
    />
  )
}
