export type NavLink = {
  label: string
  href: string
}

export type Stat = {
  value: string
  label: string
}

export type SkillGroup = {
  title: string
  items: string[]
}

export type ExperienceItem = {
  company: string
  role: string
  period: string
}

export type ProjectItem = {
  number: string
  title: string
  stack: string
  accent?: boolean
}