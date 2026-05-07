export type ProjectAction = {
  label: string
  href: string
}

export type ProjectStat = {
  label: string
  value: string
}

export type ProjectShowcaseItem = {
  number: string
  category: string
  title: string
  summary: string
  stack: string[]
  stars: string
  source: ProjectAction
  live: ProjectAction
  accent?: boolean
  stats: ProjectStat[]
}

export const projectShowcase: ProjectShowcaseItem[] = [
  {
    number: '.01',
    category: 'Management & Personal Commerce',
    title: 'B-ShowSell',
    summary:
      'A website for Brand Collaboration Management & Personal Commerce System.',
    stack: ['React', 'TypeScript', 'Redux', 'Tailwind CSS'],
    stars: '538',
    source: {
      label: 'Source',
      href: 'https://github.com/SEP490-Project',
    },
    live: {
      label: 'Live',
      href: '#',
    },
    stats: [
      { label: 'Focus', value: 'Search UX' },
      { label: 'Motion', value: 'GSAP' },
      { label: 'Ship', value: 'Production' },
    ],
  },
  {
    number: '.02',
    category: 'Healthcare',
    title: 'EduCare',
    summary:
      'A healthcare platform developed for primary schools.',
    stack: ['React', 'MUI', 'JavaScript'],
    stars: '214',
    source: {
      label: 'Source',
      href: 'https://github.com/WDP301-SMMS',
    },
    live: {
      label: 'Live',
      href: '#',
    },
    stats: [
      { label: 'Scope', value: 'E-commerce' },
      { label: 'UX', value: 'Checkout' },
      { label: 'State', value: 'Responsive' },
    ],
  },
  {
    number: '.03',
    category: 'Product / Dashboard',
    title: 'Property Pro',
    summary:
      'A data-rich property workflow concept focused on clarity, structured metadata, and quick scanning for a more operational, dashboard-like feel.',
    stack: ['React', 'Tailwind CSS', 'Charts', 'TypeScript'],
    stars: '128',
    source: {
      label: 'Source',
      href: 'https://github.com/realjeremy04',
    },
    live: {
      label: 'Live',
      href: 'https://realjeremy04.github.io/portfolio',
    },
    stats: [
      { label: 'Focus', value: 'Data layout' },
      { label: 'Stack', value: 'Front-end' },
      { label: 'Mode', value: 'Analytical' },
    ],
  },
  {
    number: '.04',
    category: 'AI / Resume Tooling',
    title: 'Resume Roaster',
    summary:
      'An AI-assisted resume workflow that leans into concise feedback, structured output, and a lightweight interaction model for fast review cycles.',
    stack: ['Next.js', 'Tailwind CSS', 'OpenAI', 'TypeScript'],
    stars: '89',
    source: {
      label: 'Source',
      href: 'https://github.com/realjeremy04',
    },
    live: {
      label: 'Live',
      href: 'https://realjeremy04.github.io/portfolio',
    },
    stats: [
      { label: 'Role', value: 'AI tooling' },
      { label: 'Output', value: 'Feedback loop' },
      { label: 'Speed', value: 'Instant' },
    ],
  },
]