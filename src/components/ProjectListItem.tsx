import type { ProjectItem } from '../../types/data-types'

type ProjectListItemProps = {
  project: ProjectItem
}

export function ProjectListItem({ project }: ProjectListItemProps) {
  return (
    <article className="grid gap-2 border-t border-white/10 py-4 md:grid-cols-[60px_1fr] md:items-center md:gap-6">
      <div className="text-[12px] font-semibold text-[#8f8f8f]">{project.number}</div>
      <div className="space-y-1">
        <h3 className={`display-font text-[34px] font-bold uppercase leading-[0.9] sm:text-[42px] ${project.accent ? 'text-[#00ff66]' : 'text-[#ededed]'}`}>
          {project.title}
        </h3>
        <p className="text-[12px] text-[#8f8f8f] sm:text-[13px]">{project.stack}</p>
      </div>
    </article>
  )
}