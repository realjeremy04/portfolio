const graphRows = 7
const graphColumns = 28

const graphCells = Array.from({ length: graphRows * graphColumns }, (_, index) => {
  const row = Math.floor(index / graphColumns)
  const column = index % graphColumns
  const wave = (Math.sin(column * 0.74 + row * 1.1) + 1) / 2
  const drift = ((column * 11 + row * 7) % 13) / 12
  const score = wave * 0.65 + drift * 0.35 - row * 0.03
  const level = Math.max(0, Math.min(4, Math.floor(score * 5)))

  return { id: `${row}-${column}`, level }
})

const cellStyles = [
  'border-white/8 bg-[#101810]',
  'border-[#203322] bg-[#1a2b1d]',
  'border-[#29422d] bg-[#21402b] shadow-[0_0_10px_rgba(0,255,102,0.08)]',
  'border-[#35643a] bg-[#2c5a33] shadow-[0_0_14px_rgba(0,255,102,0.15)]',
  'border-[#72e789] bg-[#9ef2a7] shadow-[0_0_18px_rgba(0,255,102,0.22)]',
]

function CommitGraph() {
  return (
    <div >
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div>
          <p className="mt-2 max-w-2xl text-[12px] leading-6 text-[#bfc3c6] sm:text-[13px] sm:leading-6.5 lg:text-[14px] lg:leading-7">
            A contribution-style visualization with layered greens, soft bloom, and a centered composition that stays readable on every screen.
          </p>
        </div>

        <div className="flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-3 py-2">
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d7d7d7]">less</span>
          <div className="flex items-center gap-1">
            {cellStyles.slice(0, 5).map((style, index) => (
              <span key={index} className={`h-3 w-3 rounded-[3px] border ${style}`} />
            ))}
          </div>
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-[#d7d7d7]">more</span>
        </div>
      </div>

      <div className="mt-6 rounded-[24px] border border-white/8 bg-[#0b0b0b] p-4 sm:p-5">
        <div
          className="grid gap-1.5 sm:gap-2"
          style={{ gridTemplateColumns: `repeat(${graphColumns}, minmax(0, 1fr))` }}
          aria-label="Commit graph"
        >
          {graphCells.map((cell) => (
            <span
              key={cell.id}
              className={`aspect-square rounded-[3px] border transition duration-300 hover:scale-[1.08] ${cellStyles[cell.level]}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d] sm:text-[11px]">
        <span className="font-mono">600 commits this year</span>
        <span className="font-mono text-[#bfc3c6]">updated in real time</span>
      </div>
    </div>
  )
}

export { CommitGraph }