import type { ReactNode } from 'react'

export const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E"

export function Grain({ opacity = 0.35 }: { opacity?: number }) {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity,
        backgroundImage: `url("${GRAIN_SVG}")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
      }}
    />
  )
}

export function SectionTag({
  no,
  en,
  light = false,
}: {
  no: string
  en: string
  light?: boolean
}) {
  return (
    <div
      className={`flex items-center gap-4 text-xs font-semibold uppercase tracking-[0.18em] mb-8 sm:mb-14 ${
        light ? 'text-white/60' : 'text-brand-600'
      }`}
    >
      <span className={`h-px w-10 sm:w-16 ${light ? 'bg-white/40' : 'bg-brand-400'}`} />
      <span className="font-anton tracking-normal text-sm">{no}</span>
      <span className={light ? 'text-white' : 'text-ink'}>{en}</span>
    </div>
  )
}

/** Big page banner used by sub-pages (MVV / Member / Company). */
export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string
  title: string
  lead?: ReactNode
}) {
  return (
    <header
      className="relative overflow-hidden text-white px-4 sm:px-10 pt-36 sm:pt-48 pb-16 sm:pb-24"
      style={{ background: 'linear-gradient(160deg, #2E7BEF 0%, #1149B0 70%, #0A2A66 100%)' }}
    >
      <Grain opacity={0.3} />
      <div
        aria-hidden
        className="absolute right-[-6%] top-[8%] font-anton uppercase pointer-events-none select-none leading-none text-white/10"
        style={{ fontSize: 'clamp(120px, 26vw, 360px)', letterSpacing: '-0.02em' }}
      >
        {kicker}
      </div>
      <div className="relative max-w-6xl mx-auto">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200 mb-5">
          {kicker}
        </p>
        <h1 className="font-anton uppercase leading-[0.95] text-6xl sm:text-8xl xl:text-9xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-7 max-w-2xl text-base sm:text-lg leading-loose text-white/85">{lead}</p>
        )}
      </div>
    </header>
  )
}

/* ─────────────────────────── Marquee ─────────────────────────── */
const KEYWORDS = ['Social Marketing', 'Promotion', 'Influencer', 'BPO', 'Recruitment']
export function Marquee() {
  const set = [...KEYWORDS, ...KEYWORDS]
  return (
    <div className="bg-brand-700 border-y border-white/10 overflow-hidden py-6 sm:py-8">
      <div className="flex w-max items-center gap-10 animate-marquee whitespace-nowrap">
        {[...set, ...set].map((k, i) => (
          <span key={i} className="flex items-center gap-10">
            <span className="font-anton uppercase text-white text-3xl sm:text-5xl tracking-tight">
              {k}
            </span>
            <span className="text-brand-300 text-xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
