import type { NavigationLink } from './navigation.types'
import type { Stat } from './common.types'

export type ProjectShowcaseItem = {
  number: string
  category: string
  title: string
  summary: string
  stack: string[]
  stars: string
  source: NavigationLink
  live: NavigationLink
  accent?: boolean
  stats: Stat[]
}

export type ProjectListItemProps = {
  project: ProjectShowcaseItem
}