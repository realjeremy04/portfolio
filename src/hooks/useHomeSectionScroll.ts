import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'

gsap.registerPlugin(Observer, ScrollToPlugin)

export type HomeSectionId = 'home' | 'about' | 'projects' | 'contact'

export function useHomeSectionScroll() {
  const sectionOrder = ['home', 'about', 'projects', 'contact'] as const satisfies readonly HomeSectionId[]

  const homeRef = useRef<HTMLElement | null>(null)
  const aboutRef = useRef<HTMLElement | null>(null)
  const projectsRef = useRef<HTMLElement | null>(null)
  const contactRef = useRef<HTMLElement | null>(null)

  const sectionRefs = useMemo(
    () => ({
      home: homeRef,
      about: aboutRef,
      projects: projectsRef,
      contact: contactRef,
    }),
    [],
  )

  const [activeSection, setActiveSection] = useState<HomeSectionId>('home')
  const isAnimatingRef = useRef(false)
  const releaseTimerRef = useRef<number | null>(null)

  const releaseLock = useCallback(() => {
    if (releaseTimerRef.current !== null) {
      window.clearTimeout(releaseTimerRef.current)
      releaseTimerRef.current = null
    }

    releaseTimerRef.current = window.setTimeout(() => {
      isAnimatingRef.current = false
      releaseTimerRef.current = null
    }, 250)
  }, [])

  const scrollToSection = useCallback(
    (sectionId: HomeSectionId) => {
      const target = sectionRefs[sectionId].current

      if (!target) {
        return
      }

      if (isAnimatingRef.current) {
        return
      }

      isAnimatingRef.current = true
      gsap.to(window, {
        duration: 1.1,
        ease: 'power3.out',
        scrollTo: {
          y: target,
          offsetY: 84,
          autoKill: false,
        },
        onComplete: releaseLock,
      })
    },
    [releaseLock, sectionRefs],
  )

  const handleKeyDownCapture = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (isAnimatingRef.current) {
        return
      }

      const currentIndex = sectionOrder.indexOf(activeSection)

      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        scrollToSection(sectionOrder[Math.min(currentIndex + 1, sectionOrder.length - 1)])
      }

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault()
        scrollToSection(sectionOrder[Math.max(currentIndex - 1, 0)])
      }
    },
    [activeSection, scrollToSection, sectionOrder],
  )

  useEffect(() => {
    const observer = Observer.create({
      type: 'wheel,touch',
      tolerance: 10,
      preventDefault: true,
      onUp: () => {
        if (isAnimatingRef.current) {
          return
        }

        const currentIndex = sectionOrder.indexOf(activeSection)
        const previousSection = sectionOrder[Math.max(currentIndex - 1, 0)]

        if (previousSection !== activeSection) {
          scrollToSection(previousSection)
        }
      },
      onDown: () => {
        if (isAnimatingRef.current) {
          return
        }

        const currentIndex = sectionOrder.indexOf(activeSection)
        const nextSection = sectionOrder[Math.min(currentIndex + 1, sectionOrder.length - 1)]

        if (nextSection !== activeSection) {
          scrollToSection(nextSection)
        }
      },
    })

    return () => {
      observer.kill()
    }
  }, [activeSection, scrollToSection, sectionOrder])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

        const visibleEntry = visibleEntries[0]

        if (visibleEntry?.target.id) {
          setActiveSection(visibleEntry.target.id as HomeSectionId)
        }
      },
      {
        threshold: [0.35, 0.5, 0.65],
        rootMargin: '-10% 0px -45% 0px',
      },
    )

    sectionOrder.forEach((sectionId) => {
      const element = sectionRefs[sectionId].current

      if (element) {
        observer.observe(element)
      }
    })

    return () => {
      observer.disconnect()

      if (releaseTimerRef.current !== null) {
        window.clearTimeout(releaseTimerRef.current)
      }
    }
  }, [sectionOrder, sectionRefs])

  return {
    activeSection,
    handleKeyDownCapture,
    scrollToSection,
    sectionRefs,
  }
}