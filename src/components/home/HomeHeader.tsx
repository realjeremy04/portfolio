import { useState } from 'react'

import { sectionLinks } from '../../data/homeContent'
import type { HomeSectionId } from '../../hooks/useHomeSectionScroll'

type HomeHeaderProps = {
  activeSection: HomeSectionId
  onNavigate: (sectionId: HomeSectionId) => void
}

function HomeHeader({ activeSection, onNavigate }: HomeHeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <a href="#home" className="text-[18px] font-medium tracking-[-0.03em] text-[#ededed] transition hover:text-[#00ff66]">
          Jeremy
        </a>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ededed] transition hover:border-[#00ff66]/50 hover:text-[#00ff66] md:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="mobile-home-nav"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2 ' : ''}`} />
          </span>
        </button>

        <nav aria-label="Section navigation" className="hidden items-center gap-3 rounded-full border border-white/10 bg-white/5 px-3 py-2 md:flex">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(event) => {
                event.preventDefault()
                onNavigate(link.href.slice(1) as HomeSectionId)
              }}
              aria-current={activeSection === link.href.slice(1) ? 'page' : undefined}
              className={`rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] transition hover:bg-white/8 hover:text-[#00ff66] ${
                activeSection === link.href.slice(1) ? 'bg-white/8 text-[#00ff66]' : 'text-[#bfbfbf]'
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>

      <div
        id="mobile-home-nav"
        className={`absolute right-5 top-[calc(100%+0.75rem)] z-50 transition-all duration-300 ease-out sm:right-8 lg:right-10 md:hidden ${
          isMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
        }`}
      >
        <nav aria-label="Mobile section navigation" className="bg-transparent p-0 shadow-none backdrop-blur-0">
          <div className="flex flex-col items-end gap-3">
            {sectionLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(event) => {
                  event.preventDefault()
                  setIsMenuOpen(false)
                  onNavigate(link.href.slice(1) as HomeSectionId)
                }}
                className={`text-right text-[13px] font-semibold uppercase tracking-[0.2em] transition hover:text-[#00ff66] ${
                  activeSection === link.href.slice(1) ? 'text-[#00ff66]' : 'text-[#cfcfcf]'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      </div>
    </header>
  )
}

export { HomeHeader }