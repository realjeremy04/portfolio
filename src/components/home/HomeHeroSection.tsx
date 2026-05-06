import heroImage from '../../assets/hero.png'
import { ScrollReveal } from '../ScrollReveal'

function HomeHeroSection() {
  return (
    <section
      id="home"
      className="snap-start border-b border-white/10 px-5 sm:px-8 lg:px-10"
    >
      <div className="mx-auto grid min-h-screen max-w-360 items-center gap-12 py-20 lg:grid-cols-[1.08fr_0.92fr] lg:gap-16">
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
              href="#"
              className="inline-flex items-center justify-center rounded-xs bg-[#00ff66] px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#141414] transition duration-300 hover:-translate-y-0.5 hover:bg-[#10f870]"
            >
              Download CV
            </a>
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-xs border border-white/10 bg-white/5 px-5 py-3 text-[12px] font-black uppercase tracking-[0.08em] text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/60 hover:bg-white/10 hover:text-[#00ff66]"
            >
              Contact me
            </a>
          </div>


        </ScrollReveal>

        <ScrollReveal from="right" delay={120}>
          <div className="relative mx-auto w-full max-w-155">
            <div className="absolute inset-8 rounded-full border border-white/5" />
            <div className="absolute inset-16 rounded-full border border-white/10" />
            <div className="absolute inset-24 rounded-full border border-[#00ff66]/15" />
            <div className="absolute inset-12 rounded-full bg-[radial-gradient(circle,rgba(0,255,102,0.14),transparent_58%)] blur-2xl" />

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
  )
}

export { HomeHeroSection }