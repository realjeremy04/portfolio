import type { ReactNode } from 'react'

export type SectionHeadingProps = {
  title: string
  eyebrow?: string
  animateItems?: boolean
  compact?: boolean
  className?: string
  framedTitle?: boolean
  hideEyebrowOnMobile?: boolean
}

export type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  threshold?: number
  from?: 'up' | 'left' | 'right' | 'scale'
  stagger?: number
  once?: boolean
}