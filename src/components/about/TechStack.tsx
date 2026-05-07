import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import {
  SiNextdotjs,
  SiExpo,
  SiExpress,
  SiNodedotjs,
  SiHtml5,
  SiCss,
  SiTypescript,
  SiTailwindcss,
  SiSupabase,
  SiReact,
  SiFlutter,
  SiLaravel,
  SiGo,
} from 'react-icons/si'

const techItems = [
  { id: 'next', name: 'Next.js', Icon: SiNextdotjs },
  { id: 'expo', name: 'Expo', Icon: SiExpo },
  { id: 'express', name: 'Express.js', Icon: SiExpress },
  { id: 'node', name: 'Node.js', Icon: SiNodedotjs },
  { id: 'html', name: 'HTML5', Icon: SiHtml5 },
  { id: 'css', name: 'CSS3', Icon: SiCss },
  { id: 'ts', name: 'TypeScript', Icon: SiTypescript },
  { id: 'tw', name: 'TailwindCSS', Icon: SiTailwindcss },
  { id: 'supabase', name: 'Supabase', Icon: SiSupabase },
  { id: 'react', name: 'React.js', Icon: SiReact },
  { id: 'flutter', name: 'Flutter', Icon: SiFlutter },
  { id: 'laravel', name: 'Laravel', Icon: SiLaravel },
  { id: 'go', name: 'Go', Icon: SiGo },
]

export function TechStack() {
  return (
    <section className="snap-start px-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[100svh] max-w-1200 items-start justify-items-center gap-8 py-8 sm:gap-10 sm:py-12 lg:py-0 lg:-translate-y-3 xl:-translate-y-4">
        <SectionHeading title="Technology Stack" eyebrow="TOOLS" animateItems compact />

        <ScrollReveal>
          <div className="mt-0 mx-auto w-full max-w-1200 rounded-2xl bg-[#0f0f0f] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
            <div className="grid grid-cols-3 gap-6 sm:grid-cols-6 lg:grid-cols-7 items-center">
              {techItems.map(({ id, name, Icon }) => (
                <div key={id} className="flex flex-col items-center gap-2 text-center">
                  <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#0b0b0b] border border-white/6 text-[#dfe3e6] shadow-[0_6px_20px_rgba(0,0,0,0.28)]">
                    <Icon className="h-6 w-6" />
                  </div>
                  <div className="mt-2 text-xs text-[#bfc3c6]">{name}</div>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
