export const sectionLinks = [
  { label: 'Home', href: '#home', icon: '⌂' },
  { label: 'About', href: '#about', icon: '◌' },
  { label: 'Projects', href: '#projects', icon: '▣' },
  { label: 'Contact', href: '#contact', icon: '✉' },
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