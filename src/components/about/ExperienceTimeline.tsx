import { timeline } from '../../data/experience'
import { ScrollReveal } from '../ScrollReveal'



export function ExperienceTimeline() {
  return (
    <section className="snap-start bg-[var(--bg)] px-5 text-[#e6e6e6] sm:px-8 lg:px-10">
      <div className="mx-auto grid min-h-[100svh] max-w-360 items-start justify-items-center gap-8 py-16 sm:gap-10 sm:py-20 lg:py-24">
        <div className="w-full max-w-1200">
          <div className="flex items-center gap-4 sm:gap-6">
            <span className="h-px w-20 bg-[#00ff66]/35 sm:w-28" />
            <span className="h-px w-14 bg-[#00ff66]/55 sm:w-20" />
          </div>

          <h3 className="mt-5 text-[clamp(2rem,4vw,3rem)] font-black leading-[0.92] tracking-[-0.05em] text-[#f2f2f2]">
            PROFESSIONAL EXPERIENCE
          </h3>
        </div>

        <div className="relative mt-2 w-full max-w-1200">
          {/* center vertical line */}
          <div className="hidden lg:block absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-white/8" />

          <div className="grid w-full grid-cols-1 gap-8 sm:gap-10 lg:gap-14">
            {timeline.map((t, i) => (
              <ScrollReveal key={t.id} from={i % 2 === 0 ? 'left' : 'right'}>
                <div
                  className={`relative lg:flex lg:items-start lg:justify-between ${
                    i % 2 === 0 ? 'lg:flex-row-reverse' : 'lg:flex-row'
                  }`}
                >
                  <div className="lg:w-[44%]">
                    <div className="mb-4 inline-flex overflow-hidden rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,#0f1217_0%,#171a21_100%)] text-white shadow-[0_12px_30px_rgba(0,0,0,0.18)]">
                      <div className="grid min-w-[13.5rem] grid-cols-3 divide-x divide-white/10 text-center sm:min-w-[15rem]">
                        <div className="px-5 py-3.5">
                          <div className="text-[14px] font-bold leading-none">{t.startTime}</div>
                          <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/72">Start</div>
                        </div>
                        <div className="px-5 py-3.5">
                          <div className="text-[14px] font-bold leading-none">{t.endTime}</div>
                          <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/72">End</div>
                        </div>
                        <div className="px-5 py-3.5">
                          <div className="text-[14px] font-bold leading-none">{t.location}</div>
                          <div className="mt-1 text-[11px] uppercase tracking-[0.12em] text-white/72">Location</div>
                        </div>
                      </div>
                    </div>

                    <div className="rounded-[1.5rem] border border-white/6 bg-[#202521] p-6 shadow-[0_18px_45px_rgba(0,0,0,0.22)] sm:p-7">
                      <div className="mb-2 text-[1.05rem] font-black tracking-[-0.03em] text-[#f2f2f2]">{t.company}</div>
                      <div className="mb-4 text-[0.95rem] font-semibold text-[#bfc3c6]">
                        {t.role} <span className="font-normal text-[#8d8d8d]">· Full-time</span>
                      </div>
                      <div className="max-w-[32rem] text-[0.98rem] leading-7 text-[#bfc3c6]">
                        {t.body}
                      </div>

                      <div className="mt-5 flex flex-wrap gap-2.5">
                        {t.stack.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/8 bg-[#0b0b0b] px-3.5 py-1.5 text-[0.82rem] font-medium text-[#dfe3e6] shadow-[0_1px_1px_rgba(0,0,0,0.12)]"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="flex justify-center lg:w-[12%] lg:items-start">
                    <div className="relative mt-4 flex h-6 w-6 items-center justify-center rounded-full border-2 border-[var(--bg)] bg-[#0d1117] shadow-[0_0_0_1px_rgba(255,255,255,0.12)]">
                      <div className="h-2.5 w-2.5 rounded-full bg-[#00ff66]" />
                    </div>
                  </div>

                  <div className="lg:w-[44%]" />
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
