import heroImage from '../assets/hero.png'
import { ProjectListItem } from '../components/ProjectListItem'
import { ScrollReveal } from '../components/ScrollReveal'
import { SectionHeading } from '../components/SectionHeading'
import { projects, stats } from '../data/portfolio'

const sectionLinks = [
  { label: 'Home', href: '#home', icon: '⌂' },
  { label: 'About', href: '#about', icon: '◌' },
  { label: 'Projects', href: '#projects', icon: '▣' },
  { label: 'Contact', href: '#contact', icon: '✉' },
] as const

const aboutHighlights = [
  {
    title: 'Strategy',
    text: 'Clear hierarchy, purposeful spacing, and content that guides attention naturally.',
  },
  {
    title: 'Execution',
    text: 'Clean React architecture with Tailwind-first styling and smooth interaction polish.',
  },
  {
    title: 'Delivery',
    text: 'Responsive layouts that hold up across desktop, tablet, and mobile screens.',
  },
] as const

const contactLinks = [
  { label: 'Email', value: 'hello@youremail.com', href: 'mailto:hello@youremail.com' },
  { label: 'GitHub', value: 'github.com/you', href: 'https://github.com' },
  { label: 'LinkedIn', value: 'linkedin.com/in/you', href: 'https://linkedin.com' },
] as const

