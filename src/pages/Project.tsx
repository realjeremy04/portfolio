import { PhoneMockup } from '../components/PhoneMockup'
import { ProjectListItem } from '../components/ProjectListItem'
import { SectionHeading } from '../components/SectionHeading'
import { projects } from '../data/portfolio'

function Project() {
	return (
		<main className="mx-auto max-w-280 px-5 pb-16 pt-6 sm:px-8 lg:px-10 lg:pb-20">
			<section className="py-16">
				<SectionHeading title="Selected Projects" eyebrow="*" />
				<div className="grid gap-10 lg:grid-cols-[1fr_250px] lg:items-start">
					<div>
						{projects.map((project) => (
							<ProjectListItem key={project.number} project={project} />
						))}
					</div>
					<div className="pt-4 lg:pt-10">
						<PhoneMockup />
					</div>
				</div>
			</section>
		</main>
	)
}

export default Project
