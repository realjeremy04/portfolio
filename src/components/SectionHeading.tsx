type SectionHeadingProps = {
  title: string
  eyebrow?: string
}

export function SectionHeading({ title, eyebrow }: SectionHeadingProps) {
  return (
    <div className="space-y-4">
      {eyebrow ? (
        <p className="text-[10px] font-semibold uppercase tracking-[0.34em] text-[#8d8d8d]">{eyebrow}</p>
      ) : null}
      <h2 className="display-font max-w-[11ch] text-[clamp(3rem,7vw,5.8rem)] font-black uppercase leading-[0.88] tracking-[-0.05em] text-[#f2f2f2] sm:text-[clamp(3.25rem,6vw,6rem)]">
        {title}
      </h2>
      <div className="flex items-center gap-3">
        <span className="h-1 w-[4.5rem] rounded-full bg-[#00ff66]/35" />
        <span className="h-1 w-8 rounded-full bg-[#00ff66]/55" />
      </div>
    </div>
  )
}