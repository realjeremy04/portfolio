type SectionHeadingProps = {
  title: string
  eyebrow?: string
}

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="space-y-3 lg:space-y-4">
      {eyebrow ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#8d8d8d]">{eyebrow}</p>
      ) : null}
      <h2 className="display-font max-w-[11ch] text-[clamp(2.35rem,5.2vw,4.5rem)] font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#f2f2f2] sm:text-[clamp(2.5rem,4.8vw,5rem)] lg:text-[clamp(2.75rem,3.8vw,5.2rem)]">
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <span className="h-1 w-[4.5rem] rounded-full bg-[#00ff66]/35" />
        <span className="h-1 w-8 rounded-full bg-[#00ff66]/55" />
      </div>
    </div>
  )
}