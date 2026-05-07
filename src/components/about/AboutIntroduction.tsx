import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { projectsSectionImage, contactSectionImage } from '../../data/homeContent'

export function AboutIntroduction() {
  return (
    <section className="snap-start px-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-4 py-8 sm:gap-[1.125rem] sm:py-10 md:gap-5 md:py-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-center lg:justify-items-center lg:gap-10 lg:py-0 lg:-translate-y-3 xl:-translate-y-4">
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
            <div className="order-1 lg:order-2 relative mx-auto w-full max-w-[20rem] sm:max-w-[24rem] lg:max-w-[30rem]">
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
