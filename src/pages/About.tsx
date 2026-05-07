import { AboutHero } from '../components/about/AboutHero'
import { AboutIntroduction } from '../components/about/AboutIntroduction'
import { ExperienceTimeline } from '../components/about/ExperienceTimeline'
import { SkillsSection } from '../components/about/SkillsSection'
import { TechStack } from './../components/about/TechStack';


function AboutPage() {
  return (
    <main className="min-h-screen bg-[var(--bg)] text-[#e6e6e6]">
      <AboutHero />
      <AboutIntroduction />
      <ExperienceTimeline />
      <SkillsSection />
      <TechStack />
    </main>
  )
}

export default AboutPage
