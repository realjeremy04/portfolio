type SectionHeadingProps = {
  title: string
  eyebrow: string
}

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="mb-8 space-y-2">
      <div className="flex items-center gap-3 text-[12px] uppercase tracking-[0.18em] text-[#bfbfbf]">
        <span className="text-lg leading-none text-white">✳</span>
        <span>{eyebrow}</span>
      </div>
      <h2 className="display-font text-[34px] font-black uppercase leading-[0.92] text-[#ededed] sm:text-[42px]">
        {title}
      </h2>
    </div>
  )
}