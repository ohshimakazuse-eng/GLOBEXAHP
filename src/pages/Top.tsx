import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowUpRight, Plus } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import { Grain, Marquee, SectionTag } from '../components/ui'

/* ─── Services ─── */
type Service = { no: string; ja: string; en: string; lead: string; desc: string; tags: string[] }
const SERVICES: Service[] = [
  {
    no: '01',
    ja: 'SNSマーケティング',
    en: 'Social Marketing',
    lead: 'ブランドの声を、届くべき人へ。',
    desc: '戦略設計からクリエイティブ、運用、分析までを一気通貫で。数字の先にある「選ばれる理由」を育てます。',
    tags: ['戦略設計', 'アカウント運用', 'クリエイティブ制作', '広告運用', '分析・改善'],
  },
  {
    no: '02',
    ja: 'プロモーション',
    en: 'Promotion',
    lead: '熱量を、ムーブメントに。',
    desc: '企画からキャスティング、実行まで。話題を生み、人を動かすプロモーションを設計します。',
    tags: ['企画立案', 'キャンペーン', 'タイアップ', 'イベント', 'PR'],
  },
  {
    no: '03',
    ja: 'インフルエンサー育成',
    en: 'Influencer',
    lead: '個人の挑戦を、本気で後押しする。',
    desc: '発信者一人ひとりの強みを見極め、ファンと影響力を育てる。挑戦が形になるまで伴走します。',
    tags: ['アカウント設計', 'コンテンツ戦略', 'ファン育成', 'マネジメント'],
  },
  {
    no: '04',
    ja: 'BPO',
    en: 'Business Process Outsourcing',
    lead: '業務を預け、本質に集中する。',
    desc: 'ノンコア業務を設計から運用までまるごと。標準化・効率化したうえでお預かりします。',
    tags: ['業務設計・標準化', 'バックオフィス代行', 'カスタマーサポート', 'データ処理'],
  },
  {
    no: '05',
    ja: '採用コンサルティング',
    en: 'Recruitment',
    lead: '採用を、経営の戦略に。',
    desc: '母集団形成から選考設計、定着支援まで。欲しい人材に確実に届く採用体験を設計します。',
    tags: ['採用戦略設計', '採用広報', '母集団形成', '選考プロセス改善', '定着支援'],
  },
]

