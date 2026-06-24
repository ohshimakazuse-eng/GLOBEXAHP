import type { ReactNode } from 'react'
import { Blob, Ring, Star } from './Shapes'

/** Small rounded pill that labels a section, e.g. "01 — Mission". */
export function SectionTag({
  no,
  en,
  color = '#2E7BEF',
}: {
  no: string
  en: string
  color?: string
}) {
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full px-4 py-2 mb-7 sm:mb-12 text-xs font-bold uppercase tracking-[0.14em]"
      style={{ background: `${color}1A`, color }}
    >
      <span className="font-anton text-sm tracking-normal">{no}</span>
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      <span>{en}</span>
    </div>
  )
}

/** Big colorful page banner used by sub-pages (MVV / Member / Company). */
export function PageHero({
  kicker,
  title,
  lead,
  accent = '#2E7BEF',
}: {
  kicker: string
  title: ReactNode
  lead?: ReactNode
  accent?: string
}) {
  return (
    <header className="relative overflow-hidden bg-brand-50 px-4 sm:px-10 pt-36 sm:pt-52 pb-20 sm:pb-28">
      {/* playful floating shapes */}
      <Blob className="-top-10 -right-10 sm:right-10" color={accent} size={260} />
      <Ring className="bottom-10 left-[6%]" color="#FF7AB6" size={90} stroke={12} />
      <Star className="top-28 left-[44%]" color="#FFC44D" size={52} />
      <div className="relative max-w-6xl mx-auto">
        <span
          className="inline-block rounded-full px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] mb-6"
          style={{ background: '#fff', color: accent, boxShadow: '0 10px 30px -12px rgba(20,34,74,0.25)' }}
        >
          {kicker}
        </span>
        <h1 className="font-anton uppercase leading-[0.92] text-ink text-6xl sm:text-8xl xl:text-9xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-8 max-w-2xl text-base sm:text-lg leading-loose text-ink/70 font-medium">
            {lead}
          </p>
        )}
      </div>
    </header>
  )
}

/* ─────────────────────────── Marquee ─────────────────────────── */
const KEYWORDS: { t: string; c: string }[] = [
  { t: 'Social Marketing', c: '#FF8A5B' },
  { t: 'Promotion', c: '#4FCB7B' },
  { t: 'Influencer', c: '#FF7AB6' },
  { t: 'BPO', c: '#6EB5FF' },
  { t: 'Recruitment', c: '#FFC44D' },
]
export function Marquee() {
  const set = [...KEYWORDS, ...KEYWORDS]
  return (
    <div className="bg-white border-y-2 border-brand-100 overflow-hidden py-5 sm:py-7">
      <div className="flex w-max items-center gap-6 animate-marquee whitespace-nowrap">
        {[...set, ...set].map((k, i) => (
          <span key={i} className="flex items-center gap-6">
            <span
              className="font-anton uppercase text-3xl sm:text-5xl tracking-tight"
              style={{ color: k.c }}
            >
              {k.t}
            </span>
            <span className="text-brand-200 text-2xl">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
