import type { ExperienceItem as Experience } from '../../types/data-types'

type ExperienceItemProps = {
  item: Experience
}

export function ExperienceItem({ item }: ExperienceItemProps) {
  return (
    <article className="space-y-1">
      <p className="text-[12px] text-[#9d9d9d]">{item.company}</p>
      <h3 className="display-font text-[28px] font-bold uppercase leading-[0.95] text-[#e6e6e6] sm:text-[36px]">
        {item.role}
      </h3>
      <p className="text-[12px] text-[#9d9d9d]">{item.period}</p>
    </article>
  )
}