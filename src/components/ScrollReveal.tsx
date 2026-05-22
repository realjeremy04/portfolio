import { useEffect, useLayoutEffect, useRef } from 'react'
import gsap from 'gsap'

import type { ScrollRevealProps } from '../types/section.types'

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
  threshold = 0.18,
  from = 'up',
  stagger = 0.03,
  once = true,
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
        willChange: 'transform,opacity',
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
            duration: 0.48,
            ease: 'power3.out',
            delay: delay / 1000,
            stagger,
            overwrite: 'auto',
            onComplete: () => {
              gsap.set(revealTargets, { willChange: 'auto' })
              if (once) {
                observer.disconnect()
              }
            },
          })

          return
        }

        if (!once) {
          setHiddenState()
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -12% 0px',
      },
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
      animationRef.current?.kill()
    }
  }, [delay, offset.scale, offset.x, offset.y, once, stagger, threshold])

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
