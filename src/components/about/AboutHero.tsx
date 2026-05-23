import { SectionHeading } from '../SectionHeading'
import { ScrollReveal } from '../ScrollReveal'
import { heroSectionImage } from '../../data/homeContent'

export function AboutHero() {
  return (
    <section className="snap-start px-5 sm:px-8 lg:px-10">
      <div className="grid min-h-[100svh] w-full items-center justify-items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:grid-cols-[minmax(0,1fr)_minmax(18.5rem,21.5rem)] lg:gap-10 lg:py-0 xl:max-w-screen xl:grid-cols-[minmax(0,1fr)_minmax(21rem,25rem)] xl:gap-12 xl:-translate-y-3 2xl:max-w-screen 2xl:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] 2xl:gap-14 2xl:-translate-y-4">
        <ScrollReveal className="order-2 lg:order-1" from="left">
          <div className="lg:max-w-[32rem] xl:max-w-[36rem] 2xl:max-w-[44rem]">
            <SectionHeading title="About Me" eyebrow="WHO I AM" animateItems framedTitle />
            <div className="mt-6 space-y-4 text-[16px] leading-7.5 text-[#c5c9cc] lg:max-w-[29rem] lg:text-[15px] lg:leading-7 xl:max-w-[34rem] xl:text-[16px] xl:leading-7.5">
              <p>
                I am a <span className="font-semibold text-[#f3f4f5]">Software Engineering student</span> with hands-on
                experience in building practical and user-friendly web applications. Through internship experience and
                full-stack projects, I have worked on responsive interfaces, API integration, role-based workflows,
                and analytics dashboards for real-world use cases.
              </p>

              <p>
                My work focuses on solving workflow problems, improving user experience, and creating maintainable
                digital solutions that bring value to users and businesses.
              </p>
            </div>
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-1 lg:order-2" from="right" delay={18}>
          <div className="mx-auto w-full max-w-100 lg:max-w-[22rem] xl:max-w-[27rem] 2xl:max-w-[31rem]">
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
