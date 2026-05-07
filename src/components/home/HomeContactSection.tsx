import type { RefObject } from 'react'
import { LuGithub, LuInstagram, LuLinkedin, LuMail} from 'react-icons/lu'
import { AiOutlineDiscord } from "react-icons/ai";
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { sectionPlaceholderImage } from '../../data/homeContent'

type HomeContactSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

function HomeContactSection({ sectionRef }: HomeContactSectionProps) {
  const socialLinks = [
    { label: 'Email', href: 'mailto:jeremytk.business@gmail.com', icon: LuMail },
    { label: 'GitHub', href: 'https://github.com/realjeremy04', icon: LuGithub },
    { label: 'Instagram', href: 'https://instagram.com', icon: LuInstagram },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: LuLinkedin },
    { label: 'Discord', href: 'https://discord.com', icon: AiOutlineDiscord},
  ] as const

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="snap-start px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-7 py-0 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:gap-10 lg:-translate-y-3 xl:-translate-y-4">
        <ScrollReveal className="w-full max-w-[31rem] space-y-5 lg:self-center xl:space-y-6" from="left" delay={40}>
          <SectionHeading title="Get In Touch" eyebrow="CONTACT" animateItems />
          <div className="max-w-xl space-y-3 text-[12px] leading-6 text-[#c2c2c2] sm:text-[13px] sm:leading-6.5 lg:text-[14px] lg:leading-7">
            <p data-reveal-item>
              Feel free to reach out for freelance projects, collaboration inquiries, or just a friendly hello. I’m
              always open to discussing new opportunities and connecting with like-minded individuals in the industry.
            </p>
          </div>

          <p data-reveal-item className="text-[13px] tracking-[0.02em] text-[#ededed] sm:text-[14px]">jeremytk.busniess@gmail.com</p>

          <div className="flex flex-wrap gap-3">
            {socialLinks.map((item) => (
              <a
                data-reveal-item
                key={item.label}
                href={item.href}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#334055] bg-[#334055] text-white transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66] hover:bg-[#00ff66] hover:text-[#101214] sm:h-12 sm:w-12"
                aria-label={item.label}
              >
                <item.icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="w-full max-w-[26rem] lg:max-w-[30rem] xl:max-w-[34rem]" from="right" delay={120}>
          <div data-reveal-item className="mx-auto aspect-square w-full overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
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

export { HomeContactSection }
