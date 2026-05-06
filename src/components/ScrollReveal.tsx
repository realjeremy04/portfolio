import { type ReactNode, useEffect, useRef, useState } from 'react'

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  from?: 'up' | 'left' | 'right' | 'scale'
}

const motionStyles = {
  up: 'translate-y-6',
  left: 'translate-x-6',
  right: '-translate-x-6',
  scale: 'translate-y-3 scale-[0.98]',
} as const

export function ScrollReveal({
  children,
  className = '',
  delay = 0,
  threshold = 0.35,
  from = 'up',
}: ScrollRevealProps) {
  const elementRef = useRef<HTMLDivElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const element = elementRef.current

    if (!element) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -8% 0px',
      },
    )

    observer.observe(element)

    return () => observer.disconnect()
  }, [threshold])

  return (
    <div
      ref={elementRef}
      className={`${className} transform-gpu transition-[opacity,transform] duration-700 ease-out ${
        isVisible ? 'translate-y-0 translate-x-0 scale-100 opacity-100' : `opacity-0 ${motionStyles[from]}`
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  )
}