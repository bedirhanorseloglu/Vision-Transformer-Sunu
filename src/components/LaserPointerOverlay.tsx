import React, { useEffect, useRef } from 'react'

interface Point {
  x: number
  y: number
}

interface Stroke {
  points: Point[]
  finishedAt: number | null // null while actively drawing, timestamp when released
}

interface LaserPointerOverlayProps {
  currentSlide: number
}

const HOLD_DURATION_MS = 3500 // 3.5 seconds stays 100% visible after stroke ends
const FADE_DURATION_MS = 900  // 0.9 seconds smooth fade-out

export const LaserPointerOverlay: React.FC<LaserPointerOverlayProps> = ({ currentSlide }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glowRef = useRef<HTMLDivElement>(null)
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
  }, [currentSlide])

  useEffect(() => {
    const canvas = canvasRef.current
    const glow = glowRef.current
    if (!canvas || !glow) return

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
      // Move laser glow immediately
      glow.style.opacity = '1'
      glow.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0) scale(1.25)`

      // Only draw with primary button (left click / pen touch) and not on UI buttons/sliders
      if (e.button !== 0 || isInteractiveControl(e.target)) return

      isDrawingRef.current = true
      dragDistanceRef.current = 0
      const startPoint = { x: e.clientX, y: e.clientY }
      lastPosRef.current = startPoint

      const newStroke: Stroke = {
        points: [startPoint],
        finishedAt: null,
      }
      activeStrokeRef.current = newStroke
      strokesRef.current.push(newStroke)
    }

    const handlePointerMove = (e: PointerEvent) => {
      glow.style.opacity = '1'
      const scale = isDrawingRef.current ? 1.3 : 1
      glow.style.transform = `translate3d(${e.clientX - 18}px, ${e.clientY - 18}px, 0) scale(${scale})`

      if (!isDrawingRef.current || !activeStrokeRef.current) return

      const currentPoint = { x: e.clientX, y: e.clientY }
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
      glow.style.transform = glow.style.transform.replace(/scale\([^)]+\)/, 'scale(1)')
      if (!isDrawingRef.current) return
      isDrawingRef.current = false

      if (activeStrokeRef.current) {
        // If user just clicked without dragging (< 6px), don't leave a stray dot
        if (dragDistanceRef.current < 6) {
          strokesRef.current = strokesRef.current.filter((s) => s !== activeStrokeRef.current)
        } else {
          activeStrokeRef.current.finishedAt = performance.now()
        }
        activeStrokeRef.current = null
      }
    }

    // Prevent accidental click (e.g. pausing video or opening modal) right after drawing a laser stroke
    const handleClickCapture = (e: MouseEvent) => {
      if (dragDistanceRef.current >= 6) {
        e.stopPropagation()
        e.preventDefault()
        dragDistanceRef.current = 0
      }
    }

    const handlePointerLeave = () => {
      glow.style.opacity = '0'
      endDrawing()
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

      // Keep only strokes that haven't completely faded out
      strokesRef.current = strokesRef.current.filter((stroke) => {
        if (stroke.finishedAt === null) return true
        return now - stroke.finishedAt < HOLD_DURATION_MS + FADE_DURATION_MS
      })

      for (const stroke of strokesRef.current) {
        const pts = stroke.points
        if (pts.length < 2) continue

        let alpha = 1
        if (stroke.finishedAt !== null) {
          const elapsed = now - stroke.finishedAt
          if (elapsed > HOLD_DURATION_MS) {
            alpha = Math.max(0, 1 - (elapsed - HOLD_DURATION_MS) / FADE_DURATION_MS)
          }
        }

        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // Build smooth quadratic curve path
        ctx.beginPath()
        ctx.moveTo(pts[0].x, pts[0].y)
        for (let i = 1; i < pts.length - 1; i++) {
          const midX = (pts[i].x + pts[i + 1].x) / 2
          const midY = (pts[i].y + pts[i + 1].y) / 2
          ctx.quadraticCurveTo(pts[i].x, pts[i].y, midX, midY)
        }
        ctx.lineTo(pts[pts.length - 1].x, pts[pts.length - 1].y)

        // Outer red laser glow
        ctx.shadowColor = `rgba(239, 68, 68, ${0.85 * alpha})`
        ctx.shadowBlur = 12
        ctx.strokeStyle = `rgba(220, 38, 38, ${0.92 * alpha})`
        ctx.lineWidth = 4.2
        ctx.stroke()

        // Inner bright laser core
        ctx.shadowBlur = 0
        ctx.strokeStyle = `rgba(255, 220, 220, ${0.85 * alpha})`
        ctx.lineWidth = 1.6
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
    document.addEventListener('mouseleave', handlePointerLeave)
    window.addEventListener('keydown', handleKeyDown)

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('resize', resizeCanvas)
      window.removeEventListener('pointerdown', handlePointerDown, { capture: true })
      window.removeEventListener('pointermove', handlePointerMove)
      window.removeEventListener('pointerup', endDrawing, { capture: true })
      window.removeEventListener('pointercancel', endDrawing, { capture: true })
      window.removeEventListener('click', handleClickCapture, { capture: true })
      document.removeEventListener('mouseleave', handlePointerLeave)
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [])

  return (
    <>
      {/* Full-screen Laser Ink Canvas */}
      <canvas
        ref={canvasRef}
        className="fixed inset-0 pointer-events-none z-[9998]"
      />

      {/* Red Laser Pointer Ambient Halo */}
      <div
        ref={glowRef}
        className="fixed top-0 left-0 w-9 h-9 rounded-full pointer-events-none z-[9999] opacity-0 transition-opacity duration-150"
        style={{
          background:
            'radial-gradient(circle, rgba(239,68,68,0.48) 0%, rgba(220,38,38,0.24) 45%, rgba(239,68,68,0) 75%)',
          boxShadow: '0 0 18px 4px rgba(239, 68, 68, 0.35)',
          willChange: 'transform',
        }}
      />
    </>
  )
}
