import type { RefObject } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { sectionPlaceholderImage } from '../../data/homeContent'

type HomeAboutSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

function HomeAboutSection({ sectionRef }: HomeAboutSectionProps) {
  return (
    <section
      id="about"
      ref={sectionRef}
      className="snap-start px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-7 py-0 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-10 lg:-translate-y-3 xl:-translate-y-4">
        <ScrollReveal className="w-full max-w-[31rem] space-y-5 lg:self-center xl:space-y-6">
          <SectionHeading title="About Me" eyebrow="WHO I AM" />
          <div className="max-w-xl space-y-3 text-[12px] leading-6 text-[#c2c2c2] sm:text-[13px] sm:leading-6.5 lg:text-[14px] lg:leading-7">
            <p>
              I focus on clear interfaces, strong typography, and layouts that feel calm but intentional.
            </p>
            <p>
              My approach is practical: turn the design into a solid component system, keep motion subtle, and preserve
              the visual rhythm across every viewport.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-full bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
          >
            Learn More
          </a>
        </ScrollReveal>

        <ScrollReveal className="w-full max-w-[26rem] lg:max-w-[30rem] xl:max-w-[34rem]" from="right" delay={120}>
          <div className="mx-auto aspect-square w-full overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
            <img
              src={sectionPlaceholderImage}
              alt="Temporary placeholder visual"
              className="h-full w-full object-contain p-10 sm:p-12"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { HomeAboutSection }