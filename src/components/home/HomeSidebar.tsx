import { sectionLinks } from './homeContent'

function HomeSidebar() {
  return (
    <aside className="fixed left-0 top-1/2 z-40 hidden -translate-y-1/2 pl-4 xl:block">
      <nav className="rounded-[28px] border border-white/10 bg-[#101010]/80 p-3 backdrop-blur-md">
        <div className="flex flex-col gap-3">
          {sectionLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="group flex h-12 w-12 items-center justify-center rounded-2xl border border-white/5 bg-white/5 text-sm font-bold text-[#ededed] transition duration-300 hover:-translate-y-0.5 hover:border-[#00ff66]/40 hover:bg-[#00ff66]/10 hover:text-[#00ff66]"
              aria-label={link.label}
              title={link.label}
            >
              <span className="text-[14px] leading-none">{link.icon}</span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  )
}

export { HomeSidebar }