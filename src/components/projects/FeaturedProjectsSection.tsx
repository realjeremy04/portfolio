import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { ProjectListItem } from './ProjectListItem'
import { projectShowcase } from '../../data/projectShowcase'

function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="relative snap-start px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10">
      <div className="mx-auto w-full max-w-[96rem] gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12 lg:max-w-[112rem] xl:max-w-[112rem] 2xl:max-w-[112rem]">
        <ScrollReveal>
          <SectionHeading title="Projects" animateItems compact />
        </ScrollReveal>

        <div className="mt-6 sm:mt-8">
          {projectShowcase.map((project, index) => (
            <ScrollReveal key={project.number} from={index % 2 === 0 ? 'left' : 'right'} delay={index * 10}>
              <div data-reveal-item>
                <ProjectListItem project={project} />
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  )
}

export { FeaturedProjectsSection }