function Home() {
  return (
    <main className="relative overflow-x-hidden scroll-smooth snap-y snap-mandatory">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
          <a href="#home" className="text-[18px] font-medium tracking-[-0.03em] text-[#ededed] transition hover:text-[#00ff66]">
            Jeremy
          </a>

          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ededed] transition hover:border-[#00ff66]/50 hover:text-[#00ff66] md:hidden"
            aria-label="Open menu"
          >
            <span className="flex flex-col gap-1.5">
              <span className="h-0.5 w-5 bg-current" />
              <span className="h-0.5 w-5 bg-current" />
            </span>
          </button>

          <nav aria-label="Section navigation" className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:flex">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] text-[#bfbfbf] transition hover:bg-white/8 hover:text-[#00ff66]"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <aside className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 pl-4 xl:block">
        <nav className="rounded-[28px] border border-white/10 bg-[#101010]/80 p-3 backdrop-blur-md">
          <div className="flex flex-col gap-3">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-sm font-bold text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/40 hover:bg-[#00ff66]/10 hover:text-[#00ff66]"
                aria-label={link.label}
                title={link.label}
              >
                <span className="text-[14px] leading-none">{link.icon}</span>
              </a>
            ))}
          </div>
        </nav>
      </aside>

      <section
        id="home"
        className="snap-start border-b border-white/10 px-5 pb-14 pt-28 sm:px-8 lg:px-10 lg:pb-16 lg:pt-28"
      >
        <div className="mx-auto grid min-h-screen max-w-360 items-center gap-12 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
          <ScrollReveal className="space-y-8" from="left" delay={40}>
            <div className="space-y-4">
              <p className="text-[11px] uppercase tracking-[0.38em] text-[#8d8d8d]">Hello, I&apos;m Jeremy</p>
              <h1 className="display-font max-w-4xl text-[clamp(3.4rem,9vw,7.6rem)] font-black uppercase leading-[0.88] tracking-tighter text-[#f2f2f2]">
                <span className="block text-[#00ff66]">Frontend</span>
                <span className="block text-[#ededed]">Developer</span>
              </h1>
              <p className="max-w-xl text-[13px] leading-7 text-[#b5b5b5] sm:text-[14px]">
                I build polished interfaces with a black-and-green visual language, smooth motion, and responsive layouts
                that feel deliberate on every screen.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-xs bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
              >
                Hire Me
              </a>
              <a
                href="#projects"
                className="inline-flex items-center justify-center rounded-xs border border-white/10 bg-white/5 px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/60 hover:bg-white/10 hover:text-[#00ff66]"
              >
                View Projects
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {stats.map((stat, index) => (
                <ScrollReveal key={stat.label} from="up" delay={index * 120}>
                  <div className="border-t border-white/10 pt-4">
                    <p className="display-font text-[clamp(2.1rem,5vw,3.4rem)] font-black leading-none text-[#00ff66]">
                      {stat.value}
                    </p>
                    <p className="mt-1 text-[10px] uppercase tracking-[0.18em] text-[#9a9a9a]">{stat.label}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal from="right" delay={120}>
            <div className="relative mx-auto w-full max-w-155">
              <div className="absolute inset-8 rounded-full border border-white/5" />
              <div className="absolute inset-16 rounded-full border border-white/10" />
              <div className="absolute inset-24 rounded-full border border-[#00ff66]/15" />
              <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.14),transparent_58%)] blur-2xl" />

              <div className="absolute -top-6 left-0 rounded-[18px] border border-white/10 bg-white/5 px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-[#9bd8a7] backdrop-blur-md">
                React / TypeScript / Tailwind
              </div>
              <div className="absolute bottom-4 right-0 rounded-[18px] border border-white/10 bg-[#111111]/90 px-4 py-3 text-[11px] uppercase tracking-[0.16em] text-[#9bd8a7] shadow-[0_15px_35px_rgba(0,0,0,0.35)]">
                Green on charcoal
              </div>

              <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#101010]/90 shadow-[0_30px_90px_rgba(0,0,0,0.42)]">
                <div className="grid min-h-130 place-items-center p-6 sm:min-h-155">
                  <div className="relative flex w-full items-center justify-center">
                    <div className="absolute inset-x-10 top-10 h-32 rounded-full bg-[#00ff66]/10 blur-3xl" />
                    <img
                      src={heroImage}
                      alt="Decorative portrait panel"
                      className="relative h-105 w-[320px] rounded-[46%] object-cover grayscale contrast-110 brightness-75 sm:h-125 sm:w-95"
                    />
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="about"
        className="snap-start border-b border-white/10 px-5 pb-14 pt-20 sm:px-8 lg:px-10 lg:pb-16 lg:pt-24"
      >
        <div className="mx-auto grid min-h-screen max-w-360 items-center gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
          <ScrollReveal className="space-y-8" from="left" delay={40}>
            <SectionHeading title="About Me" eyebrow="WHO I AM" />
            <div className="space-y-5 text-[13px] leading-7 text-[#c2c2c2] sm:text-[14px]">
              <p>
                I focus on clear interfaces, strong typography, and layouts that feel calm but intentional.
              </p>
              <p>
                My approach is practical: turn the design into a solid component system, keep motion subtle, and preserve
                the visual rhythm across every viewport.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              {aboutHighlights.map((item, index) => (
                <ScrollReveal key={item.title} from="up" delay={index * 120}>
                  <div className="border border-white/10 bg-white/4 p-4 backdrop-blur-sm transition duration-300 hover:-translate-y-1 hover:border-[#00ff66]/30 hover:bg-white/6">
                    <p className="display-font text-[24px] font-black uppercase leading-none text-[#00ff66]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-[12px] leading-6 text-[#a8a8a8]">{item.text}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal from="right" delay={120}>
            <div className="relative mx-auto w-full max-w-155">
              <div className="absolute inset-0 rounded-[42px] border border-white/10 bg-white/4 blur-[0px]" />
              <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#101010]/85 p-5 shadow-[0_30px_90px_rgba(0,0,0,0.32)]">
                <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
                  <div className="relative overflow-hidden rounded-[30px] border border-white/10 bg-[#0f0f0f]">
                    <img
                      src={heroImage}
                      alt="Decorative portrait panel"
                      className="h-105 w-full object-cover grayscale contrast-110 brightness-75 sm:h-130"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent,rgba(0,255,102,0.06))]" />
                  </div>

                  <div className="space-y-5 py-2">
                    <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Location</p>
                      <p className="mt-2 text-[14px] text-[#ededed]">Vietnam · GMT+7</p>
                    </div>
                    <div className="rounded-[22px] border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Focus</p>
                      <p className="mt-2 text-[14px] text-[#ededed]">Modern React interfaces with polished motion and scalable structure.</p>
                    </div>
                    <div className="rounded-[22px] border border-[#00ff66]/20 bg-[#00ff66]/10 p-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#9bd8a7]">Style</p>
                      <p className="mt-2 text-[14px] text-[#ededed]">Black + green, minimal, confident, and highly readable.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="projects"
        className="snap-start border-b border-white/10 px-5 pb-14 pt-20 sm:px-8 lg:px-10 lg:pb-16 lg:pt-24"
      >
        <div className="mx-auto grid min-h-screen max-w-360 items-center gap-12 lg:grid-cols-[1fr_0.96fr] lg:gap-16">
          <ScrollReveal className="space-y-8" from="left" delay={40}>
            <SectionHeading title="Projects" eyebrow="SELECTED WORK" />
            <div className="space-y-4">
              {projects.map((project, index) => (
                <ScrollReveal key={project.number} from="left" delay={index * 120}>
                  <ProjectListItem project={project} />
                </ScrollReveal>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xs bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
            >
              Learn More
            </a>
          </ScrollReveal>

          <ScrollReveal from="right" delay={120}>
            <div className="relative mx-auto w-full max-w-155">
              <div className="absolute -inset-4 rounded-[42px] bg-[#00ff66]/5 blur-2xl" />
              <div className="relative overflow-hidden rounded-[42px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
                <div className="grid min-h-140 gap-4 p-4 sm:grid-cols-[1.1fr_0.9fr]">
                  <div className="space-y-4 rounded-[30px] border border-white/10 bg-white/4 p-5">
                    <div className="h-56 rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(0,255,102,0.08),rgba(255,255,255,0.02))] p-4">
                      <div className="h-full rounded-[20px] border border-[#00ff66]/20 bg-[radial-gradient(circle_at_top,rgba(0,255,102,0.22),transparent_45%),linear-gradient(180deg,#171717,#0f0f0f)]" />
                    </div>
                    <div className="grid gap-3 sm:grid-cols-2">
                      <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                        <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Case Study</p>
                        <p className="mt-2 text-[13px] text-[#ededed]">High contrast, clean components, deliberate spacing.</p>
                      </div>
                      <div className="rounded-[20px] border border-white/10 bg-white/5 p-4">
                        <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Stack</p>
                        <p className="mt-2 text-[13px] text-[#ededed]">React, Tailwind CSS, TypeScript, motion</p>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div className="rounded-[30px] border border-white/10 bg-[linear-gradient(180deg,#151515,#0c0c0c)] p-4">
                      <div className="h-55 rounded-3xl border border-white/10 bg-[linear-gradient(135deg,rgba(0,255,102,0.12),rgba(255,255,255,0.02))]" />
                    </div>
                    <div className="rounded-[30px] border border-white/10 bg-white/5 p-4">
                      <p className="text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d]">Outcome</p>
                      <p className="mt-2 text-[13px] leading-6 text-[#c2c2c2]">
                        Fast-loading layouts with smooth section transitions and a consistent black/green visual identity.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      <section
        id="contact"
        className="snap-start px-5 pb-20 pt-20 sm:px-8 lg:px-10 lg:pb-24 lg:pt-24"
      >
        <div className="mx-auto grid min-h-screen max-w-360 items-center gap-12 lg:grid-cols-[0.92fr_1.08fr] lg:gap-16">
          <ScrollReveal className="space-y-8" from="left" delay={40}>
            <SectionHeading title="Get In Touch" eyebrow="CONTACT" />
            <div className="max-w-xl space-y-5 text-[13px] leading-7 text-[#c2c2c2] sm:text-[14px]">
              <p>
                If you have a design you want turned into a polished homepage, send it over and I’ll translate it into a
                responsive React interface.
              </p>
              <p>
                I’m available for landing pages, personal portfolios, and product marketing pages.
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
    </main>
  )
}

export default Home
