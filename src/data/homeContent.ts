import { LuFolderOpen, LuHouse, LuMail, LuUserRound } from 'react-icons/lu'

export const sectionLinks = [
  { label: 'Home', href: '#home', icon: LuHouse },
  { label: 'About', href: '#about', icon: LuUserRound },
  { label: 'Projects', href: '#projects', icon: LuFolderOpen },
  { label: 'Contact', href: '#contact', icon: LuMail },
] as const

export const aboutHighlights = [
  {
    title: 'Strategy',
    text: 'Clear hierarchy, purposeful spacing, and content that guides attention naturally.',
  },
  {
    title: 'Execution',
    text: 'Clean React architecture with Tailwind-first styling and smooth interaction polish.',
  },
  {
    title: 'Delivery',
    text: 'Responsive layouts that hold up across desktop, tablet, and mobile screens.',
  },
] as const

export const contactLinks = [
  { label: 'Email', value: 'hello@youremail.com', href: 'mailto:hello@youremail.com' },
  { label: 'GitHub', value: 'github.com/you', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/you', href: 'https://linkedin.com' },
] as const