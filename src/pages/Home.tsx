import { HomeAboutSection } from '../components/home/HomeAboutSection'
import { HomeContactSection } from '../components/home/HomeContactSection'
import { HomeHeroSection } from '../components/home/HomeHeroSection'
import { HomeProjectsSection } from '../components/home/HomeProjectsSection'
import { useHomeSectionScroll } from '../hooks/useHomeSectionScroll'
import { projects } from '../data/portfolio'
import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

function Home() {
  const { handleKeyDownCapture, scrollToSection, sectionRefs } = useHomeSectionScroll()
  const { hash } = useLocation()

  useEffect(() => {
    if (!hash) {
      return
    }

    const target = hash.replace('#', '') as 'home' | 'about' | 'projects' | 'contact'

    scrollToSection(target)
  }, [hash, scrollToSection])

  return (
    <main
      className="relative overflow-x-hidden scroll-smooth snap-y snap-mandatory"
      onKeyDownCapture={handleKeyDownCapture}
      tabIndex={-1}
    >
      <HomeHeroSection sectionRef={sectionRefs.home} />
      <HomeAboutSection sectionRef={sectionRefs.about} />
      <HomeProjectsSection projects={projects} sectionRef={sectionRefs.projects} />
      <HomeContactSection sectionRef={sectionRefs.contact} />
    </main>
  )
}

export default Home
