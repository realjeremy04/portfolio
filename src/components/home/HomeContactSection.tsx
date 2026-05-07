import { memo } from 'react'
import type { RefObject } from 'react'
import { LuGithub,LuLinkedin, LuMail} from 'react-icons/lu'
import { AiOutlineDiscord } from "react-icons/ai";
import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { contactSectionImage } from '../../data/homeContent'

type HomeContactSectionProps = {
  sectionRef: RefObject<HTMLElement | null>
}

const HomeContactSection = memo(function HomeContactSection({ sectionRef }: HomeContactSectionProps) {
  const socialLinks = [
    { label: 'Email', href: 'mailto:jeremytk.business@gmail.com', icon: LuMail },
    { label: 'GitHub', href: 'https://github.com/realjeremy04', icon: LuGithub },
    { label: 'LinkedIn', href: 'https://linkedin.com', icon: LuLinkedin },
    { label: 'Discord', href: 'https://discord.com', icon: AiOutlineDiscord},
  ] as const

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="snap-start px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-center justify-items-center gap-4 py-8 sm:gap-[1.125rem] sm:py-10 md:gap-5 md:py-12 lg:grid-cols-[minmax(0,0.98fr)_minmax(0,1.02fr)] lg:items-center lg:justify-items-center lg:gap-10 lg:py-0 lg:-translate-y-3 xl:-translate-y-4">
        <ScrollReveal className="order-2 w-full max-w-[21.5rem] space-y-3.5 sm:max-w-[26rem] sm:space-y-4 md:max-w-[31rem] lg:order-1 lg:max-w-[31rem] lg:space-y-5 lg:self-center xl:space-y-6" from="left">
          <SectionHeading title="Get In Touch" eyebrow="CONTACT" animateItems compact framedTitle hideEyebrowOnMobile className="relative z-10 -mt-10 ml-3 sm:-mt-12 sm:ml-4 md:-mt-14 md:ml-5 lg:mt-0 lg:ml-0" />
          <div className="max-w-[21rem] space-y-2 text-[11.5px] leading-[1.45rem] text-[#c2c2c2] sm:max-w-[24rem] sm:space-y-2.5 sm:text-[12.5px] sm:leading-6 md:max-w-[28rem] lg:max-w-xl lg:text-[14px] lg:leading-7">
            <p data-reveal-item>
              Feel free to reach out for freelance projects, collaboration inquiries, or just a friendly hello. I’m
              always open to discussing new opportunities and connecting with like-minded individuals in the industry.
            </p>
          </div>

          <p data-reveal-item className="max-w-[19rem] break-words text-[12px] tracking-[0.02em] text-[#ededed] sm:max-w-[21rem] sm:text-[13px] md:max-w-[24rem] lg:max-w-none lg:text-[14px]">jeremytk.busniess@gmail.com</p>

          <div className="flex flex-wrap gap-3 sm:gap-3.5">
            {socialLinks.map((item) => (
              <a
                data-reveal-item
                key={item.label}
                href={item.href}
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-[#00ff66]/80 bg-[#00ff66] text-[#101214] shadow-[0_10px_22px_rgba(0,255,102,0.12)] transition-[transform,box-shadow,background-color,border-color] duration-300 ease-out hover:-translate-y-0.5 hover:border-[#3dff90] hover:bg-[#19ff79] hover:shadow-[0_14px_28px_rgba(0,255,102,0.2)] active:translate-y-0 active:scale-[0.98] sm:h-11 sm:w-11 lg:h-12 lg:w-12"
                aria-label={item.label}
              >
                <item.icon className="h-[18px] w-[18px] shrink-0" aria-hidden="true" />
              </a>
            ))}
          </div>
        </ScrollReveal>

        <ScrollReveal className="order-1 w-full max-w-[21.5rem] justify-self-center sm:max-w-[26rem] md:max-w-[31rem] lg:order-2 lg:max-w-[30rem] xl:max-w-[34rem]" from="right" delay={16}>
          <div data-reveal-item className="mx-auto aspect-[3/2] w-full overflow-hidden rounded-[18px] border border-white/10 bg-[#0f0f0f] shadow-[0_18px_50px_rgba(0,0,0,0.18)] sm:aspect-[4/3] sm:rounded-[24px] md:aspect-[1.24/1] md:rounded-[30px] lg:aspect-square lg:rounded-[42px] lg:shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
            <img
              src={contactSectionImage}
              alt="Temporary placeholder visual"
              className="h-full w-full object-cover"
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
})

export { HomeContactSection }