function ServiceRow({ s }: { s: Service }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/15">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        className="group w-full flex items-center gap-4 sm:gap-8 text-left py-7 sm:py-10"
      >
        <span className="font-anton text-white/40 text-lg sm:text-2xl w-9 sm:w-14 shrink-0">
          {s.no}
        </span>
        <span className="flex-1 min-w-0">
          <span
            className={`block font-anton uppercase leading-none text-3xl sm:text-5xl xl:text-6xl transition-all duration-500 ${
              open ? 'text-brand-300 translate-x-2' : 'text-white group-hover:translate-x-2'
            }`}
          >
            {s.ja}
          </span>
          <span className="block mt-2 text-xs sm:text-sm uppercase tracking-[0.16em] text-white/45">
            {s.en}
          </span>
        </span>
        <Plus
          size={28}
          className={`shrink-0 text-white transition-transform duration-500 ${
            open ? 'rotate-45 text-brand-300' : ''
          }`}
        />
      </button>
      <div
        className="grid transition-[grid-template-rows] duration-500 ease-out"
        style={{ gridTemplateRows: open ? '1fr' : '0fr' }}
      >
        <div className="overflow-hidden">
          <div className="pl-0 sm:pl-[5.5rem] pb-9 sm:pb-12 max-w-3xl">
            <p className="font-anton uppercase text-brand-300 text-xl sm:text-3xl mb-4">{s.lead}</p>
            <p className="text-sm sm:text-base leading-loose text-white/70 mb-6">{s.desc}</p>
            <ul className="flex flex-wrap gap-2.5">
              {s.tags.map((t) => (
                <li
                  key={t}
                  className="text-xs tracking-wide text-white border border-white/25 rounded-full px-4 py-1.5"
                >
                  {t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const STATS = [
  { num: '05', label: 'Business Domains', ja: '事業領域' },
  { num: '2025', label: 'Founded', ja: '創業年' },
  { num: '∞', label: 'Possibilities', ja: '可能性' },
]

export default function Top() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Intro / Mission teaser */}
      <section className="bg-brand-50 px-4 sm:px-10 py-24 sm:py-40">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="01" en="Mission" />
          <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-start">
            <Reveal>
              <h2 className="font-anton uppercase leading-[0.92] text-ink text-5xl sm:text-7xl xl:text-8xl">
                See the
                <br />
                <span className="text-brand-600">unseen</span>
                <br />
                future.
              </h2>
            </Reveal>
            <div className="pt-2">
              <Reveal>
                <p className="text-base sm:text-lg leading-loose text-ink/75 mb-6">
                  「見えない未来を創る」。まだ形になっていない夢やアイデアを、一緒に具体的な行動へ
                  変えていく。それがGlobexaの役割です。
                </p>
              </Reveal>
              <Reveal delay={120}>
                <p className="text-base sm:text-lg leading-loose text-ink/75 mb-8">
                  SNSマーケティングを軸に、プロモーション、インフルエンサー育成、BPO、採用コンサルティング。
                  領域を越えて、誰かが前に進むきっかけを生み出します。
                </p>
              </Reveal>
              <Reveal delay={200}>
                <Link
                  to="/mvv"
                  className="group inline-flex items-center gap-2 font-anton uppercase text-lg sm:text-2xl text-brand-700 border-b-2 border-brand-300 pb-1 hover:border-brand-600 transition-colors"
                >
                  Our MVV
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="relative bg-brand-900 text-white px-4 sm:px-10 py-24 sm:py-40">
        <Grain />
        <div className="relative max-w-6xl mx-auto">
          <SectionTag no="02" en="Services" light />
          <Reveal>
            <h2 className="font-anton uppercase leading-[0.95] text-4xl sm:text-6xl xl:text-7xl mb-12 sm:mb-20">
              Five crafts,
              <br />
              <span className="text-brand-400">one purpose.</span>
            </h2>
          </Reveal>
          <div className="border-t border-white/15">
            {SERVICES.map((s) => (
              <ServiceRow key={s.no} s={s} />
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-600 text-white">
        <div className="max-w-6xl mx-auto grid sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/20">
          {STATS.map((s) => (
            <div key={s.label} className="px-6 py-14 sm:py-20 text-center">
              <div className="font-anton text-7xl sm:text-8xl leading-none">{s.num}</div>
              <div className="mt-4 text-sm uppercase tracking-[0.16em] text-white/85">{s.label}</div>
              <div className="mt-1 text-xs text-white/55">{s.ja}</div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section
        className="relative px-4 sm:px-10 py-28 sm:py-44 text-white text-center overflow-hidden"
        style={{ background: 'linear-gradient(160deg, #2E7BEF 0%, #1149B0 60%, #0A2A66 100%)' }}
      >
        <Grain />
        <div className="relative max-w-5xl mx-auto flex flex-col items-center">
          <Reveal>
            <p className="font-anton uppercase tracking-[0.1em] text-brand-200 text-lg sm:text-2xl mb-6">
              Let's create the future
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-anton uppercase leading-[0.95] text-5xl sm:text-8xl xl:text-9xl mb-10 sm:mb-14">
              Let's talk.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <a
              href="mailto:globexa@saiyo-p.com"
              className="group inline-flex items-center gap-3 font-anton uppercase text-2xl sm:text-5xl tracking-tight border-b-2 border-white/70 pb-2 hover:border-white transition-colors"
            >
              globexa@saiyo-p.com
              <ArrowUpRight className="w-6 h-6 sm:w-10 sm:h-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
