import { memo } from 'react'
import type { RefObject } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { projectsSectionImage } from '../../data/homeContent'

type HomeProjectsSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

const HomeProjectsSection = memo(function HomeProjectsSection({ sectionRef }: HomeProjectsSectionProps) {
  return (
    <section
      id="projects"
      ref={sectionRef}
      className="snap-start px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-4 py-8 sm:gap-[1.125rem] sm:py-10 md:gap-5 md:py-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-center lg:justify-items-center lg:gap-10 lg:py-0 lg:-translate-y-3 xl:-translate-y-4">
        <ScrollReveal className="order-2 w-full max-w-[21.5rem] space-y-3.5 sm:max-w-[26rem] sm:space-y-4 md:max-w-[31rem] lg:order-1 lg:max-w-[31rem] lg:space-y-5 lg:self-center xl:space-y-6" from="left">
          <SectionHeading title="My Projects" eyebrow="SELECTED WORK" animateItems compact framedTitle hideEyebrowOnMobile className="relative z-10 -mt-10 ml-3 sm:-mt-12 sm:ml-4 md:-mt-14 md:ml-5 lg:mt-0 lg:ml-0" />
          <div className="max-w-[21rem] space-y-2 text-[11.5px] leading-[1.45rem] text-[#c2c2c2] sm:max-w-[24rem] sm:space-y-2.5 sm:text-[12.5px] sm:leading-6 md:max-w-[28rem] lg:max-w-xl lg:text-[14px] lg:leading-7">
            <p data-reveal-item>Selected works that I&apos;ve built over the years, and currently working on.</p>
          </div>

          <a
            data-reveal-item
            href="/portfolio/project"
            className="inline-flex min-h-[2.75rem] min-w-[8.75rem] items-center justify-center rounded-full border border-[#00ff66]/80 bg-[#00ff66] px-4 py-2.5 text-[11px] font-black uppercase tracking-[0.08em] text-[#101214] shadow-[0_10px_24px_rgba(0,255,102,0.12)] transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#3dff90] hover:bg-[#19ff79] hover:shadow-[0_16px_30px_rgba(0,255,102,0.2)] active:translate-y-0 active:scale-[0.98] sm:min-h-11 sm:min-w-[9.5rem] sm:px-5 sm:py-3 sm:text-[11.5px] lg:min-h-12 lg:min-w-[10.25rem] lg:text-[12px]"
          >
            Learn More
          </a>
        </ScrollReveal>

        <ScrollReveal className="order-1 w-full max-w-[21.5rem] justify-self-center sm:max-w-[26rem] md:max-w-[31rem] lg:order-2 lg:max-w-[30rem] xl:max-w-[34rem]" from="right" delay={16}>
          <div data-reveal-item className="mx-auto aspect-[3/2] w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0f0f0f] shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:aspect-[4/3] sm:rounded-[24px] md:aspect-[1.24/1] md:rounded-[30px] lg:aspect-square lg:rounded-[42px] lg:shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
            <img
              src={projectsSectionImage}
              alt="Temporary placeholder visual"
              className="h-full w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
})

export { HomeProjectsSection }
