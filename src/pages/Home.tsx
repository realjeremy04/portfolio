import { HomeAboutSection } from '../components/home/HomeAboutSection'
import { HomeContactSection } from '../components/home/HomeContactSection'
import { HomeHeroSection } from '../components/home/HomeHeroSection'
import { HomeProjectsSection } from '../components/home/HomeProjectsSection'
import { HomeSectionSidebar } from '../components/home/HomeSectionSidebar'
import { useHomeSectionScroll } from '../hooks/useHomeSectionScroll'
import { projects } from '../data/portfolio'

function Home() {
  const { activeSection, handleKeyDownCapture, scrollToSection, sectionRefs } = useHomeSectionScroll()

  return (
    <main
      className="relative overflow-x-hidden scroll-smooth snap-y snap-mandatory"
      onKeyDownCapture={handleKeyDownCapture}
      tabIndex={-1}
    >
      <HomeSectionSidebar activeSection={activeSection} onNavigate={scrollToSection} />
      <HomeHeroSection sectionRef={sectionRefs.home} />
      <HomeAboutSection sectionRef={sectionRefs.about} />
      <HomeProjectsSection projects={projects} sectionRef={sectionRefs.projects} />
      <HomeContactSection sectionRef={sectionRefs.contact} />
    </main>
  )
}

export default Home
