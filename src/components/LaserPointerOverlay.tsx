import React, { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
}

interface Stroke {
  points: Point[]
  finishedAt: number | null // null while mouse button is held down; timestamp when released
}

interface LaserPointerOverlayProps {
  currentSlide: number
}

const HOLD_AFTER_RELEASE_MS = 600 // Stays 100% visible for 0.6s after releasing click
const FADE_DURATION_MS = 350      // Smoothly fades out over 0.35s (medium-fast total ~0.95s)

export const LaserPointerOverlay: React.FC<LaserPointerOverlayProps> = ({ currentSlide }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const strokesRef = useRef<Stroke[]>([])
  const activeStrokeRef = useRef<Stroke | null>(null)
  const isDrawingRef = useRef<boolean>(false)
  const dragDistanceRef = useRef<number>(0)
  const lastPosRef = useRef<Point | null>(null)

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

    // IMPORTANT: Use Element (not HTMLElement) so SVG icons (<svg>, <rect>, <path>) inside <button> match!
    const isInteractiveControl = (target: EventTarget | null): boolean => {
      if (!(target instanceof Element)) return false
      return Boolean(
        target.closest('button, a, input, textarea, select, [role="button"]')
      )
    }

    const handlePointerDown = (e: PointerEvent) => {
      dragDistanceRef.current = 0
      if (e.button !== 0 || isInteractiveControl(e.target)) {
        isDrawingRef.current = false
        return
      }

      isDrawingRef.current = true
      const startPoint: Point = { x: e.clientX, y: e.clientY }
      lastPosRef.current = startPoint

      const newStroke: Stroke = {
        points: [startPoint],
        finishedAt: null, // Never fades while mouse button is held down
      }
      activeStrokeRef.current = newStroke
      strokesRef.current.push(newStroke)
    }

    const handlePointerMove = (e: PointerEvent) => {
      if (!isDrawingRef.current || !activeStrokeRef.current) return

      const currentPoint: Point = { x: e.clientX, y: e.clientY }
      if (lastPosRef.current) {
        const dx = currentPoint.x - lastPosRef.current.x
        const dy = currentPoint.y - lastPosRef.current.y
        const dist = Math.hypot(dx, dy)
        if (dist < 1.5) return
        dragDistanceRef.current += dist
      }

      lastPosRef.current = currentPoint
      activeStrokeRef.current.points.push(currentPoint)
    }

    const endDrawing = () => {
      if (!isDrawingRef.current) return
      isDrawingRef.current = false

      if (activeStrokeRef.current) {
        if (dragDistanceRef.current < 6) {
          strokesRef.current = strokesRef.current.filter((s) => s !== activeStrokeRef.current)
        } else {
          // Start the fade timer only when the user releases the mouse button
          activeStrokeRef.current.finishedAt = performance.now()
        }
        activeStrokeRef.current = null
      }

      setTimeout(() => {
        dragDistanceRef.current = 0
      }, 80)
    }

    // Prevent accidental click on video/slide ONLY after a deliberate laser drawing stroke (>= 22px),
    // and NEVER block clicks on interactive buttons/controls (including SVG icons inside buttons).
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
      }
    }

    const renderLoop = (now: number) => {
      ctx.clearRect(0, 0, window.innerWidth, window.innerHeight)

      // Keep active strokes (finishedAt === null) forever while mouse is held down;
      // remove finished strokes after HOLD_AFTER_RELEASE_MS + FADE_DURATION_MS
      strokesRef.current = strokesRef.current.filter((stroke) => {
        if (stroke.finishedAt === null) return true
        return now - stroke.finishedAt < HOLD_AFTER_RELEASE_MS + FADE_DURATION_MS
      })

      for (const stroke of strokesRef.current) {
        const pts = stroke.points
        if (pts.length < 2) continue

        let alpha = 1
        if (stroke.finishedAt !== null) {
          const elapsed = now - stroke.finishedAt
          if (elapsed > HOLD_AFTER_RELEASE_MS) {
            alpha = Math.max(0, 1 - (elapsed - HOLD_AFTER_RELEASE_MS) / FADE_DURATION_MS)
          }
        }

        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // Smooth quadratic curve path
        ctx.beginPath()
        ctx.moveTo(pts[0].x, pts[0].y)
        for (let i = 1; i < pts.length - 1; i++) {
          const midX = (pts[i].x + pts[i + 1].x) / 2
          const midY = (pts[i].y + pts[i + 1].y) / 2
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, midX, midY)
        }
        ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y)

        ctx.shadowColor = `rgba(220, 38, 38, ${0.35 * alpha})`
        ctx.shadowBlur = 4
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.95 * alpha})`
        ctx.lineWidth = 3.2
        ctx.stroke()

        ctx.restore()
      }

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
