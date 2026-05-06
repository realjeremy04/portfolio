import { useEffect, useRef, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

type MenuLink = {
  label: string
  href: string
}

const menuLinks: MenuLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/project' },
  { label: 'Contact', href: '/#contact' },
]

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const { pathname } = useLocation()
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const handlePointerDown = (event: PointerEvent) => {
      if (!isMenuOpen) {
        return
      }

      const target = event.target as Node | null

      if (target && menuRef.current && !menuRef.current.contains(target)) {
        setIsMenuOpen(false)
      }
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsMenuOpen(false)
      }
    }

    document.addEventListener('pointerdown', handlePointerDown)
    document.addEventListener('keydown', handleKeyDown)

    return () => {
      document.removeEventListener('pointerdown', handlePointerDown)
      document.removeEventListener('keydown', handleKeyDown)
    }
  }, [isMenuOpen])

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-360 items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link to="/" className="text-[18px] font-medium tracking-[-0.03em] text-[#ededed] transition hover:text-[#00ff66]">
          Jeremy
        </Link>

        <div ref={menuRef} className="relative z-[70] flex items-center justify-end">
          <button
            type="button"
            className="relative z-[70] inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-[#ededed] transition duration-300 hover:border-[#00ff66]/50 hover:text-[#00ff66]"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="shared-navbar-menu"
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            <span className="flex flex-col gap-1.5">
              <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? 'translate-y-2 rotate-45' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? 'scale-x-0 opacity-0' : ''}`} />
              <span className={`h-0.5 w-5 bg-current transition duration-300 ${isMenuOpen ? '-translate-y-2 -rotate-45' : ''}`} />
            </span>
          </button>

          <div
            id="shared-navbar-menu"
            className={`fixed inset-0 z-[60] transition-all duration-300 ease-out ${
              isMenuOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
            }`}
          >
            <button
              type="button"
              aria-label="Close menu"
              className="absolute inset-0 bg-[#1f1f1f]/72 backdrop-blur-[2px]"
              onClick={() => setIsMenuOpen(false)}
            />

            <div className="absolute inset-x-0 top-0 flex h-full items-start justify-center px-5 pt-22 sm:pt-24">
              <div className="flex w-full max-w-[22rem] flex-col items-center text-center">
                <div className="mb-8 flex flex-col items-center gap-3">
                  <p className="text-[12px] font-black uppercase tracking-[0.22em] text-[#ededed] sm:text-[14px]">Menu</p>
                  <div className="h-px w-12 bg-[#00ff66]/35" />
                </div>

                <nav
                  aria-label="Primary"
                  className={`w-full transition-all duration-300 ease-out ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-2 opacity-0'}`}
                >
                  <ul className="flex flex-col items-center gap-5 sm:gap-6">
                    {menuLinks.map((item, index) => (
                      <li key={item.label} className="w-full">
                        <Link
                          to={item.href}
                          onClick={() => setIsMenuOpen(false)}
                          className={`menu-item block text-[20px] font-black uppercase tracking-[0.03em] text-[#ededed] transition duration-300 hover:text-[#00ff66] sm:text-[22px] ${
                            pathname === item.href && item.href === '/' ? 'text-[#00ff66]' : ''
                          }`}
                          style={{ transitionDelay: `${index * 45}ms` }}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}

export { Navbar }