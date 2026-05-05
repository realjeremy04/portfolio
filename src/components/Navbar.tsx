import { Link } from 'react-router-dom'

import type { NavLink } from '../types/data-types'

type NavbarProps = {
  links: NavLink[]
}

export function Navbar({ links }: NavbarProps) {
  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#1f1f1f]/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-280 items-center justify-between px-5 py-5 sm:px-8 lg:px-10">
        <Link to="/" className="flex items-center gap-3 text-[#d7d7d7] transition hover:text-white">
          <span className="h-4 w-4 rotate-45 border-2 border-[#00ff66]" />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <Link
              key={`${link.label}-${link.href}`}
              to={link.href}
              className="display-font text-[18px] font-bold text-[#cfcfcf] transition hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="inline-flex h-9 w-9 items-center justify-center rounded-sm border border-white/5 bg-white/8 text-white/75 transition hover:bg-white/12 md:hidden"
          aria-label="Open menu"
        >
          <span className="flex flex-col gap-1">
            <span className="h-0.5 w-4 bg-current" />
            <span className="h-0.5 w-4 bg-current" />
          </span>
        </button>
      </div>
    </header>
  )
}