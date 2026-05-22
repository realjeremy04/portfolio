import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { ProjectsHeroVisual } from './ProjectsHeroVisual'

function ProjectHeroSection() {
  return (
    <section className="relative snap-start px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10">
      <div className="grid min-h-[100svh] w-full items-center justify-items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(18.5rem,21.5rem)] lg:gap-10 lg:py-0 xl:max-w-screen xl:grid-cols-[minmax(0,1fr)_minmax(21rem,25rem)] xl:gap-12 xl:-translate-y-3 2xl:max-w-screen 2xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] 2xl:gap-14 2xl:-translate-y-4">
        <ScrollReveal className="order-2 w-full max-w-[21.5rem] space-y-4 sm:max-w-[26rem] sm:space-y-5 md:max-w-[31rem] lg:order-1 lg:max-w-[26.5rem] lg:space-y-6 lg:self-center xl:max-w-[30rem] xl:space-y-7" from="left">
          <SectionHeading title="My Projects" eyebrow="SELECTED WORK" animateItems compact framedTitle hideEyebrowOnMobile className="relative z-10 -mt-10 ml-3 sm:-mt-12 sm:ml-4 md:-mt-14 md:ml-5 lg:mt-0 lg:ml-0" />
          <div className="max-w-[21rem] space-y-2 text-[11.5px] leading-[1.45rem] text-[#c2c2c2] sm:max-w-[24rem] sm:space-y-2.5 sm:text-[12.5px] sm:leading-6 md:max-w-[28rem] lg:max-w-[27rem] lg:text-[13.5px] lg:leading-6.5 xl:max-w-[31rem] xl:text-[14px] xl:leading-7">
            <p data-reveal-item>
              A premium showcase of technical work built with the same spacing rhythm, typography, and motion language as the Homepage.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-1 w-full max-w-[21.5rem] justify-self-center sm:max-w-[26rem] md:max-w-[31rem] lg:order-2 lg:max-w-[19rem] xl:max-w-[23.5rem] 2xl:max-w-[36rem]" from="right" delay={16}>
          <div data-reveal-item className="relative">
            <ProjectsHeroVisual />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { ProjectHeroSection }