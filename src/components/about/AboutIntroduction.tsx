import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { projectsSectionImage, contactSectionImage } from '../../data/homeContent'

export function AboutIntroduction() {
  return (
    <section className="snap-start px-5 sm:px-8 lg:px-10">
      <div className="grid min-h-[100svh] w-full items-center justify-items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(18.5rem,21.5rem)] lg:gap-10 lg:py-0 xl:max-w-screen xl:grid-cols-[minmax(0,1fr)_minmax(21rem,25rem)] xl:gap-12 xl:-translate-y-3 2xl:max-w-screen 2xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] 2xl:gap-14 2xl:-translate-y-4">
          <ScrollReveal from="left">
            <div className="order-2 lg:order-1 lg:self-start">
              <SectionHeading title="Overview" eyebrow="BIO" animateItems compact />
              <p className="mt-4 text-[15px] leading-7 text-[#bfc3c6]">
                I graduated with a Bachelor in Software Engineering and have since focused on building reliable,
                maintainable systems for the web. I enjoy collaborating across design and engineering to find
                pragmatic solutions that scale.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-[#bfc3c6]">
                My recent work includes full-stack product development, RAG integrations, and distributed backend
                systems. I balance pragmatic engineering with product thinking to move projects forward.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal from="right">
            <div className="order-1 relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:order-2 lg:max-w-[34rem] xl:max-w-[40rem]">
              <div className="relative">
                <div className="absolute -left-8 -top-8 w-48 h-32 overflow-hidden rounded-2xl bg-[#0f0f0f] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  <img src={projectsSectionImage} alt="proj" className="w-full h-full object-cover" />
                </div>

                <div className="absolute right-0 top-20 w-44 h-44 overflow-hidden rounded-2xl bg-[#0f0f0f] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  <img src={contactSectionImage} alt="contact" className="w-full h-full object-cover" />
                </div>

                <div className="relative h-52 w-full rounded-2xl bg-gradient-to-b from-[#0b0b0b] to-[#0f0f0f]" />
              </div>
            </div>
          </ScrollReveal>
        </div>
    </section>
  )
}
