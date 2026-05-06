import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

import { sectionLinks } from '../data/homeContent'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname, hash } = useLocation()
  const activeSection = hash.replace('#', '') || (pathname === '/' ? 'home' : '')

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link to="/" className="text-[18px] font-medium tracking-[-0.03em] text-[#ededed] transition hover:text-[#00ff66]">
          Jeremy
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-2 rounded-full border border-white/10 bg-white/5 px-2 py-2 md:flex">
          {sectionLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId

            return (
              <Link
                key={link.href}
                to={`/${link.href}`}
                aria-current={isActive ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.18em] transition hover:bg-white/8 hover:text-[#00ff66] ${
                  isActive ? 'bg-white/8 text-[#00ff66]' : 'text-[#bfbfbf]'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            )
          })}
        </nav>

        <button
          type="button"
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ededed] transition hover:border-[#00ff66]/50 hover:text-[#00ff66] md:hidden"
          aria-label="Open menu"
          aria-expanded={isMenuOpen}
          aria-controls="shared-navbar-menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <span className="flex flex-col gap-1.5">
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
          </span>
        </button>

        <div
          id="shared-navbar-menu"
          className={`absolute right-5 top-[calc(100%+0.75rem)] z-50 transition-all duration-300 ease-out sm:right-8 lg:right-10 md:hidden ${
            isMenuOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-2 opacity-0'
          }`}
        >
          <nav aria-label="Mobile primary" className="bg-transparent p-0 shadow-none backdrop-blur-0">
            <div className="flex flex-col items-end gap-3">
              {sectionLinks.map((link) => {
                const sectionId = link.href.replace('#', '')
                const isActive = activeSection === sectionId

                return (
                  <Link
                    key={link.href}
                    to={`/${link.href}`}
                    onClick={() => setIsMenuOpen(false)}
                    className={`text-right text-[13px] font-semibold uppercase tracking-[0.2em] transition hover:text-[#00ff66] ${
                      isActive ? 'text-[#00ff66]' : 'text-[#cfcfcf]'
                    }`}
                  >
                    {link.label}
                  </Link>
                )
              })}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export { Navbar }