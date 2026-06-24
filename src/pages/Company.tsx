import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { PageHero, SectionTag } from '../components/ui'
import { Blob, Ring, Star } from '../components/Shapes'

const PROFILE = [
  { k: 'Company', label: '会社名', v: '株式会社Globexa', c: '#FF8A5B' },
  { k: 'Representative', label: '代表者', v: '代表取締役　山﨑 星河', c: '#4FCB7B' },
  { k: 'Founded', label: '設立', v: '2025年7月31日', c: '#FF7AB6' },
  { k: 'Capital', label: '資本金', v: '1,000,000円', c: '#6EB5FF' },
  {
    k: 'Address',
    label: '所在地',
    v: '〒160-0023　東京都新宿区西新宿3-3-13 西新宿水間ビル2F',
    c: '#FFC44D',
  },
  {
    k: 'Business',
    label: '事業内容',
    v: 'SNSマーケティング事業 / プロモーション事業 / インフルエンサー育成事業 / BPO事業 / 採用コンサルティング事業',
    c: '#9B8CFF',
  },
  { k: 'Contact', label: 'お問い合わせ', v: 'globexa@saiyo-p.com', c: '#2E7BEF' },
]

export default function Company() {
  return (
    <>
      <PageHero
        kicker="Company"
        title="Company profile."
        lead="株式会社Globexaの会社概要です。"
        accent="#6EB5FF"
      />

      {/* Profile */}
      <section className="relative overflow-hidden bg-white px-4 sm:px-10 py-24 sm:py-32">
        <Blob className="top-10 -right-12 hidden sm:block" color="#FFC44D" size={200} />
        <div className="relative max-w-5xl mx-auto">
          <SectionTag no="01" en="Overview" color="#2E7BEF" />
          <div className="rounded-5xl bg-brand-50 p-5 sm:p-10">
            <dl>
              {PROFILE.map((row, i) => (
                <Reveal key={row.k} as="div" delay={(i % 4) * 60}>
                  <div
                    className={`grid sm:grid-cols-[15rem_1fr] gap-1.5 sm:gap-8 py-5 sm:py-6 ${
                      i !== PROFILE.length - 1 ? 'border-b border-brand-100' : ''
                    }`}
                  >
                    <dt className="flex items-center gap-3">
                      <span className="w-2.5 h-2.5 rounded-full" style={{ background: row.c }} />
                      <span>
                        <span className="font-anton uppercase text-sm tracking-[0.1em] text-ink">
                          {row.k}
                        </span>
                        <span className="block text-xs text-ink/45">{row.label}</span>
                      </span>
                    </dt>
                    <dd className="text-base sm:text-lg text-ink/85 leading-relaxed font-medium sm:pt-0.5">
                      {row.v}
                    </dd>
                  </div>
                </Reveal>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Access + contact CTA */}
      <section className="px-4 sm:px-8 pb-24 sm:pb-32">
        <div
          className="relative max-w-5xl mx-auto rounded-5xl overflow-hidden text-white px-6 sm:px-14 py-20 sm:py-28"
          style={{ background: 'linear-gradient(150deg, #2E7BEF 0%, #1149B0 60%, #0A2A66 100%)' }}
        >
          <Ring className="top-10 right-10 hidden sm:block" color="#ffffff44" size={90} stroke={12} />
          <Star className="bottom-12 left-10 hidden sm:block" color="#FFC44D" size={52} />
          <Blob className="-bottom-10 -right-8" color="#FF7AB6" size={180} />
          <div className="relative">
            <span className="inline-block rounded-full bg-white/15 px-4 py-2 text-xs font-bold uppercase tracking-[0.16em] mb-6">
              02 — Access &amp; Contact
            </span>
            <Reveal>
              <h2 className="mb-8">
                <span className="block font-rounded font-black text-3xl sm:text-5xl">
                  西新宿から。
                </span>
                <span className="block font-anton uppercase text-4xl sm:text-6xl xl:text-7xl text-brand-300">
                  from Tokyo.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={100}>
              <p className="text-base sm:text-lg leading-loose text-white/80 mb-10 max-w-2xl font-medium">
                〒160-0023　東京都新宿区西新宿3-3-13 西新宿水間ビル2F
                <br />
                新宿駅・初台駅より徒歩圏。採用・お仕事のご相談はお気軽にご連絡ください。
              </p>
            </Reveal>
            <Reveal delay={180}>
              <a
                href="mailto:globexa@saiyo-p.com"
                className="group inline-flex items-center gap-3 rounded-full bg-white text-brand-600 font-anton uppercase text-xl sm:text-3xl tracking-tight px-8 py-4 hover:-translate-y-1 transition-transform shadow-xl"
              >
                globexa@saiyo-p.com
                <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  )
}
