import { SectionHeading } from '../SectionHeading'
import { ScrollReveal } from '../ScrollReveal'
import { heroSectionImage } from '../../data/homeContent'

export function AboutHero() {
  return (
    <section className="snap-start px-5 sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:max-w-[61rem] lg:grid-cols-[minmax(0,1fr)_minmax(18.5rem,21.5rem)] lg:gap-10 lg:py-0 xl:max-w-[72rem] xl:grid-cols-[minmax(0,1fr)_minmax(21rem,25rem)] xl:gap-12 xl:-translate-y-3 2xl:max-w-[86rem] 2xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] 2xl:gap-14 2xl:-translate-y-4">
        <ScrollReveal className="order-2 lg:order-1" from="left">
          <div className="lg:max-w-[27rem] xl:max-w-[31rem] 2xl:max-w-[44rem]">
            <SectionHeading title="About Me" eyebrow="WHO I AM" animateItems framedTitle />
            <p className="mt-6 text-[15px] leading-7 text-[#bfc3c6] lg:max-w-[27rem] lg:text-[14px] lg:leading-6.5 xl:max-w-[33rem] xl:text-[15px] xl:leading-7">
              I build elegant, maintainable, and high-performing web experiences. My focus is on product-quality
              engineering — bridging design, performance, and scalable architecture to deliver thoughtful digital
              products.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-1 lg:order-2" from="right" delay={18}>
          <div className="mx-auto w-full max-w-100 lg:max-w-[19rem] xl:max-w-[23.5rem] 2xl:max-w-[31rem]">
            <div className="relative overflow-hidden rounded-xl bg-[#0f0f0f] shadow-[0_50px_140px_rgba(0,0,0,0.5)]">
              <img src={heroSectionImage} alt="about" className="w-full h-100 object-cover" />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/35 to-transparent" />
              <div className="absolute -left-6 -top-6 h-2.5 w-36 rounded-full bg-[#00ff66]/30 blur-sm" />
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}
