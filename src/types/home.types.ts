import type { RefObject } from 'react'

import type { HomeSectionId } from './navigation.types'

export type HomeSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

export type HomeSectionSidebarProps = {
  activeSection: HomeSectionId
  onNavigate: (sectionId: HomeSectionId) => void
}