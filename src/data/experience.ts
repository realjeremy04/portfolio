type TimelineItem = {
  id: string
  startTime: string
  endTime: string
  location: string
  company: string
  role: string
  body: string
  stack: string[]
}

export const timeline: TimelineItem[] = [
  {
    id: 'FPT',
    startTime: 'Sep 2024',
    endTime: 'Dec 2024',
    location: 'Ho Chi Minh',
    company: 'FPT Software',
    role: 'Frontend Developer',
    body: 'Building a online learning platform for students.',
    stack: ['React.js', 'JavaScript', 'React Player'],
  },
]