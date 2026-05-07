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
    category: 'Frontend / Discovery',
    title: 'Movie Explorer',
    summary:
      'A cinematic discovery experience that balances search, filtering, and watchlist flows with a fast, polished interface built for browsing at speed.',
    stack: ['React', 'TypeScript', 'TMDB API', 'Tailwind CSS'],
    stars: '538',
    source: {
      label: 'Source',
      href: 'https://github.com/realjeremy04',
    },
    live: {
      label: 'Live',
      href: 'https://realjeremy04.github.io/portfolio',
    },
    accent: true,
    stats: [
      { label: 'Focus', value: 'Search UX' },
      { label: 'Motion', value: 'GSAP' },
      { label: 'Ship', value: 'Production' },
    ],
  },
  {
    number: '.02',
    category: 'Commerce / Cart System',
    title: 'Epik Cart',
    summary:
      'A streamlined shopping flow with responsive product surfaces, cart interactions, and a clean content hierarchy that keeps the browsing experience focused.',
    stack: ['React', 'Tailwind CSS', 'TypeScript', 'API Design'],
    stars: '214',
    source: {
      label: 'Source',
      href: 'https://github.com/realjeremy04',
    },
    live: {
      label: 'Live',
      href: 'https://realjeremy04.github.io/portfolio',
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