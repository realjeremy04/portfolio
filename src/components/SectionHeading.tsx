type SectionHeadingProps = {
  title: string
  eyebrow?: string
  animateItems?: boolean
  compact?: boolean
  className?: string
  framedTitle?: boolean
  hideEyebrowOnMobile?: boolean
}

export function SectionHeading({
  title,
  eyebrow,
  animateItems = false,
  compact = false,
  className = '',
  framedTitle = false,
  hideEyebrowOnMobile = false,
}: SectionHeadingProps) {
  return (
    <div className={`${compact ? 'space-y-2 sm:space-y-2.5 lg:space-y-4' : 'space-y-3 lg:space-y-4'} ${className}`}>
      {eyebrow ? (
        <p
          data-reveal-item={animateItems ? '' : undefined}
          className={`${hideEyebrowOnMobile ? 'hidden lg:block' : ''} ${compact ? 'text-[9px] tracking-[0.28em] sm:text-[10px] sm:tracking-[0.32em]' : 'text-[10px] tracking-[0.34em]'} font-semibold uppercase text-[#8d8d8d]`}
        >
          {eyebrow}
        </p>
      ) : null}
      <h2
        data-reveal-item={animateItems ? '' : undefined}
        className={`display-font font-black uppercase leading-[0.9] tracking-[-0.05em] text-[#f2f2f2] ${
          compact
            ? 'max-w-[9ch] text-[clamp(2rem,8vw,3rem)] sm:text-[clamp(2.2rem,6.6vw,3.5rem)] lg:max-w-[11ch] lg:text-[clamp(2.75rem,3.8vw,5.2rem)]'
            : 'max-w-[11ch] text-[clamp(2.35rem,5.2vw,4.5rem)] sm:text-[clamp(2.5rem,4.8vw,5rem)] lg:text-[clamp(2.75rem,3.8vw,5.2rem)]'
        } ${framedTitle ? 'inline-block bg-[var(--panel)] px-2.5 py-1 sm:px-3 sm:py-1.5 lg:bg-transparent lg:px-0 lg:py-0' : ''}`}
      >
        {title}
      </h2>
      <div data-reveal-item={animateItems ? '' : undefined} className={`flex items-center ${compact ? 'gap-2.5' : 'gap-3'}`}>
        <span className={`${compact ? 'w-[3.9rem] sm:w-[4.5rem]' : 'w-[4.5rem]'} h-1 rounded-full glow-divider`} />
        <span className={`${compact ? 'w-7 sm:w-8' : 'w-8'} h-1 rounded-full bg-[#00ff66]/55`} />
      </div>
    </div>
  )
}
