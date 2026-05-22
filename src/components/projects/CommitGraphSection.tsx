import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { CommitGraph } from './CommitGraph'

function CommitGraphSection() {
  return (
    <section className="relative px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="mx-auto w-full max-w-[96rem] lg:max-w-[112rem] xl:max-w-[112rem] 2xl:max-w-[112rem]">
        <ScrollReveal>
          <SectionHeading title="Commit Graph" animateItems compact />
        </ScrollReveal>

        <ScrollReveal from="up" delay={14}>
          <div data-reveal-item className="mt-8">
            <CommitGraph />
          </div>
        </ScrollReveal>
      </div>
    </section>
  )
}

export { CommitGraphSection }