import { ArrowUpRight } from 'lucide-react'
import Reveal from '../components/Reveal'
import { Grain, PageHero, SectionTag } from '../components/ui'

const PROFILE = [
  { k: 'Company', label: '会社名', v: '株式会社Globexa' },
  { k: 'Representative', label: '代表者', v: '代表取締役　山﨑 星河' },
  { k: 'Founded', label: '設立', v: '2025年7月31日' },
  { k: 'Capital', label: '資本金', v: '1,000,000円' },
  {
    k: 'Address',
    label: '所在地',
    v: '〒160-0023　東京都新宿区西新宿3-3-13 西新宿水間ビル2F',
  },
  {
    k: 'Business',
    label: '事業内容',
    v: 'SNSマーケティング事業 / プロモーション事業 / インフルエンサー育成事業 / BPO事業 / 採用コンサルティング事業',
  },
  { k: 'Contact', label: 'お問い合わせ', v: 'globexa@saiyo-p.com' },
]

export default function Company() {
  return (
    <>
      <PageHero
        kicker="Company"
        title="Company profile."
        lead="株式会社Globexaの会社概要です。"
      />

      {/* Profile table */}
      <section className="bg-brand-50 px-4 sm:px-10 py-24 sm:py-36">
        <div className="max-w-5xl mx-auto">
          <SectionTag no="01" en="Overview" />
          <dl className="border-t border-brand-200">
            {PROFILE.map((row) => (
              <Reveal key={row.k} as="div">
                <div className="grid sm:grid-cols-[14rem_1fr] gap-1 sm:gap-8 py-6 sm:py-7 border-b border-brand-200">
                  <dt className="pt-0.5">
                    <span className="font-anton uppercase text-sm tracking-[0.12em] text-brand-600">
                      {row.k}
                    </span>
                    <span className="block text-xs text-ink/50 mt-0.5">{row.label}</span>
                  </dt>
                  <dd className="text-base sm:text-lg text-ink/90 leading-relaxed">{row.v}</dd>
                </div>
              </Reveal>
            ))}
          </dl>
        </div>
      </section>

      {/* Access + contact CTA */}
      <section className="relative bg-brand-900 text-white px-4 sm:px-10 py-24 sm:py-36 overflow-hidden">
        <Grain />
        <div className="relative max-w-5xl mx-auto">
          <SectionTag no="02" en="Access &amp; Contact" light />
          <Reveal>
            <h2 className="font-anton uppercase text-4xl sm:text-6xl xl:text-7xl mb-8">
              西新宿、
              <br />
              <span className="text-brand-400">from Tokyo.</span>
            </h2>
          </Reveal>
          <Reveal delay={100}>
            <p className="text-base sm:text-lg leading-loose text-white/75 mb-10 max-w-2xl">
              〒160-0023　東京都新宿区西新宿3-3-13 西新宿水間ビル2F<br />
              新宿駅・初台駅より徒歩圏。採用・お仕事のご相談はお気軽にご連絡ください。
            </p>
          </Reveal>
          <Reveal delay={180}>
            <a
              href="mailto:globexa@saiyo-p.com"
              className="group inline-flex items-center gap-3 font-anton uppercase text-2xl sm:text-4xl tracking-tight border-b-2 border-white/70 pb-2 hover:border-white transition-colors"
            >
              globexa@saiyo-p.com
              <ArrowUpRight className="w-6 h-6 sm:w-9 sm:h-9 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
