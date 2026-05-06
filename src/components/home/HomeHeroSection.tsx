import heroImage from '../../assets/hero.png'
import { ScrollReveal } from '../ScrollReveal'
import type { RefObject } from 'react'

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
      <div className="mx-auto grid min-h-screen max-w-360 items-center justify-items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="order-2 w-full max-w-xl space-y-8 lg:order-1" from="left" delay={40}>
          <div className="space-y-5">
            <p className="text-[11px] uppercase tracking-[0.42em] text-[#8d8d8d]">TRUONG TUAN KIET</p>
            <h1 className="display-font max-w-4xl text-[clamp(3.5rem,9vw,7.8rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#f2f2f2]">
              Frontend
              <span className="block text-[#00ff66]">Developer</span>
            </h1>
            <p className="max-w-xl text-[13px] leading-7 text-[#b5b5b5] sm:text-[14px]">
              Hi! I&apos;m Tuan Kiet &#x28;a.k.a. Jeremy&#x29;, a fullstack software engineer specializing in modern Web Development with a growing
              focus on Artificial Intelligence. I architect scalable, production-ready engines from high-traffic Java
              microservices to RAG-powered SaaS platforms.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-full bg-[#334055] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-0.5 hover:bg-[#00ff66] hover:text-[#101214]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/60 hover:text-[#00ff66]"
            >
              Contact Me
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-1 w-full max-w-155 lg:order-2" from="right" delay={120}>
          <div className="relative mx-auto w-full">
            <div className="absolute inset-0 rounded-[48%] bg-[radial-gradient(circle_at_50%_20%,rgba(0,255,102,0.12),transparent_58%)] blur-2xl" />
            <img
              src={heroImage}
              alt="Decorative portrait panel"
              className="relative h-[28rem] w-full rounded-[48%] object-cover grayscale contrast-110 brightness-75 sm:h-[33rem]"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { HomeHeroSection }