import { AboutHero } from '../components/about/AboutHero'
import { ExperienceTimeline } from '../components/about/ExperienceTimeline'
import { TechStack } from './../components/about/TechStack';


function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[#e6e6e6]">
      <AboutHero />
      <ExperienceTimeline />
      <TechStack />
    </main>
  )
}

export default AboutPage
