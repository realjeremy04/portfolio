import type { SkillGroup } from '../../types/data-types'

type SkillRailProps = {
  group: SkillGroup
}

const badgeStyles = 'inline-flex items-center gap-2 whitespace-nowrap text-[15px] uppercase tracking-[0.03em] text-[#d7d7d7]'

export function SkillRail({ group }: SkillRailProps) {
  return (
    <div className="grid gap-5 border-t border-white/5 py-6 md:grid-cols-[200px_1fr] md:gap-10">
      <div className="display-font text-[30px] leading-none text-[#bababa] sm:text-[36px]">{group.title}</div>
      <div className="flex flex-wrap gap-x-8 gap-y-4">
        {group.items.map((item, index) => (
          <span key={`${group.title}-${item}-${index}`} className={badgeStyles}>
            <span className="grid h-7 w-7 place-items-center rounded-[2px] bg-[#ffdf2b] text-[12px] font-extrabold text-[#191919]">
              {item === 'TypeScript' ? 'TS' : item === 'JavaScript' ? 'JS' : item === 'React JS' ? '◌' : item === 'Next JS' ? 'N' : item === 'Prisma' ? '△' : item === 'Three.js' ? '⟁' : '•'}
            </span>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}