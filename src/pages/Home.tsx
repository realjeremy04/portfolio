import { HomeAboutSection } from '../components/home/HomeAboutSection'
import { HomeContactSection } from '../components/home/HomeContactSection'
import { HomeHeader } from '../components/home/HomeHeader'
import { HomeHeroSection } from '../components/home/HomeHeroSection'
import { HomeProjectsSection } from '../components/home/HomeProjectsSection'
import { projects} from '../data/portfolio'

function Home() {
  return (
    <main className="relative overflow-x-hidden scroll-smooth snap-y snap-mandatory">
      <HomeHeader />
      <HomeHeroSection />
      <HomeAboutSection />
      <HomeProjectsSection projects={projects} />
      <HomeContactSection />
    </main>
  )
}

export default Home
