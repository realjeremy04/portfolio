import { memo } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import type { RefObject } from 'react'
import { heroSectionImage} from '../../data/homeContent'

type HomeHeroSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

const HomeHeroSection = memo(function HomeHeroSection({ sectionRef }: HomeHeroSectionProps) {
  return (
    <section
      id="home"
      ref={sectionRef}
      className="snap-start px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-10 lg:py-0 lg:-translate-y-3 xl:-translate-y-4">
        <ScrollReveal className="order-2 flex w-full max-w-[33rem] flex-col items-center space-y-5 text-center lg:order-1 lg:items-start lg:self-center lg:text-left xl:space-y-6" from="left">
          <div className="space-y-3">
            <p data-reveal-item className="text-[11px] uppercase tracking-[0.42em] text-[#8d8d8d]">TRUONG TUAN KIET</p>
            <h1
              data-reveal-item
              className="display-font mx-auto max-w-[10ch] text-[clamp(2.7rem,9vw,5.1rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#f2f2f2] lg:mx-0 lg:max-w-4xl lg:text-[clamp(3.1rem,5vw,6.6rem)]"
            >
              Frontend
              <span className="block text-[#00ff66]">Developer</span>
            </h1>
            <p data-reveal-item className="mx-auto max-w-xl text-[12px] leading-6 text-[#b5b5b5] sm:text-[13px] sm:leading-6.5 lg:mx-0 lg:text-[14px] lg:leading-7">
              Hi! I&apos;m Tuan Kiet &#x28;a.k.a. Jeremy&#x29;, a Front-End Developer passionate about building responsive and user-friendly web applications using React, TypeScript, and modern UI technologies.
              I enjoy creating clean, scalable interfaces and turning ideas into smooth digital experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3 pt-0.5 lg:justify-start">
            <a
              data-reveal-item
              href="#"
              className="inline-flex min-h-12 min-w-[10.25rem] items-center justify-center rounded-full border border-[#00ff66]/80 bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#101214] shadow-[0_10px_24px_rgba(0,255,102,0.12)] transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#3dff90] hover:bg-[#19ff79] hover:shadow-[0_16px_30px_rgba(0,255,102,0.2)] active:translate-y-0 active:scale-[0.98]"
            >
              Download CV
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-1 w-full max-w-[16rem] sm:max-w-[20rem] lg:order-2 lg:max-w-[30rem] xl:max-w-[34rem]" from="right" delay={16}>
          <div data-reveal-item className="mx-auto aspect-square w-full overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
            <img
              src={heroSectionImage}
              alt="Temporary placeholder visual"
              className="h-full w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
})

export { HomeHeroSection }
