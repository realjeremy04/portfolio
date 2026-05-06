import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { contactLinks } from './homeContent'

function HomeContactSection() {
  return (
    <section
      id="contact"
      className="snap-start px-5 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24"
    >
      <div className="mx-auto grid min-h-screen max-w-360 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
        <ScrollReveal className="space-y-8" from="left" delay={40}>
          <SectionHeading title="Get In Touch" eyebrow="CONTACT" />
          <div className="max-w-xl space-y-5 text-[13px] leading-7 text-[#c2c2c2] sm:text-[14px]">
            <p>
              Feel free to reach out for freelance projects, collaboration inquiries, or just a friendly hello. I’m always open to discussing new opportunities and connecting with like-minded individuals in the industry.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {contactLinks.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="inline-flex items-center justify-center rounded-full border border-white/10 bg-white/5 px-4 py-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/50 hover:text-[#00ff66]"
              >
                {item.label}: {item.value}
              </a>
            ))}
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="mailto:hello@youremail.com"
              className="inline-flex items-center justify-center rounded-xs bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
            >
              Email Me
            </a>
            <a
              href="#home"
              className="inline-flex items-center justify-center rounded-xs border border-white/10 bg-white/5 px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/60 hover:bg-white/10 hover:text-[#00ff66]"
            >
              Back To Top
            </a>
          </div>
        </ScrollReveal>

        <ScrollReveal from="right" delay={120}>
          <div className="relative mx-auto w-full max-w-155">
            <div className="absolute -inset-5 rounded-[42px] bg-[#00ff66]/10 blur-3xl" />
            <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] p-6 shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
              <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-stretch">
                <div className="space-y-4 rounded-[30px] border border-white/10 bg-white/5 p-5">
                  <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Availability</p>
                  <p className="display-font text-[clamp(2.8rem,7vw,5rem)] font-black uppercase leading-none text-[#00ff66]">
                    Open
                  </p>
                  <p className="max-w-sm text-[13px] leading-7 text-[#c2c2c2]">
                    Select freelance and collaboration projects only.
                  </p>

                  <div className="grid gap-3 pt-2 sm:grid-cols-2">
                    <div className="rounded-[20px] border border-white/10 bg-[#111111] p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#8d8d8d]">Response</p>
                      <p className="mt-2 text-[13px] text-[#ededed]">Within 24 hours</p>
                    </div>
                    <div className="rounded-[20px] border border-white/10 bg-[#111111] p-4">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[#8d8d8d]">Timezone</p>
                      <p className="mt-2 text-[13px] text-[#ededed]">GMT+7</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4 rounded-[30px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(0,255,102,0.12),transparent_44%),linear-gradient(180deg,#151515,#0b0b0b)] p-5">
                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#8d8d8d]">Focus</p>
                    <p className="mt-2 text-[13px] leading-7 text-[#ededed]">
                      Homepage builds, portfolio refreshes, and product pages with a premium black + green identity.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#8d8d8d]">Promise</p>
                    <p className="mt-2 text-[13px] leading-7 text-[#ededed]">
                      Fast implementation, clean structure, and smooth motion that stays out of the way.
                    </p>
                  </div>

                  <div className="rounded-3xl border border-[#00ff66]/20 bg-[#00ff66]/10 p-5">
                    <p className="text-[10px] uppercase tracking-[0.22em] text-[#9bd8a7]">Contact</p>
                    <p className="mt-2 text-[13px] leading-7 text-[#ededed]">hello@youremail.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { HomeContactSection }