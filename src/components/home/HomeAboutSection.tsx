import heroImage from '../../assets/hero.png'
import type { RefObject } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { aboutHighlights } from '../../data/homeContent'

type HomeAboutSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

function HomeAboutSection({ sectionRef }: HomeAboutSectionProps) {
  return (
    <section
      id="about"
      ref={sectionRef}
      className="snap-start border-b border-white/10 px-5 scroll-mt-24 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-screen max-w-360 items-center gap-12 py-20 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
        <ScrollReveal className="space-y-8" from="left" delay={40}>
          <SectionHeading title="About Me" eyebrow="WHO I AM" />
          <div className="space-y-5 text-[13px] leading-7 text-[#c2c2c2] sm:text-[14px]">
            <p>
              I focus on clear interfaces, strong typography, and layouts that feel calm but intentional.
            </p>
            <p>
              My approach is practical: turn the design into a solid component system, keep motion subtle, and preserve
              the visual rhythm across every viewport.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {aboutHighlights.map((item, index) => (
              <ScrollReveal key={item.title} from="up" delay={index * 120}>
                <div className="border border-white/10 bg-white/4 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#00ff66]/30 hover:bg-white/6">
                  <p className="display-font text-[24px] font-black uppercase leading-none text-[#00ff66]">
                    {item.title}
                  </p>
                  <p className="mt-3 text-[12px] leading-6 text-[#a8a8a8]">{item.text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal from="right" delay={120}>
          <div className="relative mx-auto w-full max-w-155">
            <div className="absolute inset-0 rounded-[42px] border border-white/10 bg-white/4 blur-[0px]" />
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#101010]/85 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
              <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0f0f0f]">
                  <img
                    src={heroImage}
                    alt="Decorative portrait panel"
                    className="h-105 w-full object-cover grayscale contrast-110 brightness-75 sm:h-130"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,255,102,0.06))]" />
                </div>

                <div className="space-y-5 py-2">
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Location</p>
                    <p className="mt-2 text-[14px] text-[#ededed]">Vietnam · GMT+7</p>
                  </div>
                  <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Focus</p>
                    <p className="mt-2 text-[14px] text-[#ededed]">Modern React interfaces with polished motion and scalable structure.</p>
                  </div>
                  <div className="rounded-[22px] border border-[#00ff66]/20 bg-[#00ff66]/10 p-4">
                    <p className="text-[10px] uppercase tracking-[0.26em] text-[#9bd8a7]">Style</p>
                    <p className="mt-2 text-[14px] text-[#ededed]">Black + green, minimal, confident, and highly readable.</p>
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

export { HomeAboutSection }