import type { ReactNode } from 'react'

/** Small label that introduces a section, e.g. "01 — Mission". */
export function SectionTag({ no, en }: { no: string; en: string }) {
  return (
    <div className="flex items-center gap-3 mb-7 sm:mb-12 text-xs font-bold uppercase tracking-[0.18em] text-brand-600">
      <span className="font-anton tracking-normal text-sm">{no}</span>
      <span className="h-px w-10 bg-brand-300" />
      <span className="text-ink/70">{en}</span>
    </div>
  )
}

/** Calm page banner for sub-pages (MVV / Member / Company). */
export function PageHero({
  kicker,
  title,
  lead,
}: {
  kicker: string
  title: ReactNode
  lead?: ReactNode
}) {
  return (
    <header className="relative overflow-hidden bg-brand-50 px-4 sm:px-10 pt-36 sm:pt-52 pb-16 sm:pb-24 border-b border-brand-100">
      <div className="relative max-w-6xl mx-auto">
        <span className="inline-block text-xs font-bold uppercase tracking-[0.2em] text-brand-600 mb-5">
          {kicker}
        </span>
        <h1 className="font-anton uppercase leading-[0.92] text-ink text-6xl sm:text-8xl xl:text-9xl">
          {title}
        </h1>
        {lead && (
          <p className="mt-7 max-w-2xl text-base sm:text-lg leading-loose text-ink/65 font-medium">
            {lead}
          </p>
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
    <div className="bg-white border-y border-brand-100 overflow-hidden py-5 sm:py-6">
      <div className="flex w-max items-center gap-8 animate-marquee whitespace-nowrap">
        {[...set, ...set].map((k, i) => (
          <span key={i} className="flex items-center gap-8">
            <span className="font-anton uppercase text-2xl sm:text-4xl tracking-tight text-brand-600">
              {k}
            </span>
            <span className="text-brand-200 text-xl">/</span>
          </span>
        ))}
      </div>
    </div>
  )
}
