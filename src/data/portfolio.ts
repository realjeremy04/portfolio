
import type {
  ExperienceItem,
  NavLink,
  ProjectItem,
  SkillGroup,
  Stat,
} from '../types/data-types'

export const navLinks: NavLink[] = [
  { label: 'Jeremy', href: '/' },
  { label: 'Home', href: '/' },
  { label: 'Project', href: '/project' },
]

export const stats: Stat[] = [
  { value: '3+', label: 'Years of Experience' },
  { value: '80+', label: 'Completed Projects' },
  { value: '10K+', label: 'Hours Worked' },
]

export const skillGroups: SkillGroup[] = [
  {
    title: 'Frontend',
    items: ['JavaScript', 'React JS', 'Next JS', 'TypeScript', 'Prisma', 'Three.js', 'React JS', 'JavaScript'],
  },
  {
    title: 'Backend',
    items: ['JavaScript', 'React JS', 'Next JS', 'TypeScript', 'Prisma'],
  },
  {
    title: 'Database',
    items: ['JavaScript', 'React JS'],
  },
  {
    title: 'Others',
    items: ['JavaScript', 'React JS'],
  },
]

export const experiences: ExperienceItem[] = [
  { company: 'Strativ', role: 'Software Engineer (Frontend)', period: 'Oct 2023 - Dec 2024' },
  { company: 'Anchorblock Technology', role: 'Frontend Engineer', period: 'Oct 2022 - Dec 2023' },
]

export const projects: ProjectItem[] = [
  { number: '.01', title: 'Movie Explorer', stack: 'React.js, Next.js, GPT-4' },
  { number: '.02', title: 'Epik Cart', stack: 'React.js, Tailwind CSS, React i18n', accent: true },
  { number: '.03', title: 'Property Pro', stack: 'React.js, Tailwind CSS, React i18n' },
  { number: '.04', title: 'Resume Roaster', stack: 'Next.js, Tailwind CSS, GPT-4' },
]