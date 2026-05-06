import type { HomeSectionId } from '../../hooks/useHomeSectionScroll'
import { sectionLinks } from '../../data/homeContent'

type HomeSectionSidebarProps = {
  activeSection: HomeSectionId
  onNavigate: (sectionId: HomeSectionId) => void
}

function HomeSectionSidebar({ activeSection, onNavigate }: HomeSectionSidebarProps) {
  return (
    <nav
      aria-label="Homepage sections"
      className="pointer-events-none fixed right-4 top-1/2 z-40 hidden -translate-y-1/2 md:block lg:right-8"
    >
      <ul className="pointer-events-auto flex flex-col gap-3 rounded-full border border-white/10 bg-[#111111]/90 p-2 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-xl">
        {sectionLinks.map((item) => {
          const isActive = activeSection === item.label.toLowerCase()

          return (
            <li key={item.label}>
              <button
                type="button"
                onClick={() => onNavigate(item.label.toLowerCase() as HomeSectionId)}
                aria-current={isActive ? 'true' : undefined}
                className={`group flex h-12 w-12 items-center justify-center rounded-full border transition duration-300 sm:h-13 sm:w-13 ${
                  isActive
                    ? 'border-[#00ff66]/35 bg-[#00ff66] text-[#111111] shadow-[0_0_0_1px_rgba(0,255,102,0.18)]'
                    : 'border-transparent text-[#cfcfcf] hover:border-[#00ff66]/25 hover:bg-[#00ff66]/10 hover:text-[#00ff66]'
                }`}
                title={item.label}
              >
                <span className="text-[18px] leading-none transition duration-300 group-hover:scale-110">
                  {item.icon}
                </span>
              </button>
            </li>
          )
        })}
      </ul>
    </nav>
  )
}

export { HomeSectionSidebar }