import { useState } from 'react'
import { ArrowUpRight, Plus } from 'lucide-react'
import Reveal from './Reveal'

const GRAIN_SVG =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='200' height='200'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.08'/%3E%3C/svg%3E"

function Grain() {
  return (
    <div
      aria-hidden
      className="absolute inset-0 pointer-events-none"
      style={{
        opacity: 0.35,
        backgroundImage: `url("${GRAIN_SVG}")`,
        backgroundSize: '200px 200px',
        backgroundRepeat: 'repeat',
      }}
    />
  )
}

function SectionTag({ no, en, light = false }: { no: string; en: string; light?: boolean }) {
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

/* ─────────────────────────── Marquee ─────────────────────────── */
const KEYWORDS = ['Social Marketing', 'Recruitment', 'BPO', 'Reskilling']
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

/* ─────────────────────────── Philosophy ─────────────────────────── */
export function Philosophy() {
  return (
    <section id="philosophy" className="bg-brand-50 px-4 sm:px-10 py-24 sm:py-40">
      <div className="max-w-6xl mx-auto">
        <SectionTag no="01" en="Philosophy" />
        <div className="grid lg:grid-cols-[1.3fr_1fr] gap-10 lg:gap-20 items-start">
          <Reveal>
            <h2 className="font-anton uppercase leading-[0.92] text-ink text-5xl sm:text-7xl xl:text-8xl">
              Growth is
              <br />
              <span className="text-brand-600">not luck.</span>
              <br />
              It's designed.
            </h2>
          </Reveal>
          <div className="pt-2">
            <Reveal>
              <p className="text-base sm:text-lg leading-loose text-ink/75 mb-6">
                優れた商品も、優れた組織も、それだけでは前へ進みません。届けるべき相手に届き、
                必要な人材が集まり、業務が滞りなく回り、人が学び続ける——その循環があってはじめて、
                事業は成長します。
              </p>
            </Reveal>
            <Reveal delay={120}>
              <p className="text-base sm:text-lg leading-loose text-ink/75">
                Globexaは、その循環をひとつの戦略として捉えます。マーケティング、採用、業務、人材育成。
                分断されがちな領域を横断し、成果から逆算して最適なかたちを描く。私たちは、成長の
                「設計者」です。
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Services ─────────────────────────── */
type Service = {
  no: string
  ja: string
  en: string
  lead: string
  desc: string
  tags: string[]
}
const SERVICES: Service[] = [
  {
    no: '01',
    ja: 'SNSマーケティング',
    en: 'Social Marketing',
    lead: 'ブランドの声を、届くべき人へ。',
    desc: '戦略設計からクリエイティブ、運用、分析までを一気通貫で。フォロワー数ではなく、事業成果で語ります。',
    tags: ['戦略設計', 'アカウント運用', 'クリエイティブ制作', '広告運用', 'インフルエンサー施策'],
  },
  {
    no: '02',
    ja: '採用コンサルティング',
    en: 'Recruitment',
    lead: '採用を、経営の戦略に。',
    desc: '母集団形成から選考設計、内定後のフォローまで。企業の魅力を言語化し、欲しい人材に確実に届く採用体験を設計します。',
    tags: ['採用戦略設計', '採用広報', '母集団形成', '選考プロセス改善', '定着支援'],
  },
  {
    no: '03',
    ja: 'BPO',
    en: 'Business Process Outsourcing',
    lead: '業務を預け、本質に集中する。',
    desc: 'ノンコア業務を、設計から運用までまるごと。業務そのものを再設計し、標準化・効率化したうえでお預かりします。',
    tags: ['業務設計・標準化', 'バックオフィス代行', 'カスタマーサポート', 'データ処理', '運用改善'],
  },
  {
    no: '04',
    ja: 'リスキリング',
    en: 'Reskilling',
    lead: '学び直しが、組織を強くする。',
    desc: '現場で本当に使えるスキルを、実践ベースのプログラムで定着させます。学びが成果に変わるところまで伴走します。',
    tags: ['スキル診断', '研修プログラム設計', 'DX人材育成', '実践型ワークショップ', '効果測定'],
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

export function Services() {
  return (
    <section id="services" className="relative bg-brand-900 text-white px-4 sm:px-10 py-24 sm:py-40">
      <Grain />
      <div className="relative max-w-6xl mx-auto">
        <SectionTag no="02" en="Services" light />
        <Reveal>
          <h2 className="font-anton uppercase leading-[0.95] text-4xl sm:text-6xl xl:text-7xl mb-12 sm:mb-20">
            Four crafts,
            <br />
            <span className="text-brand-400">one strategy.</span>
          </h2>
        </Reveal>
        <div className="border-t border-white/15">
          {SERVICES.map((s) => (
            <ServiceRow key={s.no} s={s} />
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Approach ─────────────────────────── */
const APPROACH = [
  {
    k: 'A',
    title: '成果から、逆算する。',
    text: '施策のための施策はつくりません。事業のゴールを起点に、「何を、なぜ、どこまで」を定義してから手を動かします。',
  },
  {
    k: 'B',
    title: '領域を、横断する。',
    text: 'マーケ・採用・業務・育成を分けて考えない。連動させることで生まれる相乗効果こそ、私たちの価値です。',
  },
  {
    k: 'C',
    title: '伴走し、共に走る。',
    text: '提案して終わりではなく、現場に入り、定着するまで。成果が出る瞬間まで、チームの一員として並走します。',
  },
]
export function Approach() {
  return (
    <section id="approach" className="bg-white px-4 sm:px-10 py-24 sm:py-40">
      <div className="max-w-6xl mx-auto">
        <SectionTag no="03" en="Approach" />
        <Reveal>
          <h2 className="font-anton uppercase text-ink text-5xl sm:text-7xl xl:text-8xl mb-12 sm:mb-20">
            The way <span className="text-brand-600">we work</span>
          </h2>
        </Reveal>
        <div className="grid md:grid-cols-3 gap-px bg-brand-100">
          {APPROACH.map((a, i) => (
            <Reveal key={a.k} delay={i * 100}>
              <div className="bg-white p-8 sm:p-10 h-full">
                <span className="font-anton text-6xl sm:text-7xl text-brand-200 leading-none">
                  {a.k}
                </span>
                <h3 className="font-anton uppercase text-2xl sm:text-3xl text-ink mt-6 mb-4">
                  {a.title}
                </h3>
                <p className="text-sm sm:text-base leading-loose text-ink/70">{a.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ─────────────────────────── Stats ─────────────────────────── */
const STATS = [
  { num: '04', label: 'Business Domains', ja: '事業領域' },
  { num: '100%', label: 'Outcome-driven', ja: '成果起点' },
  { num: '01', label: 'Cross-functional Team', ja: '横断する一つのチーム' },
]
export function Stats() {
  return (
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
  )
}

/* ─────────────────────────── Company ─────────────────────────── */
const COMPANY = [
  { k: 'Name', v: '株式会社Globexa' },
  { k: 'Business', v: 'SNSマーケティング事業 / 採用コンサルティング事業 / BPO事業 / リスキリング事業' },
  { k: 'Location', v: '東京都' },
  { k: 'Contact', v: 'contact@globexa.co.jp' },
]
export function Company() {
  return (
    <section id="company" className="relative bg-brand-900 text-white px-4 sm:px-10 py-24 sm:py-40">
      <Grain />
      <div className="relative max-w-6xl mx-auto">
        <SectionTag no="04" en="Company" light />
        <Reveal>
          <h2 className="font-anton uppercase text-5xl sm:text-7xl xl:text-8xl mb-12 sm:mb-16">
            Company
          </h2>
        </Reveal>
        <dl className="border-t border-white/15">
          {COMPANY.map((row) => (
            <Reveal key={row.k} as="div">
              <div className="grid sm:grid-cols-[12rem_1fr] gap-1 sm:gap-8 py-6 sm:py-8 border-b border-white/15">
                <dt className="font-anton uppercase text-sm tracking-[0.12em] text-brand-300 pt-1">
                  {row.k}
                </dt>
                <dd className="text-base sm:text-lg text-white/90">{row.v}</dd>
              </div>
            </Reveal>
          ))}
        </dl>
      </div>
    </section>
  )
}

/* ─────────────────────────── Contact ─────────────────────────── */
export function Contact() {
  return (
    <section
      id="contact"
      className="relative px-4 sm:px-10 py-28 sm:py-48 text-white text-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #2E7BEF 0%, #1149B0 60%, #0A2A66 100%)' }}
    >
      <Grain />
      <div className="relative max-w-5xl mx-auto flex flex-col items-center">
        <Reveal>
          <p className="font-anton uppercase tracking-[0.1em] text-brand-200 text-lg sm:text-2xl mb-6">
            Let's design your growth
          </p>
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-anton uppercase leading-[0.95] text-5xl sm:text-8xl xl:text-9xl mb-10 sm:mb-14">
            Let's talk.
          </h2>
        </Reveal>
        <Reveal delay={160}>
          <a
            href="mailto:contact@globexa.co.jp"
            className="group inline-flex items-center gap-3 font-anton uppercase text-2xl sm:text-5xl tracking-tight border-b-2 border-white/70 pb-2 hover:border-white transition-colors"
          >
            contact@globexa.co.jp
            <ArrowUpRight className="w-6 h-6 sm:w-10 sm:h-10 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        </Reveal>
      </div>
    </section>
  )
}
