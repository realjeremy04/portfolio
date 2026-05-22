import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { CommitGraph } from './CommitGraph'

function CommitGraphSection() {
  return (
    <section className="grid justify-items-center px-5 py-8 sm:px-8 sm:py-10 lg:px-10 lg:py-12">
      <div className="grid w-full max-w-[92rem] gap-6">
        <ScrollReveal>
          <SectionHeading title="Commit Graph" animateItems compact framedTitle />
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