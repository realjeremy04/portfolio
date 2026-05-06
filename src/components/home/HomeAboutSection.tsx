import heroImage from '../../assets/hero.png'
import type { RefObject } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'

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
      <div className="mx-auto grid min-h-screen max-w-360 items-center justify-items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="w-full max-w-xl space-y-8" from="left" delay={40}>
          <SectionHeading title="About Me" eyebrow="WHO I AM" />
          <div className="max-w-xl space-y-5 text-[13px] leading-7 text-[#c2c2c2] sm:text-[14px]">
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

        <ScrollReveal className="w-full max-w-155" from="right" delay={120}>
          <div className="mx-auto w-full overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
            <img
              src={heroImage}
              alt="Decorative portrait panel"
              className="h-[24rem] w-full object-cover grayscale contrast-110 brightness-75 sm:h-[30rem]"
            />
            <div className="h-px w-full bg-white/10" />
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#8d8d8d]">
              <span>Vietnam · GMT+7</span>
              <span>Modern React interfaces</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { HomeAboutSection }