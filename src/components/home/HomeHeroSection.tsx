import { ScrollReveal } from '../ScrollReveal'
import type { RefObject } from 'react'
import { sectionPlaceholderImage } from '../../data/homeContent'

type HomeHeroSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

function HomeHeroSection({ sectionRef }: HomeHeroSectionProps) {
  return (
    <section
      id="home"
      ref={sectionRef}
      className="snap-start px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-7 py-0 lg:grid-cols-[minmax(0,0.96fr)_minmax(0,1.04fr)] lg:gap-10 lg:-translate-y-3 xl:-translate-y-4">
        <ScrollReveal className="order-2 w-full max-w-[31rem] space-y-5 lg:order-1 lg:self-center xl:space-y-6" from="left" delay={40}>
          <div className="space-y-3">
            <p data-reveal-item className="text-[11px] uppercase tracking-[0.42em] text-[#8d8d8d]">TRUONG TUAN KIET</p>
            <h1
              data-reveal-item
              className="display-font max-w-4xl text-[clamp(2.8rem,6.2vw,5.8rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#f2f2f2] lg:text-[clamp(3.1rem,5vw,6.6rem)]"
            >
              Frontend
              <span className="block text-[#00ff66]">Developer</span>
            </h1>
            <p data-reveal-item className="max-w-xl text-[12px] leading-6 text-[#b5b5b5] sm:text-[13px] sm:leading-6.5 lg:text-[14px] lg:leading-7">
              Hi! I&apos;m Tuan Kiet &#x28;a.k.a. Jeremy&#x29;, a fullstack software engineer specializing in modern Web Development with a growing
              focus on Artificial Intelligence. I architect scalable, production-ready engines from high-traffic Java
              microservices to RAG-powered SaaS platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-0.5">
            <a
              data-reveal-item
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#334055] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#00ff66] hover:text-[#101214]"
            >
              Download CV
            </a>
            <a
              data-reveal-item
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/60 hover:text-[#00ff66]"
            >
              Contact Me
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-1 w-full max-w-[26rem] lg:order-2 lg:max-w-[30rem] xl:max-w-[34rem]" from="right" delay={120}>
          <div data-reveal-item className="mx-auto aspect-square w-full overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
            <img
              src={sectionPlaceholderImage}
              alt="Temporary placeholder visual"
              className="h-full w-full object-contain p-10 sm:p-12"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { HomeHeroSection }
