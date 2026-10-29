import React, { useEffect, useRef } from 'react'

interface TimedPoint {
  x: number
  y: number
  t: number
}

interface Stroke {
  points: TimedPoint[]
}

interface LaserPointerOverlayProps {
  currentSlide: number
}

const HOLD_DURATION_MS = 220 // 0.22s full brightness per drawn point
const FADE_DURATION_MS = 230 // 0.23s smooth fade-out (total ~0.45s lifetime)

export const LaserPointerOverlay: React.FC<LaserPointerOverlayProps> = ({ currentSlide }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const strokesRef = useRef<Stroke[]>([])
  const activeStrokeRef = useRef<Stroke | null>(null)
  const isDrawingRef = useRef<boolean>(false)
  const dragDistanceRef = useRef<number>(0)
  const lastPosRef = useRef<{ x: number; y: number } | null>(null)

  // Clear all strokes when changing slides
  useEffect(() => {
    strokesRef.current = []
    activeStrokeRef.current = null
    isDrawingRef.current = false
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
      if (!(target instanceof HTMLElement)) return false
      return Boolean(
        target.closest('button, a, input, textarea, select, [role="button"]')
      )
    }

    const handlePointerDown = (e: PointerEvent) => {
      dragDistanceRef.current = 0
      if (e.button !== 0 || isInteractiveControl(e.target)) return

      isDrawingRef.current = true
      const now = performance.now()
      const startPoint: TimedPoint = { x: e.clientX, y: e.clientY, t: now }
      lastPosRef.current = { x: e.clientX, y: e.clientY }

      const newStroke: Stroke = {
        points: [startPoint],
      }
      activeStrokeRef.current = newStroke
      strokesRef.current.push(newStroke)
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDrawingRef.current || !activeStrokeRef.current) return

      const currentPoint: TimedPoint = {
        x: e.clientX,
        y: e.clientY,
        t: performance.now(),
      }
      if (lastPosRef.current) {
        const dx = currentPoint.x - lastPosRef.current.x
        const dy = currentPoint.y - lastPosRef.current.y
        const dist = Math.hypot(dx, dy)
        if (dist < 1.5) return
        dragDistanceRef.current += dist
      }

      lastPosRef.current = { x: currentPoint.x, y: currentPoint.y }
      activeStrokeRef.current.points.push(currentPoint)
    }

    const endDrawing = () => {
      if (!isDrawingRef.current) return
      isDrawingRef.current = false
      activeStrokeRef.current = null
      setTimeout(() => {
        dragDistanceRef.current = 0
      }, 80)
    }

    // Prevent accidental click on video/slide right after drawing a laser stroke,
    // but NEVER block clicks on interactive buttons/controls
    const handleClickCapture = (e: MouseEvent) => {
      if (isInteractiveControl(e.target)) {
        dragDistanceRef.current = 0
        return
      }
      if (dragDistanceRef.current >= 6) {
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
      }
    }

    const renderLoop = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      const maxAge = HOLD_DURATION_MS + FADE_DURATION_MS

      // Prune expired points from each stroke
      for (const stroke of strokesRef.current) {
        stroke.points = stroke.points.filter((pt) => now - pt.t < maxAge)
      }
      strokesRef.current = strokesRef.current.filter(
        (stroke) => stroke.points.length >= 2 || stroke === activeStrokeRef.current
      )

      ctx.save()
      ctx.lineCap = 'round'
      ctx.lineJoin = 'round'
      ctx.lineWidth = 3.2

      for (const stroke of strokesRef.current) {
        const pts = stroke.points
        if (pts.length < 2) continue

        for (let i = 1; i < pts.length; i++) {
          const p0 = pts[i - 1]
          const p1 = pts[i]
          const age = now - p1.t

          let alpha = 1
          if (age > HOLD_DURATION_MS) {
            alpha = Math.max(0, 1 - (age - HOLD_DURATION_MS) / FADE_DURATION_MS)
          }
          if (alpha <= 0.01) continue

          ctx.beginPath()
          ctx.moveTo(p0.x, p0.y)
          ctx.lineTo(p1.x, p1.y)
          ctx.shadowColor = `rgba(220, 38, 38, ${0.35 * alpha})`
          ctx.shadowBlur = 4
          ctx.strokeStyle = `rgba(220, 38, 38, ${0.95 * alpha})`
          ctx.stroke()
        }
      }

      ctx.restore()

      animationFrameId = requestAnimationFrame(renderLoop)
    }

    animationFrameId = requestAnimationFrame(renderLoop)

    window.addEventListener('pointerdown', handlePointerDown, { capture: true })
    window.addEventListener('pointermove', handlePointerMove, { passive: true })
    window.addEventListener('pointerup', endDrawing, { capture: true })
    window.addEventListener('pointercancel', endDrawing, { capture: true })
    window.addEventListener('click', handleClickCapture, { capture: true })
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointerdown', handlePointerDown, { capture: true })
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', endDrawing, { capture: true })
      window.removeEventListener('pointercancel', endDrawing, { capture: true })
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
