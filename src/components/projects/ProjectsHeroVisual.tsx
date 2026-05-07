import { projectsSectionImage } from '../../data/homeContent'

function ProjectsHeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[36rem] lg:max-w-[38rem]">
      <div className="absolute -inset-4 rounded-[34px] bg-[radial-gradient(circle_at_top,rgba(0,255,102,0.14),transparent_50%)] blur-2xl" />

      <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#0f0f0f] shadow-[0_30px_90px_rgba(0,0,0,0.38)]">
        <div className="relative aspect-[1.1/1] overflow-hidden sm:aspect-[1.2/1] lg:aspect-[1.05/1]">
          <img src={projectsSectionImage} alt="Layered project previews" className="h-full w-full object-cover" />
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0)_12%,rgba(0,0,0,0.55)_100%)]" />

          <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-black/40 px-3 py-1.5 backdrop-blur-sm">
            <p className="text-[9px] font-semibold uppercase tracking-[0.26em] text-[#d7d7d7]">Cinematic Preview</p>
          </div>

          <div className="absolute bottom-4 left-4 right-4 grid gap-3 sm:grid-cols-2">
            <div className="rounded-[18px] border border-white/10 bg-black/50 p-4 backdrop-blur-sm">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8d8d8d]">Design System</p>
              <p className="mt-2 text-[12px] leading-6 text-[#f2f2f2]">
                Black and green composition with layered cards, glow accents, and dev-first typography.
              </p>
            </div>

            <div className="rounded-[18px] border border-white/10 bg-black/50 p-4 backdrop-blur-sm">
              <p className="text-[9px] font-semibold uppercase tracking-[0.28em] text-[#8d8d8d]">Delivery</p>
              <p className="mt-2 text-[12px] leading-6 text-[#f2f2f2]">
                Structured grids, premium actions, and responsive behavior tuned for portfolio storytelling.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute -left-4 top-10 hidden w-[42%] rotate-[-10deg] rounded-[26px] border border-white/10 bg-[#0c0c0c]/95 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:block">
        <div className="space-y-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8d8d8d]">Snapshot 01</p>
          <div className="h-24 rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#1b1b1b,#090909)]" />
          <p className="text-[11px] leading-5 text-[#d7d7d7]">Layered visuals with strong contrast and quiet motion.</p>
        </div>
      </div>

      <div className="absolute -right-4 bottom-8 hidden w-[40%] rotate-[8deg] rounded-[26px] border border-white/10 bg-[#0c0c0c]/95 p-3 shadow-[0_18px_45px_rgba(0,0,0,0.35)] lg:block">
        <div className="space-y-2">
          <p className="text-[9px] font-semibold uppercase tracking-[0.3em] text-[#8d8d8d]">Snapshot 02</p>
          <div className="h-20 rounded-[16px] border border-white/10 bg-[linear-gradient(180deg,#161616,#0a0a0a)]" />
          <p className="text-[11px] leading-5 text-[#d7d7d7]">Action-forward UI with polished details and depth.</p>
        </div>
      </div>
    </div>
  )
}

export { ProjectsHeroVisual }