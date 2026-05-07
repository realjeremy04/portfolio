import heroImage from '../../assets/hero.png'
import type { RefObject } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import type { ProjectItem } from '../../types/data-types'

type HomeProjectsSectionProps = {
  projects: ProjectItem[]
  sectionRef: RefObject<HTMLElement | null>
}

function HomeProjectsSection({ projects, sectionRef }: HomeProjectsSectionProps) {
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="snap-start px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-7 py-0 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-10 lg:-translate-y-3 xl:-translate-y-4">
        <ScrollReveal className="w-full max-w-[31rem] space-y-5 lg:self-center xl:space-y-6" from="left" delay={40}>
          <SectionHeading title="My Projects" eyebrow="SELECTED WORK" />
          <div className="max-w-xl space-y-3 text-[12px] leading-6 text-[#c2c2c2] sm:text-[13px] sm:leading-6.5 lg:text-[14px] lg:leading-7">
            <p>Selected works that I&apos;ve built over the years, and currently working on.</p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
          >
            Learn More
          </a>
        </ScrollReveal>

        <ScrollReveal className="w-full max-w-[26rem] lg:max-w-[30rem] xl:max-w-[34rem]" from="right" delay={120}>
          <div className="mx-auto w-full overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
            <div className="grid gap-3 p-3 sm:grid-cols-[1.08fr_0.92fr] xl:gap-4 xl:p-4">
              <div className="space-y-3">
                <figure className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#151515]">
                  <img
                    src={heroImage}
                    alt={`${projects[0].title} preview`}
                    className="h-[clamp(12rem,17vw,15rem)] w-full object-cover grayscale contrast-110 brightness-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/5 to-transparent" />
                  <figcaption className="absolute left-4 top-4 text-[10px] uppercase tracking-[0.3em] text-white/80">
                    .01 {projects[0].title}
                  </figcaption>
                </figure>

                <div className="grid gap-3 sm:grid-cols-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Case Study</p>
                    <p className="mt-2 text-[12px] leading-5 text-[#ededed]">High contrast, clean components, deliberate spacing.</p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-3">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Stack</p>
                    <p className="mt-2 text-[12px] leading-5 text-[#ededed]">React, Tailwind CSS, TypeScript, motion</p>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <figure className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#151515]">
                  <img
                    src={heroImage}
                    alt={`${projects[1].title} preview`}
                    className="h-[clamp(12rem,17vw,15rem)] w-full object-cover grayscale contrast-110 brightness-80"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-transparent" />
                  <figcaption className="absolute left-4 bottom-4 text-[10px] uppercase tracking-[0.3em] text-white/80">
                    {projects[1].title}
                  </figcaption>
                </figure>

                <div className="rounded-[30px] border border-white/10 bg-white/5 p-3">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Outcome</p>
                  <p className="mt-2 text-[12px] leading-5 text-[#c2c2c2] sm:text-[13px] sm:leading-6">
                    Fast-loading layouts with smooth section transitions and a consistent black/green visual identity.
                  </p>
                </div>

                <a
                  href="#contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { HomeProjectsSection }