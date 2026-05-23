import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import type { Skill } from '../../types/about.types'

const skills: Skill[] = [
  { id: 'web', title: 'Web Development', desc: 'Modern, responsive interfaces with accessibility in mind.' },
  { id: 'backend', title: 'Backend & API', desc: 'Robust services, API design, and scalable architectures.' },
  { id: 'ai', title: 'AI & ML', desc: 'Applied ML and RAG solutions for product features.' },
  { id: 'mobile', title: 'Mobile', desc: 'Cross-platform apps and mobile-first experiences.' },
]

export function SkillsSection() {
  return (
    <section className="grid snap-start justify-items-center px-5 sm:px-8 lg:px-10">
      <div className="grid min-h-[100svh] w-full max-w-[92rem] items-start justify-items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:py-0 lg:-translate-y-3 xl:-translate-y-4">
        <SectionHeading title="Skills & Expertise" eyebrow="CAPABILITIES" animateItems compact framedTitle className="text-left" />
        <p className="mt-3 max-w-[70ch] text-[#bfc3c6]">Areas I focus on, blending product thinking with engineering craft.</p>

        <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {skills.map((s, i) => (
            <ScrollReveal key={s.id} from="up" delay={i * 8}>
              <div className="group rounded-2xl border border-white/8 bg-[#0f1217] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.35)] transition-transform hover:-translate-y-1">
                <div className="mb-3 flex items-center justify-between">
                  <div className="text-lg font-bold text-white">{s.title}</div>
                  <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#00ff66]/35 bg-[#0b0b0b] font-bold text-[#00ff66]">+</div>
                </div>

                <div className="text-sm text-[#bfc3c6]">{s.desc}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}
