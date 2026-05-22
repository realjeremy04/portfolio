import { ScrollReveal } from '../ScrollReveal'
import { SectionHeading } from '../SectionHeading'
import { ProjectListItem } from './ProjectListItem'
import { projectShowcase } from '../../data/projectShowcase'

function FeaturedProjectsSection() {
  return (
    <section id="featured-projects" className="grid snap-start justify-items-center px-5 pt-6 sm:px-8 sm:pt-8 lg:px-10">
      <div className="grid w-full max-w-[92rem] gap-6 py-8 sm:gap-8 sm:py-10 md:gap-10 md:py-12">
        <ScrollReveal>
          <SectionHeading title="Projects" animateItems compact framedTitle />
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