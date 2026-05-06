import heroImage from '../../assets/hero.png'
import type { RefObject } from 'react'
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'

type HomeContactSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

function HomeContactSection({ sectionRef }: HomeContactSectionProps) {
  const socialLinks = [
    { label: 'Email', href: 'mailto:hello@youremail.com', glyph: '✉' },
    { label: 'GitHub', href: 'https://github.com', glyph: 'GH' },
    { label: 'Instagram', href: 'https://instagram.com', glyph: 'IG' },
    { label: 'LinkedIn', href: 'https://linkedin.com', glyph: 'in' },
    { label: 'Discord', href: 'https://discord.com', glyph: 'DC' },
  ] as const

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="snap-start px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-screen max-w-360 items-center justify-items-center gap-10 py-20 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal className="w-full max-w-xl space-y-8" from="left" delay={40}>
          <SectionHeading title="Get In Touch" eyebrow="CONTACT" />
          <div className="max-w-xl space-y-5 text-[13px] leading-7 text-[#c2c2c2] sm:text-[14px]">
            <p>
              Feel free to reach out for freelance projects, collaboration inquiries, or just a friendly hello. I’m
              always open to discussing new opportunities and connecting with like-minded individuals in the industry.
            </p>
          </div>

          <p className="text-[14px] tracking-[0.02em] text-[#ededed]">jeremytk.busniess@gmail.com</p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-[#334055] bg-[#334055] text-[11px] font-black uppercase tracking-[0.08em] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66] hover:bg-[#00ff66] hover:text-[#101214]"
                aria-label={item.label}
              >
                {item.glyph}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@youremail.com"
              className="inline-flex items-center justify-center rounded-full bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
            >
              Email Me
            </a>
            <a
              href="#home"
              className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/60 hover:text-[#00ff66]"
            >
              Back To Top
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal className="w-full max-w-155" from="right" delay={120}>
          <div className="mx-auto w-full overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
            <img
              src={heroImage}
              alt="Working desk setup"
              className="h-[26rem] w-full object-cover object-center grayscale contrast-110 brightness-80 sm:h-[30rem] lg:h-[34rem]"
            />
            <div className="h-px w-full bg-white/10" />
            <div className="flex items-center justify-between gap-4 px-5 py-4 text-[11px] uppercase tracking-[0.18em] text-[#8d8d8d]">
              <span>Open for select work</span>
              <span>GMT+7</span>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { HomeContactSection }