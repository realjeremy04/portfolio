import { LuArrowUpRight, LuGithub, LuGlobe, LuStar } from 'react-icons/lu'
import type { ProjectShowcaseItem } from '../../data/projectShowcase'

type ProjectListItemProps = {
  project: ProjectShowcaseItem
}

function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <article className="group border-t border-white/10 py-5 first:border-t-0 first:pt-0 sm:py-6 lg:py-7">
      <div className="grid gap-4 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-start lg:gap-10">
        <div className="space-y-3.5 sm:space-y-4">
          <p className="font-mono text-[9px] uppercase tracking-[0.34em] text-[#98a18f] sm:text-[10px] lg:text-[11px]">
            - {project.category.toUpperCase()}
          </p>

          <div className="space-y-2.5 sm:space-y-3">
            <h3 className={`display-font text-[clamp(1.8rem,4vw,2.9rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] ${project.accent ? 'text-[#00ff66]' : 'text-[#dfe6d0]'}`}>
              {project.title}
            </h3>

            <p className="max-w-3xl text-[12px] leading-[1.55rem] text-[#b9c0af] sm:text-[13px] sm:leading-6 lg:max-w-[40rem] lg:text-[14px] lg:leading-7">
              {project.summary}
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-4 lg:min-w-[15rem] lg:items-end lg:pt-1">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2 text-[10px] uppercase tracking-[0.16em] text-[#d7d7d7] sm:text-[11px]">
            <a
              href={project.source.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 transition duration-300 hover:border-[#00ff66]/55 hover:text-[#00ff66]"
            >
              <LuGithub className="h-3.5 w-3.5" aria-hidden="true" />
              {project.source.label}
              <LuArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <a
              href={project.live.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 border-b border-transparent pb-0.5 transition duration-300 hover:border-[#00ff66]/55 hover:text-[#00ff66]"
            >
              <LuGlobe className="h-3.5 w-3.5" aria-hidden="true" />
              {project.live.label}
              <LuArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </a>

            <span className="inline-flex items-center gap-1.5 text-[#e7ebde]">
              <LuStar className="h-3.5 w-3.5 text-[#00ff66]" aria-hidden="true" />
              {project.stars}
            </span>
          </div>

          <div className="flex flex-wrap justify-start gap-2 lg:justify-end">
            {project.stack.slice(0, 3).map((item) => (
              <span
                key={item}
                className="rounded-full border border-white/10 bg-white/5 px-2.5 py-1 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#d3dac8] transition duration-300 group-hover:border-[#00ff66]/25 group-hover:bg-[#00ff66]/6 group-hover:text-[#f2f2f2]"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </div>
    </article>
  )
}

export { ProjectListItem }