import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { ProjectListItem } from '../ProjectListItem'
import type { ProjectItem } from '../../types/data-types'

type HomeProjectsSectionProps = {
  projects: ProjectItem[]
}

function HomeProjectsSection({ projects }: HomeProjectsSectionProps) {
  return (
    <section
      id="projects"
      className="snap-start border-b border-white/10 px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-screen max-w-360 items-center gap-12 py-20 lg:grid-cols-[1fr_0.96fr] lg:gap-16">
        <ScrollReveal className="space-y-8" from="left" delay={40}>
          <SectionHeading title="Projects" eyebrow="SELECTED WORK" />
          <div className="space-y-4">
            {projects.map((project, index) => (
              <ScrollReveal key={project.number} from="left" delay={index * 120}>
                <ProjectListItem project={project} />
              </ScrollReveal>
            ))}
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-xs bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
          >
            Learn More
          </a>
        </ScrollReveal>

        <ScrollReveal from="right" delay={120}>
          <div className="relative mx-auto w-full max-w-155">
            <div className="absolute -inset-4 rounded-[42px] bg-[#00ff66]/5 blur-2xl" />
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
              <div className="grid min-h-140 gap-4 p-4 sm:grid-cols-[1.1fr_0.9fr]">
                <div className="space-y-4 rounded-[30px] border border-white/10 bg-white/4 p-5">
                  <div className="h-56 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(0,255,102,0.08),rgba(255,255,255,0.02))] p-4">
                    <div className="h-full rounded-[20px] border border-[#00ff66]/20 bg-[radial-gradient(circle_at_top,rgba(0,255,102,0.22),transparent_45%),linear-gradient(180deg,#171717,#0f0f0f)]" />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Case Study</p>
                      <p className="mt-2 text-[13px] text-[#ededed]">High contrast, clean components, deliberate spacing.</p>
                    </div>
                    <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Stack</p>
                      <p className="mt-2 text-[13px] text-[#ededed]">React, Tailwind CSS, TypeScript, motion</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#151515,#0c0c0c)] p-4">
                    <div className="h-55 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,255,102,0.12),rgba(255,255,255,0.02))]" />
                  </div>
                  <div className="rounded-[30px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Outcome</p>
                    <p className="mt-2 text-[13px] leading-6 text-[#c2c2c2]">
                      Fast-loading layouts with smooth section transitions and a consistent black/green visual identity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { HomeProjectsSection }