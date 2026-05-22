import { CommitGraphSection } from '../components/projects/CommitGraphSection'
import { FeaturedProjectsSection } from '../components/projects/FeaturedProjectsSection'
import { ProjectHeroSection } from '../components/projects/ProjectHeroSection'

function Project() {
	return (
		<main className="relative min-h-screen bg-[var(--bg)] text-[#e6e6e6]">
			<ProjectHeroSection />
			<FeaturedProjectsSection />
			<CommitGraphSection />
		</main>
	)
}

export default Project
