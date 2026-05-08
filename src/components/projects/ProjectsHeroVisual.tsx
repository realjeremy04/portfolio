import { projectsSectionImage } from '../../data/homeContent'

function ProjectsHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-[19rem] xl:max-w-[23.5rem] 2xl:max-w-[38rem]">
      <div className="absolute -inset-4 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(0,255,102,0.14),transparent_50%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
        <div className="relative aspect-[1.1/1] overflow-hidden sm:aspect-[1.2/1] lg:aspect-[1.05/1]">
          <img src={projectsSectionImage} alt="Layered project previews" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_12%,rgba(0,0,0,0.55)_100%)]" />
        </div>
      </div>

  
    </div>
  )
}

export { ProjectsHeroVisual }
