import { type ReactNode, useEffect, useRef, useState } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  from?: 'up' | 'left' | 'right' | 'scale'
}

const motionStyles = {
  up: 'translate-y-8',
  left: 'translate-x-8',
  right: '-translate-x-8',
  scale: 'translate-y-4 scale-95',
} as const

const animationStyles = {
  up: 'animate-fade-up',
  left: 'animate-fade-left',
  right: 'animate-fade-right',
  scale: 'animate-fade-scale',
} as const

export function ScrollReveal({ children, className = '', delay = 0, threshold = 0.35, from = 'up' }: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting)
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={elementRef}
      className={`${className} transform-gpu transition-all duration-700 ease-out motion-reduce:transform-none motion-reduce:transition-none ${isVisible ? `translate-y-0 translate-x-0 scale-100 opacity-100 ${animationStyles[from]}` : `opacity-0 ${motionStyles[from]}`}`}
      style={{ animationDelay: `${delay}ms`, transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}