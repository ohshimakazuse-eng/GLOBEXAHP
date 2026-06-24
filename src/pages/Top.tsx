import { Link } from 'react-router-dom'
import { ArrowUpRight, Megaphone, Rocket, Star as StarIcon, Layers, Target } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import Hero from '../components/Hero'
import Reveal from '../components/Reveal'
import { Marquee, SectionTag } from '../components/ui'
import { MEMBERS } from '../data/members'

type Service = { no: string; ja: string; en: string; desc: string; Icon: LucideIcon }
const SERVICES: Service[] = [
  {
    no: '01',
    ja: 'SNSマーケティング',
    en: 'Social Marketing',
    desc: '戦略設計から運用・分析まで一気通貫。数字の先にある「選ばれる理由」を育てます。',
    Icon: Megaphone,
  },
  {
    no: '02',
    ja: 'プロモーション',
    en: 'Promotion',
    desc: '企画からキャスティング、実行まで。話題を生み、人を動かす仕掛けを設計します。',
    Icon: Rocket,
  },
  {
    no: '03',
    ja: 'インフルエンサー育成',
    en: 'Influencer',
    desc: '発信者一人ひとりの強みを見極め、ファンと影響力を育てる。挑戦に伴走します。',
    Icon: StarIcon,
  },
  {
    no: '04',
    ja: 'BPO',
    en: 'Business Process Outsourcing',
    desc: 'ノンコア業務を設計から運用までまるごと。標準化・効率化してお預かりします。',
    Icon: Layers,
  },
  {
    no: '05',
    ja: '採用コンサルティング',
    en: 'Recruitment',
    desc: '母集団形成から選考設計、定着支援まで。欲しい人材に届く採用体験を設計します。',
    Icon: Target,
  },
]

export default function Top() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* Mission intro */}
      <section className="bg-white px-4 sm:px-10 py-24 sm:py-36">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="01" en="Mission" />
          <div className="grid lg:grid-cols-[1.25fr_1fr] gap-10 lg:gap-20 items-start">
            <Reveal>
              <h2 className="font-anton uppercase leading-[0.92] text-ink text-5xl sm:text-7xl xl:text-8xl">
                See the
                <br />
                <span className="text-brand-600">unseen future.</span>
              </h2>
              <p className="mt-6 font-rounded font-bold text-xl sm:text-2xl text-ink/80">
                見えない未来を、創る。
              </p>
            </Reveal>
            <div>
              <Reveal>
                <p className="text-base sm:text-lg leading-loose text-ink/70 mb-8 font-medium">
                  まだ形になっていない夢やアイデアを、一緒に具体的な行動へ変えていく。
                  SNSマーケティングを軸に、領域を越えて、誰かが前に進むきっかけを生み出します。
                </p>
              </Reveal>
              <Reveal delay={120}>
                <Link
                  to="/mvv"
                  className="group inline-flex items-center gap-2 text-brand-700 font-bold border-b-2 border-brand-200 pb-1 hover:border-brand-600 transition-colors"
                >
                  私たちのMVV
                  <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-brand-50 px-4 sm:px-10 py-24 sm:py-36 border-y border-brand-100">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="02" en="Services" />
          <Reveal>
            <h2 className="font-anton uppercase leading-[0.92] text-ink text-4xl sm:text-6xl xl:text-7xl mb-3">
              Five crafts, <span className="text-brand-600">one purpose.</span>
            </h2>
            <p className="font-rounded font-bold text-ink/60 text-lg mb-12 sm:mb-16">
              5つの専門性で、挑戦を後押しする。
            </p>
          </Reveal>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s.no} delay={(i % 3) * 80}>
                <article className="group h-full rounded-3xl bg-white border border-brand-100 p-7 sm:p-8 transition-all duration-300 hover:border-brand-300 hover:-translate-y-1">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl grid place-items-center bg-brand-50 text-brand-600 group-hover:bg-brand-600 group-hover:text-white transition-colors">
                      <s.Icon className="w-6 h-6" strokeWidth={2} />
                    </div>
                    <span className="font-anton text-xl text-brand-200">{s.no}</span>
                  </div>
                  <h3 className="font-rounded font-bold text-xl sm:text-2xl text-ink mb-1 leading-snug">
                    {s.ja}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-ink/35 mb-4">
                    {s.en}
                  </p>
                  <p className="text-sm leading-loose text-ink/65 font-medium">{s.desc}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Member */}
      <section className="bg-white px-4 sm:px-10 py-24 sm:py-36">
        <div className="max-w-6xl mx-auto">
          <SectionTag no="03" en="Member" />
          <div className="flex flex-wrap items-end justify-between gap-6 mb-12 sm:mb-16">
            <Reveal>
              <h2 className="font-anton uppercase leading-[0.92] text-ink text-4xl sm:text-6xl xl:text-7xl">
                Meet the <span className="text-brand-600">team.</span>
              </h2>
              <p className="font-rounded font-bold text-ink/60 text-lg mt-3">
                挑戦を後押しする、Globexaの仲間たち。
              </p>
            </Reveal>
            <Reveal delay={120}>
              <Link
                to="/member"
                className="group inline-flex items-center gap-2 rounded-full border border-brand-200 text-brand-700 px-5 py-2.5 text-sm font-bold hover:bg-brand-600 hover:border-brand-600 hover:text-white transition-all"
              >
                メンバー紹介
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </Reveal>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {MEMBERS.map((m, i) => (
              <Reveal key={m.name} delay={(i % 3) * 90}>
                <article className="group h-full rounded-3xl bg-white border border-brand-100 overflow-hidden transition-all duration-300 hover:border-brand-300 hover:-translate-y-1">
                  <div className="relative aspect-[4/5] overflow-hidden bg-brand-50">
                    <img
                      src={m.photo}
                      alt={`${m.name}（${m.roleJa}）`}
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs font-bold uppercase tracking-[0.16em] text-brand-600 mb-1.5">
                      {m.roleJa}
                    </p>
                    <h3 className="font-rounded font-bold text-xl sm:text-2xl text-ink">{m.name}</h3>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 sm:px-8 pb-20 sm:pb-28">
        <div
          className="relative max-w-6xl mx-auto rounded-3xl overflow-hidden text-white text-center px-6 sm:px-10 py-20 sm:py-28"
          style={{ background: 'linear-gradient(150deg, #2E7BEF 0%, #1149B0 60%, #0A2A66 100%)' }}
        >
          <Reveal>
            <p className="font-rounded font-bold text-brand-200 text-base sm:text-lg mb-5">
              一緒に、未来を創りましょう。
            </p>
          </Reveal>
          <Reveal delay={80}>
            <h2 className="font-anton uppercase leading-[0.95] text-5xl sm:text-7xl xl:text-8xl mb-10">
              Let's talk.
            </h2>
          </Reveal>
          <Reveal delay={160}>
            <a
              href="mailto:globexa@saiyo-p.com"
              className="group inline-flex items-center gap-3 rounded-full bg-white text-brand-700 font-anton uppercase text-xl sm:text-3xl tracking-tight px-8 py-4 hover:-translate-y-0.5 transition-transform"
            >
              globexa@saiyo-p.com
              <ArrowUpRight className="w-6 h-6 sm:w-8 sm:h-8 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </Reveal>
        </div>
      </section>
    </>
  )
}
