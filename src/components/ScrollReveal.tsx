import { type ReactNode, useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  from?: 'up' | 'left' | 'right' | 'scale'
  stagger?: number
}

const motionOffsets = {
  up: { x: 0, y: 22, scale: 0.96 },
  left: { x: -14, y: 22, scale: 0.96 },
  right: { x: 14, y: 22, scale: 0.96 },
  scale: { x: 0, y: 16, scale: 0.94 },
} as const

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.35,
  from = 'up',
  stagger = 0.08,
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const animationRef = useRef<gsap.core.Tween | null>(null)
  const offset = motionOffsets[from]

  useLayoutEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const targets = element.querySelectorAll<HTMLElement>('[data-reveal-item]')
    const revealTargets = targets.length > 0 ? Array.from(targets) : [element]

    const setHiddenState = () => {
      gsap.set(revealTargets, {
        autoAlpha: 0,
        x: offset.x,
        y: offset.y,
        scale: offset.scale,
        force3D: true,
      })
    }

    setHiddenState()

    const observer = new IntersectionObserver(
      ([entry]) => {
        animationRef.current?.kill()

        if (entry.isIntersecting) {
          animationRef.current = gsap.to(revealTargets, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            duration: 0.72,
            ease: 'power3.out',
            delay: delay / 1000,
            stagger,
            overwrite: true,
          })

          return
        }

        setHiddenState()
      },
      {
        threshold,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      animationRef.current?.kill()
    }
  }, [delay, offset.scale, offset.x, offset.y, stagger, threshold])

  useEffect(() => {
    return () => {
      animationRef.current?.kill()
    }
  }, [])

  return (
    <div ref={elementRef} className={className}>
      {children}
    </div>
  )
}
