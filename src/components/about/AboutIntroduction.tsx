import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { projectsSectionImage, contactSectionImage } from '../../data/homeContent'

export function AboutIntroduction() {
  return (
    <section className="grid snap-start justify-items-center px-5 sm:px-8 lg:px-10">
      <div className="grid min-h-[100svh] w-full max-w-[92rem] items-center justify-items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(18.5rem,21.5rem)] lg:gap-10 lg:py-0 xl:grid-cols-[minmax(0,1fr)_minmax(21rem,25rem)] xl:gap-12 xl:-translate-y-3 2xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] 2xl:gap-14 2xl:-translate-y-4">
          <ScrollReveal from="left">
            <div className="order-2 w-full max-w-[30rem] justify-self-start lg:order-1 lg:max-w-[30rem] xl:max-w-[34rem] 2xl:max-w-[44rem]">
              <SectionHeading title="Overview" eyebrow="BIO" animateItems compact framedTitle className="text-left" />
              <p className="mt-4 text-[15px] leading-7 text-[#bfc3c6] lg:max-w-[27rem] lg:text-[14px] lg:leading-6.5 xl:max-w-[33rem] xl:text-[15px] xl:leading-7">
                I graduated with a Bachelor in Software Engineering and have since focused on building reliable,
                maintainable systems for the web. I enjoy collaborating across design and engineering to find
                pragmatic solutions that scale.
              </p>
              <p className="mt-4 text-[15px] leading-7 text-[#bfc3c6] lg:max-w-[27rem] lg:text-[14px] lg:leading-6.5 xl:max-w-[33rem] xl:text-[15px] xl:leading-7">
                My recent work includes full-stack product development, RAG integrations, and distributed backend
                systems. I balance pragmatic engineering with product thinking to move projects forward.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal from="right">
            <div className="order-1 relative w-full max-w-[20rem] justify-self-end sm:max-w-[24rem] lg:order-2 lg:max-w-[34rem] xl:max-w-[40rem]">
              <div className="relative">
                <div className="absolute -left-8 -top-8 h-32 w-48 overflow-hidden rounded-2xl border border-white/8 bg-[linear-gradient(180deg,#0f1217_0%,#171a21_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  <img src={projectsSectionImage} alt="proj" className="w-full h-full object-cover" />
                </div>

                <div className="absolute right-0 top-20 h-44 w-44 overflow-hidden rounded-2xl border border-white/8 bg-[linear-gradient(180deg,#0f1217_0%,#171a21_100%)] shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                  <img src={contactSectionImage} alt="contact" className="w-full h-full object-cover" />
                </div>

                <div className="relative h-52 w-full rounded-2xl border border-white/8 bg-[linear-gradient(180deg,#0f1217_0%,#171a21_100%)]" />
              </div>
            </div>
          </ScrollReveal>
        </div>
    </section>
  )
}
