import { useEffect, useState } from 'react'

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
  const [svg, setSvg] = useState<string | null>(null)
  const [error, setError] = useState<string | null>(null)

  // Remote SVG URL (provided)
  const remoteSvgUrl = 'https://raw.githubusercontent.com/realjeremy04/realjeremy04/output/snake.svg'

  const [version, setVersion] = useState<number>(0)

  useEffect(() => {
    let mounted = true

    async function fetchSvg() {
      try {
        const res = await fetch(remoteSvgUrl, { cache: 'no-cache' })
        if (!res.ok) throw new Error(`Failed to fetch SVG: ${res.status}`)
        const text = await res.text()
        if (mounted) {
          setSvg(text)
          // bump version to force image reload when using <img>
          setVersion(Date.now())
          setError(null)
        }
      } catch (err) {
        if (mounted) {
          const message = err instanceof Error ? err.message : 'Failed to load SVG'
          setError(message)
        }
      }
    }

    // initial fetch
    fetchSvg()

    // poll every 30s to pick up updates
    const id = setInterval(fetchSvg, 30_000)

    return () => {
      mounted = false
      clearInterval(id)
    }
  }, [remoteSvgUrl])

  return (
    <div>
    

      <div className="mt-6 rounded-[24px] border border-white/8 bg-[#0b0b0b] p-0 sm:p-0 overflow-hidden relative min-h-[12rem] sm:min-h-[14rem] lg:min-h-[16rem]">
        {svg ? (
          // Render SVG as an <img> to allow object-fit cover and full-fill of the card
          <img
            src={`${remoteSvgUrl}?v=${version}`}
            alt="Commit graph"
            className="w-full h-full object-cover block"
            aria-label="Remote commit graph SVG"
          />
        ) : (
          <div className="p-4 sm:p-5">
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
        )}
      </div>

      <div className="mt-4 flex flex-wrap items-center justify-between gap-3 text-[10px] uppercase tracking-[0.26em] text-[#8d8d8d] sm:text-[11px]">
        <span className="font-mono text-[#bfc3c6]">updated in real time</span>
      </div>

      {error && <div className="mt-3 text-sm text-red-400">{error}</div>}
    </div>
  )
}

export { CommitGraph }