import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import gsap from 'gsap'
import { Observer } from 'gsap/Observer'
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import type { HomeSectionId } from '../types/navigation.types'

gsap.registerPlugin(Observer, ScrollToPlugin)
const homeSectionOrder = ['home', 'about', 'projects', 'contact'] as const satisfies readonly HomeSectionId[]

export function useHomeSectionScroll() {
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
  const activeSectionRef = useRef<HomeSectionId>('home')
  const isAnimatingRef = useRef(false)
  const releaseTimerRef = useRef<number | null>(null)
  const hasMountedRef = useRef(false)

  useEffect(() => {
    activeSectionRef.current = activeSection
  }, [activeSection])

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

  const syncUrlToSection = useCallback((sectionId: HomeSectionId) => {
    const { pathname, search } = window.location
    const nextUrl = sectionId === 'home' ? `${pathname}${search}` : `${pathname}${search}#${sectionId}`

    window.history.replaceState(null, '', nextUrl)
  }, [])

  const scrollToSection = useCallback(
    (sectionId: HomeSectionId, immediate = false) => {
      const target = sectionRefs[sectionId].current

      if (!target) {
        return
      }

      if (!immediate && isAnimatingRef.current) {
        return
      }

      if (!immediate && activeSectionRef.current === sectionId) {
        return
      }

      if (immediate) {
        activeSectionRef.current = sectionId
        setActiveSection(sectionId)
        window.scrollTo({
          top: target.getBoundingClientRect().top + window.scrollY,
          behavior: 'auto',
        })
        syncUrlToSection(sectionId)
        return
      }

      isAnimatingRef.current = true
      gsap.to(window, {
        duration: 0.9,
        ease: 'power3.out',
        scrollTo: {
          y: target,
          offsetY: 0,
          autoKill: false,
        },
        onComplete: releaseLock,
      })
    },
    [releaseLock, sectionRefs, syncUrlToSection],
  )

  const handleKeyDownCapture = useCallback(
    (event: React.KeyboardEvent<HTMLElement>) => {
      if (isAnimatingRef.current) {
        return
      }

      const currentIndex = homeSectionOrder.indexOf(activeSection)

      if (event.key === 'ArrowDown' || event.key === 'PageDown' || event.key === ' ') {
        event.preventDefault()
        scrollToSection(homeSectionOrder[Math.min(currentIndex + 1, homeSectionOrder.length - 1)])
      }

      if (event.key === 'ArrowUp' || event.key === 'PageUp') {
        event.preventDefault()
        scrollToSection(homeSectionOrder[Math.max(currentIndex - 1, 0)])
      }
    },
    [activeSection, scrollToSection],
  )

  useEffect(() => {
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches || window.matchMedia('(hover: none)').matches

    if (isTouchDevice) {
      return undefined
    }

    const observer = Observer.create({
      type: 'wheel',
      tolerance: 8,
      preventDefault: true,
      onUp: () => {
        if (isAnimatingRef.current) {
          return
        }

        const currentIndex = homeSectionOrder.indexOf(activeSectionRef.current)
        const previousSection = homeSectionOrder[Math.max(currentIndex - 1, 0)]

        if (previousSection !== activeSectionRef.current) {
          scrollToSection(previousSection)
        }
      },
      onDown: () => {
        if (isAnimatingRef.current) {
          return
        }

        const currentIndex = homeSectionOrder.indexOf(activeSectionRef.current)
        const nextSection = homeSectionOrder[Math.min(currentIndex + 1, homeSectionOrder.length - 1)]

        if (nextSection !== activeSectionRef.current) {
          scrollToSection(nextSection)
        }
      },
    })

    return () => {
      observer.kill()
    }
  }, [scrollToSection])

  useEffect(() => {
    if (!hasMountedRef.current) {
      hasMountedRef.current = true
      const hashSection = window.location.hash.replace('#', '') as HomeSectionId

      if (homeSectionOrder.includes(hashSection)) {
        // Defer the immediate scroll to avoid calling setState synchronously inside an effect
        // which can cause cascading renders. Scheduling on the next tick is sufficient.
        window.setTimeout(() => scrollToSection(hashSection, true), 0)
      }

      return undefined
    }

    syncUrlToSection(activeSection)
  }, [activeSection, scrollToSection, syncUrlToSection])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((left, right) => right.intersectionRatio - left.intersectionRatio)

        const visibleEntry = visibleEntries[0]

        if (visibleEntry?.target.id) {
          const nextSection = visibleEntry.target.id as HomeSectionId

          if (activeSectionRef.current !== nextSection) {
            activeSectionRef.current = nextSection
            setActiveSection(nextSection)
          }
        }
      },
      {
        threshold: [0.35, 0.5, 0.65],
        rootMargin: '-10% 0px -45% 0px',
      },
    )

    homeSectionOrder.forEach((sectionId) => {
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
  }, [sectionRefs])

  return {
    activeSection,
    handleKeyDownCapture,
    setActiveSection,
    scrollToSection,
    sectionRefs,
  }
}
